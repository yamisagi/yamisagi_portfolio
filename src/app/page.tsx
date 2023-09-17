'use client';

import Button from '@/components/Button';
import Avatar from '@/components/Avatar';
import { motion } from 'framer-motion';
import { fadeIn } from '@/constants/variants';
import { Pacifico } from 'next/font/google';
import ParticlesContainer from '@/components/ParticlesCont';

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
          flex-col justify-center md:pt-40 md:text-left sm:mt-20
          md:mt-0
          h-full container mx-auto'
        >
          <motion.h1
            variants={fadeIn('down', 0.6)}
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
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            animate='show'
            exit={'hidden'}
            className='max-w-sm md:max-w-xl mx-auto md:mx-0 mb-10 md:mb-16 z-10'
          >
            I am a <span className='text-amber-500'>Front End Developer</span>,
            I love to create beautiful and responsive websites. Using{' '}
            <span className='text-teal-500'>React</span>,{' '}
            <span className='text-purple-500'>Next.js</span>,{' '}
            <span className='text-yellow-500'>Typescript</span>,{' '}
            <span className='text-green-500'>Styled Components</span>,{' '}
            <span className='text-blue-500'>Material UI</span>,{' '}
            <span className='text-red-500'>Bootstrap</span>,{' '}
            <span className='text-pink-500'>Tailwind CSS</span> and more.
          </motion.p>
          <div className='flex justify-center md:hidden relative z-20'>
            <div>
              <Button />
            </div>
          </div>
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden md:flex z-20'
          >
            <Button />
          </motion.div>
        </div>
      </div>
      <div className='w-full h-full absolute bottom-0 right-0'>
        <div
          className='bg-neon bg-cover bg-center 
                     md:bg-cover md:bg-no-repeat md:bg-right 
                     w-full h-full  
                     absolute mix-blend-color-dodge translate-z-0'
        ></div>
        <div>
          <ParticlesContainer />
        </div>
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{ ease: 'easeInOut', duration: 0.5 }}
          className='w-full h-full xl:max-w-[737px] xl:max-h-[678px] 
                      md:max-w-[500px] md:max-h-[440px]
                     absolute bottom-0 right-0'
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
