import { motion } from "framer-motion"
import Tilt from "react-parallax-tilt"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import Container from "./Container"

const projects = [
  {
    title:       "FoodForAll",
    description: "A social impact platform connecting food donors with NGOs and people in need. Real-time matching, admin dashboard, and donor tracking.",
    tech:        ["React", "Node.js", "MongoDB", "Express", "JWT"],
    github:      "https://github.com/Srinivas8985",
    demo:        "https://food-for-all-xoov.vercel.app/",
    emoji:       "ðŸ±",
    featured:    true,
    accentColor: "#22d3ee", // Cyan
    shadowColor: "rgba(34,211,238,0.3)",
  },
  {
    title:       "SmartPark",
    description: "Smart parking management with live availability, owner dashboard, QR-based entry, and real-time slot reservations.",
    tech:        ["React", "Node.js", "MongoDB", "Socket.io"],
    github:      "https://github.com/Srinivas8985",
    demo:        null,
    emoji:       "ðŸ…¿ï¸",
    accentColor: "#a78bfa", // Purple
    shadowColor: "rgba(167,139,250,0.3)",
  },
  {
    title:       "Daily Expenditure Tracker",
    description: "Personal finance app to log expenses, set budget goals, and visualise spending patterns with interactive charts.",
    tech:        ["JavaScript", "Node.js", "MySQL", "Chart.js"],
    github:      "https://github.com/Srinivas8985",
    demo:        null,
    emoji:       "ðŸ’°",
    accentColor: "#22d3ee", // Cyan
    shadowColor: "rgba(34,211,238,0.3)",
  },
  {
    title:       "Seat Allocation System",
    description: "Automated seat allocation engine for academic institutions based on constraints, priority rules, and live availability.",
    tech:        ["Java", "SpringBoot", "MySQL", "REST API"],
    github:      "https://github.com/Srinivas8985",
    demo:        null,
    emoji:       "ðŸŽ“",
    accentColor: "#a78bfa", // Purple
    shadowColor: "rgba(167,139,250,0.3)",
  },
  {
    title:       "Realtime Chat App",
    description: "Full-stack real-time messaging app on the MERN stack with Socket.io, private rooms, and online presence indicators.",
    tech:        ["React", "Node.js", "MongoDB", "Socket.io"],
    github:      "https://github.com/Srinivas8985",
    demo:        null,
    emoji:       "ðŸ’¬",
    accentColor: "#22d3ee", // Cyan
    shadowColor: "rgba(34,211,238,0.3)",
  },
]

const containerAnim = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.14 } },
}
const itemAnim = {
  hidden: { opacity: 0, y: 50 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 md:py-32 text-white overflow-hidden">

      {/* Cyan+Purple accent blob top-left */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] rounded-full
        bg-cyan-500 opacity-[0.04] blur-[150px] pointer-events-none" />

      <Container className="relative z-10">

        {/* Header - Centered Layout */}
        <motion.div
          initial={{ opacity:0, y:28 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.7 }}
          className="text-center mb-20 space-y-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-400/10
            border border-cyan-400/30 text-cyan-300 text-[11px] font-bold tracking-widest uppercase">
            Work
          </span>
          <h2 className="text-4xl font-semibold"
            style={{ fontFamily:"Outfit, sans-serif" }}>
            <span className="shine-text">Featured Projects</span>
          </h2>
          <p className="text-slate-400 leading-relaxed max-w-xl mx-auto text-lg">
            Real-world applications solving real problems â€” each built with a focused, modern tech stack.
          </p>
        </motion.div>

        {/* MASONRY/STAGGER GRID (Centered visually, not sticking to left) */}
        <motion.div
          variants={containerAnim}
          initial="hidden"
          whileInView="show"
          viewport={{ once:true, amount:0.08 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10"
        >
          {projects.map((p, i) => (
            <motion.div key={i} variants={itemAnim}>
              <Tilt
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                scale={1.02}
                transitionSpeed={1500}
                glareEnable={true}
                glareMaxOpacity={0.06}
                glareColor={p.accentColor}
                glarePosition="all"
                className="h-full rounded-2xl shadow-xl hover:shadow-cyan-500/20 transition-shadow duration-300"
              >
                {/* Gradient border wrapper */}
                <div
                  className="grad-border h-full group"
                  style={{
                    "--tw-shadow-color": p.shadowColor,
                  }}
                >
                  {/* Standardized Card Body */}
                  <div className="grad-border-inner flex flex-col h-full p-8 gap-5 rounded-[15px]
                    bg-slate-900/60 backdrop-blur-md border border-slate-700">

                    {/* Top bar */}
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-4xl drop-shadow-md">{p.emoji}</span>
                        <h3
                          className="text-2xl font-bold mt-3 transition-colors duration-200"
                          style={{ color: p.accentColor }}
                        >
                          {p.title}
                        </h3>
                        {p.featured && (
                          <span
                            className="inline-block mt-2 px-3 py-1 rounded-full
                            text-[11px] font-extrabold uppercase tracking-wide border"
                            style={{
                              color:            p.accentColor,
                              borderColor:      p.accentColor + "55",
                              backgroundColor:  p.accentColor + "15",
                            }}
                          >
                            â­ Featured
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-400 leading-relaxed text-base flex-1 mt-2">
                      {p.description}
                    </p>

                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-2.5 mt-3">
                      {p.tech.map((t, j) => (
                        <span
                          key={j}
                          className="px-3 py-1.5 rounded-xl text-xs font-bold tracking-wide
                          bg-slate-950/80 text-slate-300 border border-slate-800/80 shadow-inner"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 pt-4 border-t border-slate-800/60 mt-2">
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 flex-1 justify-center
                        px-4 py-3 rounded-xl bg-slate-950/50 border border-slate-700/80
                        text-sm font-bold text-slate-300 shadow-lg
                        hover:bg-slate-800 hover:text-white hover:border-slate-500
                        transition-all duration-300"
                      >
                        <FaGithub className="text-lg" /> GitHub
                      </a>

                      {p.demo ? (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 flex-1 justify-center
                          px-4 py-3 rounded-xl border text-sm font-bold shadow-lg
                          transition-all duration-300 hover:shadow-xl hover:scale-[1.03]"
                          style={{
                            color:        p.accentColor,
                            borderColor:  p.accentColor + "66",
                          }}
                          onMouseEnter={e => {
                            e.currentTarget.style.backgroundColor = p.accentColor
                            e.currentTarget.style.color = "#020617"
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.backgroundColor = "transparent"
                            e.currentTarget.style.color = p.accentColor
                          }}
                        >
                          <FaExternalLinkAlt className="text-sm" /> Live
                        </a>
                      ) : (
                        <span className="flex items-center gap-2 flex-1 justify-center
                          px-4 py-3 rounded-xl border border-slate-800/80 bg-slate-950/30
                          text-sm font-bold text-slate-500 cursor-not-allowed shadow-inner">
                          In Progress
                        </span>
                      )}
                    </div>

                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub CTA - Centered */}
        <motion.div
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.6, delay:0.3 }}
          className="mt-20 flex justify-center w-full"
        >
          <a
            href="https://github.com/Srinivas8985"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl
            border-2 border-cyan-400/50 text-cyan-400 font-bold text-base uppercase tracking-wide
            hover:bg-cyan-400 hover:text-slate-950 hover:border-cyan-400
            hover:shadow-[0_0_40px_rgba(34,211,238,0.5)]
            transition-all duration-300"
          >
            <FaGithub className="text-2xl" /> View All on GitHub
          </a>
        </motion.div>

      </Container>
    </section>
  )
}
