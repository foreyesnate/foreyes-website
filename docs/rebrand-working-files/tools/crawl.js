// Crawl every internal page of the production build and report problems.
const { chromium } = require('playwright');
const BASE = 'http://localhost:3220';
(async () => {
  const browser = await chromium.launch();
  const seen = new Map(); const queue = ['/']; const anchors = []; const problems = [];
  const ids = new Map();
  for (const mode of ['no-preference', 'reduce']) {
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: mode });
    const todo = mode === 'no-preference' ? queue : [...seen.keys()].filter(p => seen.get(p) === 200);
    const visited = new Set();
    while (todo.length) {
      const path = todo.shift(); if (visited.has(path)) continue; visited.add(path);
      const page = await ctx.newPage(); const errs = [];
      page.on('console', m => { if (m.type() === 'error') errs.push(m.text().slice(0, 220)); });
      page.on('pageerror', e => errs.push('PAGEERROR ' + e.message.slice(0, 220)));
      const res = await page.goto(BASE + path, { waitUntil: 'networkidle' }).catch(e => null);
      const status = res ? res.status() : 0;
      if (mode === 'no-preference') seen.set(path, status);
      if (status !== 200) { if (mode === 'no-preference') problems.push(`STATUS ${status} ${path}`); await page.close(); continue; }
      await page.waitForTimeout(500);
      const info = await page.evaluate(() => ({
        links: [...document.querySelectorAll('a[href]')].map(a => a.getAttribute('href')),
        ids: [...document.querySelectorAll('[id]')].map(e => e.id),
        overflow: document.documentElement.scrollWidth - window.innerWidth,
        h1: document.querySelectorAll('h1').length,
        title: document.title, desc: (document.querySelector('meta[name=description]') || {}).content || '',
        canonical: (document.querySelector('link[rel=canonical]') || {}).href || '',
        imgsNoAlt: [...document.querySelectorAll('img:not([alt])')].length,
        dupIds: (() => { const c = {}; document.querySelectorAll('[id]').forEach(e => c[e.id] = (c[e.id] || 0) + 1); return Object.keys(c).filter(k => c[k] > 1); })(),
      }));
      if (mode === 'no-preference') {
        ids.set(path, new Set(info.ids));
        for (const href of info.links) {
          if (!href || /^(https?:|mailto:|tel:)/.test(href)) continue;
          const [p, hash] = href.split('#'); const target = p || path;
          if (hash) anchors.push([path, target, hash]);
          if (!seen.has(target) && !todo.includes(target) && !visited.has(target)) todo.push(target);
        }
        if (info.overflow > 1) problems.push(`OVERFLOW ${info.overflow}px at 390 ${path}`);
        if (info.h1 !== 1) problems.push(`H1 count ${info.h1} ${path}`);
        if (info.desc.length < 110 || info.desc.length > 165) problems.push(`DESC length ${info.desc.length} ${path}`);
        if (!info.canonical && path !== '/this-page-does-not-exist') problems.push(`NO CANONICAL ${path}`);
        if (info.imgsNoAlt) problems.push(`IMG without alt x${info.imgsNoAlt} ${path}`);
        if (info.dupIds.length) problems.push(`DUPLICATE ids ${info.dupIds.slice(0, 5).join(',')} ${path}`);
      }
      if (errs.length) problems.push(`CONSOLE (${mode}) ${path}: ${[...new Set(errs)].slice(0, 3).join(' | ')}`);
      await page.close();
    }
    await ctx.close();
  }
  for (const [from, target, hash] of anchors) {
    const set = ids.get(target); if (set && !set.has(hash)) problems.push(`MISSING ANCHOR ${target}#${hash} (linked from ${from})`);
  }
  // legacy redirects
  const ctx = await browser.newContext();
  for (const old of ['/services/billing-services', '/services/accounts-receivable-management', '/services/accounting', '/services/accounting/accounts-payable', '/services/practice-consulting/financial-consulting', '/services/tax-services', '/services/tax-services/tax-planning', '/services/tax-services/tax-advisory', '/blog/quarterly-taxes-optometrists', '/book-a-call', '/about']) {
    const r = await ctx.request.get(BASE + old, { maxRedirects: 5 });
    if (r.status() !== 200) problems.push(`REDIRECT ${old} -> ${r.status()} ${r.url()}`);
  }
  console.log('pages crawled:', seen.size, [...seen.keys()].sort().join(' '));
  console.log(problems.length ? [...new Set(problems)].join('\n') : 'NO PROBLEMS');
  await browser.close();
})();
