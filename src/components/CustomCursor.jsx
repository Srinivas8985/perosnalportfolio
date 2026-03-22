// import { useEffect, useRef, useState } from "react"

// export default function CustomCursor() {
//   const dotRef = useRef(null)
//   const ringRef = useRef(null)
//   const [isTouch, setIsTouch] = useState(false)

//   useEffect(() => {
//     if (window.matchMedia("(hover: none)").matches) {
//       setIsTouch(true)
//       return
//     }

//     const dot = dotRef.current
//     const ring = ringRef.current
//     if (!dot || !ring) return

//     let mx = -100
//     let my = -100
//     let rx = -100
//     let ry = -100
//     let rafId

//     const onMove = (e) => {
//       mx = e.clientX
//       my = e.clientY

//       dot.style.transform = `translate3d(${mx}px, ${my}px, 0)`
//     }

//     const tick = () => {
//       rx += (mx - rx) * 0.18
//       ry += (my - ry) * 0.18

//       ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`

//       rafId = requestAnimationFrame(tick)
//     }

//     const expand = () => {
//       ring.classList.add("scale-[1.8]", "border-sky-300", "bg-sky-400/10")
//     }

//     const shrink = () => {
//       ring.classList.remove("scale-[1.8]", "border-sky-300", "bg-sky-400/10")
//     }

//     const hoverElements = document.querySelectorAll("a, button, [data-cursor-grow]")

//     hoverElements.forEach(el => {
//       el.addEventListener("mouseenter", expand)
//       el.addEventListener("mouseleave", shrink)
//     })

//     document.addEventListener("mousemove", onMove)

//     rafId = requestAnimationFrame(tick)

//     return () => {
//       document.removeEventListener("mousemove", onMove)
//       cancelAnimationFrame(rafId)

//       hoverElements.forEach(el => {
//         el.removeEventListener("mouseenter", expand)
//         el.removeEventListener("mouseleave", shrink)
//       })
//     }
//   }, [])

//   if (isTouch) return null

//   return (
//     <>
//       {/* Cursor Dot */}
//       <div
//         ref={dotRef}
//         className="fixed top-0 left-0 w-2 h-2 rounded-full bg-sky-400 pointer-events-none z-[9999]"
//         style={{
//           transform: "translate(-50%, -50%)",
//           boxShadow: "0 0 10px rgba(56,189,248,0.9)",
//           willChange: "transform",
//         }}
//       />

//       {/* Cursor Ring */}
//       <div
//         ref={ringRef}
//         className="fixed top-0 left-0 w-10 h-10 rounded-full border border-sky-400/60 pointer-events-none z-[9998]"
//         style={{
//           transform: "translate(-50%, -50%)",
//           transition: "border-color 0.2s, background 0.2s, scale 0.2s",
//           willChange: "transform",
//         }}
//       />
//     </>
//   )
// }
// import { useEffect, useRef } from "react"

// export default function CustomCursor() {

//   const dotRef = useRef(null)
//   const blobRef = useRef(null)

//   useEffect(() => {

//     const dot = dotRef.current
//     const blob = blobRef.current

//     let mouseX = -100
//     let mouseY = -100

//     let blobX = -100
//     let blobY = -100

//     const onMove = (e) => {
//       mouseX = e.clientX
//       mouseY = e.clientY

//       // instant dot
//       dot.style.transform =
//   `translate3d(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%), 0)`
//     }

//     const animate = () => {

//   blobX += (mouseX - blobX) * 0.18
//   blobY += (mouseY - blobY) * 0.18

//   blob.style.transform =
//     `translate3d(calc(${blobX}px - 50%), calc(${blobY}px - 50%), 0)`

//   requestAnimationFrame(animate)
// }

//     animate()
//     window.addEventListener("mousemove", onMove)

//     // hover effects
//     const hoverTargets = document.querySelectorAll(
//       "a, button, .card-hover, [data-cursor]"
//     )

//     hoverTargets.forEach(el => {

//       el.addEventListener("mouseenter", () => {

//         blob.classList.add(
//           "scale-[2.4]",
//           "bg-sky-400/20",
//           "border-sky-300"
//         )

//       })

//       el.addEventListener("mouseleave", () => {

//         blob.classList.remove(
//           "scale-[2.4]",
//           "bg-sky-400/20",
//           "border-sky-300"
//         )

//       })

//     })

//     return () => {
//       window.removeEventListener("mousemove", onMove)
//     }

//   }, [])

//   return (
//     <>
//       {/* dot */}
//       <div
//         ref={dotRef}
//         className="fixed top-0 left-0 w-2 h-2 rounded-full bg-sky-400
//         pointer-events-none z-[9999]"
//         style={{
//           transform: "translate(-50%, -50%)",
//           boxShadow: "0 0 10px rgba(56,189,248,.9)",
//           willChange: "transform"
//         }}
//       />

//       {/* liquid blob */}
//       <div
//         ref={blobRef}
//         className="fixed top-0 left-0 w-12 h-12 rounded-full
//         border border-sky-400/60
//         backdrop-blur-md
//         pointer-events-none z-[9998]"
//         style={{
//           transform: "translate(-50%, -50%)",
//           transition:
//             "border-color .25s, background .25s, scale .25s",
//           willChange: "transform"
//         }}
//       />
//     </>
//   )
// }
import { useEffect, useRef, useState } from "react"

export default function CustomCursor() {

  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {

    if (window.matchMedia("(hover: none)").matches) {
      setIsTouch(true)
      return
    }

    const dot = dotRef.current
    const ring = ringRef.current

    const move = (e) => {

      const x = e.clientX
      const y = e.clientY

      dot.style.transform =
        `translate3d(calc(${x}px - 50%), calc(${y}px - 50%),0)`

      ring.style.transform =
        `translate3d(calc(${x}px - 50%), calc(${y}px - 50%),0)`
    }

    const grow = () => {
      ring.classList.add("scale-[1.8]", "border-sky-300", "bg-sky-400/10")
    }

    const shrink = () => {
      ring.classList.remove("scale-[1.8]", "border-sky-300", "bg-sky-400/10")
    }

    const hoverTargets = document.querySelectorAll(
      "a, button, .card-hover, [data-cursor-grow]"
    )

    hoverTargets.forEach(el => {
      el.addEventListener("mouseenter", grow)
      el.addEventListener("mouseleave", shrink)
    })

    window.addEventListener("mousemove", move)

    return () => {
      window.removeEventListener("mousemove", move)
    }

  }, [])

  if (isTouch) return null

  return (
    <>
      {/* cursor dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-sky-400 pointer-events-none z-[9999]"
        style={{
          transform:"translate(-50%, -50%)",
          boxShadow:"0 0 10px rgba(56,189,248,.9)",
          willChange:"transform"
        }}
      />

      {/* cursor ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-sky-400/60 pointer-events-none z-[9998]"
        style={{
          transform:"translate(-50%, -50%)",
          transition:"border-color .2s, background .2s, scale .2s",
          willChange:"transform"
        }}
      />
    </>
  )
}