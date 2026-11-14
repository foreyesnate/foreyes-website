// usage: node clip.js <path> <selector> <out.png> [width]
const { chromium } = require('playwright');
(async () => {
  const [, , path, sel, out, width = '390'] = process.argv;
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: +width, height: 900 }, deviceScaleFactor: 1 });
  await p.goto('http://localhost:3210' + path, { waitUntil: 'networkidle' });
  const el = p.locator(sel).first();
  await el.scrollIntoViewIfNeeded(); await p.waitForTimeout(3200);
  await el.screenshot({ path: out });
  await b.close();
})();
