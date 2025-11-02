import type { Metadata } from 'next';

import './globals.css';
import { Open_Sans } from 'next/font/google';
import Footer from '@/components/Footer';

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-opensans',
});

export const metadata: Metadata = {
  title: 'next',
  description: '',
  icons: {
    icon: '/favicon/android-chrome-512x512.png',
    apple: '/favicon/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${openSans.variable} antialiased`}>
        <div className="font-sans">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
