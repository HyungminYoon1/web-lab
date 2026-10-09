# Decisions

## D15 — 개념 학습·다중 객체·조작 안내와 실제 미리보기

- Context: 사용자가 화학의 학습 경로, CLAY ROOM 다중 객체, 개념 중심 통계 학습, PARCEL PANIC 조작을 보완하고 UI가 바뀐 앱의 실제 캡처를 갱신하도록 요청했습니다.
- Options: 기존 소개·사진 유지; 발표용 가상 이미지; 변경된 네 앱의 실제 브라우저 화면과 기능만 반영.
- Decision: 해당 네 카탈로그 항목과 실제 JPEG만 갱신합니다. 화학의 10개 규칙·전자배치, 최대 8객체·닫힌 평면/비율 분할, 통계의 18개 개념·24개 문제 유형, 물류 게임의 기본 안내·선택/설치 모드를 소개합니다. DATA MIRAGE는 기존 학습 범주를 유지하며 제목을 통계 학습실로 맞춥니다. PARCEL PANIC은 기본 연습이 있어 입문 진입으로 표시합니다.
- Rationale: 실제 구현된 화면과 소개를 일치시키고 다른 15개 프로젝트·미리보기·기기 기록·랭킹 경계는 유지합니다. 새로운 계정·서버·데이터 저장을 추가하지 않습니다.
- Affected: dist/src/projects.js, 네 dist/assets/previews JPEG, README.md, docs/verification.md.
- Review: 변경 네 항목의 화면·소개·링크·JPEG, 전체 카탈로그 테스트와 다른 15개 항목/이미지의 보존을 확인합니다. 서버 상태는 실제 GET 증거, 장애 UI는 로컬 가정 실험으로 구분하며 랭킹 점수를 테스트 등록하지 않습니다.

## D14 — 원소 도감의 사진 확장과 실제 미리보기 갱신

- Context: 사용자가 기체의 액화·고화 사진을 포함해 눈으로 관찰할 수 있는 원소 사진의 누락을 보완하도록 요청했습니다.
- Options: 기존 56종 소개 유지; 관측 자료를 순수 표본처럼 집계; 원소 도감의 검토된 구분과 실제 화면을 반영.
- Decision: 해당 항목만 97종·100장으로 갱신하고 실제 새 화면 JPEG를 교체합니다. 표본·도금·현미경 87종과 방전광 등 관측 10종의 구분 및 누락 사유는 원소 도감에 표시합니다. 다른 18개 앱 소개·미리보기와 갤러리의 저장·랭킹·호스팅 구조는 유지합니다.
- Rationale: 카탈로그를 실제 배포 기능과 맞추며 실물 표면과 빛·피복의 차이를 숨기지 않습니다. 추가 사용자 데이터나 서버·비용은 없습니다.
- Affected: dist/src/projects.js, dist/assets/previews/element-atlas.jpg, docs/verification.md. 과학·사진 정책과 출처는 element-atlas/docs/photo-coverage.md 및 D04에 기록합니다.
- Review: 실제 화면의 사진·집계·모바일 보기, 소개창·JPEG 디코딩·실행 링크, 정상 fast-forward 및 변경 파일의 공개 해시 확인. 다른 앱은 전체 재검증 대상이 아닙니다.

## D13 — 승인된 화학 학습과 창작 앱 연결 (2026-10-09)

- Context: 사용자가 네 새 앱 구현과 SENSE LAB 음높이 테스트 전환을 승인하고 한 에이전트의 순차 구현을 선택했습니다.
- Options: 기존 앱에 창작 도구를 혼합; 서버 계정/저장; 독립 정적 앱 네 개와 갤러리 소개.
- Decision: 독립 element-atlas/draw-desk/score-lab/clay-room 저장소, 창작 분류, 실제 캡처 네 개와 변경된 Sense 캡처. 갤러리 요약 reader의 허용 카탈로그만 15에서64로 확장해 기존 뒤쪽 앱 완료 표시가 잘리지 않게 합니다. 6000자/v1 숫자 스키마와 기존 서비스 writer는 유지하며 새 앱은 자체 키만 사용합니다. 갤러리는 계속 읽기 전용입니다.
- Rationale: 다른 앱 기록·랭킹·실행을 건드리지 않고 실제 편집 도구를 분리할 수 있습니다. 발표용 이미지가 아니라 실제 실행 화면을 제공합니다.
- Affected: 카탈로그, index, reader, tests, previews, README/architecture/verification. 앱별 모델·저장·라이선스 결정은 해당 저장소에 기록합니다.
- Review: 새 분류/검색/소개/19개 이미지/옛 완료 표시와 저장 격리, 작은 화면, 검증 후 Pages 게시. 이미지는 정적 캡처이며 상태 자동 동기화가 아닙니다.

## D12 — 실험실 소개와 작은 화면의 접근 경로

