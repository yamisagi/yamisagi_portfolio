'use client';
import React, { useEffect } from 'react';
import { Sora } from 'next/font/google';
import Nav from './Nav';
import Header from './Header';
import TopLeftImage from './TopLeftImage';
import { isMobile } from 'react-device-detect';
import { useMediaQuery } from 'react-responsive';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora', // This is for the Tailwind config -- Look @37
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  const isLandScape = useMediaQuery({ query: '(orientation: landscape)' });

  return (
    <div
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      {isMobile && isLandScape ? (
        <div className='flex flex-col m-5 items-center justify-center h-screen'>
          <h1 className='text-3xl font-bold text-center'>
            I&apos;m sorry, this site is not available on mobile landscape mode.
          </h1>
          <p className='text-center mt-2 text-accent'>
            Please rotate your device to portrait mode.
          </p>
        </div>
      ) : (
        <>
          <TopLeftImage />
          <Nav />
          <Header />
          {children}
        </>
      )}
    </div>
  );
};

export default Layout;
