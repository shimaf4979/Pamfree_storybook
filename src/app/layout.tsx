import type React from 'react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { SessionProvider } from 'next-auth/react';
import NavigationBar from '@/components/NavigationBar';
import { QueryProvider } from '@/lib/providers';
import { Toaster } from '@/components/ui/toaster';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Pamfree',
  description: '地図やフロアプランをインタラクティブに変える電子パンフレット。',
  openGraph: {
    title: 'Pamfree',
    description: '地図やフロアプランをインタラクティブに変える電子パンフレット。',
    type: 'website',
    url: 'https://timer-git-main-yudaishimamuras-projects.vercel.app/', // 実際のURLに変更
    images: [
      {
        url: 'https://timer-git-main-yudaishimamuras-projects.vercel.app/pamfree.png', // 絶対URLに変更
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <meta name="apple-mobile-web-app-title" content="MyWebSite" />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SessionProvider>
          <QueryProvider>
            <NavigationBar />
            {children}
            <Toaster />
          </QueryProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
