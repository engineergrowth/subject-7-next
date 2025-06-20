import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

interface ContactFormProps {
  onSubmit?: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-6">
            Send Us a Message
          </h2>
          <p className="text-xl text-gray-300">
            Fill out the form below and we'll get back to you within 24 hours
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-3xl p-8 shadow-2xl"
        >
          <form
            action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DHp00000HEsWV"
            method="POST"
            onSubmit={onSubmit}
            className="space-y-6"
          >
            <input type="hidden" name="oid" value="00DHp00000HEsWV" />
            <input
              type="hidden"
              name="retURL"
              value="http://subject7.com/submit-request-thank-you"
            />
            <input type="hidden" id="first_name" name="first_name" value="" />
            <input type="hidden" id="last_name" name="last_name" value="" />

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <label
                htmlFor="form-field-full_name"
                className="block text-sm font-medium text-white mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                name="form_fields[full_name]"
                id="form-field-full_name"
                placeholder="Enter your full name"
                className="w-full p-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                onInput={() => window.splitName?.()}
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <label
                htmlFor="form-field-email"
                className="block text-sm font-medium text-white mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                name="form_fields[email]"
                id="form-field-email"
                placeholder="Enter your email address"
                className="w-full p-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <label
                htmlFor="form-field-company"
                className="block text-sm font-medium text-white mb-2"
              >
                Company
              </label>
              <input
                type="text"
                name="form_fields[company]"
                id="form-field-company"
                placeholder="Enter your company name"
                className="w-full p-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <label
                htmlFor="form-field-description"
                className="block text-sm font-medium text-white mb-2"
              >
                Message
              </label>
              <textarea
                name="form_fields[description]"
                id="form-field-description"
                rows={5}
                placeholder="Tell us how we can help you..."
                className="w-full p-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-6 pt-4"
            >
              <div className="g-recaptcha" data-sitekey="6LeG96EqAAAAABqJtxbzwP9QSJCI8giVZimgJvYE"></div>

              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.9,
                  type: "spring",
                  stiffness: 150,
                  damping: 15
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-4 px-8 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
              >
                <Send className="h-5 w-5" />
                Send Message
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;