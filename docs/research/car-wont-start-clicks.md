# Clicking no-start article evidence

Checked: 2026-10-22. Article: [`car-wont-start-clicks.mdx`](../../src/content/articles/car-wont-start-clicks.mdx). Existing filename and `publishedAt: 2026-02-10` preserved; existing public status made explicit as `draft: false`. Substantive correction dated `updatedAt: 2026-10-22`.

## Scope and decision

Initial, mostly visual triage for conventional gasoline/diesel vehicles with a 12-volt lead-acid starting battery. No hybrid/EV/high-voltage diagnosis, under-vehicle testing, battery removal, or starter replacement procedure. Exact vehicle and equipment manuals control assisted-start and service procedures. No hands-on testing or professional review is claimed.

## Claim ledger

| Article claim/location | Primary source actually read | Scope, result, and limits |
| --- | --- | --- |
| Opening; symptom table; referral | [DENSO, Starters: Installation and fault finding](https://www.denso-am.eu/products/rotating-electrics/starter), “Fault finding”; no publication/version date displayed | Manufacturer lists discharged battery, connections, resistance, engine mechanical problems, and starter problems as possible no-crank causes. Noise alone is not a replacement diagnosis. General conventional starting-system context; no vehicle-specific thresholds adopted. |
| Clicking interpretation; do not keep cranking; battery/connection evaluation | [DENSO Starters & Alternators Technical Manual](https://assets.denso-am.eu/production/attachments/Starter-Alternator-Manual-English.pdf), printed pages 29–30 and 37; edition date not established | Full official PDF downloaded and text inspected because browser extraction rejected its size. Page 37 distinguishes insufficient control voltage from switch contacts and describes damage from prolonged cranking. Pages 29–30 cover other causes, inspection, and battery testing. Advanced diagnostic steps remain a shop referral. |
| Battery voltage cannot establish battery health; request condition test | [Interstate Batteries, When Your Car Battery is at Death's Door](https://www.interstatebatteries.com/en-lx/blog/get-a-battery-test), sections “What makes a car battery dead?” and “How do you test a car battery?” | Manufacturer distinguishes state of charge from condition; explains conductance/load testing. No voltage chart, fixed replacement age, or automatic replacement rule copied. |
| Battery hazards; assisted-start equipment compatibility | [NOCO GB40 User Guide & Warranty](https://no.co/media/wysiwyg/downloads/User_Guides/Boost/gb40-user_guide_10.12.2022a_1.pdf), English safety section, PDF pages 1–2; filename revision 10.12.2022a_1 | Official PDF read. Damaged/frozen battery, explosion, eye protection, sparks/metal objects, ventilation, and battery-chemistry/voltage cautions support the conservative stop boundary. Product-specific manual cited as an example, not a recommendation or universal GB40 fit claim. No override instructions reproduced. |
| Do not universally disconnect battery; model-specific example | [Toyota 2023 Camry Owner's Manual OM06259U](https://assets.sia.toyota.com/publications/en/om-s/OM06259U/pdf/OM06259U.pdf), printed pages 564–566 | Official PDF downloaded/read after browser fetch returned 403. Page 564 directs contact with Toyota before removing terminals because stored ECU information is cleared. This fact remains explicitly specific to the 2023 Camry; no claim that every vehicle has the same requirement. |

## Removed or qualified claims

- Removed unsupported 90% claim and 70/15/10/5 percent cause breakdown; no prevalence evidence was available.
- Removed universal 12.0 V cranking/12.4 V pass threshold, immediate replacement conclusion, and any claim that a failed jump proves a failed starter. A resting voltage alone is not a condition test.
- Removed generic cable-connection sequence, terminal-cleaning recipe, battery replacement procedure, and starter access instructions. Their vehicle-specific connection points, torque, battery-management requirements, and safety prerequisites were not established.
- Removed unsupported DIY/shop costs, completion times, free-service promises, fixed replacement ages, guaranteed symptom interpretations, and promised outcomes.
- Removed NOCO G3500/Optima product cards, prices, comparative performance/longevity and recovery promises. Product variant, application, and claims were not established for an unspecified vehicle. No retailer destinations or tracking remain; `affiliateEnabled: false`. Program enrollment and attribution were not verified.
- No author testing or credentials were added. Battery registration/initialization appears only as a possible estimate item to ask about, not a claim that every car requires it.

## Review and remaining limits

Authoring agent re-read the changed diagnostic wording, safety boundary, frontmatter, and source locations. The revised article uses only supported `SafetyCallout` props. The changed number is scope (12-volt lead-acid), not a pass/fail threshold. No torque or electrical test cutoff remains. Independent evidence review, rendered output, routes, and repository checks are performed at integration; this note does not claim they have passed.

The DENSO manual includes a more aggressive voltage/replacement statement; it was not adopted as a universal consumer rule. Broader manufacturer material also contains simplified symptom explanations; the article retains uncertainty instead of repeating those conclusions. No unresolved model-specific service procedure is presented as usable instructions.
