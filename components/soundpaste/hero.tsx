import VideoThumb from '@/public/images/hero-image.png'
import ModalVideo from '@/components/soundpaste/modal-video'

import Link from 'next/link'

export default function Hero() {

  return (
    <section className="relative background-pattern">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">

      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
          <img src="/images/soundpaste_text_big.png" alt="SoundPaste Logo" className="soundpaste-logo mx-auto" />
            {/* <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Make your website <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">SoundPaste</span></h1> */}
            <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
              <strong>Record and use what you hear faster than ever before.</strong> <br />
            </p>

              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">

              {/* Say goodbye to the tedious process of saving and opening sound files. <br /> */}
              With SoundPaste, just record then paste sound directly into 
              your audio/video editing software. Works out-of-the-box, no extra setup needed.
            </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>

                <Link href="/soundpaste/get">
                  {/* <img src="/images/soundpaste_text_big.png" alt="Download on App Store" className="w-1/2 sm:w-auto"/>  */}
                  <img src="/images/download_on_app_store.png" alt="download on app store" className="app-store-badge mx-auto" />

                </Link>
                Available exclusively on the App Store.

                <br></br>
                <br></br>


                <p className="text-xl text-gray-600 mb-8">
                  Get the <span style={{ fontWeight: 'bold' }}>7-day trial</span>, then buy with free lifetime updates for only <span style={{ fontWeight: 'bold' }}>$14.99</span>.
                </p>
                </div>
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

<br></br>  
<br></br>  


<div className="text-center">
  <p className="text-xl text-gray-600 mb-8">
  Want SoundPaste but also need to copy-paste <span style={{ fontWeight: 'bold' }}>videos 📹</span> & <span style={{ fontWeight: 'bold' }}>images 🖼️</span> as well?<br></br>Try <Link href="/pastekit" style={{ fontWeight: 'bold', color: '#1E90FF'}}>PasteKit</Link>, currently on sale for a limited time for the <span style={{ fontWeight: 'bold' }}>same price</span> as SoundPaste.
  </p>
</div>



        </div>
          
        
        <div style={{ height: '30px' }}></div>

      </div>
    </section>
  )
}