import test from "node:test";
import assert from "node:assert/strict";
import { categories, getProject, projects, selectProjects } from "../dist/src/projects.js";

test("the requested six projects have unique ids and complete introductions", () => {
  assert.equal(projects.length, 6);
  assert.equal(new Set(projects.map(project => project.id)).size, 6);
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
test("category filters show 2 experiments, 1 learning tool and 3 games without mutating the catalog", () => {
  assert.deepEqual(categories.map(category => selectProjects(category.id).length), [6, 2, 1, 3]);
  const selection = selectProjects();
  selection.pop();
  assert.equal(projects.length, 6);
  assert.throws(() => selectProjects("unknown"), RangeError);
});
test("direct preview selection only accepts the six known project ids", () => {
  assert.equal(getProject("light-route")?.name, "LIGHT ROUTE");
  assert.equal(getProject("<script>"), null);
  assert.equal(getProject(""), null);
});
