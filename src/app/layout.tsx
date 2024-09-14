import { Inter } from 'next/font/google';
import './globals.css';

import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';

import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "danivelop's blog",
  description: "danivelop's blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} layout-background-color min-h-dvh flex flex-col`}
      >
        <Header />
        <main className="flex-grow my-8 md:my-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
