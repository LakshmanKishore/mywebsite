import Particles from "react-tsparticles";
import React from 'react'

export const Particlesjs = () => {

  const particlesOptions = {
    background: {
      color: {
        value: "#000",
      },
    },
    fpsLimit: 60,
    interactivity: {
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 20,
        },
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 1.5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          value_area: 800,
        },
        value: 50,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        random: true,
        value: 3,
      },
    },
    detectRetina: true,
  }

  return (
    <Particles
      id="tsparticles"
      options={particlesOptions}
    />
  );
};
