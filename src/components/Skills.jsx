// import { motion } from "framer-motion"
// import Container from "./Container"
// import Stats from "./Stats"
// import {
//   FaReact,
//   FaNodeJs,
//   FaDocker,
//   FaGitAlt,
//   FaJava
// } from "react-icons/fa"

// import {
//   SiMongodb,
//   SiSpringboot,
//   SiMysql,
//   SiTailwindcss,
//   SiExpress,
//   SiPostman,
//   SiJavascript,
//   SiPython
// } from "react-icons/si"
// const skills = [
//   { name: "React", icon: FaReact, color: "#61dafb" },
//   { name: "Node.js", icon: FaNodeJs, color: "#22c55e" },
//   { name: "Docker", icon: FaDocker, color: "#0ea5e9" },
//   { name: "MongoDB", icon: SiMongodb, color: "#16a34a" },
//   { name: "Java", icon: FaJava, color: "#f97316" },
//   { name: "SpringBoot", icon: SiSpringboot, color: "#22c55e" },
//   { name: "MySQL", icon: SiMysql, color: "#38bdf8" },
//   { name: "Git", icon: FaGitAlt, color: "#f97316" },
//   { name: "Tailwind", icon: SiTailwindcss, color: "#38bdf8" },
//   { name: "Express", icon: SiExpress, color: "#94a3b8" },
//   { name: "JavaScript", icon: SiJavascript, color: "#facc15" },
//   { name: "Python", icon: SiPython, color: "#22d3ee" },
//   { name: "Postman", icon: SiPostman, color: "#f97316" }
// ]

// const containerAnim = {
//   hidden: {},
//   show: {
//     transition: { staggerChildren: 0.08 }
//   }
// }

// const cardAnim = {
//   hidden: { opacity: 0, y: 30 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5 }
//   }
// }

// export default function Skills() {
//   return (
//     <section id="skills" className="section-divider py-32">
//       <Stats />
//       <Container>

//         {/* Header */}
//         <div className="text-center mb-20">

//           <span className="px-4 py-1 rounded-full border border-sky-400/30 text-sky-400 text-xs uppercase tracking-widest">
//             Toolkit
//           </span>

//           <h2 className="text-4xl md:text-5xl font-bold mt-4">
//             <span className="shine-text">Skills & Technologies</span>
//           </h2>

//           <p className="text-slate-400 mt-4 max-w-xl mx-auto">
//             Technologies I use to build scalable full-stack applications.
//           </p>

//         </div>

//         {/* Grid */}
//         <motion.div
//           variants={containerAnim}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
//         >

//           {skills.map((skill, i) => {
//             const Icon = skill.icon

//             return (
//               <motion.div
//                 key={i}
//                 variants={cardAnim}
//                 whileHover={{ y: -6, scale: 1.05 }}
//                 className="group flex flex-col items-center justify-center gap-4
//                 rounded-2xl border border-slate-800
//                 bg-slate-900/60 backdrop-blur-xl
//                 p-6 cursor-default
//                 transition-all duration-300
//                 hover:border-sky-400/40
//                 hover:shadow-[0_0_30px_rgba(56,189,248,0.3)]"
//               >

//                 <Icon
//                   size={38}
//                   style={{ color: skill.color }}
//                   className="transition-transform duration-300 group-hover:scale-125"
//                 />

//                 <span className="text-sm text-slate-300 font-semibold tracking-wide">
//                   {skill.name}
//                 </span>

//               </motion.div>
//             )
//           })}

//         </motion.div>

//       </Container>
//     </section>
//   )
// }
// import { motion } from "framer-motion"
// import Container from "./Container"
// import Stats from "./Stats"
// import {
//   FaReact, FaNodeJs, FaDocker, FaGitAlt, FaJava
// } from "react-icons/fa"
// import {
//   SiMongodb, SiSpringboot, SiMysql, SiTailwindcss,
//   SiExpress, SiPostman, SiJavascript, SiPython
// } from "react-icons/si"

