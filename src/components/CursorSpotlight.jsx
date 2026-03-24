import { useEffect } from "react"
import { isLowPowerDevice } from "../utils/deviceDetect"

/**
 * CursorSpotlight — Mouse spotlight effect.
 * Updates --spotlight-x and --spotlight-y CSS vars on :root,
 * which are used by sections to render a mouse-reactive radial glow.
 * Disabled on Smart TV / low-power devices.
 */
export default function CursorSpotlight() {
  if (isLowPowerDevice()) return null


  useEffect(() => {

    let rafId

    const onMove = (e) => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--spotlight-x", `${e.clientX}px`)
        document.documentElement.style.setProperty("--spotlight-y", `${e.clientY}px`)
      })
    }

    window.addEventListener("mousemove", onMove, { passive: true })

    return () => {
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(rafId)
    }

  }, [])

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{
        background: `radial-gradient(
          320px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%),
          rgba(99,102,241,0.07) 0%,
          rgba(34,211,238,0.03) 40%,
          transparent 70%
        )`
      }}
    />
  )
}