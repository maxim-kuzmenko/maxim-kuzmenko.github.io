'use client'

import Link from 'next/link'

export default function Homepage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen">

      {/* Illustration behind hero content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <img src="/images/soundpaste_kloytools.png" alt="KLOYTools Logo" className="mx-auto w-4/6" />
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
                <br></br>
                Tools that will make your creations a breeze.
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center items-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-4xl mb-4">Products</h2>
                  <br></br>

                  <Link href="/pastekit">
                    <img src="/images/pastekit_text_big2.png" alt="PASTEKIT" className="mx-auto w-1/2 glow-on-hover" />
                  </Link>
                  <br></br>
                  <br></br>

                  <Link href="/soundpaste">
                    <img src="/images/soundpaste_text_big2.png" alt="SOUNDPASTE" className="mx-auto w-1/2 glow-on-hover" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
