'use client';
import { useCallback, useContext, useEffect } from 'react';
import WorkSlider from '@/components/WorkSlider';
import { motion } from 'framer-motion';
import { fadeIn } from '@/constants/variants';
import Bulb from '@/components/Bulb';
import Circles from '@/components/Circles';
import { ScrollContext } from '@/app/context/scrollctx';
import { useScrollDirection } from 'react-use-scroll-direction';

const Work = () => {
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
    <div className='h-full bg-primary/30 py-40 flex items-center'>
      <Circles />
      <div
        className='container mx-auto mt-16
        overflow-y-scroll scrollbar-none
        '
        ref={scrollRef}
      >
        <div className='flex flex-col xl:flex-row gap-x-8'>
          {scrollState === 'top' && (
            <div
              className='text-center flex xl:w-[30vw] flex-col
            lg:text-left mb-4 xl:mb-0'
            >
              <motion.h2
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='h2 xl:mt-16'
              >
                My <span className='text-accent'>Work.</span>
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
          )}
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='w-full xl:max-w-[55%]'
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
