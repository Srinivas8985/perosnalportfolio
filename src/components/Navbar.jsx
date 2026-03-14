import { useState, useEffect } from "react"
import { Link } from "react-scroll"
import { motion, AnimatePresence } from "framer-motion"
import { HiMenuAlt3, HiX } from "react-icons/hi"
import ScrollProgress from "./ScrollProgress"

const NAV_ITEMS = [
  { label: "Home",     to: "hero"     },
  { label: "About",    to: "about"    },
  { label: "Skills",   to: "skills"   },
  { label: "Projects", to: "projects" },
  { label: "Contact",  to: "contact"  },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active,   setActive]   = useState("hero")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <ScrollProgress />

      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300
        ${scrolled
          ? "backdrop-blur-xl bg-black/40 border-b border-slate-800 shadow-lg shadow-black/20"
          : "bg-transparent border-b border-white/5"
        }`}
      >
        <div className="max-w-[1280px] mx-auto h-[80px] px-8 flex justify-between items-center">

          {/* Logo */}
          <motion.span
            initial={{ opacity:0, x:-20 }}
            animate={{ opacity:1, x:0 }}
            transition={{ duration:0.6 }}
            className="text-xl font-bold tracking-tight cursor-default select-none"
            style={{ fontFamily:"Outfit, sans-serif" }}
          >
            <span className="shine-text">Srinivas</span>
            <span className="text-white">.dev</span>
          </motion.span>

          {/* Navigation Center */}
          <motion.div
            initial={{ opacity:0, y:-10 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:0.6, delay:0.15 }}
            className="hidden md:flex gap-10 text-sm font-medium text-slate-300 items-center justify-center"
          >
            {NAV_ITEMS.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                smooth
                duration={650}
                offset={-72}
                spy
                onSetActive={() => setActive(to)}
                className="relative cursor-pointer group py-1 hover:text-sky-400 transition-colors duration-200"
              >
                {label}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-sky-400 rounded-full
                  transition-all duration-300
                  ${active === to ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </Link>
            ))}
          </motion.div>

          {/* Right side - GitHub Button */}
          <motion.a
            href="https://github.com/Srinivas8985"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ delay:0.3 }}
            className="hidden md:inline-flex relative items-center justify-center
            px-5 py-2 rounded-xl text-sky-400 text-sm font-bold
            hover:text-slate-950 transition-all duration-300 group overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              GitHub â†—
            </span>
            {/* Gradient border effect background */}
            <div className="absolute inset-0 border border-sky-400/50 rounded-xl group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-cyan-300 transition-all duration-300" />
          </motion.a>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-sky-400 text-2xl"
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>

        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity:0, height:0 }}
              animate={{ opacity:1, height:"auto" }}
              exit={{ opacity:0, height:0 }}
              transition={{ duration:0.25 }}
              className="md:hidden overflow-hidden backdrop-blur-2xl bg-slate-950/95
              border-t border-sky-400/10 shadow-[0_4px_40px_rgba(0,0,0,0.4)]"
            >
              <div className="flex flex-col items-center gap-5 py-8 text-slate-300 text-base font-medium">
                {NAV_ITEMS.map(({ label, to }, i) => (
                  <motion.div
                    key={to}
                    initial={{ opacity:0, x:-20 }}
                    animate={{ opacity:1, x:0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      to={to}
                      smooth
                      duration={650}
                      offset={-72}
                      onClick={() => setMenuOpen(false)}
                      className="cursor-pointer hover:text-sky-400 transition-colors"
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}
