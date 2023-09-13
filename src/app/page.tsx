'use client';
import Image from 'next/image';
import Particles from '@/components/Particles';
import Button from '@/components/Button';
import Avatar from '@/components/Avatar';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';
import { Pacifico } from 'next/font/google';

const pacifico = Pacifico({
  subsets: ['latin'],
  variable: '--font-pacifico',
  weight: ['400'],
});

const Home = () => {
  return (
    <div className='bg-primary/60 h-full bg-gradient-to-r from-primary-10 via-black/30 to-black/10'>
      <div className='w-full h-full'>
        <div
          className='text-center flex 
          flex-col justify-center md:pt-40 md:text-left 
          h-full container mx-auto'
        >
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h1'
          >
            Hi <br /> I&apos;m{' '}
            <span className={`${pacifico.variable} text-accent font-pacifico`}>
              Eren
            </span>
          </motion.h1>
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-sm md:max-w-xl mx-auto md:mx-0 mb-10 md:mb-16'
          >
            I am a Front End Developer, I love to create beautiful and
            responsive websites. Using React, Next.js, Tailwind CSS and more.
          </motion.p>
          <div className='flex justify-center md:hidden relative'>
            <Button />
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden md:flex'
          >
            <Button />
          </motion.div>
        </div>
      </div>
      <div className='w-[1200px] h-full absolute bottom-0 right-0'>
        <div
          className='bg-none md:bg-explosion
            md:bg-cover md:bg-no-repeat md:bg-right w-full h-full  
            absolute mix-blend-color-dodge translate-z-0'
        ></div>
        <div>{/* TODO: Add Particles */}</div>
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{ ease: 'easeInOut', duration: 0.5 }}
          className='w-full h-full xl:max-w-[737px] xl:max-h-[678px] 
                      md:max-w-[600px] md:max-h-[550px]
                     absolute bottom-0 right-0'
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
