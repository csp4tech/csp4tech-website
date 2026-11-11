// Detail entries for /lebanon/<city>.
//
// These exist because the searches people actually type are local: "zoho
// partner tripoli", "crm beirut", "accounting software saida". One national
// page cannot rank for all of them, and a national page with the city name
// swapped in is a doorway page - which Google treats as spam and which would
// be dishonest anyway.
//
// So every entry here has to clear one bar: it must say something true about
// doing this work in THAT city that would not be true of the others. Local
// industry, what that industry does to the build, how we actually get there.
// If an entry cannot clear that bar, it should not be published.
//
// Two rules that apply to every page in this file, without exception:
//   1. CSP4TECH has ONE office, in Beirut Digital District. No page may imply
//      a branch, local staff or a local entity anywhere else. Every city page
//      states this in plain words rather than burying it.
//   2. No invented client counts, named clients or testimonials. The "sectors"
//      list describes what dominates business in that city, NOT a claim about
//      who our clients are - the note under it says so on every page.

const FACTS = {
  dataCentre: "No in-country region — chosen at sign-up",
  currency: "LBP and USD side by side",
  week: "Saturday–Sunday weekend, Saturday often worked",
  languages: "Arabic, English, French",
};

const SECTORS_NOTE =
  "These are the sectors that dominate local business, and they are what shapes a Zoho build here. It is a description of the city, not a list of our clients.";

