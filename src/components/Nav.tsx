'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'testimonials',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];
const Nav = () => {
  const pathname = usePathname();

  return (
    <nav
      className='flex flex-col items-center 
      xl:justify-center xl:right-[2%] xl:w-16 xl:max-w-md xl:h-screen 
      md:justify-center md:right-[2%] md:w-16 md:max-w-md md:h-screen
      gap-y-4
      fixed h-max bottom-0 
      mt-auto  
      z-50 top-0 w-full '
    >
      <div
        className='flex w-full xl:flex-col md:flex-col md:h-max md:rounded-full
        items-center justify-between xl:justify-center gap-y-10
        px-4 md:px-0 xl:px-0 h-[80px] xl:h-max py-8 
        bg-white/10 backdrop-blur-sm text-3xl xl:text-xl md:text-2xl xl:rounded-full'
      >
        {navData.map((item) => {
          return (
            <Link
              className={`
                ${pathname === item.path && 'text-accent'}
                hover:text-white/75 
                relative flex items-center group
                transition-colors 
                duration-300`}
              href={item.path}
              key={item.name}
            >
              <div
                className='absolute
                pr-14 right-0 hidden xl:group-hover:flex md:group-hover:flex
              '
              >
                <div
                  className='bg-white backdrop-blur-sm rounded-[3px] 
                relative flex text-primary items-center p-2'
                >
                  <div
                    className={`text-[12px] leading-none font-semibold capitalize`}
                  >
                    {item.name}
                  </div>
                  <div
                    className='border-solid border-l-white border-l-8 
                      border-y-transparent border-y-[6px] border-r-0 absolute -right-2
                      '
                  ></div>
                </div>
              </div>
              <div>{item.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
