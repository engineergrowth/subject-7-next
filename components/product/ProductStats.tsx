import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Clock, Shield } from "lucide-react";

const stats = [
  {
    icon: <TrendingUp className="h-7 w-7 text-white" />,
    value: "10x",
    label: "Faster test execution",
    iconBg: "bg-gradient-to-br from-purple-600 to-blue-600"
  },
  {
    icon: <Users className="h-7 w-7 text-white" />,
    value: "85%",
    label: "Reduction in QA resources",
    iconBg: "bg-gradient-to-br from-purple-600 to-blue-600"
  },
  {
    icon: <Clock className="h-7 w-7 text-white" />,
    value: "60%",
    label: "Faster time to market",
    iconBg: "bg-gradient-to-br from-purple-600 to-blue-600"
  },
  {
    icon: <Shield className="h-7 w-7 text-white" />,
    value: "99.99%",
    label: "Test reliability",
    iconBg: "bg-gradient-to-br from-purple-600 to-blue-600"
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
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-6">
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
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-2xl p-4 text-center hover:border-purple-500/50 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center">
                <div className={`w-14 h-14 flex items-center justify-center rounded-full mb-3 shadow-lg ${stat.iconBg}`}>
                  {stat.icon}
                </div>
                <span className="text-3xl font-bold text-white mb-1">{stat.value}</span>
                <span className="text-base font-semibold text-gray-200">{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductStats;
