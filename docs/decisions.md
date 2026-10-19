# Decisions

## D25 — MUSIC ROOM catalog identity (2026-10-19)

- Context: approved SCORE LAB 16-track orchestral expansion and clearer music identity. Display name becomes MUSIC ROOM · 작곡실.
- Options: new URL and migration, or retain identity/address and update display text. Decision: keep score-lab id, source/run URLs, image path and own save key. Update only its metadata, no-JS label, README and actual JPEG.
- Rationale: old links/files continue to work; gallery remains static/read-only, never runs audio or reads composition records. Other 20 entries/images unchanged.
- Affected: dist/src/projects.js, dist/index.html, dist/assets/previews/score-lab.jpg, README, focused catalog test and music-link verifier.
- Review: search/deep link/real image, 390/320 layout, 42 no-JS execution/source links, Node/static tests and separate public deployment verification.


## D24 — SENSE LAB의 6종 완료 표시와 실제 화면 / 2026-10-19

- Context: 사용자가 상세 기록은 선택 저장, 완료 여부만 WEB LAB의 n/6종 체험 완료로 표시하고 기존 기록 보존·설명/난이도 개선 후 공개를 승인했다.
- Options: 3종 표기 유지; 갤러리에서 사적인 기록을 읽어 집계; 기존 최소 요약만 읽고 6종 체험으로 표시. 마지막 방식을 선택한다.
- Decision: 새 total 6 요약은 n/6종 체험 완료로, 기존 total 3은 같은 완료 수를 유지하며 기존 기록이라고 표시한다. 상세/완료 저장 분리는 SENSE D21 소관이다. 다른 앱의 집계 형식은 변경하지 않는다. 소개와 실제 화면 JPEG를 새 기능에 맞춘다.
- Rationale: 점수·능력 평가·기록 저장 여부와 실제 체험 완료를 혼동하지 않고, 갤러리를 읽기 전용으로 유지한다. 이전 데이터 삭제나 자동 능력 추정이 없다.
- Affected: src/progress.js, app.js, projects.js, assets/previews/sense-lab.jpg, 관련 테스트/문서.
- Review: 카탈로그 전체 검사, 이전 3종/새 6종/빈 요약, 다른 탭의 완료 반영, 실제 JPEG와 공개 배포 검증. 계정/DB/랭킹/다른 앱은 변경하지 않는다.

## D23 — 인터넷보안 학습실 연결 (2026-10-15)

- Context: 사용자가 중간·기말 전체 교안 기반 학습 지원 앱의 구현·검증·Pages 배포와 WEB LAB 추가를 승인했다.
- Options: 기존 문제은행에 병합; 새 카테고리; 독립 학습 서비스 등록.
- Decision: 독립 internet-security-study의 공개 배포를 확인한 뒤 기존 학습 분류에 추가한다. 144개 개념·631문항·네 단계 학습·6개 연결 경로·60분 모의고사를 실제 구현 기준으로 소개한다. 실제 공개 실행 화면 JPEG와 코드·대체 링크를 함께 제공한다.
- Rationale: 기존 서비스와 갤러리 구조를 유지하고 단순 문제 수가 아닌 개념 이해·복습 흐름을 전달한다. 갤러리는 새 저장 키·네트워크 호출·랭킹을 추가하지 않는다.
- Affected: dist/src/projects.js, dist/index.html, dist/assets/previews/internet-security-study.jpg, README.md, test/catalog.test.js, docs/verification.md.
- Review: 등록 전 실패 테스트, 전체 카탈로그 검사, 실제 이미지·검색·학습 분류·소개창·실행 링크, CI 및 공개 바이트를 검증한다. 앱의 교안 정정·자료 확인 한계는 독립 저장소의 감사 기록을 따른다.

## D22 — 전체 경계 감사와 증거별 릴리스 판단 (2026-10-13)

