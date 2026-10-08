import test from "node:test";
import assert from "node:assert/strict";
import { categories, countProjects, getProject, projects, selectProjects } from "../dist/src/projects.js";
import { readFile } from "node:fs/promises";

test("catalog projects have unique ids and complete introductions", () => {
  assert(projects.length > 0);
  assert.equal(new Set(projects.map(project => project.id)).size, projects.length);
  for (const project of projects) {
    assert(project.name && project.description && project.purpose && project.build);
    assert.equal(project.features.length, 3);
    assert.equal(project.tags.length, 3);
    assert(Object.isFrozen(project));
  }
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