// const SKILL_GROUPS = [
//   {
//     label: "Frontend",
//     accent: "#38bdf8",
//     skills: [
//       { name: "React",       icon: FaReact,       color: "#61dafb" },
//       { name: "JavaScript",  icon: SiJavascript,  color: "#facc15" },
//       { name: "Tailwind",    icon: SiTailwindcss, color: "#38bdf8" },
//     ],
//   },
//   {
//     label: "Backend",
//     accent: "#34d399",
//     skills: [
//       { name: "Node.js",    icon: FaNodeJs,     color: "#22c55e" },
//       { name: "Express",    icon: SiExpress,    color: "#94a3b8" },
//       { name: "Java",       icon: FaJava,       color: "#f97316" },
//       { name: "SpringBoot", icon: SiSpringboot, color: "#22c55e" },
//       { name: "Python",     icon: SiPython,     color: "#22d3ee" },
//     ],
//   },
//   {
//     label: "Data & DevOps",
//     accent: "#a78bfa",
//     skills: [
//       { name: "MongoDB", icon: SiMongodb, color: "#16a34a" },
//       { name: "MySQL",   icon: SiMysql,   color: "#38bdf8" },
//       { name: "Docker",  icon: FaDocker,  color: "#0ea5e9" },
//       { name: "Git",     icon: FaGitAlt,  color: "#f97316" },
//       { name: "Postman", icon: SiPostman, color: "#f97316" },
//     ],
//   },
// ]

// const containerVariants = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.07 } },
// }

// const cardVariants = {
//   hidden: { opacity: 0, y: 24, scale: 0.95 },
//   show:   { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
// }

// function SkillCard({ name, icon: Icon, color }) {
//   return (
//     <motion.div
//       variants={cardVariants}
//       whileHover={{ y: -5, scale: 1.06 }}
//       className="group relative flex flex-col items-center justify-center gap-3
//         rounded-2xl border border-white/[0.06] bg-white/[0.03]
//         backdrop-blur-md p-5 cursor-default overflow-hidden
//         transition-colors duration-300
//         hover:border-white/[0.14] hover:bg-white/[0.06]"
//     >
//       {/* Glow on hover */}
//       <div
//         className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
//         style={{ background: `radial-gradient(circle at 50% 0%, ${color}22 0%, transparent 70%)` }}
//       />

//       <Icon
//         size={32}
//         style={{ color }}
//         className="relative z-10 transition-transform duration-300 group-hover:scale-110 drop-shadow-sm"
//       />
//       <span className="relative z-10 text-[11px] font-semibold tracking-widest uppercase text-slate-400 group-hover:text-slate-200 transition-colors duration-300">
//         {name}
//       </span>
//     </motion.div>
//   )
// }

// export default function Skills() {
//   return (
//     <section id="skills" className="section-divider py-32 relative">
//       <Stats />

//       {/* Ambient background blob */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div
//           className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] opacity-20 blur-[100px]"
//           style={{ background: "radial-gradient(ellipse, #38bdf8 0%, #a78bfa 50%, transparent 80%)" }}
//         />
//       </div>

//       <Container>
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//           className="text-center mb-20"
//         >
//           <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
//             border border-sky-400/25 bg-sky-400/8 text-sky-400
//             text-[10px] font-bold tracking-[0.2em] uppercase mb-5">
//             <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
//             Toolkit
//           </span>

//           <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-2 mb-4">
//             <span className="shine-text">Skills & Technologies</span>
//           </h2>

//           <p className="text-slate-400 text-base max-w-md mx-auto leading-relaxed">
//             Technologies I reach for when building scalable, production-ready applications.
//           </p>
//         </motion.div>

