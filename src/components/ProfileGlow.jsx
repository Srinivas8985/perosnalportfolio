import { useRef } from "react"

export default function ProfileGlow({ children }) {

  const ref = useRef(null)

  const handleMove = (e) => {

    const el = ref.current
    const rect = el.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 12
    const rotateY = (centerX - x) / 12

    el.style.transform =
      `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`

    el.style.setProperty("--mouse-x", `${x}px`)
    el.style.setProperty("--mouse-y", `${y}px`)
  }

  const reset = () => {
    ref.current.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg)"
  }

  return (

    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="relative transition-transform duration-300"
      style={{
        "--mouse-x": "50%",
        "--mouse-y": "50%"
      }}
    >

      {/* glow light */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background:
          "radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(168,85,247,0.45), transparent 60%)",
          filter:"blur(40px)",
          opacity:.7
        }}
      />

      {children}

    </div>
  )
}