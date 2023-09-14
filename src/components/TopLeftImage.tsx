import React from 'react';
import Image from 'next/image';

const TopLeftImage = () => {
  return (
    <div>
      <Image
        className='absolute top-0 left-0 mix-blend-color-dodge w-[400px]
          xl:w-[800px]'
        src='/top-left-img.png'
        alt='Top Left Image'
        width={400}
        height={400}
      />
    </div>
  );
};

export default TopLeftImage;
