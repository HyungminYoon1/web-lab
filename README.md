# WEB LAB — 여섯 개의 웹 실험

감각 실험, 웹 요청 탐험, 문제은행과 세 가지 게임을 소개하는 독립적인 프로젝트 갤러리입니다.

- [갤러리](https://hyungminyoon1.github.io/web-lab/)
- [구조](architecture.md) · [결정 기록](docs/decisions.md) · [검증 기록](docs/verification.md)

## 프로젝트

| 프로젝트 | 직접 해보기 | 소스 |
| --- | --- | --- |
| SENSE LAB — 감각 아케이드 | [실행](https://hyungminyoon1.github.io/sense-lab/) | [코드](https://github.com/HyungminYoon1/sense-lab) |
| PACKET JOURNEY — 웹 요청 탐정 | [실행](https://hyungminyoon1.github.io/packet-journey/) | [코드](https://github.com/HyungminYoon1/packet-journey) |
| THINK FORGE — 수학·컴퓨터과학 문제은행 | [실행](https://hyungminyoon1.github.io/think-forge/) | [코드](https://github.com/HyungminYoon1/think-forge) |
| ORBIT COURIER — 궤도 택배 | [실행](https://hyungminyoon1.github.io/orbit-courier/) | [코드](https://github.com/HyungminYoon1/orbit-courier) |
| LIGHT ROUTE — 빛의 미궁 | [실행](https://hyungminyoon1.github.io/light-route/) | [코드](https://github.com/HyungminYoon1/light-route) |
| POCKET CITY — 작은 땅, 큰 선택 | [실행](https://hyungminyoon1.github.io/pocket-city/) | [코드](https://github.com/HyungminYoon1/pocket-city) |

실험·학습·게임별 분류, 실제 실행 화면, 주요 기능과 구현 포인트를 제공합니다. 미리보기는 정적인 화면 캡처이며 서비스를 자동 실행하지 않습니다. 각 서비스와 소스는 새 탭에서 엽니다. #sense-lab 등의 주소 조각으로 특정 소개를 바로 열 수 있습니다.

## 실행과 배포

Node.js 22 이상. 외부 패키지를 설치하지 않습니다.

```sh
npm run dev -- 0
npm test
npm run check
```

출력된 Local 주소를 열면 됩니다. 개발 서버는 127.0.0.1에서 dist만 제공합니다. main에 푸시하면 GitHub Actions가 검증 후 dist만 배포합니다. 저장소의 Pages 배포 소스는 GitHub Actions입니다.

## 내용 수정

- dist/src/projects.js: 여섯 프로젝트의 소개, 기능, 구현 포인트와 링크.
- dist/assets/previews/: 프로젝트별 실제 화면 JPEG. 서비스의 이미지/코드는 이 저장소에 병합하지 않습니다.
- dist/styles.css: 갤러리 레이아웃과 반응형 스타일.

소개는 각 서비스의 README·architecture를 확인해 작성했습니다. 실제 화면은 기존 공개 사이트의 캡처를 재사용합니다. 보관된 이미지이며 서비스의 현재 상태나 접속 가능 여부를 실시간 측정하지 않습니다.

## 데이터와 제작

이 갤러리에는 계정, 입력 폼, 분석 도구, 쿠키, localStorage, 외부 API 호출이나 자동 소리 재생이 없습니다. 각 서비스 자체의 기기 내 기록은 별개이며 해당 저장소에서 설명합니다. GitHub 호스팅 자체 로그는 앱의 저장 기능과 별개입니다.

AI 에이전트와 함께 제작한 프로젝트입니다. 개인 대표 사이트와 기존 여섯 서비스는 수정하지 않고 독립된 갤러리를 추가했습니다. 별도 라이선스는 아직 부여하지 않았습니다.

UTF-8 without BOM / CRLF. 로컬·원격 CI·공개 배포 검증은 검증 기록에서 구분합니다.
