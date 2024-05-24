// hero.js
import VideoThumb from '@/public/images/pastekit-hero-image.png'
import ModalVideo from '@/components/pastekit/modal-video'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative background-pattern">

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <img src="/images/pastekit_text_big2.png" alt="PasteKit Logo" className="pastekit-logo mx-auto" />

            <br></br>

            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
                <strong>The Ultimate Recorder for Creatives.</strong> <br />
              </p>

              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
                With PasteKit, just record then paste video, images, sound directly into your audio/video editing software. Works out-of-the-box, no extra setup needed.
              </p>

              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <Link href="/pastekit/get">
                    <img src="/images/download_on_app_store.png" alt="download on app store" className="app-store-badge mx-auto" />
                  </Link>
                  <br></br>
                  <p className="text-xl text-gray-600 mb-8">
                    Get the 7-day free trial, then buy with free lifetime updates for only $14.99.
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
            video="/videos/pastekit_video.mp4"
            videoWidth={1920}
            videoHeight={1080} />
        </div>
        <div style={{ height: '20px' }}></div>
      </div>
    </section>
  )
}