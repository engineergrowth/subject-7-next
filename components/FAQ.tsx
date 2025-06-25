import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "What is Subject7 and how does it work?",
    answer: "Subject7 is a codeless test automation platform that enables teams to automate web, mobile, desktop, and API testing without writing code. Our visual interface allows you to create, execute, and maintain automated tests through simple drag-and-drop actions."
  },
  {
    question: "Do I need coding experience to use Subject7?",
    answer: "No coding experience is required! Subject7 is designed for both technical and non-technical team members. Our intuitive visual interface makes test automation accessible to QA professionals, business analysts, and developers alike."
  },
  {
    question: "What types of testing does Subject7 support?",
    answer: "Subject7 supports comprehensive testing including web application testing, mobile app testing (iOS and Android), desktop application testing, API testing, database testing, and cross-browser testing across all major browsers."
  },
  {
    question: "How quickly can I get started with Subject7?",
    answer: "You can start automating tests within minutes of signing up. Our platform includes pre-built templates, guided tutorials, and a free demo to help you get up and running quickly. Most teams see results within their first week."
  },
  {
    question: "Is Subject7 suitable for enterprise-level testing?",
    answer: "Absolutely! Subject7 is trusted by GovTech and Enterprise companies worldwide. We offer enterprise-grade security, scalability, compliance features, and dedicated support to meet the needs of large organizations."
  },
  {
    question: "What integrations does Subject7 offer?",
    answer: "Subject7 integrates with popular CI/CD tools, test management systems, bug tracking tools, and communication platforms. This includes Jenkins, Azure DevOps, Jira, Slack, and many more to fit seamlessly into your existing workflow."
  }
];

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqData.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData)
        }}
      />
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get answers to common questions about Subject7's test automation platform
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-750 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-purple-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-purple-400 flex-shrink-0" />
                  )}
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4">
                        <p className="text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}