import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Socials from './Socials';

const Header = () => {
  return (
    <div
      className='absolute md:top-5 z-10 w-full flex items-center 
      px-8 xl:px-5 md:h-[65px] lg:h-[75px] xl:h-[85px]'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-1 py-2'>
          <Link href='/'>
            <Image
              src={'/logo.svg'}
              width={150}
              height={35}
              alt='logo'
              priority
            ></Image>
          </Link>
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default Header;