- Context: 상단 소개 링크의 도착 영역에는 짧은 안내만 있어 사이트의 목적과 사용 방법을 알기 어려웠습니다. 350px 미만에서는 해당 메뉴도 숨겨졌습니다.
- Options: 소개 메뉴 제거; 새 소개창과 상태 관리 추가; 기존 정적 소개 영역의 내용과 작은 화면 메뉴 보완.
- Decision: 기존 #about 영역에 사이트 목적, 실험·학습·게임의 차이, 미리보기와 실행 방법을 작성합니다. 작은 화면은 헤더를 두 줄로 배치해 소개 메뉴를 유지합니다. 긴 부드러운 스크롤을 없애 기본 앵커가 즉시 이동하도록 하고 자바스크립트 없는 읽기를 보존합니다.
- Rationale: 기존 구조 안에서 설명과 접근 경로를 보완할 수 있으며 계정·추적·네트워크·저장 정책을 바꿀 필요가 없습니다.
- Affected: dist/index.html, dist/styles.css, test/catalog.test.js, docs/verification.md.
- Review: 클릭·직접 #about 주소·키보드·작은 화면·자바스크립트 비활성 상태를 확인합니다. 검증 중 소개창 포커스 복귀 직후의 부드러운 스크롤이 앵커 이동을 방해한 사례가 있어 즉시 이동으로 검증합니다. 앱 미리보기15개와 대상 앱은 변경하지 않습니다. 화학 학습 앱은 사용자의 답변에 따라 구성 검토 후 제작하며, SENSE LAB 개편과 새 분류·창작 앱은 이번에는 제안만 합니다.

## D11 — 간결한 소개와 개인 완료 표시

- Context: 사용자가 전체 앱 보완과 미리보기 갱신, 불필요한 AI식 문구 제거를 승인했습니다.
- Options: 기존 긴 소개 유지; 계정/API 기반 방문 기록; 간결한 기능 설명과 기기 내 최소 완료 요약.
- Decision: 난이도·예상 소요 시간을 카탈로그에 추가하고 검색/분류와 함께 필터합니다. AI 제작 강조와 반복·과장 문구를 제거합니다. 갤러리는 승인된 web-lab-progress-v1 요약만 읽고 다른 앱의 개인 실행 내용은 읽거나 수정하지 않습니다. 계정·추적·API는 갤러리에 추가하지 않습니다.
- Rationale: 방문자가 짧은 정보로 앱을 선택하고 개인 완료 여부를 확인할 수 있습니다. 저장 데이터와 공개 랭킹을 혼동하지 않습니다.
- Affected: dist/index.html, styles.css, src/projects.js, src/app.js, src/progress.js, test/, tools/check.mjs, architecture.md, README.md 및 최종 실제 캡처.
- Review: 저장 제한·오염 JSON·저장 차단·분류/검색/난이도 조합·첫 화면·키보드·작은 화면을 검증합니다. 예상 소요 시간은 실측 평균이나 보장 시간이 아닙니다. 각 앱의 완료 판정은 실제 독립 성공에 근거해야 합니다.

## D10 — 승인된 세 가지 독립 게임과 갤러리 연결

- Context: 사용자가 ECHO VAULT·PARCEL PANIC·NEON TACTICS의 높은 난도/재미/게임다운 화면을 요구하며 구현과 검증 후 바로 공개를 승인했습니다.
- Options: 기존 게임에 병합; 새 서버/실시간 순위 도입; 독립 정적 게임 세 개와 기존 갤러리 연결.
- Decision: 독립 게임의 순수 규칙/캠페인/UI를 분리하고 원본 Canvas/SVG/CSS 아트를 사용합니다. 갤러리는 구현 및 실제 플레이 검토 이후 소개·실제 캡처·실행/코드 링크만 추가합니다. 기존 12개 서비스와 개인 대표 사이트는 수정하지 않습니다.
- Rationale: 실제 플레이와 서로 다른 시각적 개성을 제공하면서 기존 정적 호스팅·개인정보·저장소 경계를 보존합니다.
- Affected: 신규 echo-vault/parcel-panic/neon-tactics; 이 저장소의 projects.js·미리보기·README·대체 링크·검증 기록. 임시 preview/QA는 공개 dist 밖의 output/playwright/three-games-20261009.
- Review: 캠페인마다 합법 해답과 실패 사례를 모델로 확인하고, 실제 브라우저 조작·작은 화면·공개 CI/파일 해시를 별도로 검증합니다. 사람의 난도·재미 평가와 포괄적 전수 검증은 주장하지 않습니다. 서버/전체 순위/방문자 영구 저장은 추가하지 않습니다.

## D09 — 검토된 개편본의 승인 후 공개 배포

