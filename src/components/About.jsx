import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaCode, FaServer, FaTools } from "react-icons/fa"
import Container from "./Container"

const highlights = [
  { icon: <FaCode />,   color: "text-cyan-400",    border: "border-cyan-400/20",    glow: "hover:shadow-[0_0_24px_rgba(34,211,238,0.15)]",   label: "Frontend",  desc: "React, HTML, CSS, Tailwind CSS" },
  { icon: <FaServer />, color: "text-cyan-400",    border: "border-cyan-400/20",    glow: "hover:shadow-[0_0_24px_rgba(34,211,238,0.15)]",   label: "Backend",   desc: "Java, SpringBoot, Node.js, Express" },
  { icon: <FaTools />,  color: "text-cyan-400",    border: "border-cyan-400/20",    glow: "hover:shadow-[0_0_24px_rgba(34,211,238,0.15)]",   label: "DevOps",    desc: "Git, GitHub, REST APIs, MySQL, MongoDB" },
]

const fadeSlide = (dir, delay = 0) => ({
  initial:    { opacity: 0, x: dir === "left" ? -40 : 40 },
  whileInView:{ opacity: 1, x: 0 },
  viewport:   { once: true },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-32 text-white overflow-hidden">

      {/* Cyan accent center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        w-[500px] h-[500px] rounded-full
        bg-cyan-500 opacity-[0.04] blur-[150px] pointer-events-none" />

      <Container>

        {/* Header */}
        <motion.div
          initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.7 }}
          className="text-center mb-20 space-y-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-400/10
            border border-cyan-400/30 text-cyan-300 text-[11px] font-bold tracking-widest uppercase">
            Who I Am
          </span>
          <h2 className="text-4xl font-semibold"
            style={{ fontFamily:"Outfit, sans-serif" }}>
            <span className="shine-text">About Me</span>
          </h2>
        </motion.div>

        {/* RHYTHM: Text Left / Visuals Right layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Text - Left */}
          <motion.div {...fadeSlide("left", 0.1)} className="space-y-6 text-slate-400 leading-relaxed md:pr-4">
            <h3 className="text-2xl font-bold text-white">
              Hello, I&apos;m <span className="text-cyan-400">Lakshmi Srinivas Adepu</span>
            </h3>
            <p className="text-lg">
              A passionate Full Stack Developer with a strong foundation in Java
              and modern web technologies. I specialize in building elegant, robust,
              and visually engaging applications.
            </p>
            <p className="text-lg">
              I love creating solutions that solve real-world problems â€” whether it's
              reducing food waste, automating parking management, or enabling real-time
              communication.
            </p>
            <p className="text-lg">
              I embrace clean code, collaborative development, and continuous learning.
              When I&apos;m not coding, I&apos;m exploring DevOps practices and
              open-source contributions.
            </p>
            
            <div className="flex gap-6 pt-4">
              <a href="https://github.com/Srinivas8985" target="_blank" rel="noreferrer"
                className="group flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition text-sm font-bold uppercase tracking-wide">
                <FaGithub className="text-xl group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" /> GitHub
              </a>
              <a href="#"
                className="group flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition text-sm font-bold uppercase tracking-wide">
                <FaLinkedin className="text-xl group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" /> LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Cards - Right */}
          <motion.div {...fadeSlide("right", 0.2)} className="grid gap-5">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                whileHover={{ x: -8 }}
                className={`flex items-center gap-6 p-6 rounded-2xl
                bg-slate-900/60 border border-slate-700 backdrop-blur-md shadow-xl
                ${h.glow} hover:shadow-cyan-500/20 transition-all duration-300 cursor-default`}
              >
                <div className={`${h.color} text-3xl shrink-0`}>{h.icon}</div>
                <div>
                  <h4 className={`font-bold text-white text-lg`}>{h.label}</h4>
                  <p className="text-sm text-slate-400 mt-1">{h.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </Container>
    </section>
  )
}
