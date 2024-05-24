// testimonials.js
import Image from 'next/image'
import TestimonialImage from '@/public/images/testimonial.jpg'

export default function Testimonials() {
  return (
    <section className="relative background-pattern">

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="py-8 md:py-16">

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
        <div style={{ height: '20px' }}></div>

      </div>
    </section>
  )
}