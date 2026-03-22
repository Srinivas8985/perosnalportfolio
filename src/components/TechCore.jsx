// import { motion } from "framer-motion"
// import { FaReact, FaNodeJs, FaJava, FaGitAlt } from "react-icons/fa"
// import { SiMongodb, SiSpringboot } from "react-icons/si"

// const tech = [
//   { icon: <FaReact />, color: "#61DBFB" },
//   { icon: <FaNodeJs />, color: "#3C873A" },
//   { icon: <FaJava />, color: "#F89820" },
//   { icon: <SiSpringboot />, color: "#6DB33F" },
//   { icon: <SiMongodb />, color: "#47A248" },
//   { icon: <FaGitAlt />, color: "#F1502F" }
// ]

// export default function TechCore() {

//   return (
//     <div className="relative w-[320px] h-[320px] flex items-center justify-center">

//       {/* core glow */}

//       <motion.div
//         animate={{ scale: [1, 1.2, 1] }}
//         transition={{ duration: 3, repeat: Infinity }}
//         className="absolute w-28 h-28 rounded-full
//         bg-gradient-to-r from-cyan-400 to-blue-500
//         blur-2xl opacity-70"
//       />

//       {/* core label */}

//       <div className="absolute text-cyan-300 font-bold tracking-widest">
//         DEV CORE
//       </div>


//       {/* orbit ring */}

//       <motion.div
//         animate={{ rotate: 360 }}
//         transition={{
//           duration: 20,
//           repeat: Infinity,
//           ease: "linear"
//         }}
//         className="absolute w-full h-full"
//       >

//         {tech.map((t, i) => {

//           const angle = (i / tech.length) * 360

//           return (
//             <div
//               key={i}
//               style={{
//                 position: "absolute",
//                 top: "50%",
//                 left: "50%",
//                 transform: `
//                   rotate(${angle}deg)
//                   translate(130px)
//                   rotate(-${angle}deg)
//                 `
//               }}
//             >

//               <motion.div
//                 whileHover={{ scale: 1.4 }}
//                 className="text-2xl"
//                 style={{ color: t.color }}
//               >
//                 {t.icon}
//               </motion.div>

//             </div>
//           )

//         })}

//       </motion.div>


//       {/* orbit ring border */}

//       <div className="absolute w-[260px] h-[260px]
//       rounded-full border border-cyan-400/20" />

//     </div>
//   )
// }
import { motion } from "framer-motion"
import { useState } from "react"
import { FaReact, FaNodeJs, FaJava, FaGitAlt } from "react-icons/fa"
import { SiMongodb, SiSpringboot } from "react-icons/si"

const outerOrbit = [
  { icon: <FaReact />, color: "#61DBFB" },
  { icon: <FaNodeJs />, color: "#3C873A" },
  { icon: <SiMongodb />, color: "#47A248" },
]

const innerOrbit = [
  { icon: <FaJava />, color: "#F89820" },
  { icon: <SiSpringboot />, color: "#6DB33F" },
  { icon: <FaGitAlt />, color: "#F1502F" },
]

export default function TechCore() {

  const [rotate, setRotate] = useState({ x: 0, y: 0 })

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()

    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height

    setRotate({
      x: (y - 0.5) * 20,
      y: (x - 0.5) * -20
    })
  }

  const reset = () => {
    setRotate({ x: 0, y: 0 })
  }

  return (

    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{
        rotateX: rotate.x,
        rotateY: rotate.y
      }}
      transition={{ type: "spring", stiffness: 120 }}
      style={{ perspective: 1000 }}
      className="relative w-[340px] h-[340px] flex items-center justify-center"
    >

      {/* Core Glow */}

      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute w-28 h-28 rounded-full
        bg-gradient-to-r from-cyan-400 to-blue-500
        blur-2xl opacity-70"
      />

      {/* Core Label */}

      <div className="absolute text-cyan-300 font-bold tracking-widest">
        DEV CORE
      </div>


      {/* INNER ORBIT */}

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute w-[200px] h-[200px]"
      >

        {innerOrbit.map((t, i) => {

          const angle = (i / innerOrbit.length) * 360

          return (
            <div
              key={i}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: `
                  rotate(${angle}deg)
                  translate(100px)
                  rotate(-${angle}deg)
                `
              }}
            >
              <motion.div
                whileHover={{ scale: 1.4 }}
                className="text-xl"
                style={{ color: t.color }}
              >
                {t.icon}
              </motion.div>
            </div>
          )
        })}

      </motion.div>


      {/* OUTER ORBIT */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute w-[300px] h-[300px]"
      >

        {outerOrbit.map((t, i) => {

          const angle = (i / outerOrbit.length) * 360

          return (
            <div
              key={i}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: `
                  rotate(${angle}deg)
                  translate(150px)
                  rotate(-${angle}deg)
                `
              }}
            >
              <motion.div
                whileHover={{ scale: 1.4 }}
                className="text-2xl"
                style={{ color: t.color }}
              >
                {t.icon}
              </motion.div>
            </div>
          )
        })}

      </motion.div>


      {/* Orbit Rings */}

      <div className="absolute w-[200px] h-[200px] rounded-full border border-cyan-400/20" />

      <div className="absolute w-[300px] h-[300px] rounded-full border border-cyan-400/10" />

    </motion.div>

  )
}
