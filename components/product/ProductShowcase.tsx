import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Zap, Users, Settings } from "lucide-react";

const showcaseItems = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "No-Code Paradigm",
    description: "Empower your entire team to create comprehensive test suites without any programming knowledge.",
    image: "/testss.png",
    badges: ["Codeless", "Recorder", "Visual Editor"]
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Lightning Fast Execution",
    description: "Parallel test execution across multiple environments with real-time reporting and instant feedback.",
    image: "/exsetss.png",
    badges: ["Parallel", "Real-time", "Cloud Scale"]
  },
  {
    icon: <Settings className="h-6 w-6" />,
    title: "Company Repository",
    description: "Create, manage, and reuse web locators, data templates, and datasets across all your test suites. Subject7's Company Repository accelerates test creation, ensures consistency, and makes your automation modular and scalable.",
    image: "/locatorsss.png",
    badges: ["Reusable", "Locators", "Data Templates", "Datasets"]
  }
];

const ProductShowcase = () => {
  return (
    <section className="bg-gray-900/30 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >

        </motion.div>

        <div className="space-y-16">
          {showcaseItems.map((item, index) => (
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
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-12`}
            >
              <div className="flex-1 space-y-6">
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2 + 0.3,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  viewport={{ once: true }}
                  className="inline-flex items-center space-x-3 p-3"
                >
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.2 + 0.5,
                      type: "spring",
                      stiffness: 150,
                      damping: 15
                    }}
                    viewport={{ once: true }}
                    className="w-12 h-12 bg-gradient-to-r from-purple-700 to-purple-800 rounded-xl flex items-center justify-center shadow-lg"
                  >
                    {React.cloneElement(item.icon, { className: "text-white" })}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                </motion.div>
                
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2 + 0.7,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  viewport={{ once: true }}
                  className="text-xl text-gray-300 leading-relaxed"
                >
                  {item.description}
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2 + 0.9,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-2"
                >
                  {item.badges.map((badge, badgeIndex) => (
                    <motion.div
                      key={badgeIndex}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.2 + 1.1 + (badgeIndex * 0.1),
                        type: "spring",
                        stiffness: 200
                      }}
                      viewport={{ once: true }}
                    >
                      <Badge
                        variant="outline"
                        className="border-purple-500/50 text-purple-300 bg-purple-500/10"
                      >
                        {badge}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2 + 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true }}
                className="flex-1"
              >
                <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 p-2 overflow-hidden hover:border-purple-500/50 transition-all duration-300">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full max-h-[400px] object-contain rounded-lg bg-black"
                  />
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
