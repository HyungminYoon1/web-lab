import {createRequire} from 'node:module';
import {resolve} from 'node:path';
import {mkdir,writeFile} from 'node:fs/promises';
import {verifyGalleryEdges,verifyDeniedGallery,verifyNoJSGallery} from './browser-edges.mjs';
import * as engineer from '../../engineer-practice/tools/browser-edges.mjs';
import * as ranking from '../../web-lab-ranking/tools/browser-edges.mjs';
// Integration tooling only: requires sibling repositories, existing local
// Playwright installation, dist server and Wrangler dev. Not a runtime dependency.
const req=createRequire(process.env.PLAYWRIGHT_PACKAGE??resolve('../output/playwright/implement-20261012/package.json'));
const {chromium}=req('playwright'),base=process.argv[2]??'http://127.0.0.1:59540',api=process.argv[3]??'http://127.0.0.1:59610';
for(const url of [base,api])if(new URL(url).hostname!=='127.0.0.1')throw Error('Loopback required');
const out=resolve('../output/playwright/edge-20261013');await mkdir(out,{recursive:true});
const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH??'C:/Program Files/Google/Chrome/Application/chrome.exe',args:['--mute-audio']}),results={};
try{
  const context=await browser.newContext({viewport:{width:1440,height:1000},acceptDownloads:true}),page=await context.newPage();
  results.gallery=await verifyGalleryEdges(page,base,{capture:out});results.galleryDenied=await verifyDeniedGallery(browser,base);results.galleryNoJS=await verifyNoJSGallery(browser,base);
  await context.close();const studyContext=await browser.newContext({viewport:{width:1440,height:1000},acceptDownloads:true}),study=await studyContext.newPage();
  results.engineerDate=await engineer.verifyEngineerDate(study,base);results.engineer=await engineer.verifyEngineerFlows(study,base,{capture:out});
  results.engineerLate=await engineer.verifyEngineerLateBackup(browser,base);results.engineerStale=await engineer.verifyEngineerStaleSubmit(browser,base);results.engineerHistory=await engineer.verifyEngineerHistoricGrade(browser,base);await studyContext.close();
  results.rankingFixtures=[];for(const game of ['neon-tactics','parcel-panic'])results.rankingFixtures.push(await ranking.verifyRankingFailures(browser,base,game));
  results.rankingLocal=await ranking.verifyRankingLocal(browser,base,api,{capture:out});
  console.log(JSON.stringify({status:'PASS',...results}));
}finally{await writeFile(resolve(out,'parent-browser-results.json'),JSON.stringify(results,null,2));await browser.close();}
