# Verification record

## 전체 보완본 공개 배포 — 2026-10-09 / REMOTE_CI + LIVE

- Authorization: 사용자 승인 범위인 전체 앱 보완·문구 정리·미리보기 갱신·무료 서버 구축과 선택적 공개 랭킹을 구현하고 정상 fast-forward로 게시했습니다. 개인 대표 사이트·무관한 파일·유료 요금제를 변경하지 않았습니다.
- REMOTE_CI: 아래 17개 구현 커밋의 워크플로가 completed/success입니다. 정적 사이트 16개는 verify/deploy, API 저장소는 check입니다. GitHub의 API 소스 검증은 Worker 배포 증거가 아니며 실제 Worker 버전과 HTTP/SQLite 검증은 별도로 기록합니다.

| 저장소 | 공개 검증한 구현 커밋 | 원격 CI | 공개 파일 |
| --- | --- | --- | --- |
| web-lab | 3aca7555e3c908dc7207c52594862092547eb459 | [verify/deploy PASS](https://github.com/HyungminYoon1/web-lab/actions/runs/37902067174) | 20/20 HTTP200·SHA-256 일치 |
| echo-vault | 94a47ba8b999a26ce5b6cd8cd261bfaa0e8b327d | [verify/deploy PASS](https://github.com/HyungminYoon1/echo-vault/actions/runs/37901872816) | 10/10 HTTP200·SHA-256 일치 |
| parcel-panic | 4390a004db55be9fe6db99e073b10133267d98fd | [verify/deploy PASS](https://github.com/HyungminYoon1/parcel-panic/actions/runs/37901872838) | 15/15 HTTP200·SHA-256 일치 |
| neon-tactics | fbec5cae1381d6e3b519ed1ca7d8b1df41a6da12 | [verify/deploy PASS](https://github.com/HyungminYoon1/neon-tactics/actions/runs/37901872568) | 14/14 HTTP200·SHA-256 일치 |
| sense-lab | 9fe8e0de912e020b7f423b847c2480bf383ebbc0 | [verify/deploy PASS](https://github.com/HyungminYoon1/sense-lab/actions/runs/37902042834) | 11/11 HTTP200·SHA-256 일치 |
| packet-journey | 7c6c26d02b217fd0e26d398615c3fe7c54add741 | [verify/deploy PASS](https://github.com/HyungminYoon1/packet-journey/actions/runs/37901880470) | 7/7 HTTP200·SHA-256 일치 |
| think-forge | fdf3d071e3fd596d1c2a872d069ac762f08f0a9c | [verify/deploy PASS](https://github.com/HyungminYoon1/think-forge/actions/runs/37901881482) | 15/15 HTTP200·SHA-256 일치 |
| orbit-courier | 04a410ee884c685cab8d6204d9f33d0073bca19a | [verify/deploy PASS](https://github.com/HyungminYoon1/orbit-courier/actions/runs/37902042664) | 9/9 HTTP200·SHA-256 일치 |
| light-route | b6af395ff035d7f29979b91ca5c39bea87282082 | [verify/deploy PASS](https://github.com/HyungminYoon1/light-route/actions/runs/37902042781) | 9/9 HTTP200·SHA-256 일치 |
| pocket-city | 21df1274c549d8ee1c62632f34f9677bf84fd683 | [verify/deploy PASS](https://github.com/HyungminYoon1/pocket-city/actions/runs/37902049418) | 9/9 HTTP200·SHA-256 일치 |
| pixel-kitchen | 4011917fcd29bc1996ba3cb3b758d9f1a4aa3704 | [verify/deploy PASS](https://github.com/HyungminYoon1/pixel-kitchen/actions/runs/37902050078) | 8/8 HTTP200·SHA-256 일치 |
| swarm-garden | ae3a8c494b7b96f2dfaacfd06934e48aeba3d84f | [verify/deploy PASS](https://github.com/HyungminYoon1/swarm-garden/actions/runs/37902051522) | 9/9 HTTP200·SHA-256 일치 |
| traffic-lab | 35da8f490384bde1176091ef44a5a7cbf9c2d697 | [verify/deploy PASS](https://github.com/HyungminYoon1/traffic-lab/actions/runs/37902056910) | 9/9 HTTP200·SHA-256 일치 |
| logic-foundry | 54b263c5c7cab737d62933963bb76c7395d0e3f9 | [verify/deploy PASS](https://github.com/HyungminYoon1/logic-foundry/actions/runs/37902057884) | 9/9 HTTP200·SHA-256 일치 |
| route-race | a676934bf0750fd36827986df2fd25877999dbbd | [verify/deploy PASS](https://github.com/HyungminYoon1/route-race/actions/runs/37902058004) | 8/8 HTTP200·SHA-256 일치 |
| data-mirage | d4535d1b89dc08ed5314e87c31969e23ce7fc5da | [verify/deploy PASS](https://github.com/HyungminYoon1/data-mirage/actions/runs/37902064158) | 12/12 HTTP200·SHA-256 일치 |
| web-lab-ranking | 775a933a50263e2f8efbf1e6cec2ae6d87426ba0 | [check PASS](https://github.com/HyungminYoon1/web-lab-ranking/actions/runs/37902068531) | 별도 Worker API / LIVE 아래 |

- LIVE_FILES: 2026-10-09 17:01 KST, 16개 공개 사이트의 dist 전체 174/174 파일이 직접 공개 URL에서 HTTP200을 반환했고 검증한 로컬 SHA-256과 일치했습니다. 갤러리의 실제 새 미리보기 JPEG 15개를 포함합니다.
- LIVE_INITIAL: headless Chromium, 1440×1000 / 390×900 / 320×900에서 16개 공개 사이트를 확인했습니다. 문서 가로 넘침·관찰한 페이지/콘솔 오류 없음. 최초 fetch/XHR/WebSocket은 각 사이트 0입니다. 이 검사는 모든 게임의 완주나 물리 기기 검증이 아닙니다.
- LIVE_GALLERY: 공개 갤러리의 15개 이미지 정상 디코딩, 320px 소개창·닫기·가로 넘침 없음, 변경된 랭킹 안내를 확인했습니다. 검색/필터/진행 요약·탭 간 기록 격리는 아래 LOCAL 상세 검증과 구분합니다.
- LIVE_BROWSER_AND_LIVE_SQLITE_API: 실제 공개 PARCEL PANIC 계약14와 NEON TACTICS 임무16을 정상 설비/회전/키보드/명령 확인으로 완료했습니다. 서버 검증 점수는 각각1457/4280입니다. 사용자의 명시적 시작·등록·조회·인증 삭제 흐름 PASS; 완료창을 닫아도 재생 기록이 유지되고 320px에서 등록·삭제 가능합니다. 390/320px 문서 가로 넘침·관찰한 오류 없음. API 요청10개는 모두 승인된 정확한 Worker origin이며 다른 origin 요청0. 두 공개 보드에서 QA 기록 삭제를 확인했습니다.
- QA distinction: 첫 공개 검증 도구는 등록 상태 문구 직후 비동기 보드 조회를 기다리지 않아 조기 실패했습니다. 이미 등록된 QA 기록을 실제 인증 삭제로 제거하고 도구에서 보드 응답을 기다린 뒤 두 게임 전체 흐름을 다시 실행해 PASS를 확인했습니다. 앱 코드는 이 도구 수정으로 변경하지 않았습니다. 자격 증명/요청 본문은 로그에 남기지 않았습니다.
- RANKING_SCOPE: 고정된 최종 두 과제만 공개 경쟁입니다. 서버가 입력을 재실행하며 클라이언트 점수는 받지 않습니다. 같은 성과는 같은 순위이고 등록 시각/기기 속도/현실 시간이 점수에 영향을 주지 않습니다. 다른 13개 앱의 기록은 공개하지 않습니다. 인간만 플레이하거나 한 사람당 하나의 신원임을 보장하지는 않습니다.
- FREE_BACKEND: Workers Free + SQLite Durable Object, 실제 공개 API/DB 동작 확인. 유료 전환·카드 등록·Neon/D1·배포 비밀값 게시 없음. 무료 한도와 별도 요청/저장 상한을 넘으면 거절합니다. provider 전체 계정의 과금/사용량을 제어하는 장치는 아닙니다. [API 구조·제한·삭제 정책·LIVE 증거](https://github.com/HyungminYoon1/web-lab-ranking).
- LOCAL / PREVIEWS / COPY: 아래 통합 기록의 622개 Node 집계·15개 선택 브라우저 흐름·새 실제 캡처15개·간결한 공개 문구가 이 구현 커밋에 포함됩니다. 필수 조작·통계/단위·출처/라이선스·음향 주의·선택적 공개 기록 설명은 유지합니다.
- Evidence boundary: 모든 생성 문제/스테이지의 브라우저 전수 완주, 독립적인 인간의 재미/극고난도 평가, 물리적 모바일/음향, 프로바이더 CPU·부하/남용 검사는 NOT_RUN입니다. 초기 화면 검사와 서버 재생을 이러한 증거로 바꾸어 설명하지 않습니다.
- Documentation follow-up: 이 공개 검증 기록을 추가하는 후속 문서 커밋은 dist와 Worker 구현을 변경하지 않습니다. 후속 CI는 [WEB LAB Actions](https://github.com/HyungminYoon1/web-lab/actions), [API Actions](https://github.com/HyungminYoon1/web-lab-ranking/actions)에서 구분합니다. 아래 게시 전 snapshot과 과거 배포 기록은 해당 시점의 증거로 보존합니다.


## 전체 앱 보완과 선택적 공개 랭킹 — 2026-10-09

### 범위

- VERIFIED: 갤러리 및 연결된 15개 앱의 architecture/requirements/README·관련 결정 기록, 담당 에이전트 인계와 집중 테스트, 메인 통합의 요약/미리보기/랭킹 UI·고정 규칙, 신규 API 구조/HTTP 계약/계층별 코드.
- PARTIAL: 저장소 전체. 대규모 기존 캠페인·문제은행·모든 생성 시드를 브라우저에서 전수 완주하지 않았습니다. 모델 테스트와 선택한 실제 플레이는 구분합니다. 포괄적 보안 감사나 사람의 난도 연구가 아닙니다.
- NOT_INSPECTED: 무관한 저장소와 개인 자료. 개인 username.github.io 대표 사이트는 변경하지 않았습니다. 비밀값과 환경 파일은 출력·게시하지 않았습니다.
- 공개 랭킹은 PARCEL PANIC 최종 계약14와 NEON TACTICS 최종 임무16에만 적용합니다. 고정 지도/자원/규칙을 서버에서 재실행하고, 같은 결과는 같은 순위입니다. 기기 속도·실시간·등록 시각은 점수에 영향이 없습니다. 그 외 앱은 기기 기록만 유지합니다. 최초 접속의 API 호출·자동 게시 없음.
- 별도 API는 Workers Free + SQLite Durable Object입니다. 생성 전 실제 계정의 $0 / Current plan 확인. Neon/D1·유료 전환·카드 등록·GitHub 배포 비밀값을 추가하지 않았습니다. 요청/행동/저장 상한, 익명 자격 증명 해시, 4시간 티켓·180일 비활성 만료·인증 삭제. 실제 정리는 요청 시 제한된 묶음이므로 지연될 수 있습니다. [서버 구조·증거](https://github.com/HyungminYoon1/web-lab-ranking).

### 로컬 검증

- LOCAL_TEST: 17개 저장소의 Node 테스트/정적 검사 PASS. Node 집계622개에는 백엔드 보조 모듈2개가 포함되며 622개의 브라우저 완주를 뜻하지 않습니다. UTF-8 without BOM/CRLF, 최종 변경·스테이징 검사를 별도로 수행합니다.
- BROWSER_INITIAL: 갤러리+15앱, 1440×1000 / 390×900 / 320×900. HTTP200, 문서 가로 넘침·관찰한 페이지/콘솔 오류 없음. 최초 로드 fetch/XHR0. 초기 화면 검사는 전체 게임 검증이 아닙니다.
- BROWSER_LOCAL: 일반 버튼·키보드·캔버스 조작. 게임 상태/점수/모형 시각 주입 없음. 선택한 검증은 아래와 같습니다.

| 앱 | 실제 검증 |
| --- | --- |
| ECHO VAULT | 13번·잔상2개·9박자 저장 복원·22박자 완료2260 |
| PARCEL PANIC | 14번·설비26개 실제 배치/회전·142박자·출고24·1457·명시적 API 등록/조회/삭제 |
| NEON TACTICS | 16번·기체/명령/키보드 조준·4280·명시적 API 등록/조회/삭제 |
| SENSE LAB | 색감12회·조기 연타 제외·유효 반응5회·기기 기록/복원. 색 CSS 비교는 자동 UI 검사이며 사람의 시청각 측정 아님 |
| PACKET JOURNEY | 만료/304·재시도27→3/제때 수신0→3·독립 완료/복원·중복 설명 제거/자유 모드 복귀 |
| THINK FORGE | 독립 수열 정답·힌트 집계 제외·풀이 과정1/2와3/3·시험2/10/종료 후 해설 |
| ORBIT COURIER | 동일 코드·속도110 실패/100 성공1210·실제 궤적/조건·다음 임무2 복원 |
| LIGHT ROUTE | qa-0/18/제한 이동·6조작 후 복원·11조작/힌트0 완료835 |
| POCKET CITY | garden/lesson20턴·11턴 복원·326/예산51/신뢰100·비용 문구 줄바꿈 보정 |
| PIXEL KITCHEN | 밝기6 실패/12 성공·Gaussian/Sobel/threshold·240000픽셀 히스토그램·레시피 저장/내보내기/복원 |
| SWARM GARDEN | 실제 위험 초과1/3·모형23.5초·구간/위험 분석·시작 설정/시드 복원/최근 결과. 브라우저3임무 성공 전수 NOT_RUN |
| TRAFFIC LAB | 시각0/120 정책·목표 달성·검지42/기준10·저장 정책 재생42 |
| LOGIC FOUNDRY | AND 반례/XOR4/4·회로 저장/취소/복원·독립1/13 |
| ROUTE RACE | 실제3칸 편집/비용 차10·RRM1 왕복/재계산/복원·독립1/1 |
| DATA MIRAGE | 시드42·원검정79/160/보정3/160·JSON 내보내기·상관계수 정답−1/복원1/6 |

- RESPONSIVE_LOCAL: 각 선택 결과/편집 상태의390/320px 문서 가로 넘침 없음. 최종 결과창이 랭킹 조작을 막는 문제가 있어 두 게임에 결과 닫기를 추가했습니다. 완료 기록 유지 후320px 실제 등록·삭제를 확인했습니다.
- GALLERY_LOCAL: 새 JPEG15개 로드·소개창15개·링크/Escape/포커스 복귀·검색/분류/난이도 조합(게임6→심화3). 실제 완료와 배지 일치. 갤러리 기록 쓰기·fetch/XHR 없음. 다른 탭에서 Sense 기록 삭제 시 Sense 요약만 지워지고 Packet 개인 기록과 다른 앱 요약은 그대로 유지되며 갤러리 자동 갱신 PASS.
- PREVIEWS: 실제 새 로컬1440×1000 실행/결과/편집 화면15개를 JPEG로 갱신·육안 검사. 목업/생성 이미지/실시간 임베드/자동 캡처가 아닙니다.
- PUBLIC_COPY: 반복 설명·AI 제작 강조·과장 표현 정리. 필수 조작·점수/단위·통계 정의·출처/라이선스·선택적 공개 기록 정책·소리 주의는 유지했습니다.
- LIVE_API: 실제 공개 SQLite1457/4280 등록·조회/재시도·불완전/클라이언트 점수/외부 Origin 거절·인증 삭제 PASS. QA 식별값/점수 제거. 정확한 Worker 버전과 계정/런타임 증거는 서버 docs/verification.md에서 별도 기록합니다.
- REMOTE_CI / LIVE_PAGES: 이 로컬 시점은 게시 전입니다. 이후 커밋별 CI와 공개 파일 해시·실제 UI는 별도 공개 검증 기록에 남깁니다.
- NOT_RUN: 물리적 모바일/음향 기기·다른 엔진/독립 스크린리더·모든 단계/시드·프로바이더 CPU 계측/부하/남용 검사·사람만 플레이/1인1신원 강제·독립 사람의 재미/극고난도 평가. 합법 자동 해답은 이를 증명하지 않습니다.

## 세 독립 게임 공개 배포 — 2026-10-09 / REMOTE_CI + LIVE

- Authorization: 사용자의 “검증 후 바로 공개” 승인에 따라 세 게임을 각각 새 공개 저장소로 만들고 GitHub Pages에 배포했습니다. WEB LAB에는 새 소개 3개와 실제 플레이 화면 JPEG 3개를 추가했습니다. 정상 fast-forward 푸시만 사용했습니다.
- VERIFIED sources: 세 게임의 권위 문서·전체 구현·캠페인·테스트·도구·워크플로와 WEB LAB의 변경 소개·문서·대체 링크·분류/검색·새 캡처. 기존 12개 서비스와 개인 대표 사이트는 이번 구현에서 변경하지 않았습니다. .env 내용과 무관한 개인 파일은 NOT_INSPECTED입니다.
- LOCAL_TEST: 세 게임 20+23+23, WEB LAB 9 = **75/75 PASS**. 게임마다 12개, 총 36개 저작 스테이지의 실제 모델 해답을 실행했으며 경계·실패·연쇄·마감·되돌리기 규칙도 테스트했습니다. 이는 모든 캠페인의 사람 체감 난이도 인증이 아닙니다.
- REMOTE_CI: 아래 구현 커밋의 verify와 deploy를 각각 조회해 모두 completed/success를 확인했습니다. 공개 파일과 검증된 구현 커밋의 대응을 기록합니다.

| 저장소 | 공개 검증한 구현 커밋 | 원격 CI | 공개 파일 |
| --- | --- | --- | --- |
| echo-vault | ea7e13e7585aa800070fa48fbdad5e1a07a460c5 | [verify/deploy PASS](https://github.com/HyungminYoon1/echo-vault/actions/runs/37885456630) | 7/7 HTTP200·SHA-256 일치 |
| parcel-panic | c1f321159038be5fbd4156d21009646238940b11 | [verify/deploy PASS](https://github.com/HyungminYoon1/parcel-panic/actions/runs/37885457598) | 7/7 HTTP200·SHA-256 일치 |
| neon-tactics | f277ad3a181098fa662ff07e0431564f639e520e | [verify/deploy PASS](https://github.com/HyungminYoon1/neon-tactics/actions/runs/37885454614) | 7/7 HTTP200·SHA-256 일치 |
| web-lab | 32e7cfd4c12c0329ecf5932bcde2790e81693056 | [verify/deploy PASS](https://github.com/HyungminYoon1/web-lab/actions/runs/37885658536) | 19/19 HTTP200·SHA-256 일치 |

- LIVE_FILES: 2026-10-09 13:51 KST, 네 공개 사이트의 dist 전체 **40/40** 파일이 직접 공개 URL에서 HTTP200을 반환했고 로컬 SHA-256과 일치했습니다. HTML·CSS·모듈·아이콘과 갤러리 JPEG 15개를 포함합니다.
- LIVE_GAMEPLAY: 13:55–13:58 KST, headless Chromium에서 게임마다 1/7/12를 일반 키보드·팔레트·Canvas 클릭·명령 확인으로 실제 완료했습니다. ECHO VAULT 점수 2490/1810/1770, PARCEL PANIC 출고 12/24/29개 및 완료 69/69/79박자, NEON TACTICS 점수 5900/5160/4280 및 전력 12/12를 확인했습니다. 앱 상태 주입이나 가짜 시계로 만든 성공이 아닙니다.
- LIVE_CONTROLS: 금고의 이동·되돌리기·힌트 비용 유지·실시간 시작/정지, 물류의 설비 취소/복구·실시간 가동/정지·운행 리셋, 전술의 키보드 기술·AP 복구·적 턴 취소·미확정 명령 보호·리셋을 확인했습니다.
- LIVE_GALLERY: 총 15개/게임 6개, 새 소개 3개의 실제 이미지·공개 실행·소스 링크, 검색/분류 결합을 확인했습니다. 소개는 게임을 자동 실행하지 않습니다.
- LIVE_RESPONSIVE: 네 사이트의 390×900/320×900 화면 에뮬레이션과 조작을 확인했습니다. 문서 가로 넘침 없음. 각 게임의 320px 실제 1번 스테이지 성공 카드가 화면 안에 들어오는 것은 아래 BROWSER_LOCAL 기록에서 별도로 확인했습니다.
- LIVE_OBSERVED: 관찰한 공개 플레이/갤러리 실행에서 pageerror·콘솔 경고/오류·다른 origin HTTP 요청은 0입니다. 이 관찰이 모든 방문 세션의 무결성을 입증하지는 않습니다.
- PARTIAL / NOT_RUN: 브라우저 완주는 선택한 9개 스테이지이며 나머지는 모델 해답입니다. 물리적 모바일·모든 브라우저 엔진·스크린리더·독립된 사람의 재미/난도 평가는 NOT_RUN입니다. headless의 실제 탭 숨김 전환은 NOT_OBSERVED; 합성 blur 핸들러 검증은 LOCAL이며 실제 백그라운드 전환 증거로 간주하지 않습니다.
- QA_ARTIFACTS_LOCAL: 공개 dist 밖의 ../output/playwright/three-games-20261009에 실제 UI QA 스크립트·공개 스크린샷·live-evidence.json·HTTP 해시 검증 도구를 보관했습니다. 공개 Pages에는 앱의 전체 자동 해답을 배포하지 않고 개발용 모델 해답은 저장소의 dist 밖에 분리했습니다.
- Scope / storage: 세 게임은 정적 ESM·순수 모델·별도 UI/Canvas 렌더링 구조입니다. 서버/DB/전체 사용자 랭킹·쿠키/분석·자동 소리는 추가하지 않았습니다. 진행과 최고점은 현재 페이지의 메모리에만 남으며 새로고침하면 초기화됩니다.
- Documentation follow-up: 이 결과를 적는 후속 문서 커밋은 dist를 변경하지 않습니다. 해당 문서 커밋의 verify/deploy는 [WEB LAB Actions 이력](https://github.com/HyungminYoon1/web-lab/actions)에서 별도로 확인합니다. 아래 LOCAL snapshot과 이전 개편 배포 기록은 해당 시점의 과거 증거로 보존합니다.

## 세 독립 게임 — 2026-10-09 / LOCAL snapshot before publication

- Authorization: 사용자가 높은 난도와 실제 게임 같은 화면의 세 게임 구현 및 “검증 후 바로 공개”를 승인했습니다. 이전 절의 “새 게임은 아이디어 단계”는 그 이전 작업 단계의 기록입니다.
- VERIFIED sources: echo-vault, parcel-panic, neon-tactics의 권위 문서/규칙/캠페인/UI/렌더링/테스트/도구/워크플로와 WEB LAB의 변경 소개·README·대체 링크·분류/검색·실제 JPEG 캡처. .env 내용, .git 객체와 무관한 개인 파일은 읽거나 공개하지 않았습니다.
- LOCAL_TEST: 새 게임 20+23+23 및 갤러리 9 = 75/75 PASS. 새 게임별 공개 파일 7, 갤러리 공개 파일 19/미리보기 15; 구문·참조·CSP·privacy/pure model·UTF8/no-BOM/CRLF gates PASS.
- MODEL: 게임마다 12개, 총 36개 저작 캠페인의 실제 이동/설비/명령 해답을 실행했습니다. 물류는 출고 ID/시간/비용/점유 보존과 합류·FIFO·정비/마감 양 끝을 검사했고, 전술은 독립 벽 피해/수중 제거/공격 순서·죽은 공격자/폭탄 연쇄 기대값을 검사했습니다.
- BROWSER_LOCAL: headless Chromium 1440×1000에서 각 게임의 1/7/12를 일반 키보드·팔레트·Canvas 클릭·명령 확인으로 완주했습니다. 390×900/320×900 반응형 화면과 조작, 320px에서 실제 1번 캠페인 승리 및 결과 카드 전체가 화면 안에 들어오는 것을 확인했습니다. 문서 가로 넘침·관찰한 pageerror 없음. 물류/금고의 실제 시계 시작/정지, 되돌리기/복구/힌트 유지; 전술의 기체/기술/미확정 목표·명령/AP·적 턴 취소를 확인했습니다.
- LIFECYCLE distinction: 이 headless 환경은 새 탭 전환에도 document.hidden=false였으므로 실제 visibility transition은 NOT_OBSERVED입니다. 합성 blur event로 중단 핸들러와 포커스 복귀 시 자동 재개하지 않음을 확인했습니다. 합성 이벤트를 실제 백그라운드 탭 검증으로 표현하지 않습니다.
- Scope: 기존 12개 서비스 코드와 개인 대표 사이트를 바꾸지 않았습니다. 갤러리는 소개 15개/게임 6개가 실제 목록에서 계산되며 새 게임은 각각 독립 저장소입니다. 서버/DB/전체 랭킹·쿠키/영구 저장·분석·자동 소리는 추가하지 않았습니다.
- PARTIAL: 실제 브라우저 완주는 선택한 캠페인; 나머지는 모델 해답. 물리적 모바일·모든 플랫폼·스크린리더·독립된 사람의 재미/난도 평가는 NOT_RUN입니다.
- QA: 공개 dist 밖의 ../output/playwright/three-games-20261009에 루프백 preview-server.mjs(4179), 실제 UI QA 스크립트·결과·캡처를 보관합니다. 4178의 기존 미리보기는 보존했습니다.
- REMOTE_CI/LIVE: 이 로컬 snapshot 시점에는 NOT_RUN. 승인에 따라 배포 후 실제 원격/공개 결과를 별도 최신 절에 기록합니다.

## 승인 후 개편본 공개 배포 — 2026-10-09

- Authorization: 사용자가 로컬 검토 이후 기존 개편본의 공개 배포를 명시적으로 승인했습니다. 이전 LOCAL ONLY 절은 승인 전 작업 단계의 기록이며, 아래 단계가 그 제한을 해제합니다.
- VERIFIED: 13개 저장소의 architecture.md·README.md·package.json·.gitattributes·Pages 워크플로를 읽었습니다. 각 origin은 HyungminYoon1의 해당 저장소이며 원격 main과 작업 전 HEAD가 일치하고, Pages source는 workflow입니다. 모든 저장소의 커밋 신원은 GitHub noreply입니다.
- LOCAL: 승인 후 285/285 테스트와 13개 정적 검사를 재실행해 통과했습니다. 변경 텍스트 UTF-8 without BOM/CRLF·git diff --check 통과, 검사한 자격 증명 패턴 일치0·환경 파일0.
- REMOTE_CI: 아래 13개 구현 커밋에서 verify/deploy 작업을 각각 조회해 모두 completed/success를 확인했습니다. 정상 fast-forward 푸시만 사용했고 배포 대상은 기존 dist입니다.

| 저장소 | 공개 검증한 구현 커밋 | 원격 CI | 공개 파일 |
| --- | --- | --- | --- |
| web-lab | a46cfb844dd55bd09fabf940a532c995ad5c91aa | [verify/deploy PASS](https://github.com/HyungminYoon1/web-lab/actions/runs/37877689760) | 16/16 HTTP200·SHA-256 일치 |
| think-forge | 632c796f2db6a5eae33d0a33bcf26b2ac113e4b2 | [verify/deploy PASS](https://github.com/HyungminYoon1/think-forge/actions/runs/37877659364) | 12/12 HTTP200·SHA-256 일치 |
| light-route | 9d943db310a3e26e522f8996415add9b9514bfb2 | [verify/deploy PASS](https://github.com/HyungminYoon1/light-route/actions/runs/37877657040) | 6/6 HTTP200·SHA-256 일치 |
| orbit-courier | c1f7701bc5853b4e71ea581c45d09417c125aece | [verify/deploy PASS](https://github.com/HyungminYoon1/orbit-courier/actions/runs/37877660980) | 6/6 HTTP200·SHA-256 일치 |
| pocket-city | 1c306344cacb74d2eaf28ba53fa1666d50cf4277 | [verify/deploy PASS](https://github.com/HyungminYoon1/pocket-city/actions/runs/37877658208) | 6/6 HTTP200·SHA-256 일치 |
| sense-lab | 12e4bfc05206f6ddcc43cc16a40ed114dec04a9d | [verify/deploy PASS](https://github.com/HyungminYoon1/sense-lab/actions/runs/37877662176) | 7/7 HTTP200·SHA-256 일치 |
| packet-journey | 3983173b79135cd1d5f35e8e24da03b9e98a14e4 | [verify/deploy PASS](https://github.com/HyungminYoon1/packet-journey/actions/runs/37877663550) | 5/5 HTTP200·SHA-256 일치 |
| pixel-kitchen | 709d460f2168ddadd437f74599e1146f14dc5683 | [verify/deploy PASS](https://github.com/HyungminYoon1/pixel-kitchen/actions/runs/37877665367) | 6/6 HTTP200·SHA-256 일치 |
| swarm-garden | 1d3d2456c0423d338c42462ff5965eeeda880d2a | [verify/deploy PASS](https://github.com/HyungminYoon1/swarm-garden/actions/runs/37877668184) | 6/6 HTTP200·SHA-256 일치 |
| traffic-lab | d2866ef702e1af7165e6610f8c12a0a5a35f15e3 | [verify/deploy PASS](https://github.com/HyungminYoon1/traffic-lab/actions/runs/37877669243) | 6/6 HTTP200·SHA-256 일치 |
| logic-foundry | 0a9c772e1a86f784f9601718b6fe41247a49d460 | [verify/deploy PASS](https://github.com/HyungminYoon1/logic-foundry/actions/runs/37877666772) | 5/5 HTTP200·SHA-256 일치 |
| route-race | b51b967c876dbe842ed2683d02f952cd86f4ea29 | [verify/deploy PASS](https://github.com/HyungminYoon1/route-race/actions/runs/37877670796) | 5/5 HTTP200·SHA-256 일치 |
| data-mirage | fa094076bc50768f0da78eb456316301fa9b89b7 | [verify/deploy PASS](https://github.com/HyungminYoon1/data-mirage/actions/runs/37877672840) | 8/8 HTTP200·SHA-256 일치 |

- LIVE_FILES: 2026-10-09 12:10 KST, 13개 사이트의 dist 전체 **94/94** 파일이 직접 공개 URL에서 HTTP200을 반환했고 로컬 SHA-256과 일치했습니다. HTML·CSS·모듈·라이선스 페이지·아이콘·JPEG를 포함합니다. 첫 검증 도구의 Response.status 호출 오류는 QA 도구에서 고치고 전부 다시 검사했으며 서비스 오류가 아니었습니다.
- LIVE_BOOT: 실제 공개 URL의 headless Chromium 초기 실행 13개를 확인했습니다. 1440×1000 및 320×780 화면 에뮬레이션에서 문서 가로 넘침·LOCAL PREVIEW 표시가 없었고, 관찰한 초기 로드의 콘솔 경고/오류·다른 origin HTTP 요청은 없었습니다.
- LIVE_GALLERY: 12개 소개창의 공개 실행/소스 링크와 실제 이미지 로드, 기능 검색·분류 결합·빈 결과·선택 도우미·Escape 포커스 복귀를 확인했습니다.
- LIVE_GAMEPLAY: THINK FORGE 기본 난이도4·MIT 출처/원문/해설/라이선스·동치 분수72/250 및 CS 답안20; LIGHT ROUTE의 실제 SVG 대각선·18단계·힌트를 사용한 마지막 단계 완료; ORBIT COURIER의 참고 발사 계획에 따른 6개 실제 성공 비행·예약 분사·예상과 실행 횟수 구분을 확인했습니다. 나머지 서비스의 전체 플레이는 별도 BROWSER_LOCAL 기록이며 이번 LIVE 실행은 초기 화면 검사입니다.
- QA_ARTIFACTS_LOCAL: 공개 dist 밖의 ../output/playwright/publish-20261009에 HTTP 해시/boot/gallery/flow QA 스크립트와 실제 공개 스크린샷을 보관했습니다. Playwright CLI의 다중 h1 검사도 첫 제목 기준으로 수정 후 전체 초기 화면 검사를 재실행했습니다. 이 도구 수정은 공개 서비스 코드를 바꾸지 않았습니다.
- Documentation follow-up: 이 결과를 적는 후속 문서 커밋은 dist를 변경하지 않습니다. 해당 문서 커밋의 워크플로는 Actions 이력에서 별도로 확인합니다. 신규 게임 구현·서버/DB/랭킹·개인 대표 사이트 변경은 없습니다.
- PARTIAL: 선택한 구현/테스트·공개 파일 검증이며 모든 줄의 독립 재감사·모든 생성 시드 전수 플레이는 아닙니다. 물리적 모바일·청력·실제 도로/우주 관측·스크린리더는 NOT_RUN입니다.
- Scope: 개인 대표 사이트, 무관한 저장소·개인 파일은 수정하지 않습니다. 새 게임은 아이디어 단계이며 구현하지 않았습니다.

## 전체 서비스 개편 통합 검토 — 2026-10-09 / LOCAL ONLY

사용자의 최신 지시에 따라 갤러리와 12개 서비스의 **로컬 작업본만** 수정했습니다. 아래 과거 REMOTE_CI/LIVE 기록은 해당 과거 커밋의 기록이며 이번 개편의 공개 배포 증거가 아닙니다. 커밋·스테이징·푸시·배포·원격 설정 변경은 하지 않았습니다.

### 입력과 담당 범위

- VERIFIED: 요청 대상 13개 저장소를 모두 목록화하고 초기 Git 상태를 확인했습니다. 서비스마다 gpt-6.1-sol 또는 gpt-6-astra 한 담당 에이전트만 사용했으며, 그 담당자가 관련 권위 문서·기존 구현·테스트를 전체 읽고 자기 저장소만 수정했습니다. 메인 에이전트는 WEB LAB 구현·통합 검토를 담당했습니다.
- VERIFIED: 메인 에이전트가 갱신된 서비스 문서와 주요 UI 흐름을 검토하고 아래 실제 브라우저 조작을 수행했습니다. 문제은행의 공식 MIT 시험·출처·조건은 원문 PDF/공식 이용 조건과 대조했습니다.
- PARTIAL: 메인 에이전트가 모든 저장소의 모든 줄을 독립적으로 재감사한 것은 아닙니다. 생성기·물리·통계·이미지 계산은 담당자의 독립 기준 계산/단위 테스트와 메인의 선택한 실제 브라우저 사례를 구분합니다. .git 객체·무관한 디렉터리·개인 자료는 전체 검토 대상이 아닙니다.
- NOT_INSPECTED: 무관한 저장소, 개인 학습 PDF·사진·환경 파일 내용. 비밀 값이나 자격 증명은 출력하지 않았습니다.

### BROWSER_LOCAL / 메인 통합 Chromium

통합 loopback 서버 `http://127.0.0.1:4178/web-lab/`는 저장소 소스를 변경하지 않고 응답의 공개 실행 URL만 로컬 주소로 치환합니다. 배너·서버·QA 스크립트는 공개 dist 밖의 `../output/playwright/review-20261009/`에 있습니다. 본 증거는 메인 에이전트의 headless Chromium 실행이며 사용자에게 연 탭의 직접 평가나 물리적 모바일 검증은 아닙니다.

| 서비스 | 직접 실행한 주요 흐름 | 결과와 한계 |
| --- | --- | --- |
| WEB LAB | 검색·분류 결합·빈 결과·추천·Escape 포커스 복귀·12개 소개/로컬 링크 | PASS. 메모리 내 검색, 소개만 추천하며 자동 실행하지 않음 |
| THINK FORGE | 수학/CS/SQL·동치 분수·빈/중복 제출·10문제 전체 복습·오답·출처 | PASS. 기본 난이도4 확인, MIT 변형 출처 표시. 실제 40분 기다리기 대신 제어된 브라우저 시계로 종료/늦은 제출을 검증 |
| LIGHT ROUTE | SVG 대각선·회전·undo·힌트·4/9/12/15/18단계 목표/경유/금지 센서 | PASS. 힌트를 통한 해결이며 사람의 체감 난이도 인증은 아님 |
| ORBIT COURIER | 6개 임무의 예상/실행·일시정지·실제 성공·예약 분사·해금 | PASS. 참고 발사 계획 사용. 고정 중력체의 교육 모델이며 실제 임무 정확도는 검증하지 않음 |
| POCKET CITY | 3개 lesson 시나리오 20턴 승리·정산 미리보기·키보드/포인터 경합·빈 도시 실패 | PASS. 알려진 승리 행동 사용. 모든 시드의 승리 가능성은 입증하지 않음 |
| SENSE LAB | 조기/연타 실패·5회 유효 반응·중앙값·기억 취소/회상·색 보드 재생성 | PASS. 오디오를 재생하거나 실제 청력·인지 능력을 측정하지 않음 |
| PACKET JOURNEY | 복구/하드 경로/오프라인 캐시 작전·선택 재전송·예산·재생·ACK | PASS. 모델의 시간·패킷이며 실제 네트워크 진단 아님 |
| PIXEL KITCHEN | 5개 과제의 실제 오차0·잘못된 순서 실패·중간 결과·와이프·취소·파일/PNG | PASS. 메모리에서 만든 비개인 PNG 입력과 실제 다운로드. 개인 사진·지각 품질·실제25MP 디코딩은 미검증 |
| SWARM GARDEN | 시드21의 바늘문/횡풍/구조 3미션 실제 항해·키보드 유도·정지 예산·자유 장애물 | PASS. 참고 규칙/유도점 사용, 실제 무리 상태로 통과. 모든 시드의 해결 가능성은 입증하지 않음 |
| TRAFFIC LAB | 시드4의 3개 도전 정책·중간/최종 목표·무개입 실패·자유 제동 | PASS. 같은 조건의 독립 무개입 모델 비교. 실제 도로 예측/운전 권고 아님 |
| LOGIC FOUNDRY | 직접 XOR·128조합 가산기·반례 적용·회로 복구·NAND 제약·예시/직접 구분 | PASS. 큰 회로는 내부 가로 스크롤을 사용 |
| ROUTE RACE | 후보 g/h·예측 잠금·w=4 반례·w=1 동등·코드 거절·키보드 3칸 설계/undo | PASS. RR1-lure-0에서 A* 비용23/43확장, Weighted 비용61/20확장을 확인 |

메인 브라우저 QA에서 발견한 도시 키보드 미리보기 경합·결과 버튼 대비·큰 회로 점수의 320px 넘침은 **같은 서비스 담당 에이전트**가 수정하고 회귀 테스트 및 실제 브라우저 재검증을 통과했습니다. 메인의 이미지 앱 생명주기 검토 후 같은 담당자가 실제 BFCache 왕복 오류를 재현·수정하고 별도 Chromium 43개 검사를 통과했습니다. 복귀하면 이전 개인 파일 대신 새 합성 과제를 만들며, 계산 중 이동의 예약 제어 사례는 테스트 대역으로 구분합니다. 기능 검사와 작은 화면/스크린샷 확인은 각각 기록합니다.

### 전체 화면과 정적 캡처

- LOCAL_TEST: 전체 13개 저장소 `npm test` **285/285 PASS**, 실패·취소·스킵0. WEB LAB8, THINK FORGE64, LIGHT ROUTE13, ORBIT COURIER18, POCKET CITY17, SENSE LAB21, PACKET JOURNEY31, PIXEL KITCHEN17, SWARM GARDEN25, TRAFFIC LAB21, LOGIC FOUNDRY22, ROUTE RACE13, DATA MIRAGE15. 각 저장소의 `npm run check`도 PASS. 독립 기준 계산/모델, DOM 테스트 대역 등 서로 다른 테스트 유형을 포함하며 실제 브라우저 조작 검증과는 별도입니다.
- LOCAL_FORMAT: 변경한 텍스트의 엄격한 UTF-8 without BOM/CRLF, 각 저장소의 `git diff --check` PASS. 변경 파일에서 검사한 자격 증명 패턴 일치0·환경 파일0. 이것은 포괄적인 보안 감사나 원격 비밀 저장소 조사 결과가 아닙니다.
- LOCAL_HTTP: 13개 루트 모두 HTTP200·예상 제목. 1440×1000 및 320px 화면에서 문서 가로 넘침 없음. 관찰한 초기 로드의 경고/오류·외부 HTTP 요청은 없음. 이 관찰이 모든 세션의 무결성을 입증하지는 않습니다.
- LOCAL_PREVIEWS: 각 서비스의 실제 로컬 1440×1000 화면을 캡처해 JPEG12개를 갱신했습니다. 서버 배너는 캡처 DOM에서만 제거했습니다. 공개 사이트 캡처나 기능을 흉내 낸 목업이 아니며 자동 갱신하지 않습니다.
- LOCAL_SOURCE: 저장소 HEAD는 작업 시작 시 값과 같고 스테이징은 없습니다. 현재 원격 상태를 조회하거나 원격 CI를 실행하지 않았으므로 원격/LIVE는 NOT_RUN입니다.
- NOT_RUN: 실제 모바일·독립 스크린리더·모든 브라우저 엔진·사람에 의한 난이도/사용성 평가·모든 생성 시드의 완주·물리적 청력·실제 교통/중력 실측. 후속 사용자 검토 후 수정할 수 있습니다.

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

### 갤러리 공개 배포 검증

- REMOTE_CI: 구현 커밋 e62b2920377e3a93404b4b7e3adad36cf4d2e78c의 verify·deploy 모두 PASS. [workflow 37811106699](https://github.com/HyungminYoon1/web-lab/actions/runs/37811106699).
- LIVE_FILES: 루트·CSS·JavaScript 2개·JPEG 12개, 총 공개 파일 16개의 HTTP 200 및 로컬 SHA-256 일치 확인.
- LIVE_UI: 공개 페이지의 전체12·실험5·학습4·게임3 집계, 카드12개, 이미지12개 로드 확인. 새 소개창 6개의 제목·실행·소스 연결을 확인했고 비동기 로딩 완료 후 이미지도 확인했습니다.
- LIVE_RESPONSIVE: 390×844에서 DATA MIRAGE 소개창과 실제 이미지, 320×780에서 전체12개 목록과 가로 넘침 없음 확인. 관찰한 경고/오류 로그 없음.
- ACTUAL_PREVIEWS: 새 서비스의 공개 실행 화면을 직접 캡처했습니다. 효과·설정·시드는 캡처 당시 상태이며 갤러리에서 자동 실행하거나 실시간 갱신하지 않습니다.
- 이후 검증 기록만 추가한 문서 전용 커밋은 위 dist 파일을 변경하지 않습니다. 그 커밋의 워크플로 결과는 Actions에서 별도 확인합니다.
