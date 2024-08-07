import './css/style.css';
import { Inter } from 'next/font/google';
import Header from '@/components/ui/header';
import { Analytics } from '@vercel/analytics/react';
import { GoogleTagManager } from '@next/third-parties/google';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const ClientUTMProvider = dynamic(() => import('@/components/ClientUTMProvider'), {
  ssr: false,
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="description" content="KLOYTools | Effortless Media Capture, Instant Creativity." />
        <link rel="canonical" href="https://www.kloytools.com/" />
      </Head>
      <body className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          <ClientUTMProvider>
            {children}
          </ClientUTMProvider>
          {/* <Banner /> */}
        </div>
        <GoogleTagManager gtmId="GTM-562TSK3C" />
        <Analytics /> {/* Add the Analytics component here */}
      </body>
    </html>
  );
}
