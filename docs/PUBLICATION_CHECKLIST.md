# Publication review

This is a local implementation. No push, commit, Site registration, or deployment was performed.

## Identity and contact

- [x] User approved the exact public name Micah Angela E. Floro; `cv.publicName` is set.
- [x] User explicitly approved the new shorter portrait and requested no changes to the photograph. A byte-for-byte copy is saved as `public/profile/profile.jpg`, with descriptive alt text and natural proportions. No image processing was applied.
- [x] User approved displaying existing CV contact information; the primary CV email enables a real `mailto:` link.
- [x] Primary CV mobile number enables a real `tel:` link; third-party reference contacts remain excluded.
- [ ] Verify and approve the GitHub profile URL; set `cv.githubUrl`.
- [ ] Verify LinkedIn if available; set `cv.linkedinUrl`, or keep it null.
- [ ] Verify any additional professional platforms before adding `cv.otherLinks`.
- [x] Page title, description, and social title include the approved public name.

The approved full name and original photograph now replace the local identity placeholders. A frontend URL or hidden content cannot protect private information; only explicitly approved identity/contact values belong in source files or public assets. This approval does not authorize deployment or a Git push.

## Factual review

- [x] Seven original project objects, descriptions, technologies, capabilities, featured flags, and statuses preserved unchanged.
- [x] Experience is explicitly labeled project-based practice; no employment, internships, or accomplishments were invented.
- [x] General location is Philippines.
- [x] No skill percentages or mastery claims.
- [x] Degree and college match both the brief and the locally available older CV. The older CV also corroborates the senior high ICT record and listed development tools.
- [ ] The specific task3 ZIP was absent at the supplied path. A differently named older CV ZIP in Downloads was inspected read-only instead. Confirm this source is the intended reference before submission.
- [ ] Verify present enrollment/year level and dates. They are deliberately omitted; the previous fourth-year statement is not assumed current.
- [ ] Verify any future achievements/certifications before adding them to `achievements`. The public section is omitted while the array is empty.
- [ ] Approve repository/demo URLs and screenshots per project. None were supplied in the original data; no links or screenshots were invented.
- [ ] Review personal project descriptions for institutional/workplace publication permission.

## Privacy and repository

- [x] Public identity/contact values are limited to those now explicitly approved. Other formerly exposed values remain excluded.
- [x] Only the approved original portrait is included; no source ZIP, private CV, third-party references, precise addresses, or private records were copied into the project.
- [x] Original art generated for the site; inspiration images are not distributed.
- [x] Fonts self-hosted with their open-source licenses; no font requests to third parties at runtime.
- [x] Fixed `.gitignore` so the README is included; dependencies, build output, local QA artifacts, source archives, and private documents are ignored.
- [ ] Resolve historical personal information before making the existing repository public. The initial commit contains previous identity and contact details. Removing them from the working tree does not remove them from Git history.

History remediation options, for the owner to authorize: use a new repository with only reviewed current files, or perform a coordinated history cleanup in the existing repository. History was not rewritten. If a future secret audit discovers credentials, rotate those credentials first; no credentials were found by the scoped checks performed here.

## Release

- [ ] Review `docs/QA_REPORT.md` and its remaining verification limits.
- [ ] Manually review a saved PDF for pagination in the intended browser.
- [ ] Obtain explicit authorization to push or deploy.
- [ ] Use the Vite/Vercel settings in the README.
- [ ] Record the real deployment URL after a successful authorized deployment; do not use a placeholder URL as evidence.
- [ ] Run deployed smoke checks for assets, anchors, mobile menu, filters, and printing.
