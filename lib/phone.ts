/**
 * Centralized phone configuration for FlySupport.
 *
 * Configure these via environment variables:
 *   NEXT_PUBLIC_SUPPORT_PHONE_DISPLAY  e.g. "+1 (888) 555-0100"
 *   NEXT_PUBLIC_SUPPORT_PHONE_TEL      e.g. "+18885550100"
 *
 * A neutral placeholder is used only in development so the layout can be
 * reviewed without a verified number. Production never renders a fake number.
 */

const DEV_DISPLAY = "+1 (555) 000-0000";
const DEV_TEL = "+15550000000";

const isProduction = process.env.NODE_ENV === "production";

const rawDisplay = process.env.NEXT_PUBLIC_SUPPORT_PHONE_DISPLAY;
const rawTel = process.env.NEXT_PUBLIC_SUPPORT_PHONE_TEL;

export const PHONE_DISPLAY = rawDisplay || (isProduction ? "" : DEV_DISPLAY);
export const PHONE_TEL = rawTel || (isProduction ? "" : DEV_TEL);

/** True when a real, verified phone number is configured. */
export const PHONE_CONFIGURED = Boolean(
  rawDisplay && rawTel && rawTel.startsWith("+")
);

/** Neutral label shown in production when no number is configured. */
export const PRODUCTION_PLACEHOLDER = "Phone number not configured";
