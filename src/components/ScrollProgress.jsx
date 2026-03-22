import { useEffect, useState } from "react"

export default function ScrollProgress() {

  const [progress, setProgress] = useState(0)

  useEffect(() => {

    const handleScroll = () => {

      const scrollTop = document.documentElement.scrollTop
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight

      const percent = scrollHeight > 0
        ? scrollTop / scrollHeight
        : 0

      setProgress(percent)

    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () =>
      window.removeEventListener("scroll", handleScroll)

  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[100] pointer-events-none">

      {/* glow background */}
      <div
        className="absolute top-0 left-0 h-full blur-sm opacity-60"
        style={{
          width: `${progress * 100}%`,
          background:
            "linear-gradient(90deg,#38bdf8,#22d3ee,#a78bfa)"
        }}
      />

      {/* main bar */}
      <div
        className="absolute top-0 left-0 h-full"
        style={{
          width: `${progress * 100}%`,
          background:
            "linear-gradient(90deg,#38bdf8,#22d3ee,#a78bfa)"
        }}
      />

    </div>
  )
}