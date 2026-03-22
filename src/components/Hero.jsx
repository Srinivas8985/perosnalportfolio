// import { useEffect, useRef } from "react"
// import Typed from "typed.js"
// import { motion } from "framer-motion"
// import { FaGithub, FaLinkedin, FaReact, FaNodeJs, FaDocker, FaJava, FaGitAlt } from "react-icons/fa"
// import { SiMongodb } from "react-icons/si"
// import { Link } from "react-scroll"
// import ProfileGlow from "./ProfileGlow"
// import MagneticButton from "./MagneticButton"
// import Background from "./Background"
// import ParticlesBackground from "./ParticlesBackground"
// import Container from "./Container"
// import ParallaxBackground from "./ParallaxBackground"
// import profileImg from "../assets/images/profile.png"

// const ORBIT_ICONS = [
//   { Icon: FaReact, color: "#38bdf8", label: "React", radius: 150, deg: 0 },
//   { Icon: FaNodeJs, color: "#22d3ee", label: "Node", radius: 150, deg: 60 },
//   { Icon: FaDocker, color: "#38bdf8", label: "Docker", radius: 150, deg: 120 },
//   { Icon: SiMongodb, color: "#22d3ee", label: "MongoDB", radius: 150, deg: 180 },
//   { Icon: FaJava, color: "#f472b6", label: "Java", radius: 150, deg: 240 },
//   { Icon: FaGitAlt, color: "#a78bfa", label: "Git", radius: 150, deg: 300 },
// ]

// function OrbitIcon({ Icon, color, label, deg, radius, duration = 20 }) {
//   const rad = (deg * Math.PI) / 180

//   return (
//     <motion.div
//       className="absolute"
//       style={{ top: "50%", left: "50%", width: 0, height: 0 }}
//       animate={{ rotate: 360 }}
//       transition={{ duration, repeat: Infinity, ease: "linear" }}
//     >
//       <motion.div
//         style={{
//           position: "absolute",
//           top: `${-radius * Math.cos(rad)}px`,
//           left: `${radius * Math.sin(rad)}px`,
//           transform: "translate(-50%, -50%)",
//         }}
//         animate={{ rotate: -360 }}
//         transition={{ duration, repeat: Infinity, ease: "linear" }}
//         whileHover={{ scale: 1.3 }}
//       >
//         <div className="group flex flex-col items-center gap-1 cursor-default">
//           <div
//             className="w-12 h-12 rounded-xl flex items-center justify-center
//             bg-slate-900/90 border border-white/10
//             shadow-lg backdrop-blur-sm"
//             style={{ boxShadow: `0 0 16px ${color}66` }}
//           >
//             <Icon style={{ color, fontSize: "1.5rem" }} />
//           </div>

//           <span className="text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity text-slate-300">
//             {label}
//           </span>
//         </div>
//       </motion.div>
//     </motion.div>
//   )
// }

// const fadeUp = (delay = 0) => ({
//   initial: { opacity: 0, y: 30 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
// })

// export default function Hero() {

//   const typedRef = useRef(null)
//   const profileRef = useRef(null)

//   useEffect(() => {
//     const typed = new Typed(typedRef.current, {
//       strings: [
//         "Lakshmi Srinivas Adepu",
//         "Full Stack Developer",
//         "Java Developer",
//         "DevOps Enthusiast",
//         "Problem Solver"
//       ],
//       typeSpeed: 55,
//       backSpeed: 30,
//       backDelay: 1500,
//       startDelay: 400,
//       loop: true
//     })

//     return () => typed.destroy()
//   }, [])

//   const handleMouseMove = (e) => {
//     const rect = profileRef.current.getBoundingClientRect()

//     const x = e.clientX - rect.left
//     const y = e.clientY - rect.top

//     const rotateX = ((y / rect.height) - 0.5) * 20
//     const rotateY = ((x / rect.width) - 0.5) * 20

//     profileRef.current.style.transform =
//       `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`
//   }

//   const resetTilt = () => {
//     profileRef.current.style.transform = "rotateX(0deg) rotateY(0deg)"
//   }