- Context: 사용자가 모든 앱/갤러리/서버의 경계 테스트, 실패 재현 후 수정, 검증 후 배포와 미검증 공개를 요청했습니다. LIGHT의 원문 보존/요약 갱신 중단은 명시 승인했습니다.
- Options: 정적 검사만 반복; 모두 TDD로 통칭; 추가 coverage와 실제 RED_GREEN 및 실행 환경을 구분.
- Decision: 22개 독립 repo에 재실행 가능한 검사/보고서를 유지합니다. 오류는 수정 전 Node 또는 브라우저 실패를 기록하고 같은 검사로 재검증하며 baseline PASS와 구분합니다. Node는 기존 CI, 브라우저는 수동 실행입니다. 운영 랭킹 쓰기 없이 로컬 SQLite/workerd에서 합성 기록을 만들고 지웁니다. 로컬413 후속 proxy 오류는 미해결로 기록하고 검증된 로직 개선은 해당 한계를 명시해 배포합니다. 제한 완화/무제한 stream 읽기/실패를 숨기는 재시도는 하지 않습니다.
- Rationale: 개인 기록/공개 점수를 보호하고 개발 런타임 문제를 숨기지 않으면서 확인된 결함 수정을 전달합니다. readback은 디스크 내구성/다중 탭 원자성의 보증이 아닙니다.
- Affected: docs/edge-cases-20261013.md, docs/verification.md, test/edge-cases.test.js, tools/browser-edges.mjs, tools/verify-browser-edges.mjs, dist/assets/previews/draw-desk.jpg; 앱별 기록과 승인된 LIGHT D13.
- Review: 전체 검사, client/규칙 equality, remotes, 정확한 SHA의 CI, 공개 파일/선택 UI 및 Worker 읽기 확인을 구분합니다. Free 확인 외 새 비용/자원/스키마/보관/랭킹 범위 변경 없음. 로컬 transport·물리 기기·운영 부하는 후속 과제입니다.

## D20 — 전체 앱 자동 유지보수와 갤러리 검증 (2026-10-13)

- Context: 사용자가 정보처리기사 백업 오류와 WEB LAB 전체 앱의 오류·콘텐츠 보완을 자동 구현하도록 승인했습니다. 중대한 결정만 문의하며 멀티 에이전트를 허용했습니다.
- Options: 갤러리만 수정; 독립 앱을 합치거나 새 서버 도입; 저장소별 담당을 나누고 기존 구조에서 검증한 수정과 실제 캡처를 갱신.
- Decision: 20개 앱·갤러리·연결된 랭킹 서비스를 목록으로 관리하고, 서비스마다 담당 1명이 구현합니다. 새 DB·유료 서비스·방문 기록 수집은 추가하지 않습니다. 기존 공개 승인에 따라 검증 후 일반 푸시하며 원격 CI·실제 배포는 별도 확인합니다. 랭킹 두 게임의 공개 규칙 계약은 보존합니다.
- Rationale: 범위 누락 없이 독립 서비스와 기존 기록을 유지하고, 실제 사용 흐름에 근거해 오류와 학습/사용 콘텐츠를 보완합니다.
- Affected: maintenance-20261013.md, 갤러리 소개·미리보기, 각 독립 저장소의 수정과 결정/검증 기록.
- Review: 각 앱의 핵심 조작·실패 경로·좁은 화면, 변경 화면의 실제 JPEG, 모든 갤러리 링크·소개창·검색을 확인합니다. 전체 입력의 무결점이나 시험 합격 확률을 주장하지 않습니다.

## D21 — 완료 요약 갱신 중 키보드 포커스 유지 (2026-10-13)

- Context: 다른 탭의 완료 요약이 갱신되면 전체 카드가 다시 만들어져, 열어둔 소개창을 닫은 뒤 포커스가 원래 버튼으로 돌아가지 않았습니다. 독립 브라우저에서 BODY로 이동하는 현상을 재현했습니다.
- Options: 새 카드에서 포커스를 다시 탐색; 기존 카드의 완료 문구만 갱신.
- Decision: 진행 요약 변경 시 해당 문구와 열린 소개창의 문구만 바꿉니다. 검색/분류 변경은 기존 전체 렌더링을 사용합니다.
- Rationale: 소개창의 원래 버튼과 키보드 위치, 이미지 로딩 상태를 보존하며 저장 데이터를 더 읽거나 쓰지 않습니다.
- Affected: dist/src/app.js, maintenance QA.
- Review: 실제 storage 이벤트 후 버튼 클릭/Escape 닫기, 포커스 복귀, 필터와 완료 숫자 동시 확인.

## D19 — 실기 학습실 재검토와 실제 화면 갱신 (2026-10-12)

- Context: 사용자가 88개 개념·304문항의 시험 대비 충분성, TDD 재검토와 미수록 범위의 문제화를 요청했습니다.
- Options: 숫자만 갱신; 전체 갤러리/저장 구조 개편; 검증한 학습실 항목과 실제 화면만 갱신.
- Decision: engineer-practice의 134개 개념·70개 응용 유형·583문항과 범위별 문제 연결을 소개하고 실제 Chrome JPEG를 교체합니다. 이 수치는 변형 포함 수이며 공식 합격 확률이 아닙니다. 다른 19개 항목과 19개 캡처·공유 요약 읽기·호스팅은 그대로 둡니다.
- Rationale: 공개 UI와 소개를 맞추고 비공개 학습 기록·DB·랭킹 기능을 갤러리에 추가하지 않습니다. 임시 MySQL/PostgreSQL은 학습 앱의 개발/CI 검증 도구이지 서비스 DB가 아닙니다.
- Affected: dist/src/projects.js, dist/assets/previews/engineer-practice.jpg, test/catalog.test.js, docs/verification.md.
- Review: 별도 원격 CI와 공개 파일·소개창·미리보기 로드 확인. 다른 앱의 전체 기능 재감사는 범위 밖입니다.

