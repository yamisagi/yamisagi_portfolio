import React from 'react';
import Image from 'next/image';

const Circles = () => {
  return (
    <div
      className='w-[350px]
                 xl:w-[400px]
                 absolute
                 -right-16
                 -bottom-8                              
                 md:-bottom-2
                 sm:bottom-10
                 mix-blend-color-dodge
                 animate-pulse
                 duration-75
                 z-10'
    >
      <Image
        src='/circles.png'
        alt='circles'
        width={300}
        height={300}
        className='w-full h-full'
      />
    </div>
  );
};

export default Circles;
