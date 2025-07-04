
import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Database,
  GaugeCircle,
  AppWindow,
  Smartphone,
  Plug,
  CheckCircle
} from "lucide-react";

const capabilities = [
  {
    icon: <Globe size={32} />,
   title: "Web Testing",
    description: "True codeless test case authoring with smart XPath generation and resilient locators.",
    features: [
      "Parallel test execution",
      "Codeless Record & Play functionality",
      "Cross-browser agents"
    ],
    color: "from-purple-800 to-purple-700"
  },
  {
    icon: <Plug size={32} />,
    title: "API Testing",
    description: "Comprehensive REST and SOAP service validation with advanced assertion capabilities and seamless integration.",
    features: [
      "Request/response validation",
      "Payload validation",
      "Authentication & authorization"
    ],
    color: "from-purple-800 to-purple-700"
  },
  {
    icon: <Database size={32} />,
    title: "Database Testing",
    description: "Automated backend validation with supprt for all major databases and streamlined SQL-based test creation.",
    features: [
      "Real-time data validation/vertification",
      "Multi-database support",
      "Data Integrity checks"
    ],
    color: "from-purple-800 to-purple-700"
  },
  {
    icon: <GaugeCircle size={32} />,
    title: "Performance Testing",
    description: "Cloud-scale load testing with detailed performance metrics and bottleneck identification.",
    features: [
      "Load testing",
      "Stress testing",
      "Spike testing"
    ],
    color: "from-purple-800 to-purple-700"
  },
  {
    icon: <AppWindow size={32} />,
    title: "Desktop Testing",
    description: "Advanced image recognition and OCR technology for legacy and modern desktop application automation.",
    features: [
      "Comprehensive GUI testing",
      "Windows, macOS, & Linux support",
      "Test via image, coordinates, or accessibility tree"
    ],
    color: "from-purple-700 to-purple-800"
  },
  {
    icon: <Smartphone size={32} />,
    title: "Mobile Testing",
    description: "Native and hybrid mobile app testing across iOS and Android platforms with real device support.",
    features: [
      "IOS & Android automation",
      "Native & hybrid app testing",
      "Run on local or cloud emulators"
    ],
    color: "from-purple-700 to-purple-800"
  }
];

const ProductCapabilities = () => {
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
            Complete Testing Coverage
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Subject7 provides comprehensive automation across every layer of your application, 
            from frontend interfaces to backend databases, ensuring complete quality coverage.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {capabilities.map((capability, index) => (
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
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-500 group"
            >
              <div className="flex items-start space-x-6">
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
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${capability.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  {React.cloneElement(capability.icon, { className: "text-white" })}
                </motion.div>
                
                <div className="flex-1">
                  <motion.h3 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.2 + 0.5,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    viewport={{ once: true }}
                    className="text-2xl font-bold text-white mb-3"
                  >
                    {capability.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.2 + 0.7,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    viewport={{ once: true }}
                    className="text-gray-300 mb-6 leading-relaxed"
                  >
                    {capability.description}
                  </motion.p>
                  
                  <div className="space-y-3">
                    {capability.features.map((feature, featureIndex) => (
                      <motion.div 
                        key={featureIndex} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: index * 0.2 + 0.9 + (featureIndex * 0.1),
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle className="h-5 w-5 flex-shrink-0" style={{color: '#FD7855'}} />
                        <span className="text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCapabilities;
