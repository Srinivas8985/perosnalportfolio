import { useState, useEffect } from "react"

import SmoothScroll from "./components/SmoothScroll"
import CustomCursor from "./components/CustomCursor"
import Navbar from "./components/Navbar"
import SectionProgress from "./components/SectionProgress"

import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Certifications from "./components/Certifications"
import Achievements from "./components/Achievements"
import Education from "./components/Education"
import Contact from "./components/Contact"

import Reveal from "./components/Reveal"
import PageLoader from "./components/PageLoader"
import CursorSpotlight from "./components/CursorSpotlight"
import DataFlowBackground from "./components/DataFlowBackground"

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1600)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <PageLoader />

  return (
    <SmoothScroll>

      {/* Global Data Flow Background */}
      <DataFlowBackground />

      {/* Mouse spotlight overlay */}
      <CursorSpotlight />

      {/* Custom cursor (dot + lerp ring + click ripple) */}
      <CustomCursor />

      {/* Section progress dots (right side) */}
      <SectionProgress />

      {/* Floating pill navbar */}
      <Navbar />

      <main className="relative overflow-hidden">

        <Hero />

        <Reveal><About /></Reveal>

        <Reveal><Skills /></Reveal>

        <Reveal><Projects /></Reveal>

        <Reveal><Certifications /></Reveal>

        <Reveal><Achievements /></Reveal>

        <Reveal><Education /></Reveal>

        <Reveal><Contact /></Reveal>

      </main>

    </SmoothScroll>
  )
}

export default App
