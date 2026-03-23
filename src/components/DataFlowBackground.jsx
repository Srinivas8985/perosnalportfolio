import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const HORIZONTAL_LINES = 8;
const VERTICAL_LINES = 10;

export default function DataFlowBackground() {
  const [lineSpacing, setLineSpacing] = useState(120);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [pulseActive, setPulseActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 640) setLineSpacing(60);
      else if (w < 1024) setLineSpacing(90);
      else setLineSpacing(120);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    const handlePulse = () => {
      setPulseActive(true);
      setTimeout(() => setPulseActive(false), 2000);
    };
    window.addEventListener("trigger-data-pulse", handlePulse);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("trigger-data-pulse", handlePulse);
    };
  }, []);

  const hLines = Array.from({ length: HORIZONTAL_LINES });
  const vLines = Array.from({ length: VERTICAL_LINES });

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-[#050816]">
      {/* Radial Depth Glow */}
      <div 
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: "radial-gradient(circle at 40% 30%, rgba(99,102,241,0.15), transparent 70%)"
        }}
      />

      {/* Mouse proximity glow */}
      <div 
        className="absolute w-[400px] h-[400px] rounded-full pointer-events-none transition-transform duration-75"
        style={{
          background: "radial-gradient(circle, rgba(22, 211, 238, 0.08) 0%, transparent 60%)",
          left: -200,
          top: -200,
          transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
        }}
      />

      {/* Horizontal lines and packets */}
      {hLines.map((_, i) => {
        const top = (i + 1) * lineSpacing;
        return (
          <div 
            key={`h-${i}`} 
            className="absolute left-0 right-0 h-[2px]"
            style={{ 
              top,
              background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.2), transparent)" 
            }}
          >
            {/* Packet */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-[6px] h-[6px] rounded-full bg-[#22d3ee] shadow-[0_0_10px_#22d3ee]"
              animate={{ left: ["-10%", "110%"] }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5
              }}
            />

            {/* Pulse Slow Packets (Limited to specific lines) */}
            {pulseActive && (i === 3 || i === 6) && (
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 w-[6px] h-[6px] rounded-full bg-[#ec4899] shadow-[0_0_15px_#ec4899]"
                initial={{ left: "-10%" }}
                animate={{ left: "110%" }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  ease: "easeInOut",
                }}
              />
            )}
            
            {/* Pulsing Intersection Node roughly in center */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-[8px] h-[8px] rounded-full bg-[rgba(236,72,153,0.6)] shadow-[0_0_12px_rgba(236,72,153,0.8)]"
              style={{ left: `${30 + (i * 7) % 40}%` }}
              animate={{ scale: [1, 1.4, 1] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2
              }}
            />
          </div>
        );
      })}

      {/* Vertical lines to create intersections */}
      {vLines.map((_, i) => {
        const left = (i + 1) * lineSpacing * 1.5;
        return (
          <div 
            key={`v-${i}`} 
            className="absolute top-0 bottom-0 w-[2px]"
            style={{ 
              left,
              background: "linear-gradient(180deg, transparent, rgba(99,102,241,0.15), transparent)" 
            }}
          >
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-[4px] h-[15px] rounded bg-[#6366f1] shadow-[0_0_10px_#6366f1]"
              animate={{ top: ["-10%", "110%"] }}
              transition={{
                duration: 10 + Math.random() * 4,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5
              }}
            />

            {/* Pulse Slow Packets (Limited to specific line) */}
            {pulseActive && i === 4 && (
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 w-[4px] h-[20px] rounded bg-[#ec4899] shadow-[0_0_15px_#ec4899]"
                initial={{ top: "-10%" }}
                animate={{ top: "110%" }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  ease: "easeInOut",
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
