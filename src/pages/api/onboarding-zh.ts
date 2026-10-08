export const prerender = false;

import type { APIRoute } from 'astro';
import { bookingHandler } from '../../lib/onboarding-booking';

// The onboarding booking form of the Chinese page, as /api/contact-zh is to
// /api/contact: errors in Chinese, the admin email (in English) marked (ZH).
// See src/lib/onboarding-booking.ts. The email subject is tagged [Onboarding].
export const POST: APIRoute = bookingHandler('zh');
