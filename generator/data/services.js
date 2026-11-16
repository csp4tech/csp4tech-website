// The service pages: one page per thing CSP4TECH is actually hired to do.
//
// ACCURACY RULES for anything added here (same as solutions.js, plus three
// the owner set for these pages specifically):
// - The only partner claim is "Zoho Authorized Partner".
// - No invented statistics, client names, testimonials, awards or case studies.
// - NO PRICING of any kind: no fees, no rates, no "from", no license prices.
// - NO fixed post-go-live support period. Say support continues; never say
//   for how long.
// - Do not describe HOW ongoing support is sold (contracts, hours, retainers).
// - Zoho Payroll does not cover Lebanon. Never put "payroll" in zohoApps.
// - One office, in Beirut Digital District. On site in Lebanon, remote elsewhere.
//
// Text here is injected into HTML as-is AND into JSON-LD, so: no raw "&" in
// title / metaDescription / kicker / faqs, and no HTML inside faqs.
//
// zohoApps slugs must match generator/data/products.js.
// `related` hrefs are checked by checklinks.js like every other link.
module.exports = [
  {
    slug: "zoho-implementation",
    kicker: "Implementation",
    title: "Zoho Implementation Services from a Zoho Authorized Partner",
    metaTitle: "Zoho Implementation Services | Lebanon & Gulf | CSP4TECH",
    metaDescription: "Zoho implementation by a Zoho Authorized Partner in Beirut: requirements signed off first, then configuration, data migration, testing, training and go-live.",
    cardText: "Zoho set up around how your business really runs: requirements agreed in writing, then configuration, data, testing, training and go-live.",
    intro: [
      "Most Zoho projects that fail were switched on, not implemented. The licenses were bought, the defaults were left alone, and three months later the team is back in spreadsheets. We do it the slower, safer way: your process is written down and agreed before anything is configured, and nothing goes live until your own people have run their own work through it.",
      "An implementation is a sequence, and the order matters. Skipping the written requirements is how a project ends up rebuilt twice. Skipping testing is how the first real invoice comes out wrong in front of a customer. The plan below is the order we work in, and the two points where we stop and wait for your approval."
    ],
    glance: [
      ["What does a Zoho implementation include?", "A written requirements document, configuration of modules, fields, pipelines, automation and permissions, data migration, testing with your own scenarios, training for users and admins, go-live, and support afterwards."],
      ["How long does it take?", "Most of our implementations go live in two to eight weeks. One app for a small team sits at the short end. Several apps with data migration and integrations sit at the long end."],
      ["Who does the work?", "Our own team in Beirut, in Arabic or English. We work on site in Lebanon and remotely everywhere else."],
      ["Do we need to buy Zoho before we start?", "No. It is better to choose the edition after the requirements are clear than before. We can supply the licenses as a Zoho Authorized Partner when you are ready."]
    ],
    signsHeading: "Signs you need an implementation, not just a login",
    signs: [
      "You have bought Zoho, or are about to, and nobody inside the company has the time to set it up properly.",
      "The business runs on spreadsheets, WhatsApp groups and one person's memory.",
      "A previous system was abandoned because it never matched how the team actually works.",
      "Sales, accounts and support each keep their own copy of the customer, and the copies disagree."
    ],
    plan: {
      heading: "How a Zoho implementation runs, stage by stage",
      lead: "Seven stages, always in this order. You approve the requirements in writing before we configure anything, and you approve the tested system before it goes live.",
      steps: [
        { name: "Discovery", text: "We sit with the people who do the work, not only the people who manage it. Sales, accounts, operations: each walks us through a real week, including the exceptions nobody has written down.", youGet: "A shared picture of how work moves today" },
        { name: "Requirements document", text: "Everything we heard is written up: the modules, the fields, the stages, the approvals, the reports, and what is out of scope. You read it, correct it and sign it. Nothing is configured before that signature.", youGet: "A signed scope in plain language" },
        { name: "Configuration", text: "We build in your own Zoho account: modules and layouts, pipelines, automation, roles and permissions, templates and reports. You watch progress in the system itself, not in slide decks.", youGet: "A working system you can click through" },
        { name: "Data migration", text: "Customers, open deals, items and balances are cleaned, mapped and loaded. A trial load comes first, so the problems surface before the real cut-over and not during it.", youGet: "Your real data, checked against the source" },
        { name: "Testing with your scenarios", text: "Your team runs its own cases through the system: a normal order, an awkward one, a return, a month-end. Whatever does not hold up is fixed before anyone depends on it.", youGet: "Your sign-off that it handles real work" },
        { name: "Training", text: "Hands-on sessions by role, on your configured system with your own data, in Arabic or English. Whoever will administer the system gets a separate, deeper session.", youGet: "Users who can work, an admin who can change things" },
        { name: "Go-live and support", text: "We agree a cut-over date, switch, and stay close while the team settles in. The first weeks always raise questions and small adjustments. After that, support carries on for as long as you want it.", youGet: "A live system, with us still on the phone" }
      ]
    },
    includedHeading: "What you have at the end",
    included: [
      { title: "A requirements document", text: "The scope you signed, kept as the reference for the whole project. If something is not in it, we talk about it before it is built, not after." },
      { title: "A configured Zoho system", text: "Modules, layouts, pipelines and automation shaped around your process, in an account that belongs to your company." },
      { title: "Clean, migrated data", text: "The records you actually need, de-duplicated and reconciled against the old system, so the team trusts the numbers from the first day." },
      { title: "Roles and permissions", text: "Who can see, edit, export and approve what. Decided with you on purpose, not left as everyone-sees-everything." },
      { title: "Reports and dashboards", text: "The handful of reports each manager will really open, built on the live data and not exported to a spreadsheet first." },
      { title: "A trained team", text: "Users trained on their own screens, and at least one person on your side who can add a field or a user without calling us." }
    ],
    limitsHeading: "Where we will slow you down",
    limits: [
      "If the process itself is broken, software only makes the mess faster. We will say so, and help fix the process first.",
      "We do not recommend switching on every app on day one. Start with the one that hurts most, get it trusted, then add the next.",
      "Zoho Payroll does not cover Lebanon. Lebanese payroll needs a different route, and we will tell you which before you buy anything."
    ],
    zohoApps: ["crm", "books", "inventory", "people", "desk", "one"],
    related: [
      { label: "Zoho migration services", href: "/services/zoho-migration" },
      { label: "Zoho training for teams and admins", href: "/services/zoho-training" },
      { label: "Every Zoho app we implement", href: "/zoho-products/" },
      { label: "Zoho partner in Beirut", href: "/lebanon/zoho-partner-beirut" },
      { label: "CRM software in Lebanon", href: "/solutions/crm-software-lebanon" },
      { label: "Zoho One or a smaller suite?", href: "/zoho-suites" }
    ],
    faqs: [
      { q: "How long does a Zoho implementation take?", a: "Most of our implementations go live in two to eight weeks. The range depends on how many apps are involved, how much data has to be migrated, how many integrations there are, and how quickly decisions are made on your side. We give a timeline after the discovery stage, when we have seen the real process." },
      { q: "Can you implement Zoho remotely?", a: "Yes. In Lebanon we work on site as a matter of routine. For clients in the Gulf, Iraq, North Africa and elsewhere we work remotely from Beirut, by video call and screen share, during overlapping business hours." },
      { q: "Is the system built in our own Zoho account?", a: "Yes. The system is built in a Zoho account registered to your company, with someone on your side as the owner. We work as users you add to that account, so the system and the data stay yours." },
      { q: "What do you need from us during the project?", a: "One person who knows how the work is really done and can answer questions quickly, a decision-maker for the two sign-offs, access to your existing data, and time from the team for testing and training. Projects slow down when decisions wait, far more often than when configuration does." },
      { q: "What happens after go-live?", a: "We stay involved. Questions and small adjustments in the first weeks are normal and expected. After that, ongoing support is available so the system keeps up as the business changes." },
      { q: "Which Zoho apps do you implement?", a: "All 39 Zoho apps listed on this site. The ones we set up most often are Zoho CRM, Zoho Books, Zoho Inventory, Zoho People, Zoho Desk and Zoho Creator, alone or together under Zoho One." }
    ]
  },

  {
    slug: "zoho-consulting",
    kicker: "Consulting",
    title: "Zoho Consulting Services: the Right Apps, in the Right Order",
    metaTitle: "Zoho Consulting Services | Lebanon & Gulf | CSP4TECH",
    metaDescription: "Zoho consulting from a Zoho Authorized Partner in Beirut: which apps you need, which edition, what to build first and what not to buy. First consultation free.",
    cardText: "Advice before you buy or build: which Zoho apps you need, which edition, what to do first, and what to leave out.",
    intro: [
      "Zoho sells dozens of apps and several bundles that overlap. Most businesses need between two and five of them. Consulting is the work of deciding which ones, in what order, on which edition, and what you should not buy at all.",
      "It is the cheapest stage of any Zoho project to get right and the most expensive to get wrong. A wrong edition means hitting a limit a few months in. A wrong order means the accounts team is asked to trust numbers that sales has not started entering yet. We would rather spend a few conversations here than rebuild later."
    ],
    glance: [
      ["What is Zoho consulting?", "An independent look at how your business works, followed by a written recommendation: which Zoho apps and editions fit, what to implement first, what stays outside Zoho, and what the main risks are."],
      ["Is the first consultation free?", "Yes. The first conversation is free. It is usually enough for us to say whether Zoho fits and roughly what shape the project would take."],
      ["Do we have to implement with you afterwards?", "No. The recommendation is yours. You can act on it with us, with your own team, or with someone else."],
      ["We already use Zoho. Is consulting still useful?", "Often more so. For a system that exists but is not working, the starting point is our audit and repair service."]
    ],
    signsHeading: "When to talk to a consultant first",
    signs: [
      "You are comparing Zoho One with buying two or three apps separately and cannot tell which is cheaper in practice.",
      "Two vendors have recommended two different systems, and each has a reason.",
      "You know what hurts, such as late invoices, lost leads or stock nobody trusts, but not which software fixes it.",
      "The business is growing, and the decision made now has to still make sense with three times the staff."
    ],
    plan: {
      heading: "How a consulting engagement runs",
      lead: "Short on purpose. The aim is a decision you can defend, not a thick report.",
      steps: [
        { name: "First conversation", text: "You describe the business and what is going wrong. We ask the questions a system will ask later: who owns the customer, where the price comes from, who approves what. This conversation is free.", youGet: "A straight answer on whether Zoho fits" },
        { name: "Process review", text: "We look at how work actually moves: the documents, the handovers, the spreadsheets, the approvals by WhatsApp. This is where the real requirements are, and they are rarely the ones first mentioned.", youGet: "Your process, written down as it really is" },
        { name: "App and edition mapping", text: "Each need is matched to a Zoho app and an edition, or marked as something Zoho should not do. Where two routes exist, such as configuring Zoho CRM or building in Zoho Creator, we set out both with the trade-off.", youGet: "A shortlist with reasons" },
        { name: "Roadmap", text: "The order of work: what goes first, what waits, what depends on what, and which data has to move. Phased so that each stage is useful on its own and can be stopped after.", youGet: "A phased plan you can act on" },
        { name: "Your decision", text: "We walk you through the recommendation and answer the hard questions. Then it is your call: go ahead, go ahead in part, or do nothing yet.", youGet: "A decision made on facts" }
      ]
    },
    includedHeading: "What the recommendation covers",
    included: [
      { title: "App selection", text: "Which Zoho apps solve which problem, and which apps you have been told you need but do not." },
      { title: "Edition and user sizing", text: "The edition that covers your requirements without paying for features nobody will open, and how many users really need a license." },
      { title: "A phased roadmap", text: "What to implement first, second and third, with the reason for the order." },
      { title: "The integration map", text: "What stays outside Zoho, such as a point-of-sale system, a bank or a website, and how each would connect." },
      { title: "Data and migration risks", text: "What state your existing data is in, what is worth moving, and what should be left behind." },
      { title: "The list of things not to do", text: "Customizations that would cost more to maintain than they save, and apps that duplicate something you already own." }
    ],
    limitsHeading: "What you should know about our advice",
    limits: [
      "We are a Zoho Authorized Partner and we earn our living implementing Zoho. That is exactly why we say so plainly when Zoho is the wrong fit: a client pushed into the wrong system does not stay a client.",
      "For a very small team, the honest advice is sometimes a simpler tool such as Bigin, or no new software yet.",
      "Zoho Payroll does not cover Lebanon. Any plan we write for a Lebanese company treats payroll separately."
    ],
    zohoApps: ["one", "crm", "books", "people", "creator", "bigin"],
    related: [
      { label: "Compare Zoho One and the smaller suites", href: "/zoho-suites" },
      { label: "Zoho compared with Salesforce, QuickBooks and others", href: "/compare/" },
      { label: "Custom software or off-the-shelf?", href: "/ai-apps/custom-software-vs-off-the-shelf-software" },
      { label: "Zoho license advice", href: "/services/zoho-licenses" },
      { label: "Zoho implementation services", href: "/services/zoho-implementation" },
      { label: "Solutions by industry", href: "/solutions/" }
    ],
    faqs: [
      { q: "Is the first Zoho consultation really free?", a: "Yes. The first conversation is free and carries no obligation. It is normally enough to tell you whether Zoho is a sensible fit and what kind of project you would be looking at." },
      { q: "Which Zoho apps does my business need?", a: "It depends on where the work gets stuck. A sales-led business usually starts with Zoho CRM. A business whose pain is invoicing and VAT starts with Zoho Books. A trading business starts with Zoho Inventory and Books together. We work that out from your process, not from a product list." },
      { q: "Should we buy Zoho One or individual apps?", a: "Zoho One makes sense when you will genuinely use several apps across most of the company. If you need two apps for a handful of people, buying those two is usually the better choice. We set out both options for your real user count before you commit." },
      { q: "Can you advise us if we are not sure Zoho is the right platform?", a: "Yes. We also have hands-on experience with Odoo, Microsoft Dynamics 365, Oracle NetSuite and Salesforce, as implementation experience rather than as a partner of those vendors, so we can say where Zoho fits and where it does not." },
      { q: "Do you work with companies outside Lebanon?", a: "Yes. We consult for businesses across Lebanon, the Gulf, Iraq and North Africa, on site in Lebanon and remotely from Beirut elsewhere." }
    ]
  },

  {
    slug: "zoho-migration",
    kicker: "Migration",
    title: "Zoho Migration Services: Move to Zoho Without Losing Your History",
    metaTitle: "Zoho Migration Services | Salesforce, HubSpot & Excel",
    metaDescription: "Data migration to Zoho from Salesforce, HubSpot, QuickBooks, Odoo or Excel: cleaned, mapped, trial-loaded and reconciled before cut-over, by a team in Beirut.",
    cardText: "Your data moved to Zoho from Salesforce, HubSpot, QuickBooks or spreadsheets: cleaned, mapped, trial-loaded and checked before cut-over.",
    intro: [
      "Moving to Zoho is mostly a data problem. The new system can be configured perfectly and still be rejected by the team in its first week, because the customer they need is missing, duplicated, or attached to the wrong salesperson.",
      "We treat migration as its own piece of work with its own sign-off. The data is cleaned before it moves, the mapping is agreed field by field, and everything is loaded once as a trial so that the real cut-over is a repeat of something that has already worked."
    ],
    glance: [
      ["What can be migrated to Zoho?", "Customers, contacts, leads, deals, products, price lists, open invoices and bills, tickets, employee records, and in most cases notes and attachments."],
      ["Which systems do you migrate from?", "Salesforce, HubSpot, QuickBooks, Odoo, Microsoft Dynamics, older custom systems, and above all spreadsheets, which is where most business data still lives."],
      ["Does the history come across?", "Records, notes and attachments usually do. Email threads and activity timelines depend on what the old system allows us to export, so we confirm that for your system before promising it."],
      ["Will we lose working time?", "The final cut-over is planned for a quiet period. The old system stays available to read while the team settles into the new one."]
    ],
    signsHeading: "When a migration needs to be planned properly",
    signs: [
      "The same customer exists three times under three spellings, and nobody is sure which record is current.",
      "Years of history sit in a system you are about to stop paying for.",
      "Open invoices, balances and stock have to be correct on the first morning, not approximately correct.",
      "An earlier import was done in a hurry, and the team has not trusted the system since."
    ],
    plan: {
      heading: "How a Zoho migration runs",
      lead: "Seven stages. The trial load is the one most projects skip and the one that prevents most of the trouble.",
      steps: [
        { name: "Inventory", text: "We list what exists: which tables, how many records, which fields are really used, what is attached. Half of what is in an old system is usually not worth moving, and this is where we find out which half.", youGet: "A list of what is there and what is worth keeping" },
        { name: "Cleaning", text: "Duplicates merged, dead records set aside, formats made consistent: phone numbers, country names, currencies, dates. Done before the move, because cleaning inside the new system is slower and nobody ever finishes it.", youGet: "Data you would be willing to trust" },
        { name: "Field mapping", text: "Every field in the old system is mapped to a field in Zoho, or deliberately dropped. Picklist values are matched one by one. You review the mapping and sign it.", youGet: "A signed mapping document" },
        { name: "Trial load", text: "The data is loaded once as a rehearsal. Relationships are checked: every contact under the right company, every deal with the right owner, every invoice against the right customer.", youGet: "Proof the mapping works before it matters" },
        { name: "Your check", text: "Your team looks up the records they know best. Record counts and totals are reconciled against the old system. Anything that looks wrong is traced and fixed at the source.", youGet: "Counts and totals that agree" },
        { name: "Cut-over", text: "On an agreed date the old system is frozen, the final data is loaded, and the team starts work in Zoho. The steps are the same ones already rehearsed.", youGet: "One system of record, from an agreed date" },
        { name: "Old system kept to read", text: "Where the license allows, the old system stays available read-only for a period, so that anything left behind on purpose can still be looked up.", youGet: "A safety net while the team adjusts" }
      ]
    },
    includedHeading: "What a migration from us includes",
    included: [
      { title: "A mapping document", text: "Field-by-field, with every dropped field listed, so that months later anyone can see where a value came from." },
      { title: "De-duplication", text: "Duplicate companies and contacts merged under rules you agree, not guessed at by a tool." },
      { title: "A rehearsal before the real thing", text: "A full trial load, checked by your own people, before the cut-over date is confirmed." },
      { title: "Reconciliation", text: "Record counts and financial totals compared between the old system and Zoho, and the differences explained." },
      { title: "Opening balances for Zoho Books", text: "Customer and supplier balances, open invoices and bills, and stock on hand, agreed with your accountant before they are posted." },
      { title: "Automation rebuilt, not copied", text: "The rules and approvals from the old system are rebuilt properly in Zoho. Code from another platform does not transfer." }
    ],
    limitsHeading: "What we will advise against",
    limits: [
      "Migrating everything by default. Ten years of dead leads make a new CRM slower to search and harder to trust.",
      "Loading every historical accounting transaction. Opening balances and open documents are usually the right cut, with the old books kept for reference. Your accountant decides, and we follow.",
      "Cutting over without a rehearsal. If there is no time for a trial load, there is no time for the migration."
    ],
    zohoApps: ["crm", "books", "inventory", "desk", "people", "dataprep"],
    related: [
      { label: "Zoho CRM compared with Salesforce", href: "/compare/zoho-crm-vs-salesforce" },
      { label: "Zoho Books compared with QuickBooks", href: "/compare/zoho-books-vs-quickbooks" },
      { label: "Migrating from Salesforce to Zoho CRM in Lebanon", href: "/blog/migrate-salesforce-to-zoho-crm-lebanon" },
      { label: "Zoho implementation services", href: "/services/zoho-implementation" },
      { label: "Accounting on Zoho Books", href: "/solutions/accounting-erp-software" },
      { label: "Zoho CRM", href: "/zoho-products/crm" }
    ],
    faqs: [
      { q: "Can you migrate from Excel spreadsheets to Zoho?", a: "Yes, and it is the most common migration we do. Spreadsheets need the most cleaning, because the same customer or item is usually written several ways. We consolidate the sheets, remove duplicates and agree the structure with you before anything is loaded." },
      { q: "Can you migrate from Salesforce or HubSpot to Zoho CRM?", a: "Yes. Accounts, contacts, leads, deals, products, notes and attachments move across. Custom objects become custom modules. Automation and code are rebuilt in Zoho, because they cannot be copied from one platform to another." },
      { q: "Can you move our accounts from QuickBooks to Zoho Books?", a: "Yes. The usual approach is to bring the chart of accounts, customers, suppliers, items, opening balances and open invoices and bills, and to keep the old books for reference. We agree the cut-off date and the balances with your accountant." },
      { q: "How long does a Zoho data migration take?", a: "It depends far more on the condition of the data than on its size. Clean data from one system can move quickly. Several spreadsheets with duplicates take longer, and most of that time is cleaning. We give an estimate after the inventory stage, once we have seen the data." },
      { q: "Will there be downtime during the cut-over?", a: "The cut-over is scheduled for a quiet period so that normal work is disturbed as little as possible. The old system is frozen for new entries during the final load, and stays available to read afterwards." }
    ]
  },

  {
    slug: "zoho-customization",
    kicker: "Customization",
    title: "Zoho Customization and Development Services",
    metaTitle: "Zoho Customization & Development Services | CSP4TECH",
    metaDescription: "Zoho customization from a Zoho Authorized Partner: custom modules, Deluge functions, Zoho Creator apps, portals and Canvas layouts, built only where needed.",
    cardText: "Custom modules, Deluge functions, Zoho Creator apps and portals, for the parts of your process that standard Zoho does not cover.",
    intro: [
      "Standard Zoho covers most of what most businesses do. The rest is where a business is actually different: the way a quote is costed, the approval that depends on three conditions, the form a field team fills in on a phone with no signal.",
      "That is the part we customize, and only that part. We start by checking whether configuration alone will do the job, because a setting is free to maintain and a script is not. When code is the right answer, we write it in Zoho's own tools, so that it lives in your account and survives Zoho's updates."
    ],
    glance: [
      ["What can be customized in Zoho?", "Almost everything a user touches: modules, fields, page layouts, pipelines, buttons, validation, calculations, document templates and portals, plus whole custom apps in Zoho Creator."],
      ["What is Deluge?", "Zoho's own scripting language. It runs inside Zoho CRM, Books, Creator, Desk and most other apps, and it is how custom logic and connections between apps are written."],
      ["Who owns what you build?", "You do. Everything is built inside your Zoho account, where your own admin or another developer can read and change it."],
      ["Do we always need custom development?", "No. A large share of the requests we receive are solved by configuration. We tell you when that is the case."]
    ],
    signsHeading: "When configuration stops being enough",
    signs: [
      "A price, a commission or a landed cost follows rules too specific for a standard formula field.",
      "The team works around the system for one step every single day, and the workaround lives in a spreadsheet.",
      "Customers, suppliers or field staff need to see or enter information without a full user license.",
      "A process spans several apps, and someone copies the result from one into the next by hand."
    ],
    plan: {
      heading: "How a customization is built",
      lead: "Six stages. The second one, checking configuration first, is where a good part of the work is saved.",
      steps: [
        { name: "The gap", text: "We write down exactly what the system has to do that it does not do today, with a real example: this quote, these inputs, this expected result. A vague request produces vague software.", youGet: "A precise statement of the requirement" },
        { name: "Configuration first", text: "Before any code, we check what settings can do: layouts, validation rules, formula fields, blueprints, workflow. If configuration covers it, we stop here.", youGet: "The simplest solution that works" },
        { name: "Specification", text: "For what is left, a short written specification: the inputs, the logic, the outputs, who may trigger it and what happens when something is missing. You approve it before we build.", youGet: "An agreed specification" },
        { name: "Build", text: "Written in Deluge, Zoho Creator or, for heavier work, Zoho Catalyst. Built and tried away from your live data first, with comments in the code that explain why, not only what.", youGet: "A working build to try" },
        { name: "Review with the people who use it", text: "The users run their real cases, including the awkward ones. Changes at this point are normal and are the reason this stage exists.", youGet: "Your confirmation that it does the job" },
        { name: "Release and handover", text: "Released into the live system, with a short note of what was built, where it lives and how to change it. No black boxes.", youGet: "A live feature and the notes to maintain it" }
      ]
    },
    includedHeading: "The kinds of customization we build",
    included: [
      { title: "Custom modules and layouts", text: "New record types for the things your business tracks that Zoho does not ship with, such as projects, properties, shipments or contracts, linked to the standard ones." },
      { title: "Deluge custom functions", text: "Calculations, validations and record updates that run on a button, on a schedule, or when something changes." },
      { title: "Zoho Creator apps", text: "Complete small applications for a process no standard app models, with their own forms, reports, permissions and mobile screens." },
      { title: "Portals", text: "A secure login where customers, suppliers or partners see their own records and submit their own requests." },
      { title: "Canvas and document templates", text: "Record pages redesigned around how a role works, and quotes, invoices and contracts generated in your own format." },
      { title: "Custom reports and dashboards", text: "The view of the numbers that standard reports cannot produce, built in Zoho Analytics when it needs data from several apps." }
    ],
    limitsHeading: "Where we will push back",
    limits: [
      "If a setting does the job, we will not write a script. Every custom function is something that has to be understood and maintained later.",
      "We will not rebuild in Zoho Creator something a standard Zoho app already does well. It costs more and ages worse.",
      "Customization built with Zoho's supported tools carries through Zoho's updates. Zoho does retire older API versions from time to time, with notice, and code that depends on them then needs updating. We build on current versions for that reason."
    ],
    zohoApps: ["creator", "crm", "catalyst", "books", "desk", "analytics"],
    related: [
      { label: "Custom Zoho Creator app or off-the-shelf?", href: "/blog/custom-zoho-creator-app-vs-off-the-shelf" },
      { label: "Custom software development", href: "/ai-apps/custom-software-development" },
      { label: "Zoho Creator", href: "/zoho-products/creator" },
      { label: "Zoho integration services", href: "/services/zoho-integration" },
      { label: "Zoho automation services", href: "/services/zoho-automation" },
      { label: "Zoho Catalyst", href: "/zoho-products/catalyst" }
    ],
    faqs: [
      { q: "What is the difference between Zoho customization and configuration?", a: "Configuration uses the settings Zoho provides: fields, layouts, pipelines, workflow rules. Customization adds something Zoho does not provide out of the box, such as a custom function, a Creator app or a portal. Configuration is quicker to do and cheaper to maintain, so we always try it first." },
      { q: "When do we need Zoho Creator instead of customizing Zoho CRM?", a: "When the process is not really about customers and sales. Zoho CRM is the right base for anything that follows a lead, a deal or an account. A process such as inspections, production tracking or internal requests is usually cleaner as its own app in Zoho Creator, connected back to CRM or Books." },
      { q: "Will our customizations break when Zoho updates?", a: "Customization built with Zoho's own supported tools, such as custom functions, Creator and Canvas, carries through Zoho's regular updates. The exception is when Zoho retires an old API version, which it announces in advance. We build on current versions and can update older code when that happens." },
      { q: "Can you take over customization someone else wrote?", a: "Usually, yes. We start by reading what is there and writing down what it does, because undocumented code is the main risk. Sometimes a function is quicker to rewrite cleanly than to repair, and we say so when that is the case." },
      { q: "Can a custom Zoho app work on mobile?", a: "Yes. Zoho Creator apps run in Zoho's mobile app on iOS and Android, and forms can be designed to work offline and sync when the connection returns. We design field screens for a phone first when that is where they will be used." }
    ]
  },

  {
    slug: "zoho-integration",
    kicker: "Integration",
    title: "Zoho Integration Services: Connect Zoho to the Tools You Already Use",
    metaTitle: "Zoho Integration Services | WhatsApp, Shopify & API",
    metaDescription: "Zoho integration by a Zoho Authorized Partner in Beirut: WhatsApp, Shopify, websites, payment gateways and in-house systems connected by API, with monitoring.",
    cardText: "Zoho connected to WhatsApp, your website, your online store, payment gateways and in-house systems, with error handling and monitoring.",
    intro: [
      "No business runs on one system. There is a website, an online store, a WhatsApp number, a payment gateway, a point of sale, and perhaps an older system that nobody dares to switch off. When these do not talk to Zoho, people become the integration: they copy, paste and retype, and the errors arrive with them.",
      "We connect Zoho to the systems around it. The method depends on what the other side offers. Where a ready-made connector exists, we use it. Where one does not, we build the connection on the published APIs, and we build it to fail loudly and safely, because every integration fails at some point."
    ],
    glance: [
      ["What can Zoho integrate with?", "Most modern business software: WhatsApp Business, Shopify, Google Workspace, Microsoft 365, Slack, Stripe and other payment gateways, websites and web forms, telephony, and any in-house system that has an API or can exchange files."],
      ["How are Zoho integrations built?", "In order of preference: Zoho's own built-in connections, an extension from the Zoho Marketplace, Zoho Flow, and then custom work using Deluge and the REST APIs."],
      ["What if our other system has no API?", "Then we exchange files on a schedule, and we tell you plainly how out of date the data will be between runs."],
      ["Do you supply hardware?", "No. We build software and integration only. Devices such as tills, biometric readers or phone systems come from your own supplier."]
    ],
    signsHeading: "Signs that people are doing the integration by hand",
    signs: [
      "Orders from the website or the online store are retyped into the accounting system.",
      "WhatsApp conversations with customers live on individual phones and leave with the employee.",
      "The same customer is created separately in CRM, in accounts and in the support tool.",
      "A report takes a day to prepare because the numbers come from four exports."
    ],
    plan: {
      heading: "How a Zoho integration is built",
      lead: "Six stages. Deciding which system is the master for each piece of data is the step that prevents most integration problems.",
      steps: [
        { name: "Map the flow", text: "What moves, in which direction, how often, and which system is the master for each field. If two systems can both change a customer's address, we decide now which one wins.", youGet: "A one-page data flow you approve" },
        { name: "Check for a ready-made connector", text: "Zoho ships with many integrations, and the Marketplace has more. If one of them does the job properly, it is the cheapest and most stable option, and we use it.", youGet: "The simplest route that works" },
        { name: "Design, including the failures", text: "For a custom connection we design what happens when the other system is down, when a record is rejected, and when the same message arrives twice. This is most of the real work.", youGet: "A design that covers what goes wrong" },
        { name: "Build and test with real records", text: "Built against test accounts where they exist, then tried with real examples: a normal order, a refund, a customer with an Arabic name, an item that does not exist yet.", youGet: "A connection proven on your own cases" },
        { name: "Monitoring", text: "Failures are logged and reported to a person, so that a broken sync is noticed the same day and not at month-end.", youGet: "Errors you hear about, not discover" },
        { name: "Handover", text: "A short document: what is connected, what triggers it, where the credentials are kept, and what to check first when something stops.", youGet: "Notes that let anyone maintain it" }
      ]
    },
    includedHeading: "Integrations we build most often",
    included: [
      { title: "WhatsApp Business", text: "Conversations logged on the customer record in Zoho CRM or Zoho Desk, through Meta's official WhatsApp Business Platform, so that history belongs to the company." },
      { title: "Websites and web forms", text: "Enquiries, quote requests and sign-ups delivered straight into Zoho as leads or tickets, with spam filtered out before it reaches your team." },
      { title: "Online stores", text: "Shopify and other storefronts connected to Zoho Inventory and Zoho Books, so that orders, stock and invoices stay in step." },
      { title: "Payments", text: "Stripe and other gateways connected to Zoho Books, so that a payment marks the right invoice as paid without anyone matching it by hand." },
      { title: "Email, calendar and chat", text: "Google Workspace, Microsoft 365 and Slack connected, so that emails and meetings appear on the customer record." },
      { title: "In-house and older systems", text: "A custom connection to the system you already run, through its API where it has one and by scheduled file exchange where it does not." }
    ],
    limitsHeading: "What an integration cannot fix",
    limits: [
      "An integration is only as good as the other system's API. If it exposes little, we can connect little, and we tell you before we start.",
      "True two-way sync is harder than it sounds. We set one master per field, because two systems that can both overwrite each other eventually will.",
      "We supply no hardware. Tills, readers, sensors and phone systems come from your supplier, and we connect to whatever they expose."
    ],
    zohoApps: ["crm", "books", "inventory", "desk", "creator", "catalyst"],
    related: [
      { label: "WhatsApp Business with Zoho CRM: a sales playbook", href: "/blog/whatsapp-business-zoho-crm-lebanese-sales-playbook" },
      { label: "Shopify alongside Zoho", href: "/platforms/shopify" },
      { label: "Connecting AI to your CRM", href: "/ai-apps/ai-crm-integration" },
      { label: "Zoho customization and development", href: "/services/zoho-customization" },
      { label: "Zoho automation services", href: "/services/zoho-automation" },
      { label: "Zoho Inventory", href: "/zoho-products/inventory" }
    ],
    faqs: [
      { q: "Can Zoho CRM integrate with WhatsApp?", a: "Yes. Zoho CRM and Zoho Desk connect to WhatsApp Business through Meta's official WhatsApp Business Platform. Messages are sent and received inside Zoho and logged on the customer record, so the conversation history stays with the company and not on an employee's phone." },
      { q: "Can Zoho connect to our existing ERP or point-of-sale system?", a: "It depends on what that system exposes. If it has an API, we can usually connect it directly. If it does not, we can exchange files on a schedule. We check the other system's documentation before we commit to what is possible." },
      { q: "What is Zoho Flow?", a: "Zoho Flow is Zoho's own integration tool. It connects Zoho apps to each other and to several hundred third-party apps without custom code, using triggers and actions. We use it when it covers the requirement, and move to custom code only when it does not." },
      { q: "What happens when an integration fails?", a: "Every integration fails occasionally, usually because the other system is unavailable or rejects a record. We build integrations to log the failure, retry where that is safe, and notify a named person. The aim is that you hear about a problem the same day." },
      { q: "Is our data safe when systems are connected?", a: "Connections use each vendor's official authentication, over encrypted links, with access limited to the data the integration needs. Credentials are stored in Zoho's own secure connection settings and not in code." }
    ]
  },

  {
    slug: "zoho-automation",
    kicker: "Automation",
    title: "Zoho Automation Services: Workflows, Approvals and Blueprints",
    metaTitle: "Zoho Automation Services | Workflows & Blueprints",
    metaDescription: "Zoho workflow automation from a Zoho Authorized Partner in Beirut: lead assignment, follow-ups, approvals, blueprints and cross-app flows that your team trusts.",
    cardText: "Lead assignment, follow-ups, approvals and blueprints, so the routine steps happen on their own and the process stops depending on memory.",
    intro: [
      "In most companies the process works because a few careful people remember things. They remember to chase the quote, to tell accounts the deal has closed, to ask for approval before the discount goes out. When one of them is on leave, the process goes with them.",
      "Automation moves those reminders out of people's heads and into the system. Done well, it is invisible: the lead is already assigned, the task is already there, the approval is already waiting. Done badly, it sends the wrong email to four hundred customers. Most of our work is in making sure it is the first kind."
    ],
    glance: [
      ["What can be automated in Zoho?", "Lead and ticket assignment, follow-up tasks and reminders, emails and notifications, field updates, approvals, stage-by-stage processes with blueprints, scheduled jobs, and flows that cross from one app to another."],
      ["What is a blueprint in Zoho CRM?", "A blueprint lays out a process as stages and allowed moves between them, and can require certain fields or actions before a record may move on. It is how a process is enforced and not just suggested."],
      ["Do approvals work on a phone?", "Yes. Approvals can be reviewed and granted from the Zoho mobile apps."],
      ["Does automation replace people?", "No. It replaces the remembering and the retyping. A person still decides. For AI that drafts or classifies, see our AI and apps work."]
    ],
    signsHeading: "Where automation usually pays off first",
    signs: [
      "New leads wait hours for someone to notice them, and the quick ones are taken by whoever looks first.",
      "Discounts, refunds or purchases are approved in WhatsApp, with no record of who agreed to what.",
      "Deals skip steps: a contract goes out before the credit check, a delivery before the payment.",
      "Managers spend Monday morning asking for updates that the system could already show."
    ],
    plan: {
      heading: "How we automate a process in Zoho",
      lead: "Six stages. The second, deciding what not to automate, matters as much as the rest.",
      steps: [
        { name: "List the repeated steps", text: "With the team, we list what happens every time: who is told, what is created, who has to agree. We look for the steps people forget, since those are the ones that cost money.", youGet: "A list of what repeats, and what gets missed" },
        { name: "Decide what stays manual", text: "Some steps should stay with a person: a judgement call, a sensitive message, an exception. We mark those on purpose, so that nothing is automated just because it can be.", youGet: "A clear line between system and person" },
        { name: "Design the rules", text: "Each rule is written in plain language first: when this happens, and these conditions are true, do that. Each one gets an owner on your side who can say whether it is still right in a year.", youGet: "Rules you can read without opening Zoho" },
        { name: "Build and test", text: "Built with workflow rules, assignment rules, approval processes, blueprints and, where needed, custom functions. Tested on sample records, with emails pointed at us and not at your customers.", youGet: "Automation that has been tried safely" },
        { name: "Switch on in steps", text: "Internal automation first, anything customer-facing last. One process at a time, so that when something behaves unexpectedly it is obvious which rule caused it.", youGet: "A calm roll-out" },
        { name: "Review", text: "Once the team has lived with it, we look at what fired, what was ignored and what people now work around. Rules that nobody needs are switched off.", youGet: "Automation that still matches the business" }
      ]
    },
    includedHeading: "What we set up",
    included: [
      { title: "Assignment rules", text: "Leads, deals and tickets routed to the right person by territory, product, language or workload, the moment they arrive." },
      { title: "Follow-ups and reminders", text: "Tasks and alerts created automatically when a quote has not been answered, a payment is overdue or a renewal is approaching." },
      { title: "Approval processes", text: "Discounts, purchases, leave and expenses approved inside the system, in the right order, with a record of who approved and when." },
      { title: "Blueprints", text: "The sales or service process laid out as stages, with the checks that must be completed before a record may move forward." },
      { title: "Cross-app flows", text: "A won deal that creates the customer and the invoice in Zoho Books, opens a project and tells the delivery team, with no retyping." },
      { title: "Scheduled jobs", text: "Nightly or weekly routines: updating exchange rates, flagging stale deals, sending a summary to a manager." }
    ],
    limitsHeading: "What we will not automate",
    limits: [
      "A process nobody has agreed on. Automating it only makes the disagreement faster. We settle the process first.",
      "Customer-facing messages without a review step, until the rule has proved itself. An automated email cannot be unsent.",
      "Everything at once. Dozens of rules switched on in one day cannot be debugged when one of them misbehaves."
    ],
    zohoApps: ["crm", "desk", "books", "people", "creator", "bigin"],
    related: [
      { label: "AI business automation", href: "/ai-apps/ai-business-automation" },
      { label: "AI sales automation", href: "/ai-apps/ai-sales-automation" },
      { label: "Zoho CRM", href: "/zoho-products/crm" },
      { label: "Zoho integration services", href: "/services/zoho-integration" },
      { label: "Zoho customization and development", href: "/services/zoho-customization" },
      { label: "Zoho Desk", href: "/zoho-products/desk" }
    ],
    faqs: [
      { q: "What is the difference between a workflow rule and a blueprint in Zoho CRM?", a: "A workflow rule reacts to an event: when a record is created or changed and meets certain conditions, it performs actions such as sending an alert or updating a field. A blueprint controls a whole process: it defines the stages, who may move a record between them, and what must be completed first. Workflow rules react, blueprints enforce." },
      { q: "Can Zoho automate approvals?", a: "Yes. Zoho CRM, Books, People, Expense and Creator all have approval processes. An approval can go to one person or through several levels depending on amount, department or any other field, and each decision is recorded with the name and the time." },
      { q: "Do we need Zoho Flow for automation?", a: "Not for automation inside a single app, where workflow rules and blueprints are enough. Zoho Flow is useful when a process crosses between apps, or between Zoho and outside software, and no built-in connection covers it." },
      { q: "Will automation send emails to our customers by mistake?", a: "That is the main risk, and we manage it deliberately. Rules are tested on sample records with emails redirected to us. Customer-facing automation is switched on last, and where a message is sensitive we keep a person in the loop until the rule has earned trust." },
      { q: "We already have many workflow rules and nobody knows what they do. Can you help?", a: "Yes. That is a common situation and it is part of our audit and repair service. We list every rule, work out what each one does and whether it still fires, and remove or merge the ones that conflict." }
    ]
  },

  {
    slug: "zoho-training",
    kicker: "Training",
    title: "Zoho Training for Teams and Admins, in Arabic or English",
    metaTitle: "Zoho Training in Lebanon | Arabic & English | CSP4TECH",
    metaDescription: "Zoho training by a Zoho Authorized Partner in Beirut: role-based sessions on your own system and data, in Arabic or English, on site in Lebanon or online.",
    cardText: "Role-based sessions on your own system, with your own data, in Arabic or English. On site in Lebanon, online everywhere else.",
    intro: [
      "A system nobody uses was not implemented, whatever the invoice says. Adoption is decided in the first two weeks, by whether each person can do their own job in the new system faster than they could in the old spreadsheet.",
      "That is what we train for. Not a tour of every menu, but each role's own work, on your own configured system, with your own customers and items on the screen. A salesperson learns to work a deal. An accountant learns to close a month. Nobody sits through the other's session."
    ],
    glance: [
      ["Who is Zoho training for?", "Everyday users, team managers who need the reports, and the person who will administer the system. Each gets a different session."],
      ["Which language is the training in?", "Arabic or English, whichever the team works in. Often it is a mix of both in the same room, which is fine."],
      ["Is it on site or online?", "On site at your office in Lebanon, and online by video call for teams elsewhere."],
      ["Do you train on a demo system?", "No. We train on your own system with your own data, because people remember what they did with a customer they recognize."]
    ],
    signsHeading: "Signs the problem is training, not the software",
    signs: [
      "The system was set up some time ago, and people still keep their own spreadsheet beside it.",
      "New joiners learn from whoever sits next to them, including that person's workarounds.",
      "Only one person knows how to change a field or add a user, and that person is always busy.",
      "Managers ask for reports by message when the dashboard already has them."
    ],
    plan: {
      heading: "How we run Zoho training",
      lead: "Five stages. Short sessions by role work better than one long day for everyone.",
      steps: [
        { name: "Who does what", text: "We list the roles and what each one actually does in the system during a normal week. A session is planned for each role, covering that role's tasks and nothing else.", youGet: "A training plan by role" },
        { name: "Sessions built on your system", text: "The exercises use your own pipeline, your own products and your own templates. If the system is not ready for that, it is not ready for training.", youGet: "Material that matches your own screens" },
        { name: "User sessions", text: "Hands on the keyboard, not watching a screen. Each person does the real task: creates the lead, converts the deal, raises the invoice, closes the ticket.", youGet: "People who have already done the work once" },
        { name: "Admin session", text: "A deeper session for whoever will look after the system: adding users, changing fields and picklists, building a report, reading the audit log, and knowing what not to touch.", youGet: "An admin who does not need us for small changes" },
        { name: "Reference and follow-up", text: "Short written guides for the common tasks, and recordings of the sessions if you want them. Once real questions have come up from real work, a follow-up session answers them.", youGet: "Something to look back at, and a second pass" }
      ]
    },
    includedHeading: "What the training covers",
    included: [
      { title: "Role-based user training", text: "Sales, accounts, support, HR and operations each trained on their own daily tasks." },
      { title: "Manager training", text: "How to read the dashboards, build and schedule a report, and see what the team is doing without asking." },
      { title: "Administrator training", text: "User management, permissions, fields, layouts, templates and basic automation, so that everyday changes stay in-house." },
      { title: "Training for new joiners", text: "A repeatable session for new staff, so that knowledge does not depend on who happens to sit nearby." },
      { title: "Short guides", text: "Step-by-step notes for the tasks people do rarely and forget, such as a credit note or a year-end step." },
      { title: "Refresher sessions", text: "For teams that were trained once, long ago, and have drifted back to old habits or missed newer Zoho features." }
    ],
    limitsHeading: "What our training is not",
    limits: [
      "It is not a generic feature tour. If a feature is not part of your process, we do not spend your team's time on it.",
      "It is not an official Zoho certification. Zoho runs its own certification exams, and we can point you to them. Our training is about your system and your work.",
      "It cannot rescue a system that does not fit the process. If people avoid the system because it is wrong, the fix is the configuration, and we will say so."
    ],
    zohoApps: ["crm", "books", "people", "desk", "inventory", "creator"],
    related: [
      { label: "Zoho implementation services", href: "/services/zoho-implementation" },
      { label: "Zoho support from Beirut", href: "/services/zoho-support" },
      { label: "Fixing a Zoho setup that is not working", href: "/services/zoho-audit" },
      { label: "Zoho People", href: "/zoho-products/people" },
      { label: "Zoho Books", href: "/zoho-products/books" },
      { label: "Zoho partner across Lebanon", href: "/lebanon/" }
    ],
    faqs: [
      { q: "Do you offer Zoho training in Arabic?", a: "Yes. We train in Arabic or English, and in practice often in both during the same session. The Zoho interface itself is available in Arabic with right-to-left layout, and each user can choose their own language." },
      { q: "Can you train our team if another company set up our Zoho?", a: "Yes. We first spend a short time looking at how your system is configured, so that the training matches what your team will see. If we notice something that will cause trouble, we tell you." },
      { q: "Is the training on site or online?", a: "Both. In Lebanon we train on site at your office. For teams elsewhere we train by video call with screen sharing, in shorter sessions, during business hours that overlap with Beirut." },
      { q: "How long does Zoho training take?", a: "It depends on the number of roles and apps. We prefer several short sessions by role over one long day, because people keep more of it and can still do their normal work. We plan the schedule with you once we know who needs what." },
      { q: "Do you provide Zoho certification?", a: "No. Official certification is run by Zoho itself through its own exams. Our training is practical and specific to your system. If someone on your team wants the official certificate, we can point them to Zoho's program." }
    ]
  },

  {
    slug: "zoho-support",
    kicker: "Support",
    title: "Zoho Support and Maintenance from a Team in Beirut",
    metaTitle: "Zoho Support & Maintenance | Beirut Team | CSP4TECH",
    metaDescription: "Ongoing Zoho support from a Zoho Authorized Partner in Beirut: questions answered, faults fixed and changes made by people who know your setup.",
    cardText: "Questions answered, problems fixed and changes made by a team that knows your setup. A phone call, not a ticket queue in another time zone.",
    intro: [
      "A Zoho system is never finished. A new product line needs a new pipeline. An employee leaves and their records need a new owner. A rule that made sense last year now emails the wrong manager. None of it is dramatic, and all of it piles up if nobody is looking after it.",
      "Support from us means there is someone to call who already knows how your system is built. We answer in Arabic or English, during Beirut business hours, Monday to Saturday. You explain the problem once, to a person who can open your setup and fix it."
    ],
    glance: [
      ["What does Zoho support from CSP4TECH cover?", "User questions, fixing things that have stopped working, small changes such as new fields, reports and users, keeping integrations running, and raising product issues with Zoho on your behalf."],
      ["When are you available?", "Monday to Saturday, 9:00 AM to 6:00 PM Beirut time, by phone, WhatsApp or email."],
      ["Do you support systems you did not build?", "Yes. We start with a short review, so that we understand the setup before we change anything in it."],
      ["Is this the same as Zoho's own support?", "No. Zoho's support answers questions about the product. We look after your particular configuration, your data and your process."]
    ],
    signsHeading: "When a business needs someone looking after its Zoho",
    signs: [
      "Small requests, such as a new field, a changed report or a new user, wait for weeks because nobody owns them.",
      "The person who set the system up has left, and nobody is confident enough to change anything.",
      "An integration stopped quietly, and it was noticed only when the numbers no longer matched.",
      "Zoho releases new features regularly, and nobody has the time to see which ones are worth using."
    ],
    plan: {
      heading: "How support works, from the first call",
      lead: "Five steps. The first happens once. The rest repeat every time you contact us.",
      steps: [
        { name: "We learn your setup", text: "If we implemented the system, we already know it. If we did not, we start with a short review of how it is configured, so that the first fix does not break something else.", youGet: "A support team that knows your system" },
        { name: "You reach a person", text: "By phone, WhatsApp or email, in Arabic or English. You describe what is wrong in your own words. A screenshot helps, but it is not required.", youGet: "Someone who answers" },
        { name: "We sort it", text: "Every request is one of three things: a question, a fault, or a change. A question gets an answer. A fault gets fixed. A change gets a quick check of what else it touches first.", youGet: "A clear statement of what happens next" },
        { name: "We fix or change it", text: "Done in your system and tested before we tell you it is done. Where a change affects other users, we tell you who needs to know.", youGet: "The problem solved, and checked" },
        { name: "We record it", text: "What was changed, why and when is written down. After a year of small changes, that record is the only thing that keeps a system understandable.", youGet: "A history of your system you can read" }
      ]
    },
    includedHeading: "What support covers",
    included: [
      { title: "User questions", text: "How to do something, why a record looks the way it does, where a number comes from." },
      { title: "Fixes", text: "Automation that stopped firing, a template that prints wrongly, a report that no longer adds up, a user who cannot see what they should." },
      { title: "Small changes", text: "New fields, picklist values, layouts, reports, dashboards and templates as the business changes." },
      { title: "Users and permissions", text: "Joiners added, leavers removed and their records reassigned, roles adjusted when responsibilities move." },
      { title: "Integrations kept running", text: "Connections to your website, WhatsApp, store or other systems watched and repaired when the other side changes something." },
      { title: "Issues raised with Zoho", text: "When the cause is in Zoho's product and not in your setup, we raise it with Zoho and follow it through for you." }
    ],
    limitsHeading: "What support is not",
    limits: [
      "It is not a substitute for an implementation that was never finished. If the system needs rebuilding in places, an audit is the honest first step.",
      "We cannot fix Zoho's own product. When something is a Zoho bug, we report it to Zoho and find you a workaround in the meantime.",
      "You stay the owner. We never hold the only admin login to your system, and you can remove our access whenever you choose."
    ],
    zohoApps: ["crm", "books", "desk", "people", "inventory", "one"],
    related: [
      { label: "Audit and repair of an existing Zoho setup", href: "/services/zoho-audit" },
      { label: "Zoho training for teams and admins", href: "/services/zoho-training" },
      { label: "Zoho partner in Beirut", href: "/lebanon/zoho-partner-beirut" },
      { label: "Where we work", href: "/markets/" },
      { label: "About CSP4TECH", href: "/about" },
      { label: "Zoho Desk", href: "/zoho-products/desk" }
    ],
    faqs: [
      { q: "Do you support Zoho systems that another partner built?", a: "Yes. We begin with a short review of the configuration, so that we understand what is there before we change it. If the review shows deeper problems, we tell you and suggest an audit before ongoing support." },
      { q: "What are your Zoho support hours?", a: "Monday to Saturday, 9:00 AM to 6:00 PM Beirut time. You can reach us by phone, WhatsApp or email." },
      { q: "Which languages do you support in?", a: "Arabic and English. Your team can describe the problem in whichever is more comfortable." },
      { q: "Why not just use Zoho's own support?", a: "Zoho's support is good at product questions: how a feature works, whether something is a bug. It does not know your configuration, your process or why a rule was built the way it was. We do both. We answer the question in the context of your setup, and we take product issues to Zoho for you when that is where they belong." },
      { q: "Can you support clients outside Lebanon?", a: "Yes. We support clients across Lebanon, the Gulf, Iraq and North Africa remotely from Beirut. Support work is done inside your Zoho account, so distance rarely matters." }
    ]
  },

  {
    slug: "zoho-licenses",
    kicker: "Licenses",
    title: "Zoho Licenses in Lebanon: Buy Through a Zoho Authorized Partner",
    metaTitle: "Zoho Licenses in Lebanon | Authorized Partner | CSP4TECH",
    metaDescription: "Buy Zoho licenses in Lebanon through a Zoho Authorized Partner: help choosing the app, edition, user count and data center, with the account in your own name.",
    cardText: "Zoho licenses supplied by a Zoho Authorized Partner, with help choosing the right app, edition and user count before you commit.",
    intro: [
      "Choosing a Zoho license is harder than it should be. There are dozens of apps, several editions of each, and bundles that overlap. Buy too little and you hit a limit a few months in. Buy too much and you pay every month for seats and features nobody opens.",
      "As a Zoho Authorized Partner we supply Zoho licenses directly. More usefully, we help you decide which ones: we count the real users, match the edition to what you actually need, and set up the account in your company's name, so that what you buy fits and belongs to you."
    ],
    glance: [
      ["Can we buy Zoho licenses through CSP4TECH?", "Yes. CSP4TECH is a Zoho Authorized Partner and supplies licenses for the full Zoho range."],
      ["Whose name is the Zoho account in?", "Yours. The account is registered to your company, with a person on your side as its owner."],
      ["Is the software different when bought through a partner?", "No. It is exactly the same Zoho. The difference is having a local team that helps you choose, sets it up and is there when something needs changing."],
      ["Can we try before we buy?", "Yes. Zoho offers free trials of its paid apps, and a trial is the right first step. We can help you set one up so that it tests the things that matter to you."]
    ],
    signsHeading: "When to get advice before buying",
    signs: [
      "You cannot tell whether Zoho One or two separate apps is the better choice for your team.",
      "You are about to pay for a higher edition for one feature, and are not sure you need it.",
      "Half the company needs only to view or approve, and you do not know whether each of them needs a full license.",
      "You already pay for Zoho and suspect that some of those licenses are no longer used."
    ],
    plan: {
      heading: "How we help you license Zoho",
      lead: "Six steps. The first three happen before you spend anything.",
      steps: [
        { name: "Count the real users", text: "Not headcount. We list who will work in the system every day, who needs it occasionally, and who only needs to see a report or approve a request. Those are different needs and sometimes different licenses.", youGet: "A user list by what each person does" },
        { name: "Apps or a bundle", text: "We compare buying individual apps against a suite such as Zoho One, CRM Plus or Finance Plus, for your real user list. The answer changes with team size.", youGet: "The combination that fits your team" },
        { name: "Choose the edition", text: "Each edition adds features and raises limits. We check your requirements against them, so that you buy the lowest edition that covers what you need and know exactly what would push you up to the next.", youGet: "The right edition, with the reasons" },
        { name: "Set up the account", text: "The account is created in your company's name, on your own domain, with your own person as owner. The data center is chosen at this point too, and it is not something to change casually later.", youGet: "An account that belongs to you" },
        { name: "Purchase and activation", text: "Licenses are bought and assigned to the right users, and everyone can sign in.", youGet: "Working logins for the right people" },
        { name: "Changes over time", text: "Teams grow and shrink. We help add or remove users, move up or down an edition, and check before each renewal that you are still paying for what you use.", youGet: "Licenses that keep matching the team" }
      ]
    },
    includedHeading: "What we help you decide",
    included: [
      { title: "Which apps", text: "The apps that solve your actual problem, and the ones you have been told you need but do not." },
      { title: "Which edition", text: "The edition whose features and limits match your requirements, checked one by one." },
      { title: "How many users", text: "Who needs a full license, who can share a lighter one, and who needs none at all." },
      { title: "Zoho One or individual apps", text: "A comparison for your own numbers, including Zoho One's two licensing models: one that covers every employee, and one that covers chosen users only." },
      { title: "Which data center", text: "Zoho runs separate data centers in several regions. Which one your account sits in affects where your data is stored, so it is decided on purpose at the start." },
      { title: "Monthly or annual", text: "Zoho offers both on most apps. Which suits you depends on how settled your team size is." }
    ],
    limitsHeading: "What we will tell you not to buy",
    limits: [
      "Zoho One, when two apps would do. It is excellent value for a company that uses much of it and wasteful for one that does not.",
      "Zoho Payroll for a team in Lebanon. It does not cover Lebanese payroll rules, and buying it will not change that.",
      "Anything, before a trial. A week in a trial with your own data tells you more than any comparison table."
    ],
    zohoApps: ["one", "crmplus", "financeplus", "peopleplus", "workplace", "crm"],
    related: [
      { label: "Compare Zoho One with the smaller suites", href: "/zoho-suites" },
      { label: "Zoho One in Lebanon: what to know", href: "/blog/zoho-one-pricing-lebanon-2026" },
      { label: "Zoho consulting services", href: "/services/zoho-consulting" },
      { label: "Which Zoho data center serves each market", href: "/markets/" },
      { label: "Every Zoho app, by category", href: "/zoho-products/" },
      { label: "Payroll software in Lebanon", href: "/solutions/payroll-software-lebanon" }
    ],
    faqs: [
      { q: "What is the difference between buying Zoho directly and through a partner?", a: "The software is identical. Buying through a partner adds a local team that helps you choose the right apps and edition, sets up the account properly, and is available when users or needs change. For many businesses the main benefit is simply having someone to ask." },
      { q: "Can we start with a few users and add more later?", a: "Yes. Zoho licenses are per user, and users can be added as the team grows. Starting with the people who will use the system daily, then widening, is usually the sensible route." },
      { q: "We already have a Zoho account. Can CSP4TECH become our partner?", a: "In most cases, yes. Zoho can associate an existing account with a partner on request. We go through that process with you, and your account, data and settings stay exactly as they are." },
      { q: "Is Zoho available in Arabic?", a: "Yes. Most Zoho apps offer an Arabic interface with right-to-left layout, and each user can set their own language. Documents such as quotes and invoices can be produced in Arabic, English or both." },
      { q: "Does Zoho Payroll work in Lebanon?", a: "No. Zoho Payroll is built for specific countries, and Lebanon is not one of them. For Lebanese companies we handle payroll by a different route, described on our payroll software page, and we say so before any license is bought." },
      { q: "Should we pay for Zoho monthly or annually?", a: "Zoho offers both on most apps. Annual billing suits a team whose size is stable. Monthly billing suits a team that is still growing or testing, because users can be adjusted more freely. We help you weigh that against your own plans." }
    ]
  },

  {
    slug: "zoho-audit",
    kicker: "Audit and Repair",
    title: "Zoho Audit and Repair: Fix a Zoho Setup That Is Not Working",
    metaTitle: "Zoho Audit & Repair | Fix Your Zoho CRM | CSP4TECH",
    metaDescription: "Zoho audit and repair by a Zoho Authorized Partner in Beirut: a written review of your setup, data, automation and permissions, then fixes in priority order.",
    cardText: "A written review of a Zoho setup that is not working, covering configuration, data, automation and permissions, then the repairs in order.",
    intro: [
      "The system was set up by a freelancer who has since moved on, or by a partner who left it on defaults, or by whoever in the office was least busy that month. It works, in the sense that people can log in. But the reports are not trusted, half the fields are empty, and the team has quietly gone back to Excel.",
      "This is one of the most common calls we get, and it is rarely as bad as it feels. Many setups need a short list of specific fixes, not a restart. The audit finds that list. You get it in writing, ranked, before you commit to any repair work."
    ],
    glance: [
      ["What is a Zoho audit?", "A structured review of an existing Zoho system, covering configuration, data quality, automation, permissions, integrations and license use, with written findings ranked by how much each one matters."],
      ["Do we have to start again from scratch?", "Rarely. Most of what exists can usually be kept. Where one module is better rebuilt than patched, we say so and explain why."],
      ["Can you fix a system another partner built?", "Yes. A good share of our work starts from a system someone else set up."],
      ["Will the audit disrupt daily work?", "No. The review itself changes nothing. Repairs are made afterwards, one at a time, in the order you approve."]
    ],
    signsHeading: "Signs a Zoho setup needs an audit",
    signs: [
      "Nobody trusts the reports, so every number is checked against a spreadsheet before it is used.",
      "Records are full of empty fields, and some fields nobody can explain.",
      "Automated emails or tasks go to people who left the company long ago.",
      "The same customer appears several times, and each copy has part of the history.",
      "You pay for more licenses than there are people who log in.",
      "Nobody is sure who the super admin is, or who else still has access."
    ],
    plan: {
      heading: "How a Zoho audit and repair runs",
      lead: "Six stages. You see the findings and choose what to fix before any repair starts.",
      steps: [
        { name: "Listen first", text: "We start with the people who use the system: what they avoid, what they do twice, what they no longer believe. The complaints point to the faults faster than the settings do.", youGet: "A list of what hurts, in the team's own words" },
        { name: "Technical review", text: "We go through the system itself: modules, fields and layouts, every automation rule, roles and sharing, integrations, data quality and license usage. Read-only. Nothing is changed.", youGet: "A full picture of what is really there" },
        { name: "Written findings", text: "Each finding is described in plain language and ranked: fix now, fix later, or leave alone. For each one we say what it is costing you and roughly what fixing it involves.", youGet: "A ranked report you can act on" },
        { name: "You decide", text: "We go through the report with you. You choose what gets fixed and in what order. Some findings are not worth fixing, and we will say which.", youGet: "A repair plan you have approved" },
        { name: "Repair", text: "Fixes are made one at a time, each tested before the next. Risky changes, such as merging duplicates or removing fields, are backed up first.", youGet: "Problems closed one by one, with nothing new broken" },
        { name: "Retrain where needed", text: "Some problems are habits, not settings. Where the fix changes how people work, a short session makes sure the old workaround does not come back.", youGet: "A team that uses the repaired system" }
      ]
    },
    includedHeading: "What the audit looks at",
    included: [
      { title: "Configuration", text: "Modules, fields, layouts and pipelines: what is used, what is duplicated, and what no longer matches how the business works." },
      { title: "Data quality", text: "Duplicates, missing values, inconsistent formats and records with no owner, with a count of each so that the scale is clear." },
      { title: "Automation", text: "Every workflow rule, blueprint, approval and custom function listed, with what it does, whether it still fires, and whether any two conflict." },
      { title: "Permissions and access", text: "Who can see, edit, delete and export what, and which former employees or outsiders still have a login. This is a security review as much as a tidy-up." },
      { title: "Integrations", text: "Which connections exist, which have stopped quietly, and which rely on something that is about to be retired." },
      { title: "License use", text: "Which paid users have not logged in, and whether the edition you pay for matches the features you actually use." }
    ],
    limitsHeading: "What to expect from us",
    limits: [
      "An audit is not a sales pitch for a rebuild. If your system needs a handful of fixes, the report will say a handful of fixes.",
      "Sometimes rebuilding one module is cheaper and safer than patching it. When that is our advice, we give the reasons, and the decision stays with you.",
      "We do not delete anything without your approval and a backup. Data removed from a system in a hurry is the hardest mistake to undo."
    ],
    zohoApps: ["crm", "books", "desk", "people", "inventory", "analytics"],
    related: [
      { label: "Ongoing Zoho support", href: "/services/zoho-support" },
      { label: "Zoho training and refresher sessions", href: "/services/zoho-training" },
      { label: "Zoho automation services", href: "/services/zoho-automation" },
      { label: "Zoho migration services", href: "/services/zoho-migration" },
      { label: "Zoho CRM", href: "/zoho-products/crm" },
      { label: "Zoho Analytics", href: "/zoho-products/analytics" }
    ],
    faqs: [
      { q: "Can you fix a Zoho CRM that someone else set up?", a: "Yes. We begin with an audit, so that we understand what was built and why before changing anything. Most systems can be repaired in place. We keep what works and fix what does not." },
      { q: "Do we need to start our Zoho implementation again?", a: "Usually not. A full restart is rarely justified. More often the system needs unused fields removed, a few rules corrected, data cleaned and the team retrained. Where one part really is better rebuilt, we say which part and why." },
      { q: "What access do you need for a Zoho audit?", a: "An administrator login to the apps being reviewed, added by you and removable by you at any time, and a little time from two or three people who use the system daily. The review is read-only. We change nothing until you have seen the findings." },
      { q: "How long does a Zoho audit take?", a: "It depends on how many apps are in use and how much has been customized. A single app with standard configuration is quick to review. Several connected apps with custom code take longer. We tell you what to expect after a first look at the system." },
      { q: "How do we know whether we need an audit or just support?", a: "If the system basically works and you need questions answered and small changes made, that is support. If people have stopped trusting it or stopped using it, the causes need to be found first, and that is an audit. If you are not sure, tell us what is happening and we will say which it is." }
    ]
  },
];
