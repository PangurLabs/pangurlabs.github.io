---
# The words on matterseal.com's home page. Change the words here; the layout is in src/pages/index.astro.
# Every claim is checked against the feature list and the legal pages (docs/claims.md) before it is published.
title: "MatterSeal: matter management for law firms on Google Workspace"
description: "MatterSeal sorts a law firm's Google Workspace mail, calendar and files into matters, reads court notices and proposes deadlines for a person to confirm."

hero:
  label: "Matter management for law firms on Google Workspace"
  headline: "Your practice is already in Google Workspace."
  headlineAccent: "MatterSeal sorts it into matters."
  lead: "Every email, meeting, document and court deadline on one page per matter. Your firm's mail, calendar and files stay in your Google account, exactly as they are."
  secondButton: "See how it works"
  audience: "For law firms, and lawyers practicing on their own, who run their practice on Google Workspace. MatterSeal runs on Mac and in a web browser."
  screenAlt: "MatterSeal's Today page for a demo firm: two hearings today, an overdue deadline, and a list of court notices and reminders that arrived while the lawyer was in court."

steps:
  label: "How it works"
  items:
    - title: "Email arrives"
      text: "In your firm's Google Workspace mail, as it does today."
    - title: "Filed to the matter"
      text: "MatterSeal files it and adds a Gmail label. What it can't place goes to a person's queue."
    - title: "Court notice read"
      text: "A notice from the court is matched to its matter by case number."
    - title: "Deadline proposed"
      text: "The dates that follow from the court's rules are worked out and marked proposed."
    - title: "You confirm"
      text: "Nothing is a deadline until a person at your firm confirms it."

problem:
  label: "The problem"
  headline: "The legal work isn't the hard part."
  headlineAccent: "Keeping track of it is."
  cards:
    - title: "It all lives in the inbox"
      text: "A case's emails, hearings, filings and documents are spread across mail, calendar and Drive, and only the person who read them knows where they are."
    - title: "Deadlines hide in court notices"
      text: "Each notice has to be read, matched to its case and counted by the court's rules. A missed date can cost a client their case."
    - title: "Time is rebuilt at month end"
      text: "Hours get pieced together from sent mail and calendars when it is time to send bills."
  closing: "Most practice software means moving everything into a separate system. MatterSeal works on the Google Workspace your firm already uses."

inside:
  label: "Inside MatterSeal"
  headline: "MatterSeal does the sorting."
  headlineAccent: "You keep the judgment."
  cards:
    - title: "Today"
      text: "Hearings, deadlines and what is waiting for each person, on one page."
      image: today
      alt: "The Today page: a summary of the day, hearings in court today, calendar events, and items that arrived while the lawyer was in court."
    - title: "One page for each matter"
      text: "Stage, parties, email, drafts, calendar events, Drive documents and deadlines. Reply and write new email from the matter."
      image: matter
      alt: "The Mitchell eviction matter: its court caption, stage from intake to judgment, items needing attention, email and parties."
    - title: "Court filings"
      text: "Each filing matched to its matter. The dates it proposes wait for a person to confirm them."
      image: filing
      alt: "A federal court filing matched to the Mitchell eviction matter by case number, with a proposed response date and a Confirm deadline button."
    - title: "Ask AI, with its sources"
      text: "Pick a document, say what you want and see the cost first. The answer points to the passages it relies on."
      image: answer
      alt: "Ask AI about a notice to vacate: the document on the left with two passages highlighted, and on the right a summary marked as written by AI for review, numbered to those passages."
  more:
    - title: "Time and bills"
      text: "Timers, time entries and expenses on each matter; draft bills a lawyer reads line by line, sends as a PDF and marks paid."
    - title: "Conflict checks"
      text: "Across clients, former and prospective clients, opposing parties and their related companies. MatterSeal shows what it found and why; a lawyer decides."
    - title: "A secure client portal"
      text: "Clients message the firm and share documents."
    - title: "Ransomware protection"
      text: "Encrypted backups that can be locked so no one can change or delete them, and an alarm when many documents change at once."
    - title: "Who can see what"
      text: "Control over who can see each matter, a log of who did what, and a warning when someone outside a matter can open its documents."
    - title: "Several mailboxes"
      text: "A shared office address and each lawyer's own mail can all file to matters."

