// usage: node shot.js <path> <outPrefix> [width] [fullPage(1/0)] [waitMs]
const { chromium } = require('playwright');
(async () => {
  const [, , path = '/', out = 'shot', width = '1440', full = '1', wait = '1200'] = process.argv;
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: +width, height: +width < 600 ? 844 : 900 }, deviceScaleFactor: 1 });
  const errors = [];
  page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', e => errors.push('PAGEERROR ' + e.message));
  await page.goto('http://localhost:3210' + path, { waitUntil: 'networkidle' });
  // scroll through to trigger in-view reveals
  const h = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < h; y += 500) { await page.evaluate(v => window.scrollTo(0, v), y); await page.waitForTimeout(120); }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(+wait);
  if (full === '1') {
    const vh = +width < 600 ? 844 : 900; let i = 0;
    for (let y = 0; y < h; y += vh) {
      await page.evaluate(v => window.scrollTo(0, v), y); await page.waitForTimeout(500);
      await page.screenshot({ path: `${out}-${String(i++).padStart(2, '0')}.png` });
    }
  } else { await page.screenshot({ path: `${out}.png` }); }
  if (errors.length) console.log('CONSOLE ERRORS:\n' + errors.slice(0, 10).join('\n'));
  console.log('height', h);
  await browser.close();
})();
