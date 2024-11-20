import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // Ensure slim version is used for lightweight particles


export default function ParticlesBackground() {
    const particlesInit = useCallback(async (engine) => {
        console.log("Initializing particles...");
        await loadSlim(engine); // Loads slim version for better performance
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        console.log("Particles loaded:", container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit} // Correct prop name for initialization
            loaded={particlesLoaded} // Callback for loaded particles
            options={{
                background: {
                    color: {
                        value: "#0a192f", // Adjust background color as needed
                    },
                },
                fpsLimit: 120, // Limit FPS to improve performance
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push", // Add particles on click
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse", // Repel particles on hover
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 1,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff", // Particle color
                    },
                    links: {
                        color: "#ffffff",
                        distance: 300,
                        enable: true,
                        opacity: 0.2,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce", // Particles bounce off edges
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 2000, // Adjust density area
                        },
                        value: 50, // Number of particles
                    },
                    opacity: {
                        value: 0.2, // Particle opacity
                    },
                    shape: {
                        type: "edge", // Shape of particles
                    },
                    size: {
                        value: { min: 1, max: 5 }, // Particle size range
                    },
                },
                detectRetina: true, // Optimize for retina displays
            }}
        />
    );
}
