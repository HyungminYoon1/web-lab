import {createRequire} from 'node:module';
import {resolve} from 'node:path';
import {mkdir,writeFile} from 'node:fs/promises';
import assert from 'node:assert/strict';
const {chromium}=createRequire(resolve(process.argv[2]))('playwright');
const [gallery,engineer,study]=process.argv.slice(3,6),capture=process.argv.includes('--capture');
for(const url of [gallery,engineer,study])assert(/^http:\/\/127\.0\.0\.1:\d+\/$|^https:\/\/hyungminyoon1\.github\.io\/(web-lab|engineer-practice|internet-security-study)\/$/.test(url));
const output=resolve('output/playwright/accounts-20261023');await mkdir(output,{recursive:true});
const browser=await chromium.launch({headless:true});const errors=[],checks=[];
try{
  for(const[id,base]of [['engineer-practice',engineer],['internet-security-study',study]]){
    const context=await browser.newContext({viewport:{width:1440,height:1000},locale:'ko-KR',reducedMotion:'reduce'});const p=await context.newPage();p.on('pageerror',e=>errors.push(e.message));await p.goto(base);await p.locator('h1').first().waitFor();await p.evaluate(()=>document.fonts.ready);
    if(capture)await p.screenshot({path:resolve('dist/assets/previews/'+id+'.jpg'),type:'jpeg',quality:88});
    await p.goto(base+'#account');await p.getByRole('heading',{name:'WEB LAB 계정',exact:true}).waitFor();await p.getByRole('button',{name:'기존 WEB LAB 로그인 연결',exact:true}).waitFor();await p.screenshot({path:resolve(output,id+'-account-desktop.png'),fullPage:true});
    for(const width of [390,320]){await p.setViewportSize({width,height:900});assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));await p.screenshot({path:resolve(output,id+'-account-'+width+'.png'),fullPage:true});}
    checks.push(id+': actual preview, common account form and desktop/390/320px');await context.close();
  }
  const context=await browser.newContext({viewport:{width:1440,height:1000}}),p=await context.newPage(),requests=[];p.on('pageerror',e=>errors.push(e.message));p.on('request',r=>{if(['xhr','fetch'].includes(r.resourceType()))requests.push(r.url());});
  await p.goto(gallery);assert.equal(await p.getByRole('link',{name:'WEB LAB 계정 ↗',exact:true}).getAttribute('href'),'https://hyungminyoon1.github.io/internet-security-study/#account');
  for(const id of ['engineer-practice','internet-security-study']){
    await p.goto(gallery+'#'+id);const d=p.locator('#project-dialog');await d.waitFor({state:'visible'});assert.match(await d.innerText(),/WEB LAB/);assert.match(await d.innerText(),/앱별로 분리/);assert.match(await d.innerText(),/선택적 계정 동기화/);await p.waitForFunction(()=>document.querySelector('#dialog-image').naturalWidth===1440);
    await p.screenshot({path:resolve(output,id+'-gallery-desktop.png')});for(const width of [390,320]){await p.setViewportSize({width,height:900});assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));assert(await d.evaluate(e=>e.scrollWidth<=e.clientWidth+1));await p.screenshot({path:resolve(output,id+'-gallery-'+width+'.png')});}await p.locator('#dialog-close').click();await p.setViewportSize({width:1440,height:1000});
  }
  await p.locator('#catalog-search').fill('계정 동기화');assert.equal(await p.locator('#project-grid .project-card').count(),2);assert.deepEqual(requests,[]);checks.push('two accurate descriptions, common account navigation/search, responsive details, zero gallery API calls');await context.close();assert.deepEqual(errors,[]);
  await writeFile(resolve(output,'report.json'),JSON.stringify({status:'PASS',gallery,engineer,study,capture,checks,errors},null,2));console.log(JSON.stringify({status:'PASS',checks}));
}finally{await browser.close();}
