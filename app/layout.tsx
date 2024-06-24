import './css/style.css';
import { Inter } from 'next/font/google';
import Header from '@/components/ui/header';
// import Banner from '@/components/banner';
import { Analytics } from '@vercel/analytics/react'; // Import the Analytics component
import { GoogleTagManager } from '@next/third-parties/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>KLOYTools</title>
        <meta name="description" content="KLOYTools | Effortless Media Capture, Instant Creativity." />
        <link rel="canonical" href="https://www.kloytools.com/" />
      </head>
      <body className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
          {/* <Banner /> */}
        </div>
        <GoogleTagManager gtmId="GTM-562TSK3C" />
        <Analytics /> {/* Add the Analytics component here */}
      </body>
    </html>
  );
}
