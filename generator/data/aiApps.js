// AI and application-development service pages.
//
// ACCURACY RULES for anything added here:
// - The only partner/certification claim CSP4TECH may make is "Zoho Authorized
//   Partner".
// - No invented statistics, accuracy percentages, client names, testimonials,
//   case studies, awards or pricing.
// - AI copy must stay honest about limits: models get things wrong, Lebanese
//   Arabic speech and text are handled less well than English, grounding
//   reduces but does not remove wrong answers, and anything irreversible keeps
//   a person in the loop.
// - Where an external model provider is involved, say that data leaves the
//   account and that the choice is the client's — never promise a provider's
//   terms on their behalf.
//
// zohoApps slugs must match generator/data/products.js so the app chips link.
module.exports = [
  {
    slug: "ai-consulting",
    kicker: "AI Consulting",
    title: "AI Consulting: Where AI Helps, and Where It Does Not",
    metaTitle: "AI Consulting in Lebanon | CSP4TECH",
    metaDescription: "Honest AI advice for businesses in Lebanon and beyond. We work out which AI ideas are worth building, which are not, and why. Zoho Authorized Partner.",
    intro: [
      "Most AI ideas that land on a whiteboard do not survive contact with real data. We start by asking what you want to improve, then look at whether the data and the process behind it can support it. Often the answer is no, and we say so.",
      "When AI does fit, the work is usually narrow and unglamorous. Sorting incoming requests, drafting replies a human checks, pulling fields out of documents. We scope those properly and tell you what running them will cost you month to month before anything gets built."
    ],
    problems: [
      "A board or an investor is asking about your AI plan and nobody can name a problem it would solve.",
      "You have paid for an AI feature that nobody on the team opens.",
      "Your data lives in spreadsheets, WhatsApp threads and email, so there is nothing clean for a model to read.",
      "Vendors keep demoing AI that looks impressive and you cannot tell what it would change on a Monday morning."
    ],
    included: [
      { title: "Discovery sessions", text: "We sit with the people doing the work and map the steps they actually repeat. That is where candidates for automation show up." },
      { title: "Data readiness check", text: "We look at what you hold, where it lives and how clean it is. Many AI plans stall here, and it is better to know early." },
      { title: "Use case shortlist", text: "A written list of ideas, each with the value we expect and the effort behind it. Ideas we think are not worth building are listed too, with the reason." },
      { title: "Build or buy view", text: "Some needs are already covered by features inside Zoho or another tool you own. We say when buying beats building." },
      { title: "A plan you can act on", text: "A short roadmap with a first step small enough to test. No multi-year programme before anything is proven." }
    ],
    zohoApps: ["crm", "analytics", "creator", "catalyst"],
    faqs: [
      { q: "What if you decide AI is not the answer?", a: "Then that is the deliverable. You get a written explanation of what we looked at and what we would do instead, which is usually fixing the process or the data first." },
      { q: "Do we need to be on Zoho to work with you?", a: "No. We are a Zoho Authorized Partner and know that stack well, but advisory work is about your process. If your systems are elsewhere we will still look at them." },
      { q: "Will our data be sent to an outside AI provider?", a: "That depends on the design, and it is your decision rather than ours. We set out which parts would leave your systems, which would not, and what the alternatives are." },
      { q: "How long does an advisory engagement take?", a: "It depends on how many processes are in scope and how available your team is. We agree the scope and the number of sessions up front so discovery does not run open-ended." }
    ]
  },
  {
    slug: "ai-agent-development",
    kicker: "AI Agents",
    title: "AI Agents That Do Real Work Inside Your Systems",
    metaTitle: "AI Agent Development | CSP4TECH Zoho Partner",
    metaDescription: "We build AI agents that carry out multi-step tasks inside Zoho and connected systems, with limits, logs and human review on anything that matters.",
    intro: [
      "A salesperson copies the same quote into three places. Someone checks a supplier portal every morning and retypes what changed. These are multi-step jobs that nobody enjoys and everybody gets wrong occasionally.",
      "An AI agent can take that kind of job end to end: read the record, decide the next step from rules you set, call the right API, and write back what it did. We build them inside Zoho using Deluge, Creator and external model APIs, with a sign-off step wherever the outcome is hard to reverse."
    ],
    problems: [
      "Staff move the same information between CRM, Books and spreadsheets by hand every day.",
      "Routine decisions wait in someone's inbox because only one person knows the rule.",
      "Off-the-shelf automation stops working as soon as a step needs judgement about free text.",
      "Nobody can tell afterwards why an automated action happened or who approved it."
    ],
    included: [
      { title: "Scope and rules", text: "We map the task step by step and write down the rules the agent must follow. Anything that cannot be stated as a rule stays with a person." },
      { title: "Agent build in Deluge", text: "The agent runs as Deluge functions and Creator logic inside your own Zoho account, calling model APIs only for the steps that need language understanding." },
      { title: "System connections", text: "We connect the agent to the modules and third-party APIs it needs, with proper authentication and real error handling instead of silent failures." },
      { title: "Review and approval steps", text: "Actions that cost money, change a contract or contact a customer are queued for a person to approve. You decide which ones." },
      { title: "Logging and handover", text: "Every run is logged with its inputs and outputs so you can audit it. We train your team to read the log and to switch the agent off." }
    ],
    zohoApps: ["crm", "creator", "catalyst", "desk", "books"],
    faqs: [
      { q: "Will the agent run on its own without us watching it?", a: "No. We build agents that work inside a fixed set of steps and stop when something falls outside them. Anything irreversible waits for a person, and you can switch the agent off at any time." },
      { q: "Where does our data go when the agent uses an AI model?", a: "It depends on the model. Zia stays within Zoho. An external API means the text of that request leaves your account, so we agree per project which fields are sent, which provider is used, and that training on your content is excluded where the provider offers that." },
      { q: "How long does an agent take to build?", a: "It depends on how many systems it touches and how clear the rules are. We usually start with one narrow task, run it alongside the manual process, then widen the scope once you trust the output." },
      { q: "What happens when the agent gets something wrong?", a: "It will sometimes. The log shows what it read and what it did, so you can correct the record and we adjust the rules or the prompt. We design each agent so a wrong run is easy to spot and easy to undo." }
    ]
  },
  {
    slug: "ai-chatbot-development",
    kicker: "AI Chatbots",
    title: "Chatbots That Answer From Your Real Data",
    metaTitle: "AI Chatbot Development | Website and WhatsApp",
    metaDescription: "We build website and WhatsApp chatbots connected to your Zoho CRM and Desk data, in Arabic and English, with a clear handover to a human agent.",
    intro: [
      "Most website chat windows either reply with a brochure paragraph or ask the visitor to leave an email. Meanwhile the real answer, the order status or the open ticket, is sitting in your CRM.",
      "We build chatbots that read from your own data and reply on the channels your customers already use, website and WhatsApp included. The bot handles the narrow questions it was set up for and passes everything else to a person with the conversation attached."
    ],
    problems: [
      "Enquiries arrive on WhatsApp at night and nobody replies until the next morning.",
      "The bot repeats a scripted answer because it cannot see the customer record.",
      "Arabic messages get handled worse than English ones, or not at all.",
      "Chat conversations never reach the CRM, so the sales team starts from zero."
    ],
    included: [
      { title: "Conversation design", text: "We list the questions the bot should handle and the ones it must pass on. Short flows for the common cases, a clean exit for the rest." },
      { title: "Channel setup", text: "Deployment on your website through SalesIQ and on WhatsApp through an approved business number, with message templates where they are required." },
      { title: "Data connection", text: "The bot looks up records in CRM, Desk or Creator so it can answer about a real order, invoice or ticket instead of guessing." },
      { title: "Arabic and English", text: "Both languages, including right-to-left layout in the chat window, with the replies reviewed by a native speaker before launch." },
      { title: "Human handover", text: "A clear route to a live agent with the full transcript, plus rules for when the bot should stop trying and hand over." }
    ],
    zohoApps: ["salesiq", "crm", "desk", "creator"],
    faqs: [
      { q: "Can the bot handle Lebanese Arabic?", a: "Written Lebanese Arabic, including Arabizi, works reasonably well for short messages, and we test with your real enquiries before launch. Long or unusual phrasing still gets misread, which is why handover to a person is part of every build." },
      { q: "Will the bot invent answers?", a: "A model can produce a confident wrong answer. We reduce this by keeping the bot to a defined set of topics, grounding replies in your records and documents, and letting it say it does not know and pass the chat on." },
      { q: "Does the chat data leave our Zoho account?", a: "If we use an external model, the message text is sent to that provider to generate a reply. We agree in advance which provider, what is sent, and what is excluded, such as ID numbers or card details." },
      { q: "Can it create a lead or a ticket?", a: "Yes. The bot can write a lead into CRM or open a ticket in Desk with the transcript attached, so your team sees the whole conversation and not just a name." }
    ]
  },
  {
    slug: "ai-business-automation",
    kicker: "AI Automation",
    title: "AI for the Back-Office Work Nobody Wants to Do",
    metaTitle: "AI Business Automation | Zoho Back Office",
    metaDescription: "We apply AI to back-office work in Zoho: reading documents, routing approvals, drafting replies and flagging exceptions, with a person reviewing output.",
    intro: [
      "Back-office work piles up in small pieces. A supplier invoice that needs keying in, an approval chased over WhatsApp, a monthly report rebuilt by hand from three exports.",
      "AI earns its place on the narrow parts of that work: reading a document, sorting a request into the right queue, drafting text someone then edits. The rest is ordinary automation, and we build both so the process runs from start to finish."
    ],
    problems: [
      "Month-end slows down while someone retypes figures from PDFs into Books.",
      "Requests sit in a shared mailbox until a person decides who owns them.",
      "Rules live in people's heads, so the process breaks when they are on leave.",
      "Reports are stitched together by hand and are out of date by the time anyone reads them."
    ],
    included: [
      { title: "Process walk-through", text: "We sit with the people doing the work and write down each step, who touches it and where it stalls. Then we mark the steps where AI actually helps." },
      { title: "Workflow build in Zoho", text: "Blueprints, approvals and schedules configured in CRM, Books, Desk or Qntrl so the predictable steps run without anyone pushing them along." },
      { title: "AI steps where they fit", text: "Deluge functions call Zia or an external model for the parts that need reading or drafting, then write structured results back into fields." },
      { title: "Exception handling", text: "Low-confidence results and odd cases go to a named person in a review queue instead of being written straight into your records." },
      { title: "Reporting", text: "Dashboards in Analytics showing volumes, how long each step takes, and how often the AI output had to be corrected." }
    ],
    zohoApps: ["crm", "books", "qntrl", "analytics", "creator"],
    faqs: [
      { q: "Which parts of our process should not be automated?", a: "Anything where a wrong result is expensive and hard to reverse: final payment approval, credit decisions, contract wording. We automate the preparation and leave the decision with a person." },
      { q: "Do we have to change how we work?", a: "Some. Automation needs consistent inputs, so we usually tidy a few forms and field names first. We keep the changes to what the process needs rather than reorganising your business around the software." },
      { q: "How do you measure whether it worked?", a: "We agree what to track before the build, usually items handled, how long a step takes, and the correction rate. The figures come from your own data after go-live, not from a promise beforehand." },
      { q: "What about Lebanese compliance?", a: "We build around VAT, NSSF payroll contributions and MOF reporting, and around LBP and USD running side by side. AI can prepare and draft; a qualified person still reviews and signs anything that gets filed." }
    ]
  },
  {
    slug: "ai-document-processing",
    kicker: "Document AI",
    title: "Turn Invoices and Contracts Into Fields You Can Use",
    metaTitle: "AI Document Processing | Invoices and Contracts",
    metaDescription: "We set up document reading in Zoho so invoices, purchase orders, contracts and IDs land as structured fields, with a review queue for anything uncertain.",
    intro: [
      "A supplier sends a PDF invoice. Someone opens it, reads the numbers, types them into Books, files the PDF somewhere, and then opens the next one. Nothing in that needs a human brain except the checking.",
      "Document AI reads the file and fills the fields. We build it so each extracted value arrives with a confidence level, the original stays attached to the record, and anything the model is unsure about reaches a person before it is posted."
    ],
    problems: [
      "Supplier invoices arrive as PDFs, photos and WhatsApp screenshots in no fixed format.",
      "Data entry mistakes only surface at reconciliation, weeks later.",
      "Contracts sit in folders, so nobody can answer a question about renewal dates quickly.",
      "Arabic documents are retyped by hand because the existing tools only handle English."
    ],
    included: [
      { title: "Document types and fields", text: "We agree which documents are in scope and exactly which fields must come out of each one. Narrow scope first, more types later." },
      { title: "Intake channels", text: "A mailbox, a web form, a WhatsApp number or a Creator upload screen, so documents reach the process the way they already arrive." },
      { title: "Extraction build", text: "Deluge functions pass the file to Zoho's own extraction or an external model API, then map the result onto fields in Books, CRM or Creator." },
      { title: "Review queue", text: "Low-confidence fields are flagged for a person to confirm or fix, and the correction is kept so you can see where the model struggles." },
      { title: "Filing and audit trail", text: "The original document stays attached to the record with who reviewed it and when, which matters when a VAT or MOF question comes up later." }
    ],
    zohoApps: ["books", "creator", "crm", "inventory", "expense"],
    faqs: [
      { q: "How accurate is it?", a: "We will not quote a number before seeing your documents. Clean typed PDFs read well; faded scans, handwriting and photos taken at an angle read worse. We test on a sample of your real files and show you the results before you commit." },
      { q: "Is a person still involved?", a: "Yes, by design. Fields below the confidence threshold you set are checked by a person, and nothing is posted into your accounts without passing that step." },
      { q: "Where are the documents sent?", a: "If extraction runs inside Zoho, the file stays in your Zoho account. If we use an external model, the document contents go to that provider, so we agree per project which documents may leave and whether sensitive ones, such as ID copies, follow a different route." },
      { q: "Does it read Arabic documents?", a: "Printed Arabic works in many cases and we test it on your samples. Mixed Arabic and English layouts, stamps and handwriting are the weak points, so those usually stay partly manual." }
    ]
  },
  {
    slug: "ai-voice-agents",
    kicker: "Voice Agents",
    title: "Voice Agents, With Honest Limits On What They Do",
    metaTitle: "AI Voice Agents | Honest Limits and Handover",
    metaDescription: "We build AI voice agents for simple, repeatable calls, and we are direct about dialect, delay and the handover to a person when the call goes off script.",
    intro: [
      "Phone calls still carry a lot of Lebanese business. Appointment confirmations, delivery times, the same three questions about opening hours, all answered live by whoever picks up.",
      "A voice agent can take a slice of that, the short and repeatable calls, and log the result in your CRM. It is the hardest AI channel to get right, so we scope it narrowly, test it against recordings of your own calls, and build the handover to a person first."
    ],
    problems: [
      "Calls go unanswered outside working hours and the caller does not try again.",
      "Reception spends the morning repeating the same confirmations and directions.",
      "Nothing said on a call reaches the CRM unless someone types a note afterwards.",
      "Callers switch between Lebanese dialect, standard Arabic and English in one sentence."
    ],
    included: [
      { title: "Call scope", text: "We pick one or two call types with a clear beginning and end, such as confirming an appointment or taking a callback request. Everything else routes to a person." },
      { title: "Telephony and routing", text: "Connection to your telephony provider, with rules for working hours, overflow, and which numbers the agent is allowed to answer." },
      { title: "Language testing", text: "We test with Lebanese Arabic, standard Arabic and English on recordings of your real calls, and report plainly where the agent fails." },
      { title: "Handover path", text: "A fast route to a human when the caller asks for one, repeats themselves, sounds frustrated, or says something outside the script." },
      { title: "CRM logging", text: "Each call writes a record with a transcript and a short summary into CRM or Desk, so the next person has context." }
    ],
    zohoApps: ["crm", "desk", "bookings", "creator"],
    faqs: [
      { q: "How well does it handle Lebanese Arabic?", a: "Less well than English. Speech recognition for Lebanese dialect, code-switching and background noise is still weak, and a misheard name or number costs you a customer. We test before you commit, and we will tell you if a voice agent is the wrong tool for your calls." },
      { q: "Will the caller notice a delay?", a: "Usually yes. Listening, working out a reply and speaking it back adds a pause of around a second or more, which feels longer on the phone. We keep prompts short and accept that natural back-and-forth is not realistic yet." },
      { q: "Does the caller know they are talking to a machine?", a: "The agent says so at the start. We do not build agents that pretend to be a named employee, and we always add a clear way to reach a person." },
      { q: "Are calls recorded, and where do they go?", a: "Audio and transcripts go to the speech and model providers used in the build. We agree which providers and what retention applies before launch, and telling callers that calls are recorded, with consent where it is needed, is part of the setup." }
    ]
  },
  {
    slug: "ai-knowledge-base-development",
    kicker: "AI Knowledge Base",
    title: "Answers Drawn From Your Own Documents",
    metaTitle: "AI Knowledge Base and RAG Development",
    metaDescription: "We build search and answer tools grounded in your own documents, so staff and customers get replies with sources, and fewer confident wrong answers.",
    intro: [
      "The answer is in a policy document, a price list and an email thread from last year. New staff ask a colleague instead of looking, and customers ask your support team the same question every week.",
      "A grounded knowledge base fixes the looking-up part. The system searches your documents for the passages that relate to the question, then the model writes an answer using only those passages and shows which file it came from."
    ],
    problems: [
      "Procedures live in scattered files, inboxes and someone's head.",
      "Support answers the same handful of questions over and over.",
      "New staff take months to learn what is already written down.",
      "A general chatbot answers from the internet instead of from your own policies."
    ],
    included: [
      { title: "Document collection", text: "We gather the files that should be answerable, agree which versions are current, and leave out anything out of date or confidential." },
      { title: "Retrieval setup", text: "Documents are split and indexed so a question pulls back the few passages that actually relate to it, before any text is generated." },
      { title: "Grounded answers", text: "The model answers from the retrieved passages and cites the source document, so a reader can check it rather than simply trust it." },
      { title: "Access and permissions", text: "Internal material stays internal. We set who can ask what, and keep a separate index for customer-facing answers." },
      { title: "Delivery in Zoho", text: "Available where people already work: a Desk knowledge base, a SalesIQ assistant, a Creator screen or a button inside CRM." }
    ],
    zohoApps: ["desk", "salesiq", "creator", "crm", "notebook"],
    faqs: [
      { q: "Does grounding stop wrong answers?", a: "It reduces them, it does not remove them. If retrieval misses the right passage, or two documents contradict each other, the answer can still be wrong. Citations are there so a person can check, and we keep the system out of decisions where a wrong answer is costly." },
      { q: "What happens when a document changes?", a: "The index has to be refreshed, which we automate on a schedule or trigger from the source folder. Someone on your side still needs to own which version is current, because the system cannot judge that." },
      { q: "Do our documents get used to train an AI model?", a: "They should not. Where an external provider is involved we select an option that excludes your content from training, and we write into the project what is sent and what is retained. We state what the provider commits to rather than guaranteeing it ourselves." },
      { q: "Can we see what people are asking?", a: "Yes. Questions, and whether an answer was found, are logged. That shows the gaps in your documentation, and it is usually the most useful output in the first month." }
    ]
  },
  {
    slug: "ai-crm-integration",
    kicker: "AI in CRM",
    title: "AI Inside Your CRM, Not Beside It",
    metaTitle: "AI CRM Integration | Zia and Custom AI",
    metaDescription: "We put AI inside Zoho CRM: record summaries, lead prioritisation, suggested next steps and research buttons, all editable by the person who owns the deal.",
    intro: [
      "Your CRM knows more than your team can read. A long list of open leads, years of notes on key accounts, and a rep with ten minutes before the call.",
      "AI is useful here for reading and summarising, not for deciding. We build summaries, priority scores, suggested next steps and research buttons into Zoho CRM, and we keep every output editable so the person who owns the relationship stays in charge."
    ],
    problems: [
      "Reps open a long account history minutes before a meeting and skim it.",
      "Follow-up order is decided by who shouted loudest, not by what the data says.",
      "Nobody writes call notes, so the record is thin when the deal is handed over.",
      "Researching an inbound company by hand takes twenty minutes that nobody has."
    ],
    included: [
      { title: "Zia configuration", text: "We first set up what Zoho's own AI already does in your edition, including prediction, assignment and anomaly alerts, before building anything custom." },
      { title: "Record summaries", text: "A button or field that summarises the notes, emails and open items on a lead, deal or account, with the source records still one click away." },
      { title: "Lead prioritisation", text: "Scoring built from your closed-won history and the fields your team actually fills in, shown as a reason rather than a bare number." },
      { title: "Research and enrichment", text: "A button that gathers public information about an inbound company into the record for a rep to read and correct. We have built this in our own CRM." },
      { title: "Next-step suggestions", text: "Suggested follow-ups based on stage, age and last interaction, written into a task the rep can accept, edit or dismiss." }
    ],
    zohoApps: ["crm", "bigin", "crmplus", "analytics", "desk"],
    faqs: [
      { q: "Can we trust an AI lead score?", a: "Treat it as a sorting aid, not a verdict. A score built on a few hundred records reflects your past patterns, including the bad habits in them. We show the reasons behind a score and expect reps to override it." },
      { q: "Does customer data leave the CRM?", a: "Zia runs within Zoho. Custom features that call an external model send only the specific text they need, and we agree those fields in advance. Contact details and commercial figures can be excluded or masked if you prefer." },
      { q: "Will this work with our heavily customised CRM?", a: "That is the normal case. We work with your existing modules, layouts and Deluge, and we check that what the AI reads matches how your team actually uses the fields." },
      { q: "What if a summary is wrong?", a: "It happens, usually when notes are thin or contradictory. Summaries sit next to the source records and never replace them, and we label them clearly as generated so nobody repeats one back to a customer as fact." }
    ]
  },
  {
    slug: "ai-sales-automation",
    kicker: "AI for Sales",
    title: "Follow-Ups, Quotes and Pipeline Hygiene",
    metaTitle: "AI Sales Automation | Zoho CRM and Quotes",
    metaDescription: "AI and workflow across your sales process in Zoho: follow-ups that actually go out, first-draft quotes a rep edits, and a pipeline that reflects reality.",
    intro: [
      "Deals rarely die from a bad pitch. They die from a follow-up nobody sent, a quote that took days to produce, and a pipeline report that stopped being true weeks ago.",
      "Most of that is plain automation. AI adds the parts that need words: drafting the follow-up, turning a messy requirement into a first-draft quote, flagging the deal that has gone quiet. A rep reads and sends, so nothing reaches a customer unseen."
    ],
    problems: [
      "Follow-ups depend on whether a rep remembers, so many never happen.",
      "Quotes wait on the one person who knows the pricing and the template.",
      "The forecast is wrong because stages and close dates are never updated.",
      "Deals go quiet for weeks and nobody notices until the quarter ends."
    ],
    included: [
      { title: "Pipeline and stage rules", text: "We clean up stages, close dates and required fields first. AI on a messy pipeline just produces confident nonsense faster." },
      { title: "Follow-up sequences", text: "Scheduled, rule-based follow-ups in CRM with AI-drafted text the rep can edit, in Arabic or English, over email or WhatsApp." },
      { title: "Quote drafting", text: "A draft quote assembled from your price list and the requirement on the record, ready for a rep to adjust and send. Pricing rules stay yours, not the model's." },
      { title: "Stalled deal alerts", text: "Rules and signals that flag deals with no real activity, with the reason shown so a manager can act instead of guessing." },
      { title: "Reporting", text: "Dashboards showing pipeline movement, follow-up completion and where deals stall, built in Analytics on your own data." }
    ],
    zohoApps: ["crm", "bigin", "books", "analytics", "marketingplus"],
    faqs: [
      { q: "Will AI send emails to our customers by itself?", a: "Not unless you decide that for a specific low-risk message, such as a meeting confirmation. By default a rep reviews and sends. Automated outbound in your name is easy to build and expensive to get wrong." },
      { q: "Can it write in Arabic?", a: "Yes, and the quality is lower than in English, particularly for formal commercial wording. We keep reviewed templates for the common messages and let the model fill in the specifics." },
      { q: "Will the quote pricing be correct?", a: "The numbers come from your price list and rules in Zoho, not from the model. The model drafts wording and structure. Discounts, approvals and dual LBP and USD pricing stay in configured logic a person can audit." },
      { q: "Do reps resist this?", a: "Some do, when it feels like monitoring. We build it so the first thing a rep gets is a draft that saves them typing, roll out with one team, and leave every suggestion dismissable." }
    ]
  },
  {
    slug: "ai-customer-service-automation",
    kicker: "AI for Support",
    title: "Faster Support Without Hiring More Agents",
    metaTitle: "AI Customer Service Automation | Zoho Desk",
    metaDescription: "We set up ticket triage, suggested replies and self-service answers in Zoho Desk and WhatsApp, so your agents spend time on the tickets that need them.",
    intro: [
      "Support teams lose much of the day to sorting. Reading a ticket to work out what it is about, deciding who should own it, and typing an answer that already exists in a closed ticket somewhere.",
      "AI handles the sorting and the first draft. Tickets get categorised and routed, agents get a suggested reply drawn from your own past answers, and customers get self-service answers for the questions that do not need a person at all."
    ],
    problems: [
      "Tickets arrive with no category and sit until someone reads and assigns them.",
      "Agents retype the same explanation several times a day.",
      "Customers ask on WhatsApp, email and the website, and the threads never meet.",
      "Repeat questions never make it into a help article, so they keep coming back."
    ],
    included: [
      { title: "Triage and routing", text: "Incoming tickets are classified by topic, language and urgency, then assigned by your rules. Unclear ones go to a queue rather than to the wrong team." },
      { title: "Suggested replies", text: "A draft answer built from your knowledge base and resolved tickets, shown to the agent to edit. The agent sends it, not the model." },
      { title: "Self-service answers", text: "A help centre and chat assistant that answer from your published articles with a link to the source, and open a ticket when they cannot." },
      { title: "WhatsApp and channel setup", text: "Support conversations from WhatsApp, email and your website landing in one Desk queue with the customer history attached." },
      { title: "Quality reporting", text: "Reports on classification accuracy, edits made to suggested replies, self-service use and response times, so you can see what is working." }
    ],
    zohoApps: ["desk", "salesiq", "serviceplus", "analytics", "crm"],
    faqs: [
      { q: "Can a bot close tickets without an agent?", a: "For simple, verifiable requests such as an order status, yes. For anything involving money, a complaint or an exception, no. We set that boundary with you, and the default is to hand over." },
      { q: "What if a suggested reply is wrong or rude?", a: "That is why an agent reads it first. Suggestions are drafts in the agent's window, never sent automatically, and we review the tone of the drafts in both Arabic and English during testing." },
      { q: "Does ticket content go to an external AI provider?", a: "Zia and Desk features stay within Zoho. If a build uses an outside model, the ticket text sent to it is agreed in the project, sensitive fields can be stripped, and we use options that exclude your data from training." },
      { q: "Will customers mind talking to a bot?", a: "They mind being stuck with one. A visible path to a person, no pretending to be human, and an honest admission when the bot cannot help are what keep it acceptable." }
    ]
  },
  {
    slug: "ai-app-development",
    kicker: "AI App Development",
    title: "AI Features Built Into Software You Already Use",
    metaTitle: "AI App Development | CSP4TECH Beirut",
    metaDescription: "We build business applications with AI inside them, on Zoho Creator, Catalyst or a custom stack. Arabic and English, built and supported from Beirut.",
    intro: [
      "An AI feature is only useful when it sits inside the screen where the work happens. We build applications where the model is one part of the system, next to the records, approvals and reports that make it usable.",
      "That means the boring parts matter: what happens when the model is wrong, who reviews it, and what gets logged. We design for that from the start rather than bolting a chat box onto a finished app."
    ],
    problems: [
      "Your team copies text into a chatbot in another browser tab, then pastes the result back by hand.",
      "An AI tool produces output nobody can trace, so no one trusts it enough to act on.",
      "Documents arrive as PDFs and phone photos, and someone retypes the figures into your system.",
      "Requests come in over WhatsApp in Arabic and English, and sorting them takes a person all morning."
    ],
    included: [
      { title: "Scoping the AI part", text: "We pin down exactly what the model is asked to do and how its answers get checked. Narrow tasks work; vague ones do not." },
      { title: "The application around it", text: "Forms, records, roles, approvals and reports, built on Zoho Creator, Catalyst or a custom stack depending on where your data sits." },
      { title: "Human review built in", text: "Output goes to a person for approval where the stakes need it. Every suggestion is stored, so you can see what the model said and what was done with it." },
      { title: "Integrations", text: "We connect the app to Zoho, your accounting system, WhatsApp or whatever else holds the data, over APIs and webhooks in both directions." },
      { title: "Arabic and English interfaces", text: "Full right-to-left layouts, not a translated label here and there. Both languages tested on phone and desktop." }
    ],
    zohoApps: ["creator", "catalyst", "crm", "desk", "analytics"],
    faqs: [
      { q: "Which AI models do you use?", a: "We pick per project, based on what the task needs, what your data policy allows and what it costs to run. We explain the trade-offs rather than defaulting to one provider." },
      { q: "Can AI features be added to an app we already have?", a: "Often yes, if the app has an API or we can reach its data. We review it first and tell you when retrofitting would cost more than it is worth." },
      { q: "What happens when the AI gets something wrong?", a: "It will, sometimes. We design a fallback path, keep a person in the loop where the risk justifies it, and log enough detail that you can audit a bad answer." },
      { q: "Is Zoho Creator enough, or do we need Catalyst?", a: "Creator fits most internal business apps and comes with the Zoho ecosystem already attached. Catalyst suits heavier custom logic, external users and higher volumes. We advise after seeing the requirement." }
    ]
  },
  {
    slug: "custom-software-development",
    kicker: "Custom Software",
    title: "Custom Software, Built Only When It Is the Right Call",
    metaTitle: "Custom Software Development | CSP4TECH",
    metaDescription: "Bespoke business software for companies in Lebanon and abroad. We build what off-the-shelf tools cannot do, and tell you when to buy instead of build.",
    intro: [
      "Custom software earns its keep when your process is the thing that makes you money and no product on the market fits it. That is a real situation, and we build for it.",
      "It is also expensive to own. Someone has to maintain it, document it and keep it running after the build team leaves. We say that out loud before you commit, and we check first whether a configured off-the-shelf tool gets you most of the way."
    ],
    problems: [
      "Your process runs on a spreadsheet that one person understands and nobody dares change.",
      "You pay for three systems and still rekey the same order into each one.",
      "The product you bought covers most of the job, and the rest is done by hand every day.",
      "A rule that is specific to how your industry works cannot be expressed in any tool you have tried."
    ],
    included: [
      { title: "Requirements before code", text: "We write down the process as it runs today, including the exceptions people handle quietly. The exceptions are usually where the cost hides." },
      { title: "Build or configure advice", text: "If Zoho or another product covers the requirement through configuration, we say so. A smaller custom scope is a better outcome for you." },
      { title: "The build", text: "Zoho Creator and Deluge for business apps inside the Zoho ecosystem, Catalyst or a web stack when the requirement is heavier." },
      { title: "Data migration", text: "Getting your existing records in, cleaned and matched, with a dry run you review before the real import." },
      { title: "Handover and support", text: "Documentation, admin training and an agreed support arrangement. You should be able to change small things without calling us." }
    ],
    zohoApps: ["creator", "catalyst", "crm", "books", "analytics"],
    faqs: [
      { q: "When is custom the wrong choice?", a: "When your requirement is a standard one described in unusual words. Sales pipelines, invoicing, leave requests and ticketing are solved problems, and a configured product beats a build on both cost and risk." },
      { q: "Who owns the code?", a: "You do, and we agree that in writing before we start. You also get the repository and the deployment details, so another firm could pick it up." },
      { q: "What about maintenance after go-live?", a: "Custom software needs an owner. We offer a support arrangement, and if you would rather handle it internally we hand over documentation and train whoever will take it." },
      { q: "Can you work with a system another developer built?", a: "Usually. We review what exists first and give you an honest read on whether extending it or replacing it is the better route." }
    ]
  },
  {
    slug: "custom-software-vs-off-the-shelf-software",
    kicker: "Decision Guide",
    title: "Custom Software or Off-the-Shelf: How to Decide",
    metaTitle: "Custom vs Off-the-Shelf Software",
    metaDescription: "A balanced guide to choosing between custom software and off-the-shelf products: the four factors that decide it, and why buying usually wins.",
    intro: [
      "This page is not a pitch. We build custom software, and we also spend a lot of time talking clients out of it, because for most requirements a configured product is the better deal.",
      "The decision comes down to four things: how unusual your process really is, who will own the software in three years, how much it has to connect to, and what happens if the build goes wrong. Work through those honestly and the answer is normally obvious."
    ],
    problems: [
      "How unusual the process is: if your workflow is a normal one described in your own vocabulary, a product already does it.",
      "Who owns it afterwards: custom software needs a maintainer, a budget line and documentation for years after launch.",
      "How much it has to connect to: heavy integration needs can tip the balance either way, depending on which systems publish decent APIs.",
      "What being wrong costs: a product you dislike can be swapped for another, while a failed build leaves you with nothing but the invoice."
    ],
    included: [
      { title: "Common problems: buy", text: "Accounting, CRM, payroll, helpdesk, leave requests. Thousands of companies have the same need, so the product is mature and the edge cases are already handled." },
      { title: "Process as advantage", text: "If how you quote, price or route work is the reason customers choose you, encoding it in software can be worth both the cost and the ownership burden." },
      { title: "Configuration first", text: "Most products stretch much further than a first look suggests. Custom fields, workflow rules, scripting and an integration or two cover a surprising amount of ground." },
      { title: "Total cost of ownership", text: "Compare a licence fee against build plus hosting plus maintenance plus the person who has to understand it. That second list keeps running long after the project ends." },
      { title: "Risk and exit", text: "Ask what happens if you want out. Leaving a product means export and migration; leaving a custom system means someone else has to read your code." }
    ],
    zohoApps: ["crm", "books", "people", "desk", "creator"],
    faqs: [
      { q: "Is custom software always more expensive?", a: "Not at the start, and small custom tools can be cheap. Over several years a licence fee usually costs less than owning and maintaining code, because the vendor spreads development across all of its customers. For a genuinely unusual process the comparison can go the other way." },
      { q: "We tried a product and it did not fit. Does that mean we need custom?", a: "Not necessarily. Often the product was fine and the implementation was not, or a second product fits better. A failed implementation is cheaper to redo than a failed build, so it is worth looking again before committing." },
      { q: "Can we start off-the-shelf and go custom later?", a: "Yes, and it is a sensible route. Run the product, find out precisely where it blocks you, then build only that part and integrate it. You get real requirements instead of guesses. The risk is that two systems now need keeping in step." },
      { q: "When would you tell us to buy rather than hire you to build?", a: "Often. If a product covers your requirement we will say so and offer to implement and configure it instead, which is a smaller piece of work than a build and a better outcome for you." }
    ]
  },
  {
    slug: "web-app-development",
    kicker: "Web Apps",
    title: "Web Applications and Internal Portals",
    metaTitle: "Web App Development | CSP4TECH",
    metaDescription: "Web applications, customer portals and internal tools for teams in Lebanon and abroad. Built around your process, connected to Zoho and your other systems.",
    intro: [
      "A web app is the right answer when several people need the same up-to-date view and nobody wants to install anything. Dashboards, customer portals, request systems, approval queues, internal admin tools.",
      "Most of these sit on top of data you already hold. We connect to it rather than creating a second copy, so there is one version of a customer, an order or a job."
    ],
    problems: [
      "Customers email to ask where their order is and someone has to go and look it up.",
      "Two departments keep separate spreadsheets of the same list and they no longer match.",
      "Approvals happen over email, so nobody can say who signed off or when.",
      "Your reporting is a monthly export that is out of date by the time anyone reads it."
    ],
    included: [
      { title: "Portals for customers or partners", text: "A login where they see their own orders, invoices, tickets or documents, pulled live from your systems." },
      { title: "Internal tools", text: "Screens built for one job and used daily, showing only the fields that job needs. Faster than making people learn a general-purpose system." },
      { title: "Integrations and APIs", text: "We connect Zoho apps, accounting systems, payment providers and third-party services, and build APIs where something needs to talk to you." },
      { title: "Roles and permissions", text: "Who sees what, who can approve what, and a record of who changed what. Set up before launch, not after an incident." },
      { title: "Hosting and handover", text: "Deployment, backups and monitoring arranged with you, plus documentation so your team or another firm can take it on." }
    ],
    zohoApps: ["creator", "catalyst", "crm", "desk", "analytics"],
    faqs: [
      { q: "Should this be a Zoho Creator app or a custom web app?", a: "If it lives mostly inside the Zoho ecosystem and the users are your own staff, Creator is usually faster and cheaper to own. Public-facing portals and unusual interfaces tend to need a custom build." },
      { q: "Can it use the data in our existing systems?", a: "That is the normal case. We read and write through APIs where they exist, and where they do not we look at database access or scheduled syncs and explain the limits of each." },
      { q: "Who hosts it?", a: "Your choice. We can deploy to your own cloud account, to Zoho Catalyst, or to a provider we manage. We set out what each means for cost, control and who holds the keys." },
      { q: "What if our requirements change mid-build?", a: "They usually do. We work in stages so you see something working early, and changes are quoted and scheduled as they come up instead of being argued about at the end." }
    ]
  },
  {
    slug: "mobile-app-development",
    kicker: "Mobile Apps",
    title: "Mobile Apps That Keep Working When the Signal Drops",
    metaTitle: "Mobile App Development | CSP4TECH",
    metaDescription: "iOS and Android apps for field teams and customers, including offline-capable apps that sync when the connection returns. Arabic and English supported.",
    intro: [
      "Connectivity in Lebanon is not something an app can assume. A technician in a basement or a driver between towns still needs to record what happened, so we build the app to work from data on the device and sync later.",
      "We build for iOS and Android, for staff in the field and for customers. Where the app feeds a Zoho system, the two are connected properly rather than through a nightly export."
    ],
    problems: [
      "Your field team fills paper forms and someone types them into a system two days later.",
      "An app your staff use stops dead the moment the connection drops, so they stop using it.",
      "You cannot tell where a job stands until the technician calls in.",
      "Photos, signatures and meter readings from site arrive over WhatsApp and get lost in the thread."
    ],
    included: [
      { title: "Offline-first design", text: "The app stores records on the device and syncs when it can. Conflicts, where two people changed the same thing, are handled rather than ignored." },
      { title: "iOS and Android", text: "One codebase where that suits the project, native where the requirement needs it. We explain which we are recommending and why." },
      { title: "Field tooling", text: "Photos, signatures, barcode scans, location stamps and job checklists, so what happened on site is captured once." },
      { title: "Zoho and backend integration", text: "Jobs flow out of your CRM or Creator app and completed work flows back, over APIs instead of manual re-entry." },
      { title: "Store release and support", text: "We handle App Store and Play submission and the account setup around it, then updates after launch." }
    ],
    zohoApps: ["creator", "crm", "catalyst", "desk"],
    faqs: [
      { q: "Do we need a mobile app, or will a mobile web page do?", a: "If you need the camera, offline storage or push notifications, you need an app. If not, a mobile-friendly web page is cheaper to build and to keep alive, and we will tell you so." },
      { q: "Can Zoho Creator cover this instead of a built app?", a: "Sometimes. Creator apps run on phones and handle light offline use, which is enough for many internal teams. Heavier offline work and customer-facing apps usually need a built app." },
      { q: "How does offline sync actually work?", a: "Records are written to the device first and queued. When the connection returns the queue uploads, and anything that clashes with a server change is flagged for a person to settle rather than silently overwritten." },
      { q: "Will the app work in Arabic?", a: "Yes, including full right-to-left layout. We test both languages on real devices, because mirrored layouts break in ways a translation pass will not catch." }
    ]
  },
  {
    slug: "ecommerce-website",
    kicker: "E-commerce",
    title: "Online Stores Built for Lebanese Payment Realities",
    metaTitle: "E-commerce Website Development | CSP4TECH",
    metaDescription: "Online stores on Zoho Commerce or Shopify, built for how buying works in Lebanon: dual pricing, WhatsApp orders and payment options that need checking.",
    intro: [
      "A store in Lebanon is not just a catalogue and a card form. Prices may need to show in LBP and USD, many orders still start as a WhatsApp message, and delivery is often handled by a local courier with its own way of working.",
      "We build on Zoho Commerce or Shopify, or a custom front end where the catalogue is unusual. Which one depends on your products, your payment route and what the rest of your systems look like."
    ],
    problems: [
      "Orders arrive over WhatsApp and Instagram, get written into a notebook, and stock becomes a guess.",
      "The website says an item is available after it has already sold in the shop.",
      "You want to show prices in two currencies and the rate keeps moving.",
      "Customers abandon checkout because the only way to pay is a conversation."
    ],
    included: [
      { title: "Platform choice first", text: "Zoho Commerce, Shopify or a custom build. We go through the trade-offs with your catalogue and your payment route in front of us, rather than picking a favourite." },
      { title: "Store build", text: "Catalogue structure, product pages, categories, search and a checkout that works on a phone, which is where most of your traffic will be." },
      { title: "Payments handled honestly", text: "What a Lebanese merchant can accept depends on your bank, your legal entity and the processor, and it changes. We check what is open to you now and build the checkout around that, cash on delivery included." },
      { title: "Stock and accounting links", text: "The store connected to Zoho Inventory and Books, so a sale moves stock and lands in the accounts without anyone retyping it." },
      { title: "WhatsApp and Arabic", text: "Order enquiries routed through WhatsApp where your customers already are, and a full right-to-left Arabic store if you sell in both languages." }
    ],
    zohoApps: ["commerce", "inventory", "books", "checkout", "crm"],
    faqs: [
      { q: "Which payment gateways can we use in Lebanon?", a: "That has to be checked case by case. Availability depends on your bank, your legal entity and which processors are onboarding at the time, so we verify before promising anything and design the checkout around what you can actually get." },
      { q: "Zoho Commerce or Shopify?", a: "Shopify has a larger app ecosystem and more themes. Zoho Commerce is the stronger choice when you already run Zoho Books and Inventory, because the link is native. We recommend based on your catalogue and your existing stack." },
      { q: "Can we keep selling over WhatsApp?", a: "Yes, and most Lebanese stores should. We treat WhatsApp as a real channel: enquiries come in there, but the order gets recorded in the same place as web orders so stock and reporting stay correct." },
      { q: "Can you migrate an existing store?", a: "Yes. Products, customers, orders and URLs each need a plan, especially the redirects, or you lose the search rankings you already have." }
    ]
  },
  {
    slug: "it-staff-augmentation",
    kicker: "Staff Augmentation",
    title: "Developers and Consultants Inside Your Team",
    metaTitle: "IT Staff Augmentation | CSP4TECH",
    metaDescription: "Add Zoho developers, Deluge scripters or consultants to your own team, working your hours and your process. Remote from Beirut, in Arabic and English.",
    intro: [
      "Sometimes you do not need a project, you need another pair of hands that already knows the stack. We place developers and consultants into your team, reporting to your lead and working in your tools.",
      "This is a plain arrangement. You direct the work, we handle employment, cover and replacement, and either side can end it with notice that we agree in writing before anyone starts."
    ],
    problems: [
      "A project is waiting on one skill your team does not have, and hiring for it would take longer than the project allows.",
      "Your Zoho admin left and nobody else knows what the workflows do.",
      "You need Deluge or API work for a few weeks, not a permanent role.",
      "Internal developers are stuck on maintenance and the new build never starts."
    ],
    included: [
      { title: "How it works", text: "You describe the skills and the time you need. We propose named people with their background, you interview them, and you decide." },
      { title: "Inside your process", text: "They join your stand-ups, your board and your repository. Your lead sets the priorities, not us." },
      { title: "Skills we place", text: "Zoho implementation and administration, Deluge, Creator, Catalyst, API and integration work, web and mobile development. We have been building on Zoho since 2018." },
      { title: "Cover and continuity", text: "If someone is unavailable we arrange cover, and handover notes are kept so a replacement does not start from zero." },
      { title: "Clear commercial terms", text: "Agreed rate, hours, notice period, confidentiality and code ownership, all written down before the first day." }
    ],
    zohoApps: [],
    faqs: [
      { q: "Do they work for us or for you?", a: "They remain our employees or contractors, so employment, tax and payroll stay with us. Day to day they take direction from your lead like any other team member." },
      { q: "Full time or part time?", a: "Both are possible. Part-time arrangements work well for an admin or a specialist you need regularly but not daily, and we agree the pattern in advance." },
      { q: "Can they work in our time zone?", a: "Beirut hours overlap with Europe, the Gulf and most of Africa, and we can shift start times. For teams in the Americas the overlap is partial, and we will be straight about which hours are shared." },
      { q: "What if the person is not a good fit?", a: "Tell us early and we replace them. That is part of the arrangement and it is written into the terms, not left to goodwill." }
    ]
  },
];
