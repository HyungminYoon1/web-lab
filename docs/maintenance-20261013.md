# WEB LAB maintenance — 2026-10-13

Status: published and verified. Local tests, exact-commit remote CI, public files/browser checks and the Worker deployment are recorded separately below.

## Scope and decisions

The owner approved automatic bug fixes and useful content updates across the 20 catalog applications and WEB LAB, with major decisions escalated. Existing approval permits verified publication. Five disjoint gpt-6.1 Sol assignments cover 19 applications; the coordinating agent owns engineer-practice, WEB LAB and the linked ranking-service review. Each service has one implementation owner. Independent repositories, storage policies, free hosting and the two existing ranked challenges are retained. No new account, paid provider, data collection or database migration is planned.

Authoritative documents and relevant source/tests are read per repository. Runtime/content review is risk-directed, not a claim of all possible inputs or every scientific proposition. Existing user files were clean before work.

## QA inventory

For every app: documented commands, primary user workflow, reset/retry or undo when present, bad/empty input or denied storage where applicable, runtime errors, desktop and narrow viewport, and a useful content addition verified against the app's model/source. UI changes require an actual updated gallery capture. Preserve previous records and public ranked rules. Authors report targeted coverage and limitations per repo.

| Application | Fix/content and primary coverage | Node tests |
| --- | --- | --- |
| engineer-practice | Formatted near-limit backup import; six learning paths/24 steps; bad restore preservation, mock answer isolation, native answer execution | 34 PASS |
| think-forge | Truthful partial-save notice; ten conditional/counterexample tasks after answer; existing generated question and oracle checks | 91 PASS |
| data-mirage | Nine interpretation tasks, answer/reference/verdict comparison and recent review; existing 24 question types | 43 PASS |
| element-atlas | Truthful import persistence notice; ten inference tasks; electron-configuration wording; existing 118 elements and licensed observations unchanged | 19 PASS |
| draw-desk | Cancelled transforms and style edits preserve original drawing; precision/layer exercise; JSON, PNG and SVG round-trip/export | 8 PASS |
| score-lab | Keyboard focus, cancelled drag and clamped group movement preserve intervals; two-bar composition exercise; six export formats | 8 PASS |
| clay-room | Split pieces own independent materials; two-piece exercise; actual Worker split and independent GLB materials, STL geometry, 4K PNG | 28 PASS |
| echo-vault | Terminal hint/result controls and recorded echo timing; late-stage planning; actual two-echo solution and wrong-timing failure | 48 PASS |
| neon-tactics | Result-dismissal state reset; escort/evacuation/occupancy exercises; unchanged ranked rules | 44 PASS |
| parcel-panic | Integer-only rotation coordinates and queue waiting indication; bottleneck exercises; actual contract-13 solution and route repair | 46 PASS |
| light-route | Strict restored-run fields; stages 9/12/18 exercises; actual final-stage success and budget failure | 23 PASS |
| orbit-courier | Valid code clears stale validation notice; six mission comparison exercises; six real successful mission flows | 36 PASS |
| pocket-city | Build-order, heat/power and commuting comparisons; three existing scenario victories and turn-11 restoration | 34 PASS |
| route-race | Weighted-search counterexample, cost versus steps and heuristic limits; actual weighted counterexample and failed imports | 26 PASS |
| logic-foundry | Reset restores inputs; failed private erase preserves summary; 13 investigation prompts and actual circuit checks | 43 PASS |
| sense-lab | Restart clears prior hearing-session result; median/MAD and frame interpretation; existing finite sensory constraints retained | 36 PASS |
| packet-journey | Cache expiry/304/200 and retry-chain comparisons; 28 selected browser checks | 53 PASS |
| pixel-kitchen | Invalid new seed no longer erases progress; filter-order comparison; tasks, file limits and browser return | 26 PASS |
| swarm-garden | Strict integer seed validation; alignment comparison; controlled replay and risk failure/retry | 37 PASS |
| traffic-lab | Fixed sampling-boundary tolerance, unchanged physics; policy comparison; 240 expected samples and actual replay | 40 PASS |
| web-lab | Storage updates preserve preview opener focus; all 20 previews refreshed; combined filters, links, about and no-JS fallback | 17 PASS |
| web-lab-ranking | Delete/start race, exact ticket expiry, strict replay input synchronization; local workerd/SQLite round-trip | 20 PASS |

