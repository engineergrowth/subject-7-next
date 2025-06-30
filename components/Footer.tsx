import Link from "next/link";
import { Shield, ShieldCheck, Lock, Mail, MapPin, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const XLogo = () => (
  <svg 
    viewBox="0 0 24 24" 
    className="h-5 w-5 fill-current"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const Footer = () => {
  const mainLinks = [
    { label: "Home", href: "/" },
    { label: "Product", href: "/product" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy" },
  ];

  const complianceItems = [
    {
      name: "SOC 2",
      description: "Type II Compliant",
      icon: <ShieldCheck className="h-6 w-6 text-blue-400" />
    },
    {
      name: "GDPR",
      description: "EU Compliant",
      icon: <Shield className="h-6 w-6 text-green-400" />
    },
    {
      name: "HIPAA",
      description: "Healthcare Ready",
      icon: <Lock className="h-6 w-6 text-purple-400" />
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-950 to-black border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="inline-block mb-6">
              <img
                src="/logo.png"
                alt="Subject7 Logo"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Enterprise-grade test automation platform trusted by teams worldwide to deliver quality software faster.
            </p>
            <div className="space-y-2 text-gray-400 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-purple-700" />
                <span>Baltimore, MD 21202</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-purple-700" />
                <a href="mailto:info@subject7.com" className="hover:text-white transition-colors">
                  info@subject7.com
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-6">Navigation</h3>
            <ul className="space-y-3">
              {mainLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-medium mb-4 text-sm">Follow Us</h4>
              <div className="flex space-x-4">
                <motion.a 
                  href="https://www.linkedin.com/company/subject7" 
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                  aria-label="LinkedIn"
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
                <motion.a 
                  href="https://x.com/subject_7" 
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                  aria-label="X"
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <XLogo />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-white font-semibold mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Security & Compliance
            </motion.h3>
            <div className="space-y-4">
              {complianceItems.map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300"
                  initial={{ opacity: 0, x: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.5 + index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div 
                    className="p-2 rounded-lg bg-gray-800/30 border border-gray-700/50"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <div className="text-white font-medium text-sm">{item.name}</div>
                    <div className="text-gray-400 text-xs">{item.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-gray-800/50 py-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p 
              className="text-gray-400 text-sm"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true }}
            >
              © 2025 Subject7, LLC. All rights reserved.
            </motion.p>
            <motion.div 
              className="flex items-center space-x-6 text-xs text-gray-500"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <span>Enterprise Test Automation</span>
              <span>•</span>
              <span>Trusted Worldwide</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;