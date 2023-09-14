import { IOptions, RecursivePartial } from 'tsparticles-engine';
export const options: RecursivePartial<IOptions> = {
  fullScreen: {
    enable: true,
  },
  fpsLimit: 60,
  background: {
    color: {
      value: 'transparent',
    },
  },
  interactivity: {
    events: {
      onClick: {
        enable: false,
        mode: 'push',
      },
      onHover: {
        enable: true,
        mode: 'repulse',
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: '#fff',
    },
    links: {
      color: '#D67BFF',
      distance: 180,
      enable: true,
      opacity: 0.4,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: 'none',
      enable: true,
      outMode: 'bounce',
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: 'circle',
    },
    size: {
      random: true,
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};