//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen flex items-center justify-center text-white pt-28 pb-10 overflow-hidden"
//     >
//       <ParallaxBackground />
//       <ParticlesBackground />
//       <Background />

//       <Container>

//         <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center">

//           {/* LEFT SIDE */}
//           <div className="flex flex-col items-center md:items-start text-center md:text-left gap-8">

//             <motion.div {...fadeUp(0.05)}
//               className="inline-flex items-center gap-2 px-4 py-2 rounded-full
//               border border-sky-400/30 bg-sky-400/10 text-sky-400
//               text-[11px] font-bold tracking-[0.15em] uppercase">
//               <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
//               Open to opportunities
//             </motion.div>

//             <motion.h1
//               {...fadeUp(0.15)}
//               className="text-5xl md:text-6xl font-bold tracking-tight"
//               style={{ fontFamily: "Outfit, sans-serif", minHeight: "6rem" }}
//             >
//               <span ref={typedRef} className="shine-text"></span>
//             </motion.h1>

//             <motion.p {...fadeUp(0.3)}
//               className="text-slate-400 text-base md:text-lg leading-relaxed max-w-lg">
//               Building scalable full-stack applications and beautiful web experiences.
//               Passionate about clean code, DevOps, and solving real-world problems.
//             </motion.p>

//             <motion.div {...fadeUp(0.4)}
//               className="flex flex-wrap justify-center md:justify-start gap-5">

//               <Link to="projects" smooth duration={700} offset={-70}>
//                 <MagneticButton>🚀 View Projects</MagneticButton>
//               </Link>

//               <Link to="contact" smooth duration={700} offset={-70}>
//                 <MagneticButton
//                   className="!border-slate-600 !text-slate-300
//                   hover:!border-sky-400 hover:!text-sky-400"
//                 >
//                   ✉️ Contact Me
//                 </MagneticButton>
//               </Link>

//               <a
//                 href="https://drive.google.com/file/d/1PqIqVAatFlmia1y54_D4cSPYAczdYT8r/view?usp=sharing"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <MagneticButton
//                   className="!border-violet-500 !text-violet-300
//                   hover:!border-violet-400 hover:!text-violet-200"
//                 >
//                   📄 Download Resume
//                 </MagneticButton>
//               </a>

//             </motion.div>

//             <motion.div {...fadeUp(0.5)}
//               className="flex items-center gap-6 text-slate-400">

//               <a href="https://github.com/Srinivas8985"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="group flex items-center gap-2 hover:text-sky-400">

//                 <FaGithub className="text-2xl group-hover:drop-shadow-[0_0_12px_rgba(56,189,248,0.8)]" />
//                 <span className="text-sm font-semibold">GitHub</span>
//               </a>

//               <span className="text-slate-700">|</span>

//               <a href="#"
//                 className="group flex items-center gap-2 hover:text-sky-400">

//                 <FaLinkedin className="text-2xl group-hover:drop-shadow-[0_0_12px_rgba(56,189,248,0.8)]" />
//                 <span className="text-sm font-semibold">LinkedIn</span>
//               </a>

//             </motion.div>

//           </div>

//           {/* RIGHT SIDE PROFILE */}

//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1.2 }}
//             className="flex justify-center"
//           >

//             <div
//               className="relative flex items-center justify-center"
//               style={{ width: "420px", height: "420px", perspective: "1200px" }}
//             >

//               <div
//                 className="absolute rounded-full border border-sky-400/10"
//                 style={{ width: "300px", height: "300px" }}
//               />

//               {ORBIT_ICONS.map((o, i) => (
//                 <OrbitIcon key={i} {...o} />
//               ))}

//               <div
//                 className="absolute rounded-full pulse-glow"
//                 style={{
//                   width: "250px",
//                   height: "250px",
//                   background: "radial-gradient(circle, rgba(56,189,248,0.35) 0%, transparent 70%)",
//                   filter: "blur(30px)"
//                 }}
//               />

//               <div
//                 className="gradient-ring rounded-full p-[4px]"
//                 style={{ width: "230px", height: "230px" }}
//               >

