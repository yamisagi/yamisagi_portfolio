import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { HiArrowRight } from 'react-icons/hi2';
const Button = () => {
  return (
    <div className='mx-auto md:mx-0'>
      <Link
        href={'/work'}
        className='relative group w-[185px] h-[185px] flex justify-center items-center
          bg-circleStar bg-cover bg-no-repeat bg-center group
        '
      >
        <Image
          src={'/rounded-text.png'}
          width={141}
          height={148}
          alt='button'
          className='animate-spin-slow max-w-[141px] max-h-[148px] h-full 
            group-hover:animate-pulse transition-all duration-300
          '
        />
        <HiArrowRight
          className='absolute text-4xl text-white/75 
        group-hover:text-accent 
        group-hover:translate-x-2 
        group-hover:scale-125
        group-hover:ease
        transition-all 
        duration-500'
        />
      </Link>
    </div>
  );
};

export default Button;
