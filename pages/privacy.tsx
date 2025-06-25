import React from "react";

const today = "June 25, 2025";

export default function PrivacyPolicy() {
  return (
    <section className="min-h-screen bg-gray-950 text-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-10 text-center">
          Privacy Policy
        </h1>
        <p className="text-gray-400 mb-8 text-center text-sm">Effective Date: {today}</p>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Your name, email address, and phone number submitted via our contact form</li>
              <li>Information you provide when scheduling a demo via Calendly</li>
              <li>Non-personally identifiable data collected through analytics and cookies (see below)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Respond to inquiries</li>
              <li>Schedule and manage demo appointments</li>
              <li>Improve the usability and performance of our website</li>
            </ul>
            <p className="text-gray-300 mt-2">We do not use your information for marketing unless explicitly requested.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">3. Analytics and Cookies</h2>
            <p className="text-gray-300 mb-2">We use Google Analytics to understand how visitors use our site. This tool collects anonymized data such as:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>IP address (anonymized in some regions)</li>
              <li>Device type and browser</li>
              <li>Pages visited and time spent on the site</li>
            </ul>
            <p className="text-gray-300 mt-2">This data is used only to improve our website. Google may use cookies or similar technologies to track user behavior. You can read more about how Google uses data <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-purple-400 underline hover:text-purple-300">here</a>.</p>
            <p className="text-gray-300 mt-2">To opt out of Google Analytics, you may install the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-purple-400 underline hover:text-purple-300">Google Analytics Opt-Out Browser Add-on</a>.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">4. Calendly</h2>
            <p className="text-gray-300">We use Calendly, a third-party scheduling platform, to allow users to book demo appointments. When you use Calendly, your submitted data (name, email, time zone) is processed according to <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" className="text-purple-400 underline hover:text-purple-300">Calendly's Privacy Policy</a>.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">5. Data Sharing</h2>
            <p className="text-gray-300">We do not sell, rent, or trade your personal information.<br />
            We may share your data with trusted service providers (like Calendly and Google) who assist us in operating our website and communicating with you — under strict confidentiality and data protection obligations.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">6. Your Rights</h2>
            <p className="text-gray-300">Depending on your location (e.g., the EU, UK, California), you may have the right to:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Access the personal data we hold about you</li>
              <li>Request corrections or deletion of your data</li>
              <li>Opt out of data processing or analytics tracking</li>
            </ul>
            <p className="text-gray-300 mt-2">To exercise any of these rights, contact us at <a href="mailto:info@subject7.com" className="text-purple-400 underline hover:text-purple-300">info@subject7.com</a>.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">7. Third-Party Links</h2>
            <p className="text-gray-300">Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of those sites.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">8. Policy Updates</h2>
            <p className="text-gray-300">We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Effective Date."</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">9. Contact</h2>
            <p className="text-gray-300">If you have questions about this Privacy Policy or how we handle your data, please contact us at <a href="mailto:info@subject7.com" className="text-purple-400 underline hover:text-purple-300">info@subject7.com</a>.</p>
          </section>
        </div>
      </div>
    </section>
  );
} 