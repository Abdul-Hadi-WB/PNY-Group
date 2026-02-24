"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#3da9ec] text-white mt-5">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div>
            {/* White box around logo */}
            <div className="bg-white p-4 rounded-lg inline-block mb-4">
              <img 
                src="/images/PNY-GROUP-OF-COMPANIES-logo-1-300x160.png" 
                alt="PNY Logo" 
                className="h-20 w-auto"
              />
            </div>
            <p className="text-white mb-4">
              Leading technology and development solutions provider.
            </p>
            <div className="text-white">
              <p>Email: info@pnygroup.co</p>
              <p>Phone: +92 304 1111774</p>
            </div>
          </div>

          {/* Links - with hover effects */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="text-white hover:text-white hover:bg-white/10 px-2 py-1 rounded transition-all duration-300 inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about-us" 
                  className="text-white hover:text-white hover:bg-white/10 px-2 py-1 rounded transition-all duration-300 inline-block"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/company" 
                  className="text-white hover:text-white hover:bg-white/10 px-2 py-1 rounded transition-all duration-300 inline-block"
                >
                  Company Profile
                </Link>
              </li>
              <li>
                <Link 
                  href="/gallery" 
                  className="text-white hover:text-white hover:bg-white/10 px-2 py-1 rounded transition-all duration-300 inline-block"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-white hover:text-white hover:bg-white/10 px-2 py-1 rounded transition-all duration-300 inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <p className="text-white/80 mb-6">Connect with us on social media</p>
            
            <div className="flex flex-wrap gap-4">
              {/* Facebook */}
              <a 
                href="https://www.facebook.com/pnygroup.co/"
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-[#1877f2] transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/pny.group/?hl=en"
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-gradient-to-r hover:from-[#f09b4a] hover:via-[#d9317a] hover:to-[#833ab4] transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              
              {/* YouTube */}
              <a 
                href="https://www.youtube.com/channel/UCdkE8Zm_dNclx3B7s-t6pBQ"
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-[#ff0000] transition-all duration-300 transform hover:scale-110"
                aria-label="YouTube"
              >
                <FaYoutube className="w-6 h-6" />
              </a>
              
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/company/pny-trainings/?originalSubdomain=pk"
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-[#0a66c2] transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              
              {/* Twitter/X - PNY Trainings Link */}
              <a 
                href="https://x.com/PnyTrainings"
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-black transition-all duration-300 transform hover:scale-110"
                aria-label="Twitter"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
            </div>
            
            <p className="text-white/60 text-sm mt-6">
              Stay updated with our latest news and offers
            </p>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="w-full bg-gray-100 py-4">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-gray-600 text-xs">
              Copyright © 2026 By PNY Group. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;