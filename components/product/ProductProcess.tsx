import React from "react";
import { motion } from "framer-motion";
import { CircleDot, BarChart3, Rocket, Settings } from "lucide-react";

const steps = [
  {
    icon: <CircleDot className="h-8 w-8" />,
    title: "Record",
    description: "Simply interact with your application while Subject7 intelligently captures every action and creates resilient test scripts.",
    color: "from-purple-700 to-purple-800"
  },
  {
    icon: <Settings className="h-8 w-8" />,
    title: "Enhance",
    description: "Add validations, test data, and conditional logic through our intuitive visual editor without writing code.",
    color: "from-purple-700 to-purple-800"
  },
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: "Execute",
    description: "Run tests across multiple browsers, devices, and environments with parallel execution and real-time monitoring.",
    color: "from-purple-700 to-purple-800"
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: "Scale",
    description: "Integrate with CI/CD pipelines, schedule automated runs, and generate comprehensive reports for stakeholders.",
    color: "from-purple-700 to-purple-800"
  }
];

const ProductProcess = () => {
  return (
    <section className="bg-gray-950 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How Subject7 Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From test creation to execution, Subject7 streamlines your entire testing workflow
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8 lg:gap-16 items-stretch">
          {steps.map((step, index) => (
            <div key={index} className="relative flex">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex-1 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-3xl p-8 text-center hover:border-purple-500/50 transition-all duration-500 group hover:transform hover:scale-105 flex flex-col"
              >
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2 + 0.3,
                    type: "spring",
                    stiffness: 150,
                    damping: 15
                  }}
                  viewport={{ once: true }}
                  className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  {React.cloneElement(step.icon, { className: "text-white" })}
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2 + 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold text-purple-700 mb-2"
                >
                  {String(index + 1).padStart(2, '0')}
                </motion.div>

                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2 + 0.7,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  viewport={{ once: true }}
                  className="text-xl font-bold text-white mb-6"
                >
                  {step.title}
                </motion.h3>

                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2 + 0.9,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  viewport={{ once: true }}
                  className="text-gray-300 leading-relaxed flex-1"
                >
                  {step.description}
                </motion.p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductProcess;