//                 <div
//                   ref={profileRef}
//                   onMouseMove={handleMouseMove}
//                   onMouseLeave={resetTilt}
//                   className="rounded-full overflow-hidden bg-slate-950 float-image"
//                   style={{
//                     width: "100%",
//                     height: "100%",
//                     transformStyle: "preserve-3d",
//                     transition: "transform 0.2s ease"
//                   }}
//                 >
//                   <img
//                     src={profileImg}
//                     alt="Lakshmi Srinivas Adepu"
//                     className="w-full h-full object-cover scale-105"
//                   />
//                 </div>

//               </div>

//             </div>

//           </motion.div>

//         </div>

//       </Container>

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 2.5 }}
//         className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs text-slate-500"
//       >
//         <span className="tracking-widest uppercase text-[10px] font-bold">Scroll</span>

//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 1.6, repeat: Infinity }}
//           className="w-px h-10 bg-gradient-to-b from-sky-400 to-transparent"
//         />
//       </motion.div>

//     </section>
//   )
// }
// import { useEffect, useRef } from "react"
// import Typed from "typed.js"
// import { motion } from "framer-motion"

// import {
//   FaGithub,
//   FaLinkedin,
//   FaReact,
//   FaNodeJs,
//   FaDocker,
//   FaJava,
//   FaGitAlt
// } from "react-icons/fa"

// import { SiMongodb } from "react-icons/si"

// import { Link } from "react-scroll"

// import ProfileGlow from "./ProfileGlow"
// import MagneticButton from "./MagneticButton"
// import Background from "./Background"
// import ParticlesBackground from "./ParticlesBackground"
// import ParallaxBackground from "./ParallaxBackground"
// import Container from "./Container"

// import profileImg from "../assets/images/profile.png"


// /* ORBIT ICON CONFIG */

// const ORBIT_ICONS = [
//   { Icon: FaReact, color: "#4f9cff", label: "React", radius: 150, deg: 0 },
//   { Icon: FaNodeJs, color: "#7c3aed", label: "Node", radius: 150, deg: 60 },
//   { Icon: FaDocker, color: "#4f9cff", label: "Docker", radius: 150, deg: 120 },
//   { Icon: SiMongodb, color: "#22c55e", label: "MongoDB", radius: 150, deg: 180 },
//   { Icon: FaJava, color: "#ec4899", label: "Java", radius: 150, deg: 240 },
//   { Icon: FaGitAlt, color: "#f97316", label: "Git", radius: 150, deg: 300 }
// ]


// /* ORBIT ICON COMPONENT */

// // function OrbitIcon({ Icon, color, label, deg, radius, duration = 22 }) {

// //   const rad = (deg * Math.PI) / 180

// //   return (
// //     <motion.div
// //       className="absolute"
// //       style={{ top: "50%", left: "50%", width: 0, height: 0 }}
// //       animate={{ rotate: 360 }}
// //       transition={{ duration, repeat: Infinity, ease: "linear" }}
// //     >
// //       <motion.div
// //         style={{
// //           position: "absolute",
// //           top: `${-radius * Math.cos(rad)}px`,
// //           left: `${radius * Math.sin(rad)}px`,
// //           transform: "translate(-50%, -50%)"
// //         }}
// //         animate={{ rotate: -360 }}
// //         transition={{ duration, repeat: Infinity, ease: "linear" }}
// //         whileHover={{ scale: 1.3 }}
// //       >

// //         <div className="group flex flex-col items-center gap-1 cursor-default">

// //           <div
// //             className="w-12 h-12 rounded-xl flex items-center justify-center
// //             bg-slate-900/90 border border-white/10
// //             shadow-lg backdrop-blur-sm
// //             transition-all duration-300 group-hover:scale-110"
// //             style={{
// //               boxShadow: `0 0 16px ${color}66`
// //             }}
// //           >
// //             <Icon style={{ color, fontSize: "1.5rem" }} />
// //           </div>

// //           <span
// //             className="text-[10px] font-bold opacity-0
// //             group-hover:opacity-100 transition-opacity
// //             text-slate-300"
// //           >
// //             {label}
// //           </span>

// //         </div>

// //       </motion.div>
// //     </motion.div>
// //   )
// // }
// function OrbitIcon({ Icon, color, label, deg, radius, duration = 22 }) {

