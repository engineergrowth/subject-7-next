
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Play } from "lucide-react";

const ProductCTA = () => {
  return (
    <section className="bg-gray-900 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to See Subject7 in Action?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Book a demo and we'll walk you through it
          </p>
        </div>

        {/* Main Demo CTA Card */}
        <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700 hover:border-purple-500/50 transition-all duration-500 mb-16">
          <CardContent className="p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-6">
              See How Subject7 Can Transform Your Testing
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Get a personalized walkthrough of our platform and discover how we can streamline your QA processes, 
              reduce testing time, and improve coverage across your applications.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-12 py-6 text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Calendar className="mr-3 h-6 w-6" />
              Book a Demo
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </CardContent>
        </Card>

        {/* Testimonial Section */}
        <Card className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border-purple-500/20 p-8 text-center">
          <CardContent className="p-0">
            <div className="flex items-center justify-center mb-6">
              <div className="flex -space-x-2">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full border-2 border-gray-800"></div>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full border-2 border-gray-800"></div>
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full border-2 border-gray-800"></div>
              </div>
            </div>
            <blockquote className="text-2xl font-medium text-white mb-4 italic">
              "Subject7 reduced our testing time by 85% while improving coverage"
            </blockquote>
            <p className="text-lg text-gray-300">
              — Enterprise Customer
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProductCTA;
