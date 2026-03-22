// import { motion } from "framer-motion"
// import Tilt from "react-parallax-tilt"
// import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
// import Container from "./Container"

// import foodforall from "../assets/projects/foodforall.png"
// import smartpark from "../assets/projects/smartpark.png"
// import expense from "../assets/projects/expense.png"
// import seat from "../assets/projects/seat.png"
// import chat from "../assets/projects/chat.png"

// const projects = [
//   {
//     title: "FoodForAll",
//     image: foodforall,
//     description:
//       "A social impact platform connecting food donors with NGOs and people in need with real-time matching.",
//     tech: ["React", "Node.js", "MongoDB", "Express"],
//     github: "https://github.com/Srinivas8985",
//     demo: "https://food-for-all-xoov.vercel.app/",
//     accent: "#22d3ee"
//   },
//   {
//     title: "SmartPark",
//     image: smartpark,
//     description:
//       "Smart parking system with real-time slot availability and QR based access.",
//     tech: ["React", "Node.js", "MongoDB", "Socket.io"],
//     github: "https://github.com/Srinivas8985",
//     demo: null,
//     accent: "#a78bfa"
//   },
//   {
//     title: "Daily Expenditure Tracker",
//     image: expense,
//     description:
//       "Personal finance dashboard for tracking expenses and visualising spending patterns.",
//     tech: ["JavaScript", "Node.js", "MySQL"],
//     github: "https://github.com/Srinivas8985",
//     demo: null,
//     accent: "#38bdf8"
//   },
//   {
//     title: "Seat Allocation System",
//     image: seat,
//     description:
//       "Automated seat allocation engine for institutions based on constraints and priority rules.",
//     tech: ["Java", "SpringBoot", "MySQL"],
//     github: "https://github.com/Srinivas8985",
//     demo: null,
//     accent: "#a78bfa"
//   },
//   {
//     title: "Realtime Chat App",
//     image: chat,
//     description:
//       "Full stack MERN chat application with socket rooms and online presence indicators.",
//     tech: ["React", "Node.js", "MongoDB", "Socket.io"],
//     github: "https://github.com/Srinivas8985",
//     demo: null,
//     accent: "#22d3ee"
//   }
// ]

// export default function Projects() {

//   return (
//     <section id="skills" className="section-divider py-32">

//       {/* glow background */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-400 opacity-[0.05] blur-[200px] rounded-full" />

//       <Container>

//         {/* Header */}

//         <div className="text-center mb-24">

//           <span className="px-4 py-1 rounded-full border border-cyan-400/30 text-cyan-400 text-xs uppercase tracking-widest">
//             Work
//           </span>

//           <h2 className="text-4xl md:text-5xl font-bold mt-4">
//             <span className="shine-text">Featured Projects</span>
//           </h2>

//           <p className="text-slate-400 mt-4 max-w-xl mx-auto">
//             Selected projects demonstrating full-stack engineering and product thinking.
//           </p>

//         </div>

//         {/* Grid */}

//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">

//           {projects.map((p, i) => (

//             <Tilt
//               key={i}
//               tiltMaxAngleX={8}
//               tiltMaxAngleY={8}
//               scale={1.03}
//               transitionSpeed={1500}
//               className="group"
//             >

//               <motion.div
//                 whileHover={{ y: -6 }}
//                 className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/70 backdrop-blur-md"
//               >

//                 {/* image */}

//                 <div className="relative overflow-hidden">

//                   <img
//                     src={p.image}
//                     alt={p.title}
//                     className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-110"
//                   />

//                   {/* hover overlay */}

//                   <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-6">

//                     <a
//                       href={p.github}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="text-white text-2xl hover:text-sky-400"
//                     >
//                       <FaGithub />
//                     </a>

//                     {p.demo && (
//                       <a
//                         href={p.demo}
//                         target="_blank"
//                         rel="noreferrer"
//                         className="text-white text-2xl hover:text-sky-400"
//                       >
//                         <FaExternalLinkAlt />
//                       </a>
//                     )}

//                   </div>

//                 </div>

//                 {/* content */}

//                 <div className="p-6">

//                   <h3
//                     className="text-xl font-bold mb-2"
//                     style={{ color: p.accent }}
//                   >
//                     {p.title}
//                   </h3>

