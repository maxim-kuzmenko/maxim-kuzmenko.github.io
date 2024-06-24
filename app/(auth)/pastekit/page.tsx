export const metadata = {
  title: 'PasteKit | The Ultimate Recorder for Creators',
  description: 'PasteKit | The Ultimate Recorder for Creators',
}

import Head from 'next/head';
import Hero from '@/components/pastekit/hero'
import Features from '@/components/pastekit/features'
// import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/pastekit/testimonials'
// // import Newsletter from '@/components/newsletter'
import AsSeenOn from '@/components/pastekit/asseenon'
import SystemReqs from '@/components/pastekit/systemreqs';


export default function Home() {
  return (
    <>
      <Head>
        <title>PasteKit | The Ultimate Recorder for Creators</title>
        <meta name="description" content="PasteKit | The Ultimate Recorder for Creators" />
        <link rel="canonical" href="https://www.kloytools.com/pastekit" />
      </Head>
      <Hero />
      <Features />
      {/* {/* 
      <FeaturesBlocks /> */}
      <Testimonials />
      {/* <AsSeenOn /> */}
      <SystemReqs /> 
    </>
  )
}