//         {/* Grouped skill sections */}
//         <div className="flex flex-col gap-14">
//           {SKILL_GROUPS.map((group, gi) => (
//             <motion.div
//               key={group.label}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: gi * 0.1, ease: [0.22, 1, 0.36, 1] }}
//             >
//               {/* Group label */}
//               <div className="flex items-center gap-3 mb-6">
//                 <span
//                   className="text-[10px] font-bold tracking-[0.2em] uppercase"
//                   style={{ color: group.accent }}
//                 >
//                   {group.label}
//                 </span>
//                 <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, ${group.accent}44, transparent)` }} />
//               </div>

//               {/* Cards */}
//               <motion.div
//                 variants={containerVariants}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true }}
//                 className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4"
//               >
//                 {group.skills.map((skill) => (
//                   <SkillCard key={skill.name} {...skill} />
//                 ))}
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </Container>
//     </section>
//   )
// }
// import { useEffect, useRef } from "react"
// import { motion, useInView } from "framer-motion"
// import Container from "./Container"
// import Stats from "./Stats"
// import {
//   FaReact, FaNodeJs, FaDocker, FaGitAlt, FaJava
// } from "react-icons/fa"
// import {
//   SiMongodb, SiSpringboot, SiMysql, SiTailwindcss,
//   SiExpress, SiPostman, SiJavascript, SiPython
// } from "react-icons/si"

// const SKILL_GROUPS = [
//   {
//     label: "Frontend",
//     accent: "#38bdf8",
//     bg: "rgba(56,189,248,0.08)",
//     gradient: "from-sky-400/30 to-transparent",
//     skills: [
//       { name: "React",      Icon: FaReact,       color: "#61dafb", tip: "UI library",     dots: 5, tag: "Primary" },
//       { name: "JavaScript", Icon: SiJavascript,  color: "#facc15", tip: "ES2023+",         dots: 5, tag: "Primary" },
//       { name: "Tailwind",   Icon: SiTailwindcss, color: "#38bdf8", tip: "CSS framework",  dots: 4, tag: "Styling"  },
//     ],
//   },
//   {
//     label: "Backend",
//     accent: "#34d399",
//     bg: "rgba(52,211,153,0.08)",
//     gradient: "from-emerald-400/30 to-transparent",
//     skills: [
//       { name: "Node.js",    Icon: FaNodeJs,     color: "#22c55e", tip: "Runtime",         dots: 4, tag: "Server"  },
//       { name: "Express",    Icon: SiExpress,    color: "#94a3b8", tip: "Web framework",   dots: 4, tag: "API"     },
//       { name: "Java",       Icon: FaJava,       color: "#f97316", tip: "OOP lang",        dots: 5, tag: "Primary" },
//       { name: "SpringBoot", Icon: SiSpringboot, color: "#22c55e", tip: "Java framework",  dots: 4, tag: "Backend" },
//       { name: "Python",     Icon: SiPython,     color: "#22d3ee", tip: "Scripting",       dots: 3, tag: "Tools"   },
//     ],
//   },
//   {
//     label: "Data & DevOps",
//     accent: "#a78bfa",
//     bg: "rgba(167,139,250,0.08)",
//     gradient: "from-violet-400/30 to-transparent",
//     skills: [
//       { name: "MongoDB",  Icon: SiMongodb, color: "#16a34a", tip: "NoSQL DB",        dots: 4, tag: "Database" },
//       { name: "MySQL",    Icon: SiMysql,   color: "#38bdf8", tip: "Relational DB",   dots: 4, tag: "Database" },
//       { name: "Docker",   Icon: FaDocker,  color: "#0ea5e9", tip: "Containers",      dots: 3, tag: "DevOps"   },
//       { name: "Git",      Icon: FaGitAlt,  color: "#f97316", tip: "Version control", dots: 5, tag: "Primary"  },
//       { name: "Postman",  Icon: SiPostman, color: "#f97316", tip: "API testing",     dots: 4, tag: "Testing"  },
//     ],
//   },
// ]

// const ALL_SKILLS = SKILL_GROUPS.flatMap(g => g.skills)

