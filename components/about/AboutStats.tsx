import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const AboutStats = () => {
  const stats = [
    { value: "2011", label: "Founded" },
    { value: "95%", label: "Customer Satisfaction" },
    { value: "99.999%", label: "Uptime" },
    { value: "5.0", label: "Capterra Rating", isCapterra: true },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {stat.value}
                </span>
                {stat.isCapterra && <Star className="h-6 w-6 text-yellow-400" fill="#facc15" />}
              </div>
              <div className="text-gray-400 text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;