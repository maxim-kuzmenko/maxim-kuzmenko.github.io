// testimonials.js
import Image from 'next/image'
import TestimonialImage from '@/public/images/testimonial2.jpg'

export default function Testimonials() {
  return (
    <section className="relative background-pattern">

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="py-8 md:py-16">
        <br></br>

        <br></br>

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Works with any media editing program</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">Anything that supports ⌘ + v will work with this app, such as but not limited to:</p>
          </div>

          {/* Items */}
          <div className="max-w-sm md:max-w-4xl mx-auto grid gap-4 grid-cols-2 md:grid-cols-4">
            {/* Item */}
            <div className="flex flex-col items-center justify-center py-2 col-span-1 md:col-auto">
              <img src="/images/program_premiere.png" alt="Premiere" className="mx-auto w-4/6" style={{ width: '100px', height: 'auto' }} />
              <p className="text-sm mt-2">Adobe Premiere</p>
            </div>

            {/* Item */}
            <div className="flex flex-col items-center justify-center py-2 col-span-1 md:col-auto">
              <img src="/images/program_ableton_live.png" alt="Ableton" className="mx-auto w-4/6" style={{ width: '100px', height: 'auto' }} />
              <p className="text-sm mt-2">Ableton Live</p>
            </div>

            {/* Item */}
            <div className="flex flex-col items-center justify-center py-2 col-span-1 md:col-auto">
              <img src="/images/program_davinci.png" alt="DaVinci" className="mx-auto w-4/6" style={{ width: '100px', height: 'auto' }} />
              <p className="text-sm mt-2">DaVinci Resolve</p>
            </div>

            {/* Item */}
            <div className="flex flex-col items-center justify-center py-2 col-span-1 md:col-auto">
              <img src="/images/program_fl_studio.png" alt="FL" className="mx-auto w-4/6" style={{ width: '100px', height: 'auto' }} />
              <p className="text-sm mt-2">FL Studio</p>
            </div>
          </div>

          <div className="max-w-sm md:max-w-4xl mx-auto grid gap-4 grid-cols-2 md:grid-cols-4">
            {/* Item */}
            <div className="flex flex-col items-center justify-center py-2 col-span-1 md:col-auto">
              <img src="/images/program_cubase.png" alt="Cubase" className="mx-auto w-4/6" style={{ width: '100px', height: 'auto' }} />
              <p className="text-sm mt-2">Cubase</p>
            </div>

            {/* Item */}
            <div className="flex flex-col items-center justify-center py-2 col-span-1 md:col-auto">
              <img src="/images/program_final_cut.png" alt="Final Cut" className="mx-auto w-4/6" style={{ width: '100px', height: 'auto' }} />
              <p className="text-sm mt-2">Final Cut</p>
            </div>

            {/* Item */}
            <div className="flex flex-col items-center justify-center py-2 col-span-1 md:col-auto">
              <img src="/images/program_logic.png" alt="Logic" className="mx-auto w-4/6" style={{ width: '100px', height: 'auto' }} />
              <p className="text-sm mt-2">Logic</p>
            </div>

            {/* Item */}
            <div className="flex flex-col items-center justify-center py-2 col-span-1 md:col-auto">
              <img src="/images/program_canva.png" alt="Canva" className="mx-auto w-4/6" style={{ width: '100px', height: 'auto' }} />
              <p className="text-sm mt-2">Canva</p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <br></br>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">And more!</p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">

              {/* Testimonial */}
              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                  <svg className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-blue-500" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                  </svg>
                  <Image className="relative rounded-full" src={TestimonialImage} width={96} height={96} alt="Testimonial 01" />
                </div>
                <blockquote className="text-xl font-medium mb-4">
                  “Having to gather snippets of other media for a video project is always such a chore. Downloading entire video or sound files when I only need a few seconds of them takes a long time and wastes a lot of space.<br/>I like how PasteKit makes it easy to just grab the little moments you need, the moment you see them. A very useful tool indeed.“
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">J.J. McCullough</cite>
                <div className="text-gray-600">
                  <span>YouTuber</span> <a className="text-blue-600 hover:underline" href="#0"></a>
                </div>
              </div>

            </div>
          </div>

        <div style={{ height: '160px' }}></div>

      </div>
    </section>
  )
}