//                   <p className="text-slate-400 text-sm mb-4">
//                     {p.description}
//                   </p>

//                   <div className="flex flex-wrap gap-2">

//                     {p.tech.map((t, j) => (
//                       <span
//                         key={j}
//                         className="text-xs px-3 py-1 rounded-lg bg-slate-950 border border-slate-800"
//                       >
//                         {t}
//                       </span>
//                     ))}

//                   </div>

//                 </div>

//               </motion.div>

//             </Tilt>

//           ))}

//         </div>

//       </Container>

//     </section>
//   )
// }
import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import Container from "./Container"

const projects = [
  {
    title: "FoodForAll",
    description:
      "A social impact platform connecting food donors with NGOs and people in need with real-time matching.",
    features: [
      "Real-time donor matching",
      "NGO request system",
      "Location-based food availability"
    ],
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/Srinivas8985",
    demo: "https://food-for-all-xoov.vercel.app/",
    accent: "#22d3ee"
  },
  {
    title: "SmartPark",
    description:
      "Smart parking system with real-time slot availability and QR based access.",
    features: [
      "Live parking slot tracking",
      "QR based parking entry",
      "Admin monitoring dashboard"
    ],
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com/Srinivas8985",
    demo: null,
    accent: "#a78bfa"
  },
  {
    title: "Daily Expenditure Tracker",
    description:
      "Personal finance dashboard for tracking expenses and visualising spending patterns.",
    features: [
      "Expense category tracking",
      "Monthly reports",
      "Data visualization"
    ],
    tech: ["JavaScript", "Node.js", "MySQL"],
    github: "https://github.com/Srinivas8985",
    demo: null,
    accent: "#38bdf8"
  },
  {
    title: "Seat Allocation System",
    description:
      "Automated seat allocation engine for institutions based on constraints and priority rules.",
    features: [
      "Rule based seat allocation",
      "Student preference matching",
      "Automated scheduling"
    ],
    tech: ["Java", "SpringBoot", "MySQL"],
    github: "https://github.com/Srinivas8985",
    demo: null,
    accent: "#f97316"
  },
  {
    title: "Realtime Chat App",
    description:
      "Full stack MERN chat application with socket rooms and online presence indicators.",
    features: [
      "Realtime messaging",
      "Online user presence",
      "Socket based chat rooms"
    ],
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com/Srinivas8985",
    demo: null,
    accent: "#22d3ee"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 section-divider">

      {/* Glow background */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-400 opacity-[0.05] blur-[200px] rounded-full" />

      <Container>

        {/* Header */}

        <div className="text-center mb-24">

          <span className="px-4 py-1 rounded-full border border-cyan-400/30 text-cyan-400 text-xs uppercase tracking-widest">
            Work
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            <span className="shine-text">Featured Projects</span>
          </h2>

          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Selected projects demonstrating product thinking and full-stack engineering.
          </p>

        </div>

        {/* Projects Grid */}

        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl border border-slate-800
              bg-slate-900/60 backdrop-blur-xl
              p-8 transition hover:border-cyan-400/40"
            >

              {/* Accent line */}

              <div
                className="absolute top-0 left-0 w-full h-1 rounded-t-2xl"
                style={{ background: project.accent }}
              />

              {/* Title */}

              <h3
                className="text-2xl font-semibold mb-3"
                style={{ color: project.accent }}
              >
                {project.title}
              </h3>

              {/* Description */}

              <p className="text-slate-400 text-sm mb-6">
                {project.description}
              </p>

              {/* Features */}

              <ul className="space-y-2 mb-6">

                {project.features.map((feature, idx) => (

                  <li
                    key={idx}
                    className="text-sm text-slate-300 flex items-start gap-2"
                  >
                    <span className="text-cyan-400">•</span>
                    {feature}
                  </li>

                ))}

              </ul>

              {/* Tech stack */}

              <div className="flex flex-wrap gap-2 mb-6">

                {project.tech.map((tech, idx) => (

                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-lg
                    bg-slate-950 border border-slate-800
                    text-slate-300"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              {/* Links */}

              <div className="flex gap-6 text-lg">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition"
                >
                  <FaGithub />
                  Code
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>
                )}

              </div>

            </motion.div>

          ))}

        </div>

      </Container>

    </section>
  )
}