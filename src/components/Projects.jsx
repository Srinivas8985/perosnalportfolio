import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import Tilt from "react-parallax-tilt"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import Container from "./Container"
import { techMap } from "../data/techMap"

import foodForAllImg from "../assets/images/foodforall.png"
import smartParkImg from "../assets/images/smartpark.png"

const projects = [
  {
    title: "FoodForAll",
    description:
      "A social impact platform connecting food donors with NGOs and people in need with real-time matching.",
    features: [
      "Real-time donor matching",
      "NGO request system",
      "Location-based food availability"
    ],
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/Srinivas8985",
    demo: "https://food-for-all-xoov.vercel.app/",
    accent: "var(--secondary)",
    image: foodForAllImg
  },
  {
    title: "SmartPark",
    description:
      "Smart parking system with real-time slot availability and QR based access.",
    features: [
      "Live parking slot tracking",
      "QR based parking entry",
      "Admin monitoring dashboard"
    ],
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com/Srinivas8985",
    demo: null,
    accent: "var(--highlight)",
    image: smartParkImg
  }
]

/* Spotlight hook — mouse-reactive radial glow inside card */
function SpotlightCard({ children, accent, highlight }) {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    cardRef.current.style.setProperty("--x", `${x}%`)
    cardRef.current.style.setProperty("--y", `${y}%`)
  }

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty("--x", "50%")
    cardRef.current.style.setProperty("--y", "50%")
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-2xl overflow-hidden h-full transition-all duration-300 ${highlight ? 'scale-[1.03] ring-2 ring-cyan-400 brightness-110' : ''}`}
      style={{
        "--x": "50%",
        "--y": "50%",
        "--accent": accent,
        background: "rgba(15,23,42,0.65)",
        border: highlight ? "none" : "1px solid rgba(99,102,241,0.15)",
        boxShadow: highlight ? "0 0 35px rgba(34,211,238,0.6)" : "none",
        backdropFilter: "blur(16px)"
      }}
    >
      {/* Spotlight radial */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-2xl opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(180px circle at var(--x) var(--y), ${accent === "var(--primary)" ? "rgba(99,102,241,0.12)" : accent === "var(--secondary)" ? "rgba(34,211,238,0.12)" : accent === "var(--accent)" ? "rgba(236,72,153,0.12)" : "rgba(167,139,250,0.12)"} 0%, transparent 70%)`
        }}
      />

      {children}
    </div>
  )
}

export default function Projects() {
  const [activeTech, setActiveTech] = useState(null)

  useEffect(() => {
    const handleSet = (e) => setActiveTech(e.detail)
    const handleClear = () => setActiveTech(null)
    window.addEventListener('tech-hover', handleSet)
    window.addEventListener('tech-hover-leave', handleClear)
    return () => {
      window.removeEventListener('tech-hover', handleSet)
      window.removeEventListener('tech-hover-leave', handleClear)
    }
  }, [])

  return (
    <section id="projects" className="relative py-32 section-divider">

      {/* ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)",
          filter: "blur(60px)"
        }}
      />

      <Container>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span
            className="px-4 py-1 rounded-full text-xs uppercase tracking-widest font-semibold"
            style={{
              border: "1px solid rgba(34,211,238,0.3)",
              color: "var(--secondary)"
            }}
          >
            Work
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            <span className="shine-text">Featured Projects</span>
          </h2>

          <p className="mt-4 max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
            Selected projects demonstrating product thinking and full-stack engineering.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, i) => {
            const isHighlighted = activeTech && techMap[activeTech]?.projects.includes(project.title);

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [.22,1,.36,1] }}
                viewport={{ once: true }}
                className="group w-full max-w-lg mx-auto"
              >
                <Tilt
                  tiltMaxAngleX={4}
                  tiltMaxAngleY={4}
                  scale={1.01}
                  transitionSpeed={2500}
                  className="h-full"
                >
                  <SpotlightCard accent={project.accent} highlight={isHighlighted}>
                    
                    {/* Project Image with Interactive Overlay */}
                    <div className="relative w-full h-52 sm:h-64 overflow-hidden rounded-t-2xl flex-shrink-0 bg-slate-800">
                      <motion.img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noreferrer"
                          className="px-5 py-2.5 border-[1px] border-white/40 rounded-xl hover:bg-white hover:text-slate-950 transition-colors font-bold text-sm tracking-wide text-white flex items-center gap-2"
                        >
                          <FaGithub /> View Code
                        </a>
                        {project.demo && (
                          <a 
                            href={project.demo} 
                            target="_blank" 
                            rel="noreferrer"
                            className="px-5 py-2.5 bg-white text-slate-950 rounded-xl hover:bg-slate-200 transition-colors font-bold text-sm tracking-wide flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                          >
                            <FaExternalLinkAlt /> Live Demo
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="p-7 flex flex-col h-[calc(100%-13rem)] sm:h-[calc(100%-16rem)]">
                      {/* Title */}
                      <h3
                        className="text-2xl font-bold mb-3"
                        style={{ color: project.accent }}
                      >
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
                        {project.description}
                      </p>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tech.map((tech, idx) => {
                          const techMatch = activeTech && tech.toLowerCase() === activeTech;
                          return (
                            <span
                              key={idx}
                              className={`text-[12px] px-3 py-1.5 rounded-lg font-semibold transition-colors duration-300`}
                              style={{
                                background: techMatch ? project.accent + "40" : "rgba(5,8,22,0.8)",
                                border: techMatch ? `1px solid ${project.accent}` : "1px solid rgba(99,102,241,0.2)",
                                color: techMatch ? "#fff" : "var(--highlight)"
                              }}
                            >
                              {tech}
                            </span>
                          )
                        })}
                      </div>

                    </div>
                  </SpotlightCard>
                </Tilt>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}