//   const iconRef = useRef(null)
//   const rad = (deg * Math.PI) / 180

//   useEffect(() => {

//     const handleMove = (e) => {

//       const rect = iconRef.current.getBoundingClientRect()

//       const dx = e.clientX - (rect.left + rect.width / 2)
//       const dy = e.clientY - (rect.top + rect.height / 2)

//       const dist = Math.sqrt(dx * dx + dy * dy)

//       if (dist < 140) {

//         const strength = 0.35

//         iconRef.current.style.transform =
//           `translate(${dx * strength}px, ${dy * strength}px)`

//         iconRef.current.style.boxShadow =
//           `0 0 24px ${color}`

//       } else {

//         iconRef.current.style.transform = "translate(0px,0px)"
//         iconRef.current.style.boxShadow = `0 0 16px ${color}66`

//       }

//     }

//     window.addEventListener("mousemove", handleMove)

//     return () => window.removeEventListener("mousemove", handleMove)

//   }, [color])

//   return (

//     <motion.div
//       className="absolute"
//       style={{ top: "50%", left: "50%", width: 0, height: 0 }}
//       animate={{ rotate: 360 }}
//       transition={{ duration, repeat: Infinity, ease: "linear" }}
//     >

//       <motion.div
//         style={{
//           position: "absolute",
//           top: `${-radius * Math.cos(rad)}px`,
//           left: `${radius * Math.sin(rad)}px`,
//           transform: "translate(-50%, -50%)"
//         }}
//         animate={{ rotate: -360 }}
//         transition={{ duration, repeat: Infinity, ease: "linear" }}
//       >

//         <div className="group flex flex-col items-center gap-1 cursor-default">

//           <div
//             ref={iconRef}
//             className="w-12 h-12 rounded-xl flex items-center justify-center
//             bg-slate-900/90 border border-white/10
//             shadow-lg backdrop-blur-sm
//             transition-all duration-300"
//             style={{
//               boxShadow: `0 0 16px ${color}66`
//             }}
//           >
//             <Icon style={{ color, fontSize: "1.5rem" }} />
//           </div>

//           <span
//             className="text-[10px] font-bold opacity-0
//             group-hover:opacity-100 transition-opacity
//             text-slate-300"
//           >
//             {label}
//           </span>

//         </div>

//       </motion.div>

//     </motion.div>
//   )
// }

// /* ANIMATION HELPER */

// const fadeUp = (delay = 0) => ({
//   initial: { opacity: 0, y: 30 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }
// })


// /* HERO COMPONENT */

// export default function Hero() {

//   const typedRef = useRef(null)

//   useEffect(() => {

//     const typed = new Typed(typedRef.current, {
//       strings: [
//         "Lakshmi Srinivas Adepu",
//         "Full Stack Developer",
//         "Java Developer",
//         "DevOps Enthusiast",
//         "Problem Solver"
//       ],
//       typeSpeed: 55,
//       backSpeed: 30,
//       backDelay: 1500,
//       startDelay: 400,
//       loop: true
//     })

//     return () => typed.destroy()

//   }, [])


//   return (

//     <section
//       id="hero"
//       className="relative min-h-screen flex items-center justify-center
//       text-white pt-28 pb-10 overflow-hidden"
//     >

//       <ParallaxBackground />
//       <ParticlesBackground />
//       <Background />

//       <Container>

//         <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center">


//           {/* LEFT SIDE */}

//           <div className="flex flex-col items-center md:items-start text-center md:text-left gap-8">

//             <motion.div
//               {...fadeUp(0.05)}
//               className="inline-flex items-center gap-2 px-4 py-2 rounded-full
//               border border-sky-400/30 bg-sky-400/10 text-sky-400
//               text-[11px] font-bold tracking-[0.15em] uppercase"
//             >
//               <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
//               Open to opportunities
//             </motion.div>


//             <motion.h1
//               {...fadeUp(0.15)}
//               className="text-5xl md:text-6xl font-bold tracking-tight"
//               style={{ fontFamily: "Outfit, sans-serif", minHeight: "6rem" }}
//             >
//               <span ref={typedRef} className="shine-text" />
//             </motion.h1>


