import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import MagneticButton from "./MagneticButton"
import Container      from "./Container"

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 md:py-40 text-white overflow-hidden">

      {/* Radial center glow */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 60%, rgba(244,114,182,0.12) 0%, transparent 65%)",
        }}
      />

      {/* Pink blob bottom */}
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px]
        rounded-full bg-pink-600 opacity-[0.05] blur-[150px] pointer-events-none" />

      <Container className="relative z-10 text-center space-y-10">

        <motion.div
          initial={{ opacity:0, y:28 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.7 }}
          className="space-y-5"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-pink-400/10
            border border-pink-400/30 text-pink-300 text-[11px] font-bold tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight"
            style={{ fontFamily:"Outfit, sans-serif", letterSpacing: "-0.02em" }}>
            <span className="shine-text">Let&apos;s Connect</span>
          </h2>
          <p className="text-slate-400 leading-relaxed max-w-xl mx-auto text-lg">
            I&apos;m currently open to new opportunities. Whether you have a project idea,
            a question, or just want to say hi â€” my inbox is always open!
          </p>
        </motion.div>

        {/* Glowing CTA */}
        <motion.div
          initial={{ opacity:0, scale:0.95 }}
          whileInView={{ opacity:1, scale:1 }}
          viewport={{ once:true }}
          transition={{ duration:0.6, delay:0.2, type:"spring" }}
          className="flex justify-center pt-8"
        >
          <MagneticButton href="mailto:adepulakshmisrinivas@gmail.com">
            {/* The MagneticButton applies padding, we just provide the inner content */}
            <span className="flex items-center gap-3 text-lg py-2 px-4 shadow-lg text-pink-400">
              <FaEnvelope className="text-xl" /> Say Hello âœ¨
            </span>
          </MagneticButton>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity:0, y:10 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.6, delay:0.4 }}
          className="flex justify-center gap-10 text-slate-400 pt-8"
        >
          <a href="https://github.com/Srinivas8985" target="_blank" rel="noreferrer"
            className="flex items-center gap-2 hover:text-pink-400 transition-colors">
            <FaGithub className="text-2xl" />
            <span className="text-base font-bold uppercase tracking-wide">GitHub</span>
          </a>
          <a href="#"
            className="flex items-center gap-2 hover:text-pink-400 transition-colors">
            <FaLinkedin className="text-2xl" />
            <span className="text-base font-bold uppercase tracking-wide">LinkedIn</span>
          </a>
        </motion.div>

      </Container>

      {/* Footer */}
      <motion.footer
        initial={{ opacity:0 }}
        whileInView={{ opacity:1 }}
        viewport={{ once:true }}
        transition={{ duration:0.5, delay:0.6 }}
        className="relative z-10 mt-32 text-center text-sm font-medium text-slate-500 border-t border-slate-800/60 pt-10 pb-4"
      >
        <p>
          Designed &amp; Built by{" "}
          <span className="text-pink-400 font-bold">Lakshmi Srinivas Adepu</span>
        </p>
        <p className="mt-1 text-xs text-slate-600">Â© {new Date().getFullYear()} All Rights Reserved</p>
      </motion.footer>

    </section>
  )
}
