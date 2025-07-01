"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const clients = [
  "FDA", "Dept. of Education", "CMS", "NIH", "HHS",
  "FDIC", "Dept. of Defense", "Federal Aviation", "City of Phoenix",
  "PwC", "Leidos", "Maximus", "Altum", "QuadReal",
  "Latitude Learning", "Stella & Chewy’s", "AGES", "Mayoral", "OmniSystems"
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Government & Enterprise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join hundreds of organizations that trust Subject7 to power their testing automation
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left: Enhanced scrolling client cards */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2 h-[600px] overflow-hidden relative hide-scrollbar"
          >
            <motion.div
              className="flex flex-col gap-6"
              animate={{ y: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 50,
                ease: "linear"
              }}
            >
              {[...clients, ...clients].map((client, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ 
                    scale: 1.05, 
                    borderColor: "rgb(147 51 234)",
                    boxShadow: "0 10px 40px rgba(147, 51, 234, 0.3)"
                  }}
                  className="mx-auto w-[280px] px-8 py-6 bg-gray-900/80 border border-gray-600/50 backdrop-blur-md text-white text-base font-semibold shadow-xl text-center transition-all duration-300 rounded-2xl hover:shadow-purple-500/30 hover:bg-gray-800/80"
                >
                  {client}
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced fades */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gray-950 z-10" style={{background: 'linear-gradient(to bottom, rgb(3 7 18) 0%, rgb(3 7 18 / 0.95) 50%, transparent 100%)'}} />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gray-950 z-10" style={{background: 'linear-gradient(to top, rgb(3 7 18) 0%, rgb(3 7 18 / 0.95) 50%, transparent 100%)'}} />
          </motion.div>

          {/* Right: Enhanced Testimonials */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2 space-y-8"
          >
            {[
              {
                quote: `"We went with Subject7 because it was much more user-friendly. And with all the capabilities Subject7 offers, you can run load testing, 508 compliance, web service testing, UI test, and reuse pieces of the code in the same tool."`,
                source: "Grantsolutions.gov",
                role: "Government Technology Team"
              },
              {
                quote: `"The time benefit is exactly why we picked Subject7. It takes 2–3 hours to convert a manual test script into a Subject7 test — compared to 2–3 days for a Python dev to code it manually."`,
                source: "PwC",
                role: "Enterprise Consulting"
              }
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.6 + (i * 0.2),
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Card className="bg-gray-900/80 border border-gray-700 hover:border-purple-500/50 p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-0">
                    <div className="flex mb-6">
                      {[...Array(5)].map((_, starIdx) => (
                        <motion.div
                          key={starIdx}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.3, 
                            delay: 0.8 + (i * 0.2) + (starIdx * 0.1),
                            type: "spring",
                            stiffness: 200
                          }}
                          viewport={{ once: true }}
                        >
                          <Star className="text-orange-400 fill-current" size={20} />
                        </motion.div>
                      ))}
                    </div>
                    <blockquote className="text-lg text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {t.quote}
                    </blockquote>
                    <div className="border-t border-gray-700 pt-4">
                      <cite className="text-purple-700 font-semibold">— {t.source}</cite>
                      <p className="text-gray-500 text-sm mt-1">{t.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
