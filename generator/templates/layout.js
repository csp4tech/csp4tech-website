const config = require("../data/config");
const { organizationSchema } = require("./schema");
const SECTIONS = require("../data/sections");

// Everything that lands inside an HTML attribute (title, description, og/
// twitter tags) goes through this. A single unescaped double quote closes the
// attribute early: one blog excerpt opening with a quoted phrase silently
// produced an EMPTY meta description for that whole page before this existed.
function esc(str) {
  return String(str == null ? "" : str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function groupByCategory(products) {
  const map = {};
  products.forEach((p) => {
    if (!map[p.category]) map[p.category] = [];
    map[p.category].push(p);
  });
  return config.nav.productCategories
    .filter((c) => map[c])
    .map((c) => ({ category: c, items: map[c] }));
}

function megaMenu(products) {
  const groups = groupByCategory(products);
  return `
  <div class="nav-item has-mega">
    <a href="/zoho-products/" class="nav-link" aria-haspopup="true">Zoho Products <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></a>
    <div class="mega-menu">
      ${groups
        .map(
          (g) => `
      <div class="mega-col">
        <p class="mega-col-title">${g.category}</p>
        ${g.items.map((p) => `<a href="/zoho-products/${p.slug}">${p.logo ? `<img src="/images/logos/${p.logo}" alt="" width="16" height="16" class="nav-app-icon" loading="lazy" decoding="async">` : ""}${p.name}</a>`).join("")}
      </div>`
        )
        .join("")}
      <div class="mega-cta">
        <span style="font-size:.85rem;color:var(--color-ink-soft)">39 Zoho apps, one local implementation partner.</span>
        <a href="/zoho-products/" class="btn btn-ghost btn-sm">Browse all products</a>
      </div>
    </div>
  </div>`;
}

// Mega menu for a hub section (Solutions, AI & Apps). Reads the same
// generator/data/sections.js the build does, so the nav can never drift out of
// step with the pages that actually exist.
function sectionMegaMenu(section) {
  return `
  <div class="nav-item has-mega">
    <a href="${section.base}" class="nav-link" aria-haspopup="true">${section.navLabel} <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></a>
    <div class="mega-menu" style="width:min(540px,92vw);grid-template-columns:repeat(${section.groups.length},minmax(0,1fr));gap:18px 24px;">
      ${section.groups
        .map(
          (g) => `
      <div class="mega-col">
        <p class="mega-col-title">${g.heading}</p>
        ${g.slugs
          .map((slug) => {
            const e = section.entries.find((x) => x.slug === slug);
            return e ? `<a href="${section.base}${e.slug}">${e.kicker}</a>` : "";
          })
          .join("")}
      </div>`
        )
        .join("")}
      <div class="mega-cta">
        <span style="font-size:.85rem;color:var(--color-ink-soft)">${section.navCta}</span>
        <a href="${section.base}" class="btn btn-ghost btn-sm">See all ${section.label.toLowerCase()}</a>
      </div>
    </div>
  </div>`;
}

function mobileSectionGroups(section) {
  return section.groups
    .map(
      (g) => `
    <details>
      <summary>${section.navLabel} — ${g.heading}</summary>
      <div>
        ${g.slugs
          .map((slug) => {
            const e = section.entries.find((x) => x.slug === slug);
            return e ? `<a href="${section.base}${e.slug}">${e.kicker}</a>` : "";
          })
          .join("")}
        <a href="${section.base}"><strong>All ${section.label.toLowerCase()}</strong></a>
      </div>
    </details>`
    )
    .join("");
}

function mobileProductGroups(products) {
  const groups = groupByCategory(products);
  return groups
    .map(
      (g) => `
    <details>
      <summary>${g.category}</summary>
      <div>
        ${g.items.map((p) => `<a href="/zoho-products/${p.slug}">${p.logo ? `<img src="/images/logos/${p.logo}" alt="" width="16" height="16" class="nav-app-icon" loading="lazy" decoding="async">` : ""}${p.name}</a>`).join("")}
      </div>
    </details>`
    )
    .join("");
}

function header(products, activePath) {
  return `
  <header class="site-header">
    <div class="container">
      <a href="/" class="brand"><img src="/images/logo-mark.png" alt="" class="brand-mark" width="31" height="34"> CSP4TECH</a>
      <nav class="primary-nav" aria-label="Primary">
        <ul>
          <li><a href="/services" class="nav-link">Services</a></li>
          <li>${megaMenu(products)}</li>
          ${SECTIONS.map((section) => `<li>${sectionMegaMenu(section)}</li>`).join("")}
          <li class="nav-item has-mega">
            <a href="#" class="nav-link" aria-haspopup="true">More <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></a>
            <div class="mega-menu" style="grid-template-columns:1fr;width:230px;padding:12px;">
              <div class="mega-col" style="grid-column:1/-1;">
                <a href="/zoho-suites">Zoho Suites</a>
                <a href="/compare/">Compare Zoho</a>
                <a href="/platforms/">Other Platforms</a>
                <a href="/about">About Us</a>
                <a href="/blog/">Blog</a>
                <a href="/contact-us">Contact Us</a>
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <div class="header-actions">
        <a href="/contact-us" class="btn btn-primary btn-sm">Get Started</a>
        <button class="menu-toggle" aria-label="Open menu" aria-expanded="false">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
        </button>
      </div>
    </div>
  </header>
  <div class="mobile-nav">
    <a href="/services">Services</a>
    ${mobileProductGroups(products)}
    ${SECTIONS.map((section) => mobileSectionGroups(section)).join("")}
    <a href="/zoho-suites">Zoho Suites</a>
    <a href="/compare/">Compare</a>
    <a href="/platforms/">Other Platforms</a>
    <a href="/about">About Us</a>
    <a href="/blog/">Blog</a>
    <a href="/contact-us">Contact Us</a>
    <a href="/contact-us" class="btn btn-primary btn-block" style="margin-top:16px;">Get Started</a>
  </div>`;
}

// A labelled row of footer links. Used for the services and per-market rows.
// Every entry must resolve to a real page — a chip pointing nowhere is a
// broken link, and a row of chips pointing at interchangeable pages is the
// doorway pattern search engines demote.
function footerChipRow(heading, blurb, items) {
  if (!items || !items.length) return "";
  return `
      <div class="footer-chips">
        <h2 class="footer-col-title">${heading}</h2>
        ${blurb ? `<p class="footer-chips-note">${blurb}</p>` : ""}
        <div class="footer-chip-grid">
          ${items.map((i) => `<a href="${i.href}">${i.label}</a>`).join("")}
        </div>
      </div>`;
}

function footer(products) {
  const groups = groupByCategory(products).slice(0, 3);
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-brand">CSP4TECH</div>
          <p style="color:#9C9AC4;font-size:0.88rem;max-width:280px;">${config.tagline}. End-to-end Zoho consulting — implementation, migration, integrations and ongoing support — for businesses across ${config.regions.line}.</p>
          <div class="social-row" style="margin-top:16px;">
            <a href="${config.social.linkedin}" aria-label="LinkedIn" target="_blank" rel="noopener me">
              <svg width="16" height="16" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true"><path d="M100.28 448H7.4V148.9h92.88zm-46.44-339.9C24.09 108.1 0 83.5 0 53.6 0 23.7 24.1-.9 53.84-.9c29.7 0 53.84 24.6 53.84 53.6 0 29.9-24.14 54.4-53.84 54.4zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
            </a>
            <a href="${config.social.facebook}" aria-label="Facebook" target="_blank" rel="noopener me">
              <svg width="10" height="16" viewBox="0 0 320 512" fill="currentColor" aria-hidden="true"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
            </a>
            <a href="${config.social.instagram}" aria-label="Instagram" target="_blank" rel="noopener me">
              <svg width="16" height="16" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
            </a>
          </div>
          <img src="/images/zoho-partner-badge.png" alt="Zoho Authorized Partner badge" class="footer-badge" style="margin-top:18px;" width="220" height="61">
        </div>
        ${groups
          .map(
            (g) => `
        <div>
          <h2 class="footer-col-title">${g.category}</h2>
          ${g.items
            .slice(0, 6)
            .map((p) => `<a href="/zoho-products/${p.slug}">${p.logo ? `<img src="/images/logos/${p.logo}" alt="" width="14" height="14" class="footer-app-icon" loading="lazy" decoding="async">` : ""}${p.name}</a>`)
            .join("")}
        </div>`
          )
          .join("")}
        <div>
          <h2 class="footer-col-title">Company</h2>
          <a href="/about">About Us</a>
          <a href="/blog/">Blog</a>
          <a href="/contact-us">Contact Us</a>
          <a href="/solutions/">Solutions</a>
          <a href="/ai-apps/">AI &amp; Apps</a>
          <a href="/zoho-suites">Zoho Suites</a>
          <a href="/compare/">Compare</a>
          <a href="/platforms/">Other Platforms</a>
        </div>
      </div>

      <!-- Contact details in the footer, not only on the contact page: most
           visitors who want to talk are at the bottom of some other page when
           they decide. WhatsApp leads because that is how business is
           actually done here and across the region. -->
      <div class="footer-contact">
        <h2 class="footer-col-title">Talk to us</h2>
        <div class="footer-contact-grid">
          <a class="fc-item" href="https://wa.me/${config.whatsapp}" target="_blank" rel="noopener">
            <span class="fc-ic fc-wa"><svg width="17" height="17" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M16 3C9 3 3.3 8.7 3.3 15.7c0 2.5.7 4.8 1.9 6.8L3 29l6.7-2.1c1.9 1 4.1 1.6 6.3 1.6 7 0 12.7-5.7 12.7-12.7C28.7 8.7 23 3 16 3zm0 23c-2 0-3.9-.5-5.5-1.5l-.4-.2-4 1.2 1.2-3.9-.3-.4c-1.1-1.7-1.6-3.6-1.6-5.5C5.4 9.9 10.2 5.1 16 5.1s10.6 4.8 10.6 10.6S21.8 26 16 26zm5.6-7.5c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-2-1.8-2.3-.2-.3 0-.5.1-.6l.5-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6 0-.2-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.4z"/></svg></span>
            <span class="fc-text"><strong>WhatsApp</strong>${config.phone.display}</span>
          </a>
          <a class="fc-item" href="tel:+${config.phone.href}">
            <span class="fc-ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg></span>
            <span class="fc-text"><strong>Call us</strong>${config.phone.display}</span>
          </a>
          <a class="fc-item" href="mailto:${config.email}">
            <span class="fc-ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg></span>
            <span class="fc-text"><strong>Email</strong>${config.email}</span>
          </a>
          <div class="fc-item">
            <span class="fc-ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></span>
            <span class="fc-text"><strong>Head office</strong>${config.address.lebanon}</span>
          </div>
          <div class="fc-item">
            <span class="fc-ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></span>
            <span class="fc-text"><strong>Hours</strong>${config.hours}</span>
          </div>
          <div class="fc-item">
            <span class="fc-ic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></span>
            <span class="fc-text"><strong>Where we work</strong>${config.regions.line}</span>
          </div>
        </div>
      </div>

      <!-- Services and per-market link rows. Every chip points at a page that
           genuinely exists and says something specific; none of this is a
           keyword list pointing at near-identical landing pages. -->
      ${footerChipRow(
        "Our services",
        "What CSP4TECH does, by discipline and by industry.",
        [
          ...SECTIONS.find((s) => s.key === "aiApps").entries.map((e) => ({ label: e.kicker, href: `/ai-apps/${e.slug}` })),
          ...SECTIONS.find((s) => s.key === "solutions").entries.map((e) => ({ label: e.kicker, href: `/solutions/${e.slug}` })),
        ]
      )}
      ${footerChipRow(
        "Zoho partner by country",
        "We have one office, in Beirut. Each market page sets out the Zoho data centre, currency and working week that apply there.",
        SECTIONS.find((s) => s.key === "markets").entries.map((e) => ({
          label: `Zoho Partner ${e.country}`,
          href: `/markets/${e.slug}`,
        }))
      )}
      ${footerChipRow(
        "Software &amp; AI development by country",
        "Custom software, web and mobile apps and AI work, delivered into the same markets.",
        SECTIONS.find((s) => s.key === "markets").entries.map((e) => ({
          label: `Software &amp; AI ${e.country}`,
          href: `/markets/${e.slug}#software`,
        }))
      )}

      <div class="footer-bottom">
        <span>&copy; ${new Date().getFullYear()} CSP4TECH. All rights reserved.</span>
        <span><a href="/privacy-policy">Privacy Policy</a> · <a href="/terms">Terms of Use</a></span>
        <span>Headquartered in ${config.regions.hq}</span>
      </div>
    </div>
  </footer>
  <a class="wa-float" href="https://wa.me/${config.whatsapp}" aria-label="Chat on WhatsApp" target="_blank" rel="noopener">
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><path d="M16 3C9 3 3.3 8.7 3.3 15.7c0 2.5.7 4.8 1.9 6.8L3 29l6.7-2.1c1.9 1 4.1 1.6 6.3 1.6 7 0 12.7-5.7 12.7-12.7C28.7 8.7 23 3 16 3z" fill="#fff"/><path d="M16 4.3C9.7 4.3 4.6 9.4 4.6 15.7c0 2.3.7 4.4 1.8 6.2l-1.2 4.4 4.5-1.2c1.7 1 3.7 1.6 5.8 1.6 6.3 0 11.4-5.1 11.4-11.4S22.3 4.3 16 4.3z" fill="#25D366"/><path d="M21.6 18.5c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-2-1.8-2.3-.2-.3 0-.5.1-.6.1-.1.3-.4.5-.5.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6 0-.2-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.4z" fill="#fff"/></svg>
  </a>
  <button type="button" class="back-to-top" aria-label="Back to top">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 15V5M10 5L4 11M10 5l6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </button>
  <script src="/js/main.js" defer></script>`;
}

// Search-engine verification meta tags. Each is emitted only when its value is
// filled in, so the site never ships an empty or placeholder tag.
function verificationTags() {
  const out = [];
  if (config.seo && config.seo.googleSiteVerification) {
    out.push(`<meta name="google-site-verification" content="${esc(config.seo.googleSiteVerification)}">`);
  }
  if (config.seo && config.seo.bingSiteVerification) {
    out.push(`<meta name="msvalidate.01" content="${esc(config.seo.bingSiteVerification)}">`);
  }
  return out.join("\n");
}

// Analytics, also opt-in: nothing loads until an ID is configured, so the site
// stays script-free (and cookie-banner-free) by default. Note that
// vercel.json's `script-src 'self'` must be widened for whichever provider is
// switched on, or the browser will refuse to run the script.
function analyticsTags() {
  if (!config.seo) return "";
  if (config.seo.plausibleDomain) {
    return `<script defer data-domain="${esc(config.seo.plausibleDomain)}" src="https://plausible.io/js/script.js"></script>`;
  }
  if (config.seo.googleTagId) {
    const id = esc(config.seo.googleTagId);
    return `<script async src="https://www.googletagmanager.com/gtag/js?id=${id}"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${id}');</script>`;
  }
  return "";
}

function page({ title, description, path, bodyHtml, products, extraHead = "", robots = "index, follow" }) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${config.domain}${path}">
<link rel="icon" href="/images/logo-mark.png" type="image/png">
<meta name="robots" content="${robots}">
<meta property="og:site_name" content="${config.siteName}">
<meta property="og:locale" content="en_US">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:type" content="website">
<meta property="og:url" content="${config.domain}${path}">
<meta property="og:image" content="${config.domain}/images/og-banner.jpg">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:site" content="@csp4tech">
<meta name="twitter:image" content="${config.domain}/images/og-banner.jpg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400..800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/css/style.css">
${verificationTags()}
${organizationSchema()}
${extraHead}
${analyticsTags()}
</head>
<body>
${header(products, path)}
<main>
${bodyHtml}
</main>
${footer(products)}
</body>
</html>`;
}

module.exports = { page, groupByCategory };
