const solutions = require("./solutions");
const aiApps = require("./aiApps");

// The two shyphan-parity hubs. Both data sets share one shape, so one pair of
// templates renders both; this is the only place their copy and URLs live.
const SECTIONS = [
  {
    key: "solutions",
    entries: solutions,
    base: "/solutions/",
    label: "Solutions",
    navLabel: "Solutions",
    navCta: "Industry setups and the capabilities most businesses need.",
    indexTitle: "ERP & Business Solutions by Industry | Lebanon | CSP4TECH",
    indexDescription:
      "Zoho ERP and business solutions by industry and by function: manufacturing, retail, distribution, real estate, contracting, healthcare, education, NGOs and more.",
    indexH1: "Solutions Built Around How Your Industry Actually Works",
    indexLead:
      "Every industry has its own paperwork, its own exceptions and its own way of pricing work. These pages describe what we configure for each one, what it costs you in effort, and where we would tell you not to bother.",
    problemsHeading: "The things that usually bring people to us",
    relatedKicker: "More solutions",
    relatedHeading: "Other industries and capabilities we set up",
    groups: [
      {
        heading: "By industry",
        blurb: "Sector-specific setups, including the parts of the process that no standard product models.",
        slugs: [
          "manufacturing-erp-software",
          "future-factory",
          "retail-erp-solution",
          "distribution-erp-software",
          "real-estate-erp",
          "contracting-management-erp",
          "healthcare-erp-solution",
          "education-erp-software",
          "agriculture-erp-solution",
          "erp-solution-non-profit",
        ],
      },
      {
        heading: "By function",
        blurb: "The capabilities most businesses need regardless of sector, plus the two platforms outside Zoho we work on.",
        slugs: [
          "accounting-erp-software",
          "inventory-management-software",
          "hr-software-erp",
          "human-resource-software",
          "biometric-attendance-software",
          "visitor-management-system",
          "zatca-e-invoicing",
          "ai-productivity-software",
          "microsoft-dynamics-365-services",
        ],
      },
    ],
  },
  {
    key: "aiApps",
    entries: aiApps,
    base: "/ai-apps/",
    label: "AI & Apps",
    navLabel: "AI & Apps",
    navCta: "Narrow, reviewable AI \u2014 and software built only when it is needed.",
    indexTitle: "AI Services & App Development | Lebanon | CSP4TECH",
    indexDescription:
      "AI agents, chatbots, document processing and automation built inside Zoho, plus custom software, mobile, web and e-commerce development. Honest about the limits.",
    indexH1: "AI and Software We Would Actually Recommend Building",
    indexLead:
      "AI is useful on narrow, repeatable work and unreliable everywhere else. These pages set out what we build, where a person stays in the loop, and the cases where we would tell you to configure what you already own instead.",
    problemsHeading: "The things that usually bring people to us",
    relatedKicker: "More services",
    relatedHeading: "Other AI and development work we do",
    groups: [
      {
        heading: "AI services",
        blurb: "Narrow, reviewable AI inside the systems your team already opens every day.",
        slugs: [
          "ai-consulting",
          "ai-agent-development",
          "ai-chatbot-development",
          "ai-business-automation",
          "ai-document-processing",
          "ai-voice-agents",
          "ai-knowledge-base-development",
          "ai-crm-integration",
          "ai-sales-automation",
          "ai-customer-service-automation",
        ],
      },
      {
        heading: "Apps and development",
        blurb: "Software built when a configured product genuinely cannot do the job \u2014 and honest advice about when it can.",
        slugs: [
          "ai-app-development",
          "custom-software-development",
          "custom-software-vs-off-the-shelf-software",
          "web-app-development",
          "mobile-app-development",
          "ecommerce-website",
          "it-staff-augmentation",
        ],
      },
    ],
  },
];

module.exports = SECTIONS;
