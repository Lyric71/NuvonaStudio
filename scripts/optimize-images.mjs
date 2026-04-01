/**
 * Auto-optimize images: converts any PNG/JPG in public/ to WebP.
 * Runs automatically before every build via the "prebuild" npm script.
 * Also available manually: npm run optimize-images
 */
import sharp from 'sharp';
import { readdir, stat, unlink, access } from 'fs/promises';
import { join } from 'path';

const PUBLIC = 'public';
const QUALITY = 80;

// These must stay as PNG (browser compatibility)
const SKIP = new Set([
  'favicon.png',
  'favicon-256.png',
  'apple-touch-icon.png',
]);

async function scanDir(dir) {
  let files = [];
  try {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = join(dir, entry.name);
      if (entry.isDirectory() && !entry.name.startsWith('.')) {
        files.push(...await scanDir(fullPath));
      } else if (/\.(png|jpe?g)$/i.test(entry.name) && !SKIP.has(entry.name)) {
        files.push(fullPath);
      }
    }
  } catch { /* dir doesn't exist */ }
  return files;
}

async function convert(filePath) {
  const webpPath = filePath.replace(/\.(png|jpe?g)$/i, '.webp');

  // Skip if WebP already exists and is newer than the source
  try {
    const srcStat = await stat(filePath);
    const webpStat = await stat(webpPath);
    if (webpStat.mtimeMs >= srcStat.mtimeMs) return null;
  } catch { /* WebP doesn't exist yet, proceed */ }

  const info = await stat(filePath);
  await sharp(filePath).webp({ quality: QUALITY }).toFile(webpPath);
  const webpInfo = await stat(webpPath);
  const savings = ((1 - webpInfo.size / info.size) * 100).toFixed(1);

  // Delete the original PNG/JPG after successful conversion
  await unlink(filePath);

  console.log(
    `  ${filePath} -> .webp (${(info.size / 1024).toFixed(0)}KB -> ${(webpInfo.size / 1024).toFixed(0)}KB, ${savings}% smaller)`
  );
  return { before: info.size, after: webpInfo.size };
}

async function main() {
  const files = await scanDir(PUBLIC);
  if (files.length === 0) {
    console.log('[optimize-images] All images already optimized.');
    return;
  }

  console.log(`[optimize-images] Found ${files.length} PNG/JPG file(s) to convert:\n`);

  let converted = 0;
  let totalSaved = 0;

  for (const f of files) {
    const result = await convert(f);
    if (result) {
      converted++;
      totalSaved += result.before - result.after;
    }
  }

  if (converted > 0) {
    console.log(`\n[optimize-images] Converted ${converted} image(s), saved ${(totalSaved / 1024 / 1024).toFixed(1)}MB`);
    console.log('[optimize-images] Remember to update any new .png/.jpg references to .webp in your .astro files.');
  } else {
    console.log('[optimize-images] All images already optimized.');
  }
}

main();
