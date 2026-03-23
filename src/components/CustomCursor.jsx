import { useEffect, useRef, useState } from "react"

export default function CustomCursor() {

  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {

    if (window.matchMedia("(hover: none)").matches) {
      setIsTouch(true)
      return
    }

    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    /* Instant dot and ring — follows cursor exactly */
    const onMove = (e) => {
      dot.style.setProperty("--x", `${e.clientX}px`)
      dot.style.setProperty("--y", `${e.clientY}px`)
      ring.style.setProperty("--x", `${e.clientX}px`)
      ring.style.setProperty("--y", `${e.clientY}px`)
    }

    /* Expand ring on hover targets */
    const grow   = () => ring.classList.add("cursor-grow")
    const shrink = () => ring.classList.remove("cursor-grow")

    const targets = document.querySelectorAll("a, button, .card-hover, [data-cursor-grow]")
    targets.forEach(el => {
      el.addEventListener("mouseenter", grow)
      el.addEventListener("mouseleave", shrink)
    })

    /* Click ripple */
    const onClick = (e) => {
      const ripple = document.createElement("div")
      ripple.style.cssText = `
        position: fixed;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        width: 6px; height: 6px;
        border-radius: 50%;
        border: 1.5px solid var(--primary);
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
        pointer-events: none;
        z-index: 9997;
        animation: cursorRipple 0.55s var(--ease-smooth) forwards;
      `
      document.body.appendChild(ripple)
      setTimeout(() => ripple.remove(), 600)
    }

    document.addEventListener("mousemove", onMove)
    document.addEventListener("click", onClick)

    return () => {
      document.removeEventListener("mousemove", onMove)
      document.removeEventListener("click", onClick)
      targets.forEach(el => {
        el.removeEventListener("mouseenter", grow)
        el.removeEventListener("mouseleave", shrink)
      })
    }

  }, [])

  if (isTouch) return null

  return (
    <>
      {/* === Cursor ripple keyframe === */}
      <style>{`
        @keyframes cursorRipple {
          0%   { transform: translate(-50%,-50%) scale(1); opacity: 1; }
          100% { transform: translate(-50%,-50%) scale(6); opacity: 0; }
        }
        .cursor-grow {
          scale: 1.8 !important;
          opacity: 0.7 !important;
          background: rgba(99,102,241,0.1) !important;
          border-color: rgba(99,102,241,0.8) !important;
        }
      `}</style>

      {/* Cursor dot — instant */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-[6px] h-[6px] rounded-full pointer-events-none z-[9999]"
        style={{
          background: "var(--primary)",
          transform: "translate3d(calc(var(--x, -100px) - 50%), calc(var(--y, -100px) - 50%), 0)",
          boxShadow: "0 0 10px rgba(99,102,241,0.9)",
          willChange: "transform"
        }}
      />

      {/* Cursor ring — instant layout */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998]"
        style={{
          transform: "translate3d(calc(var(--x, -100px) - 50%), calc(var(--y, -100px) - 50%), 0)",
          scale: 1,
          border: "1.5px solid rgba(99,102,241,0.5)",
          transition: "scale 0.15s ease-out, opacity 0.15s, background 0.15s, border-color 0.15s",
          willChange: "transform"
        }}
      />
    </>
  )
}