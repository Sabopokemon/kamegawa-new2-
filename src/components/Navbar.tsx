import React from 'react';
import { Menu, X, Instagram } from 'lucide-react';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const navItems = ['ABOUT', 'ACTIVITIES', 'ORGANIZATIONS', 'CONTACT'];

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <img 
              src="https://i.imgur.com/bGJhlHi.jpg" 
              alt="Kamegawa Project Bar" 
              className="h-12
               w-auto object-contain"
            />
            <span className="ml-2 text-xl font-bold text-gray-800">亀プロ</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-teal-600 transition-colors"
              >
                {item}
              </a>
            ))}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-teal-600 transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-teal-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-2 text-gray-600 hover:text-teal-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-gray-600 hover:text-teal-600"
            >
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;