//             <motion.p
//               {...fadeUp(0.3)}
//               className="text-slate-400 text-base md:text-lg leading-relaxed max-w-lg"
//             >
//               Building scalable full-stack applications and beautiful web
//               experiences. Passionate about clean code, DevOps, and solving
//               real-world problems.
//             </motion.p>


//             {/* BUTTONS */}

//             <motion.div
//               {...fadeUp(0.4)}
//               className="flex flex-wrap justify-center md:justify-start gap-5"
//             >

//               <Link to="projects" smooth duration={700} offset={-70}>
//                 <MagneticButton>🚀 View Projects</MagneticButton>
//               </Link>

//               <Link to="contact" smooth duration={700} offset={-70}>
//                 <MagneticButton
//                   className="!border-slate-600 !text-slate-300
//                   hover:!border-sky-400 hover:!text-sky-400"
//                 >
//                   ✉️ Contact Me
//                 </MagneticButton>
//               </Link>

//               <a
//                 href="https://drive.google.com/file/d/1PqIqVAatFlmia1y54_D4cSPYAczdYT8r/view?usp=sharing"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <MagneticButton
//                   className="!border-violet-500 !text-violet-300
//                   hover:!border-violet-400 hover:!text-violet-200"
//                 >
//                   📄 Download Resume
//                 </MagneticButton>
//               </a>

//             </motion.div>


//             {/* SOCIALS */}

//             <motion.div
//               {...fadeUp(0.5)}
//               className="flex items-center gap-8 text-slate-400"
//             >

//               <a
//                 href="https://github.com/Srinivas8985"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="group flex items-center gap-2 hover:text-sky-400 transition"
//               >
//                 <FaGithub className="text-2xl transition group-hover:scale-110 group-hover:drop-shadow-[0_0_14px_rgba(56,189,248,0.8)]" />
//                 <span className="text-sm font-semibold">GitHub</span>
//               </a>

//               <span className="text-slate-700">|</span>

//               <a
//                 href="https://www.linkedin.com/in/sriniva8/"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="group flex items-center gap-2 hover:text-sky-400 transition"
//               >
//                 <FaLinkedin className="text-2xl transition group-hover:scale-110 group-hover:drop-shadow-[0_0_14px_rgba(167,139,250,0.8)]" />
//                 <span className="text-sm font-semibold">LinkedIn</span>
//               </a>

//             </motion.div>

//           </div>


//           {/* RIGHT SIDE PROFILE */}

//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1.2 }}
//             className="flex justify-center"
//           >

//             <div
//               className="relative flex items-center justify-center"
//               style={{ width: "420px", height: "420px" }}
//             >

//               <div
//                 className="absolute rounded-full border border-sky-400/10"
//                 style={{ width: "300px", height: "300px" }}
//               />

//               {ORBIT_ICONS.map((o, i) => (
//                 <OrbitIcon key={i} {...o} />
//               ))}

//               <div
//                 className="absolute rounded-full pulse-glow"
//                 style={{
//                   width: "250px",
//                   height: "250px",
//                   background:
//                     "radial-gradient(circle, rgba(56,189,248,0.35) 0%, transparent 70%)",
//                   filter: "blur(30px)"
//                 }}
//               />

//               <ProfileGlow>

//                 <div
//                   className="gradient-ring rounded-full p-[5px]
//                   shadow-[0_0_60px_rgba(56,189,248,0.35)]"
//                   style={{ width: "230px", height: "230px" }}
//                 >

//                   <div
//                     className="rounded-full overflow-hidden bg-slate-950 float-image"
//                     style={{
//                       width: "100%",
//                       height: "100%"
//                     }}
//                   >

//                     <img
//                       src={profileImg}
//                       alt="Lakshmi Srinivas Adepu"
//                       className="w-full h-full object-cover scale-105"
//                     />

//                     <div
//                       className="absolute inset-0 pointer-events-none"
//                       style={{
//                         background:
//                           "radial-gradient(circle at 50% 30%, rgba(255,255,255,0.15), transparent 60%)"
//                       }}
//                     />

//                   </div>

//                 </div>

//               </ProfileGlow>

//             </div>

