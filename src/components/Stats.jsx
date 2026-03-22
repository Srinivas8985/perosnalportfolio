import { motion } from "framer-motion"

const stats = [
  { number: "20+", label: "Technologies" },
  { number: "5+", label: "Projects Built" },
  { number: "3+", label: "Years Learning" }
]

export default function Stats(){

  return(

    <div className="grid grid-cols-3 gap-10 max-w-lg mx-auto mb-20">

      {stats.map((s,i)=>(
        
        <motion.div
          key={i}
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{delay:i*0.2}}
          className="text-center"
        >

          <div className="text-3xl font-bold text-sky-400">
            {s.number}
          </div>

          <div className="text-sm text-slate-400 mt-1">
            {s.label}
          </div>

        </motion.div>

      ))}

    </div>

  )

}
