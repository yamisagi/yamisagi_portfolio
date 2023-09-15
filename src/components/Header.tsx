import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Socials from './Socials';

const Header = () => {
  return (
    <div className='absolute z-10 w-full flex items-center px-16 xl:px-5 xl:h-[90px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8'>
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
