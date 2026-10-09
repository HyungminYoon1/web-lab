import test from "node:test";
import assert from "node:assert/strict";
import { categories, countProjects, getProject, pickProject, projects, selectProjects } from "../dist/src/projects.js";
import { readFile } from "node:fs/promises";

test("catalog projects have unique ids and complete introductions", () => {
  assert(projects.length > 0);
  assert.equal(new Set(projects.map(project => project.id)).size, projects.length);
  for (const project of projects) {
    assert(project.name && project.description && project.purpose && project.build);
    assert.equal(project.features.length, 3);
    assert.equal(project.tags.length, 3);
    assert(project.difficulty && project.duration);
    assert(["intro", "advanced"].includes(project.entry));
    assert(Object.isFrozen(project));
  }
});

test("entry difficulty composes with category and search", () => {
  assert(selectProjects("all", "", "intro").every(project => project.entry === "intro"));
  assert(selectProjects("game", "", "advanced").every(project => project.category === "game" && project.entry === "advanced"));
  assert.equal(selectProjects("all", "공장 자동화", "advanced")[0]?.id, "parcel-panic");
  assert.throws(() => selectProjects("all", "", "impossible"), RangeError);
});
test("all execution and code links belong to the expected public repositories", () => {
  for (const project of projects) {
    assert.equal(project.url, `https://hyungminyoon1.github.io/${project.id}/`);
    assert.equal(project.source, `https://github.com/HyungminYoon1/${project.id}`);
    assert.equal(project.image, `assets/previews/${project.id}.jpg`);
  }
});
test("category filters agree with the catalog without mutating it", () => {
  const counts = countProjects();
  for (const category of categories) assert.equal(selectProjects(category.id).length, counts[category.id]);
  const originalLength = projects.length;
  const selection = selectProjects();
  selection.pop();
  assert.equal(projects.length, originalLength);
  assert.throws(() => selectProjects("unknown"), RangeError);
});
test("direct preview selection only accepts known project ids", () => {
  assert.equal(getProject("light-route")?.name, "LIGHT ROUTE");
  assert.equal(getProject("<script>"), null);
  assert.equal(getProject(""), null);
});

test("orbit introduction uses station arrival instead of shipping jargon", () => {
  const project = getProject("orbit-courier");
  assert.doesNotMatch([project.description, project.purpose, ...project.features].join(" "), /배송|섭동|플라이바이/);
  assert.match(project.purpose, /정거장에 도착/);
  assert.match(project.features[0], /6개 임무/);
});

test("new game entries are independent, searchable and included in game counts", () => {
  for (const id of ["echo-vault", "parcel-panic", "neon-tactics"]) {
    assert.equal(getProject(id)?.category, "game");
    assert(selectProjects("game").some(project => project.id === id));
  }
  assert.equal(selectProjects("game", "시간 루프")[0]?.id, "echo-vault");
  assert.equal(selectProjects("game", "공장 자동화")[0]?.id, "parcel-panic");
  assert.equal(selectProjects("game", "공격 예고")[0]?.id, "neon-tactics");
});

test("search combines category and all terms without mutating the catalog", () => {
  assert.equal(selectProjects("all", "  think forge ")[0]?.id, "think-forge");
  assert(selectProjects("all", "중력").some(project => project.id === "orbit-courier"));
  assert.equal(selectProjects("learning", "중력").length, 0);
  assert.equal(selectProjects("all", "<script>").length, 0);
  assert.equal(selectProjects("all", "").length, projects.length);
  assert.throws(() => selectProjects("all", "x".repeat(121)), TypeError);
  assert.throws(() => selectProjects("all", null), TypeError);
});

test("recommendations use only the filtered catalog and avoid immediate repeats", () => {
  const games = selectProjects("game");
  assert.equal(pickProject(games, 0), games[0]);
  assert.equal(pickProject(games, .9999), games.at(-1));
  assert.notEqual(pickProject(games, 0, games[0].id)?.id, games[0].id);
  assert.equal(pickProject([], .5), null);
  assert.equal(pickProject([games[0]], .5, games[0].id), games[0]);
  for (const bad of [-1, 1, Infinity, NaN]) assert.throws(() => pickProject(games, bad), TypeError);
});

test("totals adapt to added and removed projects without a fixed collection size", () => {
  const current = countProjects();
  const expanded = countProjects([...projects, { category: "experiment" }, { category: "learning" }]);
  assert.equal(expanded.all, projects.length + 2);
  assert.equal(expanded.experiment, current.experiment + 1);
  assert.equal(expanded.learning, current.learning + 1);
  assert.equal(expanded.game, current.game);
  assert.equal(countProjects(projects.slice(1)).all, projects.length - 1);
  assert.deepEqual(countProjects([]), { all: 0, experiment: 0, learning: 0, game: 0 });
  assert(Object.isFrozen(current));
  assert.throws(() => countProjects([{ category: "unknown" }]), RangeError);
  assert.throws(() => countProjects([{ category: "all" }]), RangeError);
});

test("the page shell does not bake in a project count", async () => {
  const shell = await readFile(new URL("../dist/index.html", import.meta.url), "utf8");
  assert(shell.includes("WEB LAB — 브라우저 실험실"));
  assert(!/여섯|SIX SMALL WORLDS|[0-9]+개 프로젝트|<strong[^>]*>[0-9]+<\/strong>|<span>[0-9]+<\/span>/.test(shell));
  assert(shell.includes('id="project-total"'));
});
