import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Testing", href: "/testing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Book Demo", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-[#0c0c12] border-b border-gray-800 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link href="/">
              <img src="/logo.png" alt="Subject7 Logo" className="h-10 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className={`text-base font-semibold px-3 py-2 transition ${
                  item.name === "Book Demo"
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg shadow hover:from-purple-700 hover:to-indigo-700"
                    : "text-gray-100 hover:text-purple-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Login Button */}
          <div className="px-3 pt-1">
            <a
              href="https://platform.subject7.com/"
              className="text-sm text-purple-600 hover:text-purple-100 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Customer Login
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-purple-400 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-800 pt-4 pb-6 bg-[#0c0c12] space-y-3">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-base font-semibold px-4 py-2 rounded transition ${
                  item.name === "Book Demo"
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow hover:from-purple-700 hover:to-indigo-700"
                    : "text-white hover:text-purple-400"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://platform.subject7.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-purple-600 text-sm px-4 py-2 hover:text-purple-100 transition"
            >
              Customer Login
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
