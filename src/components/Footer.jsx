// import { motion } from "framer-motion"
// import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa"
// import Container from "./Container"

// export default function Footer() {
//   return (
//     <footer className="relative py-16 text-white border-t border-slate-800 overflow-hidden">

//       {/* background glow */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute w-[500px] h-[500px] bg-cyan-400 opacity-[0.05] blur-[180px] rounded-full left-1/2 -translate-x-1/2 top-[-200px]" />
//       </div>

//       <Container className="relative z-10">

//         {/* top row */}
//         <div className="flex flex-col md:flex-row items-center justify-between gap-8">

//           {/* name */}
//           <motion.h3
//             initial={{ opacity:0, y:20 }}
//             whileInView={{ opacity:1, y:0 }}
//             viewport={{ once:true }}
//             className="text-xl font-bold tracking-wide"
//           >
//             <span className="shine-text">Lakshmi Srinivas Adepu</span>
//           </motion.h3>

//           {/* socials */}
//           <motion.div
//             initial={{ opacity:0, y:20 }}
//             whileInView={{ opacity:1, y:0 }}
//             transition={{ delay:0.1 }}
//             className="flex gap-6 text-slate-400"
//           >
//             <a
//               href="https://github.com/Srinivas8985"
//               target="_blank"
//               rel="noreferrer"
//               className="hover:text-cyan-400 transition"
//             >
//               <FaGithub size={22}/>
//             </a>

//             <a
//               href="#"
//               className="hover:text-cyan-400 transition"
//             >
//               <FaLinkedin size={22}/>
//             </a>
//           </motion.div>

//         </div>

//         {/* divider */}
//         <div className="my-10 h-[1px] bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

//         {/* bottom row */}
//         <div className="flex flex-col md:flex-row items-center justify-between text-sm text-slate-500 gap-6">

//           <p>
//             © {new Date().getFullYear()} Lakshmi Srinivas Adepu. All rights reserved.
//           </p>

//           {/* scroll to top */}
//           <button
//             onClick={() => window.scrollTo({ top:0, behavior:"smooth" })}
//             className="flex items-center gap-2 text-cyan-400 hover:text-white transition"
//           >
//             <FaArrowUp />
//             Back to top
//           </button>

//         </div>

//       </Container>
//     </footer>
//   )
// }