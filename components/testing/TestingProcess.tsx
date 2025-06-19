import React from "react";
import { ArrowRight, Play, BarChart3, Rocket, Settings } from "lucide-react";

const steps = [
  {
    icon: <Play className="h-8 w-8" />,
    title: "Record",
    description: "Simply interact with your application while Subject7 intelligently captures every action and creates resilient test scripts.",
    color: "from-blue-600 to-cyan-600"
  },
  {
    icon: <Settings className="h-8 w-8" />,
    title: "Enhance",
    description: "Add validations, test data, and conditional logic through our intuitive visual editor without writing code.",
    color: "from-purple-600 to-pink-600"
  },
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: "Execute",
    description: "Run tests across multiple browsers, devices, and environments with parallel execution and real-time monitoring.",
    color: "from-green-600 to-emerald-600"
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: "Scale",
    description: "Integrate with CI/CD pipelines, schedule automated runs, and generate comprehensive reports for stakeholders.",
    color: "from-orange-600 to-red-600"
  }
];

const TestingProcess = () => {
  return (
    <section className="bg-gray-950 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-6">
            How Subject7 Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From test creation to execution, Subject7 streamlines your entire testing workflow
          </p>
        </div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 via-green-600 to-orange-600 opacity-30"></div>

          <div className="grid lg:grid-cols-4 gap-8 items-stretch">
            {steps.map((step, index) => (
              <div key={index} className="relative h-full">
                <div className="h-full min-h-[400px] flex flex-col justify-between bg-gray-900/50 border border-gray-800 rounded-3xl p-8 text-center hover:bg-gray-900 transition-all duration-500 group">
                  <div>
                    <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      {React.cloneElement(step.icon, { className: "text-white" })}
                    </div>

                    <div className="text-2xl font-bold text-white mb-2">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-gray-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestingProcess;

