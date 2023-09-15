import React from 'react';
import Link from 'next/link';
import { RiLinkedinBoxFill, RiGithubFill, RiTwitterFill } from 'react-icons/ri';

const Socials = () => {
  return (
    <div
      className='flex items-center gap-x-4 text-2xl 
      text-gray-500 transition-colors '
    >
      <Link
        href='https://www.linkedin.com/in/yamisagi'
        passHref
        target='_blank'
        rel='noopener noreferrer'
      >
        <RiLinkedinBoxFill
          size={30}
          className='hover:text-[#b4005c] duration-300'
        />
      </Link>
      <Link
        href='https://github.com/yamisagi'
        passHref
        target='_blank'
        rel='noopener noreferrer'
      >
        <RiGithubFill size={30} className='hover:text-[#b4005c] duration-300' />
      </Link>
      <Link
        href='https://www.twitter.com/_yamisagi'
        passHref
        target='_blank'
        rel='noopener noreferrer'
      >
        <RiTwitterFill
          size={30}
          className='hover:text-[#b4005c] duration-300'
        />
      </Link>
    </div>
  );
};

export default Socials;
