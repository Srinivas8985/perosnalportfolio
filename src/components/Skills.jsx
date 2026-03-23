import { motion } from "framer-motion"
import Container from "./Container"
import Stats from "./Stats"
import SkillGraph from "./SkillGraph"

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 section-divider">

      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[600px] pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(ellipse, rgba(99,102,241,0.07) 0%, rgba(167,139,250,0.04) 40%, transparent 70%)",
          filter: "blur(80px)"
        }}
      />

      <Stats />

      <Container>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <span
            className="px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em]"
            style={{
              border: "1px solid rgba(99,102,241,0.3)",
              color: "var(--primary)"
            }}
          >
            Toolkit
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            <span className="shine-text">Skills &amp; Technologies</span>
          </h2>

          <p className="mt-4 max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
            An interactive map of my tech ecosystem — hover any node to explore how technologies connect.
          </p>
        </motion.div>

        {/* Skill Network Graph */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [.22,1,.36,1] }}
          className="mt-10"
        >
          <SkillGraph />
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 mt-14"
        >
          {[
            { num: "13+", label: "Technologies",  color: "var(--primary)" },
            { num: "3+",  label: "Years Exp.",    color: "var(--secondary)" },
            { num: "5+",  label: "Projects",      color: "var(--accent)" },
            { num: "16",  label: "Skill Links",   color: "var(--highlight)" }
          ].map(s => (
            <div
              key={s.label}
              className="text-center px-8 py-4 rounded-2xl cursor-default"
              style={{
                background: "rgba(15,23,42,0.5)",
                border: "1px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(12px)",
                transition: `all var(--anim-mid) var(--ease-smooth)`
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = s.color.replace("var(--primary)", "#6366f1").replace("var(--secondary)", "#22d3ee").replace("var(--accent)", "#ec4899").replace("var(--highlight)", "#a78bfa") + "55"
                e.currentTarget.style.transform = "translateY(-4px)"
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"
                e.currentTarget.style.transform = "none"
              }}
            >
              <div
                className="text-3xl font-extrabold font-mono leading-none mb-1"
                style={{ color: s.color }}
              >
                {s.num}
              </div>
              <div className="text-[11px] uppercase tracking-widest font-semibold" style={{ color: "var(--muted)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

      </Container>
    </section>
  )
}