import React from "react";
import {
  Globe,
  Network,
  Database,
  GaugeCircle,
  AppWindow,
  Smartphone,
  // Eye,
  // Lock
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: <Globe size={28} />,
    title: "Web Testing",
    desc: "Web Testing: Every page. Every click. Flawless, every time.",
    points: ["Smart XPath", "Record & Play", "Cross-browser"]
  },
  {
    icon: <Network size={28} />,
    title: "API Testing",
    desc: "Endpoints verfied. Data validated.",
    points: ["REST & SOAP", "OAuth 2.0", "JSON/XML"]
  },
  {
    icon: <Database size={28} />,
    title: "Database Testing",
    desc: "Integrity intact. Queries exact.",
    points: ["MY_SQL", "Oracle", "PostgreSQL & More"]
  },
  {
    icon: <GaugeCircle size={28} />,
    title: "Performance Testing",
    desc: "Peak load. Peak performance.",
    points: ["Cloud scalability", "Run 1000's of sessions"]
  },
  {
    icon: <AppWindow size={28} />,
    title: "Desktop Testing",
    desc: "Pixel Perfect. Zero downtime.",
    points: ["Image/text recognition", "Legacy support"]
  },
  {
    icon: <Smartphone size={28} />,
    title: "Mobile Testing",
    desc: "Every device, every gesture.",
    points: ["Real devices & emulators", "No scripting"]

    // TODO: figure these out with the team.
  // },
  // {
  //   icon: <Lock size={28} />,
  //   title: "Security Testing",  
  //   desc: "Automate security checks and vulnerability scans.",
  //   points: ["1", "2"]
  // },
  // {
  //   icon: <Eye size={28} />,
  //   title: "Accessibility",
  //   desc: "Run 508 compliance checks and reports.",
  //   points: ["CI/CD ready", "Automated scans"]
  // }
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
