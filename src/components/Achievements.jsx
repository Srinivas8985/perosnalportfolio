import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaTrophy, FaCode, FaStar } from "react-icons/fa"
import Container from "./Container"
import { techMap } from "../data/techMap"

const achievementsList = [
  {
    icon: <FaCode />,
    title: "300+ Coding Problems",
    platform: "LeetCode / HackerRank / GFG",
    techTriggers: ["java", "javascript", "python", "c", "cpp"],
    accent: "var(--primary)",
    accentRaw: "#6366f1"
  },
  {
    icon: <FaStar />,
    title: "4★ Java Badge",
    platform: "HackerRank",
    techTriggers: ["java", "springboot"],
    accent: "var(--secondary)",
    accentRaw: "#22d3ee"
  },
  {
    icon: <FaStar />,
    title: "5★ Python Badge",
    platform: "HackerRank",
    techTriggers: ["python"],
    accent: "var(--accent)",
    accentRaw: "#ec4899"
  }
]

export default function Achievements() {
  const [activeTech, setActiveTech] = useState(null)

  useEffect(() => {
    const handleTechHover = (e) => {
      setActiveTech(e.detail ? e.detail.toLowerCase() : null)
    }
    const handleTechLeave = () => {
      setActiveTech(null)
    }

    window.addEventListener("tech-hover", handleTechHover)
    window.addEventListener("tech-hover-leave", handleTechLeave)

    return () => {
      window.removeEventListener("tech-hover", handleTechHover)
      window.removeEventListener("tech-hover-leave", handleTechLeave)
    }
  }, [])

  return (
    <section id="achievements" className="section-divider py-24 relative overflow-hidden">
      
      {/* ambient glow */}
      <div
        className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 70%)",
          filter: "blur(80px)"
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
              border: "1px solid rgba(236,72,153,0.3)",
              color: "var(--accent)"
            }}
          >
            Milestones
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            <span className="shine-text">Achievements</span>
          </h2>

          <p className="mt-4 max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
            A track record of algorithmic problem solving and technical proficiency.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievementsList.map((item, i) => {
            
            // Check if this card should be highlighted based on global tech-hover map
            const isHighlighted = activeTech && techMap[activeTech]?.achievements.includes(item.title)

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                animate={isHighlighted ? { scale: [1, 1.05, 1] } : { scale: 1 }}
                transition={isHighlighted ? { duration: 1.2, repeat: Infinity } : { duration: 0.6, delay: i * 0.15 }}
                whileHover={!isHighlighted ? { scale: 1.05, y: -5 } : undefined}
                className="relative group rounded-2xl p-8 flex flex-col items-center text-center cursor-default overflow-hidden transition-all duration-300"
                style={{
                  background: isHighlighted ? "rgba(15,23,42,0.85)" : "rgba(15,23,42,0.5)",
                  border: isHighlighted 
                    ? `1px solid ${item.accentRaw}88` 
                    : "1px solid rgba(255,255,255,0.07)",
                  backdropFilter: "blur(16px)",
                  boxShadow: isHighlighted 
                    ? `0 0 20px rgba(236,72,153,0.5)` 
                    : "0 4px 20px rgba(0,0,0,0.1)",
                }}
              >
                
                {/* Background Glow */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${item.accentRaw}22, transparent 70%)`
                  }}
                />

                {/* Animated Icon */}
                <motion.div
                  className="text-5xl mb-5"
                  style={{ color: item.accent }}
                  animate={isHighlighted ? { rotate: [0, -10, 10, -10, 10, 0] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <div className="group-hover:rotate-12 transition-transform duration-300 ease-out">
                    {item.icon}
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2" style={{ color: "var(--text)" }}>
                  {item.title}
                </h3>

                <p className="text-sm font-semibold tracking-wider uppercase" style={{ color: item.accentRaw }}>
                  {item.platform}
                </p>

              </motion.div>
            )
          })}
        </div>

      </Container>
    </section>
  )
}
