// Server-side lead endpoint.
//
// WHY THIS EXISTS. The form used to POST straight from the visitor's browser
// to crm.zoho.com, which meant Zoho's two form tokens had to sit in the page
// source for anyone to read. Spam tools scrape those once and then POST to
// Zoho directly, forever, from anywhere - never touching the website. Every
// check we had (honeypot, minimum fill time) ran in the browser, so for those
// bots it simply never executed. Two spam leads a day were arriving that way.
//
// Now the browser posts here, this function checks the submission and
// forwards it to Zoho with the tokens read from environment variables. The
// tokens never reach the page, so there is nothing left to scrape.
//
// Required environment variables (set in Vercel, not in this repo):
//   ZOHO_FORM_ID     - the xnQsjsdp value from the Zoho webform
//   ZOHO_FORM_TOKEN  - the xmIwtLD value
// Missing either and the function refuses rather than silently dropping
// genuine enquiries.

const ZOHO_ENDPOINT = "https://crm.zoho.com/crm/WebToLeadForm";
const SITE = "https://www.csp4tech.com";
const ALLOWED_ORIGINS = [SITE, "https://csp4tech.com"];

// Fields Zoho knows about. Anything else a bot invents is dropped rather than
// passed along.
const FIELDS = ["First Name", "Last Name", "Email", "Phone", "Company", "Description"];
const REQUIRED = ["First Name", "Last Name", "Email", "Phone", "Company", "Description"];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const URL_RE = /(https?:\/\/|www\.)/i;

// Best-effort rate limit. Serverless instances are recycled, so this only
// holds within a warm instance - it is a speed bump for a burst from one
// address, not a guarantee. The content checks below do the real work.
const seen = new Map();
const WINDOW_MS = 10 * 60 * 1000;
// Deliberately loose. This counts every attempt, including ones rejected for
// a missing field, so someone correcting a typo three times must not trip it.
// The origin check and the content checks do the real work; this only stops
// one address hammering the endpoint.
const MAX_PER_WINDOW = 25;

