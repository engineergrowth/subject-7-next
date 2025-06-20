import React from "react";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="relative bg-gray-950 text-white py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-5xl sm:text-7xl md:text-8xl font-extrabold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-[1.1] tracking-tight mb-8"
        >
          <span className="inline-block">Built by Testers.</span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent inline-block">Trusted by the Enterprise.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Subject7 was born from real frustration with brittle, slow, and overly technical automation tools. 
          Since day one, our mission has been simple: make testing fast, scalable, and accessible to everyone.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutHero;