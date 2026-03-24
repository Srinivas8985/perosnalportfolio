import { useEffect, useRef } from "react"
import Typed from "typed.js"
import { motion } from "framer-motion"
import { isLowPowerDevice } from "../utils/deviceDetect"

import {
  FaGithub, FaLinkedin,
  FaReact, FaNodeJs, FaDocker, FaJava, FaGitAlt
} from "react-icons/fa"

import { SiMongodb } from "react-icons/si"
import { Link } from "react-scroll"

import ProfileGlow from "./ProfileGlow"
import MagneticButton from "./MagneticButton"
import Container from "./Container"

import profileImg from "../assets/images/profile.png"

// Removed ORBIT_ICONS to clean up Hero section

/* -------------------------------------------------- */
/* TECH PILLS                                          */
/* -------------------------------------------------- */

const TECH_PILLS = ["React", "Node.js", "Java", "SpringBoot", "MongoDB", "Docker"]

/* -------------------------------------------------- */
/* ANIMATION HELPER                                    */
/* -------------------------------------------------- */

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }
})

/* -------------------------------------------------- */
/* HERO COMPONENT                                      */
/* -------------------------------------------------- */

export default function Hero() {
  const lowPower = isLowPowerDevice()

  const typedRef = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Full-Stack Developer",
        "React Developer",
        "Node.js Developer",
        "Building Real-World Applications"
      ],
      typeSpeed:  45,
      backSpeed:  25,
      backDelay: 2000,
      startDelay: 400,
      loop: true,
      cursorChar: "|"
    })
    return () => typed.destroy()
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-white pt-28 pb-10 overflow-hidden"
    >

      {/* Hero ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 70% 60% at 50% 0%, rgba(99,102,241,0.14) 0%, transparent 65%),
            radial-gradient(ellipse 50% 40% at 80% 80%, rgba(236,72,153,0.08) 0%, transparent 60%)
          `
        }}
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT SIDE ── */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-7">

            {/* Status badge */}
            <motion.div
              {...fadeUp(0.05)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold tracking-[0.15em] uppercase"
              style={{
                border: "1px solid rgba(99,102,241,0.35)",
                background: "rgba(99,102,241,0.1)",
                color: "var(--primary)"
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "var(--primary)" }}
              />
              Open to opportunities
            </motion.div>

            {/* Name */}
            <motion.div {...fadeUp(0.1)}>
              <p className="text-base md:text-lg font-medium mb-1" style={{ color: "var(--muted)" }}>
                Hi, I'm
              </p>
              <h1
                className="text-4xl md:text-5xl font-extrabold tracking-tight shine-text"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                Lakshmi Srinivas Adepu
              </h1>
            </motion.div>

            {/* Typed Role */}
            <motion.h2
              {...fadeUp(0.2)}
              className="text-3xl md:text-4xl font-bold tracking-tight"
              style={{ fontFamily: "Outfit, sans-serif", minHeight: "3rem" }}
            >
              <span ref={typedRef} className="shine-text" />
            </motion.h2>

            {/* Tagline */}
            <motion.p
              {...fadeUp(0.28)}
              className="text-base md:text-lg leading-relaxed max-w-lg"
              style={{ color: "var(--muted)" }}
            >
              Building scalable full-stack applications and beautiful web
              experiences. Passionate about clean architecture, DevOps,
              and solving real-world problems.
            </motion.p>

            {/* Tech stack pills */}
            <motion.div
              {...fadeUp(0.35)}
              className="flex flex-wrap gap-2 justify-center md:justify-start"
            >
              {TECH_PILLS.map(tech => (
                <span
                  key={tech}
                  className="px-3 py-1 text-[11px] font-semibold rounded-full backdrop-blur-sm"
                  style={{
                    border: "1px solid rgba(167,139,250,0.3)",
                    background: "rgba(167,139,250,0.08)",
                    color: "var(--highlight)"
                  }}
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              {...fadeUp(0.42)}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <Link to="projects" smooth duration={700} offset={-70}>
                <MagneticButton hoverText="→ Explore Work">🚀 View Projects</MagneticButton>
              </Link>

              <Link to="contact" smooth duration={700} offset={-70}>
                <MagneticButton
                  hoverText="→ Send Message"
                  className="!border-slate-600 !text-slate-300
                  hover:!border-[var(--secondary)] hover:!text-[var(--secondary)]"
                >
                  ✉️ Contact Me
                </MagneticButton>
              </Link>

              <a
                href="https://drive.google.com/file/d/1PqIqVAatFlmia1y54_D4cSPYAczdYT8r/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <MagneticButton
                  hoverText="→ View PDF"
                  className="!border-[rgba(167,139,250,0.5)] !text-[var(--highlight)]
                  hover:!border-[var(--highlight)] hover:!text-white"
                >
                  📄 Resume
                </MagneticButton>
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              {...fadeUp(0.5)}
              className="flex items-center gap-8"
              style={{ color: "var(--muted)" }}
            >
              <a
                href="https://github.com/Srinivas8985"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 transition-colors"
                style={{ transition: "color var(--anim-fast) var(--ease-smooth)" }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--primary)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
              >
                <FaGithub className="text-2xl group-hover:drop-shadow-[0_0_10px_rgba(99,102,241,0.9)]" />
                <span className="text-sm font-semibold">GitHub</span>
              </a>

              <span style={{ color: "rgba(148,163,184,0.3)" }}>|</span>

              <a
                href="https://www.linkedin.com/in/sriniva8/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 transition-colors"
                onMouseEnter={e => e.currentTarget.style.color = "var(--secondary)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
              >
                <FaLinkedin className="text-2xl group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
                <span className="text-sm font-semibold">LinkedIn</span>
              </a>
            </motion.div>

          </div>

          {/* ── RIGHT SIDE — PROFILE (MINIMAL) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 90, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, rotateY: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex justify-self-center relative"
            style={{ perspective: "1000px" }}
          >
            <div
              className="relative flex items-center justify-center cursor-pointer group w-[260px] h-[260px] lg:w-[280px] lg:h-[280px]"
              onMouseEnter={() => window.dispatchEvent(new Event("trigger-data-pulse"))}
            >

              {/* Gradient Halo Glow */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none bg-gradient-to-r from-cyan-400 via-indigo-500 to-pink-400 opacity-30 blur-[90px]"
              />

              {/* Floating Tech Nodes */}
              {[
                { Icon: FaReact, color: "#22d3ee", cls: "top-[-5%] left-[-5%]" },
                { Icon: FaNodeJs, color: "#4ade80", cls: "top-[-5%] right-[-5%]" },
                { Icon: SiMongodb, color: "#10b981", cls: "top-[40%] left-[-15%]" },
                { Icon: FaDocker, color: "#3b82f6", cls: "top-[40%] right-[-15%]" },
                { Icon: FaJava, color: "#f87171", cls: "bottom-[-10%] left-[50%] -translate-x-1/2" }
              ].map((Node, i) => (
                <motion.div
                  key={i}
                  className={`absolute z-20 flex items-center justify-center w-12 h-12 rounded-full backdrop-blur-md bg-white/5 border border-white/10 ${Node.cls}`}
                  style={{ boxShadow: `0 0 15px ${Node.color}40`, color: Node.color }}
                  animate={lowPower ? {} : { y: [0, -10, 0] }}
                  transition={lowPower ? {} : { duration: 6, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                >
                  <Node.Icon size={22} />
                </motion.div>
              ))}

              {/* Floating avatar Wrapper */}
              <motion.div
                className="relative w-full h-full"
                initial="rest"
                whileHover="hover"
                animate={lowPower ? {} : { y: [0, -8, 0] }}
                transition={lowPower ? {} : { y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
              >
                <ProfileGlow>
                  <div
                    className="gradient-ring rounded-full p-[4px] relative bg-slate-950 w-full h-full"
                    style={{ boxShadow: "0 0 40px rgba(34,211,238,0.15)" }}
                  >
                    
                    {/* Single Minimal Expanding Pulse on Hover */}
                    <motion.div
                      variants={{
                        rest: { opacity: 0, scale: 1 },
                        hover: { opacity: [0.5, 0], scale: [1, 1.6], transition: { duration: 1.2, ease: "easeOut" } }
                      }}
                      className="absolute inset-0 rounded-full border border-cyan-400 pointer-events-none z-0"
                    />

                    <div className="rounded-full overflow-hidden w-full h-full relative z-10">
                      
                      {/* Avatar Image */}
                      <motion.img
                        variants={{ rest: { scale: 1.02 }, hover: { scale: 1.06 } }}
                        initial={{ scale: 1.3, opacity: 0 }}
                        animate={{ scale: 1.02, opacity: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.35 }}
                        src={profileImg}
                        alt="Lakshmi Srinivas Adepu"
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />

                      {/* Subtle Hover Overlay */}
                      <motion.div 
                        variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 bg-cyan-400/5 pointer-events-none mix-blend-overlay" 
                      />
                    </div>
                  </div>
                </ProfileGlow>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          className="tracking-widest uppercase text-[10px] font-bold"
          style={{ color: "var(--muted)" }}
        >
          Scroll
        </span>
        <motion.div
          animate={lowPower ? {} : { y: [0, 12, 0] }}
          transition={lowPower ? {} : { duration: 1.5, repeat: Infinity }}
          className="w-[2px] h-10 rounded-full"
          style={{
            background: "linear-gradient(to bottom, var(--primary), transparent)"
          }}
        />
      </motion.div>

    </section>
  )
}