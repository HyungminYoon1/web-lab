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
    id: "sense-lab", number: "01", name: "SENSE LAB", subtitle: "감각 아케이드", category: "experiment", categoryLabel: "감각 실험",
    description: "비슷한 색을 구분하고, 신호에 반응하고, 높은 소리를 들어보는 감각 챌린지.",
    purpose: "눈과 귀, 손의 반응을 설명으로만 읽지 않고 직접 비교해 보는 실험실입니다. 색감·반응속도·고주파 챌린지와 그래픽 패턴을 한곳에서 선택할 수 있습니다.",
    features: ["색 차이가 줄어드는 12라운드 색감 테스트", "신호 전 입력을 실패로 처리하는 5회 반응속도 측정", "10–18 kHz A/B 듣기와 입자 패턴 스튜디오"],
    build: "색 문제와 반응 상태의 계산을 화면 처리와 분리했습니다. Web Audio 재생은 사용자 입력으로 시작하며 화면 이동·중단 시 취소합니다. 감각 챌린지는 의료 진단이나 청력 나이 검사로 환산하지 않습니다.",
    tags: ["Web Audio", "Canvas", "감각"],
  },
  {
    id: "packet-journey", number: "02", name: "PACKET JOURNEY", subtitle: "웹 요청 탐정", category: "experiment", categoryLabel: "웹 구조 실험",
    description: "DNS부터 HTTP까지, 요청 기록을 읽고 연결 문제의 원인을 찾는 여섯 가지 사건.",
    purpose: "웹 페이지가 열리는 과정을 단계별로 관찰합니다. 주소 조회 실패, 서버 오류, 오프라인과 캐시를 구분하고 조치를 적용한 전후 결과를 비교합니다.",
    features: ["단서·힌트·조치로 해결하는 네트워크 미션 6개", "DNS·TCP/TLS·HTTP·캐시 처리 단계와 요청 기록", "캐시·상황·지연·재생 속도를 바꾸는 자유 실험"],
    build: "요청 계산 모델과 사건별 선택·피드백을 별도 모듈로 구성했습니다. 실제 외부 서버를 호출하는 대신 같은 모델에서 조건 변경 전후를 비교하므로, 네트워크 없이도 처리 단계의 차이를 살펴볼 수 있습니다.",
    tags: ["DNS / HTTP", "캐시", "시뮬레이션"],
  },
  {
    id: "think-forge", number: "03", name: "THINK FORGE", subtitle: "수학·컴퓨터과학 문제은행", category: "learning", categoryLabel: "학습 도구",
    description: "14개 범주, 4단계 난이도. 힌트와 풀이로 익히고, 오답을 다시 풀어보세요.",
    purpose: "수학과 컴퓨터과학을 작은 문제로 연습합니다. 숫자와 보기를 바꾸어 문제를 생성하고, 틀린 문제의 조건을 그대로 재현해 복습할 수 있습니다.",
    features: ["수학 7개·컴퓨터과학 7개 범주와 4단계 난이도", "그래프·도형·SQL 표 시각화, 힌트와 단계별 풀이", "3분 10문제 도전·오답 복습·기기 내 학습 기록"],
    build: "시드 기반 문제 생성과 정답·풀이를 동일한 매개변수에서 계산합니다. 학습 기록과 오답은 사용 중인 브라우저에 저장하며, 외부 AI 호출이나 계정 없이 연습할 수 있습니다.",
    tags: ["문제 생성", "수학 / CS", "오답 복습"],
  },
  {
    id: "orbit-courier", number: "04", name: "ORBIT COURIER", subtitle: "궤도 택배", category: "game", categoryLabel: "중력 게임",
    description: "각도와 추진력을 조절해 행성 옆을 통과하세요. 목적지는 작은 우주 정거장.",
    purpose: "중력이 만드는 궤적을 이용해 목적지에 화물을 보냅니다. 성공만큼 직전 실패의 경로도 살펴보면서 더 적은 추진력과 시도로 다음 구간에 도전합니다.",
    features: ["중력원 1–3개를 지나는 10개 배송 구간", "드래그·방향키·범위 조절기로 조준하고 Space로 발사", "실패 궤적 비교·힌트·구간 해금·기기 내 최고 기록"],
    build: "고정 시간 간격의 계산과 Canvas 그리기를 분리했습니다. 항로를 생성할 때 유효한 도달 경로를 검증하고, 탭을 떠나면 비행을 자동 정지합니다. 같은 코드로 항로를 다시 불러올 수 있습니다.",
    tags: ["Canvas", "궤적", "10구간"],
  },
  {
    id: "light-route", number: "05", name: "LIGHT ROUTE", subtitle: "빛의 미궁", category: "game", categoryLabel: "광선 퍼즐",
    description: "거울을 돌리고 빛을 나누세요. 서로 다른 색의 모든 목표를 밝히는 퍼즐.",
    purpose: "8×8 격자에서 광선이 지나갈 경로를 만듭니다. 단순한 반사에서 시작해 여러 번 꺾기, 분기, 색 변환으로 규칙이 확장됩니다.",
    features: ["거울·분기·색 변환으로 이어지는 12단계 퍼즐", "회전 즉시 갱신되는 광선 경로와 목표 도달 상태", "되돌리기·처음 배치·힌트·동일 퍼즐 코드 재현"],
    build: "정답 배치를 만든 뒤 실제 광선 추적으로 검증하고 섞어 문제를 생성합니다. 분기·순환의 처리량을 제한하고, 색뿐 아니라 A/C 문자도 표시해 목표를 구분합니다.",
    tags: ["광선 추적", "퍼즐", "12단계"],
  },
  {
    id: "pocket-city", number: "06", name: "POCKET CITY", subtitle: "작은 땅, 큰 선택", category: "game", categoryLabel: "도시 전략",
    description: "5×5 땅, 20번의 선택. 예산·전력·환경을 맞추며 나만의 작은 도시를 만드세요.",
    purpose: "한정된 땅에 주택, 상점, 공원, 발전소와 도로를 배치합니다. 지금의 이익과 다음 턴의 필요를 함께 생각하며 인구·전력·환경 목표를 달성하는 게임입니다.",
    features: ["턴마다 건물 카드 3장, 총 20턴의 도시 건설", "인접 관계와 전력·일자리 부족을 반영한 점수 미리보기", "도시 코드 재현·진행 중 이어하기·최근 도시 기록"],
    build: "선택한 건물과 좌표를 행동 기록으로 저장하고, 같은 시드와 행동을 재생해 진행 상태를 복구합니다. 건설 조건과 점수 계산을 UI에서 분리해 예산 부족·사용한 땅 같은 조건을 검증합니다.",
    tags: ["턴제 전략", "시드 / 재생", "20턴"],
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

export function selectProjects(category = "all") {
  if (!categories.some(item => item.id === category)) throw new RangeError("Unknown project category");
  return category === "all" ? [...projects] : projects.filter(project => project.category === category);
}

export function getProject(id) {
  return projects.find(project => project.id === id) ?? null;
}
