import { options } from '@/constants/particlesOptions';
import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Engine } from 'tsparticles-engine';

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);
  return (
    <Particles
      id='tsparticles'
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
    />
  );
};

export default ParticlesContainer;
