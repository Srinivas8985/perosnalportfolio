import { useEffect, useRef } from "react"

export default function ParallaxBackground(){

  const ref = useRef(null)

  useEffect(()=>{

    const handleMove = (e)=>{

      const x = (window.innerWidth/2 - e.clientX)/40
      const y = (window.innerHeight/2 - e.clientY)/40

      ref.current.style.transform =
        `translate(${x}px, ${y}px)`
    }

    window.addEventListener("mousemove", handleMove)

    return ()=> window.removeEventListener("mousemove", handleMove)

  },[])

  return(
    <div
      ref={ref}
      className="absolute inset-0 -z-20 transition-transform duration-300"
    >
      <div className="absolute w-[700px] h-[700px] bg-sky-400 opacity-[0.06] blur-[180px] rounded-full top-[-200px] left-[-200px]" />
      <div className="absolute w-[600px] h-[600px] bg-violet-500 opacity-[0.05] blur-[180px] rounded-full bottom-[-200px] right-[-200px]" />
    </div>
  )
}