const LEBANON = [
  {
    slug: "zoho-partner-beirut",
    country: "Beirut",
    kicker: "Beirut",
    home: true,
    title: "Zoho Partner in Beirut — Our Own Office, in Beirut Digital District",
    metaTitle: "Zoho Partner in Beirut | CRM, Books & HR Setup",
    metaDescription:
      "CSP4TECH works from Beirut Digital District. Zoho CRM, Books and People set up for Lebanese VAT, NSSF and dual LBP/USD books — with the team in your city.",
    facts: FACTS,
    atAGlance: [
      [
        "What this is",
        "Zoho implementation, migration and support delivered from our own office in Beirut Digital District — configured around 11% VAT, Ministry of Finance reporting, NSSF contributions and books that run in LBP and USD at once.",
      ],
      [
        "Who it suits",
        "Beirut companies that have outgrown spreadsheets and a pile of disconnected tools: agencies, importers and distributors, professional firms, clinics, NGOs and the finance and services businesses clustered in and around the city.",
      ],
      [
        "How we work here",
        "In person. Beirut is the one city where discovery workshops, data clean-up sessions, training and go-live support happen in your office on the same day you ask, because we are a short drive away rather than a flight.",
      ],
      [
        "Typical shape",
        "A first scoped phase covering one department end to end, then expansion once that department is genuinely using it. We would rather prove the thing works in sales or finance than configure all of Zoho One at once and hand over a system nobody opens.",
      ],
      [
        "What it depends on",
        "Price and timeline follow how messy the data is and how many exceptions your process genuinely has — not a headcount figure. We scope it after we have seen your actual invoices and your actual spreadsheet.",
      ],
    ],
    onTheGround: {
      cities: ["Beirut Digital District", "Achrafieh", "Hamra", "Verdun", "Mar Mikhael", "Sin el Fil", "Hazmieh", "Port of Beirut"],
      citiesNote:
        "Our office is in Beirut Digital District. Anywhere inside greater Beirut is a short drive, so on-site work is routine rather than an event we schedule weeks ahead.",
      sectors: ["Banking and finance", "Professional services", "Agencies and media", "Import and distribution", "Healthcare and clinics", "NGOs and international organisations"],
      sectorsNote: SECTORS_NOTE,
    },
    intro: [
      "Our office is in Beirut Digital District, so Beirut is the one place in the world where we can be in your office the same week you call — or the same afternoon. That changes how a Zoho project actually runs. Discovery stops being a video call where someone describes their invoicing process and becomes an hour at a desk watching it happen, which is where the exceptions nobody mentions finally surface.",
      "Beirut's business mix is heavier on services than the rest of the country: agencies, consultancies, law and accounting firms, clinics, NGOs and the finance sector, alongside the importers and distributors working out of the port. Those businesses tend to need Zoho CRM and Zoho Books tied together properly far more than they need a warehouse module, and they tend to care a great deal about who can see which client file.",
    ],
    local: [
      {
        title: "We are actually here",
        text: "One office, in Beirut Digital District — that is our only office anywhere. For Beirut clients it means on-site discovery, in-person training and someone physically present on go-live day, which is the single biggest difference between a system people adopt and one they quietly abandon.",
      },
      {
        title: "Two currencies in one set of books",
        text: "Beirut businesses routinely price in USD, collect part in LBP and bank in both. Zoho Books handles multi-currency, but only if the base currency, the exchange-rate handling and the chart of accounts are set up for it at the start. Retrofitting that after a year of entries is painful, so we settle it on day one.",
      },
      {
        title: "Power cuts are a design constraint, not an excuse",
        text: "Mains supply and generator switchover still interrupt the working day. We configure around it: Zoho's mobile apps for people who need to keep working through an outage, offline-tolerant data capture where it matters, and no process that assumes an unbroken eight-hour connection.",
      },
      {
        title: "Access control that survives a small office",
        text: "In firms where a handful of people do everything, the default answer is to give everyone admin. We set up profiles and roles properly instead — so an account manager sees their own pipeline and the finance lead sees the ledger, without anyone needing a second system to keep things private.",
      },
    ],
    zoho:
      "The usual Beirut starting point is Zoho CRM for the pipeline and Zoho Books for invoicing and VAT, connected so a won deal becomes an invoice without re-typing. Zoho People follows for leave, attendance and the employee file. Service businesses add Zoho Desk or Projects; distributors add Zoho Inventory. We implement across the full suite, and we will tell you plainly when a module is not worth turning on yet.",
    software:
      "Zoho does not cover everything. Where a Beirut client needs something the product genuinely cannot do — a Lebanese payroll calculation, an approval chain with rules no standard workflow models, an integration with a local bank's file format — we build it in Zoho Creator or as a custom application beside the suite, rather than pretending a configuration exists that does not.",
    zohoApps: ["crm", "books", "people", "desk", "analytics"],
    faqs: [
      {
        q: "Do you actually have an office in Beirut?",
        a: "Yes — in Beirut Digital District, and it is our only office anywhere. Everything we deliver in Lebanon and across the region is delivered from there.",
      },
      {
        q: "Can you come to our office in Beirut?",
        a: "Yes, and for Beirut clients we recommend it. Discovery, data clean-up, training and go-live all go better in person, and in Beirut it costs nothing extra in travel time.",
      },
      {
        q: "Can Zoho handle invoicing in both LBP and USD?",
        a: "Yes. Zoho Books supports multi-currency, so you can quote in one currency and record settlement in another. The important part is configuring the base currency and the exchange-rate handling correctly before the first invoice is raised, because changing it later means reworking history.",
      },
      {
        q: "We are a small firm — is Zoho too much for us?",
        a: "Often the right answer is less of it, not none. For a small Beirut practice that usually means Zoho CRM or Bigin plus Zoho Books, and nothing else until there is a reason. We would rather scope a smaller first phase you will actually use than sell a suite that sits idle.",
      },
    ],
  },

  {
    slug: "zoho-partner-tripoli",
    country: "Tripoli",
    kicker: "Tripoli",
    title: "Zoho Partner for Tripoli and North Lebanon",
    metaTitle: "Zoho Partner in Tripoli | North Lebanon",
    metaDescription:
      "Zoho CRM, Books and Inventory for Tripoli manufacturers, traders and family businesses — Arabic-first, VAT-ready, with on-site visits from our Beirut office.",
    facts: FACTS,
    atAGlance: [
      [
        "What this is",
        "Zoho implementation, migration and support for businesses in Tripoli and across North Lebanon — built around 11% VAT, NSSF, and books that run in LBP and USD together.",
      ],
      [
        "Who it suits",
        "Manufacturers, wholesalers, traders and family-run businesses in and around Tripoli — particularly the ones where the real system today is one person, one spreadsheet and a very good memory.",
      ],
      [
        "How we work here",
        "We do not have an office in Tripoli and we will not pretend otherwise. On-site time is scheduled in blocks — a full day or two at a stretch rather than an hour here and there — with the rest delivered remotely. North Lebanon is a drive from Beirut, not a flight, so those visits genuinely happen.",
      ],
      [
        "Typical shape",
        "Usually inventory and invoicing first, because that is where the money leaks, then sales and purchasing once stock is trustworthy.",
      ],
      [
        "What it depends on",
        "How much of the current process lives in people's heads rather than on paper. Tripoli family businesses often run on undocumented convention, and surfacing that is the real work — the software part is comparatively quick.",
      ],
    ],
    onTheGround: {
      cities: ["Tripoli", "El Mina", "Tripoli Special Economic Zone", "Zgharta", "Koura", "Batroun", "Halba and Akkar"],
      citiesNote:
        "Our only office is in Beirut Digital District. For the north we schedule on-site days rather than claiming a branch we do not have.",
      sectors: ["Manufacturing", "Soap and traditional crafts", "Furniture and woodwork", "Food processing", "Wholesale and trade", "Port and logistics"],
      sectorsNote: SECTORS_NOTE,
    },
    intro: [
      "Tripoli's business base is more industrial than Beirut's — manufacturing, food processing, furniture, soap, wholesale trade and the activity around the port and the Special Economic Zone. That changes what a Zoho build needs to do. Where a Beirut agency wants a clean pipeline and a tidy invoice, a Tripoli manufacturer wants to know what a batch actually cost, what is really on the shelf, and which customer still owes for goods collected three months ago.",
      "It also changes the language. Arabic is the working language in far more of these businesses, and a system that is English-only will be quietly worked around rather than used. Zoho supports Arabic across the apps we normally deploy, and we set it up that way from the start rather than as an afterthought.",
    ],
    local: [
      {
        title: "No office here, and we say so",
        text: "Our only office is in Beirut Digital District. For Tripoli we schedule concentrated on-site days — discovery, data work, training — and run the rest remotely. That is a deliberate choice and it is cheaper for you than paying for a branch that would sit empty most of the week.",
      },
      {
        title: "Stock you can actually trust",
        text: "The most common Tripoli problem is not sales, it is inventory: goods moved without paperwork, stock counts that only agree once a year, and a cost per unit nobody can explain. Zoho Inventory tied to Zoho Books gives you a figure that holds up — but only after the opening balances are cleaned, which is usually the bulk of the project.",
      },
      {
        title: "Arabic first, not Arabic later",
        text: "Field labels, templates and the documents customers receive all need to work in Arabic, and the layout has to survive right-to-left text. We configure that at the start, because converting a live system to Arabic after everyone has learned the English labels causes more disruption than it is worth.",
      },
      {
        title: "Family-business reality",
        text: "Ownership, management and signing authority often sit with the same two or three people, and approvals happen by phone. We do not try to replace that with a ten-step workflow nobody will follow. We model the approvals that genuinely exist and leave the rest alone.",
      },
    ],
    zoho:
      "For Tripoli the usual combination is Zoho Inventory and Zoho Books first — stock, costing, invoicing and VAT — then Zoho CRM for the customer side once the numbers are reliable. Manufacturers often add Zoho Creator for a production or batch step that no standard module covers. Zoho People comes later, when headcount makes a paper attendance sheet unworkable.",
    software:
      "Where Zoho stops, we build. For northern manufacturers that is most often a production or batch-costing step, a goods-received process matched to how the warehouse actually works, or a Lebanese payroll calculation — built in Zoho Creator so it sits beside the rest of the suite instead of becoming another island.",
    zohoApps: ["inventory", "books", "crm", "creator", "people"],
    faqs: [
      {
        q: "Do you have an office in Tripoli?",
        a: "No. Our only office is in Beirut Digital District. We serve Tripoli clients with scheduled on-site visits plus remote delivery, and we would rather say that plainly than list an address we do not occupy.",
      },
      {
        q: "Will you actually come to Tripoli, or is it all remote?",
        a: "We come. Lebanon is small enough that the north is a drive rather than a flight, so on-site days are part of a normal project here — typically concentrated into full days for discovery, data work and training rather than scattered short visits.",
      },
      {
        q: "Can the system work in Arabic?",
        a: "Yes. The Zoho apps we normally deploy support Arabic, including right-to-left layout, and customer-facing documents can be issued in Arabic. We set this up during configuration rather than retrofitting it.",
      },
      {
        q: "We manufacture — can Zoho handle production costing?",
        a: "Partly. Zoho Inventory handles stock, assemblies and landed cost well. Genuine production planning with routing and capacity is beyond it, and where a client needs that we build the missing step in Zoho Creator rather than claiming a module covers it.",
      },
    ],
  },

  {
    slug: "zoho-partner-sidon",
    country: "Sidon",
    kicker: "Sidon (Saida)",
    title: "Zoho Partner for Sidon and South Lebanon",
    metaTitle: "Zoho Partner in Sidon (Saida) | South Lebanon",
    metaDescription:
      "Zoho for Sidon traders, distributors and agricultural businesses — VAT invoicing, LBP and USD books, stock that reconciles, with on-site days from Beirut.",
    facts: FACTS,
    atAGlance: [
      [
        "What this is",
        "Zoho implementation, migration and support for businesses in Sidon and the south — configured for 11% VAT, NSSF and dual LBP/USD books.",
      ],
      [
        "Who it suits",
        "Wholesalers, distributors, retailers, agricultural traders and the family businesses that make up most of Sidon's commercial base.",
      ],
      [
        "How we work here",
        "No office in Sidon. On-site days scheduled from Beirut, the rest delivered remotely — the south is comfortably within a day trip, so site visits are normal rather than exceptional.",
      ],
      [
        "Typical shape",
        "Invoicing and receivables first, because the recurring complaint is almost always money owed rather than sales missed, then stock and purchasing.",
      ],
      [
        "What it depends on",
        "The state of the opening data. Where customer balances have been tracked in a notebook, agreeing what is genuinely owed before go-live is most of the work.",
      ],
    ],
    onTheGround: {
      cities: ["Sidon", "Port of Sidon", "Ghazieh", "Jezzine", "Nabatieh", "Zahrani"],
      citiesNote:
        "Our only office is in Beirut Digital District. Southern clients get scheduled on-site days rather than a branch that does not exist.",
      sectors: ["Wholesale and distribution", "Citrus and agriculture", "Retail", "Fuel and trading", "Port and transport", "Construction supply"],
      sectorsNote: SECTORS_NOTE,
    },
    intro: [
      "Sidon is a trading city. Most of the businesses that come to us from the south are moving goods rather than making them — wholesale, distribution, retail, agricultural produce, fuel and building materials. The shared problem is rarely the sale. It is knowing, at any given moment, what is owed, by whom, and how long it has been outstanding.",
      "That points a Zoho build in a particular direction: Zoho Books configured so ageing is visible and statements can be sent without someone assembling them by hand, tied to Zoho Inventory so a delivery and an invoice cannot drift apart. The customer relationship side matters, but it comes second to getting collections under control.",
    ],
    local: [
      {
        title: "No office in Sidon",
        text: "Our only office is in Beirut Digital District. Sidon is close enough that on-site discovery and training days are straightforward to schedule, and we do them — but we will not list a southern address we do not have.",
      },
      {
        title: "Receivables you can see",
        text: "Where balances live in a notebook or a single spreadsheet, nobody can answer 'how much is genuinely overdue' without an afternoon's work. Zoho Books gives you ageing, statements and reminders as standard. The project work is agreeing the opening balances — that is the part that takes real time and real conversations.",
      },
      {
        title: "Agricultural and seasonal trade",
        text: "Citrus and produce move in seasons, with prices that shift within the season and quantities that are weighed rather than counted. We configure units, price lists and batch handling around how the goods actually move, rather than forcing a model built for boxed retail stock.",
      },
      {
        title: "VAT on trade, done once",
        text: "For traders the VAT detail that bites is on purchases and imports, not sales. We set the tax treatment up properly in Zoho Books so input VAT is captured as goods arrive, instead of being reconstructed at reporting time from a folder of receipts.",
      },
    ],
    zoho:
      "The common Sidon build is Zoho Books plus Zoho Inventory — invoicing, VAT, ageing, stock and purchasing in one place — with Zoho CRM added when the sales side is worth formalising. Distributors with reps in the field usually want the mobile apps configured too, so orders are captured at the customer rather than phoned back to the office.",
    software:
      "Where the trade has a quirk Zoho does not model — pricing by weight with a seasonal rate, a consignment arrangement, a commission split between agents — we build that piece in Zoho Creator and connect it, rather than asking you to work around the gap manually forever.",
    zohoApps: ["books", "inventory", "crm", "creator"],
    faqs: [
      {
        q: "Do you have an office in Sidon?",
        a: "No. Our only office is in Beirut Digital District. We work with southern clients through scheduled on-site days and remote delivery.",
      },
      {
        q: "Can Zoho track what customers owe us?",
        a: "Yes. Zoho Books gives you ageing by customer, statements, and automatic payment reminders. The work in getting there is agreeing accurate opening balances, which usually means reconciling against whatever record you keep today before anything goes live.",
      },
      {
        q: "We sell by weight, not by unit — does that work?",
        a: "Yes. Zoho Inventory supports units of measure other than pieces, and price lists can vary by customer or period. Where the pricing rule is genuinely unusual, we build it as a small Creator extension rather than leaving someone to calculate it by hand.",
      },
      {
        q: "Can our reps take orders on their phones?",
        a: "Yes. Zoho's mobile apps cover order and invoice capture, and they tolerate a patchy connection better than a browser does — which matters when the round covers places where coverage drops.",
      },
    ],
  },

  {
    slug: "zoho-partner-tyre",
    country: "Tyre",
    kicker: "Tyre (Sour)",
    title: "Zoho Partner for Tyre and the Far South",
    metaTitle: "Zoho Partner in Tyre (Sour) | South Lebanon",
    metaDescription:
      "Zoho CRM, Books and Inventory for businesses in Tyre — hospitality, agriculture, fishing and trade. VAT-ready, dual-currency, delivered from our Beirut office.",
    facts: FACTS,
    atAGlance: [
      ["What this is", "Zoho implementation, migration and support for businesses in Tyre and the surrounding south, configured for 11% VAT, NSSF and books kept in LBP and USD."],
      ["Who it suits", "Hospitality and tourism operators, agricultural producers and traders, fisheries, small retailers, and the NGOs and development organisations that run programmes from the south."],
      ["How we work here", "No office in Tyre. On-site days are scheduled from Beirut and the rest runs remotely — so visits are planned in advance as full days rather than dropped in at short notice."],
      ["Typical shape", "A deliberately small first phase. Businesses here are often smaller, and a tight build that one team adopts beats a broad one that nobody maintains."],
      ["What it depends on", "Connectivity and how seasonal the business is. Both change what we configure, and both are worth being honest about before scoping."],
    ],
    onTheGround: {
      cities: ["Tyre", "Sour port", "Qana", "Bint Jbeil", "Naqoura", "Nabatieh"],
      citiesNote: "Our only office is in Beirut Digital District. The far south is the longest drive we make regularly, so on-site time is planned as whole days.",
      sectors: ["Hospitality and tourism", "Agriculture", "Fishing", "Retail and trade", "NGOs and development", "Transport"],
      sectorsNote: SECTORS_NOTE,
    },
    intro: [
      "Tyre's economy runs on tourism, agriculture, fishing and small trade, and a lot of it is seasonal. That seasonality is the single biggest thing a system here has to cope with: revenue that concentrates into a few months, staff numbers that rise and fall, and cash that has to be managed across the quiet half of the year.",
      "It also means the right build is usually a small one. A hotel, a restaurant group or a produce trader in the south rarely needs the whole Zoho suite — they need invoicing and VAT that is correct, a clear picture of bookings or orders, and payroll handled without a monthly spreadsheet. Selling more than that would be selling shelfware.",
    ],
    local: [
      {
        title: "No office in Tyre",
        text: "Our only office is in Beirut Digital District. Tyre is the furthest we travel routinely, so we plan on-site work as full days rather than short visits — and we say plainly that there is no branch in the south.",
      },
      {
        title: "Seasonal businesses need seasonal reporting",
        text: "Comparing this month to last month is meaningless when the season turns. We configure reporting around the comparison that matters — this season against the same season last year — and set budgets and cash views that assume the quiet months rather than being surprised by them.",
      },
      {
        title: "Staff who come and go",
        text: "Seasonal hiring makes the employee file and leave tracking messier than headcount suggests. Zoho People handles joiners and leavers cleanly, which matters more here than in a business with a stable team, and keeps NSSF-relevant records in one place instead of across several years of spreadsheets.",
      },
      {
        title: "Built to tolerate a weak connection",
        text: "Connectivity in the south is less reliable than in Beirut. We lean on Zoho's mobile apps where they are the better tool, avoid processes that assume a browser session stays open for an hour, and make sure nothing critical is lost when the line drops mid-entry.",
      },
    ],
    zoho:
      "For Tyre the usual starting point is Zoho Books for invoicing and VAT, with Zoho Inventory where goods are involved and Zoho Bookings or Zoho CRM where the business is driven by reservations and repeat customers. Zoho People follows once seasonal hiring makes manual records unworkable. We would rather start with two apps that get used than six that do not.",
    software:
      "Where something genuinely does not fit — a booking rule, a seasonal price structure, a catch or harvest log — we build it in Zoho Creator alongside the suite. For smaller southern businesses we are also quick to say when custom work is not worth the money yet.",
    zohoApps: ["books", "inventory", "bookings", "people", "crm"],
    faqs: [
      { q: "Do you have an office in Tyre?", a: "No. Our only office is in Beirut Digital District. We serve clients in Tyre and the far south with scheduled on-site days and remote delivery." },
      { q: "Is Zoho worth it for a small seasonal business?", a: "Sometimes, and sometimes not. If invoicing and VAT are already handled cleanly and the team is small, the honest answer may be to wait. Where it does pay off is when the season creates more transactions than a spreadsheet can carry without errors." },
      { q: "Will it work when our internet is unreliable?", a: "Zoho is cloud-based, so a connection is needed — but the mobile apps cope with intermittent coverage far better than a browser, and we design the day-to-day processes so a dropped connection does not lose work." },
      { q: "Can it handle staff who only work in summer?", a: "Yes. Zoho People manages joiners and leavers, contract types and leave balances, so seasonal staff are recorded properly rather than tracked informally and then reconstructed at year end." },
    ],
  },

  {
    slug: "zoho-partner-zahle",
    country: "Zahle",
    kicker: "Zahle and the Bekaa",
    title: "Zoho Partner for Zahle and the Bekaa Valley",
    metaTitle: "Zoho Partner in Zahle | Bekaa Valley",
    metaDescription:
      "Zoho Books, Inventory and Creator for Bekaa agriculture, wineries and food producers — harvest-season costing, VAT, dual-currency books, on-site days from Beirut.",
    facts: FACTS,
    atAGlance: [
      ["What this is", "Zoho implementation, migration and support for businesses in Zahle and across the Bekaa, configured for 11% VAT, NSSF and books kept in LBP and USD."],
      ["Who it suits", "Agricultural producers and traders, wineries and arak distillers, food processors, poultry and dairy operations, and the wholesalers who move their output."],
      ["How we work here", "No office in the Bekaa. On-site days are scheduled from Beirut over the mountain road, planned as full days and avoided in bad winter weather."],
      ["Typical shape", "Costing and inventory first — what a batch or a season actually cost — then sales and receivables."],
      ["What it depends on", "How much of the production process is currently recorded at all. In agriculture a great deal of it is not, and agreeing what to capture is the first real decision."],
    ],
    onTheGround: {
      cities: ["Zahle", "Chtaura", "Ksara", "Baalbek", "Rayak", "West Bekaa"],
      citiesNote: "Our only office is in Beirut Digital District. The Bekaa is reached over the mountain road, so on-site days are planned ahead and scheduled around the weather.",
      sectors: ["Agriculture", "Wine and arak production", "Food processing", "Poultry and dairy", "Agricultural trade", "Logistics"],
      sectorsNote: SECTORS_NOTE,
    },
    intro: [
      "The Bekaa is Lebanon's agricultural and food-production heartland, and that makes the accounting question different from anywhere else in the country. A Beirut services firm wants to know what a project earned. A Zahle producer wants to know what a batch cost — across inputs bought months earlier, labour concentrated into a few weeks, and output that varies with the season rather than with effort.",
      "Standard accounting software is built for buying a thing and selling that same thing. Agriculture and food production are not that: inputs become something else, yields are not fixed, and the cost per unit is only knowable after the fact. Getting that right in Zoho takes deliberate configuration, and sometimes a purpose-built step beside it.",
    ],
    local: [
      {
        title: "No office in the Bekaa",
        text: "Our only office is in Beirut Digital District. We schedule on-site days in Zahle and the wider Bekaa and run everything else remotely — and we plan those days around the mountain road rather than promising same-day attendance we could not reliably deliver in winter.",
      },
      {
        title: "Batch and harvest costing",
        text: "The question that matters is what a batch, a vintage or a season actually cost once inputs, labour and losses are counted. Zoho Inventory handles assemblies and landed cost; where production is genuinely more complex than that, we add a Creator-built step rather than pretending the standard module covers it.",
      },
      {
        title: "Seasonal labour and NSSF",
        text: "Harvest means a sharp temporary rise in headcount, often paid differently from permanent staff. Keeping those records straight for NSSF purposes is harder than for a stable team, and it is exactly the kind of thing that gets reconstructed badly at year end if nobody captured it at the time.",
      },
      {
        title: "Selling in both currencies, buying in one",
        text: "Producers often buy inputs in USD and sell domestically in LBP, or both. Setting the base currency and exchange-rate handling correctly at the start is what keeps margin reporting honest — get it wrong and every gross-margin figure after it is quietly misleading.",
      },
    ],
    zoho:
      "A typical Bekaa build starts with Zoho Books and Zoho Inventory for purchasing, stock, costing and VAT, with Zoho Creator added where production needs a step the standard modules do not model. Zoho CRM comes in where there is a real distribution or export sales effort, and Zoho People once seasonal hiring makes manual records impractical.",
    software:
      "This is the part of Lebanon where custom work earns its keep most often. Harvest logs, batch yields, grading, tank or silo tracking and seasonal labour records rarely fit a standard module, and building those in Zoho Creator — connected to Books and Inventory — is usually cheaper and far more useful than bending an off-the-shelf process.",
    zohoApps: ["books", "inventory", "creator", "crm", "people"],
    faqs: [
      { q: "Do you have an office in Zahle?", a: "No. Our only office is in Beirut Digital District. We schedule on-site days in Zahle and across the Bekaa, with the rest delivered remotely." },
      { q: "Can Zoho handle agricultural or production costing?", a: "Partly, and we are specific about where the line is. Zoho Inventory covers purchasing, stock, assemblies and landed cost well. Yield variation, grading and multi-stage production are beyond it — we build those as Creator applications connected to Books and Inventory." },
      { q: "We hire a lot of seasonal workers — can it cope?", a: "Yes. Zoho People handles temporary contracts, joiners and leavers and leave records. Payroll itself needs a Lebanon-specific build, because Zoho Payroll does not cover Lebanon — we explain how we handle that on our payroll page." },
      { q: "Is it worth it for a family farm or small producer?", a: "Not always, and we will say so. The point at which it pays is usually when you are selling to multiple buyers on credit, or when nobody can answer what a batch cost without a long afternoon of arithmetic." },
    ],
  },

  {
    slug: "zoho-partner-jounieh",
    country: "Jounieh",
    kicker: "Jounieh and Keserwan",
    title: "Zoho Partner for Jounieh and the Keserwan Coast",
    metaTitle: "Zoho Partner in Jounieh | Keserwan",
    metaDescription:
      "Zoho for Jounieh hospitality, retail and clinics — bookings, invoicing, VAT and dual-currency books, with on-site days from our Beirut office.",
    facts: FACTS,
    atAGlance: [
      ["What this is", "Zoho implementation, migration and support for businesses in Jounieh and the Keserwan coast, configured for 11% VAT, NSSF and dual LBP/USD books."],
      ["Who it suits", "Restaurants and hospitality groups, hotels and guesthouses, retailers, clinics and aesthetic practices, and the marine and leisure businesses along the bay."],
      ["How we work here", "No office in Jounieh, but it is a short drive north of Beirut — close enough that on-site discovery and training are easy to arrange."],
      ["Typical shape", "Bookings or point-of-sale feeding invoicing and VAT first, then customer records and marketing once the daily operation is clean."],
      ["What it depends on", "Whether there is an existing till or booking system to integrate with, and how much of the customer history is worth migrating."],
    ],
    onTheGround: {
      cities: ["Jounieh", "Kaslik", "Zouk Mosbeh", "Adma", "Ghazir", "Harissa"],
      citiesNote: "Our only office is in Beirut Digital District. Keserwan is close enough that on-site visits are straightforward to schedule.",
      sectors: ["Restaurants and hospitality", "Hotels and guesthouses", "Retail", "Clinics and aesthetics", "Marine and leisure", "Events"],
      sectorsNote: SECTORS_NOTE,
    },
    intro: [
      "Jounieh and the Keserwan coast run heavily on hospitality, retail and consumer services — restaurants, hotels, clinics, salons, shops and the leisure businesses around the bay. These are high-volume, low-value-per-transaction businesses, which is almost the opposite of the project-based work typical in Beirut, and the systems question is different as a result.",
      "Here the pressure is on the daily operation: taking the booking, serving the customer, getting the VAT right on hundreds of small transactions, and knowing by the end of the week whether the month is on track. A CRM full of named prospects matters far less than a clean, fast flow from booking to payment to the books.",
    ],
    local: [
      {
        title: "Close enough to visit properly",
        text: "Our only office is in Beirut Digital District, but Keserwan is a short drive up the coast. On-site discovery, staff training and go-live support are all practical here, which matters in hospitality where the people using the system are rarely at a desk.",
      },
      {
        title: "Bookings and appointments that reach the books",
        text: "Zoho Bookings handles appointment-led businesses — clinics, salons, services — and connects to Zoho Books so a completed appointment becomes a recorded sale. The failure mode we see most is a booking system and an accounting system that never speak, reconciled by hand each month.",
      },
      {
        title: "VAT across many small transactions",
        text: "Consumer businesses raise a lot of small invoices, and VAT errors multiply quietly. Setting tax treatment and receipt templates up correctly once, in Zoho Books, is worth more here than any amount of reporting added later.",
      },
      {
        title: "Shift-based staff",
        text: "Hospitality rosters, split shifts and high turnover make attendance and leave harder to track than headcount implies. Zoho People covers the employee file, leave and attendance; where the rostering itself is genuinely complex, that is usually where a custom piece earns its place.",
      },
    ],
    zoho:
      "A typical Keserwan build is Zoho Books for invoicing and VAT, Zoho Bookings where the business runs on appointments, and Zoho Inventory where there is stock behind the counter. Zoho CRM and Zoho Marketing Automation follow for repeat-customer work — which in hospitality is usually where the actual growth comes from.",
    software:
      "Where an existing till, property-management or booking platform has to stay, the useful work is often integration rather than replacement: getting that system's daily output into Zoho Books cleanly so nobody re-keys it. We build those connections rather than insisting everything move at once.",
    zohoApps: ["books", "bookings", "inventory", "crm", "people"],
    faqs: [
      { q: "Do you have an office in Jounieh?", a: "No. Our only office is in Beirut Digital District, but Keserwan is a short drive, so on-site work here is routine." },
      { q: "Can Zoho replace our restaurant till?", a: "Usually we would not try. A specialised point-of-sale system is often better at the counter than anything in Zoho, and the higher-value work is connecting it to Zoho Books so daily takings and VAT land correctly without re-keying." },
      { q: "We run a clinic — can it handle appointments?", a: "Yes. Zoho Bookings covers scheduling, reminders and staff availability, and connects to Zoho Books for invoicing. For patient records specifically, any build has to respect confidentiality obligations, and we scope that carefully rather than treating it as ordinary CRM data." },
      { q: "Can it handle both walk-ins and reservations?", a: "Yes, though they are different flows and worth configuring separately rather than forcing one process to cover both. We would look at how your floor actually runs before deciding." },
    ],
  },

  {
    slug: "zoho-partner-byblos",
    country: "Byblos",
    kicker: "Byblos (Jbeil)",
    title: "Zoho Partner for Byblos and the Jbeil District",
    metaTitle: "Zoho Partner in Byblos (Jbeil) | Lebanon",
    metaDescription:
      "Zoho CRM, Books and Bookings for Byblos hospitality, boutique retail and professional firms — VAT-ready, dual-currency, with on-site days from our Beirut office.",
    facts: FACTS,
    atAGlance: [
      ["What this is", "Zoho implementation, migration and support for businesses in Byblos and the Jbeil district, configured for 11% VAT, NSSF and dual LBP/USD books."],
      ["Who it suits", "Hospitality and tourism businesses, boutique retailers, restaurants, professional practices and the small firms around the town and the campus."],
      ["How we work here", "No office in Byblos. It is a straightforward drive north from Beirut, so on-site discovery and training days are easy to schedule."],
      ["Typical shape", "Small and focused. Most businesses here need invoicing, VAT and a clean customer record — not a suite."],
      ["What it depends on", "How seasonal the trade is, and whether there is an existing booking or till system that should stay in place."],
    ],
    onTheGround: {
      cities: ["Byblos", "Jbeil old town", "Amchit", "Halat", "Blat", "Jbeil district"],
      citiesNote: "Our only office is in Beirut Digital District. Byblos is close enough up the coast that on-site visits are straightforward.",
      sectors: ["Tourism and heritage", "Hospitality", "Boutique retail", "Restaurants", "Education", "Professional services"],
      sectorsNote: SECTORS_NOTE,
    },
    intro: [
      "Byblos is a tourism and hospitality town with a heritage core, a working harbour and a university campus, and the businesses here are mostly small: restaurants, guesthouses, boutique shops, tour operators and professional practices. Trade is seasonal, and a lot of it is cash and walk-in rather than invoiced on account.",
      "That shapes the honest advice. A small Byblos business usually does not need a broad Zoho deployment — it needs VAT-correct invoicing, a customer record worth something for repeat business, and as little daily admin as possible. We would rather scope that tightly than sell a suite that sits unused through the winter.",
    ],
    local: [
      {
        title: "No office in Byblos",
        text: "Our only office is in Beirut Digital District. Byblos is a straightforward drive up the coast, so on-site discovery and training are practical — but there is no branch here and we will not say otherwise.",
      },
      {
        title: "Seasonal trade, honestly handled",
        text: "Summer and the festival season concentrate the year's revenue. We configure reporting to compare like with like across seasons rather than month to month, and set cash views that assume the quiet months instead of being caught out by them.",
      },
      {
        title: "Repeat visitors are the asset",
        text: "For a guesthouse, restaurant or tour operator, the returning customer is worth more than the new one. A light Zoho CRM or Bigin setup that records who came, when and what they booked is usually the highest-return piece here — and it is a small build.",
      },
      {
        title: "Right-sized, deliberately",
        text: "We will tell a small Byblos business when Zoho Books and nothing else is the correct answer. Recommending more than the operation can absorb is how systems end up abandoned, and a quiet winter is when that becomes obvious.",
      },
    ],
    zoho:
      "The usual Byblos build is Zoho Books for invoicing and VAT, with Zoho Bigin or Zoho CRM for the customer record and Zoho Bookings where appointments or reservations drive the day. Zoho Inventory is added only where there is genuine stock to manage. Most of these projects are deliberately small.",
    software:
      "Custom work is rarely the right call at this size, and we say so. Where it does make sense it is usually a connection — getting an existing booking platform or till to feed Zoho Books — rather than building something new from scratch.",
    zohoApps: ["books", "bigin", "bookings", "crm", "inventory"],
    faqs: [
      { q: "Do you have an office in Byblos?", a: "No. Our only office is in Beirut Digital District. Byblos is close enough that on-site days are easy to arrange." },
      { q: "We are a small guesthouse — is this overkill?", a: "Possibly, and we would rather tell you that than take the project. For a small operation the useful combination is usually Zoho Books plus a light customer record, and nothing more until there is a reason." },
      { q: "What is the difference between Bigin and Zoho CRM?", a: "Bigin is the smaller, simpler product: pipelines, contacts and not much else, which suits a small team that wants to start today. Zoho CRM is far more configurable and worth it once you need custom fields, automation and reporting depth. We will recommend whichever genuinely fits." },
      { q: "Can we keep using our current booking site?", a: "Usually yes. If it works and your guests know it, replacing it is rarely the best use of the budget — connecting it so bookings reach your books without re-keying normally is." },
    ],
  },

  {
    slug: "zoho-partner-baabda",
    country: "Baabda",
    kicker: "Baabda and Mount Lebanon",
    title: "Zoho Partner for Baabda and Mount Lebanon",
    metaTitle: "Zoho Partner in Baabda | Mount Lebanon",
    metaDescription:
      "Zoho CRM, Books and People for Baabda contractors, clinics and professional firms — VAT-ready, dual-currency, with on-site support from our nearby Beirut office.",
    facts: FACTS,
    atAGlance: [
      ["What this is", "Zoho implementation, migration and support for businesses in Baabda and the surrounding Mount Lebanon district, configured for 11% VAT, NSSF and dual LBP/USD books."],
      ["Who it suits", "Contractors and engineering firms, hospitals and clinics, professional practices, schools and the service businesses in the suburbs east and south of Beirut."],
      ["How we work here", "No office in Baabda, but it borders greater Beirut — close enough that on-site work is as practical as it is in the city itself."],
      ["Typical shape", "Project or case tracking tied to invoicing, then HR once the team is large enough that leave and attendance stop fitting on a spreadsheet."],
      ["What it depends on", "Whether work is billed by project, retainer or visit — that single answer changes most of the configuration."],
    ],
    onTheGround: {
      cities: ["Baabda", "Hazmieh", "Furn el Chebbak", "Chiyah", "Aley", "Broummana", "Mount Lebanon"],
      citiesNote: "Our only office is in Beirut Digital District, which borders this district — on-site work here is routine.",
      sectors: ["Contracting and engineering", "Healthcare and hospitals", "Professional services", "Education", "Real estate", "Retail"],
      sectorsNote: SECTORS_NOTE,
    },
    intro: [
      "Baabda and the surrounding Mount Lebanon suburbs sit immediately alongside greater Beirut, and the business mix reflects it: contractors and engineering firms, hospitals and clinics, schools, professional practices and real-estate businesses, many of them serving the capital while based just outside it.",
      "The recurring systems problem in this district is project work. Contractors and professional firms bill against jobs, stages or retainers rather than against a simple product sale, and the gap between what has been done and what has been invoiced is where margin disappears. That is a configuration problem with a good answer, but not a default one.",
    ],
    local: [
      {
        title: "Effectively on our doorstep",
        text: "Our only office is in Beirut Digital District, which borders this district. There is no Baabda branch, but on-site discovery, training and go-live support are as practical here as anywhere in the capital.",
      },
      {
        title: "Billing against projects, not products",
        text: "Zoho Projects and Zoho Books together cover stage billing, retainers and time-based work. The configuration decision that matters is how a job is broken down before any of it is billed — get that wrong and every progress report afterwards is guesswork.",
      },
      {
        title: "Subcontractors and retentions",
        text: "Contracting brings subcontractor payments, retention held back until completion and variations agreed mid-job. These are the details most standard setups skip, and they are exactly the details that decide whether the accounts reflect reality at the end of a contract.",
      },
      {
        title: "Confidentiality where it is required",
        text: "Clinics and professional practices hold records that carry real confidentiality obligations. We set up roles, profiles and field-level permissions deliberately for those clients, rather than treating the data as ordinary CRM records.",
      },
    ],
    zoho:
      "A typical build here is Zoho Books with Zoho Projects for job costing and stage billing, plus Zoho CRM for the pipeline where work is won competitively. Zoho People follows for leave, attendance and the employee file. Clinics more often need Zoho Bookings and tighter permissions than they need a sales pipeline.",
    software:
      "Contracting is one of the areas where Zoho stops short. Retention schedules, variation orders, subcontractor certificates and progress valuations usually need a purpose-built piece in Zoho Creator, connected to Books so the accounting stays in one place rather than running in parallel on a spreadsheet.",
    zohoApps: ["books", "creator", "crm", "people", "bookings"],
    faqs: [
      { q: "Do you have an office in Baabda?", a: "No. Our only office is in Beirut Digital District, which borders the district — close enough that on-site work here is routine." },
      { q: "Can Zoho handle contracting and progress billing?", a: "Zoho Projects and Zoho Books cover job costing, stages and retainers. Retention, variation orders and progress valuations are usually beyond the standard modules, and we build those in Zoho Creator connected to Books rather than claiming they are covered." },
      { q: "We run a clinic — how is patient data handled?", a: "Carefully, and scoped explicitly. Zoho supports roles, profiles and field-level permissions, and we configure them deliberately for practices holding confidential records. Where a dedicated clinical system is the right answer, we will say so rather than stretching a CRM to fit." },
      { q: "Can you support us in person?", a: "Yes. Baabda is adjacent to our Beirut office, so on-site discovery, training and go-live support are all practical and are part of how we would normally run the project." },
    ],
  },
];

module.exports = LEBANON;
