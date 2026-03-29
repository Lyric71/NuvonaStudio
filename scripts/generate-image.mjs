import 'dotenv/config';
import fs from 'fs';
import path from 'path';

const API_URL = 'https://api.wavespeed.ai/api/v3';
const MODEL = 'google/nano-banana-2/text-to-image';
const API_KEY = process.env.WAVESPEED_API_KEY;

const prompt = process.argv.slice(2).join(' ');

if (!prompt) {
  console.error('Usage: node scripts/generate-image.mjs <prompt>');
  console.error('Example: node scripts/generate-image.mjs A futuristic city skyline at sunset');
  process.exit(1);
}

if (!API_KEY) {
  console.error('Missing WAVESPEED_API_KEY in .env');
  process.exit(1);
}

async function generate() {
  console.log(`\nPrompt: "${prompt}"`);
  console.log('Submitting to WaveSpeed AI...\n');

  // 1. Submit task
  const submitRes = await fetch(`${API_URL}/${MODEL}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt,
      output_format: 'png',
      quality: '1K',
    }),
  });

  const submitData = await submitRes.json();

  if (submitData.code !== 200 || !submitData.data?.id) {
    console.error('Failed to submit:', submitData.message || submitData);
    process.exit(1);
  }

  const taskId = submitData.data.id;
  console.log(`Task ID: ${taskId}`);

  // 2. Poll for result
  for (let i = 0; i < 120; i++) {
    await new Promise((r) => setTimeout(r, 1000));
    process.stdout.write('.');

    const statusRes = await fetch(`${API_URL}/predictions/${taskId}/result`, {
      headers: { 'Authorization': `Bearer ${API_KEY}` },
    });

    const statusData = await statusRes.json();
    const status = statusData.data?.status;

    if (status === 'completed') {
      const imageUrl = statusData.data.outputs[0];
      console.log(`\n\nImage ready: ${imageUrl}`);

      // 3. Download and save
      const imgRes = await fetch(imageUrl);
      const buffer = Buffer.from(await imgRes.arrayBuffer());

      const filename = `generated-${Date.now()}.png`;
      const outPath = path.join('public', filename);
      fs.writeFileSync(outPath, buffer);

      console.log(`Saved to: ${outPath}`);
      console.log(`Use in Astro: <img src="/${filename}" />`);
      return;
    }

    if (status === 'failed') {
      console.error('\n\nGeneration failed.');
      process.exit(1);
    }
  }

  console.error('\n\nTimed out.');
  process.exit(1);
}

generate();
