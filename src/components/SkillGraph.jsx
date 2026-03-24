import { useState, useCallback, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { techMap } from "../data/techMap"
import { isLowPowerDevice } from "../utils/deviceDetect"

import {
  FaReact, FaNodeJs, FaJava, FaPython, FaDocker, FaGitAlt
} from "react-icons/fa"
import {
  SiJavascript, SiTailwindcss, SiExpress, SiSpringboot, SiMongodb, SiMysql, SiPostman
} from "react-icons/si"

const ICON_MAP = {
  "React": FaReact,
  "JavaScript": SiJavascript,
  "Tailwind": SiTailwindcss,
  "Node.js": FaNodeJs,
  "Express": SiExpress,
  "Java": FaJava,
  "SpringBoot": SiSpringboot,
  "Python": FaPython,
  "MongoDB": SiMongodb,
  "MySQL": SiMysql,
  "Docker": FaDocker,
  "Git": FaGitAlt,
  "Postman": SiPostman
}

/* ─────────────────────────────────
   COLOR GROUPS (Aurora palette)
───────────────────────────────── */
const GROUP_COLORS = {
  frontend: "#22d3ee",
  backend:  "#6366f1",
  database: "#4ade80",
  tools:    "#ec4899"
}

/* ─────────────────────────────────
   NODE POSITIONS (fixed layout)
   viewBox: 0 0 760 500
───────────────────────────────── */
const NODES = [
  // Frontend — top-left cluster
  { id: "React",       group: "frontend", x: 175, y: 110 },
  { id: "JavaScript",  group: "frontend", x:  90, y: 215 },
  { id: "Tailwind",    group: "frontend", x: 260, y: 215 },

  // Backend — top-right cluster
  { id: "Node.js",     group: "backend",  x: 480, y: 110 },
  { id: "Express",     group: "backend",  x: 400, y: 215 },
  { id: "Java",        group: "backend",  x: 560, y: 215 },
  { id: "SpringBoot",  group: "backend",  x: 640, y: 330 },
  { id: "Python",      group: "backend",  x: 480, y: 310 },

  // Database — bottom-right
  { id: "MongoDB",     group: "database", x: 560, y: 420 },
  { id: "MySQL",       group: "database", x: 680, y: 430 },

  // Tools — bottom-left
  { id: "Docker",      group: "tools",    x: 175, y: 380 },
  { id: "Git",         group: "tools",    x:  85, y: 310 },
  { id: "Postman",     group: "tools",    x: 280, y: 340 },
]

/* ─────────────────────────────────
   EDGES
───────────────────────────────── */
const EDGES = [
  // User Requested Relationships
  ["React",      "JavaScript"],
  ["Node.js",    "Express"],
  ["React",      "Node.js"],
  ["Java",       "SpringBoot"],
  
  // Auxiliary logical edges
  ["React",      "Tailwind"],
  ["Node.js",    "MongoDB"],
  ["Java",       "MySQL"],
  ["Python",     "MongoDB"],
  ["Git",        "React"],
  ["Git",        "Node.js"],
  ["Docker",     "Node.js"],
  ["Postman",    "Express"],
]

/* Node id → node object */
const NODE_MAP = Object.fromEntries(NODES.map(n => [n.id, n]))

/* Adjacency set per node */
const ADJ = {}
NODES.forEach(n => { ADJ[n.id] = new Set() })
EDGES.forEach(([a, b]) => { ADJ[a].add(b); ADJ[b].add(a) })

const LEGEND = [
  { label: "Frontend", group: "frontend" },
  { label: "Backend",  group: "backend" },
  { label: "Database", group: "database" },
  { label: "Tools",    group: "tools" },
]

/* ─────────────────────────────────
   COMPONENT
───────────────────────────────── */
export default function SkillGraph() {
  const lowPower = isLowPowerDevice()
  const [active, setActive] = useState(null)

  const tooltipRef = useRef(null)
  const mx = useRef(-1000)
  const my = useRef(-1000)

  // Track global mouse consistently to shift preview tooltip zero-lag
  useEffect(() => {
    const trackMouse = (e) => {
      mx.current = e.clientX
      my.current = e.clientY
      if (tooltipRef.current) {
        // Position directly using left/top to avoid Framer Motion transform conflicts
        tooltipRef.current.style.left = `${e.clientX + 16}px`
        tooltipRef.current.style.top = `${e.clientY + 16}px`
      }
    }
    window.addEventListener('mousemove', trackMouse)
    return () => window.removeEventListener('mousemove', trackMouse)
  }, [])

  const enter = useCallback(id => {
    setActive(id);
    window.dispatchEvent(new CustomEvent('tech-hover', { detail: id }));
  }, [])
  const leave = useCallback(() => {
    setActive(null);
    window.dispatchEvent(new CustomEvent('tech-hover-leave'));
  }, [])

  const isHL = id => !active || id === active || ADJ[active]?.has(id)
  const isEdgeHL = (a, b) =>
    active && (
      (a === active && ADJ[active].has(b)) ||
      (b === active && ADJ[active].has(a))
    )

  return (
    <div className="w-full relative">

      {/* Floating Interactive Tooltip */}
      <AnimatePresence>
        {active && techMap[active.toLowerCase()] && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            ref={tooltipRef}
            className="fixed z-[100] pointer-events-none px-4 py-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg text-xs max-w-[220px] space-y-1"
            style={{
              left: `${mx.current + 16}px`,
              top: `${my.current + 16}px`,
              willChange: "left, top"
            }}
          >
            <h4 className="font-bold mb-2 text-sm" style={{ color: GROUP_COLORS[NODE_MAP[active].group] }}>
              {active}
            </h4>
            
            {techMap[active.toLowerCase()].projects?.length > 0 && (
              <div className="mb-2">
                <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Projects</div>
                <ul className="list-disc pl-4 text-sm text-white space-y-1">
                  {techMap[active.toLowerCase()].projects.map(p => <li key={p}>{p}</li>)}
                </ul>
              </div>
            )}

            {techMap[active.toLowerCase()].certifications?.length > 0 && (
              <div className="mb-2 mt-3">
                <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Certifications</div>
                <ul className="list-disc pl-4 text-sm text-cyan-300 space-y-1">
                  {techMap[active.toLowerCase()].certifications.map(c => <li key={c}>{c}</li>)}
                </ul>
              </div>
            )}

            {techMap[active.toLowerCase()].achievements?.length > 0 && (
              <div className="mt-3">
                <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Achievements</div>
                <ul className="list-disc pl-4 text-sm text-pink-300 space-y-1">
                  {techMap[active.toLowerCase()].achievements.map(a => <li key={a}>{a}</li>)}
                </ul>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* SVG canvas */}
      <div className="w-full relative">
        <svg
          viewBox="0 0 760 500"
          className="w-full"
          style={{ display: "block" }}
        >
          <style>{`
            @keyframes flow {
              to { stroke-dashoffset: -20; }
            }
          `}</style>
          <defs>
            {/* Glow filter per group */}
            {Object.entries(GROUP_COLORS).map(([grp, col]) => (
              <filter key={grp} id={`glow-${grp}`} x="-60%" y="-60%" width="220%" height="220%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feFlood floodColor={col} floodOpacity="0.7" result="color" />
                <feComposite in="color" in2="blur" operator="in" result="glow" />
                <feMerge>
                  <feMergeNode in="glow" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            ))}
            {/* Particle marker */}
            <marker id="dot" markerWidth="4" markerHeight="4" refX="2" refY="2">
              <circle cx="2" cy="2" r="1.2" fill="white" />
            </marker>
          </defs>

          {/* ── EDGES ── */}
          {EDGES.map(([a, b], i) => {
            const na = NODE_MAP[a], nb = NODE_MAP[b]
            const hl = isEdgeHL(a, b)
            const hasActive = !!active
            const colorA = GROUP_COLORS[na.group]
            const colorB = GROUP_COLORS[nb.group]
            const gradId = `eg-${i}`

            return (
              <g key={i}>
                {hl && (
                  <defs>
                    <linearGradient id={gradId} x1={na.x} y1={na.y} x2={nb.x} y2={nb.y} gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor={colorA} />
                      <stop offset="100%" stopColor={colorB} />
                    </linearGradient>
                  </defs>
                )}
                <line
                  x1={na.x} y1={na.y}
                  x2={nb.x} y2={nb.y}
                  stroke={hl ? `url(#${gradId})` : "rgba(148,163,184,0.18)"}
                  strokeWidth={hl ? 2 : 1}
                  opacity={hasActive && !hl ? 0.06 : 1}
                  strokeLinecap="round"
                  strokeDasharray={hl ? "6" : "0"}
                  style={{ 
                    transition: "opacity 0.25s, stroke-width 0.25s",
                    animation: hl ? "flow 1s linear infinite" : "none"
                  }}
                />
              </g>
            )
          })}

          {/* ── NODES ── */}
          {NODES.map(node => {
            const col  = GROUP_COLORS[node.group]
            const hl   = isHL(node.id)
            const isAct = active === node.id

            return (
              <g
                key={node.id}
                onMouseEnter={() => enter(node.id)}
                onMouseLeave={leave}
                style={{ cursor: "default" }}
              >
                {/* Halo glow */}
                {hl && (
                  <motion.circle
                    cx={node.x} cy={node.y}
                    initial={{ r: 0, opacity: 0 }}
                    animate={{ r: isAct ? 26 : 20, opacity: isAct ? 0.35 : 0.2 }}
                    transition={lowPower ? { duration: 0 } : { duration: 0.25 }}
                    fill={col}
                    filter={`url(#glow-${node.group})`}
                  />
                )}

                {/* Node circle */}
                <motion.circle
                  cx={node.x} cy={node.y}
                  animate={{
                    r: isAct ? 16 : (hl ? 13 : 10),
                    opacity: (active && !hl) ? 0.2 : 1,
                    fill: isAct ? col : "rgba(15,23,42,0.8)",
                    stroke: isAct ? col : col + "bb",
                    strokeWidth: 2
                  }}
                  transition={lowPower ? { duration: 0 } : { duration: 0.3 }}
                  filter={hl ? `url(#glow-${node.group})` : undefined}
                  style={{ cursor: "pointer" }}
                />

                {/* Node Icon */}
                <foreignObject
                  x={node.x - 12}
                  y={node.y - 12}
                  width="24"
                  height="24"
                  style={{ pointerEvents: "none", opacity: (active && !hl) ? 0.2 : 1 }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    {(() => {
                      const Icon = ICON_MAP[node.id];
                      return Icon ? (
                        <Icon size={isAct ? 16 : (hl ? 14 : 12)} color={isAct ? "#fff" : col} />
                      ) : null;
                    })()}
                  </div>
                </foreignObject>

                {/* Label */}
                <motion.text
                  x={node.x} y={node.y + (isAct ? 26 : 22)}
                  textAnchor="middle"
                  animate={{
                    opacity: (active && !hl) ? 0.15 : 1
                  }}
                  transition={lowPower ? { duration: 0 } : { duration: 0.3 }}
                  className="font-medium drop-shadow-md"
                  fill="#7dd3fc"
                  style={{
                    fontSize: isAct ? "9px" : "7.5px",
                    fontFamily: "Inter, sans-serif",
                    pointerEvents: "none",
                    userSelect: "none"
                  }}
                >
                  {node.id}
                </motion.text>
              </g>
            )
          })}
        </svg>

        {/* Hint bar */}
        <div
          className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[10px] font-semibold tracking-widest uppercase whitespace-nowrap"
          style={{ color: "rgba(148,163,184,0.45)" }}
        >
          {active
            ? `${active} · connected to ${[...ADJ[active]].join(", ")}`
            : "Hover a node to explore its ecosystem"
          }
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-6 mt-5">
        {LEGEND.map(({ label, group }) => (
          <div
            key={group}
            className="flex items-center gap-2 text-xs font-semibold"
            style={{ color: "var(--muted)" }}
          >
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{
                background: GROUP_COLORS[group],
                boxShadow: `0 0 7px ${GROUP_COLORS[group]}`
              }}
            />
            {label}
          </div>
        ))}
      </div>

    </div>
  )
}
