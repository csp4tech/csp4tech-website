// Detail template for /services/<service>.
//
// The stage-by-stage plan is the point of these pages: it is the one thing a
// buyer cannot get from a product page, and it is what makes "implementation"
// mean something specific rather than "we set it up". Every stage carries a
// "you get" line so the reader can see what changes hands at each step.
const config = require("../data/config");

const CHECK = `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>`;
const WARN = `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="8" x2="12" y2="13"/><line x1="12" y1="17" x2="12" y2="17"/></svg>`;

// Plain question-and-answer rows near the top. Search engines lift blocks
// like this into featured snippets and AI answers; a buyer who reads one
// thing reads this.
function atAGlance(rows) {
  if (!rows || !rows.length) return "";
  return `
  <section>
    <div class="container" style="max-width:860px;">
      <div class="section-head" style="text-align:left;margin:0 0 24px;max-width:none;">
        <span class="kicker">At a glance</span>
        <h2>The short answers</h2>
      </div>
      <dl class="glance">
        ${rows.map(([q, a]) => `<dt>${q}</dt><dd>${a}</dd>`).join("")}
      </dl>
    </div>
  </section>`;
}

function plan(p) {
  if (!p || !p.steps || !p.steps.length) return "";
  return `
  <section class="section-alt" id="how-it-works">
    <div class="container">
      <div class="section-head" style="margin-bottom:36px;">
        <span class="kicker">The plan</span>
        <h2>${p.heading}</h2>
        ${p.lead ? `<p>${p.lead}</p>` : ""}
      </div>
      <ol class="plan">
        ${p.steps
          .map(
            (s, i) => `
        <li class="plan-step">
          <div class="plan-num" aria-hidden="true">${i + 1}</div>
          <div class="plan-body">
            <h3>${s.name}</h3>
            <p>${s.text}</p>
            ${s.youGet ? `<p class="plan-get"><span>You get</span>${s.youGet}</p>` : ""}
          </div>
        </li>`
          )
          .join("")}
      </ol>
    </div>
  </section>`;
}

module.exports = function servicePage(entry, siblings, products, section) {
  const others = siblings.filter((e) => e.slug !== entry.slug);
  const apps = (entry.zohoApps || [])
    .map((slug) => products.find((p) => p.slug === slug))
    .filter(Boolean);

  return `
  <section class="product-hero">
    <div class="container">
      <p class="breadcrumb"><a href="/">Home</a><span>/</span><a href="${section.base}">${section.label}</a><span>/</span>${entry.kicker}</p>
      <div class="product-hero-icon-row">
        <span class="category-tag" style="margin-bottom:0;">${entry.kicker}</span>
        <span class="category-tag category-tag-soft" style="margin-bottom:0;">Zoho Authorized Partner</span>
      </div>
      <h1>${entry.title}</h1>
      <p class="tagline lead" style="margin-bottom:24px;max-width:720px;">${entry.intro[0]}</p>
      <div class="hero-actions" style="justify-content:flex-start;margin-bottom:0;">
        <a href="/contact-us" class="btn btn-primary" data-open-contact>Get a Free Consultation</a>
        <a href="#how-it-works" class="btn btn-ghost">See how it runs</a>
      </div>
      <p class="hero-note">${config.regions.hq} · on site across Lebanon, remote across ${config.regions.short.replace("Lebanon, ", "")} · Arabic and English</p>
    </div>
  </section>

  ${atAGlance(entry.glance)}

  <section class="section-alt">
    <div class="container split-head">
      <div>
        <span class="kicker">Is this you?</span>
        <h2>${entry.signsHeading}</h2>
      </div>
      <p style="margin-bottom:0;">${entry.intro[1]}</p>
    </div>
    <div class="container">
      <ul class="feature-list feature-list-2">
        ${entry.signs.map((s) => `<li><span class="check check-warn">${WARN}</span>${s}</li>`).join("")}
      </ul>
    </div>
  </section>

  ${plan(entry.plan)}

  <section>
    <div class="container">
      <div class="section-head">
        <span class="kicker">Deliverables</span>
        <h2>${entry.includedHeading}</h2>
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
    entry.limits && entry.limits.length
      ? `
  <section class="section-alt">
    <div class="container" style="max-width:860px;">
      <div class="section-head" style="text-align:left;margin:0 0 20px;max-width:none;">
        <span class="kicker">Straight talk</span>
        <h2>${entry.limitsHeading}</h2>
      </div>
      <ul class="feature-list">
        ${entry.limits.map((l) => `<li><span class="check">${CHECK}</span>${l}</li>`).join("")}
      </ul>
    </div>
  </section>`
      : ""
  }

  ${
    apps.length
      ? `
  <section>
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
    entry.related && entry.related.length
      ? `
  <section>
    <div class="container">
      <div class="section-head">
        <span class="kicker">Read next</span>
        <h2>Related pages</h2>
      </div>
      <div class="related-products">
        ${entry.related.map((r) => `<a href="${r.href}">${r.label}</a>`).join("")}
      </div>
    </div>
  </section>`
      : ""
  }

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
        ${others.map((e) => `<a href="${section.base}${e.slug}">Zoho ${e.kicker.toLowerCase()}</a>`).join("")}
      </div>
    </div>
  </section>`
      : ""
  }

  <section>
    <div class="container">
      <div class="cta-band">
        <h2>Want a straight answer on whether this is what you need?</h2>
        <p>Tell us how the work runs today. We will tell you what we would do first, what we would leave alone, and what it would take.</p>
        <a href="/contact-us" class="btn btn-accent" data-open-contact>Book a Free Consultation</a>
      </div>
    </div>
  </section>`;
};
