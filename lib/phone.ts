/**
 * Centralized phone configuration for AirNexa.
 *
 * Configure these via environment variables:
 *   NEXT_PUBLIC_SUPPORT_PHONE_DISPLAY  verified number shown to visitors
 *   NEXT_PUBLIC_SUPPORT_PHONE_TEL      verified international tel: number
 *
 * Without both verified values, call actions remain disabled and the site
 * shows a configuration message instead of a sample number.
 */

const rawDisplay = process.env.NEXT_PUBLIC_SUPPORT_PHONE_DISPLAY;
const rawTel = process.env.NEXT_PUBLIC_SUPPORT_PHONE_TEL;

export const PHONE_DISPLAY = rawDisplay || "";
export const PHONE_TEL = rawTel || "";

/** True when a real, verified phone number is configured. */
export const PHONE_CONFIGURED = Boolean(
  rawDisplay && rawTel && rawTel.startsWith("+")
);

/** Neutral label shown in production when no number is configured. */
export const PRODUCTION_PLACEHOLDER = "Phone number not configured";
