/**
 * Layered Background:
 * 1. Grid line overlay
 * 2. Radial glow at top-center
 * 3. Animated blobs (sky, purple, pink, cyan)
 */
export default function Background() {
  return (
    <div
      className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Grid lines */}
      <div className="absolute inset-0 grid-overlay opacity-60" />

      {/* Radial top-center glow */}
      <div className="absolute inset-0 radial-glow" />

      {/* Sky blob â€” top left */}
      <div
        className="blob-drift absolute rounded-full
        w-[650px] h-[650px] top-[-180px] left-[-180px]
        bg-sky-400 opacity-[0.11] blur-[160px]"
      />

      {/* Purple blob â€” right side */}
      <div
        className="blob-drift absolute rounded-full
        w-[500px] h-[500px] top-[20%] right-[-100px]
        bg-violet-500 opacity-[0.09] blur-[140px]"
        style={{ animationDelay: "3s" }}
      />

      {/* Pink blob â€” bottom left */}
      <div
        className="blob-drift absolute rounded-full
        w-[450px] h-[450px] bottom-[-120px] left-[20%]
        bg-pink-500 opacity-[0.08] blur-[130px]"
        style={{ animationDelay: "6s" }}
      />

      {/* Cyan blob â€” center */}
      <div
        className="blob-drift absolute rounded-full
        w-[350px] h-[350px] top-[45%] left-[42%]
        bg-cyan-400 opacity-[0.07] blur-[120px]"
        style={{ animationDelay: "1.5s" }}
      />
    </div>
  )
}
