export const prerender = false;

import type { APIRoute } from 'astro';

const WAVESPEED_API_URL = 'https://api.wavespeed.ai/api/v3';
const MODEL = 'google/nano-banana-2/text-to-image';

export const POST: APIRoute = async ({ request }) => {
  const apiKey = import.meta.env.WAVESPEED_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'WaveSpeed API key not configured.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let body: { prompt: string };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON body.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { prompt } = body;
  if (!prompt || typeof prompt !== 'string' || prompt.trim().length === 0) {
    return new Response(JSON.stringify({ error: 'A prompt is required.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    // 1. Submit the generation task
    const submitRes = await fetch(`${WAVESPEED_API_URL}/${MODEL}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: prompt.trim(),
        output_format: 'png',
        quality: '1K',
      }),
    });

    const submitData = await submitRes.json();

    if (submitData.code !== 200 || !submitData.data?.id) {
      return new Response(JSON.stringify({ error: submitData.message || 'Failed to submit generation task.' }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const taskId = submitData.data.id;

    // 2. Poll for completion (max ~60 seconds)
    const maxAttempts = 60;
    const pollInterval = 1000; // 1 second

    for (let i = 0; i < maxAttempts; i++) {
      await new Promise((r) => setTimeout(r, pollInterval));

      const statusRes = await fetch(`${WAVESPEED_API_URL}/predictions/${taskId}/result`, {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
        },
      });

      const statusData = await statusRes.json();
      const status = statusData.data?.status;

      if (status === 'completed') {
        return new Response(JSON.stringify({
          success: true,
          outputs: statusData.data.outputs,
          timings: statusData.data.timings,
        }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      if (status === 'failed') {
        return new Response(JSON.stringify({ error: 'Image generation failed.' }), {
          status: 502,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }

    return new Response(JSON.stringify({ error: 'Image generation timed out.' }), {
      status: 504,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (err) {
    console.error('WaveSpeed API error:', err);
    return new Response(JSON.stringify({ error: 'An unexpected error occurred.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
