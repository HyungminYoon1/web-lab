import { createRequire } from 'node:module';
import { resolve } from 'node:path';
import { mkdir, writeFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
import { projects } from '../dist/src/projects.js';

// Use the independently installed study app's Playwright; no gallery dependency.
const { chromium } = createRequire(resolve(process.argv[2]))('playwright');
const gallery = process.argv[3], app = process.argv[4];
for (const target of [gallery, app]) assert(/^http:\/\/127\.0\.0\.1:\d+\/$|^https:\/\/hyungminyoon1\.github\.io\/(web-lab|internet-security-study)\/$/.test(target));
const root = resolve(import.meta.dirname, '..'), output = resolve(root, 'output/playwright/security-20261022');
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ headless: true });
const errors = [], checks = [], requests = [];
try {
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, locale: 'ko-KR', reducedMotion: 'reduce' });
  const page = await context.newPage(); page.on('pageerror', e => errors.push(e.message));
  await page.goto(app); await page.getByRole('heading', { name: '오늘의 학습', exact: true }).waitFor();
  assert.match(await page.locator('#storage-mode').innerText(), /비로그인/);
  assert.equal(await page.locator('#sync-summary').getAttribute('href'), '#account');
  await page.evaluate(() => document.fonts.ready);
  if (process.argv.includes('--capture')) await page.screenshot({ path: resolve(root, 'dist/assets/previews/internet-security-study.jpg'), type: 'jpeg', quality: 88 });
  await page.screenshot({ path: resolve(output, 'app-home.png') });
  checks.push('fresh guest home, visible optional login and authentic preview');
  for (const [route, heading] of [['account', '계정과 동기화'], ['lesson/w02-signature', '서명 생성·검증과 수신자 암호화의 분리'], ['scope', '학습 범위와 출처'], ['appendix', '부록 · 교안 비교']]) {
    await page.goto(app + '#' + route); await page.locator('#view h1').waitFor();
    assert.equal(await page.locator('#view h1').innerText(), heading);
    if (route.startsWith('lesson/')) {
      assert.equal(await page.locator('.lesson-body .correction').count(), 0);
      assert.doesNotMatch(await page.locator('.lesson-body').innerText(), /교안|교수님|정정/);
      await page.locator('.lesson-references summary').click();
    }
    if (route === 'appendix') {
      await page.locator('#correction-search').fill('수신자 공개키');
      await page.locator('.correction summary').first().click();
    }
    await page.screenshot({ path: resolve(output, `app-${route.replace('/', '-')}-desktop.png`), fullPage: true });
    await page.setViewportSize({ width: 320, height: 844 });
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1));
    await page.screenshot({ path: resolve(output, `app-${route.replace('/', '-')}-320.png`), fullPage: true });
    await page.setViewportSize({ width: 1440, height: 1000 });
  }
  checks.push('account, evidence lesson with open references, scope and expanded appendix at desktop/320px');
  await context.close();
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 1000 } }), catalog = await ctx.newPage();
  catalog.on('pageerror', e => errors.push(e.message));
  catalog.on('request', r => { if (['fetch', 'xhr'].includes(r.resourceType())) requests.push(r.url()); });
  await catalog.goto(gallery + '#internet-security-study');
  const dialog = catalog.locator('#project-dialog'); await dialog.waitFor({ state: 'visible' });
  assert.equal(await catalog.locator('#dialog-title').innerText(), '인터넷보안 학습실');
  const copy = await dialog.innerText(); assert.match(copy, /선택적 계정 동기화/); assert.match(copy, /확인 후 계정에 가져/); assert.doesNotMatch(copy, /계정·DB 없이|정정 근거/);
  assert.equal(await catalog.locator('#dialog-run').getAttribute('href'), 'https://hyungminyoon1.github.io/internet-security-study/');
  assert.equal(await catalog.locator('#dialog-source').getAttribute('href'), 'https://github.com/HyungminYoon1/internet-security-study');
  await catalog.waitForFunction(() => document.querySelector('#dialog-image').naturalWidth === 1440);
  await catalog.screenshot({ path: resolve(output, 'gallery-desktop.png') });
  for (const width of [390, 320]) {
    await catalog.setViewportSize({ width, height: 900 });
    assert(await catalog.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1));
    assert(await dialog.evaluate(el => el.scrollWidth <= el.clientWidth + 1));
    await catalog.screenshot({ path: resolve(output, `gallery-${width}.png`) });
  }
  await catalog.locator('#dialog-close').click(); await catalog.waitForFunction(() => !location.hash);
  await catalog.locator('#catalog-search').fill('계정 동기화');
  assert.equal(await catalog.locator('#project-grid .project-card').count(), 1);
  assert.deepEqual(requests, []);
  checks.push('optional-sync description/search, real image, execution/source links, 390/320px dialog and zero gallery API requests');
  await ctx.close();
  const nojs = await browser.newContext({ javaScriptEnabled: false }), fallback = await nojs.newPage();
  await fallback.goto(gallery); assert.equal(await fallback.locator('noscript li').count(), projects.length);
  assert.equal(await fallback.locator('noscript a').count(), projects.length * 2);
  assert.equal(await fallback.locator('noscript a[href="https://hyungminyoon1.github.io/internet-security-study/"]').count(), 1);
  await nojs.close(); checks.push('catalog-derived no-JavaScript fallback links');
  assert.deepEqual(errors, []);
  const report = { status: 'PASS', gallery, app, checks, errors };
  await writeFile(resolve(output, 'report.json'), JSON.stringify(report, null, 2)); console.log(JSON.stringify(report));
} finally { await browser.close(); }
