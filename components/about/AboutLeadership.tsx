import React from "react";
import { motion } from "framer-motion";

const AboutLeadership = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Leadership
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <div className="relative">
              <img
                src="/z.webp"
                alt="Subject7 CEO and Founder - Leading test automation innovation"
                className="w-64 h-64 rounded-2xl object-cover border-4 border-gradient-to-r from-purple-600 to-blue-600"
              />
            
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <blockquote className="text-2xl text-gray-300 italic mb-8 leading-relaxed">
              "We built Subject7 because we were tired of testing tools that promised the world but delivered complexity. 
              Our vision is simple: make comprehensive test automation accessible to every team, regardless of technical expertise."
            </blockquote>
            
            <div className="border-l-4 border-purple-800 pl-6">
              <h3 className="text-2xl font-bold text-white mb-2">Kezia "Z" Braithwaite</h3>
              <p className="text-purple-700 text-lg mb-4">CEO & Co-Founder</p>
              <p className="text-gray-300 leading-relaxed">
                With over 20 years in enterprise technology, Z leads Subject7's mission to democratize 
                test automation. Previously working with major government contractors, she understands the 
                critical importance of reliable, scalable testing solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutLeadership;