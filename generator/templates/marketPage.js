// Detail template for /markets/<country>.
//
// The facts strip at the top is the point of these pages. It is researched,
// country-specific and verifiable — which is what separates a market page
// worth publishing from a doorway page with the country name swapped in.
const config = require("../data/config");

function factsStrip(f) {
  const items = [
    ["Zoho data centre", f.dataCentre],
    ["Currency", f.currency],
    ["Working week", f.week],
    ["Languages", f.languages],
  ];
  return `
  <div class="market-facts">
    ${items
      .map(
        ([label, value]) => `
    <div class="mf-item">
      <span class="mf-label">${label}</span>
      <span class="mf-value">${value}</span>
    </div>`
      )
      .join("")}
  </div>`;
}

// --- Optional blocks. A market that has no data for one renders nothing. ---

// A plain question-and-answer summary near the top. Search engines lift blocks
// like this into featured snippets and AI answers, and a buyer who only reads
// one thing reads this.
function atAGlance(rows, country) {
  if (!rows || !rows.length) return "";
  return `
  <section>
    <div class="container" style="max-width:860px;">
      <div class="section-head" style="text-align:left;margin:0 0 24px;max-width:none;">
        <span class="kicker">At a glance</span>
        <h2>Zoho in ${country}: the short answer</h2>
      </div>
      <dl class="glance">
        ${rows.map(([q, a]) => `<dt>${q}</dt><dd>${a}</dd>`).join("")}
      </dl>
    </div>
  </section>`;
}

// The sourced numbers. Dated and attributed on purpose: an undated tax figure
// on a consulting site is a liability, and the date is what makes it credible.
function complianceTable(c, country) {
  if (!c || !c.rows || !c.rows.length) return "";
  return `
  <section class="section-alt">
    <div class="container" style="max-width:860px;">
      <div class="section-head" style="text-align:left;margin:0 0 10px;max-width:none;">
        <span class="kicker">The numbers</span>
        <h2>What ${country} actually requires</h2>
      </div>
      <p class="compliance-meta">Checked ${c.asOf} against <a href="${c.sourceUrl}" target="_blank" rel="noopener">${c.sourceLabel}</a>. We re-check when the budget law moves.</p>
      <table class="compliance-table">
        <tbody>
          ${c.rows.map(([k, v]) => `<tr><th scope="row">${k}</th><td>${v}</td></tr>`).join("")}
        </tbody>
      </table>
      ${c.note ? `<p class="compliance-note">${c.note}</p>` : ""}
    </div>
  </section>`;
}

// Where we go and who we already do this for.
function onTheGround(g, country) {
  if (!g) return "";
  const chips = (items) => `<div class="ground-chips">${items.map((i) => `<span>${i}</span>`).join("")}</div>`;
  return `
  <section>
    <div class="container">
      <div class="grid grid-2" style="gap:36px;">
        <div>
          <h2 class="ground-head">Where we work in ${country}</h2>
          ${chips(g.cities)}
          <p class="ground-note">${g.citiesNote}</p>
        </div>
        <div>
          <h2 class="ground-head">Sectors we already run</h2>
          ${chips(g.sectors)}
          <p class="ground-note">${g.sectorsNote}</p>
        </div>
      </div>
    </div>
  </section>`;
}