Exploratory cases include near-capacity and corrupt backups, external summary updates while a preview is open, storage-denied contexts, repeated start/reset and narrow-screen controls. Production score submissions and private browser data are not used for QA.

## Local results

- All 22 repositories: 760 Node subtests PASS (including two ranking helper modules), documented static checks and git diff --check PASS. These are automated subtests, not 760 end-to-end user journeys.
- Engineer answers: C 72 + Java 56 + Python 56 + SQLite 95 = 279 native executions PASS; PostgreSQL DCL 5 + MySQL procedure 5/function 5 = 15 dialect executions PASS. Temporary test databases are not runtime service databases.
- Engineer backup: actual browser export/import preserved 754 synthetic attempts, bookmarks and the active draft. Compact size 1,047,209 characters, formatted size 1,109,447 characters, file size 2,919,247 UTF-8 bytes. Invalid versions and oversized canonical data preserve existing state.
- Every app owner exercised selected primary/negative workflows at desktop and narrow widths; concrete evidence and exclusions are in each repository's docs/verification.md. The coordinator reviewed relevant changes, cross-repository contracts and integration; this is not an independent second exhaustive audit of every file.
- Gallery: 20 decoded 1440x1000 JPEGs, exact execution/source destinations, Escape/focus return, all category counts, search/empty reset, difficulty/recommendation, about anchor and narrow dialog controls. No-JS fallback has 20 execution and 20 source links. No observed page errors or horizontal overflow in the selected 1440/320px checks.
- Captures come from actual isolated Chrome sessions, not generated artwork. Full-page sources are cropped without stretching to a 1440x1000 viewport; the city, swarm, orbit and light previews use the part containing the interaction board. Capture provenance is retained in the ignored integration evidence folder.
- Ranking: eight frozen frontend/server rule files match byte-for-byte and the manifest. Actual local workerd/SQLite verified legal Parcel 1457 and Neon 4280 submissions, retrieval, idempotent retry, rejected malformed/incomplete data, CORS and deletion of synthetic records. No production score/identity writes are used for this maintenance QA. Workers Free / $0 / Current plan was confirmed in the authenticated dashboard; the same existing deployment client was refreshed without changing browser defaults, plan or database resources.

## Source coverage and limits

- VERIFIED: authoritative documents, applicable workflow/check commands, requested source inventory, relevant changed paths, published destinations and per-repository scoped verification records for all 22 named repositories above.
- PARTIAL: runtime and content review of each complete repository; representative cases, not every possible game action, scientific proposition, question variant or third-party library implementation.
- NOT_RUN: physical device/audio/medical assessment, all browser engines, human difficulty/fun/exam-pass evaluation, production write/load/abuse tests and long-duration retention. No guarantee of zero defects or exam success. Existing 583 study items include variants, not 583 independent skills.
- No new DB or paid service, analytics, identity collection or schema/retention migration. Public rankings remain limited to the fixed Parcel-14 and Neon-16 challenges. Other applications retain local-only work/progress storage.

## Remote release evidence

All 20 applications, WEB LAB and the ranking API source are published; all 22 implementation commits passed their GitHub workflows.

