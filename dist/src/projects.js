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
    "description": "15초를 세 번 복제하세요. 과거의 궤적이 현재의 잠금을 여는 시간 퍼즐.",
    "purpose": "한 번의 이동을 잔상으로 기록하고 다음 반복의 압력판을 유지합니다. 세 개의 잠금, 순서 코어와 서로 다른 레이저 박자를 함께 읽고 탈출 경로를 설계하세요.",
    "features": [
      "12개 금고 · 세 잔상 · 동시 잠금과 순서 코어",
      "15초 실시간 기록 / 한 박자 계획 · 기록 타임라인",
      "주기 레이저 · 64회 되돌리기 · 개념 힌트 감점"
    ],
    "build": "실제 이동 기록을 재생하는 순수 고정 박자 모델과 Canvas 렌더링을 분리했습니다. 잔상은 마지막 위치를 유지하고 코어는 현재 기체만 회수합니다. 모든 금고의 다중 반복 탈출 경로를 실제 규칙으로 검증했으며 기록은 페이지 메모리에만 남습니다.",
    "tags": [
      "시간 루프",
      "기록 / 재생",
      "12개 금고"
    ]
  },
  {
    "id": "parcel-panic",
    "number": "14",
    "name": "PARCEL PANIC",
    "subtitle": "컨베이어 대작전",
    "category": "game",
    "categoryLabel": "물류 자동화 퍼즐",
    "description": "세 투입구, 촉박한 마감. 막히지 않는 분류 공장을 설계하세요.",
    "purpose": "벨트·3칸 버퍼·세 방향 분류기를 배치해 모든 주문을 정확한 출고구로 보냅니다. 합류 경쟁과 급행 우선권, 설비 정비를 읽고 제한된 비용으로 흐름을 최적화하세요.",
    "features": [
      "12개 계약 · R/B/G 분류 · 주문별 마감과 예산",
      "실제 화물 점유·FIFO 버퍼·급행 합류·정비 예고",
      "드래그 설계·회전·취소/복구·박자 및 속도 조절"
    ],
    "build": "같은 박자 시작의 점유를 기준으로 이동과 합류를 결정합니다. 막힌 화물을 삭제하지 않으며 투입 대기 중에도 주문 마감은 흐릅니다. 모든 계약의 적법한 설비 배치와 출고 시간, 비용을 검증했고 기록은 페이지 메모리에만 남습니다.",
    "tags": [
      "공장 자동화",
      "대기열 / 분류",
      "12개 계약"
    ]
  },
  {
    "id": "neon-tactics",
    "number": "15",
    "name": "NEON TACTICS",
    "subtitle": "내일의 공격",
    "category": "game",
    "categoryLabel": "위치 전술 퍼즐",
    "description": "다음 공격은 보입니다. 밀치고 끌고 교환해서 그 미래를 바꾸세요.",
    "purpose": "세 기체가 공유하는 세 명령으로 도시를 지킵니다. 위치를 바꾸어 적의 공격을 다른 적에게 돌리고, 물·벽 충돌·폭탄 연쇄를 활용해 후속 침입까지 해결하세요.",
    "features": [
      "12개 임무 · 세 기체의 밀치기/끌기/교환 기술",
      "순서대로 계산하는 공격 예고·명령 피해 미리보기",
      "광선·십자 포격·폭탄 연쇄·증원·32회 되돌리기"
    ],
    "build": "명령 미리보기와 실행은 같은 순수 규칙을 사용합니다. 먼저 제거된 적의 공격은 취소하고 아군 오사와 연쇄 피해도 순서대로 계산합니다. 모든 임무의 명령 해답을 검증했으며 조언 사용 기록과 독립 최고 기록을 구분합니다.",
    "tags": [
      "턴제 전술",
      "공격 예고",
      "12개 임무"
    ]
  },
  {
    id: "sense-lab", number: "01", name: "SENSE LAB", subtitle: "감각 아케이드", category: "experiment", categoryLabel: "감각 실험",
    description: "더 작은 색 차이, 더 긴 기억 순서. 눈과 손의 한계에 도전하는 감각 아케이드.",
    purpose: "답변에 따라 어려워지는 색감, 연타를 구분하는 반응속도, 잠깐 보인 위치 순서를 기억하는 챌린지를 즐깁니다. 고주파 A/B 듣기와 그래픽 패턴도 자유롭게 비교할 수 있습니다.",
    features: ["4×4→6×6 적응형 색감 12라운드와 무작위 색·위치", "연타·조기 입력 감지, 5회 반응의 중앙값·변동폭", "8라운드 위치 순서 기억·10–18 kHz 듣기·패턴 스튜디오"],
    build: "색 문제와 반응 상태의 계산을 화면 처리와 분리했습니다. Web Audio 재생은 사용자 입력으로 시작하며 화면 이동·중단 시 취소합니다. 감각 챌린지는 의료 진단이나 청력 나이 검사로 환산하지 않습니다.",
    tags: ["Web Audio", "Canvas", "감각"],
  },
  {
    id: "packet-journey", number: "02", name: "PACKET JOURNEY", subtitle: "웹 요청 탐정", category: "experiment", categoryLabel: "웹 구조 실험",
    description: "시간 예산 안에 연결을 복구하세요. 짧은 경로가 항상 빠르지는 않습니다.",
    purpose: "캐시·주소 조회·경로·인증서·전송 방식을 직접 판단합니다. 혼잡과 유실을 극복해 응답 조각을 모두 받고, 이전 결정의 시간과 결과를 비교하는 네트워크 작전실입니다.",
    features: ["4개 연결 작전 × 3개 조건, 시간·조치 예산의 하드 모드", "다중 홉·TLS 복구·누락 패킷 선택 재전송과 판단 기록", "기초 사건 6개와 캐시·지연을 조절하는 자유 실험"],
    build: "요청 계산 모델과 사건별 선택·피드백을 별도 모듈로 구성했습니다. 실제 외부 서버를 호출하는 대신 같은 모델에서 조건 변경 전후를 비교하므로, 네트워크 없이도 처리 단계의 차이를 살펴볼 수 있습니다.",
    tags: ["DNS / HTTP", "캐시", "시뮬레이션"],
  },
  {
    id: "think-forge", number: "03", name: "THINK FORGE", subtitle: "수학·컴퓨터과학 문제은행", category: "learning", categoryLabel: "학습 도구",
    description: "16개 범주, 48개 문제 유형. 조건을 분석하고 수학과 컴퓨터과학의 풀이를 검증하세요.",
    purpose: "매개변수·확률·최적화·그래프·SQL·알고리즘의 복합 문제에 도전합니다. 기본은 가장 높은 난이도이며 MIT 공개 시험을 변형한 문제에는 원문·저자·변형 정보를 표시합니다.",
    features: ["수학 8개·컴퓨터과학 8개 범주, 4단계 난이도·48개 유형", "독창 문제 41개·MIT 시험 변형 7개 유형과 단계별 해설", "20–40분 10문제 도전·미응답 포함 전체 복습·버전별 오답 재현"],
    build: "시드와 문제은행 버전으로 조건을 재현하고 분수·소수를 판정합니다. 학습 기록은 사용 중인 브라우저에 저장하며 외부 AI 호출이나 계정은 없습니다. 공개 시험 변형 콘텐츠의 비상업·저작자표시·동일조건변경허락 범위를 별도로 안내합니다.",
    tags: ["문제 생성", "수학 / CS", "오답 복습"],
  },
  {
    id: "orbit-courier", number: "04", name: "ORBIT COURIER", subtitle: "궤도 임무 연구소", category: "game", categoryLabel: "중력 게임",
    description: "원을 그리는 속도부터 탈출과 궤도 전이까지. 한 번의 분사가 항로를 바꿉니다.",
    purpose: "고정 행성 1–3개의 중력에서 초기 속도와 예약 분사를 설계합니다. 원궤도·탈출·배송·섭동·근접 통과·궤도 전이의 서로 다른 성공 조건을 관측 계기로 확인합니다.",
    features: ["궤도 유지·탈출·속도 제한 배송 등 6개 임무", "예약 분사 시점·Δv와 에너지·반경·이심률 관측", "예상/실행 궤적 구분·최근 3회 비교·일시정지·임무 해금"],
    build: "고정 시간 간격의 Verlet 계산과 Canvas 재생을 분리했습니다. 제작한 목표에 실제 궤도·탈출·도착 조건을 적용하며 예상 궤적만으로 점수를 기록하지 않습니다. 행성은 고정되어 실제 움직이는 행성의 중력 도움과는 구분합니다.",
    tags: ["Canvas", "중력 / 궤도", "6개 임무"],
  },
  {
    id: "light-route", number: "05", name: "LIGHT ROUTE", subtitle: "빛의 미궁", category: "game", categoryLabel: "광선 퍼즐",
    description: "거울을 돌리고 빛을 나누세요. 서로 다른 색의 모든 목표를 밝히는 퍼즐.",
    purpose: "8×8 격자에서 여러 목표를 동시에 밝히되 필수 경유지와 색 조건을 맞추고 금지 센서는 피하세요. 후반에는 고정 거울과 불필요한 장치까지 함께 고려해야 합니다.",
    features: ["6개 장·18단계, 최대 4목표·경유지·금지 센서", "대각선 SVG 거울·분기·색 변환·고정 장치", "즉시 광선 추적·되돌리기·단계 힌트·코드별 재현"],
    build: "정답 배치를 만든 뒤 실제 광선 추적으로 검증하고 섞어 문제를 생성합니다. 분기·순환의 처리량을 제한하고, 색뿐 아니라 A/C 문자도 표시해 목표를 구분합니다.",
    tags: ["광선 추적", "퍼즐", "18단계"],
  },
  {
    id: "pocket-city", number: "06", name: "POCKET CITY", subtitle: "작은 땅, 큰 선택", category: "game", categoryLabel: "도시 전략",
    description: "5×5 땅, 20턴의 선택. 정착·폭염·출근길의 세 위기를 이겨내세요.",
    purpose: "도로 연결·전력·생활 서비스·교통·유지비의 균형을 설계합니다. 다음 건물 카드와 예고된 위기를 읽고, 주민 신뢰를 지키며 시나리오의 모든 목표를 달성하는 도시 전략 게임입니다.",
    features: ["서로 다른 목표와 점검·11턴 위기가 있는 3개 임무", "6종 시설·다음 3턴 카드 예고·건설 정산 미리보기", "신뢰 기반 승패·같은 조건 재도전·기기 내 이어하기"],
    build: "선택한 건물과 좌표를 행동 기록으로 저장하고, 같은 시드와 행동을 재생해 진행 상태를 복구합니다. 건설 조건과 점수 계산을 UI에서 분리해 예산 부족·사용한 땅 같은 조건을 검증합니다.",
    tags: ["턴제 전략", "시드 / 재생", "20턴"],
  },
  {
    id: "pixel-kitchen", number: "07", name: "PIXEL KITCHEN", subtitle: "픽셀 복원 실험실", category: "experiment", categoryLabel: "이미지 실험",
    description: "목표 이미지에서 처리 순서를 추론하세요. 경계와 오차 지도가 가설의 단서가 됩니다.",
    purpose: "밝기·평균·방향 경계·문턱값·네 단계 경계 지도의 다섯 복원 과제를 풉니다. 자유 실험에서는 커널과 Sobel, 문턱값을 연결하고 실제 픽셀 계산과 중간 결과를 비교합니다.",
    features: ["시드 기반 5단계 복원 과제·연산 제약·실패 단서","최대 4단계 파이프라인·MAE/RMSE·차이 지도·와이프","9픽셀 계산 검사·로컬 사진 처리·취소·최종 PNG 저장"],
    build: "순수 픽셀 계산과 브라우저 입력·예약·취소를 분리했습니다. 처리 예산과 디코딩 크기를 제한하고 알파를 유지합니다. 사진을 업로드하거나 저장하지 않으며 결과의 오차는 RGB 바이트 기준이지 손실된 세부 정보 복구나 지각 품질 점수는 아닙니다.",
    tags: ["이미지 필터","3×3 커널","로컬 파일"],
  },
  {
    id: "swarm-garden", number: "08", name: "SWARM GARDEN", subtitle: "군집 정원", category: "experiment", categoryLabel: "군집 실험",
    description: "좁은 문, 뒤집히는 횡풍, 위험권. 한정된 유도로 무리를 세 집결지까지 이끄세요.",
    purpose: "분리·정렬·응집을 조정하고 유도 예산을 배분하는 세 가지 군집 항해입니다. 집결지마다 실제 도착 비율·무리 결속·방향 정렬을 동시에 유지해야 통과합니다.",
    features: ["바늘문·횡풍·구조 3개 미션, 실제 이동 기반 집결 판정","24초 유도 예산·누적 위험·시드 재도전·키보드 조준","40–280개 개체·12개 장애물·잔상을 조절하는 자유 실험"],
    build: "같은 이전 상태에서 이웃의 힘을 계산하며 고정 간격으로 움직입니다. 미션은 제한된 유도 시간과 연속 유지 조건을 실제 무리 상태로 판정합니다. 일시정지 중에는 시간·예산을 쓰지 않고 페이지가 숨겨지면 정지합니다.",
    tags: ["Boids","군집 규칙","Canvas"],
  },
  {
    id: "traffic-lab", number: "09", name: "TRAFFIC LAB", subtitle: "정체 연구소", category: "experiment", categoryLabel: "교통 실험",
    description: "속도를 낮추면 더 빨리 도착할까요? 제한된 개입으로 무개입 도로보다 좋은 흐름을 만드세요.",
    purpose: "정체 파동·병목·연속 충격의 세 도전에 개입 시점과 속도·차간 정책을 설계합니다. 같은 초기 조건의 무개입 도로와 통과량·대기·회복을 나란히 비교합니다.",
    features: ["3개 도전·중간 점검·시간 및 개입 예산","30/60초 속도·차간 정책과 실제 검지기 통과량 비교","개입 기록·차량별 속도·그래프·급제동 자유 실험"],
    build: "SI 단위의 IDM 참고 단일 차로 모델을 고정 간격으로 계산합니다. 같은 시드의 무개입·개입 도로를 독립적으로 계산하고 겹침을 방지합니다. 차선 변경·신호등·실제 도로 예측은 포함하지 않습니다.",
    tags: ["IDM 참고 모델","정체 파동","시뮬레이션"],
  },
  {
    id: "logic-foundry", number: "10", name: "LOGIC FOUNDRY", subtitle: "논리회로 작업대", category: "learning", categoryLabel: "논리회로 학습",
    description: "게이트를 연결하고 0·1을 바꿔 보세요. 모든 입력 조합을 통과하는 회로를 조립합니다.",
    purpose: "3비트 가산기, 가감산 유닛, 디코더·선택기·중재기를 직접 설계합니다. 모든 입력 조합과 첫 반례를 신호 흐름에 적용하며 회로를 고치고, NAND만 사용하는 제약에도 도전하세요.",
    features: ["13개 미션, 최대 7입력·4출력·24게이트","128행까지 전수 검증·첫 반례 적용·불일치 필터","단계별 설계 힌트·간결화 목표·예시와 직접 해결 구분"],
    build: "앞서 정의한 노드만 연결하는 비순환 회로를 이진 연산으로 평가합니다. eval 없이 모든 입력 조합을 검사하며, 큰 회로는 화면 내부에서 스크롤하여 글자 크기를 유지합니다.",
    tags: ["논리 게이트","진리표","DAG"],
  },
  {
    id: "route-race", number: "11", name: "ROUTE RACE", subtitle: "길찾기 알고리즘 경주", category: "learning", categoryLabel: "알고리즘 학습",
    description: "가까워 보이는 길의 함정. 네 탐색 전략의 비용과 후보를 비교하고 반례 지도를 설계하세요.",
    purpose: "다섯 종류의 재현 가능한 지도에서 결과를 먼저 예측합니다. 기본 A*와 거리 가중치를 키운 탐색의 차이를 살펴보고 8칸 편집으로 짧지만 비싼 길을 설계할 수 있습니다.",
    features: ["5종 시드 지도·예측 및 비용 차이 설계 미션","BFS·Dijkstra·A*·Weighted A*의 경로와 확장 수","한 단계 g/h/우선값·후보 표·32회 되돌리기"],
    build: "동일한 그래프에서 네 탐색 기록을 결정적으로 계산합니다. 기본 A*는 허용 가능한 맨해튼 거리로 최소 비용을 보장하지만 Weighted A*의 w>1은 보장하지 않습니다. 확장 수는 작업량이며 실제 실행 시간 측정과 구분합니다.",
    tags: ["BFS / Dijkstra / A*","가중치 지도","탐색 비교"],
  },
  {
    id: "data-mirage", number: "12", name: "DATA MIRAGE", subtitle: "숫자의 착시", category: "learning", categoryLabel: "통계 학습",
    description: "작은 p값, 강한 상관, 좁은 구간. 그럴듯한 결론에서 반례를 찾아보세요.",
    purpose: "축·표본·집계의 착시를 넘어 중간 중단·다중 비교·집단 혼입·이상치·추정 구간을 조사합니다. 같은 원자료에 다른 분석 규칙을 적용하고, 판단이 버티는지 확인하는 여섯 통계 실험입니다.",
    features: ["유의성 사냥: 정확 이항 검정·다중 비교·가족 보정","상관 수사: 집단 중심화·한 점 제외·전체 원자료","구간의 약속: 반복 표집·편향·160회 포함률 비교"],
    build: "생성 시드와 원자료·분모를 공개하는 순수 계산 모델입니다. 동일 자료의 재분석과 별도 반복 실험을 구분하며, 선택한 답을 현재 조건에 따라 다시 판정합니다. 외부 통계나 개인 자료를 수집하지 않습니다.",
    tags: ["통계 시각화","표본 편향","심슨의 역설"],
  },
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

export function selectProjects(category = "all", query = "") {
  if (!categories.some(item => item.id === category)) throw new RangeError("Unknown project category");
  if (typeof query !== "string" || query.length > 120) throw new TypeError("Invalid catalog query");
  const terms = query.normalize("NFC").trim().toLocaleLowerCase("ko").split(/\s+/).filter(Boolean);
  return projects.filter(project => {
    if (category !== "all" && project.category !== category) return false;
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
