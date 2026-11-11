---
# Words for matterseal.com/security/. Every line comes from the privacy policy, the subprocessor list or the
# feature list (docs/claims.md). Change the legal pages first, then these words.
title: "Security and your firm's information · MatterSeal"
description: "Where MatterSeal keeps a law firm's information, who can read it, what AI services receive, and how backups and access controls work."
label: "Security"
headline: "Your firm's information stays in your firm's account."
lead: "A law firm's mail and files hold its clients' confidences. MatterSeal is built so that they stay with the firm, and so that the firm can see who touched what."
sections:
  - title: "Where it is kept"
    points:
      - "Your mail, calendar events and documents stay in your firm's Google account. MatterSeal reads them from there when it needs them."
      - "The matter records MatterSeal keeps (which messages, events and documents belong to which matter, deadlines, notes and drafts) are stored in a Google Cloud* project for your firm alone, apart from every other firm."
      - "On the hosted plans, that project is in the United States, in Google's Oregon region. On the self-hosted plan, it is a project your firm owns."
  - title: "Who can read it"
    points:
      - "We never sell your firm's information, use it for advertising, or use it to train AI models."
      - "When your firm wants our help, your owner or an admin can give Pangur Labs access for up to 72 hours. It lets us see your MatterSeal server's logs and health, never your database, documents or mail, and every grant is in your firm's audit log."
      - "Inside the firm, you control who can see each matter. MatterSeal keeps a log of who did what, and tells your firm when someone outside a matter can open its documents."
  - title: "What AI receives"
    points:
      - "AI runs on your firm's own account with Anthropic (Claude), OpenAI or Google (Gemini), using a key your firm holds. Your firm sets the terms and pays the AI service directly."
      - "For each matter, AI is on, asks first, or is off. A document goes to AI only on a matter where it is allowed, and MatterSeal shows what it will cost first."
      - "AI never sends email. A reply it drafts goes out only after a lawyer approves it."
      - "Citations in a filing are found by MatterSeal itself, not by AI, and listed for a lawyer to open and tick."
  - title: "Backups and ransomware"
    points:
      - "MatterSeal backs up every record to storage in your firm's project. Backups are encrypted, and each backup key is protected both by Google Cloud's* key service in your firm's project and by a recovery kit your firm keeps."
      - "Your firm can lock backups so no one can change or delete one until it ages out. You can restore a single record or everything."
      - "MatterSeal raises an alarm when many documents change at once, and your firm can turn on protected copies of every matter document."
      - "Your firm can export all of its records at any time, including if a subscription lapses."
  - title: "Other services"
    points:
      - "If your firm turns mail sorting on, the sender, subject and the first part of each new email go to our email classifier. No attachments or court documents."
      - "If your firm adds texting, texts go through Twilio, and their words and pictures are deleted there once each text is delivered and copied to your firm's project."
      - "The privacy policy and the subprocessor list name every service and exactly what each receives."
google:
  title: "Google permissions"
  text: "MatterSeal asks for access to Gmail, Google Calendar and Google Drive so it can file email to matters, show each matter's events and keep its documents. The MatterSeal page on pangurlabs.com explains each permission. MatterSeal's use and transfer of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements."
  link: "Why MatterSeal asks for each Google permission"
questions: "Questions about security or privacy: email"
---