// // ------ SKILL CARD ------
// function SkillCard({ name, Icon, color, tip, dots, tag, index }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20, scale: 0.92 }}
//       animate={{ opacity: 1, y: 0, scale: 1 }}
//       transition={{
//         duration: 0.5,
//         delay: index * 0.06,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//       whileHover={{ y: -8, scale: 1.05 }}
//       className="group relative flex flex-col items-center justify-center gap-2.5
//         rounded-2xl border border-white/[0.07] bg-white/[0.025] backdrop-blur-xl
//         p-5 cursor-default overflow-hidden
//         transition-colors duration-300
//         hover:border-white/[0.14] hover:bg-white/[0.05]"
//       style={{ "--card-accent": color }}
//     >
//       {/* Tooltip */}
//       <div className="absolute -top-9 left-1/2 -translate-x-1/2
//         bg-slate-900 border border-white/10 rounded-lg px-2.5 py-1
//         text-[10px] font-mono text-slate-300 whitespace-nowrap
//         opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0
//         transition-all duration-200 pointer-events-none z-10">
//         {tip}
//       </div>

//       {/* Tag badge */}
//       <span
//         className="absolute top-2 right-2 text-[8px] font-bold uppercase tracking-wider
//           px-1.5 py-0.5 rounded
//           opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100
//           transition-all duration-300"
//         style={{ background: color + "1a", color, border: `1px solid ${color}44` }}
//       >
//         {tag}
//       </span>

//       {/* Top glow on hover */}
//       <div
//         className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
//         style={{ background: `radial-gradient(circle at 50% 0%, ${color}1a 0%, transparent 65%)` }}
//       />

//       {/* Icon container */}
//       <div
//         className="relative w-14 h-14 rounded-[14px] flex items-center justify-center
//           bg-white/[0.04] border border-white/[0.07]
//           transition-all duration-300
//           group-hover:scale-110 group-hover:-rotate-3 group-hover:bg-white/[0.07]"
//         style={{ "--hover-border": color + "80" }}
//       >
//         <Icon
//           size={28}
//           style={{ color }}
//           className="transition-transform duration-300"
//         />
//         {/* Icon glow */}
//         <div
//           className="absolute inset-0 rounded-[14px] opacity-0 group-hover:opacity-100 transition-opacity duration-400 blur-sm"
//           style={{ background: color + "20" }}
//         />
//       </div>

//       {/* Name */}
//       <span className="text-[11px] font-bold tracking-widest uppercase text-slate-400 group-hover:text-slate-200 transition-colors duration-300">
//         {name}
//       </span>

//       {/* Dots */}
//       <div className="flex gap-1">
//         {Array.from({ length: 5 }, (_, i) => (
//           <div
//             key={i}
//             className="w-1.5 h-1.5 rounded-full transition-all duration-300"
//             style={{
//               background: i < dots ? color : "rgba(255,255,255,0.1)",
//               opacity: i < dots ? 0.6 : 1,
//               boxShadow: i < dots ? `0 0 4px ${color}88` : "none",
//             }}
//           />
//         ))}
//       </div>
//     </motion.div>
//   )
// }

// // ------ GROUP BLOCK ------
// function GroupBlock({ group, groupIndex }) {
//   const ref = useRef(null)
//   const inView = useInView(ref, { once: true, margin: "-80px" })

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 28 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.7, delay: groupIndex * 0.15, ease: [0.22, 1, 0.36, 1] }}
//     >
//       {/* Group header */}
//       <div className="flex items-center gap-3 mb-5">
//         <span
//           className="font-mono text-[10px] font-semibold tracking-[0.2em] uppercase whitespace-nowrap"
//           style={{ color: group.accent }}
//         >
//           {group.label}
//         </span>
//         <div
//           className="flex-1 h-px"
//           style={{ background: `linear-gradient(90deg, ${group.accent}50, transparent)` }}
//         />
//         <span
//           className="font-mono text-[10px] font-medium px-2 py-0.5 rounded-full border opacity-50"
//           style={{ color: group.accent, borderColor: group.accent + "50" }}
//         >
//           {group.skills.length} skills
//         </span>
//       </div>

