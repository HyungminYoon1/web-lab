# 전체 앱 엣지케이스 감사 — 2026-10-13

상태: 검증한 수정본 배포 완료. 랭킹 로컬 transport 1건은 미해결로 남깁니다. 앞선 [유지보수](maintenance-20261013.md)와 구분하는 새로운 테스트 중심 감사입니다.

## 범위와 결과의 의미

20개 앱, WEB LAB, 랭킹 서버의 22개 독립 저장소를 대상으로 했습니다. 기능·기존 테스트를 목록화하고 정상/경계/실패/취소/지연/저장/화면 상태를 선정했습니다. Node 검사는 기존 760개에서 **1,014개(+254개)**로 늘었습니다. Node가 보고한 subtest 수이며 서버의 기존 helper module 2개도 포함합니다. 브라우저 시나리오·문제은행 개수·독립 학습 역량 수와 합산하지 않습니다.

- **실패 재현 → 수정 → 같은 검사 통과**: 확인한 오류는 production 변경 전에 Node 또는 실제 브라우저로 재현했습니다. 앱별 문서에 BEFORE assertion을 남겼습니다.
- **처음부터 통과한 추가 검사**: 누락된 coverage이며 오류 수정/TDD RED_GREEN으로 부르지 않습니다. WEB LAB 신규8개는 이 경우입니다.
- DATA MIRAGE의 오래된 다음 문제 콜백은 실제 브라우저 실패를 먼저 확인했고 Node DOM 회귀는 그 후 추가했습니다. 모든 오류가 Node 검사부터 시작했다고 주장하지 않습니다.
- 새 Node 검사는 기존 CI의 `npm test`에 포함됩니다. 브라우저 도구는 반복 실행 가능하지만 현재 CI에서는 실행하지 않는 수동 검증입니다.
- 격리된 Chrome에서 앱별 핵심 조작·실패 경로·1440/390/320px를 확인했습니다. 모의 저장소/네트워크/시계/키보드 이벤트는 별도 표시했습니다. 사용자 브라우저의 개인 기록은 사용하거나 초기화하지 않았습니다.
- 모든 입력 조합·기기·무결점·시험 합격률·사람이 느끼는 재미/난이도를 보증하지 않습니다.

## 앱별 검증·수정·미검증 범위

신규/전체는 Node subtest 증가분/최종 수입니다. 각 저장소 `docs/edge-cases-20261013.md`에 실제 test name, BEFORE assertion, 실행 명령, 소스 범위와 브라우저 증거가 있습니다. 아래 공통 미검증 사항도 모든 행에 적용됩니다.

