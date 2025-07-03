import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Play } from "lucide-react";

const ProductCTA = () => {
  return (
    <section className="bg-gray-900/30 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">


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
          <Card className="bg-gray-900/80 border-gray-700 hover:border-purple-500/50 transition-all duration-500 mb-16">
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
                Ready To See More?
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
                Book a demo and we'll walk you through it.
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
                  className="bg-gradient-to-r from-purple-700 to-purple-800 hover:from-purple-600 hover:to-purple-700 text-white px-12 py-6 text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
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
          <Card className="bg-gray-900/60 border-purple-500/20 p-8 text-center">
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
                  <div className="w-12 h-12 rounded-full border-2 border-gray-800 bg-gradient-to-r from-purple-700 to-purple-800"></div>
                  <div className="w-12 h-12 rounded-full border-2 border-gray-800 bg-gradient-to-r from-purple-700 to-purple-800"></div>
                  <div className="w-12 h-12 rounded-full border-2 border-gray-800" style={{backgroundColor: '#FD7855'}}></div>
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
                "It came down to ease of use, enabling individuals to do their own automation almost exclusively. We’re not super technical and they didn’t have programming skills.
We did some piloting using both tools but testers had an easier time using Subject7 than QuicktestPro."
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
                — NIH
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCTA;
