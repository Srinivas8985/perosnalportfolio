import { useState, useEffect } from "react"
import { Link } from "react-scroll"
import { motion, AnimatePresence } from "framer-motion"
import { HiMenuAlt3, HiX } from "react-icons/hi"
import ScrollProgress from "./ScrollProgress"

const NAV_ITEMS = [
  { label: "Home",           to: "hero" },
  { label: "About",          to: "about" },
  { label: "Skills",         to: "skills" },
  { label: "Projects",       to: "projects" },
  { label: "Certifications", to: "certifications" },
  { label: "Achievements",   to: "achievements" },
  { label: "Education",      to: "education" },
  { label: "Contact",        to: "contact" }
]

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("hero")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <ScrollProgress />

      <nav className="fixed w-full top-5 z-50 flex justify-center">

        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [.22,1,.36,1] }}
          className={`
            relative flex items-center justify-between
            w-[95%] max-w-[1200px]
            px-6 py-3 rounded-full
            transition-all
            ${scrolled
              ? "bg-[rgba(15,23,42,0.75)] backdrop-blur-2xl shadow-xl"
              : "bg-[rgba(15,23,42,0.45)] backdrop-blur-xl"
            }
          `}
          style={{
            border: "1px solid rgba(99,102,241,0.22)",
            boxShadow: scrolled
              ? "0 0 30px rgba(99,102,241,0.12), inset 0 1px 0 rgba(255,255,255,0.05)"
              : "inset 0 1px 0 rgba(255,255,255,0.05)"
          }}
        >

          {/* Gradient border shimmer */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, rgba(99,102,241,0.15), rgba(34,211,238,0.1), rgba(236,72,153,0.12), rgba(167,139,250,0.1))",
              opacity: scrolled ? 1 : 0.6,
              transition: "opacity 0.3s"
            }}
          />

          {/* Logo */}
          <span
            className="relative text-xl font-bold tracking-tight select-none"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            <span className="shine-text">Srinivas</span>
            <span style={{ color: "var(--text)" }}>.dev</span>
          </span>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium relative">
            {NAV_ITEMS.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                smooth
                duration={650}
                offset={-80}
                spy
                onSetActive={() => setActive(to)}
                className="relative cursor-pointer group py-1"
              >
                <span
                  className="transition-colors"
                  style={{
                    color: active === to ? "var(--primary)" : "var(--muted)",
                    transitionDuration: "var(--anim-fast)"
                  }}
                >
                  {label}
                </span>

                {/* Expanding beam underline */}
                <span
                  className="absolute left-0 -bottom-0.5 h-[2px] rounded-full transition-all"
                  style={{
                    width: active === to ? "100%" : "0%",
                    background: "linear-gradient(90deg, var(--primary), var(--secondary))",
                    boxShadow: active === to ? "0 0 10px rgba(34,211,238,0.6)" : "none",
                    transitionDuration: "var(--anim-mid)",
                    transitionTimingFunction: "var(--ease-smooth)"
                  }}
                />
                {/* Hover beam (when not active) */}
                <span
                  className="absolute left-0 -bottom-0.5 h-[2px] rounded-full opacity-0 group-hover:opacity-100"
                  style={{
                    width: "100%",
                    background: "linear-gradient(90deg, var(--primary), var(--secondary))",
                    transition: `opacity var(--anim-fast) var(--ease-smooth)`
                  }}
                />
              </Link>
            ))}
          </div>

          {/* GitHub Button */}
          <a
            href="https://github.com/Srinivas8985"
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all"
            style={{
              border: "1px solid rgba(99,102,241,0.4)",
              color: "var(--primary)",
              transition: `all var(--anim-fast) var(--ease-smooth)`
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "var(--primary)"
              e.currentTarget.style.color = "#fff"
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "transparent"
              e.currentTarget.style.color = "var(--primary)"
            }}
          >
            GitHub ↗
          </a>

          {/* Mobile Button */}
          <button
            className="md:hidden text-2xl"
            style={{ color: "var(--primary)" }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>

        </motion.div>

      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [.22,1,.36,1] }}
            className="fixed top-[80px] left-1/2 -translate-x-1/2
            w-[92%] max-w-[440px]
            backdrop-blur-2xl
            rounded-2xl py-8 flex flex-col items-center gap-6 z-40"
            style={{
              background: "rgba(15,23,42,0.95)",
              border: "1px solid rgba(99,102,241,0.2)"
            }}
          >
            {NAV_ITEMS.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                smooth
                duration={650}
                offset={-80}
                onClick={() => setMenuOpen(false)}
                className="text-lg font-medium transition-colors"
                style={{ color: "var(--muted)" }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--primary)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
              >
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

    </>
  )
}