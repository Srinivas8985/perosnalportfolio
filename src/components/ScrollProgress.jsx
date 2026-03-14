import { useEffect, useState } from "react"

/**
 * ScrollProgress – thin gradient bar pinned to top of viewport.
 * Uses native scroll event for accuracy (not Lenis, which causes 
 * async issues with the bar).
 */
export default function ScrollProgress() {
    const [width, setWidth] = useState(0)

    useEffect(() => {
        const onScroll = () => {
            const scrollTop = document.documentElement.scrollTop
            const scrollMax = document.documentElement.scrollHeight - window.innerHeight
            setWidth(scrollMax > 0 ? (scrollTop / scrollMax) * 100 : 0)
        }
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <div
            className="scroll-progress"
            style={{ width: `${width}%` }}
        />
    )
}
