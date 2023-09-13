import React from 'react';
import { Sora } from 'next/font/google';
import Nav from './Nav';
import Header from './Header';
import TopLeftImage from './TopLeftImage';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora', // This is for the Tailwind config -- Look @37
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      <TopLeftImage />
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
