export const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;

export type UtmKey = (typeof UTM_KEYS)[number];
export type UtmParams = Partial<Record<UtmKey, string>>;

const STORAGE_KEY = "mirflow-utm";

export function cleanUtm(value: string | null | undefined): string | null {
  if (!value) return null;
  const cleaned = value.replace(/[\u0000-\u001F\u007F]/g, "").trim().slice(0, 200);
  return cleaned || null;
}

export function readStoredUtms(): UtmParams {
  if (typeof sessionStorage === "undefined") return {};
  try {
    const parsed = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "{}") as Record<string, unknown>;
    const result: UtmParams = {};
    for (const key of UTM_KEYS) {
      const value = cleanUtm(typeof parsed[key] === "string" ? parsed[key] : null);
      if (value) result[key] = value;
    }
    return result;
  } catch {
    return {};
  }
}

/** Keep the first landing page's campaign parameters after the visitor navigates. */
export function rememberUtms(search: { get(name: string): string | null }): UtmParams {
  const current = readStoredUtms();
  let changed = false;
  for (const key of UTM_KEYS) {
    const value = cleanUtm(search.get(key));
    if (value && current[key] !== value) {
      current[key] = value;
      changed = true;
    }
  }
  if (changed && typeof sessionStorage !== "undefined") {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(current));
    } catch {
      // Private browsing can block storage. The current page's parameters still submit.
    }
  }
  return current;
}
