# Claim check: matterseal.com words (step 1, Nov 11 2026)

Every claim on the new site, and where it comes from. Sources:

- **Site**: the published pangurlabs.com and pangurlabs.com/matterseal/ pages (Stephen approved and published them Nov 8).
- **Privacy**: pangurlabs.com/matterseal/privacy.html (hosted privacy policy, Nov 7 2026).
- **Subprocessors**: pangurlabs.com/matterseal/subprocessors.html.
- **App**: what the app shows in its demo, app 0.2.295 (the screens on the site were taken from it).
- **Billing notes**: project notes on time and billing, steps 1 to 3e live in production by Nov 11.

| Claim (page) | Source | Note |
| --- | --- | --- |
| Every email, meeting, document and court deadline on one page per matter (home) | Site | Same line as today's MatterSeal page |
| Mail, calendar and files stay in your Google account (home, security, FAQ) | Site, Privacy | |
| For solo lawyers and firms of two to five; Mac and web browser (home) | Site | No phones, iPad, Windows or Android named (plan rule) |
| Files email to its matter and adds a Gmail label; unplaced mail goes to a queue (home, how it works) | Site | |
| Court notice matched to its matter by case number (home) | App | Filing screen says "matched by case number" |
| Deadlines worked out from court rules, proposed until a person confirms; second check; tells the next person if not acknowledged (home, how it works) | Site, App | "Nothing is a deadline until a person confirms it" is the app's own wording |
| Courts with built-in rules (FAQ, how it works) | Site | Same list as today's MatterSeal page |
| Citations found by MatterSeal, not AI, listed with lookup links to open and tick (home, security, how it works) | Site, App | |
| Flags a citation the AI named that isn't in the filing (home example) | App | "named in this analysis, not in the filing" chip on the demo filing |
| AI on, asks first, or off per matter; cost shown first; AI never sends email (home, security, FAQ) | Site, Privacy | |
| AI on the firm's own account with Anthropic, OpenAI or Google, on the firm's key (home, security) | Site, Subprocessors | |
| Ask AI answer points to the passages it relies on (home, how it works) | Site, App | |
| Timers, time entries, expenses, draft bills read line by line, sent as a PDF, payments recorded (home, how it works, plans) | Billing notes, App | Billing is in the base product (decided Nov 9). A real bill send from a signed-in mailbox hasn't been run on the dev firm yet. |
| Conflict checks across clients, former and prospective clients, opposing parties, related companies; a lawyer decides (home) | Site | |
| Client portal: clients message the firm and share documents (home) | Site | |
| Ransomware protection: encrypted, lockable backups; alarm on many changes; optional protected copies (home, security) | Site, Privacy | |
| Who can see each matter, audit log, warning when someone outside a matter can open its documents (home, security) | Site | |
| Several mailboxes per firm (home) | Site | |
| Matter records in a Google Cloud project for the firm alone; run it yourself or have Pangur Labs run it (home, security, FAQ) | Site, Privacy | |
| Hosted projects are in the US, Google's Oregon region (security) | Privacy, Subprocessors | us-west1 |
| Support access up to 72 hours, logs and health only, in the audit log (security) | Privacy | |
| Never sold, no advertising, not used to train AI models (security) | Privacy | |
| Backup key protected by the firm's project key service and a recovery kit the firm keeps (home, security) | Site | |
| Export all records at any time, including if a subscription lapses (home, security, plans, FAQ) | Site | |
| Mail sorting sends sender, subject and first part of the body; no attachments or court documents (security) | Subprocessors | |
| Texting via Twilio, words and pictures deleted there after delivery (security) | Subprocessors | |
| Limited Use statement (security) | Site, Privacy | Same wording as today's MatterSeal page |
| Plans: Solo, Firm (per firm plus per user), Self-hosted (per user); no amounts; firm pays its AI service (home, plans) | Site | No prices anywhere (rule since Nov 8) |
| Monthly AI budget (plans) | Site | |
| Founded September 2026, Seattle; works today and in testing before launch (home) | Site | No founder name (rule) |
| Not a law firm; the lawyer stays responsible (home, footer) | Site | |
| Help has guides; Support lets you write from the app; reply within two business days (help) | App, Site | Two business days is today's support page |
| Doesn't do yet: trust accounting, Outlook, scanned-document text, courts outside WA, OR, CA (how it works) | Site, App | Billing and time tracking taken off this list: both are live now. The app still reports scanned documents as needing text recognition. |

Left out on purpose: prices, customer counts, reviews, approvals, any competitor's name, phones and tablets,
the founder's name, anything only planned (AI agents and the AI supervision report, which today's site lists as
under development).

The words check (`npm run check`) fails on a dollar amount, a competitor's name, the founder's name, a device we
don't claim, or proof we don't have, and prints every sentence with every, always, never, all, only or any for
this review.
