import { useState, useEffect } from "react"
import { Link } from "react-scroll"
import { motion, AnimatePresence } from "framer-motion"
import { HiMenuAlt3, HiX } from "react-icons/hi"
import ScrollProgress from "./ScrollProgress"

const NAV_ITEMS = [
  { label: "Home", to: "hero" },
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Projects", to: "projects" },
  { label: "Contact", to: "contact" }
]

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("hero")

  useEffect(() => {

    const onScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)

  }, [])

  return (
    <>
      <ScrollProgress />

      <nav className="fixed w-full top-6 z-50 flex justify-center">

        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={`flex items-center justify-between
          w-[95%] max-w-[1200px]
          px-8 py-3 rounded-2xl
          transition-all duration-300
          ${scrolled
            ? "bg-slate-900/70 backdrop-blur-xl border border-slate-800 shadow-lg"
            : "bg-slate-900/40 backdrop-blur-lg border border-slate-800/60"
          }`}
        >

          {/* Logo */}
          <span
            className="text-xl font-bold tracking-tight select-none"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            <span className="shine-text">Srinivas</span>
            <span className="text-white">.dev</span>
          </span>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-300">

            {NAV_ITEMS.map(({ label, to }) => (

              <Link
                key={to}
                to={to}
                smooth
                duration={650}
                offset={-80}
                spy
                onSetActive={() => setActive(to)}
                className="relative cursor-pointer group"
              >

                <span className={`transition ${active === to ? "text-sky-400" : ""}`}>
                  {label}
                </span>

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-sky-400 rounded-full
                  transition-all duration-300
                  ${active === to ? "w-full" : "w-0 group-hover:w-full"}`}
                />

              </Link>

            ))}

          </div>

          {/* GitHub Button */}
          <a
            href="https://github.com/Srinivas8985"
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex items-center gap-2 px-4 py-2
            rounded-lg border border-sky-400/40 text-sky-400
            hover:bg-sky-400 hover:text-slate-950 transition"
          >
            GitHub ↗
          </a>

          {/* Mobile Button */}
          <button
            className="md:hidden text-sky-400 text-2xl"
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
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[90px] left-1/2 -translate-x-1/2
            w-[92%] max-w-[500px]
            bg-slate-900/95 backdrop-blur-xl
            border border-slate-800 rounded-2xl
            py-8 flex flex-col items-center gap-6 z-40"
          >

            {NAV_ITEMS.map(({ label, to }) => (

              <Link
                key={to}
                to={to}
                smooth
                duration={650}
                offset={-80}
                onClick={() => setMenuOpen(false)}
                className="text-slate-300 hover:text-sky-400 transition text-lg"
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