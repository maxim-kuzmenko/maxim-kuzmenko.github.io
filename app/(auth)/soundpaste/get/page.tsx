"use client";

import { useEffect } from 'react';

// This is a page in Next.js, so it should be a default export.
export default function GetSoundPastePage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'https://apps.apple.com/us/app/soundpaste/id6471012328';
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1 mb-4">Redirecting...</h1>
            <p className="text-xl text-gray-600">Please wait while you're redirected to the App Store.
            <br></br>
            If you don't get redirected after a few seconds, click{' '}
            <a href="https://apps.apple.com/us/app/soundpaste/id6471012328" 
             target="_blank" 
             rel="noopener noreferrer"
             className="text-blue-600 hover:underline">
              here.
          </a>
          </p>
          </div>
        </div>
      </div>
    </section>
  )
}
