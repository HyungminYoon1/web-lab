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
  {
    id: "pixel-kitchen", number: "07", name: "PIXEL KITCHEN", subtitle: "이미지 가공실", category: "experiment", categoryLabel: "이미지 실험",
    description: "사진을 열고 필터를 바꾸세요. 주변 9개 픽셀이 하나의 색이 되는 계산까지 살펴봅니다.",
    purpose: "이미지 필터의 효과를 실제 파일과 테스트 차트에서 비교하는 작업대입니다. 사진을 서버에 올리지 않고 이 브라우저에서만 처리하며, 결과를 PNG로 저장할 수 있습니다.",
    features: ["6개 기본 필터·흑백 변환·3×3 커널 직접 편집","원본/결과 비교와 주변 9개 픽셀의 가중치·RGB 계산","로컬 PNG·JPEG·WebP 파일 열기와 PNG 저장"],
    build: "경계 픽셀을 고정하는 순수 합성곱 모델과 Canvas 화면을 분리했습니다. 입력 파일·디코딩 크기·계산 해상도를 제한하고 알파 채널을 보존합니다. 검사 도구는 실제 필터와 같은 계산을 사용합니다.",
    tags: ["이미지 필터","3×3 커널","로컬 파일"],
  },
  {
    id: "swarm-garden", number: "08", name: "SWARM GARDEN", subtitle: "군집 정원", category: "experiment", categoryLabel: "군집 실험",
    description: "분리·정렬·응집. 작은 규칙을 바꾸고, 커서와 장애물로 움직이는 무리를 이끌어 보세요.",
    purpose: "개체가 가까운 이웃만 보고 움직여도 집단적인 형태가 나타나는 Boids 실험입니다. 규칙의 세기, 개체 수와 시야를 바꾸고 실제 계산된 방향 정렬도와 평균 속도를 관찰합니다.",
    features: ["분리·정렬·응집과 시야 범위, 40–280개 개체 조절","커서 모으기·밀어내기와 최대 12개 장애물 배치","시드 기반 새 무리·재생/정지·잔상과 군집 지표"],
    build: "이전 상태의 스냅샷에서 이웃과 힘을 계산하고 고정 시간 간격으로 움직입니다. 경계를 감싸며 장애물과 속도에 상한을 둡니다. 페이지가 숨겨지면 자동으로 정지합니다.",
    tags: ["Boids","군집 규칙","Canvas"],
  },
  {
    id: "traffic-lab", number: "09", name: "TRAFFIC LAB", subtitle: "정체 연구소", category: "experiment", categoryLabel: "교통 실험",
    description: "신호등 없는 원형 도로. 한 차량을 급제동시키고 정체가 어디로 퍼지는지 관찰하세요.",
    purpose: "차량 수·희망 속도·목표 차간 시간을 바꾸어 동일한 도로의 흐름을 비교합니다. 선택한 차량의 급제동 이후 평균 속도와 느린 차량 수, 시간 그래프가 어떻게 달라지는지 확인할 수 있습니다.",
    features: ["차량 수·희망 속도·차간 시간·배속과 도로 프리셋","차량 클릭 또는 Enter로 3초 급제동","차량별 속도 색상·평균 속도·평균 흐름과 기록 그래프"],
    build: "SI 단위의 IDM 참고 단일 차로 모델을 고정 간격으로 계산합니다. 이동 거리의 경계를 제한하여 겹침을 방지하고 차선 변경·신호등은 포함하지 않습니다. 표시된 지표는 현재 모델 상태에서 계산합니다.",
    tags: ["IDM 참고 모델","정체 파동","시뮬레이션"],
  },
  {
    id: "logic-foundry", number: "10", name: "LOGIC FOUNDRY", subtitle: "논리회로 작업대", category: "learning", categoryLabel: "논리회로 학습",
    description: "게이트를 연결하고 0·1을 바꿔 보세요. 모든 입력 조합을 통과하는 회로를 조립합니다.",
    purpose: "XOR 램프, 다수결, 1비트 덧셈기와 입장 조건을 논리 게이트로 구현합니다. 연결을 수정한 직후 신호와 출력이 바뀌고, 진리표에서 일치하지 않는 조합을 찾아 고칠 수 있습니다.",
    features: ["7종 게이트, 최대 12개와 입력·출력 연결 편집","실시간 입력 스위치·신호 회로도·결과 램프","4개 과제의 전체 진리표 검증과 예시 회로"],
    build: "앞서 정의한 노드만 연결하는 비순환 회로를 이진 연산으로 평가합니다. eval 없이 모든 입력 조합을 검사하며, 큰 회로는 화면 내부에서 스크롤하여 글자 크기를 유지합니다.",
    tags: ["논리 게이트","진리표","DAG"],
  },
  {
    id: "route-race", number: "11", name: "ROUTE RACE", subtitle: "길찾기 알고리즘 경주", category: "learning", categoryLabel: "알고리즘 학습",
    description: "같은 지도, 세 전략. 벽과 험지를 그려 BFS·Dijkstra·A*의 탐색과 경로 비용을 비교합니다.",
    purpose: "가장 적은 칸을 지나는 길과 가장 저렴한 길이 다를 수 있음을 직접 살펴보는 비교 도구입니다. 동일한 지도에서 세 알고리즘의 방문 기록을 나란히 재생하고 결과를 되짚을 수 있습니다.",
    features: ["벽·비용 5 험지·출발/도착의 마우스·터치·키보드 편집","BFS·Dijkstra·A* 탐색 재생·한 단계·슬라이더","이동 횟수와 경로 비용·방문 수·도달 불가능 결과"],
    build: "동일한 그래프 모델에서 세 탐색을 결정적으로 계산합니다. A*에는 이 조건에서 허용 가능한 맨해튼 거리를 사용합니다. 재생 속도는 탐색 기록을 보여주는 속도이며 실행 성능 측정이 아닙니다.",
    tags: ["BFS / Dijkstra / A*","가중치 지도","탐색 비교"],
  },
  {
    id: "data-mirage", number: "12", name: "DATA MIRAGE", subtitle: "숫자의 착시", category: "learning", categoryLabel: "통계 학습",
    description: "축을 자르고, 표본을 바꾸고, 집단을 합치세요. 숫자가 다른 이야기를 만드는 세 가지 실험.",
    purpose: "차트 모양과 원래 수치, 표본과 모집단, 부분집단과 전체 결과의 차이를 직접 비교합니다. 조건을 조절할 때마다 평균·증가율·성공률과 설명이 실제 계산 결과에서 바뀝니다.",
    features: ["같은 값의 세로축 편집과 실제 증가율 퀴즈","가상 200명의 무작위·편향 표본, 크기 조절과 다시 뽑기","조건별 시도 횟수·성공률로 비교하는 심슨의 역설"],
    build: "개인 정보나 외부 통계 대신 공개된 예제 값과 시드 기반 가상 점수를 사용합니다. 중복 없는 표본과 집계 분모를 명시하고, 고정된 결론 대신 현재 조건에서 계산한 피드백을 표시합니다.",
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

export function selectProjects(category = "all") {
  if (!categories.some(item => item.id === category)) throw new RangeError("Unknown project category");
  return category === "all" ? [...projects] : projects.filter(project => project.category === category);
}

export function getProject(id) {
  return projects.find(project => project.id === id) ?? null;
}
