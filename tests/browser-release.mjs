import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {chromium} from 'playwright';

const port=8768,base='http://127.0.0.1:'+port;
const server=spawn('python3',['-m','http.server',String(port),'--bind','127.0.0.1'],{stdio:'ignore'});
let browser;
async function ready(){for(let n=0;n<60;n++){try{if((await fetch(base)).ok)return;}catch{}await new Promise(r=>setTimeout(r,200));}throw Error('S010 HTTP server not ready');}
try {
 await ready();browser=await chromium.launch({headless:true});
 for(const config of [
  {name:'desktop',width:1440,height:900,mobile:false},
  {name:'tablet',width:820,height:1180,mobile:false},
  {name:'touch-mobile',width:390,height:844,mobile:true}
 ]) {
  const errors=[],ctx=await browser.newContext({viewport:{width:config.width,height:config.height},isMobile:config.mobile,hasTouch:config.mobile,reducedMotion:'reduce'});
  const page=await ctx.newPage();
  page.on('pageerror',e=>errors.push('pageerror '+e.message));
  page.on('console',m=>{if(m.type()==='error'&&!m.text().includes('fonts.googleapis'))errors.push('console '+m.text());});
  await page.goto(base+'/#discover');
  await page.locator('#atlas-search').waitFor();
  assert.equal(await page.locator('#region-nav button').count(),8,config.name+' regions');
  assert.ok(await page.locator('nav[aria-label]').count()>0,'missing labelled nav');
  await page.locator('#atlas-search').fill('Hardy');
  assert.ok(await page.locator('.discovery-result').count()>0,config.name+' search');
  await page.locator('#atlas-search').press('Escape');
  assert.equal(await page.locator('#atlas-search').inputValue(),'');
  await page.locator('[data-navigate="journey--advanced"]').first().click();
  assert.equal(await page.locator('.journey-steps > li').count(),7);
  await page.locator('[data-journey-step="advanced"][data-journey-index="3"]').click();
  assert.equal(new URL(page.url()).hash,'#connection--euler-factors-analogy');
  const sources=page.locator('#story-content .story-sources a');
  assert.ok(await sources.count()>0,config.name+' evidence links');
  assert.ok((await sources.first().getAttribute('href')).startsWith('https://'));
  assert.equal(await sources.first().getAttribute('rel'),'noopener noreferrer');
  await page.goBack();assert.equal(new URL(page.url()).hash,'#journey--advanced');
  await page.goForward();assert.equal(new URL(page.url()).hash,'#connection--euler-factors-analogy');
  await page.locator('#map-up').click();assert.equal(new URL(page.url()).hash,'#connections');
  await page.locator('#map-home').click();assert.equal(new URL(page.url()).hash,'');
  for(const hash of ['hall','critical-line-exhibit','density-guth','keep-vk-exhibit','dungeon-count-exhibit','selberg-axioms-exhibit','grh-characters-exhibit','erh-gaussian-exhibit','journey--beginner']){
   await page.goto(base+'/#'+hash);
   assert.equal(new URL(page.url()).hash,'#'+hash,config.name+' route '+hash);
   assert.ok((await page.locator('#story-content').innerText()).trim().length>50,config.name+' empty story '+hash);
  }
  await page.reload();
  assert.equal(new URL(page.url()).hash,'#journey--beginner');
  await page.goto(base+'/#invalid-s010-route');await page.waitForFunction(()=>location.hash==='');
  assert.equal(new URL(page.url()).hash,'');
  assert.ok(!(await page.evaluate(()=>document.documentElement.scrollWidth > innerWidth+2)),config.name+' horizontal overflow');
  assert.deepEqual(errors,[],config.name+' runtime errors');
  const timings=await page.evaluate(()=>({domReady:Math.round(performance.getEntriesByType('navigation')[0]?.domContentLoadedEventEnd||0),nodes:document.querySelectorAll('*').length}));
  assert.ok(timings.nodes<5000,config.name+' unexpectedly large DOM');
  console.log('S010 '+config.name+' route/keyboard/history/evidence/reduced-motion/error/overflow check; DOM nodes '+timings.nodes+'; DOMContentLoaded '+timings.domReady+'ms (observational, not SLA)');
  await ctx.close();
 }
 console.log('PASS S010 HTTP Chromium desktop/tablet/touch-mobile evidence, keyboard, routes, Back/Forward/Up/Home, reduced-motion, no overflow/errors');
} finally {await browser?.close();server.kill();}