function rateLimited(ip) {
  if (!ip) return false;
  const now = Date.now();
  const hits = (seen.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  seen.set(ip, hits);
  if (seen.size > 5000) seen.clear();          // never grow without bound
  return hits.length > MAX_PER_WINDOW;
}

function parseBody(req) {
  let b = req.body;
  if (!b) return Object.create(null);
  // Some runtimes hand over a Buffer for content types they do not parse.
  if (typeof Buffer !== "undefined" && Buffer.isBuffer(b)) b = b.toString("utf8");
  if (typeof b === "object") return Object.assign(Object.create(null), b);
  const out = Object.create(null);
  String(b).split("&").forEach((pair) => {
    if (!pair) return;
    const i = pair.indexOf("=");
    const k = decodeURIComponent((i < 0 ? pair : pair.slice(0, i)).replace(/\+/g, " "));
    const v = i < 0 ? "" : decodeURIComponent(pair.slice(i + 1).replace(/\+/g, " "));
    out[k] = v;
  });
  return out;
}

// Everything the two spam leads we actually received had in common, plus the
// usual form-spam signatures. Each returns a reason so rejections can be read
// in the Vercel logs rather than guessed at.
function spamReason(d) {
  const first = (d["First Name"] || "").trim();
  const last = (d["Last Name"] || "").trim();
  const company = (d.Company || "").trim();
  const desc = (d.Description || "").trim();
  const email = (d.Email || "").trim();
  const phone = (d.Phone || "").trim();

  if (d.aG9uZXlwb3Q) return "honeypot filled";
  if (d.website) return "second honeypot filled";
  if (URL_RE.test(desc)) return "links in message";
  if (URL_RE.test(first) || URL_RE.test(last) || URL_RE.test(company)) return "links in a name field";
  if (first && first.toLowerCase() === last.toLowerCase()) return "first name equals last name";
  if (desc.length > 2000) return "message too long";
  if (/[Ѐ-ӿ一-鿿]/.test(desc)) return "message not in a language we work in";
  if (!EMAIL_RE.test(email)) return "email not valid";
  if (phone.replace(/\D/g, "").length < 7) return "phone too short";
  if (/^(google|test|asdf|n\/a|na)$/i.test(company)) return "placeholder company";
  return null;
}

module.exports = async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("Referrer-Policy", "same-origin");
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  // A browser submitting our own form always sends one of these, pointing at
  // this site. A script posting blind usually sends neither.
  const origin = req.headers.origin || "";
  const referer = req.headers.referer || "";
  // A prefix test is not enough: "https://csp4tech.com.evil.com/" starts with
  // "https://csp4tech.com". The character after the origin has to be a path
  // separator or the end of the string.
  const refererFromUs = ALLOWED_ORIGINS.some(
    (o) => referer === o || referer.indexOf(o + "/") === 0
  );
  const fromUs =
    (origin && ALLOWED_ORIGINS.indexOf(origin) !== -1) ||
    (!origin && referer && refererFromUs);
  if (!fromUs) return res.status(403).json({ ok: false, error: "Forbidden" });

  const data = parseBody(req);
  const wantsJson = (req.headers.accept || "").indexOf("application/json") !== -1;
  const done = (ok, error) => {
    if (wantsJson) return res.status(ok ? 200 : 400).json({ ok, error: error || undefined });
    // No-JavaScript path: a normal form POST, so answer with a redirect.
    res.writeHead(303, { Location: ok ? "/thank-you" : "/contact-us?error=1" });
    return res.end();
  };

  const ip = (req.headers["x-forwarded-for"] || "").split(",")[0].trim();
  if (rateLimited(ip)) {
    console.warn("lead rejected: rate limit", ip);
    return done(false, "Too many submissions. Please try again later, or message us on WhatsApp.");
  }

  // Submitted faster than a person can type. The page stamps this on load.
  const loadedAt = parseInt(data.t, 10);
  if (loadedAt && Date.now() - loadedAt < 2500) {
    console.warn("lead rejected: submitted too fast");
    return done(true);                          // look successful to the bot
  }

  for (const f of REQUIRED) {
    if (!String(data[f] || "").trim()) return done(false, "Please fill in all required fields.");
  }

  const reason = spamReason(data);
  if (reason) {
    console.warn(
      "lead rejected:", reason,
      "| email:", String(data.Email || "").replace(/[\r\n]/g, " ").slice(0, 120),
      "| ip:", ip
    );
    return done(true);                          // never tell a bot why
  }

  const id = process.env.ZOHO_FORM_ID;
  const token = process.env.ZOHO_FORM_TOKEN;
  if (!id || !token) {
    console.error("ZOHO_FORM_ID / ZOHO_FORM_TOKEN are not set");
    return done(false, "We could not send that just now. Please email info@csp4tech.com.");
  }

  const body = new URLSearchParams();
  body.set("xnQsjsdp", id);
  body.set("xmIwtLD", token);
  body.set("actionType", "TGVhZHM=");           // base64 "Leads"
  body.set("returnURL", SITE + "/thank-you");
  body.set("zc_gad", "");
  body.set("aG9uZXlwb3Q", "");
  FIELDS.forEach((f) => body.set(f, String(data[f] || "").trim()));

  try {
    const zoho = await fetch(ZOHO_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        // The submission did originate on that page; this is the proxy
        // passing that along, which is what Zoho matches the form's
        // registered Form Location URL against.
        Referer: SITE + "/contact-us",
      },
      body: body.toString(),
      redirect: "manual",                        // Zoho answers with a 302 to returnURL
    });
    // 2xx or the redirect to returnURL both mean Zoho took it.
    if (zoho.status >= 400) {
      console.error("zoho rejected the lead:", zoho.status);
      return done(false, "We could not send that just now. Please email info@csp4tech.com.");
    }
  } catch (err) {
    console.error("zoho request failed:", err && err.message);
    return done(false, "We could not send that just now. Please email info@csp4tech.com.");
  }

  return done(true);
};
