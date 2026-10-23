// Shared template for the /solutions/ and /ai-apps/ detail pages. Both data
// sets (generator/data/solutions.js and generator/data/aiApps.js) share one
// shape, so one template renders both; `section` supplies the base path,
// breadcrumb label and the wording around the related-pages strip.
module.exports = function solutionPage(entry, siblings, products, section) {
  const others = siblings.filter((e) => e.slug !== entry.slug);
  const apps = entry.zohoApps
    .map((slug) => products.find((p) => p.slug === slug))
    .filter(Boolean);

  return `
  <section class="product-hero">
    <div class="container">
      <p class="breadcrumb"><a href="/">Home</a><span>/</span><a href="${section.base}">${section.label}</a><span>/</span>${entry.kicker}</p>
      <div class="product-hero-icon-row">
        <span class="category-tag" style="margin-bottom:0;">${entry.kicker}</span>
      </div>
      <h1>${entry.title}</h1>
      <p class="tagline lead" style="margin-bottom:24px;max-width:720px;">${entry.intro[0]}</p>
      <div class="hero-actions" style="justify-content:flex-start;margin-bottom:0;">
        <a href="/contact-us" class="btn btn-primary">Get a Free Consultation</a>
        <a href="${section.base}" class="btn btn-ghost">See all ${section.label.toLowerCase()}</a>
      </div>
    </div>
  </section>

  <section class="section-alt">
    <div class="container split-head">
      <div>
        <span class="kicker">Where it usually hurts</span>
        <h2>${section.problemsHeading}</h2>
      </div>
      <p style="margin-bottom:0;">${entry.intro[1]}</p>
    </div>
    <div class="container">
      <ul class="feature-list feature-list-2">
        ${entry.problems
          .map(
            (p) =>
              `<li><span class="check check-warn"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="8" x2="12" y2="13"/><line x1="12" y1="17" x2="12" y2="17"/></svg></span>${p}</li>`
          )
          .join("")}
      </ul>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="section-head">
        <span class="kicker">What we set up</span>
        <h2>What's included</h2>
      </div>
      <div class="grid grid-3 grid-3-fixed">
        ${entry.included
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

  ${
    apps.length
      ? `
  <section class="section-alt">
    <div class="container">
      <div class="section-head">
        <span class="kicker">Built on</span>
        <h2>The Zoho apps this usually involves</h2>
      </div>
      <div class="related-products">
        ${apps
          .map(
            (p) =>
              `<a href="/zoho-products/${p.slug}">${p.logo ? `<img src="/images/logos/${p.logo}" alt="" width="16" height="16" class="nav-app-icon">` : ""}${p.name}</a>`
          )
          .join("")}
      </div>
      <p style="font-size:0.84rem;color:var(--color-ink-soft);margin-top:16px;max-width:680px;">The exact app list depends on what you already run and what you need. We agree it with you before anything is licensed.</p>
    </div>
  </section>`
      : ""
  }

  <section>
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
  <section class="section-alt">
    <div class="container">
      <div class="section-head">
        <span class="kicker">${section.relatedKicker}</span>
        <h2>${section.relatedHeading}</h2>
      </div>
      <div class="related-products">
        ${others.map((e) => `<a href="${section.base}${e.slug}">${e.kicker}</a>`).join("")}
      </div>
    </div>
  </section>`
      : ""
  }

  <section>
    <div class="container">
      <div class="cta-band">
        <h2>Want a straight answer on whether this fits?</h2>
        <p>Tell us how the work runs today. We'll tell you what we would change, what we would leave alone, and what it would take.</p>
        <a href="/contact-us" class="btn btn-accent">Book a Free Consultation</a>
      </div>
    </div>
  </section>`;
};
