import { useState, useEffect } from "react"

import SmoothScroll from "./components/SmoothScroll"
import CustomCursor from "./components/CustomCursor"
import Navbar from "./components/Navbar"

import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
// import Footer from "./components/Footer"

import Reveal from "./components/Reveal"
import PageLoader from "./components/PageLoader"
import Background from "./components/Background"
import CursorSpotlight from "./components/CursorSpotlight"

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1600)

    return () => clearTimeout(timer)
  }, [])

  if (loading) return <PageLoader />

  return (
    <SmoothScroll>
      <Background/>
      <CursorSpotlight />
      <CustomCursor />

      <Navbar />

      <main className="relative overflow-hidden">

        <Hero />

        <Reveal>
          <About />
        </Reveal>

        <Reveal>
          <Skills />
        </Reveal>

        <Reveal>
          <Projects />
        </Reveal>

        <Reveal>
          <Experience />
        </Reveal>

        <Reveal>
          <Contact />
        </Reveal>

        {/* <Footer /> */}

      </main>

    </SmoothScroll>
  )
}

export default App
