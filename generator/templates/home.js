const { sizeAttrs } = require("../lib/imageSize");
const config = require("../data/config");
const faq = require("../data/faq");
const platforms = require("../data/platforms");
const integrations = require("../data/integrations");
const presence = require("../data/presence");
const industriesSection = require("./industries");

module.exports = function home(products, blogPosts) {
  // Shown in this order. Payroll gets its own card text below: Zoho Payroll
  // does not cover Lebanon, and the homepage must not suggest it does.
  const featured = ["crm", "books", "inventory", "people", "payroll", "creator", "desk", "analytics"]
    .map((slug) => products.find((p) => p.slug === slug))
    .filter(Boolean);
  const cardText = (p) =>
    p.slug === "payroll"
      ? "Salary runs, deductions and payslips for teams in the Gulf. For Lebanon, we build payroll on Zoho People and Creator."
      : p.tagline;
  const latestPosts = blogPosts.slice(-3).reverse();

  return `
  <section class="hero hero-photo">
    <!-- Full-bleed hero backdrop. Decorative, so alt="" and aria-hidden: the
         headline carries the meaning. Served as <picture> rather than a CSS
         background so it can carry width/height (no layout shift),
         fetchpriority (it is the largest contentful paint element) and a WebP
         source with a JPEG fallback. The artwork is used exactly as the
         client supplied it, unedited. -->
    <div class="hero-bg" aria-hidden="true">
      <picture>
        <source type="image/webp" sizes="100vw"
                srcset="/images/hero/hero-bg-1000.webp 1000w, /images/hero/hero-bg-1600.webp 1600w">
        <img src="/images/hero/hero-bg-1600.jpg" alt="" width="1600" height="900"
             sizes="100vw"
             srcset="/images/hero/hero-bg-1000.jpg 1000w, /images/hero/hero-bg-1600.jpg 1600w"
             fetchpriority="high" decoding="async">
      </picture>
    </div>
    <div class="container hero-inner has-media">
      <div class="hero-text">
        <img src="/images/zoho-partner-badge.png" alt="Zoho Authorized Partner badge" class="partner-badge" width="220" height="61">
        <h1>Zoho Consulting &amp; Implementation <em>Your Team Will Actually Use</em></h1>
        <p class="lead">A Zoho Authorized Partner headquartered in Beirut — implementation, migration, integrations and ongoing support across the full Zoho suite, for clients in Lebanon, the Gulf, Iraq and North Africa, in Arabic or English.</p>
        <!-- Step one of a two-step enquiry. These inputs deliberately carry no
             name attribute, so submitting navigates to /contact-us with a
             clean URL and no personal data in the query string. main.js hands
             the two values over in sessionStorage instead and the contact page
             prefills itself from that. With JavaScript off the form still
             works - it just lands on the contact page empty. -->
        <form class="hero-lead" action="/contact-us" method="get" data-hero-lead novalidate>
          <div class="hero-lead-grid">
            <div class="hero-lead-row">
              <label for="heroFirstName">First name</label>
              <input id="heroFirstName" type="text" autocomplete="given-name" placeholder="Rami" aria-describedby="heroLeadNote">
            </div>
            <div class="hero-lead-row">
              <label for="heroEmail">Work email</label>
              <input id="heroEmail" type="email" autocomplete="email" placeholder="rami@company.com" aria-describedby="heroLeadNote">
            </div>
          </div>
          <button type="submit" class="btn btn-primary hero-lead-submit">Book a Free Consultation</button>
          <p class="hero-lead-note" id="heroLeadNote">Step 1 of 2. Next, you&rsquo;ll finish a short consultation form.</p>
          <p class="hero-lead-status" data-hero-lead-status role="status" aria-live="polite"></p>
        </form>
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
          <p>${cardText(p)}</p>
          <a href="/zoho-products/${p.slug}" class="btn btn-ghost btn-sm">Learn more</a>
        </div>`
          )
          .join("")}
      </div>
      <p class="text-center" style="margin-top:28px;"><a href="/zoho-products/" class="btn btn-primary">Browse all 39 Zoho apps</a></p>
    </div>
  </section>

  <!-- The CRM demo used to sit beside the headline at 520px, where it was
       decorative and too small to read. Here it is the point of the section,
       so: full width at its native 1040px, no longer aria-hidden, the float
       animation switched off (a large element drifting is a distraction, not
       a flourish). Provenance is carried by the section itself: the kicker
       reads "Zoho CRM", the heading names the product, and the recording
       shows Zoho's own branded interface and its own demo data - so nothing
       here reads as a CSP4TECH product or a client's live system. The
       video keeps its aria-label for assistive tech.
       Loading is unchanged: the poster paints immediately and the file is
       fetched only after the page load event (see main.js). -->
  <section class="crm-showcase">
    <div class="container">
      <div class="section-head">
        <span class="kicker">Zoho CRM</span>
        <h2>The CRM every department can actually work from</h2>
        <p>Not just a tool for the sales team. Sales, support, finance and HR working from one customer record instead of four, with the routine steps automated and Zoho&rsquo;s own AI handling the parts nobody enjoys.</p>
      </div>

      <figure class="crm-demo app-demo">
        <div class="hv-window">
          <div class="hv-titlebar"><span></span><span></span><span></span></div>
          <video
            class="hv-video"
            data-src="/images/hero/crm-demo.mp4"
            data-src-webm="/images/hero/crm-demo.webm"
            poster="/images/hero/crm-demo-poster.webp"
            width="1920" height="1080"
            muted loop playsinline preload="none"
            aria-label="Screen recording of Zoho CRM"></video>
        </div>
      </figure>

      <div class="grid grid-3">
        <div class="card">
          <div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
          <h3>One record, every department</h3>
          <p>Sales works the pipeline, support sees the whole history, finance raises the invoice from the same deal. Nobody re-types a customer into a second system, and nobody argues about which copy is right.</p>
        </div>
        <div class="card">
          <div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div>
          <h3>Automation that removes the admin</h3>
          <p>Workflow rules, approval chains and blueprints assign the lead, chase the follow-up and hold a deal at a stage until the right step is actually done &mdash; so your process stops depending on somebody remembering.</p>
        </div>
        <div class="card">
          <div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z"/><path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15z"/></svg></div>
          <h3>Zia, the AI built into Zoho</h3>
          <p>Zia scores leads, flags unusual activity, suggests when someone is most likely to answer and drafts replies. It assists; a person still decides. We switch it on for the work where it is reliable and leave it off where it is not.</p>
        </div>
      </div>

      <p class="crm-showcase-cta"><a href="/zoho-products/crm" class="btn btn-primary">See what Zoho CRM does</a></p>
    </div>
  </section>

  <!-- Zia AI and Zoho MCP. Facts are from Zoho's own pages (zoho.com/zia,
       zoho.com/zia/agents) and Zoho's launch announcement; nothing here
       states pricing or availability dates, which Zoho has changed before.
       The chat panel is an illustration with invented demo data, labelled
       as such, and hidden from assistive tech in favour of a plain summary. -->
  <section class="zia-section" id="zia-ai">
    <div class="zia-glow zia-glow-a" aria-hidden="true"></div>
    <div class="zia-glow zia-glow-b" aria-hidden="true"></div>
    <div class="container">
      <div class="section-head zia-head">
        <span class="zia-kicker"><span class="zia-spark" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.2 6.1L20 10l-5.8 1.9L12 18l-2.2-6.1L4 10l5.8-1.9L12 2z"/></svg></span>Zia AI &amp; Zoho MCP</span>
        <h2>AI that works <span class="zia-grad">inside</span> your Zoho, not beside it</h2>
        <p>Zia is the AI built into Zoho. It reads the same records your team does, answers in plain words, and can act: through agents that run the routine work, and through Zoho MCP, which lets assistants like Claude and ChatGPT work with your Zoho data safely.</p>
      </div>

      <div class="zia-grid">
        <figure class="zia-demo">
          <p class="visually-hidden">Illustration: a user asks Zia which deals in negotiation have not moved in 14 days. Zia lists four deals, and a follow-up agent drafts emails that wait for the user to review before sending.</p>
          <div class="zia-window" aria-hidden="true">
            <div class="zia-window-bar">
              <span class="zia-dot"></span><span class="zia-dot"></span><span class="zia-dot"></span>
              <span class="zia-window-title"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.2 6.1L20 10l-5.8 1.9L12 18l-2.2-6.1L4 10l5.8-1.9L12 2z"/></svg> Ask Zia</span>
            </div>
            <div class="zia-chat">
              <div class="zia-msg zia-msg-user">Which deals in Negotiation haven't moved in 14 days?</div>
              <div class="zia-msg zia-msg-ai">
                <span class="zia-avatar"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.2 6.1L20 10l-5.8 1.9L12 18l-2.2-6.1L4 10l5.8-1.9L12 2z"/></svg></span>
                <div>
                  <p class="zia-msg-text"><strong>4 deals</strong> worth <strong>$182,400</strong> are stalled. The oldest has waited 23 days.</p>
                  <ul class="zia-deals">
                    <li><span>Cedar Logistics</span><span class="zia-badge zia-badge-warn">23 days</span></li>
                    <li><span>Harbor Clinics</span><span class="zia-badge">17 days</span></li>
                    <li><span>Northline Foods</span><span class="zia-badge">15 days</span></li>
                  </ul>
                </div>
              </div>
              <div class="zia-agent">
                <div class="zia-agent-head">
                  <span class="zia-agent-icon"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="8" width="16" height="12" rx="3"/><path d="M12 4v4"/><circle cx="12" cy="3" r="1"/><circle cx="9" cy="14" r="1.2" fill="currentColor"/><circle cx="15" cy="14" r="1.2" fill="currentColor"/></svg></span>
                  <span><strong>Follow-up agent</strong> drafted 4 emails</span>
                  <span class="zia-status"><span class="zia-pulse"></span>Waiting for you</span>
                </div>
                <div class="zia-agent-actions">
                  <span class="zia-btn zia-btn-primary">Review &amp; send</span>
                  <span class="zia-btn">Edit drafts</span>
                </div>
              </div>
            </div>
          </div>
          <figcaption>Illustration with demo data</figcaption>
        </figure>

        <ul class="zia-features">
          <li>
            <span class="zia-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="8" width="16" height="12" rx="3"/><path d="M12 4v4"/><circle cx="12" cy="3" r="1"/><path d="M9 14h.01M15 14h.01"/></svg></span>
            <div><h3>Zia Agents</h3><p>Ready-made AI agents from Zoho's own marketplace for sales, service and operations: qualifying leads, answering routine tickets, scheduling meetings. They work around the clock on your live records.</p></div>
          </li>
          <li>
            <span class="zia-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 4 5 5L9 20H4v-5L15 4z"/><path d="m12.5 6.5 5 5"/><path d="M19 15l.8 1.7L21.5 17.5l-1.7.8L19 20l-.8-1.7-1.7-.8 1.7-.8L19 15z"/></svg></span>
            <div><h3>Agent Studio</h3><p>Your own agent, for the process that is specific to you. Described in plain language, with low-code where it needs more, and able to act across the Zoho apps you already use.</p></div>
          </li>
          <li>
            <span class="zia-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M12 7l1 2.4 2.4 1-2.4 1L12 14l-1-2.6-2.4-1 2.4-1L12 7z"/></svg></span>
            <div><h3>Ask Zia</h3><p>Ask a question the way you would ask a colleague and get the answer from your own live data. No report builder, no export to Excel.</p></div>
          </li>
          <li>
            <span class="zia-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 7V3M15 7V3"/><path d="M6 7h12v4a6 6 0 0 1-12 0V7z"/><path d="M12 17v4"/></svg></span>
            <div><h3>Zoho MCP</h3><p>Plugs AI assistants such as Claude and ChatGPT into your Zoho apps, so they can look things up and get work done for you, only within the permissions each user already has.</p></div>
          </li>
        </ul>
      </div>

      <div class="zia-mcp" aria-label="How Zoho MCP connects an AI assistant to Zoho">
        <div class="zia-node">
          <span class="zia-node-label">Your AI assistant</span>
          <span class="zia-node-chips"><span>Claude</span><span>ChatGPT</span><span>Other MCP apps</span></span>
        </div>
        <div class="zia-link" aria-hidden="true"><span></span></div>
        <div class="zia-node zia-node-core">
          <span class="zia-node-label">Zoho MCP</span>
          <span class="zia-node-sub">Checks each user's permissions before anything is read or changed</span>
        </div>
        <div class="zia-link" aria-hidden="true"><span></span></div>
        <div class="zia-node">
          <span class="zia-node-label">Your Zoho apps</span>
          <span class="zia-node-chips"><span>CRM</span><span>Books</span><span>Desk</span><span>People</span></span>
        </div>
      </div>

      <div class="zia-trust">
        <div><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg><span><strong>Private by design.</strong> Zia can run on Zoho's own AI models, hosted in Zoho's own data centres, and Zoho states its models aren't trained on customer data.</span></div>
        <div><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg><span><strong>A person decides.</strong> We set agents up so anything that reaches a customer or moves money waits for someone on your team to approve it.</span></div>
        <div><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg><span><strong>Set up by us.</strong> We switch on the Zia features that are reliable for your work, build the agents you need, and connect your AI assistant through MCP.</span></div>
      </div>

      <div class="zia-cta">
        <a href="/ai-apps/ai-agent-development" class="btn zia-btn-main">Build an AI agent for your Zoho</a>
        <a href="/ai-apps/ai-crm-integration" class="btn zia-btn-ghost">How AI fits into your CRM</a>
      </div>
    </div>
  </section>

  <section class="section-after-hero">
    <div class="container">
      <p class="text-center" style="font-weight:700;color:var(--color-ink-soft);margin-bottom:20px;">Trusted by businesses across Lebanon and the wider region</p>
      <div class="trusted-marquee">
        <div class="trusted-track">
          ${config.trustedByClients
            .map((c) => `<div class="trusted-logo"><img src="/images/clients/${c.file}" alt="${c.name}"${sizeAttrs(`clients/${c.file}`)} loading="lazy"></div>`)
            .join("")}
          ${config.trustedByClients
            .map((c) => `<div class="trusted-logo trusted-dup" aria-hidden="true"><img src="/images/clients/${c.file}" alt=""${sizeAttrs(`clients/${c.file}`)} loading="lazy"></div>`)
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

  ${industriesSection()}

  <section class="section-alt">
    <div class="container">
      <div class="section-head">
        <span class="kicker">What we do</span>
        <h2>Zoho services that cover the full lifecycle</h2>
        <p>Each one has its own page with the plan we follow, stage by stage.</p>
      </div>
      <div class="grid grid-3">
        <a href="/services/zoho-implementation" class="card card-link-block"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 3 4 4-4 4"/><path d="M20 7H4"/><path d="m8 21-4-4 4-4"/><path d="M4 17h16"/></svg></div><h3>Implementation &amp; Migration</h3><p>From a signed requirements document to go-live, including moving your data off Salesforce, HubSpot, QuickBooks or spreadsheets.</p><span class="card-more">How an implementation runs <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span></a>
        <a href="/services/zoho-customization" class="card card-link-block"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg></div><h3>Customization &amp; Integrations</h3><p>Custom Zoho Creator apps, API integrations and automation built around how your team actually works, and only where a setting cannot do the job.</p><span class="card-more">Customization and integration <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span></a>
        <a href="/services/zoho-support" class="card card-link-block"><div class="icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div><h3>Training &amp; Support</h3><p>Hands-on training for your team on your own system, plus ongoing support from people who know your setup: a phone call away, not a ticket in a queue.</p><span class="card-more">Training and support <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span></a>
      </div>
      <p class="text-center" style="margin-top:28px;"><a href="/services" class="btn btn-ghost">All ten services, with the plan for each</a></p>
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
            .map((i) => `<div class="trusted-logo"><img src="/images/${i.dir}/${i.file}" alt="${i.name}"${sizeAttrs(`${i.dir}/${i.file}`)} loading="lazy"></div>`)
            .join("")}
          ${integrations
            .map((i) => `<div class="trusted-logo trusted-dup" aria-hidden="true"><img src="/images/${i.dir}/${i.file}" alt=""${sizeAttrs(`${i.dir}/${i.file}`)} loading="lazy"></div>`)
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
        <a href="/blog/${b.slug}" class="blog-card">
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

  <section class="section-alt">
    <div class="container">
      <div class="section-head">
        <span class="kicker">Go deeper</span>
        <h2>Pages written for your situation</h2>
        <p>Rather than one generic overview, we write up each industry and each service separately — including the cases where we would tell you not to do it.</p>
      </div>
      <div class="grid grid-2">
        <div class="card">
          <span class="kicker">Solutions</span>
          <h3>By industry and by function</h3>
          <p>Manufacturing, retail, distribution, real estate, contracting, healthcare, education, agriculture and NGOs — plus accounting, inventory, HR, attendance and visitor management.</p>
          <a href="/solutions/" class="btn btn-ghost btn-sm">Browse solutions</a>
        </div>
        <div class="card">
          <span class="kicker">AI &amp; Apps</span>
          <h3>AI and software development</h3>
          <p>AI agents, chatbots, document processing and automation built inside Zoho, plus custom software, web, mobile and e-commerce — with an honest read on where AI does not help.</p>
          <a href="/ai-apps/" class="btn btn-ghost btn-sm">Browse AI &amp; apps</a>
        </div>
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
        <a href="/contact-us" class="btn btn-accent">Book a Free Consultation</a>
      </div>
    </div>
  </section>`;
};
