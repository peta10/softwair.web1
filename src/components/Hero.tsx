import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import type { Container, Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim'; // or loadFull, depending on features needed

const Hero: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadSlim(engine);
    // await loadFull(engine); // Use loadFull if you need more features (like trails, emitters, etc.)
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  const particlesOptions = {
    background: {
      color: {
        value: '#000000', // Or a dark background color fitting your theme
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push', // Add more particles on click
        },
        onHover: {
          enable: true,
          mode: 'connect', // Connect particles on hover
          parallax: { enable: false, force: 60, smooth: 10 },
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        connect: {
          distance: 80,
          links: {
            opacity: 0.5,
          },
          radius: 60,
        },
      },
    },
    particles: {
      color: {
        value: '#00ff00', // Neon green
      },
      links: {
        color: '#00ff00', // Neon green
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: false,
        speed: 1, // Slower speed for a calmer effect
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80, // Adjust number of particles
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 3 }, // Smaller particles
      },
    },
    detectRetina: true,
  };

  return (
    <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesOptions as any} // Using 'as any' for simplicity, define proper types if needed
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0, // Ensure particles are in the background
        }}
      />
      <div
        style={{
          position: 'relative',
          zIndex: 1, // Ensure content is above particles
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white', // Example text color
          textAlign: 'center',
        }}
      >
        {/* Your Hero Content Goes Here */}
        <div>
          <h1>Softwair.io</h1>
          <p>Automate Everything</p>
          {/* Add Buttons, etc. */}
        </div>
      </div>
    </div>
  );
};

export default Hero; 