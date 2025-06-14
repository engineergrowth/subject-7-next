import React from "react";
import {
  Globe,
  Network,
  Database,
  GaugeCircle,
  AppWindow,
  Smartphone,
  Eye
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: <Globe size={28} />,
    title: "Web Testing",
    desc: "Create robust tests without writing code, using smart XPath and resilient locators.",
    points: [
      "True codeless test authoring",
      "Smart XPath with Record & Play",
      "Cross-browser ready",
      "Built on Selenium without the complexity"
    ]
  },
  {
    icon: <AppWindow size={28} />,
    title: "Desktop Testing",
    desc: "Automate thick client and legacy desktop apps using image recognition and OCR.",
    points: [
      "Works with modern and legacy Windows apps",
      "Image recognition & OCR powered by SikuliX",
      "No-code automation for desktop environments"
    ]
  },
  {
    icon: <Smartphone size={28} />,
    title: "Mobile Testing",
    desc: "Test native and hybrid apps on emulators or real devices, at scale.",
    points: [
      "Supports Android & iOS emulators",
      "Cloud-scale parallel execution",
      "Real device compatibility",
      "Powered by Appium without the hassle"
    ]
  },
  {
    icon: <Network size={28} />,
    title: "API Testing",
    desc: "Easily test REST and SOAP web services with variable creation and validation.",
    points: [
      "Test REST & SOAP endpoints",
      "Validate JSON & XML responses",
      "Use API calls to define dynamic test variables"
    ]
  },
  {
    icon: <Database size={28} />,
    title: "Database Testing",
    desc: "Validate backend data or build data-driven tests using your existing databases.",
    points: [
      "Works with major SQL/NoSQL systems",
      "Read, verify, or inject test data",
      "Supports Excel-driven workflows"
    ]
  },
  {
    icon: <GaugeCircle size={28} />,
    title: "Load Testing",
    desc: "Scale test coverage from functional to thousands of virtual users — no extra tools.",
    points: [
      "Reuse functional tests for load scenarios",
      "REST, headless, or real browser support",
      "Scales to tens of thousands of virtual users",
      "Built on JMeter without the overhead"
    ]
  },
  {
    icon: <Eye size={28} />,
    title: "Accessibility Testing",
    desc: "Ensure compliance by reusing your existing functional tests for accessibility scans.",
    points: [
      "508 compliance checks baked in",
      "Compare changes sprint-to-sprint",
      "Advanced accessibility coming soon"
    ]
  }
];


const Testing = () => (
  <section className="bg-gray-950 text-white py-20 px-4 sm:px-6 lg:px-8 mt-8 mb-16">
    <div className="max-w-6xl mx-auto">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-snug tracking-tight sm:leading-[1.2] md:leading-[1.25] pb-2">
          One Platform.<br />
          Total Test Coverage.
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mt-6 max-w-3xl mx-auto">
          Subject7 empowers teams to automate web, desktop, mobile, API, and database testing — all in one unified interface.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:bg-gray-800 transition group"
          >
            <div className="mb-4 flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center">
                {React.cloneElement(f.icon, { className: "text-white", size: 24 })}
              </div>
              <h3 className="text-xl font-semibold">{f.title}</h3>
            </div>
            <p className="text-gray-400 mb-3">{f.desc}</p>
            <ul className="text-sm text-gray-500 list-disc pl-5 space-y-1">
              {f.points.map((pt, j) => (
                <li key={j}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* CTA Block */}
      <div className="text-center mt-20">
        <Card className="bg-gray-800/50 border-gray-700 p-8 max-w-3xl mx-auto">
          <CardContent className="p-0">
            <h3 className="text-xl font-bold text-white mb-4">
              Ready to see how this all works in action? We’ll walk you through it.
            </h3>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#5B21B6] to-[#7E22CE] hover:from-[#4C1D95] hover:to-[#6B21A8] text-white px-8 py-4 text-lg shadow-lg"
            >
              Book a Live Demo
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

export default Testing;
