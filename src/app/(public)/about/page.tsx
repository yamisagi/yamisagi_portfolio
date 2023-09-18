'use client';
import React, { useState, useContext, useEffect, useCallback } from 'react';
import { aboutData } from '@/constants/aboutData';
import Avatar from '@/components/Avatar';
import Circles from '@/components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '@/constants/variants';
import CountUp from 'react-countup';
import { ScrollContext } from '@/app/context/scrollctx';
import { useScrollDirection } from 'react-use-scroll-direction';


const About = () => {
  const [index, setIndex] = useState(0);
  const { scrollState, setScrollState } = useContext(ScrollContext);
  const { isScrollingUp, isScrollingDown, scrollTargetRef } =
    useScrollDirection();
  const scrollRef = useCallback((node: HTMLElement | null) => {
    if (node !== null) {
      scrollTargetRef(node);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isScrollingUp) {
      setScrollState('top');
    }
    if (isScrollingDown) {
      setScrollState('bottom');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isScrollingUp, isScrollingDown]);

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
        xl:flex 
        xl:h-[550px]
        xl:w-[525px]
        absolute 
        xl:-bottom-0
        xl:-left-[250px]
        '
      >
        <Avatar />
      </motion.div>
      <div
        ref={scrollRef}
        className='container mx-auto mt-5 mb-10 h-full flex flex-col items-center md:flex-row gap-x-6
        overflow-y-scroll scrollbar-none
        lg:overflow-y-hidden
      '
      >
        <div
          className='flex-1 flex relative flex-col justify-center
          xl:ml-20
          md:mt-20 
          sm:mt-10'
        >
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2'
          >
            <span className='text-accent'>Innovative concepts</span>{' '}
            <span
              className='bg-gradient-to-r text-white/50 from-accent to-white/30
            color-stop-1 bg-clip-text'
            >
              give rise to extraordinary code.
            </span>
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='
            bg-gradient-to-r from-accent to-primary/30
            color-stop-1 bg-clip-text
           text-white/60 font-light
              max-w-[500px] mx-auto md:mx-0 mb-6 md:mb-8 px-4 md:px-0'
          >
            Everything started in my childhood, when I was 6 years old, I
            started to get interested in computers and technology. I was always
            curious about how things work and how they are made.
          </motion.p>
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='
              relative flex-1 
              flex
              gap-x-4
              justify-center
              items-center
              after:content after:block after:w-[1px] after:h-full after:bg-white/10
               afer:w-[1px]
              after:absolute after:top-0 after:right-0 mb-4
              before:content before:block before:w-[1px] before:h-full before:bg-white/10
                text-center'
          >
            <div className='text-2xl md:text-3xl font-extrabold text-accent mb-2'>
              <CountUp start={0} end={3} duration={5} delay={0.3} />+
            </div>
            <div
              className='text-white/60 text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]
            '
            >
              Years of experience
            </div>
            <div className='text-2xl md:text-3xl font-extrabold text-accent mb-2'>
              <CountUp start={0} end={15} duration={5} delay={0.3} />+
            </div>
            <div
              className='text-white/60 text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]
            '
            >
              Projects completed
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn('left', 0.6)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col w-full md:mr-28 md:max-w-[35%] h-[480px] z-10'
        >
          <div className='flex gap-x-4 md:gap-x-8 mx-auto md:mx-0 mb-2'>
            {aboutData.map((item, i) => {
              return (
                <div
                  key={i}
                  className={`
                    ${
                      index === i &&
                      'text-accent after:bg-[#B4005C] after:w-full after:transition-all after:duration-500 transition-colors duration-500'
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
          <div
            className='md:py-6 flex flex-col gap-y-2 items-center md:items-start md:px-4 md:pr-10 md:pl-0
            
          '
          >
            {aboutData[index].info.map((item, i) => {
              return (
                <div
                  key={i}
                  className='flex-1 flex flex-col xl:justify-center xl:flex-row max-w-max gap-x-2 xl:items-center md:items-baseline items-center text-white/60'
                >
                  <div className='font-light my-4 text-accent'>
                    {item.title}
                  </div>
                  <div>{item.stage}</div>
                  <div className='flex gap-x-2'>
                    {item.icons?.map((icon, i) => {
                      return (
                        <div key={i} className='text-2xl text-white/60'>
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
