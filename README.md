# WEB LAB — 브라우저 실험실

> 배포 단계 안내(2026-10-09): 로컬 검토 후 사용자의 공개 배포 승인을 받았습니다. 아래 LOCAL ONLY/NOT_RUN은 배포 전 검토 기록입니다. 승인 후 실제 공개 결과는 [통합 배포 검증](https://github.com/HyungminYoon1/web-lab/blob/main/docs/verification.md)의 최신 배포 절에서 따로 확인합니다.

감각 실험, 웹 요청 탐험, 학습 도구와 게임을 소개하는 독립적인 프로젝트 갤러리입니다.

- [공개 갤러리](https://hyungminyoon1.github.io/web-lab/) (개편의 실제 반영 여부는 최신 검증 기록에서 확인)
- [구조](architecture.md) · [결정 기록](docs/decisions.md) · [검증 기록](docs/verification.md)

## 프로젝트

분류와 함께 기능·원리를 검색할 수 있습니다. '하나 골라주기'는 현재 검색·분류에서 소개 하나를 추천하며 앱을 자동 실행하지 않습니다. 검색어와 추천 이력은 현재 화면의 메모리에만 있고 전송·저장하지 않습니다.

| 프로젝트 | 직접 해보기 | 소스 |
| --- | --- | --- |
| SENSE LAB — 감각 아케이드 | [실행](https://hyungminyoon1.github.io/sense-lab/) | [코드](https://github.com/HyungminYoon1/sense-lab) |
| PACKET JOURNEY — 웹 요청 탐정 | [실행](https://hyungminyoon1.github.io/packet-journey/) | [코드](https://github.com/HyungminYoon1/packet-journey) |
| THINK FORGE — 수학·컴퓨터과학 문제은행 | [실행](https://hyungminyoon1.github.io/think-forge/) | [코드](https://github.com/HyungminYoon1/think-forge) |
| ORBIT COURIER — 궤도 임무 연구소 | [실행](https://hyungminyoon1.github.io/orbit-courier/) | [코드](https://github.com/HyungminYoon1/orbit-courier) |
| LIGHT ROUTE — 빛의 미궁 | [실행](https://hyungminyoon1.github.io/light-route/) | [코드](https://github.com/HyungminYoon1/light-route) |
| POCKET CITY — 작은 땅, 큰 선택 | [실행](https://hyungminyoon1.github.io/pocket-city/) | [코드](https://github.com/HyungminYoon1/pocket-city) |
| PIXEL KITCHEN — 픽셀 복원 실험실 | [실행](https://hyungminyoon1.github.io/pixel-kitchen/) | [코드](https://github.com/HyungminYoon1/pixel-kitchen) |
| SWARM GARDEN — 군집 정원 | [실행](https://hyungminyoon1.github.io/swarm-garden/) | [코드](https://github.com/HyungminYoon1/swarm-garden) |
| TRAFFIC LAB — 정체 연구소 | [실행](https://hyungminyoon1.github.io/traffic-lab/) | [코드](https://github.com/HyungminYoon1/traffic-lab) |
| LOGIC FOUNDRY — 논리회로 작업대 | [실행](https://hyungminyoon1.github.io/logic-foundry/) | [코드](https://github.com/HyungminYoon1/logic-foundry) |
| ROUTE RACE — 길찾기 알고리즘 경주 | [실행](https://hyungminyoon1.github.io/route-race/) | [코드](https://github.com/HyungminYoon1/route-race) |
| DATA MIRAGE — 숫자의 착시 | [실행](https://hyungminyoon1.github.io/data-mirage/) | [코드](https://github.com/HyungminYoon1/data-mirage) |

실험·학습·게임별 분류, 실제 실행 화면, 주요 기능과 구현 포인트를 제공합니다. 미리보기는 정적인 화면 캡처이며 서비스를 자동 실행하지 않습니다. 각 서비스와 소스는 새 탭에서 엽니다. #sense-lab 등의 주소 조각으로 특정 소개를 바로 열 수 있습니다.

## 실행과 배포

2026-10-09 개편은 LOCAL ONLY입니다. 사용자 검토 전에는 커밋·푸시·배포하지 않습니다. 통합 검토 서버는 공개 dist 밖의 `../output/playwright/review-20261009/preview-server.mjs`이며 `node`로 실행하면 `http://127.0.0.1:4178/web-lab/`에서 전체 로컬 앱을 연결합니다. 서버 응답에서만 실행 URL을 치환하므로 각 저장소의 공개 URL은 그대로입니다. 노란 LOCAL PREVIEW 표시가 붙습니다. 이 서버는 loopback GET/HEAD 전용이며 파일 업로드·API·원격 공개 기능이 없습니다.

Node.js 22 이상. 외부 패키지를 설치하지 않습니다.

```sh
npm run dev -- 0
npm test
npm run check
```

출력된 Local 주소를 열면 됩니다. 개발 서버는 127.0.0.1에서 dist만 제공합니다. main에 푸시하면 GitHub Actions가 검증 후 dist만 배포합니다. 저장소의 Pages 배포 소스는 GitHub Actions입니다.

## 내용 수정

- dist/src/projects.js: 프로젝트의 소개, 기능, 구현 포인트와 링크. 전체 및 분류별 개수는 이 목록에서 계산합니다.
- dist/assets/previews/: 프로젝트별 실제 화면 JPEG. 서비스의 이미지/코드는 이 저장소에 병합하지 않습니다.
- dist/styles.css: 갤러리 레이아웃과 반응형 스타일.

소개는 각 서비스의 문서·계산 모델·UI를 해당 담당 에이전트가 검토하고, 메인 에이전트가 통합 브라우저에서 주요 흐름을 확인한 뒤 갱신했습니다. 미리보기는 이번 로컬 실행 화면을 직접 캡처한 정적 이미지입니다. 보관된 이미지이며 공개 서비스의 현재 상태나 접속 가능 여부를 실시간 측정하지 않습니다.

새 프로젝트를 추가할 때는 프로젝트 메타데이터와 미리보기 이미지를 등록하고, 이 README의 표 및 index.html의 JavaScript 미사용 대체 링크도 함께 갱신합니다. 제목·소개·하단 문구에는 개수를 명시하지 않으며, 화면의 COLLECTION·분류 버튼·현재 표시된 프로젝트 개수는 실제 목록을 반영합니다.

## 데이터와 제작

이 갤러리에는 계정, 데이터 제출 폼, 분석 도구, 쿠키, localStorage, 외부 API 호출이나 자동 소리 재생이 없습니다. 검색 입력은 메모리 내 목록 필터에만 사용합니다. 각 서비스 자체의 기기 내 기록은 별개이며 해당 저장소에서 설명합니다. GitHub 호스팅 자체 로그는 앱의 저장 기능과 별개입니다.

AI 에이전트와 함께 제작한 프로젝트입니다. 이번 개편은 갤러리와 12개 서비스의 로컬 작업본에 한정됩니다. 개인 대표 사이트와 원격 공개 사이트는 변경하지 않았습니다. 서비스는 각각 독립된 저장소에서 관리합니다. 갤러리 자체에는 별도 라이선스를 아직 부여하지 않았으며, THINK FORGE의 MIT 시험 변형 콘텐츠에는 별도 콘텐츠 라이선스가 적용됩니다.

UTF-8 without BOM / CRLF. 로컬·원격 CI·공개 배포 검증은 검증 기록에서 구분합니다.
