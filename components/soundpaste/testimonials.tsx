import Image from 'next/image'
import TestimonialImage from '@/public/images/testimonial.jpg'

export default function Testimonials() {
  return (
    <section className="relative background-pattern">

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        {/* <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg> */}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Works with any audio/video program</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">Anything that supports ⌘ + v will work with this app, such as but not limited to:</p>
          </div>

          {/* Items */}
          <div className="max-w-sm md:max-w-4xl mx-auto grid gap-2 grid-cols-4 md:grid-cols-4">
          {/* <div className="mx-auto grid gap-2 grid-cols-2 md:grid-cols-5"> */}

            {/* Item */}
            <div className="flex flex-col items-center justify-center py-2 col-span-2 md:col-auto">
              {/* <svg className="max-w-full fill-current text-gray-400" width="124" height="24" viewBox="0 0 124 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M63.734 11.56c-1.022 0-1.76.325-2.506.657v7.506c.715.066 1.125.066 1.804.066 2.454 0 2.79-1.091 2.79-2.615v-3.585c0-1.125-.384-2.03-2.088-2.03zm-16.295-.41c-1.702 0-2.09.908-2.09 2.032v.632h4.179v-.632c0-1.124-.389-2.032-2.089-2.032zm-31.566 7.813c0 .89.432 1.351 1.386 1.351 1.023 0 1.628-.324 2.375-.656v-1.781h-2.236c-1.06 0-1.525.191-1.525 1.086zm63.711-7.403c-1.705 0-2.296.904-2.296 2.03v4.106c0 1.128.591 2.035 2.296 2.035 1.7 0 2.296-.907 2.296-2.035V13.59c0-1.125-.596-2.03-2.296-2.03zM7.517 23.568H2.505V11.783H0v-4.06h2.505v-2.44C2.505 1.97 3.92 0 7.936 0h3.346v4.062H9.19c-1.565 0-1.668.568-1.668 1.627l-.006 2.033h3.787l-.442 4.06H7.517v11.786zm17.13.03H20.47l-.18-1.026a9.802 9.802 0 01-4.733 1.193c-3.064 0-4.695-1.988-4.695-4.738 0-3.243 1.903-4.401 5.307-4.401h3.465v-.701c0-1.656-.195-2.142-2.817-2.142h-4.286l.419-4.06h4.685c5.751 0 7.013 1.764 7.013 6.235v9.64zm14.207-11.517c-2.6-.433-3.347-.528-4.597-.528-2.247 0-2.926.481-2.926 2.334v3.506c0 1.854.679 2.337 2.926 2.337 1.25 0 1.997-.096 4.597-.531v3.961c-2.277.496-3.76.626-5.015.626-5.381 0-7.52-2.749-7.52-6.72v-2.845c0-3.974 2.139-6.728 7.52-6.728 1.254 0 2.738.13 5.015.629v3.959zm15.686 4.985h-9.192v.327c0 1.854.68 2.337 2.925 2.337 2.02 0 3.252-.096 5.847-.531v3.961c-2.503.496-3.807.626-6.262.626-5.382 0-7.522-2.749-7.522-6.72v-3.253c0-3.474 1.588-6.32 7.103-6.32s7.1 2.813 7.1 6.32v3.253zm16.294.075c0 3.838-1.13 6.638-7.971 6.638-2.47 0-3.92-.21-6.647-.618V1.22l5.01-.812v7.675c1.084-.391 2.485-.59 3.76-.59 5.012 0 5.847 2.183 5.847 5.69v3.958zm16.062.084c0 3.31-1.407 6.522-7.295 6.522-5.891 0-7.325-3.211-7.325-6.522v-3.197c0-3.313 1.434-6.525 7.325-6.525 5.888 0 7.295 3.212 7.295 6.525v3.197zm16.052 0c0 3.31-1.41 6.522-7.296 6.522-5.89 0-7.325-3.211-7.325-6.522v-3.197c0-3.313 1.434-6.525 7.325-6.525 5.887 0 7.296 3.212 7.296 6.525v3.197zm16.473 6.343h-5.432l-4.593-7.449v7.45h-5.013V1.218l5.013-.812v14.388l4.593-7.073h5.432l-5.015 7.718 5.015 8.128zM95.635 11.56c-1.703 0-2.293.904-2.293 2.03v4.106c0 1.128.59 2.035 2.293 2.035 1.7 0 2.301-.907 2.301-2.035V13.59c0-1.125-.601-2.03-2.301-2.03zm26.646 9.228c.844 0 1.517.669 1.517 1.504 0 .848-.673 1.509-1.523 1.509a1.511 1.511 0 01-1.531-1.51c0-.834.685-1.503 1.531-1.503h.006zm-.006.234c-.68 0-1.236.569-1.236 1.27 0 .714.557 1.275 1.242 1.275.687.007 1.235-.561 1.235-1.268 0-.708-.548-1.277-1.235-1.277h-.006zm-.288 2.145h-.275v-1.678c.144-.02.282-.039.488-.039.261 0 .432.054.537.127.101.074.156.187.156.346 0 .222-.15.355-.335.409v.013c.15.027.253.16.288.406.04.261.082.36.109.415h-.289c-.04-.054-.082-.207-.116-.428-.04-.214-.152-.294-.372-.294h-.19v.723h-.001zm0-.929h.2c.225 0 .417-.08.417-.288 0-.147-.109-.293-.418-.293-.09 0-.152.006-.2.013v.568z" />
              </svg> */}
              <img src="/images/program_premiere.png" alt="Premiere" className="mx-auto w-4/6" style={{ width: '100px', height: 'auto' }} />
              <p className="text-sm mt-2">Adobe Premiere</p>                         
            </div>

            {/* Item */}
            <div className="flex flex-col items-center justify-center py-2 col-span-2 md:col-auto">
            <img src="/images/program_ableton_live.png" alt="Ableton" className="mx-auto w-4/6" style={{ width: '100px', height: 'auto' }} />              
            <p className="text-sm mt-2">Ableton Live</p>                         
            </div>

            {/* Item */}
            <div className="flex flex-col items-center justify-center py-2 col-span-2 md:col-auto">
            <img src="/images/program_davinci.png" alt="DaVinci" className="mx-auto w-4/6" style={{ width: '100px', height: 'auto' }} />              
            <p className="text-sm mt-2">DaVinci Resolve</p>                         
            </div>

            {/* Item */}
            <div className="flex flex-col items-center justify-center py-2 col-span-2 md:col-auto">
            <img src="/images/program_fl_studio.png" alt="FL" className="mx-auto w-4/6" style={{ width: '100px', height: 'auto' }} />              
            <p className="text-sm mt-2">FL Studio</p>                         
            </div>

          </div>

          <div className="max-w-sm md:max-w-4xl mx-auto grid gap-2 grid-cols-4 md:grid-cols-4">

            {/* Item */}
            <div className="flex flex-col items-center justify-center py-2 col-span-2 md:col-auto">
              {/* <svg className="max-w-full fill-current text-gray-400" width="124" height="24" viewBox="0 0 124 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M63.734 11.56c-1.022 0-1.76.325-2.506.657v7.506c.715.066 1.125.066 1.804.066 2.454 0 2.79-1.091 2.79-2.615v-3.585c0-1.125-.384-2.03-2.088-2.03zm-16.295-.41c-1.702 0-2.09.908-2.09 2.032v.632h4.179v-.632c0-1.124-.389-2.032-2.089-2.032zm-31.566 7.813c0 .89.432 1.351 1.386 1.351 1.023 0 1.628-.324 2.375-.656v-1.781h-2.236c-1.06 0-1.525.191-1.525 1.086zm63.711-7.403c-1.705 0-2.296.904-2.296 2.03v4.106c0 1.128.591 2.035 2.296 2.035 1.7 0 2.296-.907 2.296-2.035V13.59c0-1.125-.596-2.03-2.296-2.03zM7.517 23.568H2.505V11.783H0v-4.06h2.505v-2.44C2.505 1.97 3.92 0 7.936 0h3.346v4.062H9.19c-1.565 0-1.668.568-1.668 1.627l-.006 2.033h3.787l-.442 4.06H7.517v11.786zm17.13.03H20.47l-.18-1.026a9.802 9.802 0 01-4.733 1.193c-3.064 0-4.695-1.988-4.695-4.738 0-3.243 1.903-4.401 5.307-4.401h3.465v-.701c0-1.656-.195-2.142-2.817-2.142h-4.286l.419-4.06h4.685c5.751 0 7.013 1.764 7.013 6.235v9.64zm14.207-11.517c-2.6-.433-3.347-.528-4.597-.528-2.247 0-2.926.481-2.926 2.334v3.506c0 1.854.679 2.337 2.926 2.337 1.25 0 1.997-.096 4.597-.531v3.961c-2.277.496-3.76.626-5.015.626-5.381 0-7.52-2.749-7.52-6.72v-2.845c0-3.974 2.139-6.728 7.52-6.728 1.254 0 2.738.13 5.015.629v3.959zm15.686 4.985h-9.192v.327c0 1.854.68 2.337 2.925 2.337 2.02 0 3.252-.096 5.847-.531v3.961c-2.503.496-3.807.626-6.262.626-5.382 0-7.522-2.749-7.522-6.72v-3.253c0-3.474 1.588-6.32 7.103-6.32s7.1 2.813 7.1 6.32v3.253zm16.294.075c0 3.838-1.13 6.638-7.971 6.638-2.47 0-3.92-.21-6.647-.618V1.22l5.01-.812v7.675c1.084-.391 2.485-.59 3.76-.59 5.012 0 5.847 2.183 5.847 5.69v3.958zm16.062.084c0 3.31-1.407 6.522-7.295 6.522-5.891 0-7.325-3.211-7.325-6.522v-3.197c0-3.313 1.434-6.525 7.325-6.525 5.888 0 7.295 3.212 7.295 6.525v3.197zm16.052 0c0 3.31-1.41 6.522-7.296 6.522-5.89 0-7.325-3.211-7.325-6.522v-3.197c0-3.313 1.434-6.525 7.325-6.525 5.887 0 7.296 3.212 7.296 6.525v3.197zm16.473 6.343h-5.432l-4.593-7.449v7.45h-5.013V1.218l5.013-.812v14.388l4.593-7.073h5.432l-5.015 7.718 5.015 8.128zM95.635 11.56c-1.703 0-2.293.904-2.293 2.03v4.106c0 1.128.59 2.035 2.293 2.035 1.7 0 2.301-.907 2.301-2.035V13.59c0-1.125-.601-2.03-2.301-2.03zm26.646 9.228c.844 0 1.517.669 1.517 1.504 0 .848-.673 1.509-1.523 1.509a1.511 1.511 0 01-1.531-1.51c0-.834.685-1.503 1.531-1.503h.006zm-.006.234c-.68 0-1.236.569-1.236 1.27 0 .714.557 1.275 1.242 1.275.687.007 1.235-.561 1.235-1.268 0-.708-.548-1.277-1.235-1.277h-.006zm-.288 2.145h-.275v-1.678c.144-.02.282-.039.488-.039.261 0 .432.054.537.127.101.074.156.187.156.346 0 .222-.15.355-.335.409v.013c.15.027.253.16.288.406.04.261.082.36.109.415h-.289c-.04-.054-.082-.207-.116-.428-.04-.214-.152-.294-.372-.294h-.19v.723h-.001zm0-.929h.2c.225 0 .417-.08.417-.288 0-.147-.109-.293-.418-.293-.09 0-.152.006-.2.013v.568z" />
              </svg> */}
              <img src="/images/program_cubase.png" alt="Cubase" className="mx-auto w-4/6" style={{ width: '100px', height: 'auto' }} />
              <p className="text-sm mt-2">Cubase</p>                         
            </div>

            {/* Item */}
            <div className="flex flex-col items-center justify-center py-2 col-span-2 md:col-auto">
            <img src="/images/program_final_cut.png" alt="Final Cut" className="mx-auto w-4/6" style={{ width: '100px', height: 'auto' }} />              
            <p className="text-sm mt-2">Final Cut</p>                         
            </div>

            {/* Item */}
            <div className="flex flex-col items-center justify-center py-2 col-span-2 md:col-auto">
              <img src="/images/program_logic.png" alt="logic" className="mx-auto w-4/6" style={{ width: '100px', height: 'auto' }} />              
              <p className="text-sm mt-2">Logic</p>
            </div>

            {/* Item */}
            {/* <div className="flex flex-col items-center justify-center py-2 col-span-2 md:col-auto">
            <img src="/images/program_cubase.png" alt="Cubase" className="mx-auto w-4/6" style={{ width: '100px', height: 'auto' }} />              
            <p className="text-sm mt-2">Cubase</p>                         
            </div> */}

            {/* Item */}
            {/* <div className="flex flex-col items-center justify-center py-2 col-span-2 md:col-auto">
            <img src="/images/program_pro_tools.png" alt="Pro Tools" className="mx-auto w-4/6" style={{ width: '100px', height: 'auto' }} />              
            <p className="text-sm mt-2">Pro Tools</p>                         
            </div> */}

            {/* Item */}
            <div className="flex flex-col items-center justify-center py-2 col-span-2 md:col-auto">
              <img src="/images/program_bitwig.png" alt="Bitwig" className="mx-auto w-4/6" style={{ width: '100px', height: 'auto' }} />              
              <p className="text-sm mt-2">Bitwig</p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <br></br>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">And more!</p>
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
                <blockquote className="text-lg mb-4">
                  “I’m a YouTuber that uses Final Cut to make comedy sketch videos. I always wanted a quick way to get system audio into my videos. SoundPaste makes this easy. It saves maybe a minute an edit, but after hundreds of edits the time saved really adds up. Worth it imo!“
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">Jreg</cite>
                <div className="text-gray-600">
                  <span>YouTuber</span> <a className="text-blue-600 hover:underline" href="#0"></a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}