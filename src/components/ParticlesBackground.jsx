import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"

export default function ParticlesBackground() {

  const particlesInit = async (engine) => {
    await loadSlim(engine)
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 z-0"
      options={{
        fullScreen: { enable: false },
        fpsLimit: 60,
        background: { color: "transparent" },

        particles: {
          number: { value: 55, density: { enable: true, area: 900 } },

          color: { value: "#38bdf8" },

          links: {
            enable: true,
            distance: 140,
            color: "#38bdf8",
            opacity: 0.25,
            width: 1
          },

          move: {
            enable: true,
            speed: 0.7,
            direction: "none",
            outModes: { default: "bounce" }
          },

          opacity: {
            value: { min: 0.2, max: 0.55 },
            animation: { enable: true, speed: 0.6, minimumValue: 0.1 }
          },

          size: {
            value: { min: 1, max: 3 }
          },

          shape: { type: "circle" }
        },

        interactivity: {
          detect_on: "window",
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 }
          }
        },

        detectRetina: true
      }}
    />
  )
}