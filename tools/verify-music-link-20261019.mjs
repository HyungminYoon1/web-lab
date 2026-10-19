import {createRequire} from 'node:module';
import {resolve} from 'node:path';
import {mkdir,writeFile} from 'node:fs/promises';
import assert from 'node:assert/strict';
const {chromium}=createRequire(resolve(process.argv[2]))('playwright');
const gallery=process.argv[3]||'http://127.0.0.1:61324/',music=process.argv[4]||'http://127.0.0.1:56679/';
const root=resolve(import.meta.dirname,'..'),out=resolve(root,'output/playwright/music-20261019');await mkdir(out,{recursive:true});
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,args:['--mute-audio']});
const errors=[],checks=[];
try{
  if(process.argv.includes('--capture')){
    const ctx=await browser.newContext({viewport:{width:1440,height:1050}}),page=await ctx.newPage();page.on('pageerror',e=>errors.push(e.message));await page.goto(music);await page.waitForFunction(()=>document.querySelectorAll('.track-card').length===10);await page.evaluate(()=>document.fonts.ready);await page.screenshot({path:resolve(root,'dist/assets/previews/score-lab.jpg'),type:'jpeg',quality:88});await ctx.close();checks.push('fresh isolated MUSIC ROOM original arrangement captured as real JPEG');
  }
  const ctx=await browser.newContext({viewport:{width:1440,height:1000}}),page=await ctx.newPage();page.on('pageerror',e=>errors.push(e.message));await page.goto(gallery+'#score-lab');
  await page.locator('#project-dialog').waitFor({state:'visible'});assert.equal(await page.locator('#dialog-title').textContent(),'MUSIC ROOM');assert.match(await page.locator('#dialog-features').textContent(),/16트랙.*30개 음색/);assert.equal(await page.locator('#dialog-run').getAttribute('href'),'https://hyungminyoon1.github.io/score-lab/');
  await page.waitForFunction(()=>document.querySelector('#dialog-image').naturalWidth===1440);await page.screenshot({path:resolve(out,'gallery-desktop.png')});checks.push('deep link, updated title, 16-track/30-sound copy, unchanged execution URL and refreshed image');
  await page.locator('#dialog-close').click();await page.locator('#catalog-search').fill('오케스트라');assert.equal(await page.locator('#project-grid .project-card').count(),1);checks.push('orchestra search resolves one composer');
  for(const width of [390,320]){await page.setViewportSize({width,height:900});await page.goto(gallery+'#score-lab');await page.locator('#project-dialog').waitFor({state:'visible'});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);await page.screenshot({path:resolve(out,'gallery-'+width+'.png')});}
  checks.push('390/320 gallery dialog has no root horizontal overflow');await ctx.close();
  const nojs=await browser.newContext({javaScriptEnabled:false}),fallback=await nojs.newPage();await fallback.goto(gallery);assert.equal(await fallback.locator('noscript li').count(),21);assert.equal(await fallback.locator('noscript a').count(),42);assert.equal(await fallback.locator('noscript a[href="https://hyungminyoon1.github.io/score-lab/"]').textContent(),'MUSIC ROOM — 작곡실');await nojs.close();checks.push('all 21 no-JS services/42 execution-source links preserved');
  assert.deepEqual(errors,[]);await writeFile(resolve(out,'report.json'),JSON.stringify({status:'PASS',gallery,music,checks,errors},null,2));console.log(JSON.stringify({status:'PASS',checks,errors}));
}finally{await browser.close();}
