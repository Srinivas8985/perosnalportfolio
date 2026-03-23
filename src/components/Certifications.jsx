import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiX, FiCheckCircle } from "react-icons/fi"
import Container from "./Container"
import { techMap } from "../data/techMap"

// Import Certificates
import cloudCert from "../assets/images/cloud.png"
import compCommCert from "../assets/images/computercommunication.png"
import hardwareCert from "../assets/images/hardware.png"
import textClassCert from "../assets/images/textclass.png"

const certificationsList = [
  {
    image: cloudCert,
    title: "Cloud Computing",
    provider: "NPTEL",
    year: "April 2024",
    accent: "var(--primary)"
  },
  {
    image: compCommCert,
    title: "Computer Communication",
    provider: "Coursera",
    year: "August 2023",
    accent: "var(--secondary)"
  },
  {
    image: hardwareCert,
    title: "Intro to Hardware and OS",
    provider: "Coursera",
    year: "August 2023",
    accent: "var(--accent)"
  },
  {
    image: textClassCert,
    title: "Text Classification with TensorFlow",
    provider: "1stop.ai",
    year: "July 2022",
    accent: "var(--highlight)"
  }
]

function SpotlightCard({ cert, onClick, isHighlighted }) {
  const divRef = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e) => {
    if (!divRef.current) return
    const rect = divRef.current.getBoundingClientRect()
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      whileHover={{ y: -8, scale: 1.03 }}
      onClick={() => onClick(cert)}
      className="relative rounded-2xl overflow-hidden cursor-pointer group flex flex-col transition-all duration-300 h-full"
      style={{
        background: isHighlighted ? "rgba(15,23,42,0.85)" : "rgba(15,23,42,0.5)",
        border: isHighlighted 
          ? `1px solid rgba(129,140,248,1)`  // border-indigo-400
          : "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(16px)",
        boxShadow: isHighlighted 
          ? `0 0 25px rgba(99,102,241,0.6)` 
          : "0 4px 20px rgba(0,0,0,0.1)",
        transform: isHighlighted ? "scale(1.02)" : "none",
      }}
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${cert.accent}22, transparent 50%)`
        }}
      />
      
      {/* Background glow if highlighted */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(circle at 50% 100%, ${cert.accent}15, transparent 60%)`
        }}
      />

      <div className="relative h-48 sm:h-52 w-full overflow-hidden z-10 p-4 pb-0">
        <div className="w-full h-full rounded-t-xl overflow-hidden border border-white/5 relative">
          <motion.img
            src={cert.image}
            alt={cert.title}
            className="w-full h-full object-cover transition-transform duration-500 ease-out z-10"
            loading="lazy"
          />
          {/* Glass Overlay on Hover */}
          <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-300 flex justify-center items-center z-20">
            <span 
              className="px-5 py-2 rounded-full font-bold text-sm tracking-wide shadow-lg"
              style={{ background: cert.accent, color: "#fff" }}
            >
              Preview
            </span>
          </div>
        </div>
      </div>

      <div className="p-6 pt-5 flex flex-col flex-grow z-10 relative bg-gradient-to-t from-slate-900/50 to-transparent">
        <h3 className="text-xl font-bold mb-1 leading-tight" style={{ color: "var(--text)" }}>
          {cert.title}
        </h3>
        <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: cert.accent }}>
          {cert.provider}
        </p>
        
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-white/5">
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-slate-300">
            {cert.year}
          </span>
          <FiCheckCircle className="text-lg" style={{ color: "var(--muted)" }} />
        </div>
      </div>
    </motion.div>
  )
}

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null)
  const [activeTech, setActiveTech] = useState(null)

  // Listen for tech hovers to highlight certs (Bonus Upgrade)
  useEffect(() => {
    const handleTechHover = (e) => setActiveTech(e.detail ? e.detail.toLowerCase() : null)
    const handleTechLeave = () => setActiveTech(null)

    window.addEventListener("tech-hover", handleTechHover)
    window.addEventListener("tech-hover-leave", handleTechLeave)

    return () => {
      window.removeEventListener("tech-hover", handleTechHover)
      window.removeEventListener("tech-hover-leave", handleTechLeave)
    }
  }, [])

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => { document.body.style.overflow = "unset" }
  }, [selectedCert])

  return (
    <section id="certifications" className="section-divider py-24 relative overflow-hidden">
      
      {/* Background glow */}
      <div
        className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full pointer-events-none -translate-x-1/2"
        style={{
          background: "radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 70%)",
          filter: "blur(100px)"
        }}
      />

      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span
            className="px-4 py-1 rounded-full text-xs uppercase tracking-widest font-semibold"
            style={{
              border: "1px solid rgba(34,211,238,0.3)",
              color: "var(--secondary)"
            }}
          >
            Credentials
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            <span className="shine-text">Certifications</span>
          </h2>

          <p className="mt-4 max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
            Professional certifications validating my foundational and advanced technical skills.
          </p>
        </motion.div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificationsList.map((cert, i) => {
            
            // Re-use logic for tech-hover highlights mapped from the global variable
            const isHighlighted = activeTech && techMap[activeTech]?.certifications.includes(cert.title)

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="h-full"
              >
                <SpotlightCard 
                  cert={cert} 
                  onClick={setSelectedCert} 
                  isHighlighted={isHighlighted} 
                />
              </motion.div>
            )
          })}
        </div>

      </Container>

      {/* Full Screen Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex justify-center items-center p-4 sm:p-8"
            style={{
              background: "rgba(0,0,0,0.65)",
              backdropFilter: "blur(20px)"
            }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="absolute top-6 right-6 w-12 h-12 flex justify-center items-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/20 z-50"
              onClick={() => setSelectedCert(null)}
            >
              <FiX className="text-2xl" />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-5xl w-full max-h-[90vh] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
              onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
            >
              <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(45deg, ${selectedCert.accent}22, transparent)` }} />
              <img 
                src={selectedCert.image} 
                alt={selectedCert.title} 
                className="w-full h-full object-contain bg-slate-900"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <h3 className="text-3xl font-bold text-white mb-1 shadow-black drop-shadow-lg">
                  {selectedCert.title}
                </h3>
                <p className="text-lg font-semibold shadow-black drop-shadow-md" style={{ color: selectedCert.accent }}>
                  {selectedCert.provider} • {selectedCert.year}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}