| 앱 | 신규 / 전체 | 이번 보완 및 검증 | 개별 미검증·한계 |
| --- | ---: | --- | --- |
| 정보처리기사 실기 학습실 | 12 / 46 | SQL 따옴표 내부 전각/공백 오채점, 취소·삭제된 시험의 늦은 제출, 늦은 백업 복원, 날짜 입력 수정. 이전 채점 보존/현행과 차이 안내. 답/백업/북마크/세션 상한·마감·중복 제출 | 임의 SQL 동등성, 모든 서술형/공식 채점, 합격률, 실제 장기 복습 |
| THINK FORGE | 13 / 104 | IME 확정→답안 제출, 오래된 선택지→새 문제 적용, 취소 후 시험 타이머 수정·검증 | 모든 생성 조합의 전문가 검수, 실제 OS IME 후보창 |
| DATA MIRAGE | 11 / 54 | 오래된 다음 버튼이 새 문제를 넘기는 문제; 수치·계산·입력·학습 전환 경계 | 모든 통계 해설의 외부 검수·난수 표본 |
| ELEMENT ATLAS | 8 / 27 | 늦은 다음 문제, IME, 파일 읽기 실패/늦은 백업의 덮어쓰기; 원소·문항 무결성 | 사진의 물리적 순도, 전체 화학 사실 외부 전문가 검수 |
| DRAW DESK | 20 / 28 | UTF-8 바이트 상한, 늦은 파일 열기가 새 편집/미확정 입력을 덮는 문제, 320px 확대율 잘림; 실제 편집·출력 | 모든 펜/압력 장치, 최대 캔버스·메모리/GPU |
| SCORE LAB | 22 / 30 | 문자열 박자값 거부, UTF-8 가져오기/자동저장 상한, 늦은 복원; 실제 MIDI/MusicXML/WAV/SVG/PDF | 외부 DAW/악보 앱 전종 호환·청감/오디오 지연 |
| CLAY ROOM | 22 / 50 | 큰 유한 절단 법선 overflow, 늦은 파일 복원; 실제 분할·객체 조작·undo·GLB/STL/4K PNG | 모든 메시 위상·프린터 적합성, 모바일 GPU/최대 메모리 |
| ECHO VAULT | 6 / 54 | 저장 무시 시 성공 오표시를 readback으로 수정, IME; 실제 완료·종료·저장 실패 | 모든 미로/seed, 사람 대상 난이도 |
| NEON TACTICS | 6 / 50 | 저장/삭제 실패 상태 보존, IME, 공통 랭킹 client 늦은 응답·ID 교체·취소/통신 오류 | 모든 전술/최적해, 운영 점수 쓰기·부하 |
| PARCEL PANIC | 7 / 53 | 개인 기록 readback·IME·공통 랭킹 client 경합/잘못된 응답, 실제 최고 과제 조작 | 모든 배치/최적 점수, 운영 점수 쓰기·부하 |
| LIGHT ROUTE | 18 / 41 | readback·IME; 승인된 손상 요약 원문 보존·갱신/삭제 중단, 개인 진행 유지·8KiB 경계·peer/no-op | 모든 seed 수동 완료·최단 해법, 여러 탭 원자성 |
| ORBIT COURIER | 9 / 45 | IME/반복 Space의 의도치 않은 발사 방지, 물리 수치·미션/입력 경계 | 정밀 천체 모형, 모든 초기 조건 |
| POCKET CITY | 9 / 43 | 이전 타일의 늦은 클릭이 새 도시를 바꾸는 문제, 자원·종료/이력 경계 | 모든 지도/장기 경제·최적 정책 |
| ROUTE RACE | 5 / 31 | IME 확정/방향키가 격자 편집에 섞이는 문제, 경로/좌표/편집 경계 | 모든 크기/장애물 조합 UI |
| LOGIC FOUNDRY | 10 / 53 | 늦은 파일 성공/실패가 새 회로·초기화를 덮는 문제, 회로·신호·import 경계 | 임의 회로 전체, 실제 하드웨어 지연 |
| SENSE LAB | 8 / 44 | 구멍 난 타이밍 표본/간격을 유효 결과로 취급하는 문제, 감각 과제 수치·저장 경계 | 의학적 타당성·패널/스피커 정확도. 자극/진단 확대 없음 |
| PACKET JOURNEY | 8 / 61 | 개인/공유 저장·삭제의 readback, 상태 전이·입력 경계 | 실제 패킷/지연 측정 아님, 모든 통신 장애 |
| PIXEL KITCHEN | 8 / 34 | 무시/변조된 preset 쓰기·삭제의 성공 오표시, 8192/8193·필터/알파·취소 | 모든 코덱·색관리·초대형 파일/메모리 |
| SWARM GARDEN | 9 / 46 | 개인/요약 readback, 손상된 빈 문자열 요약 덮어쓰기, 군집 수치·저장 | 생물학적 타당성, 모든 seed·장시간 부하 |
| TRAFFIC LAB | 8 / 48 | readback·구멍 난 정책 배열·삭제 후 늦은 import가 정책을 되살리는 문제 | 실제 도로 모형 보정, 모든 교통/정책 조합 |
| WEB LAB | 8 / 25 | 검색120/121·필터/빈 결과·임의 선택·hash·요약6000/6001·ID/손상 객체. 실제 dialog/포커스·2탭 storage·저장 거부·no-JS40링크 | 모든 브라우저·보조기술, 외부 링크 지속 가용성 |
| 랭킹 서버/공통 client | 27 / 47 | 인증 지연 중 만료/수명·game ID·거부된 body 정리·늦은 인증/삭제·잘못된 순위/시작/삭제 응답. 동시 제출·중복·정원·보관·동점·자기 기록 삭제 | 아래 로컬413 후속 오류 PARTIAL. 운영 쓰기·부하·장기 보관·사람만 참여하는 공정성 NOT_RUN |

