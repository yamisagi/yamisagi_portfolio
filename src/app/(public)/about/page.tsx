'use client';
import React, { useState } from 'react';
import { aboutData } from '@/constants/aboutData';
import Avatar from '@/components/Avatar';
import Circles from '@/components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '@/constants/variants';

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className='h-full bg-primary/30 py-36 md:text-left text-center'>
      <Circles />
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='
        hidden 
        md:flex 
        md:h-[450px]
        md:w-[400px]
        absolute bottom-0 -l-[370px]'
      >
        <Avatar />
      </motion.div>
      <div
        className='contaier mx-auto h-full flex flex-col 
        items-center md:flex-row gap-x-6'
      >
        <div>text</div>
        <div className='flex gap-x-4 md:gap-x-4 md-auto md:mx-0 mb-4'>
          {aboutData.map((item, i) => {
            return (
              <div
                key={i}
                className={`
                    ${
                      index === i &&
                      'text-accent after:bg-accent after:w-full after:transition-all after:duration-500'
                    }
                    cursor-pointer capitalize xl:text-2xl md:text-xl sm:text-xl
                    relative after:w-8 after:h-[2px] after:bg-white after:absolute
                    after:-bottom-1 after:left-0 
                  `}
                onClick={() => setIndex(i)}
              >
                {item.title}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
