# Dedicated professional résumé — 24 October 2026

The Print / Save CV actions now print a separate, traditional single-column résumé. The artistic website, original portrait, existing CV wording, and complete seven-project archive are preserved. This local change does not publish or deploy the site.

## Implementation

| File                                                                                    | Change                                                                                                                                                           |
| --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/components/print/PrintableResume.tsx`                                              | New dedicated semantic résumé, hidden during normal browsing.                                                                                                    |
| `src/data/resume.ts`                                                                    | New centralized print summary, five compact skill categories, four project selections, and factual contribution bullets.                                         |
| `src/data/cv.ts`                                                                        | Optional print-only experience bullets and a null portfolio URL field; all existing public identity, contact, education, skill, and experience content retained. |
| `src/App.tsx`                                                                           | Website wrapper and printable résumé are siblings, so hiding the website cannot hide the résumé.                                                                 |
| `src/styles/print.css`                                                                  | Replaced artistic-page printing with document-specific A4 rules.                                                                                                 |
| `src/hooks/usePrintCV.ts`                                                               | Removed obsolete hook that expanded website project disclosures for printing.                                                                                    |
| `src/components/sections/Projects.tsx`                                                  | Corrected an obsolete print comment; no behavior changed.                                                                                                        |
| `README.md`, `docs/DESIGN_SYSTEM.md`, `docs/QA_REPORT.md`, `docs/PORTRAIT_UPDATE_QA.md` | Updated print guidance and marked earlier print results as historical.                                                                                           |

The component reads identity, contacts, education, experience, and achievements from `cv.ts`; project titles, technologies, and honest status labels from `projects.ts`; and print presentation choices from `resume.ts`. Skills are selected from existing verified skill groups. The selected systems are LabTrack, Advanced Studies Assistant, IC Clearance Management, and ClassMate. The website retains all seven projects. No employment, deployment, metrics, awards, or dates were invented.

The résumé includes a two-line summary, college and relevant senior high ICT education, five skill rows, four project entries, and one concise project-based experience entry. It omits empty credentials and unavailable social/deployment links. Dates are right-aligned when supplied; education retains college before senior high school. Current undated projects are selected by relevance, without claiming a chronological order that the data cannot establish.

## Print decisions

- A4 portrait; 0.7-inch margins; natural document flow with no zoom or transform scaling.
- Times New Roman: 11-point body/section headings, 17-point bold uppercase name, consistent line spacing.
- Centered compact name/contact header; left-aligned content; thin black section rules on white paper.
- Break avoidance for entries and bullets, heading keep-with-next rules, and widow/orphan controls.
- No photo, smoke, backgrounds, icons, navigation, buttons, galleries, or empty credentials in print.
- All three existing print buttons retain the browser-native `window.print()` action, without opening a separate document. No print-event state mutation remains.

The format follows the plain, factual presentation principles in [Harvard career-services guidance](https://careerservices.fas.harvard.edu/resources/create-a-strong-resume/) and its [bullet-style example](https://cdn-careerservices.fas.harvard.edu/wp-content/uploads/sites/161/2024/07/resume-bullets.pdf). It is not an officially endorsed template.

## Executed validation

- Production build: `npm.cmd run build` passed TypeScript and Vite compilation.
- A server-rendered comparison confirms the website's HTML is identical to the pre-change version inside the new wrapper. Existing public CV values are unchanged. Screen CSS files, all seven original project records, and the original portrait have unchanged hashes.
- The printable component renders the approved name/email/mobile, source project titles/statuses/technologies, and only verified skills. It has no image, button, icon, placeholder contact label, or empty credentials section.
- An actual Chromium browser rendered the component with the exact print stylesheet applied in an isolated A4 geometry fixture. At 210mm page width and 0.7-inch margins, content measured approximately 807px high against 988px of usable A4 height, with no horizontal overflow. The body font computed to 11pt and name to 17pt. The screenshot was visually inspected. This supports a one-page layout, but is **not a native PDF pagination test**.
- The production website was checked at desktop and mobile sizes. The standard résumé stays hidden, the artistic site stays visible, and the original 768×1136 photo loads without distortion. No horizontal overflow was observed.
- All three actual print buttons invoked the print handler in an isolated browser fixture. Simulated `beforeprint`/`afterprint` events preserved an expanded project, the selected status filter, card visibility, and navigation state. The fixture substitutes the native dialog, so this is a handler/state regression check, not a native printing result.
- The final production page and print-handler fixture captured no browser warning/error logs. `git diff --check` passed.

## Testing limits and manual export

The available browser APIs do not expose native print-preview inspection or PDF export. The native dialog also blocked automated browser interaction in the earlier website-printing test. Actual saved-PDF appearance, final pagination, and empty-page absence therefore remain **NOT VERIFIED** in the native print engine. No PDF was generated or represented as validated.

For final submission, open Print / Save CV in the intended browser, choose Save as PDF, A4 portrait, 100% scale, and review the page count and bottom edge. Browser-generated headers and footers can be disabled in that dialog; CSS cannot reliably control those settings. The available one-page height estimate leaves roughly 181px of spare content area at the specified settings, without reducing text size.

## Missing verified details

The source data has no verified education dates/current year level, project dates, exact city, GitHub or LinkedIn URL, deployed portfolio URL, formal employment/internship record, or certifications/awards. The résumé uses the verified general location “Philippines,” identifies experience as project-based practice, and omits unsupported fields. Add verified records to the central data files rather than inserting placeholders or speculative details.

Local screenshots and comparison fixtures are in ignored `.qa/`; no production dependency was added.
