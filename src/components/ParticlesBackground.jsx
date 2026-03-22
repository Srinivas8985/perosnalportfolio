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

          number: {
            value: 65,
            density: { enable: true, area: 900 }
          },

          color: {
            value: ["#38bdf8", "#22d3ee", "#a78bfa"]
          },

          links: {
            enable: true,
            distance: 150,
            color: "#38bdf8",
            opacity: 0.2,
            width: 1
          },

          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "bounce" }
          },

          opacity: {
            value: { min: 0.2, max: 0.6 },
            animation: {
              enable: true,
              speed: 0.6,
              minimumValue: 0.2
            }
          },

          size: {
            value: { min: 1, max: 3 }
          },

          shape: { type: "circle" },

          shadow: {
            enable: true,
            color: "#38bdf8",
            blur: 10
          }

        },

        interactivity: {

          detect_on: "window",

          events: {
            onHover: {
              enable: true,
              mode: ["repulse", "grab"]
            },
            resize: true
          },

          modes: {

            repulse: {
              distance: 110,
              duration: 0.4
            },

            grab: {
              distance: 140,
              links: {
                opacity: 0.6
              }
            }

          }

        },

        detectRetina: true
      }}
    />
  )
}