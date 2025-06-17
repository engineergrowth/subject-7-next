"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const headline = "Ditch Manual Testing. Supercharge Your Deployments.";
  const words = headline.split(" ");

  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-snug tracking-tight sm:leading-[1.2] md:leading-[1.25] pb-2 flex flex-wrap justify-center">
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="mr-2 inline-block"
              initial={{ y: -100, opacity: 0, rotateX: 90 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              transition={{
                delay: i * 0.3,
                type: "spring",
                stiffness: 500,
                damping: 30
              }}
            >
              {word}
            </motion.span>

          ))}
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mt-6 max-w-3xl mx-auto">
          Focus on building. Let our platform handle the repetitive QA work.
          Ship faster, catch bugs sooner, and drive your roadmap forward. We are the #1 trusted QA Automation platform of GovTech & Enterprise companies.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          {/* Add buttons or CTAs here if needed */}
        </div>
      </div>

      {/* Dashboard block */}
      <div className="mt-12 max-w-6xl mx-auto">
        <img
          src="/dashboard.webp"
          alt="Dashboard Preview"
          className="w-full h-auto block mx-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
