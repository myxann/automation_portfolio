# Beyond the Workflow

A personal Curriculum Vitae and systems/automation portfolio built in the existing React + TypeScript + Vite application. The artistic direction is **Duchess Green / Renaissance Smoke**: monumental editorial type, restrained painterly atmosphere, generous spacing, and fine gold rules.

**Approved student name:** Micah Angela E. Floro  
**Deployed URL:** not deployed  
**Portrait and primary CV email/mobile:** approved and integrated  
**GitHub and LinkedIn profile links:** pending verification

## Run locally

Use Node.js 24 (also specified in `.nvmrc` and `package.json`). No environment variables or external services are required.

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. In PowerShell, use `npm.cmd` if the execution policy blocks `npm.ps1`.

```sh
npm run build
npm run preview
```

The build runs TypeScript project checks and creates the production site in `dist/`. The preview command serves that production output; it is not a production hosting service.

## Architecture

```text
src/
  App.tsx                         Section composition
  data/
    cv.ts                         Reviewed public CV, contact, navigation, credentials
    projects.ts                   Original seven-project registration array
    resume.ts                     Print summary, skill grouping, project selection
  components/
    layout/                       Navbar, Footer
    sections/                     Hero, Profile, Education, Skills, Experience,
                                  Projects, Achievements, Contact
    ui/                           Mark, SectionHeading
    print/                        Dedicated professional PrintableResume
    ProjectCard.tsx               Editorial preview and native details disclosure
    ProjectGallery.tsx            Optional screenshots and native modal dialog
  hooks/                          Section reveal handling
  styles/                         Tokens, global, components, responsive, print
  styles.css                      Stylesheet entry point
public/
  art/                            Two optimized sizes of original smoke artwork
  fonts/                          Self-hosted fonts and OFL licenses
  profile/                        Original approved profile.jpg, unchanged
  projects/                       Approved project screenshot location
docs/
  DESIGN_SYSTEM.md
  ARTWORK.md
  PUBLICATION_CHECKLIST.md
  QA_REPORT.md
```

Runtime dependencies remain React 18, React DOM, and lucide-react. No UI framework, animation library, analytics, form service, or backend was added.

## CV content and privacy

The site includes personal profile/career direction, education, categorized skills, project-based practical experience, selected projects, and contact interests. Achievements/certifications are data-driven and intentionally omitted while no verified records exist. Education dates and current year level are omitted pending verification.

Edit `src/data/cv.ts` to update approved public information. The full name, supplied portrait, and primary CV email/mobile are included with explicit user approval. GitHub and LinkedIn remain null until verified. Contact actions are real HTML `mailto:` and `tel:` links in the hero and contact section.

**Do not put unapproved private values into this file.** All frontend data is bundled, including values that are conditionally hidden. A null email renders no fake email action; adding an approved email enables a real `mailto:` link. GitHub/LinkedIn links appear only after approved URLs are configured.

The factual content retained from the available older CV is the IT degree/college, senior high ICT background, corroborating technical tools, and now the approved primary email/mobile. Precise addresses, third-party reference contacts, and unverified year level are omitted. The supplied task3 ZIP was missing; a differently named older CV archive was inspected read-only. Confirm that reference before academic submission.

The portrait at `public/profile/profile.jpg` is a byte-for-byte copy of the explicitly approved original. It was not generated, retouched, recompressed, or stripped of pixels/metadata. Its natural 768×1136 (48:71) proportions are preserved in a responsive antique-gold frame. `object-fit: cover` and a centered focal point prevent distortion; no smoke, filters, glow, or text overlays are applied to the photograph. Name, contact details, and actions remain separate HTML elements. The standard printed résumé omits the photograph while retaining approved contact text.

The original repository's initial commit contains former identity/contact values. **The current privacy cleanup does not sanitize Git history.** Review [the publication checklist](docs/PUBLICATION_CHECKLIST.md) before making any repository public. History rewriting and remote publication require separate authorization.

## Add or update projects

Add one object to `projects` in `src/data/projects.ts`, retaining the existing `PortfolioProject` type. Cards, counts, status options, and featured views derive from that array. The printed résumé selects four project IDs in `src/data/resume.ts` and reads their titles, technologies, and statuses from the same original records. Use a unique URL-safe `id`. Set `featured: true` to include a project in the curated opening view. Preserve honest status values: `Built`, `Built / Pilot`, `In Development`, or `Currently Building`.

Each preview expands into the full description and capabilities. Experience links reveal and open their target even when it is outside the featured view or a filter. No screenshots or repository/demo links are rendered when their fields are empty.

For approved screenshots:

