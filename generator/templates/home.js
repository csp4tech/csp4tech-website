const config = require("../data/config");
const faq = require("../data/faq");
const platforms = require("../data/platforms");
const integrations = require("../data/integrations");
const presence = require("../data/presence");

module.exports = function home(products, blogPosts) {
  const featured = products.filter((p) =>
    ["crm", "books", "people", "desk", "analytics", "inventory"].includes(p.slug)
  );
  const latestPosts = blogPosts.slice(-3).reverse();

  return `
  <section class="hero">
    <div class="container hero-inner has-media">
      <div class="hero-text">
        <img src="/images/zoho-partner-badge.png" alt="Zoho Authorized Partner badge" class="partner-badge" width="220" height="61">
        <h1>Zoho, set up the way your business <em>actually works</em></h1>
        <p class="lead">A Zoho Authorized Partner based in Beirut — implementation, migration, integrations and ongoing support across the full Zoho suite, for clients in Lebanon and worldwide, in Arabic or English.</p>
        <div class="hero-actions">
          <a href="/contact-us.html" class="btn btn-primary">Get a Free Consultation</a>
          <a href="/zoho-products/" class="btn btn-ghost">Browse Zoho Products</a>
        </div>
        <div class="pill-row">
          <span class="pill">Implementation &amp; Migration</span>
          <span class="pill">Arabic/English &amp; RTL</span>
          <span class="pill">Integrations &amp; APIs</span>
          <span class="pill">Training &amp; Support</span>
        </div>
      </div>
      <div class="hero-media">
        <!-- Decorative only: a stylised workspace, not a screenshot of any real
             system and not anyone's data. Drawn in CSS rather than shipped as an
             image so it stays sharp on every screen and costs no extra download.
             The three app icons are Zoho's own, from the partner icon pack. -->
        <div class="hero-visual" aria-hidden="true">
          <div class="hv-window">
            <div class="hv-titlebar"><span></span><span></span><span></span></div>
            <div class="hv-body">
              <div class="hv-rail">
                <div class="hv-rail-dot is-active"></div>
                <div class="hv-rail-dot"></div>
                <div class="hv-rail-dot"></div>
                <div class="hv-rail-dot"></div>
                <div class="hv-rail-dot"></div>
              </div>
              <div class="hv-canvas">
                <div class="hv-toolbar"><span class="hv-pill-wide"></span><span class="hv-pill-sm"></span></div>
                <div class="hv-board">
                  <div class="hv-col">
                    <span class="hv-col-head"></span>
                    <span class="hv-card"></span>
                    <span class="hv-card"></span>
                  </div>
                  <div class="hv-col">
                    <span class="hv-col-head is-accent"></span>
                    <span class="hv-card"></span>
                    <span class="hv-card is-tall"></span>
                  </div>
                  <div class="hv-col">
                    <span class="hv-col-head"></span>
                    <span class="hv-card"></span>
                  </div>
                </div>
                <div class="hv-chart">
                  <span style="--bar:46%"></span><span style="--bar:68%"></span><span style="--bar:54%"></span>
                  <span style="--bar:86%"></span><span style="--bar:72%"></span><span style="--bar:94%"></span>
                </div>
              </div>
            </div>
          </div>
          <div class="hv-chip hv-chip-a"><img src="/images/logos/crm.png" alt="" width="26" height="26"></div>
          <div class="hv-chip hv-chip-b"><img src="/images/logos/books.png" alt="" width="26" height="26"></div>
          <div class="hv-chip hv-chip-c"><img src="/images/logos/desk.png" alt="" width="26" height="26"></div>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <p class="text-center" style="font-weight:700;color:var(--color-ink-soft);margin-bottom:20px;">Trusted by businesses across Lebanon and beyond</p>
      <div class="trusted-marquee">
        <div class="trusted-track">
          ${config.trustedByClients
            .map((c) => `<div class="trusted-logo"><img src="/images/clients/${c.file}" alt="${c.name}" loading="lazy"></div>`)
            .join("")}
          ${config.trustedByClients
            .map((c) => `<div class="trusted-logo trusted-dup" aria-hidden="true"><img src="/images/clients/${c.file}" alt="" loading="lazy"></div>`)
            .join("")}
        </div>
      </div>
    </div>
  </section>

  <section class="section-alt">
    <div class="container">
      <div class="split-head">
        <div>
          <span class="kicker">Why CSP4TECH</span>
          <h2>A local partner, not an overseas support queue</h2>
        </div>
        <p class="split-head-aside">Implementation, migration, integrations and ongoing support — handled by the same Beirut team, in Arabic or English.</p>
      </div>
      <div class="grid grid-3">
        <div class="card"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div><h3>Certified &amp; ISO-aligned</h3><p>Certified Zoho consultants for CRM, Books, People, and Creator, working to ISO-aligned quality standards.</p></div>
        <div class="card"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div><h3>Local roots, global reach</h3><p>Arabic/English (RTL) experience and USD/LBP multi-currency, VAT-ready accounting expertise from our Lebanon base — plus remote delivery for clients anywhere.</p></div>
        <div class="card"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"/></svg></div><h3>Fast time-to-value</h3><p>Most implementations go live in 2–8 weeks, not months of scope creep.</p></div>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="section-head">
        <span class="kicker">What we do</span>
        <h2>Zoho services that cover the full lifecycle</h2>
      </div>
      <div class="grid grid-3">
        <div class="card"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 3 21 8 16 13"/><path d="M21 8H9a5 5 0 0 0-5 5v3"/><polyline points="8 21 3 16 8 11"/><path d="M3 16h5"/></svg></div><h3>Implementation &amp; Migration</h3><p>From first workflow to full go-live, including migrating off Salesforce, HubSpot, QuickBooks, or spreadsheets.</p></div>
        <div class="card"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg></div><h3>Customization &amp; Integrations</h3><p>Custom Zoho Creator apps, API integrations, and automations built around how your team actually works.</p></div>
        <div class="card"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div><h3>Training &amp; Support</h3><p>Hands-on training for your team plus ongoing support — a phone call away, not a ticket in a queue.</p></div>
      </div>
    </div>
  </section>

  <section class="section-alt">
    <div class="container">
      <div class="section-head">
        <span class="kicker">Popular apps</span>
        <h2>Zoho products we implement most</h2>
      </div>
      <div class="grid grid-3">
        ${featured
          .map(
            (p) => `
        <div class="card">
          ${p.logo ? `<img src="/images/logos/${p.logo}" alt="" class="product-logo" width="40" height="40">` : ""}
          <h3>${p.name}</h3>
          <p>${p.tagline}</p>
          <a href="/zoho-products/${p.slug}.html" class="btn btn-ghost btn-sm">Learn more</a>
        </div>`
          )
          .join("")}
      </div>
      <p class="text-center" style="margin-top:28px;"><a href="/zoho-products/" class="btn btn-primary">Browse all 39 Zoho apps</a></p>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="section-head">
        <span class="kicker">Connected stack</span>
        <h2>Works with the tools your team already uses</h2>
      </div>
      <div class="trusted-marquee">
        <div class="trusted-track">
          ${integrations
            .map((i) => `<div class="trusted-logo"><img src="/images/${i.dir}/${i.file}" alt="${i.name}" loading="lazy"></div>`)
            .join("")}
          ${integrations
            .map((i) => `<div class="trusted-logo trusted-dup" aria-hidden="true"><img src="/images/${i.dir}/${i.file}" alt="" loading="lazy"></div>`)
            .join("")}
        </div>
      </div>
      <p class="text-center" style="margin-top:18px;font-size:.85rem;color:var(--color-ink-soft);">Zoho and Odoo connect natively (or via Zoho Flow / Deluge / API) to the messaging, payments, and productivity tools shown above — this isn't an exhaustive list, just the ones we're asked about most.</p>
    </div>
  </section>

  <section class="section-dark">
    <div class="container">
      <div class="stat-band">
        <div class="stat-band-intro">
          <span class="kicker">By the numbers</span>
          <h2>Real Zoho implementation experience</h2>
        </div>
        <div class="stat-grid">
          <div><div class="stat-num">${config.stats.founded}</div><div class="stat-label">In business since</div></div>
          <div><div class="stat-num">${config.stats.projectsDelivered}</div><div class="stat-label">Businesses onboarded</div></div>
          <div><div class="stat-num">${config.stats.zohoAppsImplemented}</div><div class="stat-label">Zoho apps we implement</div></div>
          <div><div class="stat-num">${config.stats.industriesServed}</div><div class="stat-label">Industries served</div></div>
        </div>
      </div>
    </div>
  </section>

  ${
    presence.length
      ? (() => {
          const latest = presence[0];
          return `
  <section>
    <div class="container">
      <div class="section-head">
        <span class="kicker">Our presence</span>
        <h2>Where you'll find us</h2>
      </div>
      <div class="presence">
        <div class="presence-meta">
          <span class="presence-tag">${latest.role}</span>
          <h3>${latest.event} — ${latest.location}</h3>
          <p class="presence-sub">${latest.fullName} · ${latest.edition} · ${latest.period}</p>
          <p>${latest.blurb}</p>
        </div>
        <div class="presence-photos">
          ${latest.photos
            .map(
              (ph) => `
          <figure class="presence-photo">
            <img src="/images/presence/${ph.file}" alt="${ph.alt}" width="800" height="1067" loading="lazy">
            <figcaption>${ph.caption}</figcaption>
          </figure>`
            )
            .join("")}
        </div>
      </div>
    </div>
  </section>`;
        })()
      : ""
  }

  <section class="section-alt">
    <div class="container">
      <div class="section-head">
        <span class="kicker">From the blog</span>
        <h2>Practical Zoho guides, written by the team that implements them</h2>
      </div>
      <div class="grid grid-3">
        ${latestPosts
          .map(
            (b) => `
        <a href="/blog/${b.slug}.html" class="blog-card">
          <div class="body">
            <span class="meta">${new Date(b.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })} · ${b.readTime}</span>
            <h3>${b.title}</h3>
            <p style="font-size:.9rem;">${b.excerpt}</p>
            <span class="read-more">Read article →</span>
          </div>
        </a>`
          )
          .join("")}
      </div>
    </div>
  </section>

  <section>
    <div class="container" style="max-width:780px;text-align:center;">
      <p style="font-size:.85rem;color:var(--color-ink-soft);">Beyond our Zoho specialty, our team also has hands-on implementation experience with ${platforms.map((p) => p.name).join(", ")}.
      <a href="/platforms/" style="color:var(--color-primary);font-weight:600;">See other platforms →</a></p>
    </div>
  </section>

  <section class="section-alt">
    <div class="container" style="max-width:780px;">
      <div class="section-head">
        <span class="kicker">FAQ</span>
        <h2>Common questions before you get started</h2>
      </div>
      <div class="faq">
        ${faq
          .map(
            (item) => `
        <details>
          <summary>${item.q}</summary>
          <p>${item.a}</p>
        </details>`
          )
          .join("")}
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="cta-band">
        <h2>Get Started with Zoho</h2>
        <p>Tell us where your team is stuck today — we'll reply within one business day with a straightforward plan.</p>
        <a href="/contact-us.html" class="btn btn-accent">Book a Free Consultation</a>
      </div>
    </div>
  </section>`;
};
