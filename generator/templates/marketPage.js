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
