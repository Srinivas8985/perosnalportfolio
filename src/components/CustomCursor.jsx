import { useEffect, useRef, useState } from "react"

export default function CustomCursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(hover: none)").matches) {
      setIsTouch(true)
      return
    }

    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mx = -100, my = -100
    let rx = -100, ry = -100
    let rafId

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      
      // Update dot INSTANTLY. No lerp. 
      // Translate minus 50% to center perfectly on the cursor coordinate.
      dot.style.transform = `translate3d(calc(${mx}px - 50%), calc(${my}px - 50%), 0)`
    }

    const tick = () => {
      // Lerp the outer ring for a smooth trailing effect
      rx += (mx - rx) * 0.15
      ry += (my - ry) * 0.15
      
      // Translate minus 50% to center.
      ring.style.transform = `translate3d(calc(${rx}px - 50%), calc(${ry}px - 50%), 0)`
      
      rafId = requestAnimationFrame(tick)
    }

    const expand = () => ring.classList.add("scale-[1.8]", "border-sky-300", "bg-sky-400/10")
    const shrink = () => ring.classList.remove("scale-[1.8]", "border-sky-300", "bg-sky-400/10")

    const attachHover = () => {
      document.querySelectorAll("a, button, [data-cursor-grow]").forEach(el => {
        el.addEventListener("mouseenter", expand)
        el.addEventListener("mouseleave", shrink)
      })
    }

    document.addEventListener("mousemove", onMove)
    rafId = requestAnimationFrame(tick)
    
    // Attach hover effects after a brief delay to allow React to render DOM
    setTimeout(attachHover, 1000)

    return () => {
      document.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  if (isTouch) return null

  return (
    <>
      {/* Inner dot – Zero lag */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-sky-400 pointer-events-none z-[9999]"
        style={{
          boxShadow: "0 0 10px 2px rgba(56,189,248,0.8)",
          willChange: "transform",
        }}
      />

      {/* Outer ring – lagged follow */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border-2 border-sky-400/50 pointer-events-none z-[9998]"
        style={{
          transition: "transform 0s, width 0.2s, height 0.2s, background-color 0.2s, border-color 0.2s, scale 0.2s",
          willChange: "transform",
        }}
      />
    </>
  )
}