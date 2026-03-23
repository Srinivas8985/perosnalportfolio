import { useState, useEffect } from "react"
import { Link } from "react-scroll"
import { motion } from "framer-motion"

const SECTIONS = [
  { label: "Home",     to: "hero" },
  { label: "About",    to: "about" },
  { label: "Skills",   to: "skills" },
  { label: "Projects", to: "projects" },
  { label: "Contact",  to: "contact" }
]

export default function SectionProgress() {

  const [active, setActive] = useState("hero")
  const [visible, setVisible] = useState(false)

  useEffect(() => {

    // Show after scroll starts
    const onScroll = () => setVisible(window.scrollY > 100)
    window.addEventListener("scroll", onScroll)

    // IntersectionObserver to track active section
    const observers = []
    const options = { threshold: 0.4 }

    SECTIONS.forEach(({ to }) => {
      const el = document.getElementById(to)
      if (!el) return
      const obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setActive(to)
      }, options)
      obs.observe(el)
      observers.push(obs)
    })

    return () => {
      window.removeEventListener("scroll", onScroll)
      observers.forEach(obs => obs.disconnect())
    }
  }, [])

  return (
    <motion.div
      className="section-progress hidden lg:flex"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: visible ? 1 : 0, x: visible ? 0 : 20 }}
      transition={{ duration: 0.4, ease: [.22,1,.36,1] }}
    >
      {SECTIONS.map(({ label, to }) => (
        <Link
          key={to}
          to={to}
          smooth
          duration={650}
          offset={-80}
        >
          <motion.div
            className={`section-progress-dot ${active === to ? "active" : ""}`}
            data-label={label}
            whileHover={{ scale: 1.5 }}
            title={label}
          />
        </Link>
      ))}
    </motion.div>
  )
}
