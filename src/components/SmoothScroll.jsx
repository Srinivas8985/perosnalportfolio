import { useEffect } from "react"
import Lenis from "lenis"

export default function SmoothScroll({ children }) {

  useEffect(() => {

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      orientation: "vertical",
      smoothWheel: true,
      smoothTouch: true,
      touchMultiplier: 1.5
    })

    let rafId

    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    // sync with anchor links (react-scroll)
    lenis.on("scroll", () => {
      document.documentElement.classList.toggle(
        "lenis-scrolling",
        true
      )
    })

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }

  }, [])

  return <>{children}</>
}