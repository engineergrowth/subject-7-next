import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Product", href: "/product" },
{ name: "About", href: "/about" },
{ name: "Contact", href: "/contact" },
{ name: "Book Demo", href: "/contact" },
  ];

return (
  <nav className="fixed top-0 left-0 right-0 bg-gray-950/95 backdrop-blur-md border-b border-gray-700/50 z-50 shadow-lg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center space-x-3 flex-shrink-0">
          <Link href="/" className="transition-transform hover:scale-105 duration-300">
            <img src="/logo.png" alt="Subject7 Logo" className="h-8 sm:h-10 w-auto" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
          {navItems.slice(0, -1).map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="text-base font-medium text-gray-100 hover:text-purple-700 transition-colors duration-300 relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-700 to-purple-800 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}

          {/* Book Demo Button (Desktop) */}
          <Link
            href="https://calendly.com/d/csyv-3fx-d89/new-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-700 to-purple-800 hover:from-purple-600 hover:to-purple-700 text-white px-6 py-2.5 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Book Demo
          </Link>
        </div>

        {/* Customer Login */}
        <div className="hidden md:block flex-shrink-0">
          <a
            href="https://platform.subject7.com/"
            className="text-base font-medium text-gray-300 hover:text-purple-700 transition-colors duration-300 border-l border-gray-700 pl-6 whitespace-nowrap"
            target="_blank"
            rel="noopener noreferrer"
          >
            Customer Login →
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex-shrink-0">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-purple-700 transition-colors p-2 -mr-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-700/50 pt-6 pb-6 bg-gray-950/95 backdrop-blur-md space-y-4">
          {navItems.slice(0, -1).map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block text-base font-medium text-gray-100 hover:text-purple-700 py-2 transition-colors duration-300 w-full"
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile Book Demo Button */}
          <Link
            href="https://calendly.com/d/csyv-3fx-d89/new-meeting"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="block bg-gradient-to-r from-purple-700 to-purple-800 hover:from-purple-600 hover:to-purple-700 text-white py-3 rounded-xl font-semibold text-base shadow-lg text-center transition-all duration-300 w-full"
          >
            Book Demo
          </Link>

          {/* Mobile Customer Login */}
          <div className="border-t border-gray-700/50 pt-4 mt-4">
            <a
              href="https://platform.subject7.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-base font-medium text-gray-300 hover:text-purple-700 py-2 transition-colors duration-300 w-full"
            >
              Customer Login →
            </a>
          </div>
        </div>
      )}
    </div>
  </nav>
);
};

export default Navigation;
