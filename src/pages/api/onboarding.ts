export const prerender = false;

import type { APIRoute } from 'astro';
import { bookingHandler } from '../../lib/onboarding-booking';

// The onboarding booking form of the English, French, Spanish and German
// pages. Same checks and same email as /api/onboarding-zh; see
// src/lib/onboarding-booking.ts. The email subject is tagged [Onboarding].
export const POST: APIRoute = bookingHandler('default');
