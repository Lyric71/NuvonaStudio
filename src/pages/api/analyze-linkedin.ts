export const prerender = false;

import type { APIRoute } from 'astro';

// ═══════════════════════════════════════════════════════════════
// LINKEDIN PROFILE ANALYZER API
// Accepts a screenshot, sends to Claude Vision for analysis
// ═══════════════════════════════════════════════════════════════

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

// ── The analysis prompt sent to Claude ──────────────────────

const SYSTEM_PROMPT = `You are a LinkedIn profile analysis expert. You will receive a screenshot of a LinkedIn profile or company page. Analyze it against best-practice checks and return a structured JSON score.

SCORING MODEL:
- Each check has a weight: CRITICAL (3), HIGH (2), MEDIUM (1), LOW (0.5)
- Each check is scored: PASS (1.0), PARTIAL (0.5), FAIL (0.0), N/A (excluded)
- Section score = sum(weight × score) / sum(weight) × 100
- Overall score = weighted average of category scores

GRADE THRESHOLDS:
  95-100 = S (Elite / Top 1%)
  85-94  = A (Excellent / Top 10%)
  70-84  = B (Good / Above Average)
  55-69  = C (Average / Needs Work)
  40-54  = D (Below Average)
  0-39   = F (Poor / Major Overhaul)

PERSONAL PROFILE CHECKS (use if screenshot shows a personal profile):

CATEGORY: VISUAL IDENTITY (weight: 15)
- photo_exists (CRITICAL): Profile photo is present
- photo_quality (HIGH): Photo is well-lit, professional, clear headshot with face 60-70% of frame
- photo_appropriate (MEDIUM): No sunglasses/hats/filters, industry-appropriate attire, current-looking
- banner_exists (CRITICAL): Custom banner image (not default LinkedIn gradient)
- banner_value (CRITICAL): Banner communicates value proposition at a glance
- banner_quality (HIGH): Banner has readable text, is high-resolution, branded, mobile-friendly

CATEGORY: IDENTITY & DISCOVERABILITY (weight: 25)
- name_professional (CRITICAL): Full professional name without emojis or gimmicks
- verification_badge (HIGH): Verification badge present
- headline_custom (CRITICAL): Headline is customized beyond default "Title at Company"
- headline_value (CRITICAL): Headline describes what they do AND why it matters
- headline_keywords (CRITICAL): Contains 2-3 primary searchable keywords
- headline_no_buzzwords (HIGH): No empty buzzwords (guru, ninja, rockstar, visionary)
- headline_length (HIGH): Uses most of 220-character limit (150+ chars)
- headline_audience (HIGH): Written for the audience, not self-focused
- headline_separators (MEDIUM): Uses pipes | or dashes for readability
- url_custom (HIGH): Custom URL claimed (no random numbers in URL slug)

CATEGORY: CONTENT SECTIONS (weight: 30)
- about_exists (CRITICAL): About section is filled out
- about_hook (CRITICAL): First visible lines are compelling (not generic)
- about_first_person (HIGH): Written in first person
- about_story (HIGH): Story-driven, not a resume dump
- about_keywords (CRITICAL): Contains industry keywords naturally
- about_results (HIGH): Includes measurable results (numbers, %, revenue)
- about_cta (HIGH): Ends with a call to action
- about_formatting (MEDIUM): Uses short paragraphs and line breaks
- about_authentic (HIGH): Not obviously generic AI-generated text
- featured_exists (HIGH): Featured section is present with items
- featured_quality (MEDIUM): Featured items include thought leadership and proof of work
- experience_exists (CRITICAL): Experience section is populated
- experience_descriptions (CRITICAL): Roles have impact-focused descriptions (not just titles)
- experience_metrics (HIGH): Descriptions contain measurable metrics
- experience_logos (HIGH): Companies link to Company Pages (logos visible)
- education_exists (HIGH): Education section populated

CATEGORY: SKILLS & SOCIAL PROOF (weight: 15)
- skills_visible (CRITICAL): Skills section visible with meaningful skills listed
- skills_relevant (HIGH): Skills are specific and relevant (not generic like "Microsoft Office")
- recommendations_visible (HIGH): Recommendations section visible with entries
- recommendations_quality (HIGH): Recommendations mention specific skills/outcomes
- certifications_listed (MEDIUM): Relevant certifications listed

CATEGORY: ENGAGEMENT & ACTIVITY (weight: 15)
- recent_activity (CRITICAL): Evidence of recent posting activity
- content_quality (HIGH): Posts appear educational/value-driven
- content_variety (HIGH): Uses varied formats (not just text)
- connections_500 (HIGH): Shows 500+ connections
- engagement_visible (MEDIUM): Posts show meaningful engagement (comments, reactions)

COMPANY PAGE CHECKS (use if screenshot shows a company page):

CATEGORY: COMPANY VISUAL IDENTITY (weight: 10)
- co_logo_exists (CRITICAL): Company logo is present
- co_logo_quality (HIGH): Logo is legible and professional
- co_banner_exists (CRITICAL): Custom banner image present
- co_banner_quality (HIGH): Banner is on-brand, high-res, current messaging

CATEGORY: COMPANY IDENTITY (weight: 30)
- co_tagline_exists (CRITICAL): Tagline is set
- co_tagline_specific (HIGH): Tagline is specific and differentiated
- co_about_exists (CRITICAL): About/Description filled out
- co_about_quality (HIGH): Written in active, engaging voice with keywords
- co_about_cta (HIGH): Description includes a call to action
- co_specialties (HIGH): Specialties section populated
- co_website (CRITICAL): Website URL is set
- co_industry (HIGH): Industry is specified
- co_cta_button (HIGH): CTA button activated
- co_details (MEDIUM): Company size, type, location are filled in

CATEGORY: COMPANY CONTENT (weight: 30)
- co_recent_posts (CRITICAL): Evidence of recent posting activity
- co_content_quality (HIGH): Posts are value-driven, not just promotional
- co_content_variety (HIGH): Uses varied formats (carousels, video, images)
- co_engagement (HIGH): Posts show meaningful engagement
- co_follower_count (MEDIUM): Healthy follower count visible

CATEGORY: COMPANY FEATURES (weight: 30)
- co_employee_count (MEDIUM): Employee count visible and reasonable
- co_life_tab (MEDIUM): Life/culture content visible
- co_jobs (MEDIUM): Jobs tab or open positions visible

INSTRUCTIONS:
1. Determine if this is a PERSONAL profile or COMPANY page
2. Evaluate ONLY the checks you can see evidence for in the screenshot. Mark as "na" anything not visible.
3. Be fair but thorough. Most profiles have significant room for improvement.
4. For each failed/partial check, write a specific, actionable recommendation.
5. Identify the top 5 highest-impact priorities (CRITICAL failures first).
6. Identify quick wins (easy fixes under 10 minutes).
7. Note genuine strengths.

Return ONLY valid JSON (no markdown, no code fences) with this exact structure:
{
  "profile_type": "personal" or "company",
  "overall_score": 0-100,
  "overall_grade": "S"|"A"|"B"|"C"|"D"|"F",
  "categories": [
    {
      "name": "Category Name",
      "score": 0-100,
      "checks": [
        {
          "id": "check_id",
          "label": "Human readable label",
          "status": "pass"|"partial"|"fail"|"na",
          "impact": "CRITICAL"|"HIGH"|"MEDIUM"|"LOW",
          "recommendation": "Specific actionable recommendation or empty string if pass"
        }
      ]
    }
  ],
  "top_priorities": [
    {
      "label": "What needs fixing",
      "impact": "CRITICAL"|"HIGH",
      "recommendation": "Detailed actionable recommendation"
    }
  ],
  "quick_wins": ["Quick fix description 1", "Quick fix description 2"],
  "strengths": ["Strength 1", "Strength 2"]
}`;