## 별도 실행 검증

- 정보처리기사: 실제 C72/Java56/Python56/SQLite95 = **279개**, PostgreSQL DCL5/MySQL procedure5/function5 = **15개** 실행 PASS. 모든 시험 지식이 네이티브 실행으로 입증되는 것은 아닙니다. 임시 컨테이너는 검증용으로만 사용 후 제거했으며 앱에 DB를 추가하지 않았습니다.
- 통합 도구 `tools/verify-browser-edges.mjs`: 갤러리22검사+저장 거부/no-JS2시나리오, 실기20검사/시나리오, 랭킹 실제 로컬 연동16검사와 게임별 오류 fixture6개씩. 이종 검사를 Node 수에 더하지 않습니다.
- NEON16/4280점·PARCEL14/1457점을 실제 브라우저 조작으로 완료하고 로컬 Worker가 replay를 재계산하여 등록·조회·삭제했습니다. 정확한 API origin만 로컬에 연결했으며 운영 POST/DELETE0. 네트워크/429/잘못된 응답은 별도 fixture입니다.
- 랭킹 client3개와 고정 규칙8파일 equality·서버 manifest를 검사합니다. 버전/점수/보관/정원/스키마 유지.
- DRAW DESK 정상 UI 변경으로 실제1440×1000 JPEG를 갤러리에 갱신했습니다. 다른 정상 대표 화면은 그대로이며 실패 상태/채점 차이는 QA 캡처로 확인했습니다. 목업은 사용하지 않았습니다.

## 해결되지 않은 로컬 랭킹 transport 경계

로컬32검사 HTTP 도구가 한 차례 전체 통과했으나 반복 실행 시 대용량 요청413 후 다음 작은 요청에 간헐적 `500 Network connection lost`가 관찰됐고 Wrangler 요청 stream 로그가 동반됐습니다. header 거부 body 취소 수정 전후 모두 발생하므로 해결됐다고 주장하지 않습니다. 일반 브라우저 완료/등록/조회/삭제는 재시도 없이 통과했습니다.

