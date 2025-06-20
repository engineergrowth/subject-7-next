import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Zap, Shield } from "lucide-react";

const AboutValues = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Every feature we build solves real testing pain points experienced by our own team and customers."
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Built for government and enterprise with the highest security standards and compliance requirements."
    },
    {
      icon: Zap,
      title: "Innovation Focus",
      description: "Constantly pushing the boundaries of what's possible in test automation and developer productivity."
    },
    {
      icon: Users,
      title: "Customer Obsessed",
      description: "Our roadmap is driven by real customer feedback and the challenges they face every day."
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-6">
            What Drives Us
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our core values guide every decision and every line of code we write
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
            >
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2 + 0.3,
                  type: "spring",
                  stiffness: 150,
                  damping: 15
                }}
                className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center mb-6"
              >
                <value.icon className="text-white" size={28} />
              </motion.div>
              <motion.h3 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2 + 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="text-2xl font-semibold mb-4"
              >
                {value.title}
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2 + 0.7,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="text-gray-300 leading-relaxed"
              >
                {value.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;