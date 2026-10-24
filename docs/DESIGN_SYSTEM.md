# Duchess Green / Renaissance Smoke — v1.0

## Palette

| Token         | Hex       | Role                                                       |
| ------------- | --------- | ---------------------------------------------------------- |
| Duchess Green | `#42733D` | Signature actions, project accents, green section identity |
| Dark Violet   | `#1B102E` | Depth and secondary dark surfaces                          |
| Lavender      | `#A79CDE` | Selective system and practice emphasis                     |
| Antique Gold  | `#D4AF6B` | Thin rules, timeline points, focus, small details          |
| Burnt Orange  | `#CF6B3E` | One restrained project accent                              |
| Ivory         | `#F4F1E9` | Primary typography                                         |

The main canvas is a near-black violet `#100D16`; academic and contact sections use a darker green `#1B2E22`. All six colors do not receive equal weight. Green establishes the identity through the primary CTA, education/contact surfaces, and project accents. Gold is a detail, not a large competing surface.

## Typography

- Cormorant Garamond regular/italic: monumental hero, section headings, and project titles.
- Inter regular: body and controls.
- IBM Plex Mono regular: chronology, archive numbering, labels, and metadata.

Fonts are self-hosted with swap behavior and system fallbacks. Their OFL licenses are distributed under `public/fonts/`. Headings use `clamp()`, carefully controlled line-height, and deliberate line breaks. Body text stays in short columns with generous leading. No fabricated skill meters or credentials appear.

## Composition and spacing

The opening composition is asymmetric: left-aligned monumental title and introduction; original smoke rises at the right; the portrait/identity group sits below the display type. A quiet four-part index introduces the person, practice, systems, and contact chapters. Main content uses a 1280px maximum reading canvas and fluid side gutters. Section spacing ranges from 76px to 128px.

Profile/education use editorial columns; skills use a compact capability matrix; experience uses a readable practice list; the archive uses two-column typography-first project presentations. Mobile recomposes these regions, uses a two-by-two chapter index, and reduces the archive to one column. At tablet sizes, skills use two columns and navigation becomes a menu.

Section numbers describe the reading order. Optional achievements reserve chapter 06; contact remains 07 when no verified achievements are available. Fine diagonal geometry and a single archive mark echo the supplied moodboard without recreating it pixel-for-pixel.

## Smoke and motion

One original static smoke composition supports the opening. Organic green/ivory/gold wisps blend into the violet canvas with CSS veils. Small screens use a lower-resolution asset and lower opacity. The layout retains its color/type structure without artwork. No screenshot of the references, third-party painting, photo of a stranger, particles, or continuous rendering loop is used.

A short hero entrance, line draw, and section-heading reveal provide restrained motion. Native details and dialog controls explain user-triggered changes. Hover movement is limited to devices with hover. Reduced-motion preferences remove animations, transitions, and smooth scrolling. Main content never starts hidden.

## Accessibility and print

The interface uses semantic sections/headings, visible keyboard focus, a skip link, a labeled status select, live result counts, a keyboard-managed mobile menu, and native details/dialog elements. No unverified external destination is presented as a working action.

Print uses a separate professional résumé component with an A4 portrait page, 0.7-inch margins, 11-point Times New Roman body text, a centered 17-point bold name, thin black rules, and compact single-column sections. Four relevant projects are selected from the original data. The full name and primary contacts are real HTML content. The standard résumé omits the photograph, atmospheric decoration, navigation, controls, galleries, and empty credentials. This follows traditional career-services résumé conventions without implying institutional endorsement.

The approved original photograph sits in an opaque dark-violet panel with a fine antique-gold border and a second fine rule outside the image. The responsive website frame retains the image's natural 48:71 proportions. Smoke remains behind the composition and outside the opaque photograph; no visual effect is applied to the photograph itself. The source JPEG remains unchanged.
