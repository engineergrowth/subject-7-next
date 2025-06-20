
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MessageCircle, Download } from "lucide-react";

const TestingCTA = () => {
  return (
    <section className="bg-gray-900 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to Transform Your Testing?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join hundreds of organizations that have revolutionized their QA processes with Subject7
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800 transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Book a Demo</h3>
              <p className="text-gray-300 mb-6">
                See Subject7 in action with a personalized walkthrough of our platform
              </p>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Schedule Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800 transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Start Free Trial</h3>
              <p className="text-gray-300 mb-6">
                Get started immediately with our 30-day free trial - no credit card required
              </p>
              <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                Try for Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800 transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Download className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Download Brochure</h3>
              <p className="text-gray-300 mb-6">
                Learn more about our enterprise features and implementation process
              </p>
              <Button variant="outline" className="w-full border-gray-600 text-white hover:bg-gray-700">
                Get Brochure
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border-purple-500/20 p-12 text-center">
          <CardContent className="p-0">
            <h3 className="text-3xl font-bold text-white mb-4">
              "Subject7 reduced our testing time by 85% while improving coverage"
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              — Enterprise Customer, Fortune 500 Company
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#5B21B6] to-[#7E22CE] hover:from-[#4C1D95] hover:to-[#6B21A8] text-white px-8 py-4 text-lg"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-white hover:bg-gray-800 px-8 py-4 text-lg"
              >
                Contact Sales
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TestingCTA;
