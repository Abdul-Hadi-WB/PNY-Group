"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
   useEffect(() => {
      // Initialize AOS with smooth settings
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: false,
        mirror: true,
        offset: 120,
        delay: 100,
        anchorPlacement: 'top-bottom',
      });
  
      // Refresh AOS on window resize
      const handleResize = () => {
        AOS.refresh();
      };
      
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  return (
    <div>
  {/* ==================== WHO WE ARE SECTION ==================== */}
      <section className="py-20 px-4 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-r from-[#3da9ec]/10 to-[#ff6b6b]/10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3da9ec]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#ff6b6b]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Section Title */}
          <div 
            data-aos="fade-down"
            data-aos-duration="800"
            className="text-center mb-12 relative"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block">
              WHO WE ARE?
              <div className="absolute -bottom-2 left-0 w-full flex">
                <div className="w-1/2 h-1 bg-[#3da9ec]"></div>
                <div className="w-1/2 h-1 bg-[#ff6b6b]"></div>
              </div>
              <div className="absolute -left-4 top-1/2 w-2 h-2 bg-[#3da9ec] rounded-full"></div>
              <div className="absolute -right-4 top-1/2 w-2 h-2 bg-[#ff6b6b] rounded-full"></div>
            </h2>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left Side */}
            <div 
              data-aos="fade-right"
              data-aos-duration="1000"
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#3da9ec] to-[#ff6b6b] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="bg-white p-8 shadow-xl relative overflow-hidden border border-gray-200">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#3da9ec]/10"></div>
                <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-[#ff6b6b]/10"></div>
                
                <div className="relative">
                  <div className="text-8xl font-serif text-[#3da9ec]/20 leading-none">"</div>
                  <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed -mt-8 relative z-10">
                    explore! PNY Adventure let young youth to travel in affordable rates and packages
                  </p>
                  
                  <div className="mt-6 flex items-center gap-3">
                    <div className="w-1 h-12 bg-gradient-to-b from-[#3da9ec] to-[#ff6b6b]"></div>
                    <div>
                      <p className="font-semibold text-gray-900">PNY Adventure</p>
                      <p className="text-sm text-gray-500">Travel & Exploration</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div 
              data-aos="fade-left"
              data-aos-duration="1000"
              className="space-y-6"
            >
              <div className="bg-white p-8 shadow-xl border border-gray-200">
                <p className="text-gray-600 text-lg leading-relaxed">
                  We are a <span className="font-semibold text-[#3da9ec]">leading group of companies</span>{" "}
                  providing various services on the go!
                </p>
              </div>

              <div className="bg-white p-8 shadow-xl relative overflow-hidden border border-gray-200">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#3da9ec]/20 to-transparent"></div>
                
                <p className="text-gray-600 leading-relaxed relative z-10">
                  <span className="font-bold text-gray-900">PNY Group</span> is a bunch of companies that includes 
                  PNY Trainings institute, PNY Pink, PNY Adventure, PNY Conference, PITAA, Eraflip, 
                  PNY Advertising Company and PNY Genius. The main motive of our companies is to 
                  empower the youth and to improve the Pakistan economy.
                </p>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-gray-600 italic">
                    "From courses to internships the PNY Group covered it all, and our staff is highly 
                    professional and have a great work ethic."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div 
              data-aos="zoom-in"
              data-aos-delay="100"
              className="relative group p-6 hover:shadow-lg transition-all duration-300 border-2 border-[#3da9ec] rounded-2xl" 
              style={{ background: 'linear-gradient(135deg, #e6f0fa 0%, #d4e6f5 100%)' }}
            >
              <div className="text-3xl md:text-4xl font-bold text-[#3da9ec]">8+</div>
              <div className="text-sm text-gray-600 mt-1">Companies</div>
              <div className="w-12 h-0.5 bg-[#3da9ec]/30 mt-3 group-hover:w-16 transition-all"></div>
            </div>
            
            <div 
              data-aos="zoom-in"
              data-aos-delay="200"
              className="relative group p-6 hover:shadow-lg transition-all duration-300 border-2 border-[#ff6b6b] rounded-2xl" 
              style={{ background: 'linear-gradient(135deg, #fee9e9 0%, #fddfdf 100%)' }}
            >
              <div className="text-3xl md:text-4xl font-bold text-[#ff6b6b]">1000+</div>
              <div className="text-sm text-gray-600 mt-1">Students</div>
              <div className="w-12 h-0.5 bg-[#ff6b6b]/30 mt-3 group-hover:w-16 transition-all"></div>
            </div>
            
            <div 
              data-aos="zoom-in"
              data-aos-delay="300"
              className="relative group p-6 hover:shadow-lg transition-all duration-300 border-2 border-[#4ecdc4] rounded-2xl" 
              style={{ background: 'linear-gradient(135deg, #e4f7f5 0%, #d6f0ed 100%)' }}
            >
              <div className="text-3xl md:text-4xl font-bold text-[#4ecdc4]">50+</div>
              <div className="text-sm text-gray-600 mt-1">Courses</div>
              <div className="w-12 h-0.5 bg-[#4ecdc4]/30 mt-3 group-hover:w-16 transition-all"></div>
            </div>
            
            <div 
              data-aos="zoom-in"
              data-aos-delay="400"
              className="relative group p-6 hover:shadow-lg transition-all duration-300 border-2 border-[#ffe66d] rounded-2xl" 
              style={{ background: 'linear-gradient(135deg, #fff8e0 0%, #fff3d1 100%)' }}
            >
              <div className="text-3xl md:text-4xl font-bold text-[#e6b800]">100%</div>
              <div className="text-sm text-gray-600 mt-1">Commitment</div>
              <div className="w-12 h-0.5 bg-[#ffe66d]/50 mt-3 group-hover:w-16 transition-all"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MISSION & VISION SECTION ==================== */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-40 left-0 w-72 h-72 bg-[#3da9ec]/5 blur-3xl"></div>
        <div className="absolute bottom-40 right-0 w-72 h-72 bg-[#ff6b6b]/5 blur-3xl"></div>
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Column */}
            <div 
              data-aos="flip-left"
              data-aos-duration="1000"
              className="bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#3da9ec] to-[#ff6b6b]"></div>
              <div className="relative">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 relative inline-block">
                  OUR MISSION
                  <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-[#3da9ec] to-[#ff6b6b]"></div>
                </h3>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>Our mission is to provide quality services in terms of education and business. We are not restricting us to one gender only.</p>
                  <p>However we encourage women in order to prosper as a society. We should focus on both genders equally so we can expect for the economic growth and prosperity within the country.</p>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#3da9ec]/10 to-transparent"></div>
            </div>

            {/* Vision Column */}
            <div 
              data-aos="flip-right"
              data-aos-duration="1000"
              className="bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#ff6b6b] to-[#3da9ec]"></div>
              <div className="relative">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 relative inline-block">
                  OUR VISION
                  <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-[#ff6b6b] to-[#3da9ec]"></div>
                </h3>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>Our vision is to promote youth to follow their dreams. The main motive behind the PNY Group of companies is to empower the young generation to chase their dreams because we believe in; if you can dream it, you can achieve it!</p>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-[#ff6b6b]/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
