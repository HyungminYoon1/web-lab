import { readdir, readFile } from "node:fs/promises";
import { dirname, relative, resolve, sep } from "node:path";
import { execFileSync } from "node:child_process";
import assert from "node:assert/strict";
import { projects } from "../dist/src/projects.js";

const root = resolve("dist");
let count = 0;
async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) { await walk(path); continue; }
    count++;
    if (entry.name.endsWith(".js")) execFileSync(process.execPath, ["--check", path], { stdio: "inherit" });
    if (!entry.name.endsWith(".html")) continue;
    const source = await readFile(path, "utf8");
    assert(source.includes('lang="ko"') && source.includes('name="viewport"'), "Missing document metadata");
    assert(source.includes("frame-src 'none'") && source.includes("connect-src 'none'"), "Missing network/embed policy");
    assert(!/<iframe\b|<audio\b|<video\b|\son\w+=/i.test(source), "Unexpected embedded execution or inline handler");
    for (const [, reference] of source.matchAll(/(?:src|href)="([^"#]+)"/g)) {
      if (/^(https?:|data:)/.test(reference)) continue;
      const target = resolve(dirname(path), reference.endsWith("/") ? reference + "index.html" : reference);
      assert(target.startsWith(root + sep), "Asset escaped public output");
      await readFile(target);
    }
  }
}
await walk(root);
for (const project of projects) {
  const image = await readFile(resolve(root, project.image));
  assert(image[0] === 0xff && image[1] === 0xd8 && image.length > 1000, `Missing JPEG preview: ${project.id}`);
}
const app = await readFile(resolve(root, "src/app.js"), "utf8");
assert(!/\bfetch\s*\(|\blocalStorage\b|\bsessionStorage\b|document\.cookie/.test(app), "Unexpected app data access");
for (const filename of ["index.html", "styles.css", "src/app.js", "src/projects.js"]) {
  const buffer = await readFile(resolve(root, filename));
  assert(!(buffer[0] === 0xef && buffer[1] === 0xbb && buffer[2] === 0xbf), `UTF-8 BOM: ${filename}`);
}
console.log(`PASS: ${count} public files, ${projects.length} JPEG previews, syntax, local references, CSP and no app storage/network.`);
