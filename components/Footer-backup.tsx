import Link from "next/link";
import { Shield, ShieldCheck, Lock, Mail, MapPin, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const mainLinks = [
    { label: "Home", href: "/" },
    { label: "Product", href: "/product" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Security", href: "/security" },
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
        
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
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
                <MapPin className="h-4 w-4 text-purple-400" />
                <span>Baltimore, MD 21202</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-purple-400" />
                <a href="mailto:info@subject7.com" className="hover:text-white transition-colors">
                  info@subject7.com
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Navigation</h3>
            <ul className="space-y-3">
              {mainLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-white font-medium mb-4 text-sm">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Compliance Badges */}
          <div>
            <h3 className="text-white font-semibold mb-6">Security & Compliance</h3>
            <div className="space-y-4">
              {complianceItems.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className="p-2 rounded-lg bg-gray-800/30 border border-gray-700/50">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">{item.name}</div>
                    <div className="text-gray-400 text-xs">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Subject7, LLC. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-xs text-gray-500">
              <span>Enterprise Test Automation</span>
              <span>•</span>
              <span>Trusted Worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;