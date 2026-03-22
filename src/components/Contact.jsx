import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import MagneticButton from "./MagneticButton"
import Container from "./Container"

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-36 text-white overflow-hidden"
    >

      {/* ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sky-400 opacity-[0.08] blur-[200px] rounded-full" />
      </div>


      <Container className="relative z-10 flex flex-col items-center">

        {/* futuristic communication panel */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative max-w-2xl w-full text-center
          bg-slate-900/70 backdrop-blur-xl
          border border-slate-800
          rounded-3xl p-12
          shadow-[0_0_60px_rgba(56,189,248,0.08)]"
        >

          {/* signal rings */}

          <div className="absolute inset-0 pointer-events-none">

            <div className="absolute left-1/2 top-1/2 w-[300px] h-[300px] border border-sky-400/20 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse" />

            <div className="absolute left-1/2 top-1/2 w-[420px] h-[420px] border border-sky-400/10 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse" />

          </div>


          {/* header */}

          <span className="px-4 py-1 rounded-full border border-sky-400/30 text-sky-400 text-xs uppercase tracking-widest">
            Communication Channel
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mt-6">
            <span className="shine-text">Let's Connect</span>
          </h2>

          <p className="text-slate-400 mt-6 max-w-lg mx-auto leading-relaxed">
            I'm open to collaborating on innovative projects, discussing
            ideas, or exploring new opportunities. Feel free to reach out.
          </p>


          {/* CTA */}

          <div className="mt-10 flex justify-center">

            <MagneticButton href="mailto:adepulakshmisrinivas@gmail.com">

              <span className="flex items-center gap-3 text-lg font-semibold text-sky-400">

                <FaEnvelope />

                Send Message

              </span>

            </MagneticButton>

          </div>


          {/* socials */}

          <div className="flex justify-center gap-10 mt-12 text-slate-400">

            <a
              href="https://github.com/Srinivas8985"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center gap-2 hover:text-sky-400 transition"
            >
              <FaGithub className="text-3xl" />
              <span className="text-xs uppercase tracking-widest">
                GitHub
              </span>
            </a>

            <a
              href="#"
              className="flex flex-col items-center gap-2 hover:text-sky-400 transition"
            >
              <FaLinkedin className="text-3xl" />
              <span className="text-xs uppercase tracking-widest">
                LinkedIn
              </span>
            </a>

          </div>

        </motion.div>


        {/* footer */}

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-20 text-sm text-slate-500"
        >

          <p>
            Designed & Built by{" "}
            <span className="text-sky-400 font-semibold">
              Lakshmi Srinivas Adepu
            </span>
          </p>

          <p className="mt-1 text-xs text-slate-600">
            © {new Date().getFullYear()} All Rights Reserved
          </p>

        </motion.footer>

      </Container>

    </section>
  )
}
