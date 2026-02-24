"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    setActiveLink(pathname);
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/pnygroup", label: "PNY Group" },
    { path: "/about", label: "About" },
    { path: "/companyprofile", label: "Company Profile" },
    { path: "/gallery", label: "Gallery" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-5">
          
          {/* Logo - Left side */}
          <div className="flex-shrink-0">
            <img 
              src="/images/PNY-GROUP-OF-COMPANIES-logo-1-300x160.png" 
              alt="PNY Group Logo" 
              className="h-12 md:h-14 w-auto"
            />
          </div>

          {/* Desktop Navigation Links - Centered */}
          <div className="hidden md:flex md:items-center md:justify-center md:flex-1 md:gap-8">
            {navItems.map((item) => {
              const isActive = activeLink === item.path;
              
              return (
                <div key={item.path} className="relative group">
                  <Link 
                    href={item.path}
                    className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-300 whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                  
                  {/* Blue underline - shows on hover and when active */}
                  <div 
                    className={`absolute -bottom-1 left-0 h-[2px] bg-blue-500 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></div>
                </div>
              );
            })}
          </div>

          {/* Contact Button - Right side with bulb AFTER text */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className={`inline-block px-6 py-2.5 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg relative overflow-hidden ${
                activeLink === "/contact" ? "ring-2 ring-red-300 ring-offset-2" : ""
              }`}
            >
              {/* Text and bulb - bulb AFTER text */}
              <span className="relative inline-flex items-center gap-2">
                Contact Us
                <span className="text-yellow-300 text-lg animate-pulse">💡</span>
              </span>
              
              {/* Small glow effect behind bulb */}
              <span className="absolute right-8 top-1/2 -translate-y-1/2 w-5 h-5 bg-yellow-400/30 rounded-full blur-sm animate-pulse"></span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100 mb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2 py-4 border-t border-gray-100">
            {[...navItems, { path: "/contact", label: "Contact" }].map((item) => {
              const isActive = activeLink === item.path;
              
              return (
                <Link 
                  key={item.path}
                  href={item.path}
                  className={`relative px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-medium transition-all duration-300 rounded-lg ${
                    isActive ? (item.path === "/contact" ? "bg-red-50 text-red-600" : "bg-blue-50 text-blue-600") : ""
                  } ${item.path === "/contact" ? "border-l-4 border-red-500 pl-3" : ""}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                  {isActive && item.path !== "/contact" && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-blue-500 rounded-r-full"></div>
                  )}
                </Link>
              );
            })}
            
            {/* Mobile Contact Button with bulb AFTER text */}
            <div className="mt-2 pt-2 border-t border-gray-100">
              <Link
                href="/contact"
                className="block w-full px-4 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg text-center transition-all duration-300 relative overflow-hidden"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative inline-flex items-center justify-center gap-2">
                  Contact Us
                  <span className="text-yellow-300 text-lg animate-pulse">💡</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;