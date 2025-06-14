import React from "react";
import Link from "next/link";
import Script from "next/script";

declare global {
  interface Window {
    splitName?: () => void;
  }
}

export default function Contact() {
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-snug tracking-tight sm:leading-[1.2] md:leading-[1.25] mb-4">
            Get in Touch
      </h2>
        <p className="text-lg text-gray-300 mb-3">
          Have questions? Need more details? We’re here to help.
        </p>
        <p className="text-lg text-gray-300 mb-8">
          To book a demo, {" "}
          <Link
            href="/demo"
            className="text-purple-600 underline underline-offset-4 hover:text-violet-300"
          >
            click here.
          </Link>.
        </p>

        <form
          action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DHp00000HEsWV"
          method="POST"
          onSubmit={() => window.splitName?.()}
          className="space-y-6 bg-gray-900 p-8 rounded-2xl border border-gray-700 text-left shadow-lg"
        >
          <input type="hidden" name="oid" value="00DHp00000HEsWV" />
          <input
            type="hidden"
            name="retURL"
            value="http://subject7.com/submit-request-thank-you"
          />
          <input type="hidden" id="first_name" name="first_name" value="" />
          <input type="hidden" id="last_name" name="last_name" value="" />

          <div>
            <label
              htmlFor="form-field-full_name"
              className="block text-sm font-medium text-white mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              name="form_fields[full_name]"
              id="form-field-full_name"
              placeholder="Full Name *"
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
              onInput={() => window.splitName?.()}
              required
            />
          </div>

          <div>
            <label
              htmlFor="form-field-email"
              className="block text-sm font-medium text-white mb-1"
            >
              Email
            </label>
            <input
              type="email"
              name="form_fields[email]"
              id="form-field-email"
              placeholder="Email *"
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
              required
            />
          </div>

          <div>
            <label
              htmlFor="form-field-company"
              className="block text-sm font-medium text-white mb-1"
            >
              Company
            </label>
            <input
              type="text"
              name="form_fields[company]"
              id="form-field-company"
              placeholder="Company *"
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
              required
            />
          </div>

          <div>
            <label
              htmlFor="form-field-description"
              className="block text-sm font-medium text-white mb-1"
            >
              Message
            </label>
            <textarea
              name="form_fields[description]"
              id="form-field-description"
              rows={4}
              placeholder="Message *"
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
            />
          </div>

          <div className="flex flex-col items-center gap-4 pt-4">
            <div className="g-recaptcha" data-sitekey="6LeG96EqAAAAABqJtxbzwP9QSJCI8giVZimgJvYE"></div>

            <button
                type="submit"
                className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white py-3 px-6 rounded-lg font-semibold"
            >
                Submit
            </button>
            </div>

        </form>
      </div>

      {/* Salesforce name splitter */}
      <Script id="split-name-script" strategy="afterInteractive">
        {`
          window.splitName = function () {
            const fullNameInput = document.getElementById("form-field-full_name");
            const firstNameInput = document.getElementById("first_name");
            const lastNameInput = document.getElementById("last_name");
            if (!fullNameInput || !firstNameInput || !lastNameInput) return;

            const fullName = fullNameInput.value.trim();
            const nameParts = fullName.split(" ");
            firstNameInput.value = nameParts.shift() || "";
            lastNameInput.value = nameParts.join(" ");
          };
        `}
      </Script>

      {/* Google reCAPTCHA script */}
      <Script src="https://www.google.com/recaptcha/api.js" async defer />
    </>
  );
}
