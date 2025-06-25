import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Play } from "lucide-react";

const ProductCTA = () => {
  return (
    <section className="bg-gray-900/30 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-6">
            Ready to See Subject7 in Action?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Book a demo and we'll walk you through it
          </p>
        </motion.div>

        {/* Main Demo CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-purple-500/50 transition-all duration-500 mb-16">
            <CardContent className="p-12 text-center">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-white mb-6"
              >
                See How Subject7 Can Transform Your Testing
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true }}
                className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
              >
                Get a personalized walkthrough of our platform and discover how we can streamline your QA processes, 
                reduce testing time, and improve coverage across your applications.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.8,
                  type: "spring",
                  stiffness: 150,
                  damping: 15
                }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <Button 
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-12 py-6 text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <a href="https://calendly.com/d/csyv-3fx-d89/new-meeting" target="_blank" rel="noopener noreferrer">
                    <Calendar className="mr-3 h-6 w-6" />
                    Book a Demo
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </a>
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Testimonial Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Card className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border-purple-500/20 p-8 text-center">
            <CardContent className="p-0">
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.6,
                  type: "spring",
                  stiffness: 150,
                  damping: 15
                }}
                viewport={{ once: true }}
                className="flex items-center justify-center mb-6"
              >
                <div className="flex -space-x-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full border-2 border-gray-800"></div>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full border-2 border-gray-800"></div>
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full border-2 border-gray-800"></div>
                </div>
              </motion.div>
              <motion.blockquote 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true }}
                className="text-2xl font-medium text-white mb-4 italic"
              >
                "Subject7 reduced our testing time by 85% while improving coverage"
              </motion.blockquote>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1.0,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true }}
                className="text-lg text-gray-300"
              >
                — Enterprise Customer
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCTA;
