import { useEffect, useRef } from "react"

export default function CursorSpotlight(){

  const ref = useRef(null)

  useEffect(() => {

    const move = (e) => {

      const x = e.clientX
      const y = e.clientY

      ref.current.style.background =
        `radial-gradient(
          600px circle at ${x}px ${y}px,
          rgba(56,189,248,0.15),
          transparent 40%
        )`
    }

    window.addEventListener("mousemove", move)

    return () => window.removeEventListener("mousemove", move)

  }, [])

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-[1]"
    />
  )
}