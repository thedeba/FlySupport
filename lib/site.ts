const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://fly.airnexa.pro";

export const SITE_URL = configuredSiteUrl.replace(/\/+$/, "");
