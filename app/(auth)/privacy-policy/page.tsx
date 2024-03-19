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
              <h4 className="h4 mb-4">Application Data Collection and Use</h4>
              <p className="text-gray-600">KLOYTools develops macOS applications available through the Apple App Store. In accordance with the policies and technical frameworks provided by Apple, we collect minimal information necessary for the operation, improvement, and troubleshooting of our applications. This includes non-personally identifiable information such as app usage statistics, crash reports, and general performance metrics through App Store Connect. This data helps us to improve app functionality and user experience. We do not access or collect personal data such as names, email addresses, or other direct identifiers.</p>
              {/* Add more content here as needed */}
              <br></br>
              <h4 className="h4 mb-4">Website Data Collection and Use</h4>
              <p className="text-gray-600">Our website utilizes third-party analytics services from Meta and Google. The collection and processing of data by these services are governed by their respective privacy policies. We use this information for two main purposes:
              <br></br>

1. Marketing Purposes: To understand user behavior and preferences to tailor our marketing efforts more effectively.
<br></br>

2. Website Experience Improvement: To analyze website traffic patterns, engagement levels, and interaction metrics to enhance the usability and functionality of our website.</p>

<br></br>

<p className="text-gray-600">We are committed to ensuring that the collection and use of your data are transparent and secure. Our use of third-party analytics services is conducted with the utmost regard for privacy and in compliance with applicable laws and regulations.</p>
<br></br>

<h4 className="h4 mb-4">Changes to This Privacy Policy</h4>
<p className="text-gray-600">KLOYTools reserves the right to update this Privacy Policy at any time. Your continued use of our apps and website after any change in this Privacy Policy will constitute your acceptance of such change.</p>
<br></br>

<h4 className="h4 mb-4">Contact Us</h4>
<p className="text-gray-600">For any questions or concerns about this Privacy Policy or our data practices, please contact us at maxim.kuzmenko1@gmail.com.</p>

            </div>
          </div>
        </div>
      </section>
  );
}
