import assert from 'node:assert/strict';
import {projects} from '../dist/src/projects.js';

// Invoke from an isolated Playwright session. Storage writes below are synthetic
// fixtures in a second test tab, never the user's browser profile.
export async function verifyGalleryEdges(page,base,{capture}={}){
  const origin=new URL(base);assert.ok(['127.0.0.1','hyungminyoon1.github.io'].includes(origin.hostname));
  const checks=[],errors=[];page.on('pageerror',e=>errors.push(e.message));
  const check=(name,value)=>{assert.ok(value,name);checks.push(name);};
  await page.goto(base+'/web-lab/');
  check('all catalog cards initially visible',await page.locator('.project-card').count()===projects.length);
  await page.locator('#catalog-search').fill('nothing-matches-this-482');
  check('empty search disables random recommendation',await page.locator('#choose-project').isDisabled());
  check('empty state is visible',await page.locator('#empty-state').isVisible());
  await page.locator('#clear-search').click();
  check('clear resets result count and returns focus',await page.locator('.project-card').count()===projects.length&&await page.locator('#catalog-search').evaluate(el=>el===document.activeElement));
  await page.locator('[data-filter="creative"]').click();await page.locator('#difficulty-filter').selectOption('advanced');
  check('combined filters do not show another category',await page.locator('.project-card').evaluateAll(xs=>xs.every(x=>['draw-desk','music-room','clay-room'].includes(x.dataset.project))));
  await page.locator('#catalog-search').fill('zz-no-match');await page.locator('#catalog-search').press('Escape');
  check('Escape clears query only',await page.locator('#catalog-search').inputValue()===''&&await page.locator('#difficulty-filter').inputValue()==='advanced');
  await page.goto(base+'/web-lab/#sense-lab');
  check('deep link opens expected preview',await page.locator('#project-dialog').isVisible()&&await page.locator('#dialog-title').textContent()==='SENSE LAB');
  check('actual SENSE preview image decodes',await page.locator('#dialog-image').evaluate(async image=>{await image.decode();return image.naturalWidth>0;}));
  const peer=await page.context().newPage();await peer.goto(base+'/web-lab/');
  await peer.evaluate(()=>localStorage.setItem('web-lab-progress-v1',JSON.stringify({version:1,apps:{'sense-lab':{completed:1,total:6}}})));
  await page.waitForFunction(()=>document.querySelector('#dialog-session').textContent.includes('1/6종 체험 완료'));
  check('six-kind update reaches an already-open dialog',true);
  await peer.evaluate(()=>localStorage.setItem('web-lab-progress-v1',JSON.stringify({version:1,apps:{'sense-lab':{completed:2,total:3}}})));
  await page.waitForFunction(()=>document.querySelector('#dialog-session').textContent.includes('2/6종 체험 완료 · 기존 기록'));
  check('legacy summary retains count and marks prior records',true);
  await page.keyboard.press('Escape');
  check('external summary update preserves preview opener focus',await page.locator('[data-project="sense-lab"] .project-preview').evaluate(el=>el===document.activeElement));
  check('closing preview clears project fragment only',new URL(page.url()).hash==='');
  await peer.evaluate(()=>localStorage.setItem('web-lab-progress-v1','{invalid'));
  await page.waitForFunction(()=>document.querySelector('[data-project="sense-lab"] .session-meta').textContent.includes('0/6종 체험 완료'));
  check('corrupt summary cannot claim completion or block browsing',await page.locator('.project-card').count()===projects.length);
  await peer.close();
  for(const hash of ['#unknown','#%00','#about']){await page.goto(base+'/web-lab/'+hash);check('non-project fragment closes preview '+hash,!(await page.locator('#project-dialog').isVisible()));}
  await page.goto(base+'/web-lab/');await page.locator('#choose-project').click();const first=await page.locator('#dialog-title').textContent();await page.locator('#dialog-close').click();await page.locator('#choose-project').click();
  check('random recommendation avoids immediate repeat',await page.locator('#dialog-title').textContent()!==first);await page.keyboard.press('Escape');
  check('random preview returns focus to its own opener',await page.locator('#choose-project').evaluate(el=>el===document.activeElement));
  for(const width of [1440,390,320]){
    await page.setViewportSize({width,height:width===1440?1000:844});await page.goto(base+'/web-lab/#clay-room');
    await page.locator('#project-dialog').waitFor({state:'visible'});
    check('dialog close usable at '+width,await page.locator('#dialog-close').isVisible());
    check('no horizontal viewport overflow at '+width,await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
    if(capture)await page.screenshot({path:capture+'/gallery-'+width+'.png',scale:'css'});
    await page.locator('#dialog-close').click();
    // The native dialog close event updates the URL asynchronously. Await its
    // observable completion before navigating to the same fragment again.
    await page.waitForFunction(()=>!document.querySelector('#project-dialog').open&&location.hash==='');
  }
  check('no uncaught page errors',errors.length===0);return{checks,errors};
}

export async function verifyDeniedGallery(browser,base){
  const context=await browser.newContext({viewport:{width:390,height:844}});
  try{await context.addInitScript(()=>{Object.defineProperty(window,'localStorage',{get(){throw new DOMException('denied','SecurityError');}});});const page=await context.newPage();await page.goto(base+'/web-lab/');assert.equal(await page.locator('.project-card').count(),projects.length);await page.locator('[data-project="sense-lab"] .project-preview').click();assert.equal(await page.locator('#dialog-title').textContent(),'SENSE LAB');await page.keyboard.press('Escape');return{deniedStorage:true};}finally{await context.close();}
}

export async function verifyNoJSGallery(browser,base){
  const context=await browser.newContext({javaScriptEnabled:false});
  try{const page=await context.newPage();await page.goto(base+'/web-lab/');assert.equal(await page.locator('.fallback-list a').count(),projects.length*2);assert.equal(await page.locator('.fallback-list').isVisible(),true);return{noJavaScriptLinks:projects.length*2};}finally{await context.close();}
}
