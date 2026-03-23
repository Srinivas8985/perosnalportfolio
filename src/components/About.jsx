import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaCode, FaServer, FaTools } from "react-icons/fa"
import Container from "./Container"
import TechCore from "./TechCore"

const highlights = [
  {
    icon: <FaCode />,
    label: "Frontend Engineering",
    desc: "Building responsive UI using React, TailwindCSS, and modern JavaScript.",
    accent: "var(--primary)",
    accentRaw: "#6366f1",
    glow: "rgba(99,102,241,0.25)"
  },
  {
    icon: <FaServer />,
    label: "Backend Development",
    desc: "Designing scalable APIs with Java, SpringBoot, Node.js and Express.",
    accent: "var(--secondary)",
    accentRaw: "#22d3ee",
    glow: "rgba(34,211,238,0.25)"
  },
  {
    icon: <FaTools />,
    label: "DevOps & Tools",
    desc: "Working with Git, Docker, REST APIs, MySQL, and MongoDB.",
    accent: "var(--accent)",
    accentRaw: "#ec4899",
    glow: "rgba(236,72,153,0.25)"
  }
]

const stats = [
  { number: "20+", label: "Technologies", accent: "var(--primary)" },
  { number: "5+",  label: "Projects Built", accent: "var(--secondary)" },
  { number: "3+",  label: "Years Learning", accent: "var(--highlight)" }
]

export default function About() {
  return (
    <section
      id="about"
      className="section-divider relative py-32 text-white overflow-hidden"
    >

      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)",
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
          className="text-center mb-20"
        >
          <span
            className="px-4 py-1 rounded-full text-xs uppercase tracking-widest font-semibold"
            style={{
              border: "1px solid rgba(34,211,238,0.3)",
              color: "var(--secondary)"
            }}
          >
            Who I Am
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            <span className="shine-text">About Me</span>
          </h2>

          <p className="mt-4 max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
            A passionate full-stack developer building modern, scalable web
            applications and solving real-world problems with clean and efficient code.
          </p>
        </motion.div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT — TECH CORE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <TechCore />
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 text-center w-full">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ y: -4 }}
                  className="p-5 rounded-xl backdrop-blur-sm cursor-default"
                  style={{
                    background: "rgba(15,23,42,0.6)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    transition: `all var(--anim-mid) var(--ease-smooth)`
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = s.accentRaw || "rgba(99,102,241,0.4)"
                    e.currentTarget.style.boxShadow = `0 0 20px ${(s.accentRaw || "#6366f1")}33`
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"
                    e.currentTarget.style.boxShadow = "none"
                  }}
                >
                  <div
                    className="text-3xl font-extrabold"
                    style={{ color: s.accent }}
                  >
                    {s.number}
                  </div>
                  <div className="text-xs mt-1" style={{ color: "var(--muted)" }}>
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>

          {/* RIGHT — TEXT + CARDS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >

            <h3 className="text-2xl font-bold">
              Hello, I'm{" "}
              <span style={{ color: "var(--secondary)" }}>
                Lakshmi Srinivas Adepu
              </span>
            </h3>

            <p style={{ color: "var(--muted)" }} className="leading-relaxed">
              I'm a passionate full-stack developer focused on building scalable
              applications using Java, React and Node.js. I enjoy designing clean
              systems and crafting intuitive user experiences.
            </p>

            <p style={{ color: "var(--muted)" }} className="leading-relaxed">
              My work focuses on solving real-world problems — from real-time
              communication systems to automation platforms and scalable backend APIs.
            </p>

            {/* Highlight Cards */}
            <div className="grid gap-4 mt-8">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  whileHover={{ y: -4, x: 4 }}
                  className="flex items-start gap-4 p-5 rounded-xl cursor-default"
                  style={{
                    background: "rgba(15,23,42,0.65)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    backdropFilter: "blur(14px)",
                    transition: `all var(--anim-mid) var(--ease-smooth)`
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = h.accentRaw + "55"
                    e.currentTarget.style.boxShadow = `0 0 30px ${h.glow}`
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"
                    e.currentTarget.style.boxShadow = "none"
                  }}
                >
                  <div
                    className="text-2xl mt-0.5"
                    style={{ color: h.accent }}
                  >
                    {h.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold" style={{ color: "var(--text)" }}>
                      {h.label}
                    </h4>
                    <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>
                      {h.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/Srinivas8985"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all"
                style={{
                  border: "1px solid rgba(99,102,241,0.4)",
                  color: "var(--primary)",
                  background: "rgba(99,102,241,0.08)",
                  transition: `all var(--anim-fast) var(--ease-smooth)`
                }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(99,102,241,0.2)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(99,102,241,0.08)"}
              >
                <FaGithub /> GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/sriniva8/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all"
                style={{
                  border: "1px solid rgba(34,211,238,0.4)",
                  color: "var(--secondary)",
                  background: "rgba(34,211,238,0.08)",
                  transition: `all var(--anim-fast) var(--ease-smooth)`
                }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(34,211,238,0.2)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(34,211,238,0.08)"}
              >
                <FaLinkedin /> LinkedIn
              </a>
            </div>

          </motion.div>

        </div>

      </Container>
    </section>
  )
}