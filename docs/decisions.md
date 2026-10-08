# Decisions

## D01 — Independent project gallery on GitHub Pages

- Context: the user explicitly chose web-lab rather than using the personal root website and requested six existing services in one gallery.
- Options: reuse the personal root; merge service code; new static link-and-preview gallery.
- Decision: a new public web-lab repository, publishing only dist to GitHub Pages; the root and six services remain untouched.
- Rationale: preserves future personal-site use and independent release histories, requires no server or new paid service.
- Affected: architecture.md, README.md, .github/workflows/pages.yml, all dist files.
- Review: keep the repository/audience and six destinations explicit; do not add hosting providers or mutate source services as part of gallery maintenance.

## D02 — Static actual previews, not embedded apps

- Context: previews should show what visitors can use without unexpectedly running sound or multiple game loops.
- Options: six live iframes; decorative mockups; existing actual-screen captures.
- Decision: six self-hosted JPEG captures, native introduction dialog and deliberate execution/code links.
- Rationale: recognizable real interfaces, fast browsing, no third-party embed/storage/audio side effects. Reuse suitable existing assets rather than generating fictional interfaces.
- Affected: dist/assets/previews, dist/src/projects.js, dist/src/app.js, dist/index.html.
- Review: images are snapshots; update them if the public UI changes. Existing services' data-retention policies remain separate.

## D03 — No visitor persistence or personal-profile content

- Context: this is an independent web laboratory, not a personal biography; only introductions, previews and links were requested.
- Options: profile pages and visitor tracking; dynamic repository API requests; a curated six-record static catalog.
- Decision: curated immutable metadata, no account, forms, analytics, storage, external fonts or runtime API calls. Use GitHub noreply identity for the new repository's commits rather than publishing private contact details.
- Rationale: limited scope, no personal input collection, simple public deployment and explicit source provenance.
- Affected: dist/src/projects.js, dist/src/app.js, dist/index.html, architecture.md and local repository identity.
- Review: any future server, account, rankings or data collection needs a separate design and authorization.

## D04 — Accessible browsing and restrained interaction

- Context: six heterogeneous services need a quick choice on phone and desktop.
- Options: giant marketing hero; animated carousel; indexed gallery with category buttons and a native dialog.
- Decision: all six visible in the default grid; 2/1/3 category grouping; native focus containment, Escape close and focus return; a sticky dialog close header and known-project hash links; no autoplay or continuous gallery animations.
- Rationale: direct selection, readable real imagery and keyboard/touch navigation without adding a framework. No-JavaScript links preserve access to all destinations.
- Affected: dist/index.html, dist/styles.css, dist/src/app.js, test/catalog.test.js.
- Review: validate 320px, phone and desktop layouts; verify image loading, category counts and all six dialog/link destinations.

## D05 — Count-independent identity and catalog-derived totals

- Context: the user expects more experiment/learning projects and explicitly requested removal of the fixed six-project title.
- Options: repeatedly edit literal numbers; hide all totals; a stable title with catalog-derived totals.
- Decision: use count-independent title, introduction and footer text. Calculate COLLECTION, accessible total and category button counts from the curated project list; preserve selected-result counting. No new services are implemented in this change.
- Rationale: additions/removals cannot leave a stale total or category count. The static, manually reviewed catalog and deployment boundaries stay unchanged.
- Affected: dist/index.html, dist/src/projects.js, dist/src/app.js, test/catalog.test.js, tools/check.mjs, README.md and architecture.md.
- Review: test enlarged, reduced and empty catalog fixtures; verify browser counters and responsive layout. README and no-JavaScript links still need manual updates when actual services are added.
