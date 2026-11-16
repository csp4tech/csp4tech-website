// vercel.json sets trailingSlash:false, so Vercel answers "/solutions/" with a
// redirect to "/solutions". A canonical, sitemap entry or structured-data URL
// that points at the redirecting form tells search engines the page lives at
// an address that immediately sends them elsewhere. Everything that writes a
// site URL runs through here, so the written form is always the final one.
//
// Only a single-segment directory path is affected ("/x/" -> "/x"); asset
// paths and deeper paths are left alone.
const SELF = /(https:\/\/www\.csp4tech\.com)?\/([a-z0-9-]+)\/(?=["#'<)\s]|$)/g;

function cleanPath(p) {
  return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
}

function cleanHtml(html) {
  return html.replace(SELF, (m, host, seg) => `${host || ""}/${seg}`);
}

module.exports = { cleanPath, cleanHtml };
