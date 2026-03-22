// import { motion } from "framer-motion"
// import { FaGithub, FaLinkedin, FaCode, FaServer, FaTools } from "react-icons/fa"
// import Container from "./Container"
// import TechCore from "./TechCore"

// const highlights = [
//   {
//     icon: <FaCode />,
//     label: "Frontend",
//     desc: "React, HTML, CSS, Tailwind CSS",
//   },
//   {
//     icon: <FaServer />,
//     label: "Backend",
//     desc: "Java, SpringBoot, Node.js, Express",
//   },
//   {
//     icon: <FaTools />,
//     label: "DevOps",
//     desc: "Git, GitHub, REST APIs, MySQL, MongoDB",
//   },
// ]

// const stats = [
//   { number: "20+", label: "Technologies" },
//   { number: "5+", label: "Projects" },
//   { number: "3+", label: "Years Learning" },
// ]

// export default function About() {

//   return (
//     <section
//       id="about"
//       className="section-divider relative py-32 text-white overflow-hidden"
//     >

//       {/* background glow */}

//       <div
//         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
//         w-[600px] h-[600px] bg-cyan-400 opacity-[0.05] blur-[180px] rounded-full"
//       />

//       <Container>

//         {/* Header */}

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="text-center mb-16"
//         >

//           <span
//             className="px-4 py-1 rounded-full
//             border border-cyan-400/30 text-cyan-400
//             text-xs uppercase tracking-widest"
//           >
//             Who I Am
//           </span>

//           <h2 className="text-4xl md:text-5xl font-bold mt-4">
//             <span className="shine-text">About Me</span>
//           </h2>

//         </motion.div>


//         {/* Layout */}

//         <div className="grid lg:grid-cols-2 gap-20 items-center">


//           {/* LEFT SIDE — TECH CORE */}

//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="flex flex-col items-center"
//           >

//             {/* floating animation */}

//             <motion.div
//               animate={{ y: [0, -12, 0] }}
//               transition={{ duration: 6, repeat: Infinity }}
//             >
//               <TechCore />
//             </motion.div>


//             {/* Stats */}

//             <div className="grid grid-cols-3 gap-8 mt-10 text-center">

//               {stats.map((s, i) => (

//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: i * 0.2 }}
//                 >

//                   <div className="text-2xl font-bold text-cyan-400">
//                     {s.number}
//                   </div>

//                   <div className="text-xs text-slate-400 mt-1">
//                     {s.label}
//                   </div>

//                 </motion.div>

//               ))}

//             </div>

//           </motion.div>


//           {/* RIGHT SIDE — TEXT + CARDS */}

//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="space-y-6"
//           >

//             <h3 className="text-2xl font-bold">
//               Hello, I'm{" "}
//               <span className="text-cyan-400">
//                 Lakshmi Srinivas Adepu
//               </span>
//             </h3>

//             <p className="text-slate-400 leading-relaxed">
//               I'm a passionate full-stack developer focused on building modern,
//               scalable applications using Java, React and Node.js.
//               I enjoy designing clean systems and crafting intuitive user
//               experiences.
//             </p>

//             <p className="text-slate-400 leading-relaxed">
//               My work focuses on solving real-world problems —
//               from real-time communication systems to automation platforms
//               and scalable APIs.
//             </p>


//             {/* highlight cards */}

//             <div className="grid gap-4 mt-6">

//               {highlights.map((h, i) => (

//                 <motion.div
//                   key={i}
//                   whileHover={{ x: 6 }}
//                   className="
//                   flex items-center gap-4 p-5 rounded-xl
//                   bg-slate-900/70 border border-slate-800
//                   backdrop-blur-md
//                   hover:border-cyan-400/40
//                   hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]
//                   transition-all duration-300"
//                 >

//                   <div className="text-cyan-400 text-2xl">
//                     {h.icon}
//                   </div>

//                   <div>

//                     <h4 className="font-semibold">
//                       {h.label}
//                     </h4>

//                     <p className="text-sm text-slate-400">
//                       {h.desc}
//                     </p>

//                   </div>

//                 </motion.div>

//               ))}

//             </div>


//             {/* socials */}

//             <div className="flex gap-6 pt-6">

//               <a
//                 href="https://github.com/Srinivas8985"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition"
//               >
//                 <FaGithub />
//                 GitHub
//               </a>

//               <a
//                 href="#"
//                 className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition"
//               >
//                 <FaLinkedin />
//                 LinkedIn
//               </a>

