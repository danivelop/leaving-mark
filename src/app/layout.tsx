import { Inter } from 'next/font/google';
import './globals.css';

import { Toaster } from '@/shared/ui';
import { ChannelTalk } from '@/widgets/channel-talk';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';

import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "danivelop's blog",
  description:
    'danivelop 블로그입니다. 개발관련 포스트, 토이 프로젝트, 그 외 이것저것 기록하고 있습니다.',
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
        <main className="flex flex-col flex-grow my-8 md:my-16">
          {children}
        </main>
        <Footer />
        <Toaster />
        <ChannelTalk />
      </body>
    </html>
  );
}
