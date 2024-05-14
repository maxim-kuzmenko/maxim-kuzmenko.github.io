export const metadata = {
  title: 'SoundPaste | Copy-Paste Sound',
  description: 'SoundPaste | Copy-Paste Sound',
}

import Hero from '@/components/soundpaste/hero'
import Features from '@/components/soundpaste/features'
import FeaturesBlocks from '@/components/soundpaste/features-blocks'
import Testimonials from '@/components/soundpaste/testimonials'
// import Newsletter from '@/components/newsletter'
import AsSeenOn from '@/components/soundpaste/asseenon'
import SystemReqs from '@/components/soundpaste/systemreqs';


export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturesBlocks />
      <Testimonials />
      <AsSeenOn />
      <SystemReqs />
    </>
  )
}
