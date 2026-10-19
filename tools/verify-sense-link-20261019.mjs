import {createRequire} from 'node:module';
import {resolve} from 'node:path';
import {mkdir,writeFile} from 'node:fs/promises';
import {verifyGalleryEdges,verifyDeniedGallery,verifyNoJSGallery} from './browser-edges.mjs';
const req=createRequire(process.env.PLAYWRIGHT_PACKAGE??resolve('../output/playwright/implement-20261012/package.json'));
const {chromium}=req('playwright');
const base=process.env.SENSE_BASE_URL||'http://127.0.0.1:61668';
if(!['127.0.0.1','hyungminyoon1.github.io'].includes(new URL(base).hostname))throw Error('Unexpected test host');
const out=resolve(`output/playwright/sense-20261019/${new URL(base).hostname==='127.0.0.1'?'local':'live'}`);
await mkdir(out,{recursive:true});
const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH??'C:/Program Files/Google/Chrome/Application/chrome.exe'}),results={};
try {
  const context=await browser.newContext({viewport:{width:1440,height:1000}}),page=await context.newPage();
  results.gallery=await verifyGalleryEdges(page,base,{capture:out});
  results.denied=await verifyDeniedGallery(browser,base);
  results.noJS=await verifyNoJSGallery(browser,base);
  console.log(JSON.stringify({status:'PASS',...results}));
} finally {
  await writeFile(resolve(out,'report.json'),JSON.stringify(results,null,2));await browser.close();
}