example:
  label: "A real court notice, with demo data"
  headline: "What MatterSeal did with one court notice"
  intro: "This is MatterSeal's demo firm, with made-up people and cases. A notice of electronic filing arrived from the federal court in Seattle in Mitchell v. Harbor View Properties LLC."
  steps:
    - title: "Matched"
      text: "MatterSeal read the case number, 2:26-cv-00417-JLR, and filed the notice to the Mitchell eviction matter. It went to Dana Reyes's queue, with a date to handle it by."
    - title: "Read"
      text: "Document 12 set a motion to dismiss for hearing and gave the plaintiff a time to respond. MatterSeal listed the case, court, hearing and judge from the notice."
    - title: "Proposed"
      text: "It found the response date, quoted the line it came from (\"Plaintiff shall respond within the time allowed by LCR 7(d)(3)\") and showed the rule and the count. The date is marked Proposed."
    - title: "Citations listed"
      text: "MatterSeal listed the citations for a lawyer to check, each with links to look it up, and flagged one that the AI summary named but the filing doesn't. Until a lawyer opens a citation and ticks it, no one has confirmed it."
    - title: "You confirm"
      text: "The date becomes a deadline only when a person presses Confirm deadline. A second person can check it again: the hearing beside it shows Verified (2 checks)."
  screenAlt: "The filing's list of seven citations to check, each with lookup links and an \"I opened and read it\" box; one is marked \"named in this analysis, not in the filing\"."
  note: "The summary of the filing was written by AI because AI is on for this matter. On a matter where AI is off, MatterSeal still matches the notice, proposes the date and lists the citations."

data:
  label: "Your firm's data"
  headline: "Your firm's information stays in your firm's account."
  points:
    - title: "Your Google account"
      text: "Mail, calendar and documents stay in your firm's Google Workspace, where they are today."
    - title: "A project for your firm alone"
      text: "Matter records are kept in a Google Cloud project for your firm, apart from every other firm. You can run it yourself, or have Pangur Labs run it."
    - title: "AI on your terms"
      text: "AI runs on your firm's own account with Anthropic, OpenAI or Google, using a key your firm holds. For each matter, AI is on, asks first, or is off. AI never sends email."
    - title: "Backups you hold the key to"
      text: "Backups are encrypted, and each backup key is protected by your firm's project and by a recovery kit your firm keeps. Your firm can export all of its records at any time."
  link: "How MatterSeal protects your firm's information"

plans:
  label: "Plans"
  headline: "Two ways in"
  lead: "Pangur Labs can run MatterSeal for you, or your firm can run it in its own Google Cloud project. On every plan, your firm pays its AI service directly."

company:
  label: "Who makes it"
  headline: "Built in Seattle"
  text: "MatterSeal is made by Pangur Labs LLC, a software company in Seattle, Washington, founded in September 2026. MatterSeal works today and is in testing before launch."
  disclaimer: "Pangur Labs isn't a law firm and doesn't give legal advice. MatterSeal helps a lawyer keep track of work; the lawyer stays responsible for every deadline and filing."

faq:
  label: "Questions lawyers ask"
  headline: "Questions"
  items:
    - q: "Where is my firm's information kept?"
      a: "Your mail, calendar and documents stay in your firm's Google account. MatterSeal's matter records are kept in a Google Cloud project for your firm alone. The privacy policy lists every service that receives information and what each one receives."
    - q: "Does AI read our files?"
      a: "Only on matters where your firm has AI on, or set to ask and a person says yes. Documents go to the AI service your firm chose, on your firm's own account. A matter with AI off gets no AI at all."
    - q: "What happens if we leave?"
      a: "Your firm can export all of its records at any time, including if a subscription lapses. Your mail, calendar and documents never left your Google account."
    - q: "Which courts does it know?"
      a: "Deadline rules are built in for state trial and appellate courts in Washington, Oregon and California, King County Superior Court, the federal district courts in those states and the Ninth Circuit. For other courts, MatterSeal still files the notice to its matter, and you enter the deadline yourself."
    - q: "Do we need Google Workspace?"
      a: "Yes. MatterSeal works with Google Workspace mail, calendar and Drive. Mail and calendars outside Google, such as Outlook, aren't supported yet."
    - q: "Does MatterSeal decide anything for us?"
      a: "No. It proposes dates, lists citations and drafts replies; a person at your firm confirms, checks and sends. AI never sends email."

closing:
  headline: "See MatterSeal on the kind of matters you handle"
  text: "We'll walk you through it with demo data, and answer questions about your firm's setup."
---
