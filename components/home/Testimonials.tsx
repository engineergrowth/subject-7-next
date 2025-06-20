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
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight">
            Trusted by Government & Enterprise.
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left: Vertical scrolling client cards */}
          <div className="w-full lg:w-1/2 h-[440px] overflow-hidden relative mt-10">
            <motion.div
              className="flex flex-col gap-4"
              animate={{ y: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 45,
                ease: "linear"
              }}
            >
              {[...clients, ...clients].map((client, idx) => (
                <div
                  key={idx}
                  className="mx-auto w-[220px] px-6 py-4 bg-gray-800/30 border border-gray-700/60 backdrop-blur-md text-white text-sm font-medium shadow-md text-center hover:shadow-xl transition duration-300"
                  style={{
                    borderRadius: "0.5rem",
                    boxShadow: "0 0 20px rgba(128, 90, 213, 0.05)"
                  }}
                >
                  {client}
                </div>
              ))}
            </motion.div>

            {/* Top & bottom fades */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-gray-950 via-gray-950/80 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent z-10" />
          </div>

          {/* Right: Testimonials */}
          <div className="w-full lg:w-1/2 space-y-10">
            {[
              {
                quote: `"We went with Subject7 because it was much more user-friendly. And with all the capabilities Subject7 offers, you can run load testing, 508 compliance, web service testing, UI test, and reuse pieces of the code in the same tool."`,
                source: "Grantsolutions.gov"
              },
              {
                quote: `"The time benefit is exactly why we picked Subject7. It takes 2–3 hours to convert a manual test script into a Subject7 test — compared to 2–3 days for a Python dev to code it manually."`,
                source: "PwC"
              }
            ].map((t, i) => (
              <Card
                key={i}
                className="bg-gray-800/50 border border-gray-700 p-8 shadow-md hover:shadow-xl transition"
              >
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>
                  <blockquote className="text-lg text-gray-300 mb-6 leading-relaxed">
                    {t.quote}
                  </blockquote>
                  <cite className="text-gray-400">— {t.source}</cite>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
