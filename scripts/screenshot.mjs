import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..', 'screenshots');
mkdirSync(outDir, { recursive: true });

const baseUrl = process.env.URL ?? 'http://localhost:4173';

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'laptop', width: 1280, height: 800 },
  { name: 'tablet', width: 820, height: 1180 },
  { name: 'mobile', width: 390, height: 844 },
];

const pages = [
  { name: 'home', path: '/home' },
  { name: 'tour', path: '/tour' },
  { name: 'about', path: '/about' },
  { name: 'contact', path: '/contact' },
];

const browser = await chromium.launch();
try {
  for (const vp of viewports) {
    const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, deviceScaleFactor: 1 });
    const page = await context.newPage();
    for (const p of pages) {
      await page.goto(baseUrl + p.path, { waitUntil: 'networkidle', timeout: 20000 });
      await page.waitForTimeout(500);
      const file = join(outDir, `${vp.name}-${p.name}.png`);
      await page.screenshot({ path: file, fullPage: false });
      console.log('wrote', file);
    }
    await context.close();
  }
} finally {
  await browser.close();
}