module.exports = function marketPage(entry, siblings, products, section) {
  const others = siblings.filter((e) => e.slug !== entry.slug);
  const apps = entry.zohoApps.map((s) => products.find((p) => p.slug === s)).filter(Boolean);

  return `
  <section class="product-hero">
    <div class="container">
      <p class="breadcrumb"><a href="/">Home</a><span>/</span><a href="${section.base}">${section.label}</a><span>/</span>${entry.country}</p>
      <div class="product-hero-icon-row">
        <span class="category-tag" style="margin-bottom:0;">${entry.kicker}</span>
      </div>
      <h1>${entry.title}</h1>
      <p class="tagline lead" style="margin-bottom:24px;max-width:760px;">${entry.intro[0]}</p>
      <div class="hero-actions" style="justify-content:flex-start;margin-bottom:0;">
        <a href="/contact-us" class="btn btn-primary">Get a Free Consultation</a>
        <a href="https://wa.me/${config.whatsapp}" class="btn btn-ghost" target="_blank" rel="noopener">Message us on WhatsApp</a>
      </div>
    </div>
  </section>

  <section class="section-alt">
    <div class="container">
      ${factsStrip(entry.facts)}
      <p style="max-width:760px;margin-top:26px;">${entry.intro[1]}</p>
    </div>
  </section>

  ${atAGlance(entry.atAGlance, entry.country)}

  <section>
    <div class="container">
      <div class="section-head">
        <span class="kicker">What is different here</span>
        <h2>${entry.country}: the parts that change the build</h2>
      </div>
      <div class="grid grid-2">
        ${entry.local
          .map(
            (item) => `
        <div class="card">
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </div>`
          )
          .join("")}
      </div>
    </div>
  </section>

  ${complianceTable(entry.compliance, entry.country)}

  ${onTheGround(entry.onTheGround, entry.country)}

  <section class="section-alt">
    <div class="container split-head">
      <div>
        <span class="kicker">Zoho</span>
        <h2>Zoho implementation for ${entry.country}</h2>
      </div>
      <p style="margin-bottom:0;">${entry.zoho}</p>
    </div>
    ${
      apps.length
        ? `
    <div class="container">
      <div class="related-products">
        ${apps
          .map(
            (p) =>
              `<a href="/zoho-products/${p.slug}">${p.logo ? `<img src="/images/logos/${p.logo}" alt="" width="16" height="16" class="nav-app-icon" loading="lazy" decoding="async">` : ""}${p.name}</a>`
          )
          .join("")}
      </div>
    </div>`
        : ""
    }
  </section>

  <section id="software">
    <div class="container split-head">
      <div>
        <span class="kicker">Software &amp; AI</span>
        <h2>Custom software and AI for ${entry.country}</h2>
      </div>
      <p style="margin-bottom:0;">${entry.software}</p>
    </div>
    <div class="container">
      <div class="related-products">
        <a href="/ai-apps/custom-software-development">Custom software</a>
        <a href="/ai-apps/web-app-development">Web apps</a>
        <a href="/ai-apps/mobile-app-development">Mobile apps</a>
        <a href="/ai-apps/ai-agent-development">AI agents</a>
        <a href="/ai-apps/ai-chatbot-development">Chatbots</a>
        <a href="/ai-apps/ai-document-processing">Document AI</a>
      </div>
    </div>
  </section>

  <section class="section-alt">
    <div class="container faq" style="max-width:760px;">
      <div class="section-head" style="text-align:left;margin:0 0 24px;max-width:none;">
        <span class="kicker">FAQ</span>
        <h2>Common questions</h2>
      </div>
      ${entry.faqs
        .map(
          (f) => `
      <details>
        <summary>${f.q}</summary>
        <p>${f.a}</p>
      </details>`
        )
        .join("")}
    </div>
  </section>

  ${
    others.length
      ? `
  <section>
    <div class="container">
      <div class="section-head">
        <span class="kicker">${section.relatedKicker}</span>
        <h2>${section.relatedHeading}</h2>
      </div>
      <div class="related-products">
        ${others.map((e) => `<a href="${section.base}${e.slug}">${e.country}</a>`).join("")}
      </div>
    </div>
  </section>`
      : ""
  }

  <section${others.length ? ` class="section-alt"` : ""}>
    <div class="container">
      <div class="cta-band">
        <h2>Working in ${entry.country}?</h2>
        <p>Tell us how the business runs today and we will tell you what we would set up, what we would leave alone, and what it would take.</p>
        <a href="/contact-us" class="btn btn-accent">Book a Free Consultation</a>
      </div>
    </div>
  </section>`;
};
