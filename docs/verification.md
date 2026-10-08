# Verification record

## Source inspection

2026-10-08 to 2026-10-09, Asia/Seoul. Existing service files are read-only inputs; this work does not implement or resume any service changes.

- VERIFIED: README.md and architecture.md of sense-lab, packet-journey, think-forge, orbit-courier, light-route and pocket-city; the six public Pages roots returned HTTP 200 with matching titles.
- VERIFIED: the six selected existing actual-screen captures, visually inspected before copying. Captures are snapshots, not live embeds or uptime evidence.
- PARTIAL: the six existing repositories as a whole. This gallery task does not review all gameplay/model code or rerun their complete tests. Existing local status was clean at the initial inspection.
- NOT_INSPECTED: unrelated projects and private inputs. No environment/credential values were printed.

## Initial publication verification

- LOCAL: PASS, four catalog tests and npm run check (10 public files, six JPEG previews, JavaScript syntax, local references, CSP and no app storage/network calls). All 15 text files passed UTF-8-without-BOM and CRLF checks. Private-filename and credential-pattern scans plus staged diff checking passed before the first commit.
- BROWSER_LOCAL: PASS, desktop plus 390px and 320px viewports; no horizontal overflow; category counts 6/2/1/3; all six dialogs, execution/source destinations, close focus return, Escape close, known-project direct links and all six loaded preview images. The sticky dialog header remains accessible after scrolling. No warning/error console entries were observed.
- REMOTE_CI: PASS for site implementation commit a51ecee80ba3cdf72f7b59830e9bd95a7338cc20. Both verify and deploy succeeded in [workflow run 37798813609](https://github.com/HyungminYoon1/web-lab/actions/runs/37798813609). Subsequent documentation-only commits do not change the verified site files; later workflow results are visible in Actions history.
- LIVE: PASS at https://hyungminyoon1.github.io/web-lab/. The root, CSS, two JavaScript modules and all six preview images returned HTTP 200 and matched local SHA-256 hashes. The public browser showed six loaded previews; game grouping, Pocket City introduction and the 390px mobile Sense Lab introduction worked without observed warning/error console entries.
- NOT_RUN: physical hearing tests and complete gameplay sessions of the six destination services; outside the gallery's implementation scope.
- NOT_RUN: browser-level JavaScript-disabled and reduced-motion emulation. The no-JavaScript fallback links and reduced-motion CSS are inspected statically, not claimed as separate browser test results.

## Count-independent catalog update — 2026-10-09

- Scope: remove fixed collection-size copy and derive displayed totals from the curated catalog. No new destination services or images are added in this update.
- LOCAL: PASS, six tests plus npm run check. The aggregation test covers added experiment/learning entries, a reduced list, an empty list and invalid categories. The page-shell test rejects literal collection counts. Changed text retains UTF-8 without BOM and CRLF.
- BROWSER_LOCAL: PASS, number-free title and introduction, catalog-derived COLLECTION and accessible label, category button counts and selected-result counts. The current catalog contains six entries; group selections showed 2/1/3/6 cards. A 320px viewport showed no horizontal overflow and no warning/error console entries were observed.
- Deployment evidence: the applicable commit's verify/deploy result is available in [Actions history](https://github.com/HyungminYoon1/web-lab/actions). Local checks above are not, by themselves, evidence of a completed public deployment.
