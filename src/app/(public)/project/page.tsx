'use client';
import React from 'react';
import ProjectSlider from '@/components/ProjectSlider';
import { motion } from 'framer-motion';
import { fadeIn } from '@/constants/variants';
import Bulb from '@/components/Bulb';
import Circles from '@/components/Circles';
const Project = () => {
  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circles />
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          <div
            className='
            text-center flex xl:w-[30vw] flex-col
            lg:text-left mb-4 xl:mb-0
          '
          >
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h2 xl:mt-8'
            >
              My <span className='text-accent'>Projects.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='mb-4 mx-auto lg:mx-0'
            >
              I have worked on a variety of projects, ranging from web
              development to mobile development.
            </motion.p>
          </div>
        </div>
        <motion.div
          variants={fadeIn('down', 0.6)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='w-full xl:max-w-[70vw] mx-auto mt-8'
        >
          <ProjectSlider />
        </motion.div>
      </div>
      <Bulb />
    </div>
  );
};

export default Project;