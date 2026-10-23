// Per-market pages. One page per country, each covering both the Zoho work
// and the software/AI work for that market.
//
// WHY THESE EXIST AND WHAT KEEPS THEM LEGITIMATE
// A set of near-identical country pages is what Google calls doorway pages,
// and it demotes sites that publish them. The only thing separating this from
// that is that every page says something TRUE AND SPECIFIC about its market.
// If you add a country, give it real content — do not copy a page and swap
// the name.
//
// ACCURACY RULES
// - CSP4TECH has ONE office: Beirut Digital District. No page may imply a
//   local office, local staff or a local entity anywhere else. On-site work
//   is Lebanon only; elsewhere travel is "by arrangement" at most.
// - No claimed clients in these countries.
// - No tax percentages, deadlines or e-invoicing phase dates — regimes are
//   described qualitatively and confirmed with the client's own advisor.
// - "Zoho Authorized Partner" is the only partner claim.
// - Never put "payroll" in zohoApps: Zoho Payroll does not cover these
//   markets uniformly and we do not want the implied claim anywhere.
//
// `facts` is the researched box rendered at the top of each page. Verified
// October 2026 against Zoho's own data-centre listing.
module.exports = [
  {
    slug: "lebanon",
    country: "Lebanon",
    kicker: "Lebanon",
    home: true,
    title: "Zoho Implementation in Lebanon, From Beirut Digital District",
    metaTitle: "Zoho Implementation in Lebanon",
    metaDescription:
      "CSP4TECH is a Zoho Authorized Partner based in Beirut Digital District, implementing Zoho across Lebanon with on-site work, in Arabic and English.",
    facts: { dataCentre: "No in-country region — chosen at sign-up", currency: "LBP and USD side by side", week: "Saturday–Sunday weekend, Saturday often worked", languages: "Arabic, English, French" },
    intro: [
      "Our office is in Beirut Digital District, and Lebanon has been our home market since 2018. That means we can sit with your team, watch how an invoice actually gets issued and how payroll actually gets approved, and configure Zoho around what we see rather than around a questionnaire.",
      "Lebanese finance and HR teams carry requirements that generic rollouts tend to miss: VAT-compliant invoicing, NSSF contributions, Ministry of Finance reporting, and a working reality where LBP and USD sit side by side. We build for that from the start, and we confirm the exact current rules with your own tax advisor before anything goes live."
    ],
    local: [
      { title: "On-site, not just online", text: "Because the team is physically here, discovery workshops, data clean-up sessions, training and go-live support can happen in your office. Lebanon is the only market where we offer that." },
      { title: "VAT invoicing and MOF reporting", text: "Invoice templates, tax treatment on items and services, and the supporting reports are set up so your accountant recognises the output and Ministry of Finance reporting is not a manual rebuild each period. Current rates and filing requirements are confirmed with your tax advisor at project start." },
      { title: "NSSF and employee records", text: "Contracts, family details, declarations and the data NSSF contributions depend on are structured inside Zoho People, so HR stops keeping a parallel spreadsheet. Zoho Payroll does not cover Lebanon, so the calculation itself stays in your existing process or in a Zoho Creator application we build for it." },
      { title: "LBP and USD in one set of books", text: "Multi-currency is configured so transactions, rates and reporting still hold up when the same business prices in one currency, collects in another and reports in both." }
    ],
    zoho: "We implement across the full Zoho suite, and the usual Lebanese starting point is Zoho CRM for sales, Zoho Books for VAT-compliant accounting, Zoho People for HR records and Zoho Desk for support, with Zoho Analytics once management wants one view across them. Interfaces and templates can be delivered in Arabic with full right-to-left layout, in English, or in a mix, which matters in a market where French also appears in business documents. As a Zoho Authorized Partner, licensing, renewals and escalations go through us rather than a portal in another time zone.",
    software: "Zoho does not cover everything, so we also build custom software, web and mobile applications, and AI features around it. In Lebanon that often means a Creator application for a payroll calculation Zoho Payroll does not handle, a customer portal that works in Arabic and English, or an integration with a local point-of-sale system or bank statement format. The AI work we are asked for is practical rather than decorative: extracting data from scanned documents, drafting Arabic and English support replies for a human to approve, and summarising long record histories.",
    zohoApps: ["crm", "books", "people", "desk", "analytics"],
    faqs: [
      { q: "Will you work on site with our team?", a: "Yes. Lebanon is where our office is, so workshops, user training and go-live support are normally done in person in or around Beirut, with remote sessions used where they are simply more convenient." },
      { q: "Can Zoho Books handle Lebanese VAT invoicing?", a: "Once it is configured for Lebanon, yes. We set up the tax treatment, invoice templates and the reports your accountant needs, and then confirm the current requirements with your tax advisor before go-live rather than assuming rules that may have moved." },
      { q: "What about payroll and NSSF contributions?", a: "Zoho Payroll does not cover Lebanon and we do not pretend otherwise. We hold employee, contract and contribution-relevant data in Zoho People, and where you want the calculation inside Zoho we build it as a Zoho Creator application shaped to the rules your accountant confirms." },
      { q: "Can we run the system in Arabic?", a: "Yes, including right-to-left layouts, Arabic templates and Arabic-language training. Language is set per user, so an Arabic-speaking sales team and an English-speaking finance team can share one system without a second build." }
    ]
  },
  {
    slug: "saudi-arabia",
    country: "Saudi Arabia",
    kicker: "Saudi Arabia",
    title: "Zoho Implementation for Saudi Arabia, Delivered From Beirut",
    metaTitle: "Zoho Implementation in Saudi Arabia",
    metaDescription:
      "CSP4TECH is a Zoho Authorized Partner working with businesses in Saudi Arabia remotely from Beirut: Zoho setup, Arabic and English, ZATCA e-invoicing.",
    facts: { dataCentre: "Riyadh (primary), Jeddah (secondary) — in-country", currency: "SAR", week: "Friday–Saturday weekend", languages: "Arabic, English" },
    intro: [
      "Two things shape the start of a Saudi Zoho rollout: where the data sits, and how invoices are issued. Zoho operates data centres inside the Kingdom, with Riyadh as the primary site and Jeddah as secondary, so a Saudi account can be created on in-country infrastructure from day one. That region is chosen when the account is set up, and moving it afterwards is disruptive, which is why we settle it before anything is purchased.",
      "CSP4TECH has been implementing Zoho since 2018 from a single office in Beirut Digital District, and Saudi work is delivered remotely from there. Beirut sits one hour behind Gulf Standard Time, so our day overlaps almost all of yours for calls, testing and training. We work in Arabic and English, including full right-to-left layouts where your teams want them."
    ],
    local: [
      { title: "Data residency inside the Kingdom", text: "Zoho runs Saudi data centres, Riyadh primary and Jeddah secondary. If your own policy, your auditors or your customers require data to stay in-country, that is a decision made at sign-up rather than a setting changed later." },
      { title: "ZATCA e-invoicing", text: "Saudi Arabia operates a phased e-invoicing mandate under ZATCA (Fatoora), and what applies to you depends on your entity and turnover. We configure Zoho Books around the requirements your own tax advisor confirms at project start, rather than assuming them." },
      { title: "Friday to Saturday weekend", text: "The Saudi week rests on Friday and Saturday. That drives leave calendars and shift patterns in Zoho People, and the business-hours rules behind Zoho Desk SLAs, which quietly misbehave if a default calendar is left in place." },
      { title: "SAR and Arabic-first documents", text: "SAR as base currency, with bilingual quote and invoice templates and Arabic numerals and layout where needed. Dashboards and reports are built to stay readable in both languages." }
    ],
    zoho: "We scope, configure and migrate across the Zoho suite, with the Saudi account created in the right region from the start. The usual core is CRM for pipelines and approvals, Zoho Books set up for Saudi invoicing and SAR reporting, Zoho People aligned to the local working week, and Desk queues with matching business hours. Data migration, user training and a proper admin handover are part of the engagement, all delivered remotely.",
    software: "Where the standard apps stop, we build. That means Zoho Creator apps or custom web and mobile software for sector-specific work, integrations to banks, payment providers, logistics partners and government portals, and AI assistance such as extracting data from Arabic paperwork or drafting bilingual replies. These are designed as Arabic and English from the first screen, not translated at the end.",
    zohoApps: ["crm", "books", "people", "desk", "analytics"],
    faqs: [
      { q: "Are you based in Saudi Arabia?", a: "No. CSP4TECH has one office, in Beirut Digital District, Lebanon, and we work with Saudi businesses remotely from there. Beirut is one hour behind Gulf Standard Time, so we cover almost your whole working day. On-site work is standard in Lebanon only; travel to the Kingdom is by arrangement." },
      { q: "Can our Zoho data stay in Saudi Arabia?", a: "Yes. Zoho has in-country data centres in Riyadh and Jeddah, and the hosting region is selected when the account is created. We confirm the requirement with you in writing first, because changing region later means a migration rather than a setting." },
      { q: "Will Zoho Books handle ZATCA e-invoicing?", a: "Zoho Books includes Saudi e-invoicing functionality. Which parts you need depends on your obligations, so we ask your tax advisor to confirm them at project start, then configure, test with your own documents and train your finance team." },
      { q: "Do you work in Arabic?", a: "Yes, in Arabic and English, including right-to-left layouts, bilingual print templates and training materials in either language. You can choose which language each team uses." }
    ]
  },
  {
    slug: "uae",
    country: "United Arab Emirates",
    kicker: "United Arab Emirates",
    title: "Zoho Implementation for UAE Businesses, Remote From Beirut",
    metaTitle: "Zoho Implementation for UAE Businesses",
    metaDescription:
      "CSP4TECH, a Zoho Authorized Partner, works remotely from Beirut with United Arab Emirates businesses: multi-entity Zoho setup in Arabic and English.",
    facts: { dataCentre: "Dubai (primary), Abu Dhabi (secondary) — in-country", currency: "AED", week: "Saturday–Sunday weekend", languages: "Arabic, English" },
    intro: [
      "In the UAE the practical questions are usually about entities and calendars. A group holding mainland, free zone and offshore companies needs its books and its CRM to keep them apart while still reporting as one group, and that structure has to be decided before data is loaded. Zoho also runs data centres in the UAE, Dubai primary and Abu Dhabi secondary, so an account can sit on in-country infrastructure where your board or auditors ask for it.",
      "CSP4TECH is a Zoho Authorized Partner working from one office in Beirut Digital District, and UAE engagements are delivered remotely. The UAE is the one market in the Gulf on a Saturday to Sunday weekend, which sounds like a detail until it touches leave accrual, shift rosters and support response times. We work in Arabic and English with right-to-left layouts available throughout."
    ],
    local: [
      { title: "In-country Zoho data centres", text: "Zoho operates UAE data centres, with Dubai as the primary site and Abu Dhabi as secondary. Where hosting location is part of your policy or a customer requirement, that is settled at account creation." },
      { title: "Saturday to Sunday weekend", text: "The UAE weekend differs from its neighbours. If you employ staff across several Gulf countries, two working-week patterns coexist in the same Zoho People and Zoho Desk configuration, and both have to be modelled explicitly." },
      { title: "Mainland, free zone and group reporting", text: "Multi-entity groups usually need separate Books organisations for statutory reporting plus a consolidated view on top. We design the entity map, the intercompany handling and the reporting layer before building anything." },
      { title: "AED, VAT and e-invoicing direction", text: "AED as base currency with multi-currency for regional sales, under a VAT regime and a move toward mandatory e-invoicing. We configure tax treatment against what your own tax advisor confirms at project start." }
    ],
    zoho: "Typical UAE work is a Zoho One or CRM Plus rollout across a group: CRM for sales and renewals, a Books organisation per entity with consolidated reporting in Analytics, Desk with business hours matched to each country, and People for leave and attendance across mixed working weeks. We handle migration from spreadsheets or an existing system, then train admins so the setup is yours to run.",
    software: "Alongside the standard apps we build custom web and mobile software, customer and partner portals, and integrations to payment gateways, courier and delivery APIs, e-commerce storefronts and accounting systems you intend to keep. AI work tends to be practical: classifying inbound enquiries, extracting fields from supplier documents, and answering routine customer questions in Arabic or English before a person steps in.",
    zohoApps: ["one", "crm", "books", "desk", "analytics"],
    faqs: [
      { q: "Do you have a UAE office?", a: "No. Our only office is in Beirut Digital District, Lebanon, and we work with UAE businesses remotely. Beirut is one hour behind Gulf Standard Time, so meetings and testing fit comfortably inside your working day. On-site attendance is standard in Lebanon; travel to the UAE is by arrangement." },
      { q: "Can our data be hosted in the UAE?", a: "Yes. Zoho has UAE data centres in Dubai and Abu Dhabi, and the region is chosen when the account is created. We confirm the requirement before sign-up, since changing region afterwards means migrating rather than reconfiguring." },
      { q: "How do you handle a group with several licences?", a: "We map the entities first, then decide which need their own Books organisation and which can be branches, how intercompany transactions are recorded, and how group reporting is assembled. CRM is usually shared with visibility rules rather than split." },
      { q: "Our staff are split across the UAE and other Gulf countries. Is that a problem?", a: "No, but it has to be configured. The UAE weekend differs from its neighbours, so we set up separate holiday and shift calendars in Zoho People and separate business-hours profiles in Desk, so SLAs and leave balances behave correctly for each group." }
    ]
  },
  {
    slug: "qatar",
    country: "Qatar",
    kicker: "Qatar",
    title: "Zoho Implementation for Qatar, Delivered Remotely",
    metaTitle: "Zoho Implementation for Qatar",
    metaDescription:
      "Zoho implementation for Qatar businesses, delivered remotely from Beirut by CSP4TECH, a Zoho Authorized Partner working in Arabic and English.",
    facts: { dataCentre: "No in-country region — chosen at sign-up", currency: "QAR", week: "Friday–Saturday weekend", languages: "Arabic, English" },
    intro: [
      "A Qatar rollout starts with a decision that Saudi and UAE buyers never have to make. Zoho has no data centre in Qatar, so your account is created in whichever region you choose at sign-up, from options including Europe, India, Singapore, the US, Canada, Australia and Japan. That makes data residency a deliberate design choice, and it is far easier to get right at the beginning than to unwind later.",
      "A large share of Qatari business is project-driven: contracting, engineering, services and supply into large programmes. The hard part there is rarely the sales pipeline on its own, it is keeping bids, delivery milestones, certification and cash collection connected. CSP4TECH implements Zoho for that kind of work remotely from one office in Beirut Digital District, one hour behind Gulf Standard Time, in Arabic and English."
    ],
    local: [
      { title: "No in-country Zoho data centre", text: "Qatar has no local Zoho region, so hosting location is chosen when the account is created. We set out the options, note any policy or contractual constraint you are under, and get your written sign-off before the account exists." },
      { title: "Project and milestone revenue", text: "Bids, variations, progress billing and retention do not fit a simple quote-to-invoice flow. We model the stages in CRM, the approval chain in Qntrl and the billing schedule in Books so that one record carries the job from tender to final payment." },
      { title: "Friday to Saturday weekend", text: "The working week rests on Friday and Saturday, which sets leave calendars, timesheet periods and support business hours. It matters most when you are coordinating with suppliers or head offices on a different week." },
      { title: "QAR with foreign-currency contracts", text: "QAR as base currency, with multi-currency purchasing and sometimes foreign-currency contracts on the same project. Documents and portals are produced in Arabic and English, with right-to-left layout where needed." }
    ],
    zoho: "The usual build is CRM for tender and bid pipelines with document control, Qntrl for approvals and handovers between estimating, delivery and finance, Books for progress billing, retention and multi-currency purchasing, and Creator for anything project-specific that no standard app covers. Analytics then gives management a single view of pipeline, committed cost and cash. All of it is configured, migrated and trained remotely.",
    software: "We build custom web and mobile applications where the work happens away from a desk: site records, inspections, handover packs and approvals captured on a phone and synced back. We also integrate Zoho with ERP or accounting systems a client intends to keep, and use AI for practical jobs such as summarising long tender documents, comparing supplier quotations and extracting data from scanned paperwork in either language.",
    zohoApps: ["crm", "qntrl", "books", "creator", "analytics"],
    faqs: [
      { q: "Are you a Qatari company with staff in Doha?", a: "No. CSP4TECH is Lebanese, with one office in Beirut Digital District, and we work with Qatari businesses remotely. Beirut is one hour behind Gulf Standard Time, so most of your working day overlaps ours. On-site work is standard in Lebanon; travel to Qatar is by arrangement." },
      { q: "Which data region should we choose?", a: "There is no Qatar region, so it becomes a judgement call. We go through the available regions with you, weigh latency, any contractual or sector requirement you have, and where your parent company or auditors expect data to sit, then record the decision before the account is created." },
      { q: "Can Zoho handle progress billing and retention?", a: "Yes, with configuration. We set up the project structure, billing milestones, retention handling and the approval route between delivery and finance, so an invoice reflects certified progress rather than being keyed in by hand." },
      { q: "How do you deal with tax and statutory requirements?", a: "We describe how Zoho can be configured, and we take the specifics from your own tax advisor or auditor at project start. We do not invent compliance positions, and anything tax-related is confirmed with your advisor before go-live." }
    ]
  },
  {
    slug: "kuwait",
    country: "Kuwait",
    kicker: "Kuwait",
    title: "Zoho for Kuwait Trading, Retail and Distribution Teams",
    metaTitle: "Zoho Setup and Support for Kuwait",
    metaDescription:
      "CSP4TECH implements Zoho for Kuwait trading, retail and service businesses, working remotely from Beirut in both Arabic and English since 2018.",
    facts: { dataCentre: "No in-country region — chosen at sign-up", currency: "KWD (three decimal places)", week: "Friday–Saturday weekend", languages: "Arabic, English" },
    intro: [
      "A great deal of Kuwaiti business sits in trading, distribution and retail: several branches, a long product list, and a currency quoted to three decimal places that has to round correctly on every price list, invoice and report. Those are configuration decisions, and they are much cheaper to make before stock and customer data are loaded than afterwards.",
      "Zoho has no data centre in Kuwait, so your account is created in whichever region you select at sign-up, which makes data residency something to decide rather than inherit. We work with Kuwaiti businesses remotely from one office in Beirut Digital District, one hour behind Gulf Standard Time, in Arabic and English with right-to-left layouts where they help."
    ],
    local: [
      { title: "KWD and three-decimal pricing", text: "The dinar is quoted to three decimal places, which affects unit pricing, discount rounding, tax calculation and currency conversion on imports. We set precision rules and test them against your own documents before go-live." },
      { title: "Hosting region is chosen, not given", text: "With no in-country Zoho data centre, the account is created in a region you pick. We walk through the options and the implications, and record the choice, because changing it later is a migration." },
      { title: "Branches, warehouses and transfers", text: "Multi-location stock, branch transfers and per-branch margin reporting need to be designed into Inventory and Books at the start. Retrofitting locations onto a single-warehouse setup is painful." },
      { title: "Friday to Saturday weekend", text: "Leave calendars, shift rosters and support business hours follow a Friday to Saturday weekend. Where you buy from suppliers on a different week, we build that lag into SLAs rather than ignoring it." }
    ],
    zoho: "A typical Kuwait build runs Zoho Inventory and Books together for purchasing, multi-warehouse stock, branch transfers and KWD reporting, with CRM for wholesale accounts and quotations and Commerce where there is an online channel. Analytics ties branch performance, stock cover and receivables into one set of reports. We migrate item masters, opening balances and customer history, then train the branch and finance teams.",
    software: "We build mobile and web applications for the parts of a distribution business that live outside the office: barcode stock counts, van sales and delivery confirmation, returns and proof of receipt. We integrate Zoho with point-of-sale systems, online stores and delivery platforms so stock is not reconciled by hand, and we apply AI where it earns its place, for example extracting line items from supplier invoices in Arabic or English.",
    zohoApps: ["books", "inventory", "crm", "commerce", "analytics"],
    faqs: [
      { q: "Do you have consultants in Kuwait?", a: "No. CSP4TECH has one office, in Beirut Digital District, Lebanon, and we work with Kuwaiti businesses remotely from there. Beirut is one hour behind Gulf Standard Time, so our working day covers almost all of yours. On-site work is standard only in Lebanon; travel to Kuwait is by arrangement." },
      { q: "Does Zoho handle the Kuwaiti dinar correctly?", a: "Yes. The base currency is set to KWD with the right decimal precision, and we test rounding on invoices, credit notes and price lists using your own examples before go-live, including imports priced in another currency." },
      { q: "Where will our data be stored?", a: "In whichever Zoho region you choose when the account is created, since there is no in-country data centre in Kuwait. We go through the available regions with you first and record the decision, because moving region afterwards means a migration." },
      { q: "Can we run several branches and warehouses in one system?", a: "Yes. We design the locations, transfer rules and user visibility up front, so each branch sees what it should, transfers are tracked, and management gets stock and margin reporting by location without manual consolidation." }
    ]
  },
  {
    slug: "bahrain",
    country: "Bahrain",
    kicker: "Bahrain",
    title: "Zoho Implementation for Bahrain, Delivered Remotely",
    metaTitle: "Zoho Implementation for Bahrain",
    metaDescription:
      "CSP4TECH, a Zoho Authorized Partner in Beirut, sets up and supports Zoho for Bahrain businesses remotely, in both Arabic and English, since 2018.",
    facts: { dataCentre: "No in-country region — chosen at sign-up", currency: "BHD (three decimal places)", week: "Friday–Saturday weekend", languages: "Arabic, English" },
    intro: [
      "Bahraini companies are frequently compact enough that one person ends up owning the sales system, the accounting system and the HR system at once. That changes how a Zoho project should be sequenced: broad rather than deep, several apps configured to work together instead of one app perfected in isolation, and documentation written so a single administrator can actually maintain it.",
      "Zoho has no data centre in Bahrain, so the hosting region is chosen at sign-up and deserves a deliberate answer, particularly if you are in a regulated sector or report to a parent company abroad. CSP4TECH delivers remotely from one office in Beirut Digital District, one hour behind Gulf Standard Time, working in Arabic and English with right-to-left layouts available."
    ],
    local: [
      { title: "Hosting region is a decision", text: "There is no in-country Zoho region for Bahrain, so the account is created wherever you choose. We present the options, note any regulatory or group-policy constraint, and record the reasoning before the account exists." },
      { title: "Wide scope, small admin team", text: "Where one or two people administer everything, the risk is not the build, it is what happens after. We keep naming conventions consistent, avoid unnecessary customisation, write the setup down and train your administrator to change it without us." },
      { title: "Friday to Saturday weekend", text: "Leave, shifts and support business hours follow a Friday to Saturday weekend. If you also employ people in the UAE, two working-week patterns run side by side in the same Zoho People configuration and both need their own calendars." },
      { title: "BHD and group reporting", text: "BHD as base currency, quoted to three decimal places, with multi-currency for regional sales. Where a parent company reports in another currency, we set the conversion and reporting layer up at the start rather than bolting it on." }
    ],
    zoho: "A common Bahrain engagement is CRM Plus for sales, marketing and support, Books for invoicing and BHD reporting, and People for leave, attendance and employee records, with Analytics on top for management reporting. We migrate your existing contacts, balances and employee data, configure the local working week, and run training in Arabic or English depending on the team.",
    software: "For the gaps, we build lightweight custom applications and portals, usually on Zoho Creator, plus integrations to bank files, payment providers and any system you plan to keep. AI work here is aimed at taking routine admin off a small team: reading documents into records, drafting first-pass replies in either language, and flagging the things that need human attention.",
    zohoApps: ["crmplus", "books", "people", "analytics"],
    faqs: [
      { q: "Is there a CSP4TECH office in Bahrain?", a: "No. We have one office, in Beirut Digital District, Lebanon, and we work with Bahraini businesses remotely. Beirut is one hour behind Gulf Standard Time, so we overlap nearly your whole day for calls and training. On-site work is standard in Lebanon only; travel to Bahrain is by arrangement." },
      { q: "Which Zoho region should a Bahraini company use?", a: "Zoho has no Bahrain data centre, so the region is a choice made at sign-up. We discuss the realistic options with you, factor in any sector regulation or parent-company policy, and document the decision before the account is created." },
      { q: "Can one person realistically administer this?", a: "Yes, if it is built for that. We keep configuration conventional, document every non-obvious setting, and train your administrator on the changes they will need regularly, such as users, templates, approval steps and reports." },
      { q: "What support is there after go-live?", a: "We stay available remotely for changes, user questions and periodic reviews, with the scope and response expectations agreed in writing at the start. The aim is that you need us for improvements, not for day-to-day operation." }
    ]
  },
  {
    slug: "oman",
    country: "Oman",
    kicker: "Oman",
    title: "Zoho for Oman: Office Systems and Field Operations",
    metaTitle: "Zoho Implementation for Oman",
    metaDescription:
      "Zoho for Oman: CRM, finance, HR and field operations, implemented remotely from Beirut by CSP4TECH, a Zoho Authorized Partner working in Arabic and English.",
    facts: { dataCentre: "No in-country region — chosen at sign-up", currency: "OMR (three decimal places)", week: "Friday–Saturday weekend", languages: "Arabic, English" },
    intro: [
      "Omani operations are often spread out, with a Muscat head office and sites, crews or branches a long way from it. The valuable part of a Zoho rollout there is usually what happens away from a desk: jobs dispatched, work recorded on a phone, parts and signatures captured where the job is, and the office seeing all of it without making a phone call. Patchy connectivity in the field is a design constraint, not an excuse.",
      "Zoho has no data centre in Oman, so your account is created in whichever region you select when it is set up, which makes data residency a choice to think about early. CSP4TECH works with Omani businesses remotely from one office in Beirut Digital District, one hour behind Gulf Standard Time, in Arabic and English with full right-to-left layouts."
    ],
    local: [
      { title: "Field and multi-site work", text: "Dispatch, job sheets, inspections and service history need to be usable on a phone by someone standing on a site. We design mobile forms that tolerate weak connectivity and sync when a signal returns, so nothing is re-keyed in the office." },
      { title: "No in-country Zoho data centre", text: "With no local region, hosting location is chosen at account creation. We lay out the options and any constraints you are under and record the decision, since changing it later is a migration rather than a setting." },
      { title: "Friday to Saturday weekend", text: "Crew rosters, leave calendars and support business hours follow a Friday to Saturday weekend. Where shift work crosses it, we model the patterns in Zoho People instead of leaving a standard calendar in place." },
      { title: "OMR and Arabic-first field use", text: "OMR as base currency, quoted to three decimal places, with multi-currency purchasing where equipment is imported. Field interfaces and printed documents are available in Arabic with right-to-left layout, so crews are not forced into English." }
    ],
    zoho: "A typical Oman build pairs CRM for enquiries, quotations and contracts with a service layer for scheduling, dispatch and job completion, Zoho Creator for whatever is specific to your trade, People for crews and leave, and Books for invoicing against completed work. The point is a single chain from enquiry to signed job sheet to invoice, configured, migrated and trained remotely.",
    software: "We build custom mobile and web applications for field work: offline-tolerant data capture, photographs and signatures attached to the job, asset and equipment histories, and route or schedule views for dispatchers. We integrate with accounting, telematics or supplier systems you already use, and apply AI to practical tasks such as reading handwritten or photographed job notes into structured records in Arabic or English.",
    zohoApps: ["crm", "creator", "serviceplus", "people", "books"],
    faqs: [
      { q: "Do you have a team in Oman?", a: "No. CSP4TECH has a single office, in Beirut Digital District, Lebanon, and Omani work is delivered remotely from there. Beirut is one hour behind Gulf Standard Time, so our day overlaps almost all of yours. On-site work is standard in Lebanon; travel to Oman is by arrangement." },
      { q: "Will field staff be able to work where there is no signal?", a: "That is designed for. Mobile forms are built to capture work, photographs and signatures without a live connection and sync once one is available, with clear handling for conflicts so two people editing the same job does not lose data." },
      { q: "Where will our data be hosted?", a: "In the Zoho region you choose at sign-up, since there is no Oman data centre. We go through the options with you, consider any sector or customer requirement, and record the choice before the account is created." },
      { q: "Can the system work in Arabic for crews and English for management?", a: "Yes. Users can work in either language, with right-to-left layouts where Arabic is used, and printed documents can be produced bilingually or in one language depending on who receives them." }
    ]
  },
  {
    slug: "iraq",
    country: "Iraq",
    kicker: "Iraq",
    title: "Zoho Implementation for Iraq, Delivered Remotely From Beirut",
    metaTitle: "Zoho for Iraq, Delivered From Beirut",
    metaDescription:
      "Zoho CRM, Books and Desk set up for companies in Iraq, delivered remotely from our Beirut office in Arabic, Kurdish-aware and English workflows.",
    facts: { dataCentre: "No in-country region — chosen at sign-up", currency: "IQD, often alongside hard currency", week: "Friday–Saturday weekend", languages: "Arabic, Kurdish, English" },
    intro: [
      "We work with Iraqi businesses remotely from our office in Beirut. The shared language helps, and so does the clock: Baghdad is within an hour of Beirut, so sessions land inside your working day and documents, templates and training come in Arabic as readily as in English.",
      "Iraq brings configuration decisions that other markets do not. The working week runs with a Friday-Saturday weekend, pricing and collection commonly mix IQD with hard currency, and many businesses operate several branches with uneven connectivity between them. We settle those questions before building, because retrofitting them later is expensive."
    ],
    local: [
      { title: "Friday-Saturday weekend", text: "Leave calendars, shift patterns, Zoho Desk response targets and scheduled automations are built around a Friday-Saturday weekend, so escalation clocks do not tick on days nobody is working." },
      { title: "IQD alongside hard currency", text: "Price lists, invoices and reporting are configured for IQD, with multi-currency where the business also quotes or settles in another currency." },
      { title: "Arabic, Kurdish and English users", text: "Zoho interfaces and your own templates are delivered in Arabic with right-to-left layout and in English. Where Kurdish is used day to day, it lives in the content you control: field labels, picklists and customer-facing documents." },
      { title: "Branch and distribution reality", text: "Multi-branch stock, cash collection and field sales come up constantly, so we pair CRM with Zoho Inventory and mobile access rather than designing for head-office users only." }
    ],
    zoho: "The common starting point for Iraq is Zoho CRM with Zoho Books and Zoho Inventory, extended with Zoho Desk for after-sales and Zoho People for HR records on a Friday-Saturday calendar. There is no Zoho data centre in Iraq, so which region your account sits in is decided at sign-up, and we make that a deliberate choice with you rather than an accident of whoever clicked first. Configuration, testing, migration and handover are all done remotely, with training run in Arabic or English.",
    software: "Where Zoho stops, we build. For Iraq that usually means tools for people who are not at a desk, such as van sales, delivery confirmation, collections or site surveys, built on Zoho Creator or as a custom mobile application talking to Zoho through its APIs. The AI work tends to target messy input: reading scanned or photographed documents into records, and sorting inbound Arabic messages before a person has to.",
    zohoApps: ["crm", "books", "inventory", "desk", "people"],
    faqs: [
      { q: "Do you have an office or team in Iraq?", a: "No. Our only office is in Beirut Digital District and we work with Iraqi businesses remotely from there. We have no local staff and no local entity in Iraq, and on-site attendance is not part of a standard project; travel would be by arrangement only." },
      { q: "How does remote delivery actually work?", a: "Workshops and training run as scheduled video sessions inside your working day, configuration happens in your own Zoho account so you can see it change, and each decision is documented as we go. Baghdad is within an hour of Beirut time, so nothing has to be scheduled awkwardly." },
      { q: "Can the system follow a Friday-Saturday week?", a: "Yes, and it should. Working days, public holidays, leave accrual, shift rosters and Desk response targets are all set to your real week rather than a default imported from elsewhere." },
      { q: "Does Zoho work properly in Arabic?", a: "Yes, with right-to-left layouts, Arabic templates and Arabic-language training. Interface language is set per user, so mixed teams are normal rather than a problem." }
    ]
  },
  {
    slug: "jordan",
    country: "Jordan",
    kicker: "Jordan",
    title: "Zoho Implementation for Businesses in Jordan",
    metaTitle: "Zoho Implementation for Jordan",
    metaDescription:
      "Zoho implementation for businesses in Jordan, delivered remotely from Beirut in Arabic and English, with right-to-left layouts and JOD accounting.",
    facts: { dataCentre: "No in-country region — chosen at sign-up", currency: "JOD", week: "Friday–Saturday weekend", languages: "Arabic, English" },
    intro: [
      "We work with Jordanian businesses remotely from Beirut. Jordan keeps the same clock and shares Arabic and English as working languages, so a cross-border project runs with very little of the usual friction. The one difference worth configuring for is the week: Jordan rests on Friday and Saturday, where Lebanon does not.",
      "What Jordanian companies ask us for is rarely exotic. It is a sales team that has outgrown spreadsheets, a services firm whose projects, timesheets and invoices do not agree with each other, or an HR function trying to keep recruitment and employee records in one place. Accounting is configured around JOD, and the tax detail is taken from your own advisor at the start of the project."
    ],
    local: [
      { title: "Same time zone, different weekend", text: "Amman and Beirut keep the same clock, so remote workshops, reviews and support land in normal business hours for both sides. The weekend differs though, so leave calendars, timesheet periods and Zoho Desk business hours are set to a Friday-Saturday week rather than ours." },
      { title: "JOD as the base currency", text: "Books, price lists and reporting are set up with JOD as the base, with multi-currency added where you invoice regional or international clients in something else." },
      { title: "Arabic and English side by side", text: "Interfaces, templates and training are delivered in either language, with full right-to-left layout where Arabic is the working language of the team." },
      { title: "Services and project businesses", text: "A lot of the demand we see from Jordan is consulting, ICT and agency work, where the real requirement is connecting an opportunity to delivery, billable time and an invoice in one unbroken chain." }
    ],
    zoho: "Jordanian builds typically start with Zoho CRM and Zoho Books, then add Zoho People and Zoho Recruit where hiring and employee records are the pain point, with Zoho Analytics once leadership wants one view across sales, delivery and finance. We configure the working calendar, JOD reporting and Arabic or English interfaces per user. There is no Zoho data centre in Jordan, so the hosting region is chosen deliberately at sign-up and recorded.",
    software: "Alongside Zoho we build web and mobile applications, integrations and AI features. In Jordan that often means a client-facing portal, a connection between Zoho and a local payment or banking workflow, or reporting that a board will actually read instead of a dashboard nobody opens. Bilingual interfaces are built once and used in Arabic by one group and English by another, rather than maintained as two products.",
    zohoApps: ["crm", "books", "people", "recruit", "analytics"],
    faqs: [
      { q: "Are you based in Jordan?", a: "No. We have one office, in Beirut Digital District, and Jordanian clients are served remotely from there. There is no CSP4TECH entity and no local team in Jordan, and any travel to Amman would be by arrangement rather than a standard part of the engagement." },
      { q: "Will working across borders slow the project down?", a: "In practice, no. Amman and Beirut share the same clock, so workshops, testing and support happen the same day instead of across a gap. We do configure the Jordanian Friday-Saturday weekend explicitly, since leaving a default calendar in place is what causes SLA and leave-balance problems later." },
      { q: "Can you handle Jordanian tax configuration in Zoho Books?", a: "We configure the tax treatment, invoice formats and reporting your business needs, and we deliberately take the current rules from your own tax advisor or accountant at project start rather than guessing on your behalf." },
      { q: "Can you work with our existing accountant and systems?", a: "Yes. Most projects involve moving off spreadsheets or an older system, and we plan the migration, the period of running both in parallel, and the handover together with whoever keeps your books." }
    ]
  },
  {
    slug: "turkiye",
    country: "Turkiye",
    kicker: "Turkiye",
    title: "Zoho Implementation for Companies in Turkiye",
    metaTitle: "Zoho for Turkiye Businesses",
    metaDescription:
      "Zoho CRM and operations work for companies in Turkiye, delivered remotely from Beirut, with European data region hosting and e-Fatura planning.",
    facts: { dataCentre: "European region: Amsterdam (primary), Dublin (secondary)", currency: "TRY", week: "Saturday–Sunday weekend", languages: "Turkish (your content), English (our delivery)" },
    intro: [
      "Turkiye is close to Beirut on the clock, and we work with Turkish companies remotely from our office there. Project sessions and documentation run in English, while the Turkish wording your own users read sits in content we build with your team.",
      "The defining feature of a Zoho project in Turkiye is electronic invoicing. The country has a long-established mandatory e-invoicing regime, e-Fatura, enforced through accredited local infrastructure rather than inside a generic accounting product. Deciding how Zoho and that infrastructure meet is the first conversation we have, not the last."
    ],
    local: [
      { title: "e-Fatura shapes the design", text: "Electronic invoicing is mandatory and flows through accredited local channels, so the real design question is which system issues the legal document and how Zoho stays in step with it. We work that out with you and your tax advisor before anything is built." },
      { title: "European data region", text: "With no Zoho data centre in Turkiye, accounts are usually placed in the European region, Amsterdam primary with Dublin secondary. It is a decision taken at sign-up, and it is not something to shuffle casually afterwards." },
      { title: "Turkish-language rollout", text: "Turkish is the working language for most users, so we build the structure and you own the Turkish wording in picklists, templates and training material, with our side of the project documented in English." },
      { title: "TRY and currency exposure", text: "Reporting in TRY while buying or selling in other currencies needs multi-currency handling and a clear rate policy agreed up front rather than patched in after the first month-end." }
    ],
    zoho: "For Turkiye we most often implement Zoho CRM as the commercial core, with Zoho Inventory or a Zoho Creator application covering operations, Zoho Desk for support on a Saturday-Sunday calendar, and Zoho Analytics for consolidated reporting. Where accounting stays with a local system because of e-Fatura, we integrate rather than replace, so sales, stock and finance still reconcile against each other. The hosting region, usually Europe, is set deliberately when the account is created.",
    software: "Custom work carries more weight here than in most markets, because the gap between Zoho and a compliant invoicing chain is normally closed with integration. We build middleware and API connections between Zoho and the systems that issue legal documents, plus web and mobile applications for customers and field teams. Our AI work suits a document-heavy market: extraction, classification and routing of structured electronic documents with a person reviewing the output.",
    zohoApps: ["crm", "inventory", "creator", "desk", "analytics"],
    faqs: [
      { q: "Do you have a team or office in Turkiye?", a: "No. Our only office is in Beirut Digital District, and we work with companies in Turkiye remotely from there. We have no Turkish entity, no local consultants and no office in Istanbul or anywhere else in the country; occasional travel would be by arrangement." },
      { q: "Can Zoho issue e-Fatura documents?", a: "Mandatory electronic invoicing in Turkiye runs through accredited local infrastructure, so the honest answer is that it depends on the integration rather than on Zoho alone. We design the flow with your tax advisor and your e-invoicing provider, and in many projects Zoho runs sales and operations while the legal document is issued by that provider." },
      { q: "Which data centre will our Zoho account use?", a: "There is no Zoho data centre in Turkiye. For Turkish companies the European region, Amsterdam primary with Dublin secondary, is usually the natural choice, and the decision is taken at sign-up because moving later is disruptive." },
      { q: "Will our people use the system in Turkish?", a: "Interface language is set per user, and everything you control, field labels, picklists, invoice and email templates, can be in Turkish. Our project documentation and working sessions are in English." }
    ]
  },
  {
    slug: "georgia",
    country: "Georgia",
    kicker: "Georgia",
    title: "Zoho Implementation for Businesses in Georgia",
    metaTitle: "Zoho Implementation for Georgia",
    metaDescription:
      "Zoho implementation for businesses in Georgia, delivered remotely from Beirut, with European data region hosting and GEL multi-currency accounting.",
    facts: { dataCentre: "European region: Amsterdam (primary), Dublin (secondary)", currency: "GEL", week: "Saturday–Sunday weekend", languages: "Georgian (your content), English (our delivery)" },
    intro: [
      "We work with Georgian companies remotely from Beirut. Tbilisi runs an hour or two ahead, which leaves a long shared working day, and projects are delivered in English while Georgian sits in everything your own users read.",
      "Georgia tends to produce a particular kind of project: a business growing faster than its back office, often serving clients abroad, and wanting one system instead of five subscriptions that do not talk. That pushes the build toward lean configuration, clear multi-currency handling on a GEL base, and automation that saves administration rather than creating it."
    ],
    local: [
      { title: "A long overlapping day", text: "Tbilisi is an hour or two ahead of Beirut, so remote workshops, user testing and support all fit inside normal hours on both sides without anyone working late." },
      { title: "European region and EU-facing clients", text: "There is no Zoho data centre in Georgia, and the European region, Amsterdam primary with Dublin secondary, is usually the sensible default, particularly for companies whose customers sit inside the EU and ask where data is held." },
      { title: "GEL with cross-border billing", text: "Books, price lists and reporting are built on a GEL base with multi-currency on top, because many Georgian businesses invoice outside the country in something else." },
      { title: "Georgian-language content", text: "Georgian uses its own script, so we structure the system and you supply the Georgian wording for templates, picklists and customer documents. That keeps the translation accurate instead of approximate." }
    ],
    zoho: "A common Georgian starting point is Zoho CRM, or Zoho Bigin where the sales team is small, paired with Zoho Books for accounting and Zoho Desk for customer support on a Saturday-Sunday calendar. Zoho Analytics is added when the owner wants sales, finance and service in one view rather than three exports. The hosting region is chosen when the account is created, and for Georgia that is usually Europe.",
    software: "We also build custom software, web and mobile applications and AI features for Georgian clients, most often to connect Zoho with a local bank, a logistics provider or a booking system that has no off-the-shelf connector. Because the teams are usually small, the AI work asked for is about removing manual steps: pulling data out of documents, drafting replies, and flagging the records that genuinely need a human.",
    zohoApps: ["crm", "bigin", "books", "desk", "analytics"],
    faqs: [
      { q: "Do you have an office in Georgia?", a: "No. CSP4TECH has one office, in Beirut Digital District, and Georgian projects are delivered remotely from there. We have no local entity, no local consultants and no presence in Tbilisi, and any visit would be by arrangement." },
      { q: "Where will our data be hosted?", a: "There is no Zoho data centre in Georgia, so the region is a design decision made at sign-up. The European region, Amsterdam primary and Dublin secondary, is usually the natural choice, and we document it so you can answer the question when a client asks." },
      { q: "Can the system work in Georgian?", a: "The parts your users read can be. Field labels, picklists, quote and invoice templates, email templates and customer documents are all built with your Georgian wording, while our own project documentation stays in English." },
      { q: "We are a small team. Is Zoho too much for us?", a: "Not if it is scoped honestly. Small teams often start with Bigin, or a single CRM and Books pairing, and add applications as they grow. That is cheaper and far easier to adopt than configuring the whole suite at once." }
    ]
  },
  {
    slug: "south-africa",
    country: "South Africa",
    kicker: "South Africa",
    title: "Zoho Implementation for South Africa",
    metaTitle: "Zoho for South Africa, From Beirut",
    metaDescription:
      "Zoho implementation for companies in South Africa, delivered remotely from Beirut with good time overlap, ZAR accounting and English-first rollouts.",
    facts: { dataCentre: "No in-country region — chosen at sign-up", currency: "ZAR", week: "Saturday–Sunday weekend", languages: "English" },
    intro: [
      "South Africa sits close to Beirut time, which makes it one of the more straightforward markets for us to serve remotely. Projects run in English from first workshop to handover, and the Saturday-Sunday week matches ours, so there is no calendar translation to do.",
      "What South African companies usually bring us is a consolidation problem: several disconnected tools, a sales pipeline nobody trusts, and management waiting a week for numbers. Zoho fits that well, and the work is mostly disciplined configuration, careful data migration and reporting that gets used after go-live rather than admired once."
    ],
    local: [
      { title: "Shared working hours", text: "South African time is close to Beirut time, so a remote engagement feels like working with a team a city away rather than a continent away, and support does not queue overnight." },
      { title: "English-first delivery", text: "English is the working language of the South African businesses we talk to, so configuration, documentation, training and support all happen in one language with no translation layer in between." },
      { title: "ZAR with export exposure", text: "Books and reporting are built around ZAR, with multi-currency where you buy or sell abroad and exchange differences handled in a way your auditor can follow." },
      { title: "Hosting region is a decision", text: "There is no Zoho data centre in South Africa, so the region your account sits in is chosen at sign-up from the regions Zoho operates. We put that choice in writing, alongside any data protection obligations you confirm with your own legal advisor." }
    ],
    zoho: "South African projects usually centre on Zoho CRM with Zoho Desk for support, Zoho People for HR records, and Zoho Analytics pulling the whole picture into dashboards management can read without asking anyone. Where there is an online sales channel we add Zoho Commerce or integrate with the store you already run. Configuration, migration, testing and handover are all done remotely on a Saturday-Sunday calendar.",
    software: "Beyond Zoho we build custom web and mobile applications, integrations and AI features. In South Africa that commonly means tying Zoho to an existing ERP, payment gateway or logistics platform, or replacing a spreadsheet process with a proper application that enforces its own rules. The AI work stays practical: lead scoring based on your own history, document extraction, and support replies drafted for a person to approve before they go out.",
    zohoApps: ["crm", "desk", "people", "analytics", "commerce"],
    faqs: [
      { q: "Are you actually based in South Africa?", a: "No. Our one office is in Beirut Digital District and South African clients are served remotely from there. We have no South African entity, no local team and no local office, and we do not promise on-site attendance; travel would be by arrangement only." },
      { q: "Does the distance cause scheduling problems?", a: "Very little. South African time is close to Beirut time and both of us take a Saturday-Sunday weekend, so meetings, testing and support land in normal working hours on both sides." },
      { q: "Where will our Zoho data be stored?", a: "Zoho has no data centre in South Africa, so the hosting region is chosen when your account is created from the regions Zoho does operate. We go through the options with you and record the decision, and any data protection obligations are confirmed with your legal advisor." },
      { q: "Can you support us after go-live from that far away?", a: "Yes. Support is remote and scheduled, with agreed response windows that make use of the time overlap. We also train internal administrators during the project, so routine changes do not have to wait for us." }
    ]
  },
  {
    slug: "uk",
    country: "United Kingdom",
    kicker: "United Kingdom",
    title: "Zoho Implementation for United Kingdom Businesses",
    metaTitle: "Zoho Partner for UK Businesses",
    metaDescription:
      "CSP4TECH implements Zoho for United Kingdom businesses remotely from Beirut, covering VAT digital filing, post-Brexit data decisions and shared hours.",
    facts: { dataCentre: "European region: Amsterdam (primary), Dublin (secondary)", currency: "GBP", week: "Saturday–Sunday weekend", languages: "English" },
    intro: [
      "The United Kingdom is one of the easier markets for us to serve from Beirut, and the reason is simple: the working day lines up. We are a Zoho Authorized Partner with a single office in Beirut Digital District, implementing Zoho since 2018, and UK projects are delivered remotely from there. There is no London team and no UK entity.",
      "A UK Zoho project usually involves VAT with its digital filing requirement, a decision about where data is hosted now that the UK sits outside the EU, and the ordinary work of getting a sales and finance process into one system. We work in English and Arabic, so bilingual UK businesses with operations or suppliers in the Arab world get right-to-left layouts and Arabic templates as part of the build rather than as a later project."
    ],
    local: [
      { title: "VAT with digital filing", text: "The UK operates VAT with a digital filing requirement, so the accounting setup has to produce returns in the right form rather than numbers someone retypes. We configure Zoho Books for your VAT scheme, tax rates and filing workflow as confirmed by your accountant at project start, and leave the filing itself in their hands." },
      { title: "Where the data sits is a decision now", text: "The UK is served by Zoho's European region, with Amsterdam primary and Dublin secondary. Since Brexit the UK is outside the EU, so hosting UK data in the EU is a choice worth making deliberately rather than by default. We put the options in front of you before the account is created." },
      { title: "Hours that genuinely overlap", text: "Beirut is a little ahead of the UK, so our afternoon is your lunchtime and almost the whole working day is shared. You can have a same-day call, a same-day fix and an answer before you finish work, which is not true of every offshore arrangement." },
      { title: "Same weekend, same rhythm", text: "The working week in the UK runs with a Saturday and Sunday weekend, and so does ours. There is no mismatch to plan around, so sprint cycles, weekly check-ins and month-end support all sit on the same calendar." }
    ],
    zoho: "Typical UK builds pair Zoho CRM with Zoho Books for a clean quote-to-invoice-to-VAT-return flow, with Zoho People where HR records and leave need to come off spreadsheets and Zoho Bookings for service businesses that live on appointments. We migrate from the usual starting points, set up multi-currency so GBP sits alongside whatever else you trade in, and automate the handoffs between sales, delivery and finance. Zoho Analytics then gives you reporting across the whole chain instead of per-app dashboards.",
    software: "Alongside the Zoho work we build custom web and mobile applications, customer or supplier portals, and integrations with UK services such as your payment provider, courier or e-commerce platform. Our AI work on UK projects tends to be practical: triaging inbound enquiries, drafting first-pass responses for approval, and pulling structured data out of supplier documents. Where a UK business also needs Arabic-language or right-to-left interfaces, we build both directions properly rather than mirroring an English layout.",
    zohoApps: ["crm", "books", "people", "bookings", "analytics"],
    faqs: [
      { q: "Do you have a UK office or UK consultants?", a: "No. We have one office, in Beirut Digital District in Lebanon, with no UK entity, UK office or UK-based staff. UK clients are served remotely from Beirut. The overlap in working hours makes that arrangement work well in practice, but it is still a remote arrangement and we describe it as one." },
      { q: "What does the time difference mean day to day?", a: "Beirut sits a couple of hours ahead of UK time, so most of your working day overlaps with ours. In practice that means live calls in your morning or early afternoon, replies within the same working day, and no waiting overnight for an answer. We still agree the hours formally at the start so there is no ambiguity about when we are reachable." },
      { q: "Can you handle VAT and digital filing in Zoho Books?", a: "We configure Zoho Books so VAT is applied correctly and returns can be produced and filed digitally. The scheme you are on and the treatment of specific transactions are confirmed with your accountant at project start, and the filing itself stays with them. We build the system, not the tax position." },
      { q: "Should UK data be hosted in Zoho's European region?", a: "That is a decision to make rather than accept. The European region is Amsterdam primary with Dublin secondary, and the UK is no longer in the EU, so we walk you through the available Zoho regions and the implications before the account is set up. Changing region later is disruptive, which is why we raise it first." }
    ]
  },
  {
    slug: "usa",
    country: "United States",
    kicker: "United States",
    title: "Zoho Implementation for United States Businesses",
    metaTitle: "Zoho Partner for US Businesses",
    metaDescription:
      "CSP4TECH implements Zoho for United States businesses remotely from Beirut, covering US data residency, state sales tax setup and agreed overlap hours.",
    facts: { dataCentre: "Quincy (primary), Dallas (secondary) — in-country", currency: "USD", week: "Saturday–Sunday weekend", languages: "English" },
    intro: [
      "We work with United States businesses remotely from our one office in Beirut Digital District. CSP4TECH has been a Zoho Authorized Partner building Zoho systems since 2018, and for US clients that means configuration, data migration, automation and training delivered online rather than in a meeting room. If you want a consultancy with an American entity and staff in your city, we are not that, and we would rather you know it before the first call.",
      "What we do bring is a team that knows the Zoho platform end to end and will not need to learn it on your project. US engagements tend to turn on three things: hosting the data in Zoho's US region, getting sales tax handled correctly across the states you sell into, and agreeing how we work together across a wide time gap. We set all three out in writing before anything is built."
    ],
    local: [
      { title: "Sales tax, not one national VAT", text: "The United States has state-by-state sales tax rather than a single national VAT, so the tax setup depends on where you have obligations rather than on one country-wide rule. We configure Zoho Books or Zoho Billing to match what your own accountant or tax advisor confirms at project start, and we do not guess at nexus or rates." },
      { title: "Data stays in the US region", text: "Zoho runs in-country data centres in the United States, with Quincy as the primary site and Dallas as secondary. If your procurement or security review asks where customer data physically sits, that is a straightforward answer, and we set the account up in the US region from the beginning rather than migrating it later." },
      { title: "The time-zone gap is real", text: "Beirut and the United States overlap poorly. A Beirut afternoon is an East Coast morning at best, and the West Coast barely overlaps a normal Beirut working day at all. We handle it with a fixed block of agreed overlap hours each week for live calls, early starts on our side when a workshop needs them, and asynchronous handover for everything else." },
      { title: "Written by default, not by exception", text: "Because live time is limited, the project runs on documents: written configuration notes, recorded walkthroughs, and a daily or weekly update you can read before your day starts. On-site work is available in Lebanon only; travel to the US would be by separate arrangement and is not something we promise as part of a project." }
    ],
    zoho: "For US clients the usual shape is Zoho CRM as the system of record, Zoho Books or Zoho Billing for invoicing and subscriptions, and Zoho Desk where support volume justifies it, all set up in Zoho's US data region. We handle the migration from whatever you are on now, build the pipelines, approvals and automation around how your team actually sells, and connect the apps so data is entered once. Reporting is built in Zoho Analytics so leadership sees one set of numbers rather than exports from four places.",
    software: "When Zoho alone does not cover a process, we build the missing piece: internal tools and portals on Zoho Creator, custom web and mobile apps, and integrations with the US payment, shipping or accounting services you already use. We also build AI features into these systems, such as summarising inbound enquiries, drafting replies for a human to approve, or extracting data from documents. Everything is specified and signed off in writing first, since we cannot walk over to your desk to check an assumption.",
    zohoApps: ["crm", "books", "desk", "marketingplus", "analytics"],
    faqs: [
      { q: "Are you actually based in the United States?", a: "No. CSP4TECH has one office, in Beirut Digital District in Lebanon, and no US entity, US office or US-based staff. All United States work is delivered remotely from Beirut. We say this plainly because it is the kind of thing that should not come as a surprise in week two." },
      { q: "How do you deal with the time difference?", a: "We agree a recurring overlap window before the project starts, usually a Beirut afternoon that lands in your morning, and we protect it for calls, workshops and demos. Outside that window the work continues and you get written updates and recorded walkthroughs to review on your own time. For West Coast clients the overlap is narrower still, so we lean harder on asynchronous handover and fewer, longer live sessions." },
      { q: "Can you handle sales tax in Zoho Books?", a: "We configure the tax structure, tax rates, product tax classes and reporting that your accountant or tax advisor specifies. We do not provide tax advice ourselves and we do not determine where you have obligations. Confirming that with your own advisor is the first item on the project checklist." },
      { q: "Will our data be hosted in the United States?", a: "Yes, if you want it to be. Zoho operates US data centres with Quincy primary and Dallas secondary, and we create the account in that region at the outset. Moving regions after the fact is disruptive, so this is a decision we make with you on day one." }
    ]
  },
  {
    slug: "india",
    country: "India",
    kicker: "India",
    title: "Zoho Implementation for Businesses in India",
    metaTitle: "Zoho Implementation Partner for India",
    metaDescription:
      "CSP4TECH implements Zoho for businesses in India remotely from Beirut, covering GST, e-invoicing readiness, Mumbai data residency and overlapping hours.",
    facts: { dataCentre: "Mumbai (primary), Chennai (secondary) — in-country", currency: "INR", week: "Saturday–Sunday weekend", languages: "English" },
    intro: [
      "India is where Zoho itself was built, and we are not going to pretend that gives us any special standing. CSP4TECH is a Zoho Authorized Partner with one office, in Beirut Digital District, implementing Zoho for clients since 2018, and Indian engagements are delivered remotely from Beirut. You have no shortage of implementation options locally, so the honest question is what a Beirut team adds.",
      "Usually it is one of two things. Either you are an Indian business with operations, customers or group companies in the Middle East and want Arabic and right-to-left handled properly alongside English, or you want deep Zoho configuration work done by a team whose whole practice is the Zoho platform. GST, mandatory electronic invoicing and multi-entity structures shape almost every India build, and we scope all of that before writing a line of configuration."
    ],
    local: [
      { title: "GST and mandatory e-invoicing", text: "India runs GST alongside a mandatory electronic invoicing system, so an invoice is not just a document in your accounts, it is a filing with a format to respect. We configure Zoho Books for your registrations, place of supply logic and e-invoicing flow according to what your chartered accountant confirms at project start." },
      { title: "In-country data centres", text: "Zoho operates Indian data centres with Mumbai primary and Chennai secondary, so data residency in India is a genuine option rather than a workaround. We create the account in the India region from the start, which matters when a group policy or a customer contract requires it." },
      { title: "Partial overlap, structured around it", text: "India is a few hours ahead of Beirut, so your afternoon is our late morning and the overlap is real but not the whole day. We set a standing window inside that overlap for calls and reviews, and everything else moves asynchronously with written notes so your team is not waiting on our morning to continue." },
      { title: "Multi-entity and multi-branch by default", text: "Indian businesses often run several registered entities, branches or GSTINs under one group, and reporting has to roll up without losing entity-level detail. We design the Zoho structure for that from the outset instead of bolting on a second organisation later, and keep INR as the base with other currencies where you trade." }
    ],
    zoho: "A common India build is Zoho CRM for sales, Zoho Books for GST-compliant accounting and e-invoicing, and Zoho Inventory where stock, warehouses and order fulfilment are part of the business. We migrate existing data, map approval chains onto how your entities actually work, and automate the handoff from order to invoice to dispatch. Zoho Creator fills the gaps where a process is specific to your business and no standard module fits.",
    software: "Beyond configuration we build custom web and mobile applications, field and dealer portals, and integrations with the Indian payment gateways, logistics providers and marketplaces you already depend on. We also build AI into these systems where it saves real time, such as classifying inbound leads, summarising long customer threads, or reading data out of purchase documents. Bilingual English and Arabic interfaces, including full right-to-left layouts, are part of what we do rather than a separate engagement.",
    zohoApps: ["crm", "books", "inventory", "creator", "desk"],
    faqs: [
      { q: "Are you based in India?", a: "No. CSP4TECH has a single office in Beirut Digital District in Lebanon, with no Indian entity, office or staff. Work for Indian clients is delivered remotely from Beirut. Zoho being an Indian company does not change that, and it is not something we take credit for." },
      { q: "How do the working hours line up?", a: "India sits a few hours ahead of Beirut, so there is a solid overlap in your afternoon and our late morning, but not a full shared day. We book recurring calls inside that window and run the rest asynchronously, with written updates waiting for your team at the start of their day." },
      { q: "Can you set up GST and e-invoicing in Zoho Books?", a: "We configure the registrations, tax groups, place of supply rules and e-invoicing workflow in Zoho Books, and test them against your real transaction types. The treatment of specific supplies and the correctness of your filings are confirmed with your own chartered accountant at project start. We do not give tax advice." },
      { q: "Why hire a Beirut team when there are Indian partners?", a: "Often you should not, and we will say so if a local partner is the better fit. The cases where we add something are bilingual Arabic and English systems, businesses with Gulf or Levant operations in the same Zoho account, and deep platform work where you want a team that does only Zoho. If none of that applies, you are better served locally." }
    ]
  },
  {
    slug: "singapore",
    country: "Singapore",
    kicker: "Singapore",
    title: "Zoho Implementation for Singapore Businesses",
    metaTitle: "Zoho Partner for Singapore Businesses",
    metaDescription:
      "CSP4TECH implements Zoho for Singapore businesses remotely from Beirut, covering GST, national e-invoicing, Singapore data residency and overlap hours.",
    facts: { dataCentre: "Tai Seng (primary), Sunview (secondary) — in-country", currency: "SGD", week: "Saturday–Sunday weekend", languages: "English" },
    intro: [
      "Singapore businesses tend to arrive with a clear specification and a low tolerance for vagueness, which suits how we work. CSP4TECH is a Zoho Authorized Partner operating from one office in Beirut Digital District, implementing Zoho since 2018, and Singapore projects are delivered remotely from Beirut. We have no Singapore entity and no staff in the region, and that is stated up front rather than buried.",
      "The practical shape of a Singapore engagement is driven by three things: GST with the national e-invoicing network, Zoho's in-country data centres, and the fact that many Singapore companies run a regional operation out of a single base. We design the Zoho account for that from the start, with SGD as the base currency and other markets added as separate entities or books rather than as an afterthought."
    ],
    local: [
      { title: "GST and the national e-invoicing network", text: "Singapore runs GST alongside a national e-invoicing network, which changes how invoices leave your system rather than just how they look. We configure Zoho Books for your GST treatment and e-invoicing flow based on what your accountant or tax agent confirms at project start, and we test it with your real document types before go-live." },
      { title: "Data residency in Singapore", text: "Zoho operates Singapore data centres with Tai Seng primary and Sunview secondary, so data can stay in-country. That matters when a client contract, a group IT policy or a vendor assessment asks the question directly, and we set the region at account creation rather than trying to move it later." },
      { title: "Overlap in your afternoon, our morning", text: "Singapore is several hours ahead of Beirut, so your afternoon is our morning and the shared window is a usable block rather than a full day. We schedule calls, demos and sign-offs inside it and keep the rest written, so your team can review progress first thing without waiting for Beirut to wake up." },
      { title: "Built for a regional footprint", text: "A lot of Singapore businesses sell across Southeast Asia and beyond from one office, which means multiple currencies, multiple tax treatments and reporting that has to consolidate. We structure the Zoho account so each market can be handled correctly while leadership still sees one consolidated view." }
    ],
    zoho: "Singapore builds usually centre on Zoho CRM and Zoho Books, with Zoho Inventory or Zoho Commerce where there is stock, distribution or an online storefront to run. We migrate your existing data, configure GST and e-invoicing, set SGD as base with multi-currency for the rest of the region, and automate the quote-to-cash path so nothing is retyped between systems. Zoho Analytics is layered on top for consolidated reporting across entities and currencies.",
    software: "We also build the pieces Zoho does not cover: custom web and mobile apps, customer and partner portals, and integrations with regional payment providers, logistics platforms and marketplaces. AI work on these projects is kept concrete, such as routing inbound enquiries, summarising support history before a call, or extracting line items from supplier documents. Scope, acceptance criteria and test cases are written down before development starts, which is how a remote build stays predictable.",
    zohoApps: ["crm", "books", "inventory", "commerce", "analytics"],
    faqs: [
      { q: "Do you have anyone in Singapore?", a: "No. CSP4TECH has one office, in Beirut Digital District in Lebanon, and no Singapore entity, office or staff. Singapore clients are served remotely from Beirut. If your procurement process requires a locally incorporated vendor, we are not a fit and would rather establish that early." },
      { q: "How does the time difference affect the project?", a: "Singapore runs several hours ahead of Beirut, so the overlap is your afternoon and our morning. We fix a recurring window inside it for live sessions and decisions, and handle the rest asynchronously with written updates posted at the end of our day so they are ready at the start of yours." },
      { q: "Can Zoho handle GST and e-invoicing for us?", a: "We configure Zoho Books for your GST registration, tax treatment and the e-invoicing flow, and we validate it against your actual invoice types before launch. The tax positions themselves are confirmed with your accountant or tax agent at project start. We implement the system and do not advise on tax." },
      { q: "Will our data stay in Singapore?", a: "It can. Zoho's Singapore region uses Tai Seng as primary and Sunview as secondary, and we create the account in that region from the outset when residency matters to you. Because switching regions afterwards is disruptive, this is agreed before any configuration begins." }
    ]
  },
  {
    slug: "australia",
    country: "Australia",
    kicker: "Australia",
    title: "Zoho Implementation for Businesses in Australia",
    metaTitle: "Zoho Partner for Australia",
    metaDescription:
      "CSP4TECH implements Zoho for businesses in Australia remotely from Beirut, covering GST, Sydney data residency and an honest plan for the time-zone gap.",
    facts: { dataCentre: "Sydney (primary), Melbourne (secondary) — in-country", currency: "AUD", week: "Saturday–Sunday weekend", languages: "English" },
    intro: [
      "Australia is the hardest of our remote markets to serve, and the reason is the clock. CSP4TECH is a Zoho Authorized Partner with one office in Beirut Digital District, implementing Zoho since 2018, and Australian work is delivered remotely from Beirut with no Australian entity, office or staff. Beirut and Australia overlap only at the edges of the day, so a project only works if both sides plan for that rather than hope around it.",
      "When clients do choose us anyway, it is usually because they want a team that works on Zoho full time and is willing to run the engagement in writing. GST, a real-time payroll reporting obligation and Zoho's Australian data centres shape most builds here. We set out the working arrangement, the overlap window and the documentation rhythm in the proposal, before anyone commits."
    ],
    local: [
      { title: "The time zone is the main constraint", text: "Australia sits well ahead of Beirut, so the honest position is that we overlap only at the edges of the day: your late afternoon or evening against our morning. We agree a standing window there for live calls and take early starts on our side when a workshop needs more time, and everything else moves asynchronously. Anyone telling you this gap is a non-issue has not run a project across it." },
      { title: "GST and real-time payroll reporting", text: "Australia runs GST and also requires payroll to be reported to the tax authority in real time, which means the HR and finance side of the setup has to be right rather than approximate. We configure Zoho Books and the HR modules to the structure your accountant and payroll adviser confirm at project start, and we do not improvise on reporting obligations." },
      { title: "Australian data residency", text: "Zoho operates Australian data centres with Sydney primary and Melbourne secondary, so your data can stay onshore. That is often decisive for government-adjacent, health or education-linked work, and we create the account in the Australian region before any configuration rather than migrating it afterwards." },
      { title: "Written handover is the method, not a fallback", text: "Because live time is scarce, every decision, configuration change and open question is recorded in writing, with short recorded walkthroughs instead of long live demos. You review work at the start of your day and we act on your comments during ours, which turns the time gap into a handover cycle. On-site work is available in Lebanon only, and travel to Australia would be a separate arrangement we do not promise as standard." }
    ],
    zoho: "Australian builds commonly combine Zoho CRM with Zoho Books for GST-ready accounting in AUD, Zoho People for HR records and leave, and Zoho Desk where support is a distinct function. We migrate from whatever you are running now, build the automation around your sales and service process, and make sure the finance and HR data lines up with what your advisers need to report. Zoho Creator covers the processes that are specific to your business and have no off-the-shelf equivalent.",
    software: "We build custom web and mobile applications, field and customer portals, and integrations with the Australian payment, logistics and accounting services already in your stack. AI work here is deliberately narrow and useful: summarising long email threads before a call, drafting replies for human approval, and extracting fields from supplier or compliance documents. Since live hours are limited, every build starts from a written specification with acceptance criteria you can check without us on the call.",
    zohoApps: ["crm", "books", "people", "desk", "creator"],
    faqs: [
      { q: "Do you have an Australian office or team?", a: "No. CSP4TECH has one office, in Beirut Digital District in Lebanon, with no Australian entity, office or staff. All Australian work is delivered remotely from Beirut. There is no Sydney or Melbourne team behind this page, and we would rather say so than let you find out later." },
      { q: "How can this work with such a large time difference?", a: "By treating it as a handover rather than a shared day. Beirut overlaps Australia only at the edges, typically your late afternoon or evening against our morning, so we fix a standing call in that window and run the rest asynchronously. If your project needs frequent same-hour collaboration, an Australian partner will serve you better." },
      { q: "Can you handle GST and payroll reporting in Zoho?", a: "We configure Zoho Books for GST and set up the HR and payroll data structure so the reporting your advisers submit is produced from clean records. The specific obligations, including the real-time payroll reporting requirement, are confirmed with your accountant or payroll adviser at project start. We implement, they advise." },
      { q: "Will our data be stored in Australia?", a: "It can be. Zoho's Australian region uses Sydney as primary and Melbourne as secondary, and we create the account in that region at the outset when onshore hosting is a requirement. Moving regions later is disruptive, so the decision is made before configuration starts." }
    ]
  },
  {
    slug: "hungary",
    country: "Hungary",
    kicker: "Hungary",
    title: "Zoho Implementation for Businesses in Hungary",
    metaTitle: "Zoho Partner for Hungary",
    metaDescription:
      "CSP4TECH implements Zoho for businesses in Hungary remotely from Beirut, covering real-time invoice reporting, GDPR, EU hosting and close working hours.",
    facts: { dataCentre: "European region: Amsterdam (primary), Dublin (secondary)", currency: "HUF", week: "Saturday–Sunday weekend", languages: "Hungarian (your content), English (our delivery)" },
    intro: [
      "Hungary is, in clock terms, our closest remote market: Beirut and Budapest are almost on the same working day. CSP4TECH is a Zoho Authorized Partner with a single office in Beirut Digital District, implementing Zoho since 2018, and Hungarian projects are delivered remotely from there. We have no Hungarian entity, office or staff, which is worth saying before anything else.",
      "Hungarian Zoho work is dominated by one requirement: invoices have to be reported to the tax authority in real time, so the accounting setup is part of a live compliance flow rather than a quiet back office. Add GDPR applying directly as an EU member state, HUF as the base currency with EUR often alongside it, and the shape of the project becomes clear early."
    ],
    local: [
      { title: "Real-time invoice reporting", text: "Hungary requires invoices to be reported to the tax authority in real time, which means your invoicing system has to work correctly every day, not just at period end. We configure Zoho Books and the surrounding process around that obligation as your accountant confirms it at project start, and we test it against your real invoice types before anything goes live." },
      { title: "GDPR applies directly", text: "As an EU member state, Hungary is covered by GDPR without any adequacy workaround, so data handling, retention and access rights need to be designed into the system rather than documented afterwards. We set roles, field-level permissions and retention behaviour in Zoho to match the policy your own advisers confirm." },
      { title: "European hosting, by design", text: "Hungary is served by Zoho's European region, with Amsterdam primary and Dublin secondary. For an EU business that is usually the straightforward choice, and we create the account in that region from the start so there is no later migration and no awkward question in a vendor review." },
      { title: "Almost the same working day, but not the same language", text: "Beirut sits only slightly ahead of Hungarian time, so nearly the whole working day overlaps and same-day decisions are normal. The real gap is language: we work in English and Arabic, not Hungarian. Hungarian-language documents, user-facing text and any Hungarian-language training are handled with your own team or a translator, and we plan that into the project rather than discovering it at user acceptance." }
    ],
    zoho: "Hungarian builds typically pair Zoho CRM with Zoho Books configured for real-time invoice reporting, HUF as the base currency and EUR or other currencies where you trade across the EU. We migrate existing records, build the approval and automation layer around your sales and finance process, and use Zoho Creator for the steps that are specific to your business. Zoho Analytics provides the reporting layer so management figures come from one source.",
    software: "We also build custom web and mobile applications, portals for customers or partners, and integrations with the invoicing, payment and ERP systems common in the Hungarian market. AI work here stays practical: summarising inbound enquiries, drafting responses a person approves, and extracting structured data from invoices and supplier documents. Because the overlap in working hours is wide, this work can run with frequent short reviews rather than long asynchronous gaps.",
    zohoApps: ["crm", "books", "creator", "analytics", "mail"],
    faqs: [
      { q: "Are you based in Hungary or anywhere in the EU?", a: "No. CSP4TECH has one office, in Beirut Digital District in Lebanon, with no Hungarian or EU entity, office or staff. Hungarian clients are served remotely from Beirut. If your procurement rules require an EU-established supplier, that is a genuine obstacle and we would rather raise it now." },
      { q: "What about the time difference?", a: "It is the smallest of any market we serve remotely. Beirut is only slightly ahead of Hungarian time, so almost the entire working day is shared and you can expect same-day calls, same-day answers and live review sessions. The Saturday and Sunday weekend is the same on both sides, so the weekly rhythm matches." },
      { q: "Can Zoho Books handle real-time invoice reporting?", a: "We configure Zoho Books and the invoicing process so that reporting to the tax authority happens as required, and we validate it with your real document types before go-live. The exact obligations and treatment of specific transactions are confirmed with your accountant or tax advisor at project start. We build the system; the tax position stays with them." },
      { q: "Can you deliver the system in Hungarian?", a: "Our working languages are English and Arabic, including full right-to-left layouts, and we do not write Hungarian. Hungarian-language field labels, templates, documentation and end-user training are produced with your team or a translator you appoint, and we build that step into the plan with time allowed for it. Being upfront about this avoids a surprise at user acceptance." }
    ]
  },
];