| Repository | Implementation commit | Exact-commit Actions |
| --- | --- | --- |
| engineer-practice | `b0123e2b70` | [38350232027](https://github.com/HyungminYoon1/engineer-practice/actions/runs/38350232027) · success |
| element-atlas | `ccbd5ec969` | [38350237957](https://github.com/HyungminYoon1/element-atlas/actions/runs/38350237957) · success |
| web-lab-ranking | `13685391f5` | [38350197982](https://github.com/HyungminYoon1/web-lab-ranking/actions/runs/38350197982) · success |
| think-forge | `784e67c65a` | [38350240954](https://github.com/HyungminYoon1/think-forge/actions/runs/38350240954) · success |
| draw-desk | `3416528e78` | [38350272318](https://github.com/HyungminYoon1/draw-desk/actions/runs/38350272318) · success |
| data-mirage | `f290148c4c` | [38350245328](https://github.com/HyungminYoon1/data-mirage/actions/runs/38350245328) · success |
| score-lab | `cb910676f9` | [38350276814](https://github.com/HyungminYoon1/score-lab/actions/runs/38350276814) · success |
| orbit-courier | `b1f1bd16e4` | [38350286149](https://github.com/HyungminYoon1/orbit-courier/actions/runs/38350286149) · success |
| clay-room | `b5646eb556` | [38350281809](https://github.com/HyungminYoon1/clay-room/actions/runs/38350281809) · success |
| logic-foundry | `24a0ac6a28` | [38350301337](https://github.com/HyungminYoon1/logic-foundry/actions/runs/38350301337) · success |
| route-race | `def9718ccb` | [38350296686](https://github.com/HyungminYoon1/route-race/actions/runs/38350296686) · success |
| pocket-city | `dd98f78905` | [38350290955](https://github.com/HyungminYoon1/pocket-city/actions/runs/38350290955) · success |
| echo-vault | `0685443169` | [38350322889](https://github.com/HyungminYoon1/echo-vault/actions/runs/38350322889) · success |
| neon-tactics | `fea07643c5` | [38350328039](https://github.com/HyungminYoon1/neon-tactics/actions/runs/38350328039) · success |
| parcel-panic | `883c761574` | [38350332619](https://github.com/HyungminYoon1/parcel-panic/actions/runs/38350332619) · success |
| light-route | `192ac4b67a` | [38350337348](https://github.com/HyungminYoon1/light-route/actions/runs/38350337348) · success |
| sense-lab | `5853e758ef` | [38350341985](https://github.com/HyungminYoon1/sense-lab/actions/runs/38350341985) · success |
| packet-journey | `b36be6f344` | [38350346829](https://github.com/HyungminYoon1/packet-journey/actions/runs/38350346829) · success |
| pixel-kitchen | `ff04ef7885` | [38350352462](https://github.com/HyungminYoon1/pixel-kitchen/actions/runs/38350352462) · success |
| swarm-garden | `86b39c5bc6` | [38350357210](https://github.com/HyungminYoon1/swarm-garden/actions/runs/38350357210) · success |
| traffic-lab | `451510e44c` | [38350361724](https://github.com/HyungminYoon1/traffic-lab/actions/runs/38350361724) · success |
| web-lab | `fe02444885` | [38350832472](https://github.com/HyungminYoon1/web-lab/actions/runs/38350832472) · success |

- LIVE_FILES: all 346 public files from the 20 apps returned HTTP 200 and matched the verified local bytes (SHA-256 and byte equality). These requests used the public URLs without preview hosting or response substitution.
- LIVE_BROWSER: all 20 apps loaded in fresh isolated Chrome at 1440x1000 and 390x844. In these initial-page checks there were no observed page errors, failing asset responses or root horizontal overflow. The published engineer guide's example/self-check and transition to a new practice question also passed. Detailed local workflows remain distinct from this public smoke subset.
- LIVE_RANKING: Worker version `8a155cfb-07ab-448c-8569-9229ea8bc725` deployed successfully from the ranking commit above. Public health and both boards returned HTTP 200 with expected CORS; both boards were empty at verification time. The actual Pages clients each performed a successful board read and retry (four real GETs total). Two separately intercepted GET fixtures (Neon network failure, Parcel 503) showed the connection message and preserved personal play; these are simulated failures, not actual production outages. No production POST/PUT/DELETE, identities, tickets or test scores were created.
- LIVE_GALLERY: the implementation commit and workflow above passed. All 25 public files, including 20 new JPEGs, returned HTTP 200 and matched local verified bytes. Total public-file coverage is 371/371 across all 21 Pages sites. Actual public Chrome opened/decoded all 20 introductions, restored focus after Escape, found the qualification app by search, showed six games and the about section, and displayed the new swarm preview at 320px without horizontal overflow. No observed page errors or failed asset responses. Later evidence-only documentation commits do not change the validated dist files.
