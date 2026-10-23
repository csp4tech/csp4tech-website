// Shared index template for /solutions/ and /ai-apps/.
module.exports = function solutionsIndex(entries, section, products) {
  const groups = section.groups
    ? section.groups
        .map((g) => ({
          heading: g.heading,
          blurb: g.blurb,
          items: g.slugs.map((s) => entries.find((e) => e.slug === s)).filter(Boolean),
        }))
        .filter((g) => g.items.length)
    : [{ heading: null, blurb: null, items: entries }];

  return `
  <section class="product-hero">
    <div class="container">
      <p class="breadcrumb"><a href="/">Home</a><span>/</span>${section.label}</p>
      <div class="product-hero-icon-row">
        <span class="category-tag" style="margin-bottom:0;">${section.label}</span>
      </div>
      <h1>${section.indexH1}</h1>
      <p class="tagline lead" style="margin-bottom:24px;max-width:740px;">${section.indexLead}</p>
      <div class="hero-actions" style="justify-content:flex-start;margin-bottom:0;">
        <a href="/contact-us" class="btn btn-primary">Get a Free Consultation</a>
        <a href="/zoho-products/" class="btn btn-ghost">Browse Zoho apps</a>
      </div>
    </div>
  </section>

  ${groups
    .map(
      (g, i) => `
  <section${i % 2 === 1 ? ` class="section-alt"` : ""}>
    <div class="container">
      ${
        g.heading
          ? `<div class="section-head">
        <span class="kicker">${section.label}</span>
        <h2>${g.heading}</h2>
        ${g.blurb ? `<p>${g.blurb}</p>` : ""}
      </div>`
          : ""
      }
      <div class="grid grid-3">
        ${g.items
          .map(
            (e) => `
        <div class="card">
          <span class="kicker">${e.kicker}</span>
          <h3>${e.title}</h3>
          <p>${e.metaDescription}</p>
          <a href="${section.base}${e.slug}" class="btn btn-ghost btn-sm">Read more</a>
        </div>`
          )
          .join("")}
      </div>
    </div>
  </section>`
    )
    .join("")}

  <section${groups.length % 2 === 1 ? ` class="section-alt"` : ""}>
    <div class="container">
      <div class="cta-band">
        <h2>Not sure which of these is your problem?</h2>
        <p>Most clients arrive describing a symptom rather than a solution. Tell us what is slowing you down and we'll say which of these — if any — is the right starting point.</p>
        <a href="/contact-us" class="btn btn-accent">Book a Free Consultation</a>
      </div>
    </div>
  </section>`;
};