## D18 — 국가자격 학습실과 시간차 구분 연결 (2026-10-12)

- Context: 사용자가 SENSE LAB의 유사 시간 지각 실험과 정보처리기사 실기 학습 앱을 승인하고, 명칭과 실제 캡처 갱신을 요청했습니다.
- Options: 기존 문제은행 병합·백엔드 추가; 독립 정적 학습 앱과 읽기 전용 갤러리 항목.
- Decision: `engineer-practice`를 ‘정보처리기사 실기 학습실’로 등록합니다. SENSE LAB은 임상 CFF 검사가 아닌 작은 두 점의 시간차 구분으로 소개합니다. 두 앱의 실제 Chrome 캡처만 갱신하며 다른 항목·미리보기·개인 완료 저장 정책은 유지합니다.
- Rationale: 정확한 목적과 검증된 기능만 소개하며 새 DB·서버·공유 기록 쓰기를 추가하지 않습니다.
- Affected: dist/src/projects.js, dist/index.html, dist/assets/previews/{engineer-practice,sense-lab}.jpg, README.md, test/catalog.test.js, docs/verification.md.
- Review: 학습실의 새 URL 공개가 확인된 후 갤러리를 공개합니다. 전체/학습 개수·검색·소개창·좁은 화면·실행 링크를 검증합니다. 304문항은 고정 조건 변형을 포함하며 304개 독립 유형이 아닙니다.

## D17 — 부드러운 이동 UI의 실제 미리보기

- Context: 사용자가 CLAY ROOM의 객체/카메라 키 이동을 부드럽게 하고 객체 이동에서 카메라로 돌아가는 방법을 명확히 하도록 요청했습니다.
- Options: 기존 사진 유지; 설명과 전체 카탈로그 개편; 바뀐 이동 표시·카메라 복귀 버튼이 보이는 실제 앱 사진만 교체.
- Decision: 실제 1440×1000 JPEG와 이 검증/결정 기록만 갱신합니다. 19개 프로젝트 메타데이터와 다른 18개 JPEG, 갤러리의 읽기 전용 요약·호스팅·랭킹 경계는 유지합니다.
- Rationale: 실제 UI와 미리보기를 맞추되 요청 범위 밖 소개·저장·서버를 변경하지 않습니다. 키 이동 정책/구현은 clay-room D07에 기록합니다.
- Affected: dist/assets/previews/clay-room.jpg, docs/decisions.md, docs/verification.md.
- Review: 다른 자료의 동일 bytes, 전체 카탈로그 검사, 실제 JPEG decode·실행 링크·작은 화면과 공개 파일을 확인합니다. 다른 앱 전체 재검증은 별도입니다.

## D16 — 조각 공방의 선택·이동 조작과 실제 미리보기

- Context: 사용자가 CLAY ROOM에 방향키/WASD 카메라 이동, 클릭 선택, 마우스·키보드 객체 이동, 창작을 방해하지 않는 선택 표시를 요청했습니다.
- Options: 기존 소개·사진 유지; 새 기능을 가상 이미지로 홍보; 해당 앱의 실제 브라우저 화면과 구현한 조작만 반영.
- Decision: CLAY ROOM의 목적·첫 기능 문구와 실제 JPEG만 갱신합니다. 다른 18개 프로젝트·이미지, 갤러리의 읽기 전용 요약과 기존 호스팅·랭킹 구조는 그대로 둡니다.
- Rationale: 실제 공개 기능과 미리보기를 일치시키며 새로운 저장·서버·계정을 추가하지 않습니다. 선택 테두리는 화면 표시이며 작품 출력에 포함하지 않습니다.
- Affected: dist/src/projects.js, dist/assets/previews/clay-room.jpg, docs/verification.md. 조작·선택 표시의 정책과 구조는 clay-room D06에 기록합니다.
- Review: 실제 클릭·마우스/키보드 이동·미세 간격·취소·테두리·출력·작은 화면과 갤러리 소개/이미지를 확인합니다. 다른 앱 전체 기능 및 물리 기기 검증은 별도 범위입니다.

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