//           </motion.div>

//         </div>

//       </Container>


//       {/* SCROLL INDICATOR */}

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 2.5 }}
//         className="absolute bottom-6 left-1/2 -translate-x-1/2
//         flex flex-col items-center gap-2 text-xs text-slate-500"
//       >

//         <span className="tracking-widest uppercase text-[10px] font-bold">
//           Scroll
//         </span>

//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 1.6, repeat: Infinity }}
//           className="w-px h-10 bg-gradient-to-b from-sky-400 to-transparent"
//         />

//       </motion.div>

//     </section>
//   )
// }
import { useEffect, useRef } from "react"
import Typed from "typed.js"
import { motion } from "framer-motion"

import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaJava,
  FaGitAlt
} from "react-icons/fa"

import { SiMongodb } from "react-icons/si"

import { Link } from "react-scroll"

import ProfileGlow from "./ProfileGlow"
import MagneticButton from "./MagneticButton"
import Background from "./Background"
import ParticlesBackground from "./ParticlesBackground"
import ParallaxBackground from "./ParallaxBackground"
import Container from "./Container"

import profileImg from "../assets/images/profile.png"


/* ORBIT ICONS */

const ORBIT_ICONS = [
  { Icon: FaReact, color: "#61dafb", label: "React", deg: 0 },
  { Icon: FaNodeJs, color: "#22c55e", label: "Node.js", deg: 60 },
  { Icon: FaDocker, color: "#0ea5e9", label: "Docker", deg: 120 },
  { Icon: SiMongodb, color: "#16a34a", label: "MongoDB", deg: 180 },
  { Icon: FaJava, color: "#f97316", label: "Java", deg: 240 },
  { Icon: FaGitAlt, color: "#ef4444", label: "Git", deg: 300 }
]


/* ORBIT ICON */

function OrbitIcon({ Icon, color, label, deg }) {

  const radius = typeof window !== "undefined" && window.innerWidth < 768 ? 110 : 150
  const rad = (deg * Math.PI) / 180

  return (

    <motion.div
      className="absolute"
      style={{ top: "50%", left: "50%" }}
      animate={{ rotate: 360 }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
    >

      <motion.div
        style={{
          position: "absolute",
          top: `${-radius * Math.cos(rad)}px`,
          left: `${radius * Math.sin(rad)}px`,
          transform: "translate(-50%, -50%)"
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >

        <motion.div
          whileHover={{
            scale: 1.25,
            boxShadow: `0 0 25px ${color}`
          }}
          transition={{ type: "spring", stiffness: 300 }}
          className="group flex flex-col items-center gap-1 cursor-default"
        >

          <div
            className="w-11 h-11 md:w-12 md:h-12
            rounded-xl flex items-center justify-center
            bg-slate-900/90 border border-white/10
            backdrop-blur-sm shadow-lg"
            style={{ boxShadow: `0 0 14px ${color}66` }}
          >
            <Icon style={{ color, fontSize: "1.4rem" }} />
          </div>

          <span
            className="text-[10px] font-bold opacity-0
            group-hover:opacity-100 transition-opacity
            text-slate-300"
          >
            {label}
          </span>

        </motion.div>

      </motion.div>

    </motion.div>

  )
}


/* ANIMATION */

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }
})


/* HERO */

