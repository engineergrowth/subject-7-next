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
    icon: Globe,
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
    icon: AppWindow,
    title: "Desktop Testing",
    desc: "Automate thick client and legacy desktop apps using image recognition and OCR.",
    points: [
      "Works with modern and legacy Windows apps",
      "Image recognition & OCR powered by SikuliX",
      "No-code automation for desktop environments"
    ]
  },
  {
    icon: Smartphone,
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
    icon: Network,
    title: "API Testing",
    desc: "Easily test REST and SOAP web services with variable creation and validation.",
    points: [
      "Test REST & SOAP endpoints",
      "Validate JSON & XML responses",
      "Use API calls to define dynamic test variables"
    ]
  },
  {
    icon: Database,
    title: "Database Testing",
    desc: "Validate backend data or build data-driven tests using your existing databases.",
    points: [
      "Works with major SQL/NoSQL systems",
      "Read, verify, or inject test data",
      "Supports Excel-driven workflows"
    ]
  },
  {
    icon: GaugeCircle,
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
    icon: Eye,
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
  <section className="bg-gray-950 text-white py-24 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto text-center">
      <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight mb-6">
        Total Test Coverage.
      </h1>
      <p className="text-xl text-gray-400 max-w-3xl mx-auto">
        Subject7 supports every layer of your QA strategy — from browser to backend and everything in between.
      </p>
    </div>

    <div className="max-w-7xl mx-auto mt-24 space-y-16">
      {features.map((f, i) => (
        <div
          key={i}
          className={`flex flex-col-reverse md:flex-row items-center md:items-start gap-10 ${
            i % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Icon & Title Block */}
          <div className="flex-shrink-0 w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center mb-4">
              <f.icon className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-400">{f.desc}</p>
          </div>

          {/* Bullet Points */}
          <div className="w-full md:w-2/3 bg-gray-900/50 p-6 rounded-xl border border-gray-800 shadow-lg">
            <ul className="text-sm text-gray-400 space-y-2 list-disc pl-6">
              {f.points.map((pt, j) => (
                <li key={j}>{pt}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>

    <div className="text-center mt-28">
      <Card className="bg-gray-900 border border-gray-700 p-10 max-w-3xl mx-auto shadow-xl">
        <CardContent className="p-0">
          <h3 className="text-2xl font-semibold text-white mb-6">
            Want to see how it works together in real time?
          </h3>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 text-lg shadow-lg"
          >
            Book a Live Demo
          </Button>
        </CardContent>
      </Card>
    </div>
  </section>
);

export default Testing;
