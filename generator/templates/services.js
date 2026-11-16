// The /services hub. Lists every service page, in the order the work usually
// happens, then the industries and the non-Zoho platforms. Each card links to
// a page that says something specific; the hub itself stays short.
const { sizeAttrs } = require("../lib/imageSize");
const platforms = require("../data/platforms");
const config = require("../data/config");
const industriesSection = require("./industries");

const ICONS = {
  "zoho-consulting": `<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>`,
  "zoho-licenses": `<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 15h4M7 11h10"/>`,
  "zoho-implementation": `<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>`,
  "zoho-migration": `<path d="m16 3 4 4-4 4"/><path d="M20 7H4"/><path d="m8 21-4-4 4-4"/><path d="M4 17h16"/>`,
  "zoho-customization": `<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>`,
  "zoho-integration": `<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>`,
  "zoho-automation": `<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>`,
  "zoho-training": `<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>`,
  "zoho-support": `<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/>`,
  "zoho-audit": `<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><path d="M11 8v3l2 2"/>`,
};

function icon(slug) {
  return `<div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[slug] || ICONS["zoho-implementation"]}</svg></div>`;
}

module.exports = function services(entries, section) {
  const groups = section.groups.map((g) => ({
    heading: g.heading,
    blurb: g.blurb,
    items: g.slugs.map((s) => entries.find((e) => e.slug === s)).filter(Boolean),
  }));

  return `
  <section class="hero" style="padding-bottom:36px;">
    <div class="container hero-inner has-media">
      <div class="hero-text">
        <span class="eyebrow">Services</span>
        <h1>${section.indexH1}</h1>
        <p class="lead">${section.indexLead}</p>
        <div class="hero-actions" style="justify-content:flex-start;">
          <a href="/contact-us" class="btn btn-primary" data-open-contact>Get a Free Consultation</a>
          <a href="/services/zoho-implementation" class="btn btn-ghost">How an implementation runs</a>
        </div>
      </div>
      <div class="hero-media">
        <img src="/images/illustrations/services.svg" alt="Illustration of a person walking through a step-by-step process" width="744" height="800" loading="eager">
      </div>
    </div>
  </section>

  ${groups
    .map(
      (g, i) => `
  <section${i % 2 === 1 ? ` class="section-alt"` : ""}>
    <div class="container">
      <div class="section-head" style="text-align:left;margin:0 0 28px;max-width:none;">
        <span class="kicker">${section.label}</span>
        <h2>${g.heading}</h2>
        ${g.blurb ? `<p style="max-width:720px;">${g.blurb}</p>` : ""}
      </div>
      <div class="grid grid-3">
        ${g.items
          .map(
            (e) => `
        <a href="${section.base}${e.slug}" class="card card-link-block">
          ${icon(e.slug)}
          <h3>${e.kicker === "Audit and Repair" ? "Audit and repair" : `Zoho ${e.kicker.toLowerCase()}`}</h3>
          <p>${e.cardText}</p>
          <span class="card-more">Read more <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span>
        </a>`
          )
          .join("")}
      </div>
    </div>
  </section>`
    )
    .join("")}

  <section>
    <div class="container">
      <div class="section-head">
        <span class="kicker">How we work</span>
        <h2>Agreed in writing, tested with your own scenarios, then live</h2>
        <p>Every project, whatever its size, follows the same shape. The full stage-by-stage plan is on each service page.</p>
      </div>
      <div class="grid grid-4">
        <div class="card"><h3>1. Discovery</h3><p style="font-size:.88rem;">We sit with the people who do the work and write down how it really runs.</p></div>
        <div class="card"><h3>2. Sign-off</h3><p style="font-size:.88rem;">You approve the written scope before anything is configured.</p></div>
        <div class="card"><h3>3. Build and test</h3><p style="font-size:.88rem;">Configured in your own account, then run through your real cases by your own team.</p></div>
        <div class="card"><h3>4. Go-live and support</h3><p style="font-size:.88rem;">Training by role, an agreed cut-over date, and a team still on the phone afterwards.</p></div>
      </div>
      <p class="text-center" style="margin-top:28px;"><a href="/services/zoho-implementation#how-it-works" class="btn btn-primary">See the full implementation plan</a></p>
    </div>
  </section>

  ${industriesSection()}

  <section>
    <div class="container">
      <div class="section-head">
        <span class="kicker">Other platforms</span>
        <h2>Also implemented beyond our Zoho specialty</h2>
      </div>
      <p style="max-width:640px;margin-bottom:24px;">Zoho is where we are an official Authorized Partner and where most of our work happens. Our team also has hands-on implementation experience, not a formal certification, with a few other platforms, for clients already using or evaluating them.</p>
      <div class="grid grid-4">
        ${platforms
          .map(
            (p) => `
        <a href="/platforms/${p.slug}" class="card">
          ${p.logo ? `<img src="/images/platform-logos/${p.logo}" alt="" class="platform-logo"${sizeAttrs(`platform-logos/${p.logo}`)} style="height:28px;margin-bottom:10px;">` : ""}
          <h3 style="font-size:1.05rem;">${p.name}</h3>
          <p style="font-size:.85rem;">${p.tagline}</p>
        </a>`
          )
          .join("")}
      </div>
    </div>
  </section>

  <section class="section-alt">
    <div class="container">
      <div class="cta-band">
        <h2>Not sure where to start?</h2>
        <p>Tell us what is broken today: spreadsheets, a CRM you have outgrown, invoices that take too long. We will recommend the right first step, and it is free to ask. ${config.regions.hq}, in Arabic or English.</p>
        <a href="/contact-us" class="btn btn-accent" data-open-contact>Book a Free Consultation</a>
      </div>
    </div>
  </section>`;
};
