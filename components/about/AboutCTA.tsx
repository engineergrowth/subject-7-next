import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutCTA = () => {
  return (
    <section className="bg-gray-900/30 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Ready to See Subject7 in Action?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
        >
          Book a personalized demo and discover how Subject7 can accelerate your testing, improve quality, and empower your team.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 150, damping: 15 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Button
            size="lg"
            asChild
            className="bg-purple-800 hover:bg-purple-700 text-white px-12 py-6 text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <a href="https://calendly.com/d/csyv-3fx-d89/new-meeting" target="_blank" rel="noopener noreferrer">
              <Calendar className="mr-3 h-6 w-6" />
              Book a Demo
              <ArrowRight className="ml-3 h-6 w-6" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCTA; 