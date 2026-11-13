/**
 * Keeps the site owner's own visits out of the analytics.
 *
 * Open any page once with ?notrack=1 on each device and browser you use, and
 * that browser stops being counted. ?notrack=0 turns counting back on. The
 * flag lives in this browser's storage only and is never sent anywhere.
 */

const KEY = "hourglass-notrack";

/** Reads ?notrack= from the address and remembers the choice. Call before the first render. */
export function applyNoTrackParam() {
  try {
    const params = new URLSearchParams(window.location.search);
    const value = params.get("notrack");
    if (value === null) return;
    if (value === "0") localStorage.removeItem(KEY);
    else localStorage.setItem(KEY, "1");
    params.delete("notrack");
    const query = params.toString();
    window.history.replaceState(
      window.history.state,
      "",
      window.location.pathname + (query ? `?${query}` : "") + window.location.hash,
    );
  } catch {
    // storage unavailable: nothing to remember
  }
}

export function isOwnVisit() {
  try {
    return localStorage.getItem(KEY) === "1";
  } catch {
    return false;
  }
}
