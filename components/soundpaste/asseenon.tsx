'use client'

import { useState, useRef, useEffect } from 'react'
// import { Transition } from '@headlessui/react'
// import Image from 'next/image'
// import FeaturesBg from '@/public/images/features-bg.png'
// import FeaturesElement from '@/public/images/features-element.png'

export default function AsSeenOn() {
  
  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, []) 

  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Featured on</h1>
              {/* <img src="/images/musicradar.png" alt="MusicRadar" className="mx-auto w-2/6" />  */}

            <br></br>

            <div className="mx-auto grid grid-cols-2">

            <a href="https://www.musicradar.com/news/soundpaste-macos-copy-paste" target="_blank" rel="noopener noreferrer">
                <img src="/images/musicradar.png" alt="Download on App Store" className="mx-auto w-4/6" />
            </a>

            {/* <br></br>
            <br></br> */}

            <a href="https://www.macosaudio.com/2024/02/kloytools-soundpaste-lets-you-copy-paste-audio/" target="_blank" rel="noopener noreferrer">
                <img src="/images/macosaudio.png" alt="Download on App Store" className="mx-auto w-4/6" />
            </a>
            </div>

            <br></br>
            <br></br>
            <br></br>
            <br></br>


            {/* <p className="text-xl text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p> */}
          </div>


        </div>
      </div>
    </section>
  )
}