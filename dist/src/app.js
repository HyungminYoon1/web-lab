import { countProjects, getProject, selectProjects } from "./projects.js";

const grid = document.querySelector("#project-grid");
const dialog = document.querySelector("#project-dialog");
const filters = document.querySelector(".filters");
let lastPreview = null;

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function externalLink(label, url, className) {
  const link = element("a", className, label);
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  return link;
}

function openPreview(project, opener) {
  lastPreview = opener ?? null;
  document.querySelector("#dialog-category").textContent = `${project.number} / ${project.categoryLabel}`;
  document.querySelector("#dialog-title").textContent = project.name;
  document.querySelector("#dialog-subtitle").textContent = project.subtitle;
  document.querySelector("#dialog-purpose").textContent = project.purpose;
  document.querySelector("#dialog-build").textContent = project.build;
  const image = document.querySelector("#dialog-image");
  image.src = project.image;
  image.alt = `${project.name} 실제 실행 화면`;
  document.querySelector("#dialog-image-link").href = project.image;
  document.querySelector("#dialog-run").href = project.url;
  document.querySelector("#dialog-source").href = project.source;
  document.querySelector("#dialog-features").replaceChildren(...project.features.map(text => element("li", "", text)));
  document.querySelector("#dialog-tags").replaceChildren(...project.tags.map(text => element("span", "", text)));
  history.replaceState(null, "", `#${project.id}`);
  if (!dialog.open) dialog.showModal();
}

function render(category) {
  const selected = selectProjects(category);
  grid.replaceChildren(...selected.map((project, index) => {
    const article = element("article", "project-card");
    article.dataset.project = project.id;
    const preview = element("button", "project-preview");
    preview.type = "button";
    preview.setAttribute("aria-label", `${project.name} 소개와 미리보기`);
    preview.setAttribute("aria-haspopup", "dialog");
    const image = element("img");
    image.src = project.image;
    image.alt = `${project.name} 실행 화면`;
    image.loading = index < 3 ? "eager" : "lazy";
    image.decoding = "async";
    preview.append(image, element("span", "preview-label", "소개 · 미리보기"));
    preview.addEventListener("click", () => openPreview(project, preview));
    const content = element("div", "card-content");
    const meta = element("div", "project-meta");
    meta.append(element("span", "project-number", project.number), element("span", "", project.categoryLabel));
    const tags = element("div", "project-tags");
    tags.append(...project.tags.map(text => element("span", "", text)));
    const actions = element("div", "card-actions");
    const run = externalLink("사이트 실행", project.url, "run-link");
    run.setAttribute("aria-label", `${project.name} 사이트 실행 (새 탭)`);
    const source = externalLink("소스 코드", project.source, "source-link");
    source.setAttribute("aria-label", `${project.name} 소스 코드 (새 탭)`);
    actions.append(run, source);
    content.append(meta, element("h3", "", project.name), element("p", "project-subtitle", project.subtitle), element("p", "project-description", project.description), tags, actions);
    article.append(preview, content);
    return article;
  }));
  document.querySelector("#result-count").textContent = `${selected.length}개 프로젝트`;
  for (const button of filters.querySelectorAll("button")) button.setAttribute("aria-pressed", String(button.dataset.filter === category));
}

filters.addEventListener("click", event => {
  const button = event.target.closest("button[data-filter]");
  if (button && filters.contains(button)) render(button.dataset.filter);
});
document.querySelector("#dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
  if (event.target !== dialog) return;
  const box = dialog.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
});
dialog.addEventListener("close", () => {
  if (getProject(location.hash.slice(1))) history.replaceState(null, "", `${location.pathname}${location.search}`);
  if (lastPreview?.isConnected) lastPreview.focus();
  lastPreview = null;
});

const counts = countProjects();
const stamp = document.querySelector(".catalog-stamp");
document.querySelector("#project-total").textContent = String(counts.all).padStart(2, "0");
stamp.setAttribute("aria-label", `총 ${counts.all}개 프로젝트`);
stamp.hidden = false;
for (const button of filters.querySelectorAll("button")) button.querySelector("span").textContent = String(counts[button.dataset.filter]);

render("all");
filters.hidden = false;

function syncPreviewWithHash() {
  const project = getProject(location.hash.slice(1));
  if (!project) {
    if (dialog.open) dialog.close();
    return;
  }
  if (!grid.querySelector(`[data-project="${project.id}"]`)) render("all");
  openPreview(project, grid.querySelector(`[data-project="${project.id}"] .project-preview`));
}

window.addEventListener("hashchange", syncPreviewWithHash);
syncPreviewWithHash();
