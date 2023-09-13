import './globals.css';
import type { Metadata } from 'next';
import Layout from '@/components/Layout';

export const metadata: Metadata = {
  title: 'Yamisagi Portfolio',
  description: 'Yamisagi Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{<Layout>{children}</Layout>}</body>
    </html>
  );
}
