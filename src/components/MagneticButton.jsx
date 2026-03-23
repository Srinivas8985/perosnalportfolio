import { useRef } from "react"
import { motion } from "framer-motion"

export default function MagneticButton({
  children,
  hoverText,
  href,
  onClick,
  className = ""
}) {

  const ref = useRef(null)

  const handleMouseMove = (e) => {

    const el = ref.current
    const rect = el.getBoundingClientRect()

    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    const strength = 0.35

    el.style.transform =`translate(${x * 0.35}px, ${y * 0.35}px)`
  }

  const reset = () => {
    ref.current.style.transform = "translate(0px,0px) scale(1)"
  }

  const baseClass = `
  magnetic relative inline-flex items-center justify-center
  px-7 py-3 rounded-xl font-semibold text-sm tracking-wide
  border-2 border-sky-400 text-sky-400
  overflow-hidden
  transition-colors duration-200
  hover:bg-sky-400 hover:text-slate-950
  shadow-[0_0_0px_rgba(56,189,248,0)]
  hover:shadow-[0_0_35px_rgba(56,189,248,0.6)]
  ${className}
  `

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      whileTap={{ scale: 0.92 }}
      className={baseClass}
      style={{
        willChange: "transform",
        transition:
          "transform 0.2s cubic-bezier(.23,1,.32,1), box-shadow 0.25s"
      }}
    >

      {/* glow ripple */}
      <span className="absolute inset-0 opacity-0 group-hover:opacity-100
      bg-gradient-to-r from-sky-400/20 via-cyan-400/20 to-sky-400/20
      blur-xl transition duration-500"/>

      <span className="relative z-10 block overflow-hidden h-5 leading-5 items-center justify-center">
        <div className={`flex flex-col transition-transform duration-300 ${hoverText ? 'group-hover:-translate-y-5' : ''}`}>
          <span className="h-5 flex items-center justify-center">{children}</span>
          {hoverText && (
            <span className="h-5 flex items-center justify-center text-cyan-200">{hoverText}</span>
          )}
        </div>
      </span>

    </motion.div>
  )

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noreferrer"
        className="group"
      >
        {inner}
      </a>
    )
  }

  return (
    <button
      onClick={onClick}
      className="group"
      style={{ background: "none", border: "none", padding: 0 }}
    >
      {inner}
    </button>
  )
}