import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa"
import MagneticButton from "./MagneticButton"
import Container from "./Container"

const SOCIALS = [
  {
    icon: <FaGithub />,
    label: "GitHub",
    href: "https://github.com/Srinivas8985",
    accent: "var(--primary)",
    accentRaw: "#6366f1",
    glow: "rgba(99,102,241,0.6)"
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sriniva8/",
    accent: "var(--secondary)",
    accentRaw: "#22d3ee",
    glow: "rgba(34,211,238,0.6)"
  },
  {
    icon: <FaEnvelope />,
    label: "Email",
    href: "mailto:srinivas949k@gmail.com",
    accent: "var(--accent)",
    accentRaw: "#ec4899",
    glow: "rgba(236,72,153,0.6)"
  }
]

export default function Contact() {
  const [formState, setFormState] = useState("idle"); // "idle" | "form" | "submitting" | "success"

  return (
    <section
      id="contact"
      className="relative py-36 text-white overflow-hidden"
    >

      {/* Aurora background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-1/4 top-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
            filter: "blur(80px)"
          }}
        />
        <div
          className="absolute right-1/4 bottom-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 70%)",
            filter: "blur(80px)"
          }}
        />
      </div>

      <Container className="relative z-10 flex flex-col items-center">

        {/* Glass card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative max-w-2xl w-full text-center rounded-3xl p-12 overflow-hidden"
          style={{
            background: "rgba(15,23,42,0.55)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(99,102,241,0.18)",
            boxShadow:
              "0 0 60px rgba(99,102,241,0.1), 0 0 120px rgba(167,139,250,0.06), inset 0 1px 0 rgba(255,255,255,0.06)"
          }}
        >

          {/* Inner aurora rings */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
            <div
              className="absolute left-1/2 top-1/2 w-[350px] h-[350px] rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"
              style={{ border: "1px solid rgba(99,102,241,0.12)" }}
            />
            <div
              className="absolute left-1/2 top-1/2 w-[480px] h-[480px] rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"
              style={{
                border: "1px solid rgba(167,139,250,0.07)",
                animationDelay: "0.5s"
              }}
            />
            {/* Top gradient shimmer */}
            <div
              className="absolute top-0 left-0 right-0 h-[1px]"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.6), rgba(34,211,238,0.4), transparent)"
              }}
            />
          </div>

          {/* Badge */}
          <span
            className="px-4 py-1 rounded-full text-xs uppercase tracking-widest font-semibold"
            style={{
              border: "1px solid rgba(99,102,241,0.3)",
              color: "var(--primary)"
            }}
          >
            Get In Touch
          </span>

          {/* Heading */}
          <h2 className="text-5xl md:text-6xl font-bold mt-6">
            <span className="shine-text">Let's Connect</span>
          </h2>

          {/* Subtext */}
          <p className="mt-6 max-w-lg mx-auto leading-relaxed" style={{ color: "var(--muted)" }}>
            I'm open to collaborating on innovative projects, discussing ideas,
            or exploring new opportunities. Feel free to reach out.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
            <a
              href="tel:6303603854"
              className="flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-medium transition-all"
              style={{
                background: "rgba(99,102,241,0.08)",
                border: "1px solid rgba(99,102,241,0.25)",
                color: "var(--muted)"
              }}
              onMouseEnter={e => { e.currentTarget.style.color = "#6366f1"; e.currentTarget.style.borderColor = "rgba(99,102,241,0.6)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.borderColor = "rgba(99,102,241,0.25)"; }}
            >
              <FaPhone style={{ color: "#6366f1" }} />
              +91 6303603854
            </a>
            <a
              href="mailto:srinivas949k@gmail.com"
              className="flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-medium transition-all"
              style={{
                background: "rgba(236,72,153,0.08)",
                border: "1px solid rgba(236,72,153,0.25)",
                color: "var(--muted)"
              }}
              onMouseEnter={e => { e.currentTarget.style.color = "#ec4899"; e.currentTarget.style.borderColor = "rgba(236,72,153,0.6)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.borderColor = "rgba(236,72,153,0.25)"; }}
            >
              <FaEnvelope style={{ color: "#ec4899" }} />
              srinivas949k@gmail.com
            </a>
          </div>

          {/* CTA / Form Area */}
          <div className="mt-10 flex w-full justify-center min-h-[50px] transition-all duration-300">
            <AnimatePresence mode="wait">
              {formState === "idle" && (
                <motion.div
                  key="btn"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <MagneticButton onClick={() => setFormState("form")}>
                    <span
                      className="flex items-center gap-3 text-lg font-semibold"
                      style={{ color: "var(--primary)" }}
                    >
                      <FaEnvelope />
                      Send Message
                    </span>
                  </MagneticButton>
                </motion.div>
              )}

              {formState === "form" && (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="w-full max-w-md flex flex-col gap-4 text-left"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFormState("submitting");
                    setTimeout(() => setFormState("success"), 1500);
                  }}
                >
                  {/* Floating Label Input: Name */}
                  <div className="relative group">
                    <input type="text" id="name" required className="block w-full px-4 pt-6 pb-2 text-sm text-white bg-slate-900/50 border border-indigo-500/30 rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-cyan-400 peer transition-colors" placeholder=" " />
                    <label htmlFor="name" className="absolute text-sm text-slate-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-cyan-400 cursor-text">Name</label>
                  </div>

                  {/* Floating Label Input: Email */}
                  <div className="relative group">
                    <input type="email" id="email" required className="block w-full px-4 pt-6 pb-2 text-sm text-white bg-slate-900/50 border border-indigo-500/30 rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-cyan-400 peer transition-colors" placeholder=" " />
                    <label htmlFor="email" className="absolute text-sm text-slate-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-cyan-400 cursor-text">Email</label>
                  </div>

                  {/* Floating Label Textarea: Message */}
                  <div className="relative group">
                    <textarea id="message" rows="4" required className="block w-full px-4 pt-6 pb-2 text-sm text-white bg-slate-900/50 border border-indigo-500/30 rounded-xl appearance-none focus:outline-none focus:ring-0 focus:border-cyan-400 peer resize-none transition-colors" placeholder=" "></textarea>
                    <label htmlFor="message" className="absolute text-sm text-slate-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-cyan-400 cursor-text">Message</label>
                  </div>

                  <button type="submit" disabled={formState === "submitting"} className="w-full py-3.5 mt-2 rounded-xl font-bold tracking-wide transition-all bg-indigo-500/10 text-indigo-300 border border-indigo-500/40 hover:bg-cyan-500/20 hover:text-cyan-300 hover:border-cyan-500/50 disabled:opacity-50 flex justify-center items-center gap-2">
                    {formState === "submitting" ? (
                      <>
                        <span className="w-4 h-4 border-2 border-indigo-300 border-t-transparent rounded-full animate-spin"></span>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </motion.form>
              )}

              {formState === "success" && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-4 text-emerald-400 py-6"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.3)]"
                  >
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </motion.div>
                  <p className="font-bold text-lg tracking-wide">Message Sent Successfully 🚀</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Socials */}
          <div className="flex justify-center gap-10 mt-12">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-2 group cursor-pointer"
                style={{
                  color: "var(--muted)",
                  transition: `all var(--anim-fast) var(--ease-smooth)`
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = s.accentRaw
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = "var(--muted)"
                }}
              >
                <span
                  className="text-3xl transition-all"
                  style={{ lineHeight: 1 }}
                  onMouseEnter={e => {
                    e.currentTarget.style.filter = `drop-shadow(0 0 10px ${s.glow})`
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.filter = "none"
                  }}
                >
                  {s.icon}
                </span>
                <span className="text-xs uppercase tracking-widest">
                  {s.label}
                </span>
              </a>
            ))}
          </div>

        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16 text-sm"
          style={{ color: "var(--muted)" }}
        >
          <p>
            Designed &amp; Built by{" "}
            <span className="font-semibold" style={{ color: "var(--primary)" }}>
              Lakshmi Srinivas Adepu
            </span>
          </p>
          <p className="mt-1 text-xs opacity-50">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </motion.footer>

      </Container>
    </section>
  )
}
