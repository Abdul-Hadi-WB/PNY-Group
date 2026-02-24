"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PNYGroup = () => {
  // All Images Array
const allImages = [
    { 
      img: "/images/235146443_1714244258779215_7609558304785368671_n-1.png", 
      alt: "PNY Trainings 1",
      title: "PNY Training Institute",
      description: "PNY Training is an IT based institute which leads the students to get the best Technical based skills and give career advantage to the youth to make it bright future in the field of Information Technology."
    },
    {
      img: "/images/79468487_101035548064743_7358534053391237120_n.png", 
      alt: "PNY Pink",
      title: "PNY Pink",
      description: "PNY Pink focuses on educating and guiding women so that they can learn to inspire as the main motive of PNY Pink is to empower women as 'behind every successful man there is a woman'"
    },
    { 
      img: "/images/erafliplogo.jpg", 
      alt: "ERAFLIP",
      title: "ERAFLIP Tech",
      description: "ERAFLIP Tech is a passionate and forward-thinking game development studio dedicated to creating immersive At ERAFLIP TECH, we craft high-quality mobile games that meet global standards."
    },
    { 
      img: "/images/167649698_140519368002775_36084529111872059_n.jpeg", 
      alt: "PNY Cyanics 1",
      title: "PNY Genius",
      description: "PNY Group of companies covered IT Courses for kids, and in which we cover every age group of kids. In this platform we offer special courses to enhance kid's capabilities and increase their productivity."
    },
    { 
      img: "/images/png-logo.png", 
      alt: "PNY Logo",
      title: "PNY Career",
      description: "PNY Careers offers Candidate the opportunity to explore diverse career paths and empower their futures in the IT sector."
    },
    { 
      img: "/images/244647644_4818582138152525_4824071509915999852_n.jpeg", 
      alt: "PNY Cyanics 2",
      title: "PNY Advertising",
      description: "PNY Advertising is an advertising company that offers various services of digital media marketing in affordable rates. The main motive behind the company is to grow small business and make an impact within society."
    },
    { 
      img: "/images/65318304_381653319154375_8905552656043343872_n (1).png", 
      alt: "PNY Trainings 2",
      title: "PITAA",
      description: "PITA is Pakistan information technology academic association, where different IT tech companies meet and exchange offers. This is a forum where different IT companies arrange different seminars and free workshops."
    },
    { 
      img: "/images/DONE.png", 
      alt: "DONE Logo",
      title: "PNY Conference",
      description: "Every year PNY Conference offers you an annual opportunity setup where you can connect and engage with industries to take your career to the next level."
    },
    { 
      img: "/images/Untitled-1.png", 
      alt: "Untitled Logo",
      title: "JANNAT Foundation",
      description: "The Jannat Foundation is one of the inspiring platforms of the PNY Group of companies that work for the betterment of society. The motive of this foundation is to foster kindness, generosity, and gratitude among the masses"
    },
    { 
      img: "/images/37790031_397327157456747_8569519220872708096_n.png", 
      alt: "PNY Trainings 3",
      title: "PNY Adventure",
      description: "PNY Adventure is all about exploring our beautiful country, Pakistan. The main goal of this venture is to motivate people to get up and explore! PNY Adventure let young youth to travel in affordable rates and packages"
    },
  ];

  // Different colours for card corners
  const cornerColors = [
    { topLeft: "#3da9ec", topRight: "#ff6b6b", bottomLeft: "#4ecdc4", bottomRight: "#ffe66d" },
    { topLeft: "#a8e6cf", topRight: "#d4a5a5", bottomLeft: "#ffaaa5", bottomRight: "#ffd3b6" },
    { topLeft: "#9b59b6", topRight: "#3498db", bottomLeft: "#e74c3c", bottomRight: "#f1c40f" },
    { topLeft: "#1abc9c", topRight: "#e67e22", bottomLeft: "#2ecc71", bottomRight: "#e74c3c" },
    { topLeft: "#34495e", topRight: "#95a5a6", bottomLeft: "#16a085", bottomRight: "#27ae60" },
    { topLeft: "#f39c12", topRight: "#d35400", bottomLeft: "#c0392b", bottomRight: "#8e44ad" },
    { topLeft: "#2980b9", topRight: "#27ae60", bottomLeft: "#f39c12", bottomRight: "#c0392b" },
    { topLeft: "#7f8c8d", topRight: "#bdc3c7", bottomLeft: "#ecf0f1", bottomRight: "#95a5a6" },
    { topLeft: "#e67e22", topRight: "#2c3e50", bottomLeft: "#d35400", bottomRight: "#7f8c8d" },
    { topLeft: "#3498db", topRight: "#9b59b6", bottomLeft: "#f1c40f", bottomRight: "#e67e22" },
  ];

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
      {/* ==================== PNY GROUP COMPANIES SECTION ==================== */}
