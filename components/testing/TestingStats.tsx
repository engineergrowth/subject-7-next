
import React from "react";
import { TrendingUp, Users, Clock, Shield } from "lucide-react";

const stats = [
  {
    icon: <TrendingUp className="h-8 w-8" />,
    value: "10x",
    label: "Faster test execution",
    description: "Accelerate your testing cycles with parallel execution and smart test optimization"
  },
  {
    icon: <Users className="h-8 w-8" />,
    value: "85%",
    label: "Reduction in QA resources",
    description: "Enable business users to create tests without technical expertise"
  },
  {
    icon: <Clock className="h-8 w-8" />,
    value: "60%",
    label: "Faster time to market",
    description: "Ship quality software faster with continuous testing integration"
  },
  {
    icon: <Shield className="h-8 w-8" />,
    value: "99.99%",
    label: "Test reliability",
    description: "Self-healing tests that adapt to application changes automatically"
  }
];

const TestingStats = () => {
  return (
    <section className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Proven Results Across Industries
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From government agencies to Fortune 500 companies, organizations trust Subject7 
            to deliver comprehensive test automation at scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 text-center hover:bg-gray-800 transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl mb-6 group-hover:scale-110 transition-transform">
                {React.cloneElement(stat.icon, { className: "h-8 w-8 text-white" })}
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-purple-400 mb-3">{stat.label}</div>
              <p className="text-gray-400 text-sm leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestingStats;
