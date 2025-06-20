import React from "react";
import Script from "next/script";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

declare global {
  interface Window {
    splitName?: () => void;
  }
}

export default function Contact() {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <ContactHero />
      <ContactInfo />
      <ContactForm onSubmit={() => window.splitName?.()} />

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
    </div>
  );
}