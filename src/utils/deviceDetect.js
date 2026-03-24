/**
 * Detects Smart TVs and other low-power / legacy devices by inspecting
 * the user agent string. Returns true for Tizen (Samsung), webOS (LG),
 * and generic SmartTV browsers.
 */
export const isLowPowerDevice = () => {
  if (typeof navigator === "undefined") return false
  const ua = navigator.userAgent.toLowerCase()
  return (
    ua.includes("tv") ||
    ua.includes("smarttv") ||
    ua.includes("tizen") ||
    ua.includes("webos")
  )
}
