import { useRef } from "react"
import { motion } from "framer-motion"

export default function MagneticButton({ children, href, onClick, className = "" }) {
  const ref = useRef(null)

  const handleMouseMove = (e) => {
    const el = ref.current
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`
  }

  const reset = () => {
    ref.current.style.transform = "translate(0px, 0px)"
  }

  const baseClass = `magnetic relative inline-flex items-center justify-center
    px-7 py-3 rounded-xl font-semibold text-sm tracking-wide
    border-2 border-sky-400 text-sky-400
    hover:bg-sky-400 hover:text-slate-950
    transition-colors duration-200
    shadow-[0_0_0px_rgba(56,189,248,0)] hover:shadow-[0_0_24px_rgba(56,189,248,0.5)]
    ${className}`

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      className={baseClass}
      style={{ willChange: "transform", transition: "transform 0.15s cubic-bezier(.23,1,.32,1), background 0.2s, box-shadow 0.2s" }}
    >
      {children}
    </motion.div>
  )

  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {inner}
      </a>
    )
  }

  return (
    <button onClick={onClick} style={{ background: "none", border: "none", padding: 0 }}>
      {inner}
    </button>
  )
}
