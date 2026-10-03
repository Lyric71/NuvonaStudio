// Submit every URL in the built sitemap to IndexNow (Bing, Yandex, Naver,
// Seznam). Google does not use IndexNow. Run after a deploy is live, since the
// engines fetch the key file from the site to verify ownership:
//   npm run build && npm run indexnow
import fs from 'node:fs';

const HOST = 'www.nuvora.studio';
const KEY = '6da839627506c76c2bd55b0f1c9ca165';
const SITEMAP = 'dist/client/sitemap-0.xml';

if (!fs.existsSync(SITEMAP)) {
  console.error(`${SITEMAP} not found. Run npm run build first.`);
  process.exit(1);
}

const urlList = [...fs.readFileSync(SITEMAP, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});

console.log(`IndexNow: ${urlList.length} URLs submitted, HTTP ${res.status}`);
if (!res.ok && res.status !== 202) process.exit(1);
