import { motion } from "framer-motion"

export default function PageLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#020617]"
    >

      {/* animated logo */}

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >

        <h1 className="text-4xl md:text-5xl font-bold shine-text">
          Srinivas.dev
        </h1>

        <motion.div
          className="mt-6 h-[2px] w-40 mx-auto bg-gradient-to-r from-sky-400 via-cyan-400 to-violet-400"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1 }}
        />

      </motion.div>

    </motion.div>
  )
}
