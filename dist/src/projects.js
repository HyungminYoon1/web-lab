const siteOrigin = "https://hyungminyoon1.github.io";
const codeOrigin = "https://github.com/HyungminYoon1";

export const categories = Object.freeze([
  { id: "all", label: "전체" },
  { id: "experiment", label: "실험" },
  { id: "learning", label: "학습" },
  { id: "game", label: "게임" },
]);

const catalog = [
  {
    "id": "echo-vault",
    "number": "13",
    "name": "ECHO VAULT",
    "subtitle": "시간의 금고",
    "category": "game",
    "categoryLabel": "시간 루프 퍼즐",
    "description": "이동을 기록하고 잔상을 이용해 금고를 탈출하는 시간 퍼즐.",
    "purpose": "잔상으로 잠금장치를 조작하고, 정해진 순서로 코어를 회수하세요.",
    "features": [
      "15개 금고 · 잔상 해제·재방문·시간 회로",
      "15초 실시간 기록 / 한 박자 계획 · 기록 타임라인",
      "주기 레이저 · 64회 되돌리기 · 개념 힌트 감점"
    ],
    "build": "이동 기록을 고정 박자로 재생합니다.",
    "tags": [
      "시간 루프",
      "기록 / 재생",
      "15개 금고"
    ],
    "difficulty": "입문~최상",
    "entry": "intro",
    "duration": "10~30분"
  },
  {
    "id": "parcel-panic",
    "number": "14",
    "name": "PARCEL PANIC",
    "subtitle": "컨베이어 대작전",
    "category": "game",
    "categoryLabel": "물류 자동화 퍼즐",
    "description": "설비를 배치해 주문을 마감 전에 출고하는 물류 퍼즐.",
    "purpose": "벨트·버퍼·분류기를 조합해 제한된 비용으로 모든 주문을 처리하세요.",
    "features": [
      "14개 계약 · 순서 공정·반품 재검수·마감과 예산",
      "실제 화물 점유·FIFO 버퍼·급행 합류·정비 예고",
      "설계 저장·복원 · 최종 계약 공개 기록"
    ],
    "build": "화물 이동·합류·마감 시간을 같은 규칙으로 계산합니다.",
    "tags": [
      "공장 자동화",
      "대기열 / 분류",
      "14개 계약"
    ],
    "difficulty": "심화~최상",
    "entry": "advanced",
    "duration": "15~40분"
  },
  {
    "id": "neon-tactics",
    "number": "15",
    "name": "NEON TACTICS",
    "subtitle": "내일의 공격",
    "category": "game",
    "categoryLabel": "위치 전술 퍼즐",
    "description": "적의 공격을 예측하고 위치를 바꾸는 턴제 전술 게임.",
    "purpose": "세 기체의 이동·밀치기·끌기·교환으로 임무 목표를 달성하세요.",
    "features": [
      "16개 임무 · 호송·탈출·거점 유지·최종 방어",
      "순서대로 계산하는 공격 예고·명령 피해 미리보기",
      "광선·폭탄 연쇄·증원 · 최종 임무 공개 기록"
    ],
    "build": "명령 미리보기와 실행에 같은 규칙을 적용합니다.",
    "tags": [
      "턴제 전술",
      "공격 예고",
      "16개 임무"
    ],
    "difficulty": "입문~최상",
    "entry": "intro",
    "duration": "10~30분"
  },
  {
    "id": "sense-lab",
    "number": "01",
    "name": "SENSE LAB",
    "subtitle": "감각 아케이드",
    "category": "experiment",
    "categoryLabel": "감각 실험",
    "description": "색 구분, 반응속도, 위치 기억을 테스트합니다.",
    "purpose": "색감·반응속도·기억력을 비교하고 고주파와 그래픽 패턴을 실험하세요.",
    "features": [
      "4×4→6×6 적응형 색감 12라운드와 무작위 색·위치",
      "연타·조기 입력 감지, 5회 반응의 중앙값·변동폭",
      "8라운드 위치 순서 기억·10–18 kHz 듣기·패턴 스튜디오"
    ],
    "build": "문제마다 색·위치·대기 시간을 무작위로 선택합니다.",
    "tags": [
      "Web Audio",
      "Canvas",
      "감각"
    ],
    "difficulty": "입문~심화",
    "entry": "intro",
    "duration": "2~5분"
  },
  {
    "id": "packet-journey",
    "number": "02",
    "name": "PACKET JOURNEY",
    "subtitle": "웹 요청 탐정",
    "category": "experiment",
    "categoryLabel": "웹 구조 실험",
    "description": "캐시·DNS·인증서·전송 문제를 해결하는 네트워크 실험.",
    "purpose": "연결 경로와 복구 방법을 선택해 제한 시간 안에 응답을 받으세요.",
    "features": [
      "4개 연결 작전 × 3개 조건, 시간·조치 예산의 하드 모드",
      "다중 홉·TLS 복구·누락 패킷 선택 재전송과 판단 기록",
      "캐시 만료·재시도 연쇄 진단 · 기초 사건 6개"
    ],
    "build": "네트워크 요청을 모델로 재현합니다.",
    "tags": [
      "DNS / HTTP",
      "캐시",
      "시뮬레이션"
    ],
    "difficulty": "입문~심화",
    "entry": "intro",
    "duration": "5~15분"
  },
  {
    "id": "think-forge",
    "number": "03",
    "name": "THINK FORGE",
    "subtitle": "수학·컴퓨터과학 문제은행",
    "category": "learning",
    "categoryLabel": "학습 도구",
    "description": "수학·컴퓨터과학 문제를 풀고 오답을 복습합니다.",
    "purpose": "범주와 난이도를 선택해 학습하거나 10문제 도전에 참여하세요.",
    "features": [
      "수학 8개·컴퓨터과학 8개 범주, 4단계 난이도·48개 유형",
      "독창 문제 41개·MIT 시험 변형 7개 유형과 단계별 해설",
      "20–40분 10문제 도전·미응답 포함 전체 복습·버전별 오답 재현"
    ],
    "build": "같은 문제 코드와 버전으로 조건을 재현합니다.",
    "tags": [
      "문제 생성",
      "수학 / CS",
      "오답 복습"
    ],
    "difficulty": "입문~최상",
    "entry": "intro",
    "duration": "10~40분"
  },
  {
    "id": "orbit-courier",
    "number": "04",
    "name": "ORBIT COURIER",
    "subtitle": "궤도 임무 연구소",
    "category": "game",
    "categoryLabel": "중력 게임",
    "description": "초기 속도와 분사 시점을 조절하는 궤도 시뮬레이션.",
    "purpose": "궤도 유지·탈출·배송 등 임무별 조건을 맞추세요.",
    "features": [
      "궤도 유지·탈출·속도 제한 배송 등 6개 임무",
      "예약 분사 시점·Δv와 에너지·반경·이심률 관측",
      "예상/실행 궤적 구분·최근 3회 비교·일시정지·임무 해금"
    ],
    "build": "고정 행성의 중력을 일정한 시간 간격으로 계산합니다.",
    "tags": [
      "Canvas",
      "중력 / 궤도",
      "6개 임무"
    ],
    "difficulty": "심화~최상",
    "entry": "advanced",
    "duration": "5~20분"
  },
  {
    "id": "light-route",
    "number": "05",
    "name": "LIGHT ROUTE",
    "subtitle": "빛의 미궁",
    "category": "game",
    "categoryLabel": "광선 퍼즐",
    "description": "거울·분기·색 변환으로 목표를 밝히는 광선 퍼즐.",
    "purpose": "필수 경유지와 색 조건을 맞추고 금지 센서를 피하세요.",
    "features": [
      "6개 장·18단계, 최대 4목표·경유지·금지 센서",
      "대각선 SVG 거울·분기·색 변환·고정 장치",
      "즉시 광선 추적·되돌리기·단계 힌트·코드별 재현"
    ],
    "build": "장치를 조작할 때마다 광선 경로를 계산합니다.",
    "tags": [
      "광선 추적",
      "퍼즐",
      "18단계"
    ],
    "difficulty": "입문~최상",
    "entry": "intro",
    "duration": "5~20분"
  },
  {
    "id": "pocket-city",
    "number": "06",
    "name": "POCKET CITY",
    "subtitle": "작은 땅, 큰 선택",
    "category": "game",
    "categoryLabel": "도시 전략",
    "description": "도로·전력·서비스를 배치하는 20턴 도시 전략 게임.",
    "purpose": "예산과 주민 신뢰를 유지하며 도시별 목표를 달성하세요.",
    "features": [
      "서로 다른 목표와 점검·11턴 위기가 있는 3개 임무",
      "6종 시설·다음 3턴 카드 예고·건설 정산 미리보기",
      "신뢰 기반 승패·같은 조건 재도전·기기 내 이어하기"
    ],
    "build": "건설 행동을 재생해 진행 중 도시를 복원합니다.",
    "tags": [
      "턴제 전략",
      "시드 / 재생",
      "20턴"
    ],
    "difficulty": "심화~최상",
    "entry": "advanced",
    "duration": "10~20분"
  },
  {
    "id": "pixel-kitchen",
    "number": "07",
    "name": "PIXEL KITCHEN",
    "subtitle": "픽셀 복원 실험실",
    "category": "experiment",
    "categoryLabel": "이미지 실험",
    "description": "목표 이미지의 필터와 처리 순서를 재현합니다.",
    "purpose": "커널·Sobel·문턱값을 조합하고 결과의 픽셀 오차를 확인하세요.",
    "features": [
      "시드 기반 5단계 복원 과제·연산 제약·실패 단서",
      "최대 4단계 파이프라인·MAE/RMSE·차이 지도·와이프",
      "픽셀 검사·히스토그램 · 레시피 JSON·프리셋 저장"
    ],
    "build": "사진은 기기에서만 처리합니다.",
    "tags": [
      "이미지 필터",
      "3×3 커널",
      "로컬 파일"
    ],
    "difficulty": "입문~심화",
    "entry": "intro",
    "duration": "5~15분"
  },
  {
    "id": "swarm-garden",
    "number": "08",
    "name": "SWARM GARDEN",
    "subtitle": "군집 정원",
    "category": "experiment",
    "categoryLabel": "군집 실험",
    "description": "군집 규칙과 유도점을 조절해 무리를 이동시킵니다.",
    "purpose": "장애물과 바람을 피해 세 집결지의 도착 조건을 맞추세요.",
    "features": [
      "바늘문·횡풍·구조 3개 미션, 실제 이동 기반 집결 판정",
      "24초 유도 예산·누적 위험·시드 재도전·키보드 조준",
      "종료 구간 분석·같은 시드 비교 · 자유 실험"
    ],
    "build": "같은 시드로 무리의 초기 조건을 재현합니다.",
    "tags": [
      "Boids",
      "군집 규칙",
      "Canvas"
    ],
    "difficulty": "심화",
    "entry": "advanced",
    "duration": "3~10분"
  },
  {
    "id": "traffic-lab",
    "number": "09",
    "name": "TRAFFIC LAB",
    "subtitle": "정체 연구소",
    "category": "experiment",
    "categoryLabel": "교통 실험",
    "description": "속도·차간 정책으로 정체 파동을 완화합니다.",
    "purpose": "같은 도로의 무개입 결과와 비교하며 교통 흐름을 개선하세요.",
    "features": [
      "3개 도전·중간 점검·시간 및 개입 예산",
      "30/60초 속도·차간 정책과 실제 검지기 통과량 비교",
      "정책 저장·재생·JSON 공유 · 구간 처리량 비교"
    ],
    "build": "단일 차로의 차량 이동을 일정한 간격으로 계산합니다.",
    "tags": [
      "IDM 참고 모델",
      "정체 파동",
      "시뮬레이션"
    ],
    "difficulty": "심화",
    "entry": "advanced",
    "duration": "5~15분"
  },
  {
    "id": "logic-foundry",
    "number": "10",
    "name": "LOGIC FOUNDRY",
    "subtitle": "논리회로 작업대",
    "category": "learning",
    "categoryLabel": "논리회로 학습",
    "description": "논리 게이트를 연결하고 진리표로 검증합니다.",
    "purpose": "가산기·디코더·선택기 등의 회로를 설계하세요.",
    "features": [
      "13개 미션, 최대 7입력·4출력·24게이트",
      "128행까지 전수 검증·첫 반례 적용·불일치 필터",
      "회로 JSON·기기 저장·편집 취소 · 독립 완료"
    ],
    "build": "모든 입력 조합을 검사해 잘못된 출력을 찾습니다.",
    "tags": [
      "논리 게이트",
      "진리표",
      "DAG"
    ],
    "difficulty": "입문~최상",
    "entry": "intro",
    "duration": "5~30분"
  },
  {
    "id": "route-race",
    "number": "11",
    "name": "ROUTE RACE",
    "subtitle": "길찾기 알고리즘 경주",
    "category": "learning",
    "categoryLabel": "알고리즘 학습",
    "description": "지도를 편집하고 네 길찾기 알고리즘을 비교합니다.",
    "purpose": "경로 비용과 탐색 과정을 비교하며 반례 지도를 만드세요.",
    "features": [
      "5종 시드 지도·예측 및 비용 차이 설계 미션",
      "BFS·Dijkstra·A*·Weighted A*의 경로와 확장 수",
      "전체 편집 지도 코드 공유 · g/h/후보 추적"
    ],
    "build": "BFS·Dijkstra·A*·Weighted A*를 같은 지도에서 실행합니다.",
    "tags": [
      "BFS / Dijkstra / A*",
      "가중치 지도",
      "탐색 비교"
    ],
    "difficulty": "입문~심화",
    "entry": "intro",
    "duration": "5~15분"
  },
  {
    "id": "data-mirage",
    "number": "12",
    "name": "DATA MIRAGE",
    "subtitle": "숫자의 착시",
    "category": "learning",
    "categoryLabel": "통계 학습",
    "description": "축·표본·집계와 분석 조건에 따른 통계 결과를 비교합니다.",
    "purpose": "생성된 자료의 조건을 바꾸며 결론이 달라지는 이유를 확인하세요.",
    "features": [
      "유의성 사냥: 정확 이항 검정·다중 비교·가족 보정",
      "상관 수사: 집단 중심화·한 점 제외·전체 원자료",
      "반복 표집·160회 포함률 · 용어·새 문제·JSON"
    ],
    "build": "같은 시드로 원자료를 재현합니다.",
    "tags": [
      "통계 시각화",
      "표본 편향",
      "심슨의 역설"
    ],
    "difficulty": "입문~심화",
    "entry": "intro",
    "duration": "5~15분"
  }
];

