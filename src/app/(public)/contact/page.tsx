'use client';
import React from 'react';
import Circles from '@/components/Circles';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '@/constants/variants';
import { useCallback, useContext, useEffect } from 'react';
import { ScrollContext } from '@/app/context/scrollctx';
import { useScrollDirection } from 'react-use-scroll-direction';

const Contact = () => {
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
    <div className='h-full bg-primary/30 '>
      <div
        className='container mx-auto py-10 text-center xl:text-left flex items-center justify-center h-full  overflow-y-scroll scrollbar-none'
        ref={scrollRef}
      >
        <div className='flex flex-col w-full max-w-[600px] '>
          {scrollState === 'top' && (
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h2 text-center mb-4'
            >
              Let&apos;s{' '}
              <span
                className='
              bg-gradient-to-r from-accent to-[#4a22bd] text-transparent bg-clip-text
            '
              >
                Talk.
              </span>
            </motion.h2>
          )}
          <div className='flex flex-col gap-4 w-full mx-auto'>
            <motion.form
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='flex-1 flex flex-col gap-2 w-full mx-auto'
            >
              <div className='flex gap-x-6 w-full '>
                <input type='text' placeholder='name' className='input' />
                <input type='text' placeholder='email' className='input' />
              </div>
              <input type='text' placeholder='subject' className='input' />
              <textarea placeholder='message' className='textarea'></textarea>
              <button className='btn rounded-lg border border-white/50 max-w-[170px] px-8  transition-all duration-300 flex self-center items-center justify-center overflow-hidden hover:border-accent group'>
                <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                  Send
                </span>
                <BsArrowRight
                  className='
                -translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-500
                 text-xl absolute'
                />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
