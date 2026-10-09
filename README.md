# WEB LAB

브라우저에서 실행하는 게임·실험·학습·창작 도구의 갤러리입니다.

[갤러리](https://hyungminyoon1.github.io/web-lab/) · [구조](architecture.md) · [결정 기록](docs/decisions.md) · [검증 기록](docs/verification.md)

## 프로젝트

| 프로젝트 | 실행 | 소스 |
| --- | --- | --- |
| DRAW DESK — 그림 공방 | [실행](https://hyungminyoon1.github.io/draw-desk/) | [코드](https://github.com/HyungminYoon1/draw-desk) |
| SCORE LAB — 작곡실 | [실행](https://hyungminyoon1.github.io/score-lab/) | [코드](https://github.com/HyungminYoon1/score-lab) |
| CLAY ROOM — 3D 조각 공방 | [실행](https://hyungminyoon1.github.io/clay-room/) | [코드](https://github.com/HyungminYoon1/clay-room) |
| ELEMENT ATLAS — 화학 실험실 | [실행](https://hyungminyoon1.github.io/element-atlas/) | [코드](https://github.com/HyungminYoon1/element-atlas) |
| ECHO VAULT — 시간의 금고 | [실행](https://hyungminyoon1.github.io/echo-vault/) | [코드](https://github.com/HyungminYoon1/echo-vault) |
| PARCEL PANIC — 컨베이어 대작전 | [실행](https://hyungminyoon1.github.io/parcel-panic/) | [코드](https://github.com/HyungminYoon1/parcel-panic) |
| NEON TACTICS — 내일의 공격 | [실행](https://hyungminyoon1.github.io/neon-tactics/) | [코드](https://github.com/HyungminYoon1/neon-tactics) |
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
| DATA MIRAGE — 통계 학습실 | [실행](https://hyungminyoon1.github.io/data-mirage/) | [코드](https://github.com/HyungminYoon1/data-mirage) |

분류·검색·시작 난이도로 프로젝트를 고를 수 있습니다. ‘하나 골라주기’는 현재 조건의 소개창을 열며 게임을 자동 실행하지 않습니다. `#sense-lab`처럼 주소 조각으로 특정 소개를 열 수 있습니다. 미리보기는 실제 실행 화면을 캡처한 정적 이미지입니다.

난이도와 소요 시간은 선택을 돕는 예상 정보입니다. 완료 표시는 같은 브라우저의 독립 완료 기록이며 공개 순위가 아닙니다.

## 로컬 실행과 검사

Node.js 22 이상. 갤러리에는 외부 패키지 의존성이 없습니다.

```sh
npm run dev -- 0
npm test
npm run check
```

개발 서버는 `127.0.0.1`에서 `dist`만 제공합니다. `main`에 푸시하면 기존 GitHub Actions가 시험·검사 후 `dist`를 Pages에 배포합니다. 실제 공개 반영 여부와 브라우저 검증 범위는 검증 기록의 최신 절을 확인하세요.

## 수정 위치

- `dist/src/projects.js`: 소개·기능·난이도·링크. 개수는 목록에서 계산합니다.
- `dist/assets/previews/`: 프로젝트별 실제 화면 JPEG.
- `dist/src/progress.js`: 개인 완료 요약 검증.
- `dist/src/app.js`, `dist/styles.css`: 화면과 조작.

프로젝트 추가 시 목록·이미지·위 표·HTML의 JavaScript 미사용 대체 링크를 함께 갱신합니다. 각 서비스의 코드는 해당 독립 저장소에서 관리합니다.

## 데이터

갤러리는 검색·선택을 서버로 보내거나 저장하지 않습니다. 계정·분석 도구·쿠키·외부 API 호출·자동 소리 재생은 없습니다. `web-lab-progress-v1`의 허용된 앱별 완료 개수만 읽으며, 사적인 문제 코드·플레이 기록은 읽거나 변경하지 않습니다. 저장을 사용할 수 없으면 완료 표시 없이 작동합니다.

각 앱의 저장·삭제 및 선택적 공개 랭킹 정책은 해당 앱에서 설명합니다. GitHub 호스팅 로그는 앱 저장 기능과 별개입니다. 갤러리 자체에는 별도 라이선스를 아직 부여하지 않았습니다.

텍스트: UTF-8 without BOM / CRLF. 변경·로컬 시험·원격 CI·공개 실행 증거는 검증 기록에서 구분합니다.
