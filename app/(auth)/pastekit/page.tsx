export const metadata = {
  title: 'PasteKit | The Ultimate Recorder for Creatives',
  description: 'SoundPaste | The Ultimate Recorder for Creatives',
}

import Hero from '@/components/pastekit/hero'
// import Features from '@/components/features'
// import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/pastekit/testimonials'
// // import Newsletter from '@/components/newsletter'
// import AsSeenOn from '@/components/asseenon'
import SystemReqs from '@/components/pastekit/systemreqs';


export default function Home() {
  return (
    <>
      <Hero />
      {/* {/* <Features />
      <FeaturesBlocks /> */}
      <Testimonials />
      {/* <AsSeenOn /> */}
      <SystemReqs /> 
    </>
  )
}