export const projects = Object.freeze(catalog.map(project => Object.freeze({
  ...project,
  image: `assets/previews/${project.id}.jpg`,
  url: `${siteOrigin}/${project.id}/`,
  source: `${codeOrigin}/${project.id}`,
  features: Object.freeze(project.features),
  tags: Object.freeze(project.tags),
})));

export function countProjects(entries = projects) {
  const counts = Object.fromEntries(categories.map(category => [category.id, 0]));
  for (const project of entries) {
    if (project.category === "all" || !Object.hasOwn(counts, project.category)) throw new RangeError("Unknown project category");
    counts.all++;
    counts[project.category]++;
  }
  return Object.freeze(counts);
}

export function selectProjects(category = "all", query = "", difficulty = "all") {
  if (!categories.some(item => item.id === category)) throw new RangeError("Unknown project category");
  if (typeof query !== "string" || query.length > 120) throw new TypeError("Invalid catalog query");
  if (!["all", "intro", "advanced"].includes(difficulty)) throw new RangeError("Invalid difficulty filter");
  const terms = query.normalize("NFC").trim().toLocaleLowerCase("ko").split(/\s+/).filter(Boolean);
  return projects.filter(project => {
    if (category !== "all" && project.category !== category) return false;
    if (difficulty !== "all" && project.entry !== difficulty) return false;
    const haystack = [project.name, project.subtitle, project.description, project.purpose, ...project.features, ...project.tags].join(" ").normalize("NFC").toLocaleLowerCase("ko");
    return terms.every(term => haystack.includes(term));
  });
}

export function pickProject(entries, entropy, previousId = null) {
  if (!Array.isArray(entries) || !Number.isFinite(entropy) || entropy < 0 || entropy >= 1) throw new TypeError("Invalid recommendation");
  const candidates = entries.length > 1 ? entries.filter(project => project.id !== previousId) : entries;
  return candidates.length ? candidates[Math.floor(entropy * candidates.length)] : null;
}

export function getProject(id) {
  return projects.find(project => project.id === id) ?? null;
}
