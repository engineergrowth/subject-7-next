
import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Zap, Users, Settings } from "lucide-react";

const showcaseItems = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "No-Code Revolution",
    description: "Empower your entire team to create comprehensive test suites without any programming knowledge.",
    image: "/dashboard.webp",
    badges: ["Codeless", "Drag & Drop", "Visual Editor"]
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Lightning Fast Execution",
    description: "Parallel test execution across multiple environments with real-time reporting and instant feedback.",
    image: "/dash.png",
    badges: ["Parallel", "Real-time", "Cloud Scale"]
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Enterprise Security",
    description: "Bank-level security with role-based access, encrypted test data, and compliance reporting.",
    image: "/z.webp",
    badges: ["SOC 2", "GDPR", "HIPAA"]
  }
];

const TestingShowcase = () => {
  return (
    <section className="bg-gray-900 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-6">
            See Subject7 in Action
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the power of unified test automation through our intuitive interface
          </p>
        </div>

        <div className="space-y-16">
          {showcaseItems.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-12`}
            >
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center space-x-3 p-3 bg-gray-800/50 rounded-2xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                    {React.cloneElement(item.icon, { className: "text-white" })}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                </div>
                
                <p className="text-xl text-gray-300 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {item.badges.map((badge, badgeIndex) => (
                    <Badge
                      key={badgeIndex}
                      variant="outline"
                      className="border-purple-500/50 text-purple-300 bg-purple-500/10"
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex-1">
                <Card className="bg-gray-800/50 border-gray-700 p-2 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestingShowcase;
