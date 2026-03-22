// import { motion } from "framer-motion"

// export default function Background() {

//   return (
//     <div className="fixed inset-0 -z-10 overflow-hidden">

//       {/* gradient base */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617]" />

//       {/* grid overlay */}
//       <div className="absolute inset-0 grid-overlay opacity-40" />


//       {/* floating blobs */}

//       <motion.div
//         className="absolute w-[500px] h-[500px] rounded-full bg-sky-400 opacity-[0.08] blur-[120px]"
//         animate={{
//           x: [0, 80, -60, 0],
//           y: [0, -80, 40, 0],
//         }}
//         transition={{
//           duration: 20,
//           repeat: Infinity,
//           ease: "easeInOut"
//         }}
//         style={{ top: "10%", left: "15%" }}
//       />

//       <motion.div
//         className="absolute w-[600px] h-[600px] rounded-full bg-violet-500 opacity-[0.08] blur-[140px]"
//         animate={{
//           x: [0, -60, 60, 0],
//           y: [0, 60, -60, 0],
//         }}
//         transition={{
//           duration: 26,
//           repeat: Infinity,
//           ease: "easeInOut"
//         }}
//         style={{ bottom: "5%", right: "10%" }}
//       />

//       <motion.div
//         className="absolute w-[400px] h-[400px] rounded-full bg-cyan-400 opacity-[0.08] blur-[120px]"
//         animate={{
//           x: [0, 50, -30, 0],
//           y: [0, -40, 60, 0],
//         }}
//         transition={{
//           duration: 22,
//           repeat: Infinity,
//           ease: "easeInOut"
//         }}
//         style={{ top: "60%", left: "40%" }}
//       />

//     </div>
//   )
// }
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Background() {

  const [scroll, setScroll] = useState(0)

  useEffect(() => {

    const handleScroll = () => {
      const scrollTop = window.scrollY
      const height = document.body.scrollHeight - window.innerHeight

      setScroll(scrollTop / height)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  const hue = 200 + scroll * 80

  return (

    <motion.div
      className="fixed inset-0 -z-10 overflow-hidden"
      animate={{
        background: `
          radial-gradient(circle at 20% 30%, hsla(${hue},70%,60%,0.12), transparent 50%),
          radial-gradient(circle at 80% 70%, hsla(${hue+40},70%,60%,0.12), transparent 50%),
          linear-gradient(135deg,#020617,#020617)
        `
      }}
      transition={{ duration: 0.6 }}
    >

      {/* grid overlay */}

      <div className="absolute inset-0 grid-overlay opacity-40" />


      {/* floating blob 1 */}

      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[120px]"
        style={{ background: "rgba(56,189,248,0.15)" }}
        animate={{
          x: [0, 80, -60, 0],
          y: [0, -80, 40, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* floating blob 2 */}

      <motion.div
        className="absolute right-0 bottom-0 w-[600px] h-[600px] rounded-full blur-[140px]"
        style={{ background: "rgba(167,139,250,0.15)" }}
        animate={{
          x: [0, -60, 60, 0],
          y: [0, 60, -60, 0]
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

    </motion.div>

  )
}