//       {/* Cards grid */}
//       <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
//         {inView && group.skills.map((skill, i) => (
//           <SkillCard key={skill.name} {...skill} index={i} />
//         ))}
//       </div>
//     </motion.div>
//   )
// }

// // ------ MARQUEE ------
// function Marquee() {
//   const items = [...ALL_SKILLS, ...ALL_SKILLS]
//   return (
//     <div className="relative mt-20 overflow-hidden py-5 border-y border-white/[0.05]"
//       style={{ maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)" }}>
//       <div className="flex gap-8 w-max animate-[marquee_22s_linear_infinite]">
//         {items.map((s, i) => (
//           <span key={i} className="flex items-center gap-2 text-[11px] font-mono text-slate-500 whitespace-nowrap px-2">
//             <span
//               className="w-1.5 h-1.5 rounded-full flex-shrink-0"
//               style={{ background: s.color, boxShadow: `0 0 5px ${s.color}88` }}
//             />
//             {s.name}
//           </span>
//         ))}
//       </div>
//     </div>
//   )
// }

// // ------ MAIN ------
// export default function Skills() {
//   return (
//     <section id="skills" className="section-divider relative py-32 overflow-hidden">
//       <Stats />

//       {/* Ambient blobs */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[500px] opacity-100"
//           style={{ background: "radial-gradient(ellipse, rgba(56,189,248,0.06) 0%, rgba(167,139,250,0.04) 40%, transparent 70%)", filter: "blur(100px)" }} />
//         <div className="absolute bottom-0 -left-32 w-96 h-96"
//           style={{ background: "radial-gradient(ellipse, rgba(52,211,153,0.05) 0%, transparent 70%)", filter: "blur(80px)" }} />
//         <div className="absolute bottom-32 -right-16 w-72 h-72"
//           style={{ background: "radial-gradient(ellipse, rgba(251,191,36,0.04) 0%, transparent 70%)", filter: "blur(80px)" }} />
//       </div>

//       {/* Dot grid overlay */}
//       <div className="pointer-events-none absolute inset-0"
//         style={{
//           backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.02) 1px, transparent 1px)",
//           backgroundSize: "32px 32px"
//         }} />

//       {/* Scan line */}
//       <div className="pointer-events-none absolute left-0 right-0 h-px"
//         style={{
//           background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.2), transparent)",
//           animation: "scan 12s linear infinite",
//           top: 0
//         }} />

//       <Container>
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//           className="text-center mb-20"
//         >
//           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
//             border border-sky-400/25 bg-sky-400/[0.08] text-sky-400
//             text-[10px] font-bold tracking-[0.2em] uppercase mb-5 font-mono">
//             <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" style={{ boxShadow: "0 0 8px #38bdf8" }} />
//             Toolkit
//           </div>

//           <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
//             <span className="shine-text">Skills & Technologies</span>
//           </h2>

//           <p className="text-slate-500 text-base max-w-md mx-auto leading-relaxed">
//             Technologies I reach for when building scalable, production-ready applications.
//           </p>
//         </motion.div>

//         {/* Stats */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
//           className="flex flex-wrap justify-center gap-4 mb-20"
//         >
//           {[
//             { num: "13+", label: "Technologies", from: "#38bdf8", to: "#818cf8" },
//             { num: "3+",  label: "Years Exp.",   from: "#34d399", to: "#22d3ee" },
//             { num: "15+", label: "Projects",     from: "#fbbf24", to: "#fb923c" },
//             { num: "∞",   label: "Commits",      from: "#f472b6", to: "#a78bfa" },
//           ].map((s) => (
//             <div key={s.label}
//               className="text-center px-7 py-4 rounded-2xl border border-white/[0.07]
//                 bg-white/[0.02] backdrop-blur-md
//                 hover:border-white/[0.14] hover:-translate-y-1
//                 transition-all duration-300 cursor-default">
//               <div className="text-3xl font-extrabold font-mono leading-none mb-1"
//                 style={{ background: `linear-gradient(135deg, ${s.from}, ${s.to})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
//                 {s.num}
//               </div>
//               <div className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold">{s.label}</div>
//             </div>
//           ))}
//         </motion.div>

