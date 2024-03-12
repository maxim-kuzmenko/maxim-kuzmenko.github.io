import Head from 'next/head';

export const metadata = {
  title: 'KLOYTools - Privacy Policy',
  description: 'Privacy Policy',
}

export default function PrivacyPolicy() {
  return (
      <section className="bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h1 className="h1 mb-4">Privacy Policy</h1>
              <p className="text-xl text-gray-600">No data of any kind is collected, shared, or stored.</p>
              {/* Add more content here as needed */}
            </div>
          </div>
        </div>
      </section>
  );
}
