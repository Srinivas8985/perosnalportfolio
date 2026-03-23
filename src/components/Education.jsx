import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Container from "./Container"

const educationData = [
  {
    year: "August 2023 - Present",
    title: "B.Tech Computer Science and Engineering",
    company: "Lovely Professional University",
    description: "CGPA: 8.14",
    accent: "var(--primary)",
    accentRaw: "#6366f1"
  },
  {
    year: "2021 - 2023",
    title: "Intermediate",
    company: "Palanadu Junior College",
    description: "64.3%",
    accent: "var(--secondary)",
    accentRaw: "#22d3ee"
  },
  {
    year: "2016 - 2021",
    title: "Schooling",
    company: "Government High School VP South",
    description: "98.8%",
    accent: "var(--highlight)",
    accentRaw: "#a78bfa"
  }
]

function TimelineCard({ edu, i }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const isLeft = i % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.2, ease: [.22,1,.36,1] }}
      className={`relative flex items-center mb-16 ${isLeft ? "flex-row" : "flex-row-reverse"}`}
    >

      {/* Glowing dot node */}
      <div className="absolute left-[24px] md:left-1/2 transform -translate-x-1/2 z-10">
        <div className="relative flex items-center justify-center">
          <div
            className="absolute w-7 h-7 rounded-full blur-md opacity-60 animate-pulse"
            style={{ background: edu.accentRaw }}
          />
          <div
            className="w-4 h-4 rounded-full border-2"
            style={{
              background: edu.accentRaw,
              borderColor: "var(--bg)",
              boxShadow: `0 0 12px ${edu.accentRaw}`
            }}
          />
        </div>
      </div>

      {/* Card — left or right */}
      <div className={`w-full md:w-[calc(50%-2rem)] pl-[70px] md:pl-0 ${isLeft ? "md:pr-8 md:text-right" : "md:pl-8 text-left"}`}>
        <motion.div
          whileHover={{ y: -5 }}
          className="relative group rounded-2xl p-6 cursor-default inline-block w-full md:w-auto"
          style={{
            background: "rgba(15,23,42,0.7)",
            border: "1px solid rgba(255,255,255,0.07)",
            backdropFilter: "blur(16px)",
            transition: `all var(--anim-mid) var(--ease-smooth)`
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = edu.accentRaw + "55"
            e.currentTarget.style.boxShadow = `0 0 30px ${edu.accentRaw}33, 0 8px 30px rgba(0,0,0,0.3)`
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"
            e.currentTarget.style.boxShadow = "none"
          }}
        >

          {/* accent top line */}
          <div
            className="absolute top-0 left-6 right-6 h-[1px] rounded-full"
            style={{ background: `linear-gradient(90deg, transparent, ${edu.accentRaw}88, transparent)` }}
          />

          {/* year chip */}
          <div
            className="inline-block mb-3 px-3 py-1 text-xs font-semibold rounded-full"
            style={{
              border: `1px solid ${edu.accentRaw}55`,
              color: edu.accent,
              background: `${edu.accentRaw}12`
            }}
          >
            {edu.year}
          </div>

          <h3 className="text-lg font-bold mb-1" style={{ color: "var(--text)" }}>
            {edu.title}
          </h3>

          <p className="text-sm mb-3 font-medium" style={{ color: edu.accent }}>
            {edu.company}
          </p>

          <p className="text-lg font-bold tracking-wider" style={{ color: "var(--muted)" }}>
            {edu.description}
          </p>

        </motion.div>
      </div>

    </motion.div>
  )
}

export default function Education() {
  const beamRef = useRef(null)
  const beamInView = useInView(beamRef, { once: true })

  return (
    <section id="education" className="section-divider py-24">

      {/* ambient glow */}
      <div
        className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%)",
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
          className="text-center mb-24"
        >
          <span
            className="px-4 py-1 rounded-full text-xs uppercase tracking-widest font-semibold"
            style={{
              border: "1px solid rgba(167,139,250,0.3)",
              color: "var(--highlight)"
            }}
          >
            Academia
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            <span className="shine-text">Education</span>
          </h2>

          <p className="mt-4 max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
            My academic journey and foundational learning experiences.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={beamRef} className="relative max-w-4xl mx-auto">

          {/* Animated vertical beam */}
          <motion.div
            className="absolute left-[24px] md:left-1/2 top-0 -translate-x-1/2 w-[2px] rounded-full origin-top z-0"
            style={{
              height: "100%",
              background: "linear-gradient(to bottom, var(--primary), var(--secondary), var(--highlight), transparent)",
              scaleY: beamInView ? 1 : 0
            }}
            animate={{ scaleY: beamInView ? 1 : 0 }}
            transition={{ duration: 1.4, ease: [.22,1,.36,1] }}
          />

          {educationData.map((edu, i) => (
            <TimelineCard key={i} edu={edu} i={i} />
          ))}

        </div>

      </Container>
    </section>
  )
}