- Context: 로컬 전용 검토를 마친 뒤 사용자가 기존 개편본의 배포를 명시적으로 승인하고, 신규 게임 세 개는 아이디어 제시를 요청했습니다.
- Options: 계속 로컬에만 보관; 새 호스팅/서버 도입; 기존 13개 저장소의 main 및 고정 SHA Pages 워크플로 재사용.
- Decision: 기존 갤러리와 12개 서비스의 검토된 변경만 일반 fast-forward 커밋·푸시하고 dist만 배포합니다. 강제 푸시·개인 대표 사이트 수정·외부 서버/DB/전체 랭킹 추가는 하지 않습니다. 신규 게임은 선택 전 구현·저장소 생성하지 않습니다.
- Rationale: 승인된 범위의 공개만 수행하고 독립 저장소/계산/UI 경계와 기존 무료 정적 호스팅을 유지합니다.
- Affected: 각 저장소의 승인된 변경 및 README.md, web-lab/docs/verification.md. 워크플로와 배포 권한은 기존 구성 그대로입니다.
- Review: 각 origin/remote main 일치·noreply 커밋 신원·285개 테스트·정적 검사·변경 파일 비밀 패턴/인코딩 검사를 확인합니다. 원격 CI와 공개 파일 해시 및 실제 브라우저 증거는 로컬 기록과 별도로 남깁니다.

## D08 — 로컬 개편의 소개와 실제 화면

- Context: 12개 서비스의 기능·난이도가 달라져 기존 소개와 캡처가 현재 로컬 작업본을 설명하지 못합니다.
- Options: 기존 설명·이미지 유지; 실제와 다른 목업 제작; 문서·실제 조작 검증 후 수동 갱신.
- Decision: 구현된 기능과 제한을 카탈로그에 반영하고 로컬 브라우저의 실제 화면으로 JPEG를 갱신합니다. 미리보기의 LOCAL 배너는 캡처 DOM에서만 숨기며 코드·디자인 목업이나 공개 실행 증거로 사용하지 않습니다. 정적 수동 카탈로그와 독립 서비스 구조는 유지합니다.
- Rationale: 사용자가 개편된 기능을 정확히 고를 수 있고 캡처 출처와 로컬/공개 상태를 혼동하지 않습니다. 새 개인정보·분석·실시간 API를 추가할 필요가 없습니다.
- Affected: dist/src/projects.js, dist/assets/previews/*.jpg, README.md, docs/verification.md.
- Review: 제목·미션 수·테스트 조건·라이선스 범위와 화면을 대조합니다. 미래 공개 승인은 별도이며 현재 LIVE 기록은 과거 커밋에만 해당합니다.

## D07 — 로컬 검토와 프로젝트 탐색

- Context: 사용자가 전체 서비스의 난이도·독창성을 높이고 공개 전 로컬에서 직접 검토하도록 요청했습니다.
- Options: 즉시 공개 배포; 개별 개발 서버 링크만 제공; 기존 갤러리를 유지하며 기능 검색·선택 도우미와 분리된 loopback 미리보기 사용.
- Decision: 갤러리에 메모리 내 검색과 현재 조건에서 하나를 고르는 기능을 추가합니다. 검색은 서버로 보내거나 저장하지 않으며 선택은 소개창만 열고 앱을 자동 실행하지 않습니다. 저장소의 공개 실행 링크는 유지하고 별도 로컬 미리보기 서버의 응답에서만 loopback 주소로 치환합니다. 커밋·푸시·배포는 하지 않습니다.
- Rationale: 기존 정적 갤러리/서비스 분리와 개인정보 경계를 유지하면서 사용자가 새 버전을 한곳에서 확인할 수 있습니다.
- Affected: dist/index.html, dist/styles.css, dist/src/app.js, dist/src/projects.js, test/catalog.test.js, README.md; 미리보기 도구는 공개 dist 밖의 로컬 output/playwright에 있습니다.
- Review: 검색·분류 결합, 빈 결과, 추천 반복 방지와 포커스 복귀를 확인하고 서비스 소개는 실제 구현 검증 뒤 갱신합니다. 공개 승인을 받기 전에는 기존 LIVE/CI 기록을 이번 변경의 증거로 사용하지 않습니다.

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

## D06 — 독립 실험·학습 도구 확장

- Context: 사용자가 제안된 이미지·군집·교통·논리회로·길찾기·통계 도구의 전체 구현을 승인했습니다.
- Options: 기존 서비스에 병합; 백엔드/유료 호스팅 추가; 독립 정적 서비스와 검토된 갤러리 항목 추가.
- Decision: pixel-kitchen, swarm-garden, traffic-lab, logic-foundry, route-race, data-mirage를 독립 공개 저장소와 GitHub Pages로 배포합니다. 갤러리에는 소개·실제 화면·실행·코드 링크만 등록하고 실행은 사용자의 선택에 맡깁니다.
- Rationale: 기존 릴리스를 보존하고 계산 모델·UI·검증을 분리하며 사진이나 방문자 정보의 서버 저장을 추가하지 않습니다. 제목은 개수와 무관하게 유지하고 표시 개수는 실제 카탈로그에서 계산합니다.
- Affected: dist/src/projects.js, dist/assets/previews, dist/index.html, README.md, docs/verification.md 및 독립 저장소의 architecture.md/decisions.md.
- Review: 이 변경의 실제 목록은 실험5·학습4·게임3입니다. 이 수치는 기록이며 UI 상수가 아닙니다. 새 파일 입력·영구 저장·서버 기능을 추가할 때는 별도 경계 검토가 필요합니다.
