import VideoThumb from '@/public/images/hero-image.png'
import ModalVideo from '@/components/modal-video'

import Link from 'next/link'

export default function Hero() {

  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        {/* <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg> */}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
          <img src="/images/soundpaste_text_big.png" alt="SoundPaste Logo" className="mx-auto w-4/6" />
            {/* <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Make your website <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">SoundPaste</span></h1> */}
            <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
              Say goodbye to the tedious process of saving and opening sound files. <br />
              With SoundPaste, just record then paste sound directly into <br />
              your audio/video editing software.
            </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
              {/* <a href="https://apps.apple.com/ca/app/soundpaste/id6471012328" 
                 id="appStoreLink" 
                 target="_blank" 
                 rel="noopener noreferrer">
                <img src="/images/download_on_app_store.png" 
                     alt="Download on App Store" 
                     className="mx-auto w-1/4" />
              </a> */}

                <Link href="/soundpaste/get">
                  {/* <img src="/images/soundpaste_text_big.png" alt="Download on App Store" className="w-1/2 sm:w-auto"/>  */}
                  <img src="/images/download_on_app_store.png" alt="download on app store" className="mx-auto w-1/3" />

                </Link>

                <br></br>
                <p className="text-xl text-gray-600 mb-8">
                  Get the 7-day free trial, then buy with free lifetime updates for only $12.99.
                </p>
                  {/* <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Start free trial</a> */}
                </div>
                {/* <div>
                  <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">Learn more</a>
                </div> */}
              </div>
            </div>
          </div>



          {/* Hero image */}
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080} />

        </div>

      </div>
    </section>
  )
}