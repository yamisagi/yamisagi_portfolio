'use client';
import './globals.css';
import { usePathname } from 'next/navigation';
import { AnimatePresence, delay, motion } from 'framer-motion';
import Layout from '@/components/Layout';
import Transition from '@/components/Transition';
import { useEffect } from 'react';

// When we use motion.div, we have to make this component use client
// because the motion.div is a client side component, because of it MetaData is not working

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = usePathname();
  const isChanged = router !== '/';
  return (
    <html lang='en'>
      <head>
        <title>Yamisagi | Web Developer</title>
      </head>
      <body>
        {
          <Layout>
            <AnimatePresence mode='wait'>
              {/*  IDK WHY THIS WORKS BUT IT DOES */}
              {children}
              <motion.div className='h-full' key={router}>
                {<Transition />}
              </motion.div>
            </AnimatePresence>
          </Layout>
        }
      </body>
    </html>
  );
}