//             </div>

//           </motion.div>

//         </div>

//       </Container>

//     </section>
//   )
// }
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaCode, FaServer, FaTools } from "react-icons/fa"
import Container from "./Container"
import TechCore from "./TechCore"

const highlights = [
  {
    icon: <FaCode />,
    label: "Frontend Engineering",
    desc: "Building responsive UI using React, TailwindCSS, and modern JavaScript."
  },
  {
    icon: <FaServer />,
    label: "Backend Development",
    desc: "Designing scalable APIs with Java, SpringBoot, Node.js and Express."
  },
  {
    icon: <FaTools />,
    label: "DevOps & Tools",
    desc: "Working with Git, Docker, REST APIs, MySQL, and MongoDB."
  }
]

const stats = [
  { number: "20+", label: "Technologies" },
  { number: "5+", label: "Projects Built" },
  { number: "3+", label: "Years Learning" }
]

export default function About() {

  return (
    <section
      id="about"
      className="section-divider relative py-32 text-white overflow-hidden"
    >

      {/* Background Glow */}

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-[700px] h-[700px] bg-cyan-400 opacity-[0.05]
        blur-[200px] rounded-full"
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
            className="px-4 py-1 rounded-full
            border border-cyan-400/30 text-cyan-400
            text-xs uppercase tracking-widest"
          >
            Who I Am
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            <span className="shine-text">About Me</span>
          </h2>

          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            A passionate full-stack developer building modern, scalable web
            applications and solving real-world problems with clean and
            efficient code.
          </p>

        </motion.div>


        {/* Main Layout */}

        <div className="grid lg:grid-cols-2 gap-20 items-center">


          {/* LEFT SIDE — TECH CORE */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >

            {/* Floating animation */}

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <TechCore />
            </motion.div>


            {/* Stats */}

            <div className="grid grid-cols-3 gap-10 mt-12 text-center">

              {stats.map((s, i) => (

                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="p-4 rounded-xl
                  bg-slate-900/60 border border-slate-800
                  backdrop-blur-md"
                >

                  <div className="text-3xl font-bold text-cyan-400">
                    {s.number}
                  </div>

                  <div className="text-xs text-slate-400 mt-1">
                    {s.label}
                  </div>

                </motion.div>

              ))}

            </div>

          </motion.div>


          {/* RIGHT SIDE — TEXT + CARDS */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >

            <h3 className="text-2xl font-bold">
              Hello, I'm{" "}
              <span className="text-cyan-400">
                Lakshmi Srinivas Adepu
              </span>
            </h3>

            <p className="text-slate-400 leading-relaxed">
              I'm a passionate full-stack developer focused on building
              scalable applications using Java, React and Node.js.
              I enjoy designing clean systems and crafting intuitive
              user experiences.
            </p>

            <p className="text-slate-400 leading-relaxed">
              My work focuses on solving real-world problems —
              from real-time communication systems to automation
              platforms and scalable backend APIs.
            </p>


            {/* Highlight Cards */}

            <div className="grid gap-5 mt-8">

              {highlights.map((h, i) => (

                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  className="
                  flex items-start gap-4 p-6 rounded-xl
                  bg-slate-900/70 border border-slate-800
                  backdrop-blur-md
                  hover:border-cyan-400/40
                  hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]
                  transition-all duration-300"
                >

                  <div className="text-cyan-400 text-2xl">
                    {h.icon}
                  </div>

                  <div>

                    <h4 className="font-semibold">
                      {h.label}
                    </h4>

                    <p className="text-sm text-slate-400 mt-1">
                      {h.desc}
                    </p>

                  </div>

                </motion.div>

              ))}

            </div>


            {/* Social Links */}

            <div className="flex gap-6 pt-6">

              <a
                href="https://github.com/Srinivas8985"
                target="_blank"
                rel="noopener noreferrer"
                className="
                flex items-center gap-2
                px-4 py-2 rounded-lg
                border border-cyan-400/40
                bg-cyan-400/10
                text-cyan-400
                hover:bg-cyan-400/20
                transition"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/sriniva8/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                flex items-center gap-2
                px-4 py-2 rounded-lg
                border border-cyan-400/40
                bg-cyan-400/10
                text-cyan-400
                hover:bg-cyan-400/20
                transition"
              >
                <FaLinkedin />
                LinkedIn
              </a>

            </div>

          </motion.div>

        </div>

      </Container>

    </section>
  )
}