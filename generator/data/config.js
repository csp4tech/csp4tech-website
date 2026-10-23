// Single source of truth for company details — fixes the audit findings:
// - one consistent set of stats (was 2016/4000+/2000+ on home vs 2018/150+/135+ on about)
// - one correct contact email everywhere (was a stray mailto to a third-party "shyphan.com" domain)
// - one consistent set of business hours (was Mon-Fri 9-18 in one place, Mon-Sat 9-6 in another)
// - canonical domain is csp4tech.com (no .in)
module.exports = {
  siteName: "CSP4TECH",
  domain: "https://www.csp4tech.com",
  tagline: "Zoho Authorized Partner — headquartered in Beirut, working across the region and beyond",

  // Where CSP4TECH actually works. Named regions beat a vague "worldwide":
  // they are specific, credible, and people search for them. Only add a
  // region here when there is real client work behind it — this feeds the
  // visible copy AND the schema.org areaServed, so an invented region would
  // be a claim to search engines as well as to readers.
  regions: {
    hq: "Beirut, Lebanon",
    // One-line form for body copy.
    line: "Lebanon, the Gulf, Iraq and North Africa",
    // Shorter form, for places where the full line does not fit.
    short: "Lebanon, the Gulf and North Africa",
    // schema.org areaServed. Region-level rather than a long country list,
    // so it stays accurate as client work shifts around within a region.
    schema: ["Lebanon", "Gulf Cooperation Council", "Iraq", "North Africa", "Worldwide"],
  },
  email: "info@csp4tech.com",
  phone: { display: "+961 78 744 789", href: "96178744789" },
  whatsapp: "96178744789",
  hours: "Mon–Sat, 9:00 AM – 6:00 PM (Beirut)",
  languages: "Arabic, English",
  // NAP (name, address, phone) — the three things local search cross-checks
  // between the site, the Google Business Profile and every directory listing.
  // They must match CHARACTER FOR CHARACTER everywhere, so every template and
  // every schema block reads them from here. Never retype an address inline.
  address: {
    street: "Beirut Digital District, Block 1499, Floor 1",
    locality: "Beirut",
    region: "Beirut Governorate",
    country: "LB",
    // The one-line form used in visible copy and in directory listings.
    lebanon: "Beirut Digital District, Block 1499, Floor 1, Beirut, Lebanon",
  },
  social: {
    linkedin: "https://www.linkedin.com/in/mohamad-zeib-23052621a",
    facebook: "https://www.facebook.com/share/19cuA5S8ZB/",
    instagram: "https://www.instagram.com/csp4tech",
  },
  stats: {
    founded: 2018,
    yearsExperience: "8+ Years",
    projectsDelivered: "150+",
    businessesServed: "150+",
    industriesServed: "12+",
    zohoAppsImplemented: "39",
    certifiedExperts: "100%",
  },
  // Real client logos for the "trusted by" strip. Add more objects here as
  // logos are approved — the marquee and structured data both read this list.
  trustedByClients: [
    { name: "areeba", file: "areeba.png" },
    { name: "Allo Taxi", file: "allo-taxi.png" },
    { name: "Wood & Gas", file: "wood-and-gas.png" },
    { name: "Atelier Trente Trois", file: "atelier-trente-trois.png" },
    { name: "Morocco Welcome", file: "morocco-welcome.png" },
    { name: "Ajialouna", file: "ajialouna.png" },
  ],
  // Geographic pin for the LocalBusiness schema. These are district-level
  // coordinates for Beirut Digital District, not a surveyed building pin.
  // Replace them with the exact latitude/longitude from the Google Business
  // Profile once that is set up, so the two agree — Google treats the Business
  // Profile as authoritative and a mismatch helps nobody.
  geo: { lat: 33.8869, lng: 35.5131 },

  // Verification and analytics. Every value here is intentionally EMPTY: the
  // build emits nothing at all for a blank value, so the site never ships a
  // fake or placeholder tag. Fill one in and it appears on every page.
  //
  //   googleSiteVerification - the content="..." value Google Search Console
  //     gives you under "HTML tag" verification (not the whole tag).
  //   bingSiteVerification   - the same from Bing Webmaster Tools.
  //   plausibleDomain        - e.g. "csp4tech.com". Privacy-friendly, no
  //     cookie banner needed, so it is the lower-friction option.
  //   googleTagId            - e.g. "G-XXXXXXXXXX" for GA4.
  //
  // IMPORTANT: vercel.json sets `script-src 'self'`, which BLOCKS any
  // third-party analytics script. Before turning on Plausible or GA4, add the
  // provider's host to script-src (and connect-src) in vercel.json, or the
  // script will be refused by the browser and you will see no data.
  seo: {
    googleSiteVerification: "",
    bingSiteVerification: "",
    plausibleDomain: "",
    googleTagId: "",
  },

  nav: {
    productCategories: [
      "Sales & CRM", "Finance & Operations", "HR & Payroll",
      "Service & Support", "Analytics & Data", "Apps & Workplace", "All-in-One Suite",
    ],
  },
};
