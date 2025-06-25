import { Card, CardContent } from "@/components/ui/card";
import { FaGithub, FaSlack, FaJenkins, FaGitlab, FaBitbucket, FaMicrosoft } from "react-icons/fa";
import { SiJira } from "react-icons/si";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap, Link as LinkIcon } from "lucide-react";
import React from 'react';

const Integrations = () => {
  const integrations = [
    { name: "Jira", icon: SiJira, color: "from-blue-600 to-blue-700" },
    { name: "GitHub", icon: FaGithub, color: "from-gray-700 to-gray-800" },
    { name: "Jenkins", icon: FaJenkins, color: "from-red-600 to-red-700" },
    { name: "GitLab", icon: FaGitlab, color: "from-orange-600 to-orange-700" },
    { name: "Slack", icon: FaSlack, color: "from-green-600 to-green-700" },
    { name: "Azure", icon: FaMicrosoft, color: "from-blue-500 to-blue-600" },
    { name: "Bitbucket", icon: FaBitbucket, color: "from-blue-700 to-blue-800" },
  ];

  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "One-Click Setup",
      description: "Connect your tools in minutes, not hours"
    },
    {
      icon: <LinkIcon className="h-6 w-6" />,
      title: "Seamless Workflow",
      description: "Tests run automatically in your CI/CD pipeline"
    },
    {
      icon: <ArrowRight className="h-6 w-6" />,
      title: "Real-time Updates",
      description: "Get instant notifications in Slack, Jira, and more"
    }
  ];

  return (
    <section id="integrations" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-6">
            Seamless Integration
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect Subject7 to your existing tools and workflows. No disruption, just enhanced productivity.
          </p>
        </motion.div>

        {/* Integration Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 mb-20">
          {integrations.map((integration, index) => {
            const Icon = integration.icon;
            return (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 150,
                  damping: 15
                }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group"
              >
                <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <CardContent className="p-6 text-center">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-br ${integration.color} rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      whileHover={{ rotate: 5 }}
                    >
                      <Icon className="text-white" size={28} />
                    </motion.div>
                    <p className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors duration-300">
                      {integration.name}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center group"
            >
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1 + 0.3,
                  type: "spring",
                  stiffness: 150,
                  damping: 15
                }}
                viewport={{ once: true }}
                className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg"
              >
                {React.cloneElement(feature.icon, { className: "text-white" })}
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-3xl p-12 max-w-4xl mx-auto shadow-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-6">
                Ready to Transform Your Testing?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Discover how Subject7 automates testing so you can ship faster with confidence.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="https://calendly.com/d/csyv-3fx-d89/new-meeting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-4 px-8 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 group"
                  >
                    Schedule a Demo
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="bg-gray-800/50 border border-gray-600 hover:border-purple-500 text-white py-4 px-8 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
                  >
                    Get in Touch
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Integrations;
