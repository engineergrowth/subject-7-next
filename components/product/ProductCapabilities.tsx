
import React from "react";
import {
  Globe,
  Network,
  Database,
  GaugeCircle,
  AppWindow,
  Smartphone,
  Eye,
  CheckCircle
} from "lucide-react";

const capabilities = [
  {
    icon: <Globe size={32} />,
    title: "Web Testing",
    description: "True codeless test case authoring with smart XPath generation and resilient locators that eliminate test maintenance.",
    features: [
      "Record & Play functionality",
      "Smart XPath generation",
      "Cross-browser compatibility",
      "Self-healing test scripts",
      "Visual regression testing"
    ],
    color: "from-blue-600 to-cyan-600"
  },
  {
    icon: <Network size={32} />,
    title: "API Testing",
    description: "Comprehensive REST and SOAP service validation with advanced assertion capabilities and seamless integration.",
    features: [
      "REST & SOAP services",
      "JSON/XML validation",
      "Dynamic test variables",
      "Response assertions",
      "API chaining workflows"
    ],
    color: "from-green-600 to-emerald-600"
  },
  {
    icon: <Database size={32} />,
    title: "Database Testing",
    description: "Automated backend validation with support for all major databases and SQL-free test creation.",
    features: [
      "Pre/post test queries",
      "Data-driven testing",
      "Multi-database support",
      "No SQL knowledge required",
      "Real-time data validation"
    ],
    color: "from-purple-600 to-violet-600"
  },
  {
    icon: <GaugeCircle size={32} />,
    title: "Performance Testing",
    description: "Cloud-scale load testing with detailed performance metrics and bottleneck identification.",
    features: [
      "Cloud scalability",
      "1000s of virtual users",
      "Real-time monitoring",
      "Performance benchmarking",
      "Stress test scenarios"
    ],
    color: "from-orange-600 to-red-600"
  },
  {
    icon: <AppWindow size={32} />,
    title: "Desktop Testing",
    description: "Advanced image recognition and OCR technology for legacy and modern desktop application automation.",
    features: [
      "Image recognition",
      "OCR capabilities",
      "Legacy app support",
      "Windows compatibility",
      "Thick client automation"
    ],
    color: "from-indigo-600 to-blue-600"
  },
  {
    icon: <Smartphone size={32} />,
    title: "Mobile Testing",
    description: "Native and hybrid mobile app testing across iOS and Android platforms with real device support.",
    features: [
      "Real devices & emulators",
      "Cross-platform testing",
      "Touch gesture automation",
      "Mobile-specific assertions",
      "App store validation"
    ],
    color: "from-pink-600 to-rose-600"
  }
];

const TestingCapabilities = () => {
  return (
    <section className="bg-gray-950 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-6">
            Complete Testing Coverage
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Subject7 provides comprehensive automation across every layer of your application stack, 
            from frontend interfaces to backend databases, ensuring complete quality coverage.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 hover:bg-gray-900 transition-all duration-500 group"
            >
              <div className="flex items-start space-x-6">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${capability.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {React.cloneElement(capability.icon, { className: "text-white" })}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">{capability.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{capability.description}</p>
                  
                  <div className="space-y-3">
                    {capability.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestingCapabilities;