export default function Hero() {

  const typedRef = useRef(null)

  useEffect(() => {

    const typed = new Typed(typedRef.current, {
      strings: [
        "Lakshmi Srinivas Adepu",
        "Full-Stack Developer",
        "Java & SpringBoot Developer",
        "MERN Stack Engineer",
        "DevOps Enthusiast"
      ],
      typeSpeed: 55,
      backSpeed: 30,
      backDelay: 1500,
      startDelay: 400,
      loop: true
    })

    return () => typed.destroy()

  }, [])


  return (

    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center
      text-white pt-28 pb-10 overflow-hidden"
    >

      <ParallaxBackground />
      <ParticlesBackground />
      <Background />

      <div className="absolute inset-0 bg-gradient-to-b
      from-transparent via-sky-500/5 to-transparent pointer-events-none" />

      <Container>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* LEFT */}

          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-8">

            <motion.div
              {...fadeUp(0.05)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full
              border border-sky-400/30 bg-sky-400/10 text-sky-400
              text-[11px] font-bold tracking-[0.15em] uppercase"
            >

              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              Open to opportunities

            </motion.div>


            <motion.h1
              {...fadeUp(0.15)}
              className="text-5xl md:text-6xl font-bold tracking-tight"
              style={{ fontFamily: "Outfit, sans-serif", minHeight: "6rem" }}
            >
              <span ref={typedRef} className="shine-text" />
            </motion.h1>


            <motion.p
              {...fadeUp(0.3)}
              className="text-slate-400 text-base md:text-lg leading-relaxed max-w-lg"
            >
              Building scalable full-stack applications and beautiful web
              experiences. Passionate about clean architecture, DevOps,
              and solving real-world problems.
            </motion.p>


            {/* TECH STACK */}

            <motion.div
              {...fadeUp(0.35)}
              className="flex flex-wrap gap-3 justify-center md:justify-start"
            >

              {["React", "Node.js", "Java", "MongoDB", "Docker"].map((tech) => (

                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-lg
                  border border-slate-700 bg-slate-900/70
                  text-slate-300"
                >
                  {tech}
                </span>

              ))}

            </motion.div>


            {/* BUTTONS */}

            <motion.div
              {...fadeUp(0.4)}
              className="flex flex-wrap justify-center md:justify-start gap-5"
            >

              <Link to="projects" smooth duration={700} offset={-70}>
                <MagneticButton>🚀 View Projects</MagneticButton>
              </Link>

              <Link to="contact" smooth duration={700} offset={-70}>
                <MagneticButton
                  className="!border-slate-600 !text-slate-300
                  hover:!border-sky-400 hover:!text-sky-400"
                >
                  ✉️ Contact Me
                </MagneticButton>
              </Link>

              <a
                href="https://drive.google.com"
                target="_blank"
                rel="noreferrer"
              >
                <MagneticButton
                  className="!border-violet-500 !text-violet-300
                  hover:!border-violet-400 hover:!text-violet-200"
                >
                  📄 Resume
                </MagneticButton>
              </a>

            </motion.div>


            {/* SOCIALS */}

            <motion.div
              {...fadeUp(0.5)}
              className="flex items-center gap-8 text-slate-400"
            >

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 hover:text-sky-400 transition"
              >
                <FaGithub className="text-2xl transition group-hover:scale-110" />
                <span className="text-sm font-semibold">GitHub</span>
              </a>

              <span className="text-slate-700">|</span>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 hover:text-sky-400 transition"
              >
                <FaLinkedin className="text-2xl transition group-hover:scale-110" />
                <span className="text-sm font-semibold">LinkedIn</span>
              </a>

            </motion.div>

          </div>


          {/* RIGHT PROFILE */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="flex justify-center"
          >

            <div
              className="relative flex items-center justify-center
              w-[320px] h-[320px]
              md:w-[380px] md:h-[380px]
              lg:w-[420px] lg:h-[420px]"
            >

              <div className="absolute w-[300px] h-[300px] rounded-full border border-sky-400/10" />

              {ORBIT_ICONS.map((o, i) => (
                <OrbitIcon key={i} {...o} />
              ))}

              <ProfileGlow>

                <div
                  className="gradient-ring rounded-full p-[5px]
                  shadow-[0_0_60px_rgba(56,189,248,0.35)]"
                >

                  <div className="rounded-full overflow-hidden bg-slate-950">

                    <img
                      src={profileImg}
                      alt="Lakshmi Srinivas Adepu"
                      className="w-[230px] h-[230px] object-cover scale-105"
                    />

                  </div>

                </div>

              </ProfileGlow>

            </div>

          </motion.div>

        </div>

      </Container>


      {/* SCROLL INDICATOR */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2
        flex flex-col items-center gap-2 text-xs text-slate-500"
      >

        <span className="tracking-widest uppercase text-[10px] font-bold">
          Scroll
        </span>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[2px] h-10 rounded-full
          bg-gradient-to-b from-sky-400 to-transparent"
        />

      </motion.div>

    </section>

  )
}