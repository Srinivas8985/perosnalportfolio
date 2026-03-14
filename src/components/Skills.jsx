import { motion } from "framer-motion"
import Container from "./Container"

/* Color map â€” using all PURPLE theme colors per requirements */
const SKILL_COLOR = {
  Languages:           { border: "border-violet-400/30", text: "text-violet-300", glow: "rgba(167,139,250,0.15)", badge: "bg-violet-400/10" },
  Frameworks:          { border: "border-violet-400/30", text: "text-violet-300", glow: "rgba(167,139,250,0.15)", badge: "bg-violet-400/10" },
  Frontend:            { border: "border-violet-400/30", text: "text-violet-300", glow: "rgba(167,139,250,0.15)", badge: "bg-violet-400/10" },
  "Tools / Platforms": { border: "border-violet-400/30", text: "text-violet-300", glow: "rgba(167,139,250,0.15)", badge: "bg-violet-400/10" },
}

const SKILL_ICON = {
  Java:"â˜•", "C++":"âš™ï¸", Python:"ðŸ", JavaScript:"âš¡", C:"ðŸ”§", "C#":"#ï¸âƒ£", PHP:"ðŸ˜",
  NodeJS:"ðŸŸ©", ReactJS:"âš›ï¸", ExpressJS:"ðŸš‚", SpringBoot:"ðŸŒ±",
  HTML:"ðŸŒ", CSS:"ðŸŽ¨", "Tailwind CSS":"ðŸ’¨",
  Git:"ðŸ”€", GitHub:"ðŸ™", MySQL:"ðŸ—„ï¸", MongoDB:"ðŸƒ", Postman:"ðŸ“®", "REST APIs":"ðŸ”—",
}

const skillCategories = [
  { title: "Languages",        skills: ["Java","C++","Python","JavaScript","C","C#","PHP"]             },
  { title: "Frameworks",       skills: ["NodeJS","ReactJS","ExpressJS","SpringBoot"]                   },
  { title: "Frontend",         skills: ["HTML","CSS","Tailwind CSS"]                                   },
  { title: "Tools / Platforms",skills: ["Git","GitHub","MySQL","MongoDB","Postman","REST APIs"]        },
]

const containerAnim = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.11 } },
}
const cardAnim = {
  hidden: { opacity: 0, y: 48 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}
const tagAnim = {
  hidden: { opacity: 0, scale: 0.85 },
  show:   { opacity: 1, scale: 1,   transition: { duration: 0.3 } },
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 md:py-32 text-white overflow-hidden">

      {/* Accent glow top-right */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full
        bg-violet-500 opacity-[0.05] blur-[150px] pointer-events-none" />

      <Container className="relative z-10">

        {/* Header - Centered Layout */}
        <motion.div
          initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.7 }}
          className="text-center mb-20 space-y-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-400/10
            border border-violet-400/30 text-violet-300 text-[11px] font-bold tracking-widest uppercase">
            Toolkit
          </span>
          <h2 className="text-4xl font-semibold"
            style={{ fontFamily:"Outfit, sans-serif" }}>
            <span className="shine-text">Skills & Technologies</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg leading-relaxed">
            Tools, frameworks and technologies I use to craft full-stack solutions.
          </p>
        </motion.div>

        {/* Grid â€”  1 col / 2 col / 3 col per requirements */}
        <motion.div
          variants={containerAnim} initial="hidden"
          whileInView="show" viewport={{ once:true, amount:0.12 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12"
        >
          {skillCategories.map((cat, i) => {
            const c = SKILL_COLOR[cat.title]
            return (
              <motion.div
                key={i} variants={cardAnim}
                whileHover={{ y:-6 }}
                className={`relative rounded-2xl p-8 border border-slate-700
                bg-slate-900/60 backdrop-blur-md cursor-default shadow-xl
                hover:shadow-cyan-500/20
                transition-all duration-300 group`}
                style={{ "--glow": c.glow }}
              >
                <h3 className={`text-xl font-bold mb-6 flex items-center justify-center md:justify-start gap-3 ${c.text}`}>
                  <span className={`w-1.5 h-6 rounded-full ${c.badge.replace("/10","")}`} />
                  {cat.title}
                </h3>

                <motion.div variants={containerAnim} className="flex flex-wrap justify-center md:justify-start gap-3">
                  {cat.skills.map((skill, j) => (
                    <motion.span
                      key={j} variants={tagAnim}
                      animate={{ y: [0, -6, 0] }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: j * 0.2 
                      }}
                      whileHover={{ scale: 1.15, rotate: [-1, 1, -1] }}
                      className={`flex items-center gap-2 px-4 py-2
                      rounded-xl ${c.badge} border ${c.border}
                      text-sm md:text-base ${c.text} font-bold tracking-wide
                      transition-colors duration-200 select-none shadow-lg`}
                      style={{ filter: `drop-shadow(0 0 10px ${c.glow})` }}
                    >
                      <span className="text-lg">{SKILL_ICON[skill] ?? "âš¡"}</span>
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
