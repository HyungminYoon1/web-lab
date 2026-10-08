# Verification record

## Initial source inspection

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

## 독립 실험·학습 도구 추가 — 2026-10-09

### 범위와 입력

- VERIFIED: 이번에 만든 pixel-kitchen, swarm-garden, traffic-lab, logic-foundry, route-race, data-mirage의 README·architecture·결정 기록, 계산 모델·UI·정적 자산과 집중 테스트.
- VERIFIED: 갤러리의 카탈로그·문서·대체 링크와 새 서비스의 실제 공개 화면 캡처. 기존 서비스의 소개·이미지는 보존했습니다.
- PARTIAL: 기존 서비스는 이 변경의 구현 대상이 아니므로 전체 기능 테스트를 다시 수행하지 않았습니다. 개인 대표 저장소도 변경하지 않았습니다.
- NOT_INSPECTED: 무관한 저장소와 개인 파일. 자격 증명 값이나 환경 파일은 출력하지 않았습니다.

### 로컬 및 브라우저

- LOCAL: 새 서비스별 4개씩 총 24개 집중 모델 테스트 PASS. 모두 구문·자산·CSP·UTF-8 검사 PASS.
- LOCAL_GALLERY: 6개 테스트와 정적 검사 PASS. 목록 12개·JPEG 12개·공개 파일 16개를 카탈로그 기준으로 검사했습니다. 전체 수는 UI 상수로 추가하지 않았습니다.
- BROWSER_LOCAL: 이미지 입력/PNG 저장/오류 입력, 군집 규칙/장애물, 제동/교통 설정, 회로 신호/진리표/순환 거절, 지도 편집/키보드/경로 비교, 축/편향 표본/집계 변화 확인.
- WebMCP_LOCAL: 기능을 제공하는 현재 브라우저에서 각 읽기·조작 도구의 정상 호출과 의도한 잘못된 입력 거절 확인. 실제 등록과 실행을 확인했으며 다른 브라우저의 지원을 가정하지 않습니다.
- RESPONSIVE_LOCAL: 모든 새 서비스와 갤러리의 390×844·320×780 검사. 페이지 가로 넘침 없음. 이미지 결과 우선 배치와 큰 회로 내부 스크롤을 확인했습니다.
- BROWSER_LOCAL_GALLERY: 새 소개창 6개, 기능 목록·실행/코드 링크·실제 이미지, Escape 닫기와 포커스 복귀 PASS. 분류 선택은 5/4/3/12개, 목록 이미지 12개 로드 확인.
- NOT_RUN: 물리적 모바일 기기, 별도 브라우저 엔진, JavaScript-disabled/reduced-motion 브라우저 에뮬레이션, 실제 도로 실측과 고해상도 이미지의 모든 형식 조합. 관련 정적 분기와 자원 제한은 위 집중 검증과 구별합니다.

### 새 서비스 원격 CI 및 공개 사이트

| 저장소 | 검증된 커밋 | 원격 CI | 공개 파일 |
| --- | --- | --- | --- |
| pixel-kitchen | 6bcef4fcbb74eb4b4b174a5244a6568b59eda020 | [verify / deploy PASS](https://github.com/HyungminYoon1/pixel-kitchen/actions/runs/37809391300) | HTTP 200·5개 파일 SHA-256 일치 |
| swarm-garden | 693b5b674b5b4206490a9fdb9d672c30e9749a72 | [verify / deploy PASS](https://github.com/HyungminYoon1/swarm-garden/actions/runs/37809390996) | HTTP 200·5개 파일 SHA-256 일치 |
| traffic-lab | a4a1473f35dc49f36364d1149612c5621fbda1b7 | [verify / deploy PASS](https://github.com/HyungminYoon1/traffic-lab/actions/runs/37809389399) | HTTP 200·5개 파일 SHA-256 일치 |
| logic-foundry | aca24be73a4b123be69cc53ad496975c9b9433d9 | [verify / deploy PASS](https://github.com/HyungminYoon1/logic-foundry/actions/runs/37809390732) | HTTP 200·5개 파일 SHA-256 일치 |
| route-race | 7fd645f53a2c8d7ed9aa25775d3f58997d7192ae | [verify / deploy PASS](https://github.com/HyungminYoon1/route-race/actions/runs/37809391941) | HTTP 200·5개 파일 SHA-256 일치 |
| data-mirage | 4b8fbf2df7d5648e7651be1d8ffd3f41fb0cb38a | [verify / deploy PASS](https://github.com/HyungminYoon1/data-mirage/actions/runs/37809392726) | HTTP 200·5개 파일 SHA-256 일치 |

- LIVE_UI: 각 공개 URL에서 실제 필터 적용, 군집 규칙·장애물, 제동 상태·평균 지표, 다수결 8/8와 신호 전환, BFS 비용65 / Dijkstra·A* 비용19, 축50에서 높이3배·실제 증가율7.7%를 확인했습니다.
- LIVE_CONSOLE: 검사한 공개 실행에서 경고/오류 로그 없음. 사진 읽기는 로컬 공개 JPEG로 검증했으며 개인 사진은 사용하지 않았습니다.
- 각 서비스의 증거는 그 커밋에 한정됩니다. 이후 변경의 동작은 해당 Actions와 공개 사이트를 다시 확인해야 합니다.
- 갤러리 배포 검증은 이 로컬 결과와 별도로 다음 기록에 남깁니다.
