// Industry and capability solution pages.
//
// ACCURACY RULES for anything added here:
// - The only partner/certification claim CSP4TECH may make is "Zoho Authorized
//   Partner". No Microsoft, Salesforce, Oracle or other partner status.
// - No invented statistics, percentages, client names, testimonials, case
//   studies, awards or pricing.
// - Zoho Payroll is NOT available for Lebanon (it ships for India, the USA and
//   the GCC). Never put "payroll" in zohoApps on a Lebanon-facing page and
//   never imply Lebanese payroll runs in Zoho Payroll.
// - CSP4TECH supplies no hardware: no biometric readers, kiosks, badge
//   printers, sensors or PLCs. Software and integration only.
// - ZATCA e-invoicing is a Saudi requirement and does not apply in Lebanon —
//   that page must say so plainly.
//
// zohoApps slugs must match generator/data/products.js so the app chips link.
module.exports = [
  {
    slug: "manufacturing-erp-software",
    kicker: "Manufacturing",
    title: "Manufacturing ERP Software for Factories in Lebanon",
    metaTitle: "Manufacturing ERP Software in Lebanon | CSP4TECH",
    metaDescription: "Zoho ERP setup for manufacturers in Lebanon: production orders, bills of material, raw material stock, job costing and VAT invoicing, set up and supported.",
    intro: [
      "A production run stops because one component ran out, and nobody knew until the line was already halted. The stock figure in the spreadsheet was accurate three weeks ago. The real cost of a finished unit gets worked out afterwards, from memory.",
      "We set up Zoho so the floor, the store and the accounts read the same numbers. Bills of material, work orders, material consumption and finished goods sit in one system, and the VAT invoice comes out of that same place."
    ],
    problems: [
      "Raw material shortages are discovered during a run instead of before it is scheduled.",
      "Unit cost is an estimate, because material, labour and overhead are recorded in three different places.",
      "Work in progress and finished goods are counted by hand, so the figure is out of date by the time it is reported.",
      "Sales commits to delivery dates without any view of what can actually be produced that week."
    ],
    included: [
      { title: "Bills of material and work orders", text: "We build each product recipe with its components, scrap allowance and output, then set up work orders that deduct material as production is confirmed." },
      { title: "Raw, in-process and finished stock", text: "Separate locations or bins for each stage, with reorder points on the components that stop a run when they are missing." },
      { title: "Job and batch costing", text: "Material, labour and overhead land on the job, so each batch carries a real cost. That cost then feeds pricing and margin reports." },
      { title: "Purchasing tied to production", text: "Purchase orders raised from actual shortages, with supplier lead times and partial receipts handled, so buying follows the plan." },
      { title: "VAT invoicing and accounts", text: "Sales and purchase documents post into Zoho Books with Lebanese VAT treatment, so your accountant works from production records instead of retyping them." }
    ],
    zohoApps: ["inventory", "books", "creator", "crm", "analytics"],
    faqs: [
      { q: "Can Zoho handle bills of material with sub-assemblies?", a: "Yes. Zoho Inventory covers multi-level assemblies. Where a process needs something it does not model, such as yield tracking or machine routing, we build that part in Zoho Creator and link it. We confirm which route fits during scoping, before anything is configured." },
      { q: "We still plan production in spreadsheets. Do we have to stop?", a: "Not on day one. We usually bring stock and costing into Zoho first and leave planning where it is, then move the plan in once the stock numbers are trusted. Changing both at once tends to make people distrust the whole system." },
      { q: "How long does a manufacturing setup take?", a: "It depends on the number of products, components and locations, and on how clean the existing data is. We give an estimate after reviewing your item list and a sample of production records, rather than quoting a timeframe before we have seen them." },
      { q: "Can we hold costs in USD and invoice in LBP?", a: "Yes. Zoho Books handles multiple currencies, so supplier costs can sit in USD while documents are issued in LBP, with the rate recorded on each transaction. We agree the rate policy with you and your accountant so reports stay consistent." }
    ]
  },
  {
    slug: "future-factory",
    kicker: "Smart Manufacturing",
    title: "Future Factory: Connected, Paperless Manufacturing",
    metaTitle: "Future Factory | Connected Manufacturing on Zoho",
    metaDescription: "Shop-floor visibility without paper: Zoho Creator apps, machine and sensor data fed in by API, and Analytics dashboards for manufacturers in Lebanon.",
    intro: [
      "On most shop floors the plan is printed in the morning and marked up by hand through the day. Downtime, scrap and rework are noted on a sheet that reaches the office days later, and the quantity in the system rarely matches the quantity on the rack. Managers hear about a problem at the end of the shift rather than while it is still fixable.",
      "Future Factory is what we call the paperless layer we build on Zoho: job cards and quality checks entered on a tablet at the line, work-in-progress updated as material moves, and dashboards reading the same data. Where your machines, meters or gateways already publish readings, we take them in through Zoho APIs or a Creator function and show them next to production and order data. We build the software and the integration — we do not manufacture or supply sensors, PLCs or machinery, and we work with whatever your equipment or automation supplier already exposes."
    ],
    problems: [
      "Production status is known only by walking the floor or calling a supervisor.",
      "Downtime and scrap are written on paper, so the reasons behind them are never counted or compared.",
      "Machine and meter data sits in a vendor portal of its own, disconnected from orders, stock and cost.",
      "System stock and floor stock disagree because movements are entered in a batch at the end of the day."
    ],
    included: [
      { title: "Paperless job cards", text: "A Zoho Creator app used on tablets or phones at the line: start and stop a job, confirm quantity produced, log scrap and rework against reason codes, and record the operator. Entry screens are kept short enough to use with gloves on." },
      { title: "Work-in-progress and stock movement", text: "Zoho Inventory with a Creator layer so confirming a stage updates raw material consumption, work-in-progress and finished goods as it happens. Lot and batch references carry through the stages for traceability." },
      { title: "Machine and sensor data ingestion", text: "We expose a secure endpoint — a Creator or Catalyst function, or a direct Analytics data source — that accepts readings your equipment, gateway, SCADA or supplier platform can already send over HTTP or as scheduled files. No hardware is supplied by us; we integrate with what is there." },
      { title: "Live dashboards", text: "Zoho Analytics dashboards for output against plan, downtime by reason, scrap rate and order status, built for a screen on the floor as well as a phone. Refresh frequency is set per data source so the numbers on screen are honest about how current they are." },
      { title: "Quality checks and maintenance logs", text: "Checklists per product and stage with photo capture and pass or fail recording, so a batch carries its own quality evidence. A preventive maintenance schedule logs interventions against each machine and flags what is due." }
    ],
    zohoApps: ["creator", "inventory", "analytics", "catalyst", "books"],
    faqs: [
      { q: "Do you supply the sensors or the IoT hardware?", a: "No. We build the software side — the Creator apps, the dashboards and the integration that receives data. Readings have to come from your equipment, a gateway, or a supplier platform that can send them over HTTP or export files. Where nothing can send data, operators enter the numbers at the line instead." },
      { q: "How live are the dashboards, in practice?", a: "It depends on the source. Entries made at the line appear as soon as they are saved, pushed machine readings appear as often as your equipment sends them, and Analytics reports refresh on the schedule we set with you. We tell you the real latency per source rather than labelling everything live." },
      { q: "We already have an ERP. Can this run alongside it?", a: "Often yes. The shop-floor layer can read from and write back to an existing ERP through its API, or exchange scheduled files where there is no API. That lets you get floor visibility without a full replacement, and we are clear about which direction data flows in each case." },
      { q: "Will the tablets work if the factory Wi-Fi drops?", a: "Creator mobile supports offline entry on forms designed for it, syncing once the connection returns. Dashboards and lookups that need live data will not update while offline. We design the line forms for offline first and keep reporting screens separate." }
    ]
  },
  {
    slug: "retail-erp-solution",
    kicker: "Retail",
    title: "Retail ERP Solution for Shops and Chains in Lebanon",
    metaTitle: "Retail ERP Solution in Lebanon | CSP4TECH",
    metaDescription: "Zoho retail setup for Lebanese shops and chains: stock across branches, POS and online orders in one place, LBP and USD pricing, VAT-ready invoices.",
    intro: [
      "An item sells out in one branch while the same box sits untouched in another, and nobody finds out until a customer asks for it. Takings are totalled at night from till rolls, then typed again for the accountant.",
      "We configure Zoho so branches, online orders and the accounts share one stock list and one customer list. Prices, promotions and VAT are set once, and each branch sees what it actually holds."
    ],
    problems: [
      "Branch stock levels are only known after someone walks the shelves and counts.",
      "The same customer exists three times, because the till, the WhatsApp orders and the invoices are separate lists.",
      "A price change has to be entered again at every till and on the website.",
      "Cash, card and online takings are reconciled by hand each evening before anything reaches the accounts."
    ],
    included: [
      { title: "Stock per branch and warehouse", text: "One item list with quantities held per location, so a transfer between branches is a recorded movement instead of a phone call." },
      { title: "Shop and online orders together", text: "Sales from the counter and from your online store arrive as the same kind of order record, with stock deducted once." },
      { title: "One customer history", text: "A single customer list built from till, WhatsApp and online activity, with past purchases visible to whoever is serving." },
      { title: "Pricing in LBP and USD", text: "Price lists per channel and currency, so a change is made in one place and applies everywhere, with VAT handled on the document." },
      { title: "Daily close and dashboards", text: "Takings by branch, payment type and shift feed into Zoho Books and a dashboard, so the morning report needs no manual totalling." }
    ],
    zohoApps: ["inventory", "commerce", "books", "crm", "analytics"],
    faqs: [
      { q: "Can Zoho work with the POS hardware we already have?", a: "Often yes, if the POS can export sales or offers an API. We check your specific system first. If a direct link is not possible, we set up a scheduled import so sales still reach stock and accounts without retyping." },
      { q: "Most of our orders come through WhatsApp. Does that fit?", a: "It does. We connect WhatsApp so conversations attach to the customer record and an order can be raised from the chat. Staff keep replying the way they do now, and the order history stops living only on one phone." },
      { q: "Do we need Zoho Commerce if we already have a website?", a: "No. If you run Shopify, WooCommerce or similar, we can sync products, stock and orders into Zoho and leave the storefront as it is. Zoho Commerce is an option only if you would rather have store and back office in one system." },
      { q: "Can a branch manager see only their own branch?", a: "Yes. Roles and permissions are set per branch, so a manager sees their own numbers while head office sees all of them. We map that out with you before go-live so nobody has access they should not have." }
    ]
  },
  {
    slug: "distribution-erp-software",
    kicker: "Distribution",
    title: "Distribution ERP Software for Wholesalers in Lebanon",
    metaTitle: "Distribution ERP Software in Lebanon | CSP4TECH",
    metaDescription: "Zoho ERP for distributors and wholesalers in Lebanon: price lists per customer, van sales, warehouse stock, credit limits, collections and VAT invoicing.",
    intro: [
      "A van leaves in the morning with stock that was only roughly written down, and comes back with invoices, returns and cash that take the rest of the day to sort out. A customer disputes a price and nobody can say which list applied.",
      "We build the Zoho setup around the way goods and money actually move. Price lists per customer, stock by warehouse and by van, credit limits checked when the order is raised, and collections tracked against the invoice."
    ],
    problems: [
      "Every salesperson quotes from their own copy of a price list, so discounts are inconsistent.",
      "Stock loaded onto a van is unrecorded until the paperwork comes back to the office.",
      "Goods ship to customers who are already over their credit limit and behind on payment.",
      "Returns and expired goods are written off late, long after they have eaten the margin."
    ],
    included: [
      { title: "Customer price lists and discounts", text: "Price lists by customer, channel or region, with approval needed on discounts past a set limit, so quoting is consistent across the team." },
      { title: "Warehouse and van stock", text: "Each van treated as its own stock location, with loading, sales and returns recorded, so the stock on the road is visible from the office." },
      { title: "Credit limits and collections", text: "Limits and payment terms held on the customer record and checked at order entry, with ageing reports and follow-up tasks on overdue invoices." },
      { title: "Order to delivery chain", text: "Sales order, picking, delivery note and invoice linked in one chain, with batch or expiry details captured where the goods require it." },
      { title: "Margin and route coverage", text: "Reports on margin by customer, product and route, plus which outlets were visited in the period and which were missed." }
    ],
    zohoApps: ["inventory", "books", "crm", "creator", "analytics"],
    faqs: [
      { q: "Can reps take orders on a phone where the signal is weak?", a: "Yes. We build the field side in Zoho Creator, whose mobile app holds entries offline and syncs when signal returns. We test that on your actual routes before rollout, not only in the office." },
      { q: "We sell to the same customer in both LBP and USD. Is that a problem?", a: "No. Each customer carries a base currency and documents can be issued in either, with the rate recorded. Statements then show what is owed in each currency instead of one blended number." },
      { q: "Can Zoho block an order for a customer who has not paid?", a: "It can. We configure the credit rules you want, and the system either warns or blocks when an order breaks them. You decide who may override and whether that needs approval, and we set it up that way." },
      { q: "Do you handle batch numbers and expiry dates?", a: "Yes, where your goods need them. Zoho Inventory tracks batches and serial numbers, and we configure picking so older batches leave first. For stricter shelf-life rules we add the checks in Creator." }
    ]
  },
  {
    slug: "real-estate-erp",
    kicker: "Real Estate",
    title: "Zoho for Real Estate Agencies, Brokers and Developers",
    metaTitle: "Zoho CRM for Real Estate in Lebanon | CSP4TECH",
    metaDescription: "Zoho for Lebanese real estate agencies, brokers, developers and property managers: listings, enquiries from WhatsApp, viewings, contracts, rent and fees.",
    intro: [
      "Enquiries arrive on WhatsApp, Instagram, the portals and the office line, and every agent keeps a private list. Two agents end up calling the same buyer about the same apartment, and when an owner asks what happened with last week's viewings, nobody can answer without a round of phone calls. Listing details are updated in one place and go stale everywhere else.",
      "We set up a single place for properties, owners, enquiries and deals, with WhatsApp conversations attached to the same record as everything else. Deal stages, commission splits and rent collection are configured around your own paperwork rather than a generic sales pipeline. For developers and property managers we extend it with Zoho Creator: units per project, payment plans, handover checklists and maintenance requests."
    ],
    problems: [
      "The same buyer is worked by two agents because enquiries are never logged in one shared list.",
      "Listing prices, photos and availability sit in agents' phones, so the website and the portals drift out of date.",
      "Owner and landlord updates are assembled by hand each time — what was advertised, who viewed, what was offered.",
      "Rent due dates, cheques and commission splits are tracked in a spreadsheet that has nothing to do with the accounts."
    ],
    included: [
      { title: "Property and unit records", text: "One module for properties and units with type, area, floor, asking price or rent, availability, photos and the linked owner. Developer projects are broken down to unit level so availability and payment status are visible per unit." },
      { title: "Enquiries from every channel", text: "Website forms, portal enquiry emails, WhatsApp and Instagram messages all create or update a record in Zoho CRM, with the source recorded. Assignment rules decide which agent picks it up, and duplicates are flagged on the way in." },
      { title: "Viewings and deal stages", text: "A pipeline that matches how deals really move — enquiry, viewing, offer, reservation, contract, handover — with tasks, reminders and documents on the record. Viewing feedback is captured so owner updates can be produced from data instead of memory." },
      { title: "Rent, instalments and commission", text: "Zoho Books handles invoices and receipts, recurring rent, developer instalment plans, VAT where it applies and LBP or USD recording. Commission splits per deal and per agent are calculated from the deal record." },
      { title: "Owner and management reporting", text: "Zoho Analytics dashboards for pipeline by agent, enquiries by source, days on market, collections and arrears. Owner statements and activity summaries can be generated on a schedule." }
    ],
    zohoApps: ["crm", "creator", "books", "salesiq", "analytics"],
    faqs: [
      { q: "Can WhatsApp enquiries land directly in the CRM?", a: "Yes, through the WhatsApp Business API connected to Zoho CRM or SalesIQ, so messages attach to the lead or contact and the team replies from one shared inbox. You need a WhatsApp Business account and an approved number, which we help you set up. A personal WhatsApp account cannot be connected this way." },
      { q: "Can we connect to property portals?", a: "It depends on the portal. Where one offers a listing feed or API, we can push your listings so you maintain them once; where it does not, we set up parsing of their enquiry emails so leads still reach the CRM. We confirm what is possible with each portal before including it in scope." },
      { q: "Should we use Zoho CRM or Bigin?", a: "Bigin suits a small brokerage that mainly needs a clean pipeline and contact history. Zoho CRM makes sense once you need property and unit modules, commission logic, portals for owners or deeper automation. We will say which one fits rather than defaulting to the bigger product." },
      { q: "Can owners or landlords see their own properties?", a: "Yes, either through a restricted portal view or a small Creator page showing only their units, viewings and statements. What they can see is defined by you, field by field. Many clients start with scheduled statements by email and add a portal later." }
    ]
  },
  {
    slug: "contracting-management-erp",
    kicker: "Construction and Contracting",
    title: "Zoho for Construction and Contracting Companies",
    metaTitle: "Zoho ERP for Contracting Companies | CSP4TECH",
    metaDescription: "Zoho for construction and contracting firms in Lebanon: BOQs, subcontractors, progress billing, retention, variation orders and project cost tracking.",
    intro: [
      "The BOQ lives in Excel, the site diary lives in a notebook, and the accountant sees a project only when an invoice goes out. Subcontractor claims arrive on paper, get argued over at the office, and the retention held against each one is remembered rather than recorded. By the time a project closes, showing where the budget went means rebuilding it from files.",
      "We configure Zoho so each project carries its own budget, committed costs, claims and billing in one record. Progress billing, retention, advance recovery and variation orders are set up the way your contracts are actually written, including work priced in USD and paid in LBP. Site staff submit daily reports, manpower counts, material requests and photos from a phone, so the office is not waiting on paperwork."
    ],
    problems: [
      "Project cost is only visible after the month is closed, far too late to act on a line that is running over.",
      "Subcontractor claims, approvals and retention are tracked on paper, so retained amounts get released late or missed entirely.",
      "Variation orders are agreed on site and invoiced afterwards, sometimes with no signed record to support them.",
      "Every progress invoice is rebuilt by hand from the BOQ, with previous-cycle quantities re-keyed each time."
    ],
    included: [
      { title: "Project and BOQ structure", text: "Each project is set up with phases and BOQ lines imported from your existing Excel, carrying budgeted quantity, rate and value. Committed and actual cost are recorded against the same lines so variance is visible per item, not just per project." },
      { title: "Subcontractors and work orders", text: "Subcontract records hold scope, agreed rates, retention percentage and advance terms, with work orders issued from them. Claims are submitted, reviewed and approved in a tracked flow, and retention held and released is recorded per claim." },
      { title: "Progress billing and retention", text: "Invoice templates in Zoho Books pull cumulative quantity, previously billed, current period, retention and advance recovery, with VAT applied where relevant. Dual-currency recording keeps USD contract values and LBP movements straight." },
      { title: "Site reporting from the field", text: "Mobile forms for daily progress, manpower and equipment on site, material requests, safety observations and photos. Entries feed the same project record the finance team is looking at." },
      { title: "Cost and cash dashboards", text: "Zoho Analytics dashboards for cost to date against budget per project, certified against billed, receivables aging, and retention held versus releasable. Approval routing for claims, purchases and variations is set up so nothing moves on verbal agreement." }
    ],
    zohoApps: ["creator", "books", "expense", "qntrl", "analytics"],
    faqs: [
      { q: "Does Zoho handle retention and advance recovery as standard?", a: "Not as out-of-the-box fields. We configure Zoho Books with custom fields and invoice templates, and in more involved cases a Creator layer, so each claim shows cumulative, previous, current, retention and recovery lines. We read your contract wording first, because retention terms differ from one client to the next." },
      { q: "Can we keep working from our Excel BOQs?", a: "Yes. The BOQ is imported at project setup, and you can export the priced position back to Excel at any time for consultants who expect that format. The point is that quantities are entered once and reused each billing cycle instead of re-keyed." },
      { q: "Can it cope with contracts in USD and payments in LBP?", a: "Yes, Zoho Books supports multi-currency, so contract values, invoices and receipts can be recorded in the currency each actually happened in. We agree with your accountant how rates are set and which currency reports are presented in." },
      { q: "Can subcontractors submit their claims themselves?", a: "There are two practical routes: a Creator portal where approved subcontractors enter claims against their own work orders, or a simpler path where they send documents and your QS enters them. The portal cuts re-typing but needs subcontractors willing to use it. We usually start with the simpler route and open the portal once the internal flow is settled." }
    ]
  },
  {
    slug: "healthcare-erp-solution",
    kicker: "Healthcare",
    title: "Zoho for Clinics, Medical Centres and Hospitals",
    metaTitle: "Zoho for Clinics and Medical Centres | CSP4TECH",
    metaDescription: "Zoho setup for clinics, medical centres and hospitals in Lebanon: patient admin, appointments, invoicing with VAT, and reporting. Configured by CSP4TECH.",
    intro: [
      "Appointments get booked in a desk diary, over the phone and on WhatsApp, then confirmed by someone calling round the day before. Patient details sit in a filing cabinet while the billing sits in a separate spreadsheet, so nobody can say what a patient owes without digging through both. When a doctor's schedule shifts, reception works down the list one call at a time.",
      "We configure Zoho around the administrative side of a practice: scheduling, patient records, invoicing, payer paperwork and follow-up. To be clear about scope, this is practice administration and patient records handling — it does not make clinical decisions, interpret results or suggest treatment, and clinical judgement stays entirely with your clinicians. Access is set by role, so reception sees scheduling, finance sees balances, and medical staff see what you decide they should see."
    ],
    problems: [
      "Slots get double-booked because bookings are taken by two or three people working from different lists.",
      "Reminders go out only when someone remembers to send them, so no-shows are never properly controlled.",
      "Patient balances are spread across a receipt book, a spreadsheet and the accountant's own file.",
      "Insurance and third-party payer claims are tracked in email threads, so an unpaid claim is often noticed long after submission."
    ],
    included: [
      { title: "Appointment scheduling", text: "Zoho Bookings set up per doctor, room or service, with real working hours, holidays and buffer times. Confirmations and reminders go out automatically by email, SMS or WhatsApp." },
      { title: "Patient records", text: "A patient module holding contact details, visit history, uploaded documents and consent forms, built in CRM or as a Creator app where your intake process needs its own screens. Field-level and role-based access controls who can open what." },
      { title: "Invoicing and collection", text: "Zoho Books configured for Lebanese VAT invoicing, LBP and USD side by side, receipts, deposits and patient statements. Price lists per service, package or payer are kept in one place." },
      { title: "Payer and claim tracking", text: "A simple stage-based pipeline for claims: prepared, submitted, approved, part-paid, rejected. Aging reports show what is sitting with each payer and for how long." },
      { title: "Enquiries and reporting", text: "Reception enquiries from WhatsApp, the website and phone land in one queue instead of individual inboxes. Analytics dashboards cover bookings, no-shows, revenue by service and outstanding balances." }
    ],
    zohoApps: ["bookings", "creator", "books", "desk", "analytics"],
    faqs: [
      { q: "Can we keep patient medical notes in Zoho?", a: "It can store notes, documents and visit history as records your staff enter, with access limited by role. It is not a diagnostic system and it is not certified as a medical device. Decide with your clinicians and your legal adviser what is appropriate to hold in it." },
      { q: "Does the billing handle Lebanese VAT and dual currency?", a: "Yes. Zoho Books is configured for VAT invoicing and for recording in LBP and USD, so statements and reports reflect how you actually charge and collect. Your accountant can review the chart of accounts before we go live." },
      { q: "Can patients book themselves online?", a: "Yes, Zoho Bookings gives each doctor or service a public booking page you can link from your site or WhatsApp. You can also keep booking internal and let reception control the diary. Both setups use the same calendar underneath." },
      { q: "We already use a lab or imaging system. Can it connect?", a: "If that system has an API or can export files on a schedule, we can usually pass data between it and Zoho using Deluge or a Creator function. Where no API exists, a scheduled file import is often the practical route. We check what your vendor supports before promising an integration." }
    ]
  },
  {
    slug: "education-erp-software",
    kicker: "Education",
    title: "Education ERP Software for Schools and Training Centres",
    metaTitle: "Education ERP Software in Lebanon | CSP4TECH",
    metaDescription: "Zoho setup for schools, universities and training centres in Lebanon: admissions, student records, fee invoicing in LBP and USD, staff records and NSSF.",
    intro: [
      "Applications arrive by email, by WhatsApp and in person, then get copied into a spreadsheet that one person maintains. Fee reminders go out late, partly because nobody is certain who has paid and who has a sibling discount.",
      "We put admissions, student records, fees and staff administration into Zoho so each lives in one place. Parents receive clear invoices and receipts, and the office stops rebuilding the same lists every term."
    ],
    problems: [
      "Parent enquiries sit across several inboxes and phones, so follow-up depends on who happens to remember.",
      "Fee balances, discounts and instalment plans live in a spreadsheet that does not agree with the accounts.",
      "Staff contracts, leave records and NSSF paperwork are kept in folders, so payroll preparation takes days.",
      "Board or ministry reporting means collecting the same figures from the same people again by hand."
    ],
    included: [
      { title: "Admissions pipeline", text: "Enquiry forms that feed one list, with stages from first contact to enrolment, so the office can see exactly where each applicant stands." },
      { title: "Student and guardian records", text: "One record per student holding guardians, class, documents and history, with parent contact details kept in a single place instead of several." },
      { title: "Fees, discounts and instalments", text: "Fee structures by grade with sibling and scholarship discounts, instalment schedules, and invoices and receipts issued in LBP or USD." },
      { title: "Staff records and payroll inputs", text: "Employee records, leave approvals and the attendance and contract data a Lebanese payroll run needs, including NSSF contribution inputs, prepared for your payroll process." },
      { title: "Term and board reporting", text: "Dashboards for enrolment, collections and outstanding fees, so the figures are ready without a round of emails before every meeting." }
    ],
    zohoApps: ["creator", "books", "people", "forms", "analytics"],
    faqs: [
      { q: "Is there a ready-made Zoho app for schools?", a: "There is no single Zoho school product. We build the student and academic side in Zoho Creator and connect it to Books for fees and People for staff. That takes longer than switching on a standard app, but it fits how your institution actually runs." },
      { q: "Can parents see their own invoices and balances?", a: "Yes. A portal can show invoices, receipts and outstanding amounts per student, in Arabic or English. Schools usually find this reduces the number of calls to the accounts office." },
      { q: "Do you support Arabic for parent-facing documents?", a: "We do. Zoho supports Arabic including right-to-left layout, and we set up invoice and letter templates in Arabic, English or both. Portal text and field labels can be bilingual as well." },
      { q: "We are a training centre, not a school. Does this still apply?", a: "The shape is similar, the detail differs. Training centres usually need course sessions, trainer scheduling and per-course invoicing rather than grades and academic years, so we configure around courses instead." }
    ]
  },
  {
    slug: "agriculture-erp-solution",
    kicker: "Agriculture",
    title: "Zoho for Agriculture and Agri-Business Operations",
    metaTitle: "Zoho ERP for Agriculture and Agri-Business | CSP4TECH",
    metaDescription: "Zoho for farms, nurseries, agri-traders and food processors in Lebanon and abroad: crop cycles, inputs, stock, buyers and VAT-ready books. Built by CSP4TECH.",
    intro: [
      "Field work is written on paper and typed up days later, if at all. Input costs — seed, fertiliser, fuel, labour, spraying — are known as one yearly total, never broken down to the plot or crop that used them. Sales go out on delivery notes with prices agreed over the phone, so the margin on a batch is a reasonable guess rather than a number.",
      "We build the record-keeping around how the operation actually runs: plots, cycles, activities, harvests, lots, buyers and payments. Standard Zoho apps cover stock, sales and accounting, and Zoho Creator covers the parts that are specific to your crops and your paperwork. Field staff enter data from a phone, including with no signal, and forms and reports run in Arabic and English with full right-to-left layout."
    ],
    problems: [
      "Input costs are recorded for the whole farm, so there is no way to see cost per plot, crop or season.",
      "Harvest quantities are counted on paper at the field and re-keyed later, leaving stock figures days behind reality.",
      "There is no trace from a delivered crate back to the plot and harvest date it came from.",
      "Buyer prices, advances and settlements live in a notebook, so balances with traders are hard to confirm when questioned."
    ],
    included: [
      { title: "Plots and crop cycles", text: "A Creator app holding plots or greenhouses, area, variety, planting and expected harvest dates, with an activity log per cycle. Every cost and harvest entry is attached to a cycle, which is what makes per-crop reporting possible later." },
      { title: "Field capture on mobile", text: "Mobile forms for irrigation, spraying, fertilisation, labour hours and harvest weights, with photos where useful. Offline entry is enabled so staff can record in the field and sync when they are back in range." },
      { title: "Inputs and stock", text: "Zoho Inventory for seed, fertiliser, chemicals, packaging and spare parts, with suppliers, batches and reorder points. Issues are booked against a plot or cycle so the cost lands where it was actually spent." },
      { title: "Buyers, sales and collection", text: "Zoho CRM for buyers, agreed prices and standing orders, and Zoho Books for invoices, VAT, LBP and USD, advances and receivables aging. Delivery notes carry the lot reference back to the harvest record." },
      { title: "Cost and yield reporting", text: "Zoho Analytics dashboards covering yield per plot or dunum, cost per kilo, input consumption and margin per buyer or crop. Reports are built from your own cost structure, not a template." }
    ],
    zohoApps: ["creator", "inventory", "crm", "books", "analytics"],
    faqs: [
      { q: "Will the mobile forms work where there is no signal?", a: "Yes. The Zoho Creator mobile app supports offline data entry, and records sync once the phone has a connection again. We decide together which forms need offline mode, since it changes how they are designed." },
      { q: "Can we really see cost per plot and per crop?", a: "Only if inputs and labour are booked against a plot or cycle at the moment they are used, which is what the field forms are for. The reporting is straightforward once that habit is in place. If your team records nothing at the field, no system can split the cost afterwards." },
      { q: "Do we need the full Zoho suite to start?", a: "No. Many agri-businesses begin with one Creator app for field and harvest records plus Zoho Books for invoicing, then add Inventory or CRM when the first part is being used properly. We would rather phase it than switch on apps nobody opens." },
      { q: "Can the system be used in Arabic?", a: "Yes. Field forms, picklists, report labels and printed documents can be set up in Arabic, English or both, with right-to-left layout handled properly. We usually keep field screens in Arabic and management reporting bilingual." }
    ]
  },
  {
    slug: "erp-solution-non-profit",
    kicker: "Non-Profit",
    title: "ERP Solution for NGOs and Non-Profits in Lebanon",
    metaTitle: "ERP Solution for Non-Profits in Lebanon | CSP4TECH",
    metaDescription: "Zoho setup for NGOs in Lebanon: grant and project budgets, restricted funds in multiple currencies, donor reporting and audit-ready expense records.",
    intro: [
      "A donor asks what their grant paid for, and the answer takes two days of digging through bank statements and an expenses sheet. Money from several donors sits in the same account, in different currencies, with the split held in one person's head.",
      "We set Zoho up so each grant, project and restricted fund can be reported on its own. Expenses are coded as they are entered, rather than reconstructed when a report falls due."
    ],
    problems: [
      "Spending on one grant cannot be separated from another without manual work in a spreadsheet.",
      "Restricted funds in USD, EUR and LBP are mixed together in reports, so the remaining balance per donor is unclear.",
      "Each donor report is rebuilt from scratch in that donor's own format every quarter.",
      "Receipts and supporting documents are filed away from the transactions an auditor will ask about."
    ],
    included: [
      { title: "Grant and project structure", text: "Each grant set up as a project with its own budget lines, donor, period and reporting needs, so every transaction carries that coding from the moment it is entered." },
      { title: "Restricted funds and currencies", text: "Funds tracked by donor and currency, with the rate recorded on each transaction, so the balance left on a restricted fund stays readable." },
      { title: "Budget against actual", text: "Budget lines per activity with actual spend shown beside them during the grant period, not only after it has closed." },
      { title: "Expense claims and approvals", text: "Office and field expenses submitted with receipts attached, routed for approval, and posted to the correct grant and budget line." },
      { title: "Donor and audit reporting", text: "Report layouts shaped to what each donor asks for, plus transaction listings with the supporting documents attached for audit." }
    ],
    zohoApps: ["books", "expense", "creator", "analytics", "people"],
    faqs: [
      { q: "Can Zoho Books handle fund accounting?", a: "Zoho Books is not a dedicated fund accounting package, but with projects, cost centres and tagging it can report by grant and restricted fund. We show you that structure using your own grant list, so you can judge whether it meets your donor requirements before committing." },
      { q: "Each of our donors wants a different report format. How is that handled?", a: "We set up the underlying coding once, then build separate report layouts on top of it. Data is entered a single time and shaped differently per donor, which is where most of today's manual effort goes." },
      { q: "Does Zoho offer non-profit pricing?", a: "Zoho runs programmes for non-profit organisations, and eligibility and terms are decided by Zoho, not by us. We can point you to the current programme and help you put the application together." },
      { q: "Can field staff submit expenses without seeing the accounts?", a: "Yes. Zoho Expense lets staff photograph receipts and submit claims from a phone, while only finance sees the ledger. Approval steps and limits are set per project or role." }
    ]
  },
  {
    slug: "accounting-erp-software",
    kicker: "Accounting",
    title: "Accounting and ERP Software for Lebanese Businesses",
    metaTitle: "Accounting ERP Software in Lebanon | CSP4TECH",
    metaDescription: "Zoho Books setup for Lebanon: VAT invoicing, LBP and USD dual-currency accounting, MOF reporting and a chart of accounts your accountant can work with.",
    intro: [
      "Invoices are typed in Word, numbered by hand and sent as PDFs, then the same figures are keyed in again by the accountant at month end. VAT time becomes a search through folders for what was issued and what was actually paid.",
      "We set up Zoho Books for how business is done here: VAT on sales and purchases, LBP and USD side by side, and a chart of accounts your accountant recognises. They carry on with the accounting, with far less to re-enter."
    ],
    problems: [
      "Invoice numbering and VAT details change depending on who produced the document.",
      "LBP and USD transactions are kept in separate files, so seeing the real position takes a reconciliation first.",
      "Figures for VAT and MOF submissions are assembled by hand each period from documents and bank statements.",
      "The accountant receives a folder after the fact and has no view of anything during the month."
    ],
    included: [
      { title: "Chart of accounts and opening balances", text: "A chart of accounts arranged for Lebanese reporting and for how your accountant works, with opening balances loaded from your last closed period." },
      { title: "VAT invoicing and documents", text: "Invoice, credit note and receipt templates with the correct VAT treatment and consistent numbering, in Arabic, English or both." },
      { title: "LBP and USD dual currency", text: "Both currencies handled with the rate stored on each transaction, so customer statements, supplier balances and bank accounts stay readable in each one." },
      { title: "Banking and reconciliation", text: "Bank and cash accounts set up with statement imports and a reconciliation routine, so the cash position is current rather than monthly." },
      { title: "Reporting and accountant access", text: "VAT and MOF figures drawn from the ledger, and a role for your accountant or auditor that gives them what they need and nothing more." }
    ],
    zohoApps: ["books", "expense", "inventory", "analytics", "billing"],
    faqs: [
      { q: "Will our accountant accept Zoho Books?", a: "Most do, once they can see the ledger and export what they need. We involve them during setup, agree the chart of accounts and the reports with them, and give them their own login. The aim is not to replace them." },
      { q: "Does Zoho Books handle Lebanese VAT?", a: "Zoho Books is not localised for Lebanon out of the box, so we configure the tax rates, document fields and reports to match local requirements. The declaration figures come from the ledger, and your accountant still reviews and files it." },
      { q: "How is the exchange rate handled?", a: "The rate is recorded on each transaction, and we agree with you which rate to apply and who updates it. Gains and losses from rate movements post to accounts your accountant specifies, so they stay visible." },
      { q: "Can we move mid-year, or should we wait for January?", a: "Either works. Moving mid-year means loading a trial balance and open items as at the switch date, which is more work but means you stop waiting. We usually start from a closed month so the first comparison is clean." }
    ]
  },
  {
    slug: "inventory-management-software",
    kicker: "Inventory",
    title: "Inventory Management Software for Warehouses and Branches",
    metaTitle: "Inventory Management Software in Lebanon | CSP4TECH",
    metaDescription: "Zoho Inventory setup for businesses in Lebanon: multi-location stock, reorder points, barcode picking, stock counts and accurate numbers your team trusts.",
    intro: [
      "The system says fourteen, the shelf has nine, and the last full count was months ago. Purchasing buys more of what is already stacked in the back and not enough of what sells every week.",
      "We configure Zoho Inventory around your locations, your items and the way your team already works. Movements are recorded where they happen, reorder points come from your own sales, and counting becomes routine instead of a shutdown."
    ],
    problems: [
      "Stock figures drift between counts, so staff check the shelf rather than the system.",
      "The same item goes by different names and codes in sales, purchasing and the warehouse.",
      "Transfers between locations are agreed verbally and written up days later, if at all.",
      "Reordering relies on one person noticing a gap, so fast sellers run out while slow stock builds up."
    ],
    included: [
      { title: "Clean item list and units", text: "One item list with codes, units of measure, pack sizes and barcodes, built by cleaning and merging the lists you use today." },
      { title: "Locations and transfers", text: "Warehouses, shops and bins set up as locations, with transfers recorded as goods move and quantities visible per location." },
      { title: "Reorder points and purchasing", text: "Reorder levels and preferred suppliers per item, with purchase orders raised from real shortages and supplier lead times." },
      { title: "Barcode receiving and picking", text: "Receiving, picking and counting by scan on a phone or a barcode reader, so each movement is logged at the moment it happens." },
      { title: "Cycle counts and adjustments", text: "Counts by location or category on a schedule, with variance reports and a reason on every adjustment, so differences get explained." }
    ],
    zohoApps: ["inventory", "books", "creator", "analytics", "crm"],
    faqs: [
      { q: "Do we need special scanners?", a: "Usually not. Zoho Inventory scans with a phone camera and works with standard USB or Bluetooth barcode readers. We do not sell hardware, so we start with the equipment you already own and tell you what to look for if you decide to buy more." },
      { q: "What if our items have no barcodes?", a: "We generate and print internal barcodes against your own item codes. This is common for local manufacturers and for loose goods, and it is usually faster than waiting for supplier barcodes to become consistent." },
      { q: "Our stock data is a mess. Can it still be migrated?", a: "Yes, and the cleaning is part of the work. We deduplicate items, correct units and agree one coding rule with you, then load opening balances from a physical count so the starting numbers are real." },
      { q: "Can we keep using Excel alongside it?", a: "You can export anything to Excel, and some analysis is easier there. What we aim to stop is Excel being the place stock is recorded, because that is where two different numbers start to appear." }
    ]
  },
  {
    slug: "hr-software-erp",
    kicker: "HR & ERP",
    title: "HR and ERP That Share the Same Data",
    metaTitle: "HR & ERP Integration in Lebanon | CSP4TECH",
    metaDescription: "CSP4TECH connects Zoho People with Books, projects and approvals so HR, finance and operations share one record. Zoho Authorized Partner in Beirut.",
    intro: [
      "In most companies HR sits in one place and everything else sits somewhere else. Leave gets approved over WhatsApp, headcount lives in a spreadsheet, and finance hears about a new hire when the first salary run comes round.",
      "We set up Zoho People so it talks to the parts of the business that depend on it. Employee details are entered once, approvals follow the same chain everywhere, and the figures in your reports come from the same records HR works in every day."
    ],
    problems: [
      "A new hire is created in HR but nobody tells finance, so the cost only shows up after the fact.",
      "Leave and expense approvals sit in chat threads, leaving no record of who approved what.",
      "The same employee details are retyped into HR, accounting and project tools, and the three never quite match.",
      "Timesheets are collected separately from attendance, so project and department costs are an estimate."
    ],
    included: [
      { title: "One employee record", text: "Zoho People becomes the master record for every employee, with the fields finance and operations actually need. Other apps read from it instead of keeping their own copy." },
      { title: "Approvals in one chain", text: "Leave, expense, purchase and hiring requests run through configured approval flows with the right escalations. Each step is logged with a date and an approver." },
      { title: "HR to accounting handover", text: "Expense claims, advances, end-of-service provisions and the monthly salary journal land in Zoho Books in the correct accounts. LBP and USD transactions are kept straight." },
      { title: "Timesheets tied to cost", text: "Hours booked against clients or internal projects flow through to billing and to departmental cost reports, so you can see where paid time is going." },
      { title: "Reporting across both sides", text: "Zoho Analytics dashboards combine headcount, leave, payroll cost and revenue in one view. Managers see their own department without being able to browse everyone else." }
    ],
    zohoApps: ["people", "books", "qntrl", "analytics", "one"],
    faqs: [
      { q: "Can you run our Lebanese payroll inside Zoho?", a: "Zoho Payroll is only offered in a limited set of countries and Lebanon is not one of them, so we never set it up here. We handle Lebanese payroll either through a configured Zoho Creator app that calculates salaries and NSSF contributions and posts the journal into Zoho Books, or by exporting clean attendance and leave figures into the payroll process you already use." },
      { q: "Do we need the full Zoho One bundle for this?", a: "Not always. If you only need HR plus accounting, two or three apps can be licensed on their own, and Zoho One usually makes sense once you are heading past five or six apps. We work out the app list with you before anything is bought." },
      { q: "Our accounting is not on Zoho Books. Can HR still connect?", a: "Usually yes, through an API integration or a structured export, as long as your accounting system allows one of the two. We check what your current system exposes first and tell you plainly if the link has to be a scheduled file rather than a live one." },
      { q: "Who looks after the setup after go-live?", a: "You own the account and the data, and your admin is trained to make day-to-day changes. We stay on for support and for the changes that touch automation or the accounting side, on whatever arrangement suits you." }
    ]
  },
  {
    slug: "human-resource-software",
    kicker: "HR Software",
    title: "Zoho People as Your HR System of Record",
    metaTitle: "Zoho People HR Software in Lebanon | CSP4TECH",
    metaDescription: "Zoho People setup in Lebanon: employee records, leave, attendance, appraisals, onboarding and self-service, configured by CSP4TECH in Beirut.",
    intro: [
      "Staff files live in a folder of scanned contracts, leave balances sit in a spreadsheet only one person really understands, and every question about remaining days goes through HR by message. When that person is away, the answers stop.",
      "Zoho People gives you one place where employee information lives and one set of rules for leave, attendance and reviews. We configure it around your handbook, your Lebanese public holidays and your actual approval chain, then train the people who will use it."
    ],
    problems: [
      "Leave balances are recalculated by hand every year, and any dispute comes down to whose spreadsheet is more recent.",
      "Contracts, IDs and work papers are spread across email and desktops, with no reminder before something expires.",
      "Nobody can say who is on site today, because attendance is marked somewhere separate from the HR file.",
      "Appraisals happen in Word documents, and last cycle is hard to find when a promotion is being discussed."
    ],
    included: [
      { title: "Employee records and documents", text: "Each employee gets a structured profile with contract, ID, dependants and job history attached. Expiry dates on documents raise a reminder before the date passes, not after." },
      { title: "Leave rules that match your policy", text: "Entitlements, accrual, carry forward, unpaid leave and sick leave are set to your handbook, with Lebanese public holidays loaded. Balances update themselves as requests are approved." },
      { title: "Attendance and shifts", text: "Check-in by web, mobile or an existing device feed, with shift patterns, grace periods and overtime rules configured. Exceptions are flagged for a manager rather than buried in a report." },
      { title: "Onboarding and exit checklists", text: "A new joiner triggers tasks for HR, IT and the line manager, with each item tracked to completion. The same runs in reverse for an exit, so nothing is left with a departing employee." },
      { title: "Self-service in Arabic and English", text: "Employees request leave, view their documents, update their own details and see the team calendar from their phone. We configure the Arabic interface with right-to-left layout for staff who prefer it." }
    ],
    zohoApps: ["people", "recruit", "shifts", "peopleplus"],
    faqs: [
      { q: "Can our staff use it in Arabic?", a: "Yes. Zoho People supports Arabic with right-to-left layout, and we set it as the default for the employees who want it. Anything you write yourself, such as policy text and form labels, needs translating by you or by us, since only the standard interface comes translated." },
      { q: "Does Zoho People work out Lebanese salaries and NSSF?", a: "No. Zoho Payroll, the app that would do the salary calculation, is not available for Lebanon, so Zoho People handles the attendance, leave and employee data side only. The salary and NSSF calculation is done in a Creator app we configure or in your existing payroll process, fed by clean data from Zoho People." },
      { q: "What happens to the leave balances we have now?", a: "We import opening balances as at a cut-off date you choose, and the first month is run in parallel so you can compare against your spreadsheet. Discrepancies get fixed before the old sheet is retired." },
      { q: "Can managers approve requests from their phone?", a: "Yes, through the Zoho People mobile app or an email link. We set delegation so that when a manager travels, approvals move to a named stand-in instead of piling up." }
    ]
  },
  {
    slug: "biometric-attendance-software",
    kicker: "Attendance",
    title: "Biometric Attendance Data Into Zoho",
    metaTitle: "Biometric Attendance Software Lebanon | CSP4TECH",
    metaDescription: "We pull punches from your existing biometric or card readers into Zoho People and Books so attendance, shifts and leave reconcile each month.",
    intro: [
      "The fingerprint reader at the door works fine. The problem is what happens next: someone exports a file from the device software at month end, opens it in Excel, matches it against the leave sheet by hand, and chases missing punches two weeks after they happened.",
      "We work on the data path rather than the door. Punches are brought out of your existing devices into Zoho People on a schedule, your shift and overtime rules are applied automatically, and leave is reconciled against attendance so the monthly figure is ready without a manual rebuild."
    ],
    problems: [
      "The device export is a raw list of punches, and turning it into hours worked takes a person several days every month.",
      "Missing punches, late arrivals and early exits only come to light at month end, when it is too late to ask the employee.",
      "Leave is approved in one place and absence is recorded in another, so the two sets of numbers never agree.",
      "Each branch has a different device model exporting a different file format, and someone has to merge them all by hand."
    ],
    included: [
      { title: "Device check before anything is promised", text: "We look at each device model you own and establish how data can come out of it: an API, direct database access, or a scheduled file export. The findings are written down per model so you know exactly what is possible." },
      { title: "The data link itself", text: "A scheduled integration moves punch records into Zoho People, with duplicate handling and a log of each run. If a run fails, someone is notified rather than finding out at month end." },
      { title: "Shift and overtime rules", text: "Shift patterns, night shifts, grace periods, rounding and overtime thresholds are configured once so raw punches become hours worked. Weekend and public holiday rates are handled by rule, not by hand." },
      { title: "Exception handling", text: "A missed punch raises a correction request that the employee submits and the manager approves, with the reason stored. The attendance record keeps both the original punch data and the approved adjustment." },
      { title: "Monthly reconciliation output", text: "Attendance, approved leave and overtime are reconciled into one monthly sheet per employee, ready for review and then for your payroll step. Variances against the previous month are highlighted for checking." }
    ],
    zohoApps: ["people", "creator", "books", "analytics"],
    faqs: [
      { q: "Do you sell the biometric devices?", a: "No. We are not a hardware vendor and we do not supply readers, controllers or turnstiles. You keep or buy the devices from your own supplier, and we build and maintain the software link between them and Zoho." },
      { q: "Will our specific device integrate?", a: "That has to be checked model by model before we commit to anything. Integration depends on whether the device or its management software exposes an API, allows a read-only database connection, or can write a scheduled export file, and some older or locked-down units offer none of the three. We confirm your models first and tell you the honest answer, including when the only route left is a manual file upload." },
      { q: "Can we use phone check-in instead of the reader?", a: "Yes, the Zoho People mobile app can record check-in with location, and some clients run it alongside the readers for staff who work off site. Both sources can feed the same attendance record." },
      { q: "Does the attendance data turn into salaries automatically?", a: "It produces the hours, overtime and absence figures that a salary calculation needs, but not the salary itself. Zoho Payroll does not cover Lebanon, so the calculation runs either in a Creator app configured for Lebanese rules and NSSF or in your existing payroll process, using the file this setup produces." }
    ]
  },
  {
    slug: "visitor-management-system",
    kicker: "Visitor Management",
    title: "Visitor Management Built on Zoho Creator",
    metaTitle: "Visitor Management System in Lebanon | CSP4TECH",
    metaDescription: "Visitor sign-in, pre-registration, host alerts and a searchable visitor log, built on Zoho Creator by CSP4TECH, a Zoho Authorized Partner in Beirut.",
    intro: [
      "Reception keeps a paper book. A visitor writes a name, maybe a company, and a signature nobody can read, then waits while the receptionist calls three extensions trying to find the host. If anyone later asks who was in the building on a given morning, the answer means flipping through pages.",
      "We build the software side of visitor management on Zoho Creator, shaped around how your reception actually works. Expected guests are registered in advance, arrivals are recorded with a photo and a purpose, the host is notified straight away, and the log is searchable by name, date, company or host."
    ],
    problems: [
      "The paper logbook is the only record of who entered, and it is illegible and easy to walk off with.",
      "Visitors stand at reception while someone phones around looking for the person they came to see.",
      "Contractors and delivery drivers reach work areas with nothing recorded about where they went or who let them in.",
      "Confidentiality forms are signed on paper and filed, so producing a specific one during an audit takes hours."
    ],
    included: [
      { title: "Pre-registration and invites", text: "Staff register expected visitors in advance and the system sends the guest a confirmation with directions and a check-in code. Reception opens the day with a list of who is coming." },
      { title: "Sign-in form for your front desk", text: "A Creator page sized for a tablet or a desktop at reception captures name, company, host, purpose, phone and a photo. Returning visitors are found by phone number instead of typing everything again." },
      { title: "Host notification", text: "The host is alerted the moment a visitor checks in, by email, Zoho Cliq or WhatsApp depending on what your team watches. If there is no response within a set time, the alert moves to a backup contact." },
      { title: "Badge layout and document signing", text: "We prepare the badge design with visitor name, host, date and area, ready for whatever label or badge printer you use. A confidentiality or safety form can be presented and signed on screen at sign-in." },
      { title: "Visitor log and reports", text: "Every entry and exit is stored with a timestamp and kept searchable, with reports by day, host, company or site. Watch lists and blocked names can be flagged before the visitor is admitted." }
    ],
    zohoApps: ["creator", "forms", "people", "mail"],
    faqs: [
      { q: "Do you supply the tablets, badge printers and card readers?", a: "No, we do not sell or supply hardware of any kind. We build the software on Zoho Creator and integrate it with the kiosk, tablet, printer or reader you already own or buy from a local supplier, and we are happy to tell your supplier what the software needs in order to work with it." },
      { q: "What happens if the internet at reception drops?", a: "Zoho Creator is a cloud application, so a full outage means reception falls back to a paper sheet for that period and the entries are keyed in afterwards. Where connectivity is unreliable we keep the sign-in form very light and recommend a mobile data backup on the reception device." },
      { q: "Can it cover more than one building?", a: "Yes. Each site gets its own expected-visitor list, its own reception users and its own log, with group-level reports across all of them. Access is set so that a receptionist in one branch does not see another branch's visitors." },
      { q: "Can visitors sign an NDA when they arrive?", a: "Yes. The form text is shown on screen before the badge is issued and the signature is stored against that visit record, so you can retrieve a specific signed form by name and date later." }
    ]
  },
  {
    slug: "zatca-e-invoicing",
    kicker: "ZATCA E-Invoicing",
    title: "ZATCA E-Invoicing Setup in Zoho Books",
    metaTitle: "ZATCA E-Invoicing in Saudi Arabia | CSP4TECH",
    metaDescription: "ZATCA e-invoicing setup in Zoho Books for companies operating in Saudi Arabia, checked against current ZATCA rules. A Saudi requirement, not a Lebanese one.",
    intro: [
      "If your company is registered for VAT in Saudi Arabia, an invoice is not finished when you email it. It has to carry the fields ZATCA requires and go through the Fatoorah process, and a billing team that is still working from an old template finds out something is wrong only when a customer or an auditor says so.",
      "To be clear, this is a Saudi Arabian requirement and it does not apply to invoicing in Lebanon, where VAT invoices and MOF reporting follow separate rules. This page is for companies with a Saudi entity, or with a Saudi branch sitting alongside their Lebanese operation."
    ],
    problems: [
      "Invoices leave the building before anyone checks whether they met the e-invoicing requirements.",
      "The current invoice template is missing required fields, the QR code or the bilingual layout.",
      "Arabic and English invoice versions are produced separately in Word, so the two do not always say the same thing.",
      "There is no organised archive of submitted invoices and their reference identifiers to produce during an audit."
    ],
    included: [
      { title: "Saudi entity setup in Zoho Books", text: "The Saudi organisation is configured with its VAT registration, tax rates, branch details and a compliant invoice numbering series. A Lebanese entity stays as a separate organisation with its own rules." },
      { title: "Compliant invoice template", text: "We build the invoice layout with the required seller, buyer, tax and totals fields and a bilingual Arabic and English presentation. Credit notes and debit notes get matching templates." },
      { title: "Submission to ZATCA", text: "Invoices are submitted through the e-invoicing connection, with the response, reference and QR code stored against the invoice. Where the standard connection does not cover a case, we build the missing piece as an API integration." },
      { title: "Checks before issue", text: "Validation rules catch a missing VAT number, a blank Arabic name or an unsupported tax treatment before the invoice goes out. The person raising the invoice sees the problem while they can still fix it." },
      { title: "Archive and team training", text: "Submitted documents, responses and identifiers are kept in a structured archive you can search during an audit. Your billing team is trained on the new flow and on what to do when a submission is rejected." }
    ],
    zohoApps: ["books", "billing", "inventory"],
    faqs: [
      { q: "Does ZATCA e-invoicing apply to our Lebanese company?", a: "No. ZATCA is the Saudi tax authority and its e-invoicing rules apply to persons subject to Saudi VAT. A company invoicing only in Lebanon follows Lebanese VAT invoicing and MOF reporting instead, which is separate work we also do." },
      { q: "Which requirements and phase apply to us?", a: "ZATCA sets the requirements and the waves, and it has changed them more than once, so we do not work from a fixed checklist. At the start of the project we verify the current ZATCA documentation and your notified wave, and we confirm the tax position with your Saudi tax advisor rather than deciding it ourselves." },
      { q: "We invoice Saudi customers from Lebanon. Are we caught by this?", a: "It depends on whether you have a Saudi registered entity or establishment subject to Saudi VAT, not on where the customer sits. That is a tax question for your advisor, and we build to whatever answer they give in writing." },
      { q: "Can Zoho Books do this on its own?", a: "For many companies the Zoho Books e-invoicing features cover the normal flow once configured. Where your situation needs something extra, such as an unusual document type or a feed from another system, we add that layer with the Zoho APIs or Zoho Creator and keep it documented." }
    ]
  },
  {
    slug: "ai-productivity-software",
    kicker: "AI Productivity",
    title: "Zoho AI Features, Set Up and Actually Used",
    metaTitle: "AI Productivity Tools in Lebanon | CSP4TECH",
    metaDescription: "CSP4TECH configures and trains teams on Zia and the AI features already included in your Zoho edition, across CRM, Desk, Books, Writer and Analytics.",
    intro: [
      "Everyone is being asked what the company is doing about AI. Meanwhile sales reps paste customer details into a public chatbot to draft a reply, and the assistant features inside the Zoho licences you already pay for have never been switched on.",
      "We start with what is already in your subscription. Zia sits across CRM, Desk, Books, Writer and Analytics, and most of it needs configuration and clean data before it is worth anything. We set it up, show each team the two or three things that help them, and come back to see whether they are still using it."
    ],
    problems: [
      "AI features that come with the licence are left in their default state and quietly ignored.",
      "Duplicate detection and prediction give poor results because key fields are empty or filled inconsistently.",
      "Staff copy customer data into outside chat tools because nobody showed them what is built into the system they already use.",
      "Arabic content gives weaker results than English, so people conclude the whole thing does not work."
    ],
    included: [
      { title: "What your edition actually includes", text: "We check your Zoho plan against the Zia features it covers and write down what is available, what needs a higher edition and what is not available at all. You decide on upgrades with that list in front of you." },
      { title: "Data cleanup first", text: "Prediction, scoring and duplicate detection depend on consistent fields and enough history. We clean up picklists, deduplicate records and fix the fields the AI features read before switching them on." },
      { title: "Sales and support assistance", text: "In CRM we set up lead scoring, next-step suggestions and anomaly alerts on the pipeline. In Desk we configure ticket classification, sentiment and reply suggestions so agents start from a draft instead of a blank box." },
      { title: "Questions instead of report requests", text: "Zia in Analytics is configured against your real datasets so a manager can ask a question in plain words and get a chart. We prepare the data model and the phrasing that works, and show what it cannot answer." },
      { title: "Short training and a follow-up", text: "Each role gets a focused session on the few features that matter to their day, with examples from your own data. A follow-up review a few weeks later shows what is being used and what needs changing." }
    ],
    zohoApps: ["crm", "desk", "books", "analytics", "workplace"],
    faqs: [
      { q: "Will all the Zia features you mention be available to us?", a: "Not necessarily. Availability depends on the Zoho edition you are on, and some features sit only in higher plans or in specific apps. We confirm your plan before promising a feature, and we also tell you when a feature performs noticeably better in English than in Arabic, which is the case for several of the language-based ones." },
      { q: "Will it write customer emails for us?", a: "It can draft and improve text in Writer, Mail and Desk, which saves time on routine replies. The output still needs a person to read it before it goes out, particularly in Arabic, and we set it up as a drafting aid rather than something that sends on its own." },
      { q: "Is our data safe in these features?", a: "That is governed by Zoho's own terms and data policies rather than by us, so we point you to the published documentation for your data centre and plan instead of giving you an assurance we are not in a position to give. We also set field-level permissions so staff only expose what their role allows." },
      { q: "Should we build a custom AI tool instead?", a: "Usually not as a first step. Most of the gain comes from configuring what is already included and getting people to use it, and that is far cheaper to maintain. If a genuine gap remains afterwards, we can build on Zoho Creator or Catalyst against the APIs." }
    ]
  },
  {
    slug: "microsoft-dynamics-365-services",
    kicker: "Dynamics 365",
    title: "Dynamics 365 and Power Platform Support",
    metaTitle: "Dynamics 365 Services in Lebanon | CSP4TECH",
    metaDescription: "Dynamics 365 and Power Platform implementation and support from CSP4TECH. Hands-on experience, not a Microsoft partnership. Zoho is our main specialty.",
    intro: [
      "Some teams are already standardised on Microsoft. Outlook, Teams and Excel run the day, and Dynamics 365 was bought to bring sales and service into the same place. Then it was deployed close to out of the box, the sales team went back to their own spreadsheet, and the licences keep renewing.",
      "We work on Dynamics 365 and the Power Platform for companies in that position. One thing to be clear about: our formal partner status is with Zoho, and for Dynamics this is hands-on implementation experience rather than a Microsoft partnership or certification. Zoho is the house specialty, and if Zoho is the better fit for what you described, we will say so."
    ],
    problems: [
      "Dynamics was switched on with default settings, so the fields and stages do not match how your sales team sells.",
      "Power Automate flows were built by someone who has since left, with no documentation and nobody able to change them.",
      "Customer information is split between Dynamics, SharePoint and private Excel files, and the Excel files are the ones people trust.",
      "You are paying for modules and user types that nobody has logged into for months."
    ],
    included: [
      { title: "Review before building", text: "We go through how your sales and service teams work now, what Dynamics is doing today and what is being avoided. The output is a scope with what gets configured, what gets dropped and what is better left outside Dynamics." },
      { title: "Sales and Customer Service configuration", text: "Pipeline stages, forms, business rules, queues and routing are set to your process, with role-based views so people see their own work. Dashboards are built for the figures your managers ask for each week." },
      { title: "Power Platform for the gaps", text: "Where Dynamics does not cover something, we build it with Power Apps and Power Automate and document each flow in writing. Anything we build is handed over in a form your own IT can maintain." },
      { title: "Data migration and cleanup", text: "Records from spreadsheets or an older CRM are deduplicated, mapped and imported with a test run first. You sign off on the test data before the live load happens." },
      { title: "Training and handover", text: "Users are trained on their own records rather than a demo environment, and administrators get written notes on the configuration. Support afterwards can be ad hoc or on a retainer." }
    ],
    zohoApps: [],
    faqs: [
      { q: "Are you a Microsoft partner?", a: "No. CSP4TECH is a Zoho Authorized Partner, and we hold no Microsoft partnership or certification. Our Dynamics 365 and Power Platform work rests on hands-on implementation experience, and we would rather you know that before engaging us than find out later." },
      { q: "Should we go with Dynamics or Zoho?", a: "It depends on how deep you already are in Microsoft, what your budget per user looks like, and how much custom work you need. We give you an honest comparison for your case, and when Zoho is clearly the better fit we say so even though it means a different project." },
      { q: "Can you take over a Dynamics setup another vendor built?", a: "Often yes. We review the existing configuration, flows and integrations first and report what is sound, what is undocumented and what should be rebuilt, so you can decide where to spend. If something genuinely needs a certified Microsoft partner, we tell you that instead of attempting it." },
      { q: "Do you resell Microsoft licences?", a: "No. You buy licences directly from Microsoft or through your own Microsoft reseller, and we work inside the tenant you already have. We will advise on which user types your scope needs so you are not paying for more than you use." }
    ]
  },
];
