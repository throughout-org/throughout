"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

const AntigravityParticles = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const options: ISourceOptions = {
    fullScreen: { enable: false },
    background: { color: { value: "#ffffff" } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "bubble",
        },
        onClick: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        bubble: {
          distance: 150,
          size: 8,
          duration: 2,
          opacity: 0.8,
          color: "#3b82f6",
        },
        repulse: {
          distance: 200,
          duration: 0.6,
        },
      },
    },
    particles: {
      color: {
        value: ["#3b82f6", "#60a5fa", "#93c5fd", "#2563eb", "#1d4ed8", "#38bdf8"],
      },
      links: {
        color: "#3b82f6",
        distance: 130,
        enable: true,
        opacity: 0.08,
        width: 1,
        warp: true,
      },
      move: {
        enable: true,
        speed: { min: 0.5, max: 1.5 },
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "bounce" },
        attract: {
          enable: true,
          rotate: {
            x: 600,
            y: 1200,
          },
        },
      },
      number: {
        density: {
          enable: true,
          width: 1200,
          height: 800,
        },
        value: 70,
      },
      opacity: {
        value: { min: 0.1, max: 0.5 },
        animation: {
          enable: true,
          speed: 0.8,
          sync: false,
          startValue: "random",
        },
      },
      shape: {
        type: ["circle", "triangle"],
      },
      size: {
        value: { min: 1.5, max: 5 },
        animation: {
          enable: true,
          speed: 2,
          sync: false,
          startValue: "random",
          destroy: "none",
        },
      },
      rotate: {
        value: { min: 0, max: 360 },
        direction: "random",
        animation: {
          enable: true,
          speed: 3,
          sync: false,
        },
      },
      tilt: {
        enable: true,
        direction: "random",
        value: { min: 0, max: 360 },
        animation: {
          enable: true,
          speed: 5,
          sync: false,
        },
      },
    },
    detectRetina: true,
  };

  if (!ready) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="absolute inset-0 w-full h-full"
    />
  );
};

export default AntigravityParticles;