<section className="py-16 px-4 bg-gray-50 relative overflow-hidden">
  {/* Corner Gradients */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#3da9ec]/20 via-transparent to-transparent rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#3da9ec]/20 via-transparent to-transparent rounded-full blur-3xl"></div>
  
  <div className="container mx-auto max-w-6xl relative z-10">
    {/* Section Title */}
    <div 
      data-aos="fade-up"
      data-aos-duration="1000"
      className="text-center mb-12 relative"
    >
      <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block">
        PNY GROUP OF COMPANIES
        <div className="absolute -bottom-2 left-0 w-full flex">
          <div className="w-1/2 h-1 bg-[#3da9ec]"></div>
          <div className="w-1/2 h-1 bg-[#ff6b6b]"></div>
        </div>
        <div className="absolute -left-4 top-1/2 w-2 h-2 bg-[#3da9ec] rounded-full"></div>
        <div className="absolute -right-4 top-1/2 w-2 h-2 bg-[#ff6b6b] rounded-full"></div>
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto relative">
        PNY group is a bunch of companies that includes PNY Training Institute,
        PNY pink, PNY Conference, PNY adventure, PITAA, ERaflip, PNY Genius,
        PNY advertising Company.The main motive of the PNY group of companies is to empower the youth 
        and improves country's economy.
      </p>
    </div>

    {/* Cards Grid */}
    <div className="flex flex-col gap-8">
      {/* First row - 3 images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {allImages.slice(0, 3).map((item, index) => {
          const colors = cornerColors[index % cornerColors.length];
          const links = [
            "https://www.pnytrainings.com/",
            "https://www.joinpnypink.com/",
            "https://eraflip.com/"
          ];
          return (
            <a 
              key={index}
              href={links[index]}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="800"
              className="bg-white shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 relative border border-gray-200 block cursor-pointer group"
            >
              {/* Corner Borders */}
              <div className="absolute top-0 left-0 w-8 h-[2px]" style={{ backgroundColor: colors.topLeft }}></div>
              <div className="absolute top-0 left-0 w-[2px] h-8" style={{ backgroundColor: colors.topLeft }}></div>
              <div className="absolute top-0 right-0 w-8 h-[2px]" style={{ backgroundColor: colors.topRight }}></div>
              <div className="absolute top-0 right-0 w-[2px] h-8" style={{ backgroundColor: colors.topRight }}></div>
              <div className="absolute bottom-0 left-0 w-8 h-[2px]" style={{ backgroundColor: colors.bottomLeft }}></div>
              <div className="absolute bottom-0 left-0 w-[2px] h-8" style={{ backgroundColor: colors.bottomLeft }}></div>
              <div className="absolute bottom-0 right-0 w-8 h-[2px]" style={{ backgroundColor: colors.bottomRight }}></div>
              <div className="absolute bottom-0 right-0 w-[2px] h-8" style={{ backgroundColor: colors.bottomRight }}></div>
              
              <div className="h-48 flex items-center justify-center p-4 mb-4">
                <img 
                  src={item.img} 
                  alt={item.alt} 
                  className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm text-center">
                {item.description}
              </p>
              
              {/* Visit Website Indicator */}
              <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full">
                  Visit ↗
                </span>
              </div>
            </a>
          );
        })}
      </div>

      {/* Second row - 3 images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {allImages.slice(3, 6).map((item, index) => {
          const colors = cornerColors[(index + 3) % cornerColors.length];
          const links = [
            "https://pnygenius.com/",
            "https://pnycareer.com/",
            "https://pnyadvertising.com/"
          ];
          return (
            <a 
              key={index + 3}
              href={links[index]}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="800"
              className="bg-white shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 relative border border-gray-200 block cursor-pointer group"
            >
              {/* Corner Borders */}
              <div className="absolute top-0 left-0 w-8 h-[2px]" style={{ backgroundColor: colors.topLeft }}></div>
              <div className="absolute top-0 left-0 w-[2px] h-8" style={{ backgroundColor: colors.topLeft }}></div>
              <div className="absolute top-0 right-0 w-8 h-[2px]" style={{ backgroundColor: colors.topRight }}></div>
              <div className="absolute top-0 right-0 w-[2px] h-8" style={{ backgroundColor: colors.topRight }}></div>
              <div className="absolute bottom-0 left-0 w-8 h-[2px]" style={{ backgroundColor: colors.bottomLeft }}></div>
              <div className="absolute bottom-0 left-0 w-[2px] h-8" style={{ backgroundColor: colors.bottomLeft }}></div>
              <div className="absolute bottom-0 right-0 w-8 h-[2px]" style={{ backgroundColor: colors.bottomRight }}></div>
              <div className="absolute bottom-0 right-0 w-[2px] h-8" style={{ backgroundColor: colors.bottomRight }}></div>
              
              <div className="h-48 flex items-center justify-center p-4 mb-4">
                <img 
                  src={item.img} 
                  alt={item.alt} 
                  className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm text-center">
                {item.description}
              </p>
              
              {/* Visit Website Indicator */}
              <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full">
                  Visit ↗
                </span>
              </div>
            </a>
          );
        })}
      </div>

      {/* Third row - 3 images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {allImages.slice(6, 9).map((item, index) => {
          const colors = cornerColors[(index + 6) % cornerColors.length];
          const links = [
            "https://pitaa.org.pk/",
            "https://pnyc.pk/",
            "https://jannatfoundation.pk/"
          ];
          return (
            <a 
              key={index + 6}
              href={links[index]}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="800"
              className="bg-white shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 relative border border-gray-200 block cursor-pointer group"
            >
              {/* Corner Borders */}
              <div className="absolute top-0 left-0 w-8 h-[2px]" style={{ backgroundColor: colors.topLeft }}></div>
              <div className="absolute top-0 left-0 w-[2px] h-8" style={{ backgroundColor: colors.topLeft }}></div>
              <div className="absolute top-0 right-0 w-8 h-[2px]" style={{ backgroundColor: colors.topRight }}></div>
              <div className="absolute top-0 right-0 w-[2px] h-8" style={{ backgroundColor: colors.topRight }}></div>
              <div className="absolute bottom-0 left-0 w-8 h-[2px]" style={{ backgroundColor: colors.bottomLeft }}></div>
              <div className="absolute bottom-0 left-0 w-[2px] h-8" style={{ backgroundColor: colors.bottomLeft }}></div>
              <div className="absolute bottom-0 right-0 w-8 h-[2px]" style={{ backgroundColor: colors.bottomRight }}></div>
              <div className="absolute bottom-0 right-0 w-[2px] h-8" style={{ backgroundColor: colors.bottomRight }}></div>
              
              <div className="h-48 flex items-center justify-center p-4 mb-4">
                <img 
                  src={item.img} 
                  alt={item.alt} 
                  className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm text-center">
                {item.description}
              </p>
              
              {/* Visit Website Indicator */}
              <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full">
                  Visit ↗
                </span>
              </div>
            </a>
          );
        })}
      </div>

      {/* Fourth row - 1 image (centered) */}
      <div 
        data-aos="fade-up"
        data-aos-delay="300"
        className="flex justify-center"
      >
        {allImages.slice(9, 10).map((item, index) => {
          const colors = cornerColors[9];
          return (
            <a 
              key={index + 9}
              href="https://pnyadventure.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 w-full md:w-1/3 relative border border-gray-200 block cursor-pointer group"
            >
              {/* Corner Borders */}
              <div className="absolute top-0 left-0 w-8 h-[2px]" style={{ backgroundColor: colors.topLeft }}></div>
              <div className="absolute top-0 left-0 w-[2px] h-8" style={{ backgroundColor: colors.topLeft }}></div>
              <div className="absolute top-0 right-0 w-8 h-[2px]" style={{ backgroundColor: colors.topRight }}></div>
              <div className="absolute top-0 right-0 w-[2px] h-8" style={{ backgroundColor: colors.topRight }}></div>
              <div className="absolute bottom-0 left-0 w-8 h-[2px]" style={{ backgroundColor: colors.bottomLeft }}></div>
              <div className="absolute bottom-0 left-0 w-[2px] h-8" style={{ backgroundColor: colors.bottomLeft }}></div>
              <div className="absolute bottom-0 right-0 w-8 h-[2px]" style={{ backgroundColor: colors.bottomRight }}></div>
              <div className="absolute bottom-0 right-0 w-[2px] h-8" style={{ backgroundColor: colors.bottomRight }}></div>
              
              <div className="h-48 flex items-center justify-center p-4 mb-4">
                <img 
                  src={item.img} 
                  alt={item.alt} 
                  className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm text-center">
                {item.description}
              </p>
              
              {/* Visit Website Indicator */}
              <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full">
                  Visit ↗
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default PNYGroup;