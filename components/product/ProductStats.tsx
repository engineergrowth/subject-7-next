
import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Clock, Shield } from "lucide-react";

const stats = [
  {
    icon: <TrendingUp className="h-10 w-10" />,
    value: "10x",
    label: "Faster Execution"
  },
  {
    icon: <Users className="h-10 w-10" />,
    value: "85%",
    label: "Less QA Resources"
  },
  {
    icon: <Clock className="h-10 w-10" />,
    value: "60%",
    label: "Faster to Market"
  },
  {
    icon: <Shield className="h-10 w-10" />,
    value: "99.999%",
    label: "Test Reliability"
  }
];

const ProductStats = () => {
  return (
    <section className="bg-gray-900/30 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Proven Results Across Industries
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From government agencies to Fortune 500 companies, organizations trust Subject7 
            to deliver comprehensive test automation at scale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl p-8 text-center hover:border-purple-500/50 transition-all duration-300 group flex flex-col"
            >
              {/* Icon */}
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1 + 0.3,
                  type: "spring",
                  stiffness: 150,
                  damping: 15
                }}
                viewport={{ once: true }}
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-700 to-purple-800 rounded-xl mb-6 group-hover:scale-110 transition-transform shadow-lg mx-auto"
              >
                {React.cloneElement(stat.icon, { className: "h-10 w-10 text-white" })}
              </motion.div>

              {/* Stat Value */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1 + 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true }}
                className="text-5xl font-black text-white mb-6"
              >
                {stat.value}
              </motion.div>

              {/* Label with fixed height */}
              <motion.h3 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1 + 0.7,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true }}
                className="text-lg font-semibold text-gray-300 tracking-wide"
              >
                {stat.label}
              </motion.h3>


            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductStats;
