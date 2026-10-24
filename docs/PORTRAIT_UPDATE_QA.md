# Approved portrait and identity update — 24 October 2026

> Print follow-up: the website portrait remains unchanged. The standard printed résumé now omits photos; historical portrait-in-print checks below are superseded by [the dedicated résumé implementation](PRINT_RESUME_QA.md).

The latest targeted replacement uses the newly uploaded shorter 768×1136 portrait as `profile.jpg`. Only the portrait URL, source height, and frame fallback aspect ratio changed in application code; the name, professional title, contact details, and all other CV content are identical to the state before replacement. The previous public/build image asset and its source/documentation references have been removed.

The user explicitly approved the original `profile.jpg`, the full name Micah Angela E. Floro, and existing primary CV contact information for the website. This approval covers the local content change; no push or deployment was performed.

## Changes

- Copied the original 768×1136 JPEG into `public/profile/profile.jpg`, byte-for-byte. The original and project copy have SHA-256 `484e5381b23131b675cee635a4cffae85764d904f49e5a49e361c7626493b173`. No generation, retouching, recompression, source cropping, appearance changes, or metadata edits were performed.
- Replaced the identity placeholders through `src/data/cv.ts`. The approved original photograph, exact full name, and primary CV email/mobile now appear in the hero. Email/mobile also appear in the contact section. All text, links, and buttons are HTML, separate from the photograph.
- The primary email/mobile were read from the existing older CV. Third-party reference contacts, precise addresses, unverified social links, and unverified academic dates remain excluded.
- Added a thin antique-gold rectangular border and a second fine rule outside the photograph. The opaque dark-violet identity panel keeps atmospheric smoke outside the image. No image filter, overlay, opacity effect, or glow is applied to the photograph.
- Retained the natural 48:71 aspect ratio at all tested widths using source dimensions, responsive frame widths, `object-fit: cover`, and `object-position: 50% 55%`.
- Print CSS retains the portrait at 25mm width with natural height, gold borders, and readable HTML name/contact text. A small existing print text-contrast issue and word spacing around hidden heading line breaks were also corrected.
- Updated page metadata, README, artwork provenance, and publication review notes to reflect the new approval.

## Validation

- `npm.cmd run build` passed TypeScript and Vite production compilation.
- Browser checks at 1440, 1024, 768, 390, and 320px: portrait loaded at the correct source dimensions, 48:71 frame ratio, `object-fit: cover`, no image filters, two real hero contact links, no visible identity placeholders, and no horizontal document overflow.
- Production browser captured no warning/error logs.
- SHA-256/file equality checks confirm both public and built portrait assets match the original JPEG.
- The scoped content checker passes: seven project records and their statuses are unchanged; unapproved legacy contact information remains excluded; approved name/contact fields are present.
- The print CV shares the hero's portrait URL and source dimensions. Its existing 25mm-wide frame uses automatic height, so it inherits the new natural 48:71 proportions without a separate image reference. Native printing/PDF pagination was not re-tested for this replacement.
- `git diff --check` passed. No Git history was rewritten.

Saved desktop, mobile, and print-style screenshots are local QA artifacts under `.qa/`, excluded from Git. Actual saved-PDF pagination remains a manual check in the target browser.
