// usage: node full.js <path> <out.jpg> [width]
const { chromium } = require('playwright');
(async () => {
  const [, , path, out, width = '1440'] = process.argv;
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: +width, height: 900 }, deviceScaleFactor: 1, reducedMotion: 'no-preference' });
  await p.goto('http://localhost:3210' + path, { waitUntil: 'networkidle' });
  const h = await p.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < h; y += 450) { await p.evaluate(v => window.scrollTo(0, v), y); await p.waitForTimeout(260); }
  await p.evaluate(() => window.scrollTo(0, 0)); await p.waitForTimeout(1500);
  // hide the dev-only Next.js badge
  await p.addStyleTag({ content: 'nextjs-portal{display:none!important}' });
  await p.screenshot({ path: out, fullPage: true, type: 'jpeg', quality: 82 });
  await b.close();
})();
