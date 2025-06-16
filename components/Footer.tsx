import Link from "next/link";
import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const mainLinks = [
    { label: "Home", href: "/" },
    { label: "Testing", href: "/testing" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top section */}
        <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between gap-12 text-center md:text-left">
          {/* Logo + Info */}
          <div className="flex flex-col items-center md:items-start space-y-4 max-w-xs">
            <img
              src="/logo.png"
              alt="Subject7 Logo"
              className="h-10 w-auto"
            />
            <div className="text-gray-400 text-sm space-y-1 text-center md:text-left">
              <p>1 E Chase St #1014</p>
              <p>Baltimore, MD 21202</p>
              <p>info@subject7.com</p>
            </div>
          </div>

          {/* Main Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-semibold mb-4">Main Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              {mainLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:text-white transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom line */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>© 2025 Subject7, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
