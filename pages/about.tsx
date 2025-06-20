
"use client";

import { motion } from "framer-motion";
import { Users, Target, Trophy, Zap, Building, Globe, Shield, Award } from "lucide-react";

const About = () => {
  const stats = [
    { value: "2011", label: "Founded" },
    { value: "10M+", label: "Test Runs" },
    { value: "95%", label: "Customer Satisfaction"},
    { value: "99.9%", label: "Uptime" }
  ];

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Every feature we build solves real testing pain points experienced by our own team and customers."
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Built for government and enterprise with the highest security standards and compliance requirements."
    },
    {
      icon: Zap,
      title: "Innovation Focus",
      description: "Constantly pushing the boundaries of what's possible in test automation and developer productivity."
    },
    {
      icon: Users,
      title: "Customer Obsessed",
      description: "Our roadmap is driven by real customer feedback and the challenges they face every day."
    }
  ];

  const milestones = [
    {
      year: "2011",
      title: "The Beginning",
      description: "Founded by senior engineers in Maryland who were frustrated with existing testing tools that were slow, brittle, and overly complex."
    },
    {
      year: "2020",
      title: "Government Trust",
      description: "Achieved first major government contracts with FDA and Department of Education, establishing our reputation for security and reliability."
    },
    {
      year: "2022",
      title: "Enterprise Scale",
      description: "Reached 10M+ test runs annually, supporting some of the world's most demanding testing environments across Fortune 500 companies."
    },
    {
      year: "2024",
      title: "Global Impact",
      description: "Now trusted by enterprise clients worldwide, from government agencies to global corporations, powering mission-critical applications."
    }
  ];

  return (
    <div className="bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight mb-8"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Built by Testers.
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Trusted by the Enterprise.
            </motion.span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Subject7 was born from real frustration with brittle, slow, and overly technical automation tools. 
            Since day one, our mission has been simple: make testing fast, scalable, and accessible to everyone.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From a small team's frustration to powering enterprise testing worldwide
            </p>
          </div>

          {/* Timeline Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative group"
              >
                {/* Timeline connector line */}
                {index < milestones.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-purple-600 to-transparent z-10" />
                )}
                
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-500 group-hover:transform group-hover:scale-105 h-full">
                  {/* Year Badge */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.2 + 0.3,
                      type: "spring",
                      stiffness: 200
                    }}
                    viewport={{ once: true }}
                    className="relative mb-6"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/25">
                      <span className="text-white font-bold text-lg">{milestone.year}</span>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-75 animate-pulse" />
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.2 + 0.5 
                    }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl font-bold mb-4 text-center group-hover:text-purple-300 transition-colors duration-300">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed text-center">
                      {milestone.description}
                    </p>
                  </motion.div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full opacity-50" />
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-blue-400 rounded-full opacity-50" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Progress indicator */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 rounded-full mx-auto max-w-2xl origin-left"
          />
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
            className="text-center text-gray-400 mt-8 text-lg"
          >
            14+ years of innovation and counting...
          </motion.p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-6">
              What Drives Us
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our core values guide every decision and every line of code we write
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2 + 0.3,
                    type: "spring",
                    stiffness: 150,
                    damping: 15
                  }}
                  className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center mb-6"
                >
                  <value.icon className="text-white" size={28} />
                </motion.div>
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2 + 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="text-2xl font-semibold mb-4"
                >
                  {value.title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2 + 0.7,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="text-gray-300 leading-relaxed"
                >
                  {value.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-6">
              Leadership
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:w-1/3"
            >
              <div className="relative">
                <img
                  src="/z.webp"
                  alt="CEO"
                  className="w-64 h-64 rounded-2xl object-cover border-4 border-gradient-to-r from-purple-600 to-blue-600"
                />
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                  <Award className="text-white" size={24} />
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:w-2/3"
            >
              <blockquote className="text-2xl text-gray-300 italic mb-8 leading-relaxed">
                "Everything we build at Subject7 is driven by two things: customer feedback and real-world reliability. 
                My job is making sure we stay ahead without ever losing sight of what our users need."
              </blockquote>
              <div className="mb-6">
                <cite className="text-xl font-semibold text-white not-italic">
                  Kezia Braithwaite
                </cite>
                <p className="text-purple-400 text-lg">CEO & Co-Founder, Subject7</p>
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                <Building size={20} />
                <span>Leading 30+ engineers across 3 continents</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Testing?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Take the first step in joining teams who trust Subject7 to power their test automation.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            Schedule a Demo
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;