// ═══════════════════════════════════════════════════════════════
// API ROUTE
// ═══════════════════════════════════════════════════════════════

export const POST: APIRoute = async ({ request }) => {
  const apiKey = import.meta.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return json({
      success: false,
      error: 'Analysis API key not configured. Please set ANTHROPIC_API_KEY in your environment.',
    }, 500);
  }

  let body: { image: string; media_type: string };
  try {
    body = await request.json();
  } catch {
    return json({ success: false, error: 'Invalid request body.' }, 400);
  }

  const { image, media_type } = body;
  if (!image || typeof image !== 'string') {
    return json({ success: false, error: 'A screenshot image is required.' }, 400);
  }

  // Validate media type
  const allowedTypes = ['image/png', 'image/jpeg', 'image/webp', 'image/gif'];
  const resolvedType = allowedTypes.includes(media_type) ? media_type : 'image/png';

  try {
    // ── Step 1: Validate this is a LinkedIn screenshot ──
    const validationResponse = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 50,
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'image',
                source: {
                  type: 'base64',
                  media_type: resolvedType,
                  data: image,
                },
              },
              {
                type: 'text',
                text: 'Is this a screenshot of a LinkedIn profile or LinkedIn company page? Reply with ONLY "yes" or "no". Nothing else.',
              },
            ],
          },
        ],
      }),
    });

    if (validationResponse.ok) {
      const valResult = await validationResponse.json();
      const valText = valResult.content?.[0]?.text?.trim().toLowerCase() || '';
      if (valText.startsWith('no')) {
        return json({
          success: false,
          error: 'This does not appear to be a LinkedIn profile screenshot. Please upload a screenshot of a LinkedIn personal profile or company page.',
        }, 400);
      }
    }

    // ── Step 2: Full analysis ──
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 4096,
        system: SYSTEM_PROMPT,
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'image',
                source: {
                  type: 'base64',
                  media_type: resolvedType,
                  data: image,
                },
              },
              {
                type: 'text',
                text: 'Analyze this LinkedIn profile screenshot. Evaluate every visible element against the checks listed in your instructions. Return the structured JSON analysis.',
              },
            ],
          },
        ],
      }),
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => null);
      const status = response.status;
      if (status === 401) {
        return json({ success: false, error: 'API authentication failed. Please check the ANTHROPIC_API_KEY.' }, 500);
      }
      if (status === 429) {
        return json({ success: false, error: 'Too many requests. Please try again in a moment.' }, 429);
      }
      console.error('Claude API error:', status, errData);
      return json({ success: false, error: `Analysis service error (${status}). Please try again.` }, 500);
    }

    const result = await response.json();

    // Extract the text content from Claude's response
    const textBlock = result.content?.find((b: any) => b.type === 'text');
    if (!textBlock?.text) {
      return json({ success: false, error: 'No analysis returned. Please try again.' }, 500);
    }

    // Parse the JSON from Claude's response (strip any markdown fences just in case)
    let analysisText = textBlock.text.trim();
    if (analysisText.startsWith('```')) {
      analysisText = analysisText.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '');
    }

    let analysis;
    try {
      analysis = JSON.parse(analysisText);
    } catch {
      console.error('Failed to parse Claude response:', analysisText.slice(0, 500));
      return json({ success: false, error: 'Failed to parse analysis results. Please try again.' }, 500);
    }

    return json({ success: true, analysis });

  } catch (err: any) {
    console.error('LinkedIn analysis error:', err);
    return json({ success: false, error: 'An error occurred during analysis. Please try again.' }, 500);
  }
};
