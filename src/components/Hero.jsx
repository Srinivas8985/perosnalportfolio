import { useEffect, useRef } from "react"
import Typed from "typed.js"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaReact, FaNodeJs, FaDocker, FaJava, FaGitAlt } from "react-icons/fa"
import { SiMongodb } from "react-icons/si"
import { Link } from "react-scroll"

import MagneticButton      from "./MagneticButton"
import Background          from "./Background"
import ParticlesBackground from "./ParticlesBackground"
import Container           from "./Container"

import profileImg from "../assets/images/profile.png"

/* â”€â”€ Orbit configuration â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const ORBIT_ICONS = [
  { Icon: FaReact,   color: "#38bdf8", label: "React",   radius: 170, deg: 0   },
  { Icon: FaNodeJs,  color: "#22d3ee", label: "Node",    radius: 170, deg: 60  },
  { Icon: FaDocker,  color: "#38bdf8", label: "Docker",  radius: 170, deg: 120 },
  { Icon: SiMongodb, color: "#22d3ee", label: "MongoDB", radius: 170, deg: 180 },
  { Icon: FaJava,    color: "#f472b6", label: "Java",    radius: 170, deg: 240 },
  { Icon: FaGitAlt,  color: "#a78bfa", label: "Git",     radius: 170, deg: 300 },
]

/* â”€â”€ Single orbiting icon â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function OrbitIcon({ Icon, color, label, deg, radius, duration = 20 }) {
  const rad = (deg * Math.PI) / 180

  return (
    <motion.div
      className="absolute"
      style={{ top: "50%", left: "50%", width: 0, height: 0 }}
      animate={{ rotate: 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      <motion.div
        style={{
          position: "absolute",
          top:  `${-radius * Math.cos(rad)}px`,
          left: `${radius  * Math.sin(rad)}px`,
          transform: "translate(-50%, -50%)",
        }}
        animate={{ rotate: -360 }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
        whileHover={{ scale: 1.3 }}
      >
        <div className="group flex flex-col items-center gap-1 cursor-default" title={label}>
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center
            bg-slate-900/90 border border-white/10
            shadow-lg backdrop-blur-sm
            group-hover:scale-110 transition-transform duration-200"
            style={{ boxShadow: `0 0 16px ${color}66` }}
          >
            <Icon style={{ color, fontSize: "1.5rem" }} />
          </div>
          <span
            className="text-[10px] font-bold opacity-0 group-hover:opacity-100
            transition-opacity duration-200 text-slate-300"
          >
            {label}
          </span>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* â”€â”€ FadeUp helper â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 30 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
})

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   HERO
â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
export default function Hero() {
  const typedRef = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Lakshmi Srinivas Adepu",
        "Full Stack Developer",
        "Java Developer",
        "DevOps Enthusiast",
        "Problem Solver",
      ],
      typeSpeed:  55,
      backSpeed:  30,
      backDelay:  1500,
      startDelay: 400,
      loop:       true,
    })
    return () => typed.destroy()
  }, [])

  return (
    <section
      id="hero"
      // Added py-28 spacing and centered flex block
      className="relative min-h-screen flex items-center justify-center
      text-white pt-28 pb-10 overflow-hidden"
    >
      <ParticlesBackground />
      <Background />

      <Container>
        {/* RHYTHM: Text Left / Visual Right */}
        <div className="w-full grid md:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* â”€â”€ LEFT: Text â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-8">

            {/* Badge */}
            <motion.div {...fadeUp(0.05)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full
              border border-sky-400/30 bg-sky-400/10 text-sky-400
              text-[11px] font-bold tracking-[0.15em] uppercase w-fit">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              Open to opportunities
            </motion.div>

            {/* Typed heading */}
            <motion.h1
              {...fadeUp(0.15)}
              className="text-5xl md:text-6xl font-bold tracking-tight leading-tight"
              style={{ fontFamily: "Outfit, sans-serif", minHeight: "6rem" }}
            >
              <span ref={typedRef} className="shine-text" />
            </motion.h1>

            {/* Sub */}
            <motion.p {...fadeUp(0.3)}
              className="text-slate-400 text-base md:text-lg lg:text-xl leading-relaxed max-w-lg">
              Building scalable full-stack applications and beautiful web experiences.
              Passionate about clean code, DevOps, and solving real-world problems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div {...fadeUp(0.4)}
              className="flex flex-wrap justify-center md:justify-start gap-5">
              <Link to="projects" smooth duration={700} offset={-70}>
                <MagneticButton>ðŸš€ View Projects</MagneticButton>
              </Link>
              <Link to="contact" smooth duration={700} offset={-70}>
                <MagneticButton className="!border-slate-600 !text-slate-300
                  hover:!border-sky-400 hover:!text-sky-400">
                  âœ‰ï¸ Contact Me
                </MagneticButton>
              </Link>
            </motion.div>

            {/* Socials */}
            <motion.div {...fadeUp(0.5)}
              className="flex items-center gap-6 text-slate-400">
              <a href="https://github.com/Srinivas8985" target="_blank" rel="noreferrer"
                className="group flex items-center gap-2 hover:text-sky-400 transition-colors">
                <FaGithub className="text-2xl group-hover:drop-shadow-[0_0_12px_rgba(56,189,248,0.8)]" />
                <span className="text-sm font-semibold">GitHub</span>
              </a>
              <span className="text-slate-700">|</span>
              <a href="#" className="group flex items-center gap-2 hover:text-sky-400 transition-colors">
                <FaLinkedin className="text-2xl group-hover:drop-shadow-[0_0_12px_rgba(56,189,248,0.8)]" />
                <span className="text-sm font-semibold">LinkedIn</span>
              </a>
            </motion.div>

          </div>

          {/* â”€â”€ RIGHT: Orbit + Image â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.36, 1], delay: 0.2 }}
            className="flex justify-center"
          >
            {/* Orbit container */}
            <div
              className="relative flex items-center justify-center lg:ml-10"
              style={{ width: "420px", height: "420px" }}
            >
              {/* Orbit path ring */}
              <div
                className="absolute rounded-full border border-sky-400/10"
                style={{ width: "340px", height: "340px" }}
              />

              {/* Orbit icons */}
              {ORBIT_ICONS.map((o, i) => (
                <OrbitIcon
                  key={i}
                  {...o}
                  duration={i % 2 === 0 ? 20 : 25}
                />
              ))}

              {/* Glow halo behind profile */}
              <div
                className="absolute rounded-full pulse-glow"
                style={{
                  width: "250px",
                  height: "250px",
                  background: "radial-gradient(circle, rgba(56,189,248,0.3) 0%, transparent 70%)",
                  filter: "blur(25px)",
                }}
              />

              {/* Profile image */}
              <div
                className="float-el relative z-10 rounded-full overflow-hidden
                border-4 border-slate-800 ring-2 ring-sky-400 ring-offset-4 ring-offset-slate-950
                shadow-[0_0_60px_rgba(56,189,248,0.5)]"
                style={{ width: "230px", height: "230px" }}
              >
                <img
                  src={profileImg}
                  alt="Lakshmi Srinivas Adepu"
                  className="w-full h-full object-cover scale-105"
                />
              </div>

              {/* Floating badge â€“ bottom right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.5, type: "spring" }}
                className="absolute bottom-6 right-0 z-20
                bg-slate-900/90 backdrop-blur-md border border-violet-500/50
                rounded-xl px-4 py-2 text-xs font-bold text-violet-300 shadow-[0_4px_20px_rgba(139,92,246,0.2)]"
              >
                ðŸ’» Full Stack Dev
              </motion.div>

              {/* Floating badge â€“ top left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6, duration: 0.5, type: "spring" }}
                className="absolute top-6 left-0 z-20
                bg-slate-900/90 backdrop-blur-md border border-pink-500/50
                rounded-xl px-4 py-2 text-xs font-bold text-pink-300 shadow-[0_4px_20px_rgba(236,72,153,0.2)]"
              >
                â˜• Java Dev
              </motion.div>

            </div>
          </motion.div>

        </div>
      </Container>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2
        flex flex-col items-center gap-2 text-xs text-slate-500"
      >
        <span className="tracking-widest uppercase text-[10px] font-bold">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-sky-400 to-transparent"
        />
      </motion.div>

    </section>
  )
}
