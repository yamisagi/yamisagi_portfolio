import React from 'react';
import Image from 'next/image';

const Avatar = () => {
  return (
    <div className='hidden lg:flex lg:max-w-none'>
      <Image
        src={'/avatar.png'}
        alt={'avatar'}
        width={737}
        height={678}
        quality={100}
        className='translate-z-0 w-full h-full'
      />
    </div>
  );
};

export default Avatar;
