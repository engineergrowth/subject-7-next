
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const TestingHero = () => {
  return (
    <section className="relative bg-gray-950 text-white py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto text-center">
       
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-[1.1] tracking-tight mb-8">
          Total Test<br />
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Automation
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          One unified platform that empowers teams to automate web, desktop, mobile, API, and database testing — 
          all without writing a single line of code. Scale your QA operations with enterprise-grade reliability.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#5B21B6] to-[#7E22CE] hover:from-[#4C1D95] hover:to-[#6B21A8] text-white px-8 py-4 text-lg shadow-lg group"
          >
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-gray-600 text-white hover:bg-gray-800 px-8 py-4 text-lg group"
          >
            <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Watch Demo
          </Button>
        </div>

        {/* Stats Preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-purple-400">90%</div>
            <div className="text-gray-400 text-sm">Faster Test Creation</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-400">500+</div>
            <div className="text-gray-400 text-sm">Enterprise Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-400">99.9%</div>
            <div className="text-gray-400 text-sm">Platform Uptime</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-pink-400">24/7</div>
            <div className="text-gray-400 text-sm">Expert Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestingHero;