1. Use synthetic or fully redacted records. Review visible account names, browser chrome, URLs, tables, and metadata.
2. Save a compressed WebP under `public/projects/<project-id>/`.
3. Add `{ src: '/projects/<project-id>/screen.webp', alt: 'Describe the visible interface', caption: 'Optional context' }` to that project's `images` array.
4. Verify the thumbnail and full image locally. The gallery supports Escape, previous/next buttons, arrow keys, native modal focus containment, and focus restoration.

Only add `links.live` or `links.repository` after verifying the destination and its sharing permissions.

## Navigation, motion, and printing

Sticky navigation covers Home, About, Education, Skills, Experience, Projects, and Contact. On smaller screens, the menu manages keyboard focus, Escape, and scroll locking. A skip link, visible focus states, semantic headings, status announcements, and appropriate native controls support keyboard and assistive technology use.

CSS and IntersectionObserver provide a brief hero entrance, fine-rule reveal, section-heading reveals, and user-triggered transitions. Content is readable before animation or if observation is unavailable. `prefers-reduced-motion` removes motion and smooth scrolling.

**Print / Save CV** calls `window.print()` on the current page. A dedicated `PrintableResume` is mounted beside the artistic website, hidden during normal browsing, and shown by `src/styles/print.css` only for printing. The website is hidden in print. No project disclosures or filters are changed by print events.

The standard résumé uses A4 portrait, 0.7-inch margins, 11-point Times New Roman text, a centered 17-point bold name/contact header, black section rules, four selected technical projects, and concise project-based experience. It omits the photograph and empty credentials. Identity, education, skills, titles, technologies, and statuses come from the existing data files; print-specific summary, grouping, selection, and factual bullet summaries are centralized in `src/data/resume.ts` and the optional experience `resumeBullets` field. Add verified dates to the source records and keep dated records newest first; current records have no verified dates or year level.

In the native dialog, choose Save as PDF, A4 portrait, and 100% scale. Browser headers/footers are controlled by browser settings and can be disabled there. The A4 browser layout check fits the current content on one page; actual native print-preview/PDF pagination remains unverified with the available tools. See [current print implementation and validation](docs/PRINT_RESUME_QA.md).

## Design and assets

The palette, typography, responsive composition, and motion principles are documented in [the design system](docs/DESIGN_SYSTEM.md). Cormorant Garamond, Inter, and IBM Plex Mono are self-hosted with OFL licenses. The original generated smoke is delivered as approximately 58 KB (desktop) and 16 KB (mobile) WebP files; the references are not copied into the website. [Artwork provenance and the exact generation prompt](docs/ARTWORK.md) are included.

## GitHub setup and suggested commits

No commits or pushes were made during implementation. Review `git status`, `git diff`, the publication checklist, and ignored files before staging. Choose whether the existing history is suitable for public use before connecting a public repository.

Suggested meaningful commits after review:

1. `Remove unapproved identity and contact details; centralize reviewed CV content`
2. `Build editorial CV, responsive navigation, and seven-system project archive`
3. `Add original atmosphere, accessible interactions, and print layout`
4. `Document content review, validation, and Vercel release settings`

Stage only the reviewed source/assets/docs. Do not stage original archives, private documents, unapproved photos, `.env` files, `node_modules`, `dist`, or `.qa`. The README is now intentionally tracked rather than ignored.

## Vercel deployment — after authorization

The existing SPA rewrite in `vercel.json` is retained. The implementation remains a static Vite app with hash navigation and local assets.

1. Complete publication review and authorize the GitHub push/deployment.
2. Push the reviewed source to the chosen GitHub repository.
3. Import that repository as a Vercel project. Set Root Directory to the folder containing this `package.json` (repository root if this application is the whole repository).
4. Use these settings:

| Setting               | Value           |
| --------------------- | --------------- |
| Framework preset      | Vite            |
| Node.js               | 24.x            |
| Install command       | `npm ci`        |
| Build command         | `npm run build` |
| Output directory      | `dist`          |
| Environment variables | None required   |

5. Deploy, inspect the build log, and confirm that fonts/artwork load, anchors work after a refresh, filters and mobile navigation work, and Print / Save CV opens correctly.
6. Add the actual verified deployment URL above and to the academic submission. Do not claim a successful deployment from a passing local build.

These settings follow the [Vercel Vite guide](https://vercel.com/docs/frameworks/frontend/vite) and [build configuration documentation](https://vercel.com/docs/builds/configure-a-build), together with this project's actual build script and output.

## Verification

See [QA results and explicit limitations](docs/QA_REPORT.md). A passing local build does not prove deployment, real mobile device behavior, or publication readiness while identity approval is pending.
