import React from "react";
import { motion } from "framer-motion";

const AboutJourney = () => {
  const milestones = [
    {
      year: "2011",
      title: "A Frustration Sparks Innovation",
      description: "A small team of passionate testers set out to build a better way—one that made automation accessible, fast, and reliable for everyone."
    },
    {
      year: "Growth",
      title: "From Idea to Impact",
      description: "Our platform quickly gained traction, helping teams automate complex testing without code and proving that simplicity and power can go hand in hand."
    },
    {
      year: "Scale",
      title: "Growth & Evolution",
      description: "With each release, we expanded our capabilities—supporting more platforms, deeper integrations, and empowering organizations of all sizes."
    },
    {
      year: "Now",
      title: "Trusted",
      description: "Now, Subject7 is trusted by teams worldwide. We continue to innovate, driven by our mission to make quality assurance effortless and scalable for all."
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-6">
            Our Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From a small team's frustration to powering enterprise testing worldwide
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative group"
            >
              {/* Timeline connector line */}
              {index < milestones.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-purple-600 to-transparent z-10" />
              )}
              
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-500 group-hover:transform group-hover:scale-105 h-full">
                {/* Year Badge */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.2 + 0.3,
                    type: "spring",
                    stiffness: 200
                  }}
                  viewport={{ once: true }}
                  className="relative mb-6"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/25">
                    <span className="text-white font-bold text-lg">{milestone.year}</span>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2 + 0.5 
                  }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold mb-4 text-center group-hover:text-purple-300 transition-colors duration-300 min-h-[56px]">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed text-center">
                    {milestone.description}
                  </p>
                </motion.div>


              </div>
            </motion.div>
          ))}
        </div>

        {/* Progress indicator */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 rounded-full mx-auto max-w-2xl origin-left"
        />
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mt-8 text-lg"
        >
          14+ years of innovation and counting...
        </motion.p>
      </div>
    </section>
  );
};

export default AboutJourney;