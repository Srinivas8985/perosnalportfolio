import { motion } from "framer-motion"
import Container from "./Container"

const experiences = [
  {
    year: "2025",
    title: "Full Stack Developer",
    company: "Personal Projects",
    description:
      "Built full-stack applications using React, Node.js, MongoDB and Express with scalable architecture and real-time features."
  },
  {
    year: "2024",
    title: "Java Developer",
    company: "Academic Projects",
    description:
      "Developed backend systems using Java and SpringBoot including automated seat allocation systems and REST APIs."
  },
  {
    year: "2023",
    title: "Started Web Development",
    company: "Learning Journey",
    description:
      "Learned HTML, CSS, JavaScript and began building responsive web applications."
  }
]

const cardAnim = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
}

export default function Experience() {

  return (
    <section id="skills" className="section-divider py-32">

      {/* background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sky-400 opacity-[0.05] blur-[200px] rounded-full" />

      <Container>

        {/* Header */}

        <div className="text-center mb-24">

          <span className="px-4 py-1 rounded-full border border-sky-400/30 text-sky-400 text-xs uppercase tracking-widest">
            Journey
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            <span className="shine-text">Experience</span>
          </h2>

          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            My journey in software development and full-stack engineering.
          </p>

        </div>


        {/* Timeline */}

        <div className="relative max-w-4xl mx-auto">

          {/* glowing vertical beam */}

          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-sky-400 via-cyan-400 to-transparent opacity-70" />


          {experiences.map((exp, i) => (

            <motion.div
              key={i}
              variants={cardAnim}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={`relative flex items-center mb-20 ${
                i % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >

              {/* glowing node */}

              <div className="absolute left-1/2 transform -translate-x-1/2">

                <div className="relative flex items-center justify-center">

                  <div className="absolute w-6 h-6 bg-sky-400 rounded-full blur-md opacity-70 animate-pulse" />

                  <div className="w-4 h-4 bg-sky-400 rounded-full border border-white/30" />

                </div>

              </div>


              {/* card */}

              <div className="w-1/2 px-10">

                <div className="relative group bg-slate-900/70 backdrop-blur-xl border border-slate-800 p-7 rounded-2xl transition hover:border-sky-400/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.25)]">

                  {/* year chip */}

                  <div className="inline-block mb-3 px-3 py-1 text-xs font-semibold rounded-full border border-sky-400/30 text-sky-400">
                    {exp.year}
                  </div>

                  <h3 className="text-xl font-bold mb-1">
                    {exp.title}
                  </h3>

                  <p className="text-sm text-slate-400 mb-3">
                    {exp.company}
                  </p>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {exp.description}
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </Container>

    </section>
  )
}