//         {/* Groups */}
//         <div className="flex flex-col gap-14 max-w-5xl mx-auto">
//           {SKILL_GROUPS.map((group, gi) => (
//             <GroupBlock key={group.label} group={group} groupIndex={gi} />
//           ))}
//         </div>

//         <Marquee />
//       </Container>
//     </section>
//   )
// }
import { motion } from "framer-motion"
import Container from "./Container"
import Stats from "./Stats"

import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaJava
} from "react-icons/fa"

import {
  SiMongodb,
  SiSpringboot,
  SiMysql,
  SiTailwindcss,
  SiExpress,
  SiPostman,
  SiJavascript,
  SiPython
} from "react-icons/si"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: FaReact, color: "#61dafb", level: 90 },
      { name: "Tailwind", icon: SiTailwindcss, color: "#38bdf8", level: 90 },
      { name: "JavaScript", icon: SiJavascript, color: "#facc15", level: 85 }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#22c55e", level: 85 },
      { name: "Express", icon: SiExpress, color: "#94a3b8", level: 80 },
      { name: "SpringBoot", icon: SiSpringboot, color: "#22c55e", level: 75 }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#16a34a", level: 85 },
      { name: "MySQL", icon: SiMysql, color: "#38bdf8", level: 80 }
    ]
  },
  {
    title: "Languages & Tools",
    skills: [
      { name: "Java", icon: FaJava, color: "#f97316", level: 85 },
      { name: "Python", icon: SiPython, color: "#22d3ee", level: 70 },
      { name: "Git", icon: FaGitAlt, color: "#f97316", level: 85 },
      { name: "Docker", icon: FaDocker, color: "#0ea5e9", level: 70 },
      { name: "Postman", icon: SiPostman, color: "#f97316", level: 80 }
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 section-divider">

      {/* Glow background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-sky-400 opacity-[0.05] blur-[200px] rounded-full" />

      <Stats />

      <Container>

        {/* Header */}

        <div className="text-center mb-20">

          <span className="px-4 py-1 rounded-full border border-sky-400/30 text-sky-400 text-xs uppercase tracking-widest">
            Toolkit
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            <span className="shine-text">Skills & Technologies</span>
          </h2>

          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Technologies I use to build scalable and production-ready full-stack applications.
          </p>

        </div>

        {/* Categories */}

        <div className="grid md:grid-cols-2 gap-10">

          {skillCategories.map((category, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-800
              bg-slate-900/60 backdrop-blur-xl
              p-8 hover:border-sky-400/40
              transition"
            >

              {/* Category Title */}

              <h3 className="text-xl font-semibold mb-6 text-sky-400">
                {category.title}
              </h3>

              <div className="space-y-6">

                {category.skills.map((skill, i) => {

                  const Icon = skill.icon

                  return (

                    <div key={i}>

                      {/* Top Row */}

                      <div className="flex items-center justify-between mb-2">

                        <div className="flex items-center gap-3">

                          <Icon size={20} style={{ color: skill.color }} />

                          <span className="text-slate-300 text-sm font-medium">
                            {skill.name}
                          </span>

                        </div>

                        <span className="text-xs text-slate-400">
                          {skill.level}%
                        </span>

                      </div>

                      {/* Progress Bar */}

                      <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">

                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1 }}
                          viewport={{ once: true }}
                          className="h-full rounded-full"
                          style={{
                            background: `linear-gradient(90deg, ${skill.color}, #38bdf8)`
                          }}
                        />

                      </div>

                    </div>

                  )

                })}

              </div>

            </motion.div>

          ))}

        </div>

      </Container>

    </section>
  )
}