[Cloudflare SDK 유사 보고](https://github.com/cloudflare/workers-sdk/issues/15709)는 단서이지 원인 확정/운영 영향의 증명이 아닙니다. 48KiB 제한 완화·무제한 body 읽기·재시도로 실패 숨기기를 하지 않았습니다. **로컬 transport PARTIAL/미해결, 운영 재현 NOT_RUN**입니다. 검증된 로직 개선은 해당 한계를 명시해 배포하는 결정을 D22에 기록합니다.

## 소스 검토와 공통 미검증 사항

- **VERIFIED**: 22개 repo 모두 inventory. 담당자가 권한 문서와 직접 관련 구현/기존·신규 검사/배포 설정을 읽었고 통합 담당은 production diff를 검토하고 전체 검사를 별도 재실행했습니다. 파일별 범위는 각 앱 문서에 있습니다.
- **PARTIAL**: repo 전체 줄 단위 재감사는 아닙니다. vendor 내부·미변경 스타일/이미지/과거 이력은 관련 부분만 선별했습니다. 목록 조사를 전체 파일 검토로 표현하지 않습니다.
- **NOT_INSPECTED**: `.env`/인증값/개인 기록/다른 계정 프로젝트/무관한 파일. 테스트 산출물·비밀·사용자 데이터를 공개 dist에 넣지 않습니다.
- **NOT_RUN**: 실제 OS IME·물리 터치/펜/음향/패널, Safari/Firefox 전수·스크린리더 전체, 실제 eviction/디스크 내구성, localStorage 다중 탭 원자성, 모든 비동기 순서, 장기 스트레스·운영 악용/부하·재해복구. 합성 장애 검사를 실물 검증으로 표현하지 않습니다.
- 공개 확인은 파일/선택 조작이며 모든 로컬 브라우저 검사의 운영 재실행이 아닙니다. LOCAL 증거는 각 repo ignored output/.qa 및 상위 `output/playwright/edge-20261013`에 보관합니다.

## 담당·구조 보존

주 담당은 engineer-practice/WEB LAB/서버와 통합을, 겹치지 않는 보조 담당은 학습·게임·시뮬레이션에 gpt-6.1 Sol, 창작·실험에 gpt-6 Astra를 사용했습니다. 같은 서비스에 두 구현 담당을 동시에 두지 않았습니다. 공통 client는 반환 후 주 담당이 통합했습니다.

독립 Pages·계층·저장 키·스키마·기록·무료 호스팅 유지. 서버는 기존 Worker+SQLite Durable Object이며 Neon/D1/새 자원/요금제 추가 없음. 랭킹은 기존 최고 과제2개만 유지합니다. LIGHT의 손상 요약 정책은 사용자 명시 승인 후 문서와 충돌 테스트를 함께 바꿨으며 검사를 통과시키기 위한 임의 완화가 아닙니다.

## 공개 배포 증거

2026-10-13 16:02 KST 확인. 22개 저장소 origin/main과 noreply identity를 검증한 뒤 normal fast-forward로 push했습니다. 구현 SHA의 CI **22/22 SUCCESS**, Pages **21개/371개 공개 파일 HTTP200 및 로컬 bytes/SHA256 일치**, 공개 브라우저 **21/21 PASS**입니다.

공개 Chrome은 각 앱의 로드·텍스트·1440/390/320px 가로 넘침/예외/실패 응답을 확인했습니다. 갤러리20카드·빈 검색·새 DRAW 미리보기·Escape 포커스·소개 링크, 실기 빈 답안/실제 채점/중복 제출 잠금, 두 게임의 실제 순위 보기 GET200도 확인했습니다. 다른 모든 로컬 회귀를 공개에서 반복한 것은 아닙니다. 관찰한 page error/실패 HTTP0, 공개 POST/DELETE0입니다.

랭킹 서버 source `08db8b6852a05f113a720f24a1651fa5130561d6`, Worker version `e1346b26-4bbf-4630-ad9c-bb2645669c0c`로 배포했습니다. 직전 계정 UI의 Free/$0/Current plan 확인, 새 자원/요금/스키마/권한 변경 없음. 운영 /health와 두 /v1/boards가 HTTP200, 허용 Origin CORS 일치, 각 entries0으로 응답했습니다. 운영 쓰기/부하/413 재현은 NOT_RUN이며 위 로컬 미해결 항목을 유지합니다.

| 저장소 / 앱별 상세 기록 | 검증·배포한 구현 commit | 해당 commit CI | 공개 파일 수 |
| --- | --- | --- | ---: |
| [clay-room](https://github.com/HyungminYoon1/clay-room/blob/main/docs/edge-cases-20261013.md) | [0958230b](https://github.com/HyungminYoon1/clay-room/commit/0958230b4a63c5f459b2e2cae0ce204999f66983) | [SUCCESS](https://github.com/HyungminYoon1/clay-room/actions/runs/38359870274) | 17 |
| [data-mirage](https://github.com/HyungminYoon1/data-mirage/blob/main/docs/edge-cases-20261013.md) | [45d4e0ce](https://github.com/HyungminYoon1/data-mirage/commit/45d4e0ce4fe9f9ddf73f81956168a6705252fa72) | [SUCCESS](https://github.com/HyungminYoon1/data-mirage/actions/runs/38359869614) | 16 |
| [draw-desk](https://github.com/HyungminYoon1/draw-desk/blob/main/docs/edge-cases-20261013.md) | [98a93904](https://github.com/HyungminYoon1/draw-desk/commit/98a9390470b0f5c78210e016361a3d0f4e437c3a) | [SUCCESS](https://github.com/HyungminYoon1/draw-desk/actions/runs/38359869802) | 8 |
| [echo-vault](https://github.com/HyungminYoon1/echo-vault/blob/main/docs/edge-cases-20261013.md) | [b22f6bba](https://github.com/HyungminYoon1/echo-vault/commit/b22f6bba1262e69a9688f08eb0e969c4b2f45a83) | [SUCCESS](https://github.com/HyungminYoon1/echo-vault/actions/runs/38359875947) | 10 |
| [element-atlas](https://github.com/HyungminYoon1/element-atlas/blob/main/docs/edge-cases-20261013.md) | [41cef9ab](https://github.com/HyungminYoon1/element-atlas/commit/41cef9ab593e5626629e185f50e9f73b9ef24799) | [SUCCESS](https://github.com/HyungminYoon1/element-atlas/actions/runs/38359876498) | 114 |
| [engineer-practice](https://github.com/HyungminYoon1/engineer-practice/blob/main/docs/edge-cases-20261013.md) | [905e34b6](https://github.com/HyungminYoon1/engineer-practice/commit/905e34b6519c5428b8c0204c51d2fbc8f1d1772e) | [SUCCESS](https://github.com/HyungminYoon1/engineer-practice/actions/runs/38359875875) | 11 |
| [light-route](https://github.com/HyungminYoon1/light-route/blob/main/docs/edge-cases-20261013.md) | [c5d28589](https://github.com/HyungminYoon1/light-route/commit/c5d285892f0b8c67ceb064473f3ef1082e9bf90f) | [SUCCESS](https://github.com/HyungminYoon1/light-route/actions/runs/38359882251) | 9 |
| [logic-foundry](https://github.com/HyungminYoon1/logic-foundry/blob/main/docs/edge-cases-20261013.md) | [25cf82c3](https://github.com/HyungminYoon1/logic-foundry/commit/25cf82c3f776f26079f21ea93bd015160b051d9a) | [SUCCESS](https://github.com/HyungminYoon1/logic-foundry/actions/runs/38359882762) | 9 |
| [neon-tactics](https://github.com/HyungminYoon1/neon-tactics/blob/main/docs/edge-cases-20261013.md) | [0fe0a839](https://github.com/HyungminYoon1/neon-tactics/commit/0fe0a83949f5ab38bd57d266c13e24273a7d0407) | [SUCCESS](https://github.com/HyungminYoon1/neon-tactics/actions/runs/38359882935) | 14 |
| [orbit-courier](https://github.com/HyungminYoon1/orbit-courier/blob/main/docs/edge-cases-20261013.md) | [27645524](https://github.com/HyungminYoon1/orbit-courier/commit/27645524d0f390e548ed937570b9d60b607c988c) | [SUCCESS](https://github.com/HyungminYoon1/orbit-courier/actions/runs/38359889260) | 9 |
| [packet-journey](https://github.com/HyungminYoon1/packet-journey/blob/main/docs/edge-cases-20261013.md) | [a38bdbe0](https://github.com/HyungminYoon1/packet-journey/commit/a38bdbe0392a656c9601b626a32d08c796c1e5ff) | [SUCCESS](https://github.com/HyungminYoon1/packet-journey/actions/runs/38359889588) | 7 |
| [parcel-panic](https://github.com/HyungminYoon1/parcel-panic/blob/main/docs/edge-cases-20261013.md) | [d8e8d8f0](https://github.com/HyungminYoon1/parcel-panic/commit/d8e8d8f0cc6ca7b49bda38e45b45293fdbe8a9c0) | [SUCCESS](https://github.com/HyungminYoon1/parcel-panic/actions/runs/38359889300) | 17 |
| [pixel-kitchen](https://github.com/HyungminYoon1/pixel-kitchen/blob/main/docs/edge-cases-20261013.md) | [19a72673](https://github.com/HyungminYoon1/pixel-kitchen/commit/19a72673e87b181b89b6033ecf2825cdb7abc80b) | [SUCCESS](https://github.com/HyungminYoon1/pixel-kitchen/actions/runs/38359894919) | 8 |
| [pocket-city](https://github.com/HyungminYoon1/pocket-city/blob/main/docs/edge-cases-20261013.md) | [0274c194](https://github.com/HyungminYoon1/pocket-city/commit/0274c1941fc94c9fce89076068ccd7e3f0deda30) | [SUCCESS](https://github.com/HyungminYoon1/pocket-city/actions/runs/38359895397) | 9 |
| [route-race](https://github.com/HyungminYoon1/route-race/blob/main/docs/edge-cases-20261013.md) | [70b2a570](https://github.com/HyungminYoon1/route-race/commit/70b2a57025811df012a73b30567a228af95814f7) | [SUCCESS](https://github.com/HyungminYoon1/route-race/actions/runs/38359895376) | 8 |
| [score-lab](https://github.com/HyungminYoon1/score-lab/blob/main/docs/edge-cases-20261013.md) | [ae4e97e5](https://github.com/HyungminYoon1/score-lab/commit/ae4e97e5a310ec7bc3d76fb0cdcfd5a1284c8bab) | [SUCCESS](https://github.com/HyungminYoon1/score-lab/actions/runs/38359901208) | 30 |
| [sense-lab](https://github.com/HyungminYoon1/sense-lab/blob/main/docs/edge-cases-20261013.md) | [37d339c0](https://github.com/HyungminYoon1/sense-lab/commit/37d339c02bfc716412fff59785745860c87320f8) | [SUCCESS](https://github.com/HyungminYoon1/sense-lab/actions/runs/38359900076) | 16 |
| [swarm-garden](https://github.com/HyungminYoon1/swarm-garden/blob/main/docs/edge-cases-20261013.md) | [67cfde85](https://github.com/HyungminYoon1/swarm-garden/commit/67cfde8529ab989b36af58d31373267bb028792b) | [SUCCESS](https://github.com/HyungminYoon1/swarm-garden/actions/runs/38359899568) | 9 |
| [think-forge](https://github.com/HyungminYoon1/think-forge/blob/main/docs/edge-cases-20261013.md) | [6acca2ee](https://github.com/HyungminYoon1/think-forge/commit/6acca2eea2b72cd10cbfb2bdb2f2e49f66d8079f) | [SUCCESS](https://github.com/HyungminYoon1/think-forge/actions/runs/38359906447) | 16 |
| [traffic-lab](https://github.com/HyungminYoon1/traffic-lab/blob/main/docs/edge-cases-20261013.md) | [6bbcba7d](https://github.com/HyungminYoon1/traffic-lab/commit/6bbcba7dc3af73857c90c619d69cf07630cb62c1) | [SUCCESS](https://github.com/HyungminYoon1/traffic-lab/actions/runs/38359906451) | 9 |
| [web-lab](https://github.com/HyungminYoon1/web-lab/blob/main/docs/edge-cases-20261013.md) | [59f48792](https://github.com/HyungminYoon1/web-lab/commit/59f48792be9bf91afdbe1da8116c07041026e654) | [SUCCESS](https://github.com/HyungminYoon1/web-lab/actions/runs/38359907826) | 25 |
| [web-lab-ranking](https://github.com/HyungminYoon1/web-lab-ranking/blob/main/docs/edge-cases-20261013.md) | [08db8b68](https://github.com/HyungminYoon1/web-lab-ranking/commit/08db8b6852a05f113a720f24a1651fa5130561d6) | [SUCCESS](https://github.com/HyungminYoon1/web-lab-ranking/actions/runs/38359911949) | 별도 Worker |

상위 ignored QA의 checks.json, release-git.json, release-ci.json, live-files.json, live-browser.json, worker-release.json에 실제 결과를 보관합니다. 이 표를 추가하는 후속 commit은 WEB LAB 문서만 변경하며 검증한 공개 dist를 변경하지 않습니다.
