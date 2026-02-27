"use client";


import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  const [submitted, setSubmitted] = useState(false);
  
  // 5 seconds timer for success message
  useEffect(() => {
    let timer;
    if (submitted) {
      timer = setTimeout(() => {
        setSubmitted(false);
      }, 5000); // 5 seconds
    }
    return () => clearTimeout(timer);
  }, [submitted]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    
    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
    })
    .then(response => {
      if (response.ok) {
        setSubmitted(true);
        form.reset();
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    });
  };
  
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
      img: "/images/65318304_381653319154375_8905552656043343872_n.png", 
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

  // Gallery images for ceremony section
  const ceremonyImages = [
    { img: "/images/2dddbcb3-1eeb-42a2-8c3e-32688340fc54.jpg", alt: "Ceremony Image 1" },
    { img: "/images/7ae81350-3077-4255-a2e2-1e4e54f4738e.jpg", alt: "Ceremony Image 2" },
    { img: "/images/9a9bcbc7-0a3c-4d2f-ae83-e5a88a3ac544.jpg", alt: "Ceremony Image 3" },
    { img: "/images/558ff995-63df-46b4-b69f-fce11cceae7f.jpg", alt: "Ceremony Image 4" },
    { img: "/images/2299f7b9-57bc-4a56-b4fc-3a21bd11cde0.jpg", alt: "Ceremony Image 5" },
    { img: "/images/9285c093-ef1e-469f-bbf9-cfedf0bb09a7.jpg", alt: "Ceremony Image 6" },
    { img: "/images/260684010_1799554390248201_9160920858908703229_n.jpeg", alt: "Ceremony Image 7" },
    { img: "/images/cf5b8e13-9a27-4bc0-ac15-a01aee23cb5b.jpg", alt: "Ceremony Image 8" },
    { img: "/images/cf388377-53c1-4ea0-9411-be5521e55d83.jpg", alt: "Ceremony Image 9" },
    { img: "/images/d1e80171-fc3c-4a89-b818-80b126c3dc15.jpg", alt: "Ceremony Image 10" },
    { img: "/images/d490b540-5ec4-46ee-9ece-068ff034dbb4.jpg", alt: "Ceremony Image 11" },
    { img: "/images/fe1993d5-0593-4a09-b17a-32355149dcd5.jpg", alt: "Ceremony Image 12" },
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

  return (
    <div>
      {/* ==================== BANNER SECTION ==================== */}
      <div 
        data-aos="fade-down"
        data-aos-duration="1200"
        className="relative flex"
      >
        <img 
          src="/images/banner-1.png" 
          alt="Banner" 
          className="w-full h-full" 
        />
        <div className="absolute inset-0 hover:bg-black/10 transition-all duration-300 cursor-pointer flex items-center justify-center">
        </div>
      </div>

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
      {/* Left Side - 2 boxes stacked */}
      <div className="space-y-6">
        {/* Box 1: PNY Adventure */}
        <div 
          data-aos="fade-right"
          data-aos-duration="1000"
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#3da9ec] to-[#ff6b6b] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
          <div className="bg-white p-8 shadow-xl relative overflow-hidden border border-gray-200">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#3da9ec]/10 rounded-full"></div>
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-[#ff6b6b]/10 rounded-full"></div>
            
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

        {/* Box 2: PNY Trainings - Improved Content */}
        <div 
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
          className="relative group"
        >
          <div className="bg-white p-6 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#3da9ec]/10 to-transparent rounded-full"></div>
            
            <div className="flex items-start gap-4 relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-[#3da9ec] to-[#3da9ec]/70 rounded-xl flex items-center justify-center text-white text-2xl shadow-lg">
                <span className="text-3xl">🎓</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-1">PNY Trainings</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Professional courses with hands-on experience and industry experts
                </p>
                
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="text-xs bg-[#3da9ec]/10 text-[#3da9ec] px-2 py-1 rounded-full">Web Development</span>
                  <span className="text-xs bg-[#ff6b6b]/10 text-[#ff6b6b] px-2 py-1 rounded-full">Digital Marketing</span>
                  <span className="text-xs bg-[#4ecdc4]/10 text-[#4ecdc4] px-2 py-1 rounded-full">Graphic Design</span>
                </div>
              </div>
            </div>
            
            {/* Bottom Stats */}
            
          </div>
        </div>
      </div>

      {/* Right Side - Unchanged */}
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

  {/* Blue Card */}
  <div 
    data-aos="zoom-in"
    data-aos-delay="100"
    className="relative group p-6 hover:shadow-xl transition-all duration-300 
    border-2 border-[#3da9ec] rounded-2xl"
    style={{ background: 'linear-gradient(135deg, #e6f6fd 0%, #d4eefc 100%)' }}
  >
    <div className="text-3xl md:text-4xl font-bold text-[#3da9ec]">8+</div>
    <div className="text-sm text-gray-600 mt-1">Companies</div>
    <div className="w-12 h-0.5 bg-[#3da9ec]/40 mt-3 group-hover:w-16 transition-all"></div>
  </div>

  {/* Red Card */}
  <div 
    data-aos="zoom-in"
    data-aos-delay="200"
    className="relative group p-6 hover:shadow-xl transition-all duration-300 
    border-2 border-[#ff6b6b] rounded-2xl"
    style={{ background: 'linear-gradient(135deg, #ffecec 0%, #ffdede 100%)' }}
  >
    <div className="text-3xl md:text-4xl font-bold text-[#ff6b6b]">1000+</div>
    <div className="text-sm text-gray-600 mt-1">Students</div>
    <div className="w-12 h-0.5 bg-[#ff6b6b]/40 mt-3 group-hover:w-16 transition-all"></div>
  </div>

  {/* Green Card */}
  <div 
    data-aos="zoom-in"
    data-aos-delay="300"
    className="relative group p-6 hover:shadow-xl transition-all duration-300 
    border-2 border-emerald-500 rounded-2xl"
    style={{ background: 'linear-gradient(135deg, #e9fbf4 0%, #d7f7ea 100%)' }}
  >
    <div className="text-3xl md:text-4xl font-bold text-emerald-600">50+</div>
    <div className="text-sm text-gray-600 mt-1">Courses</div>
    <div className="w-12 h-0.5 bg-emerald-500/40 mt-3 group-hover:w-16 transition-all"></div>
  </div>

  {/* Blue Again (Commitment) */}
  <div 
    data-aos="zoom-in"
    data-aos-delay="400"
    className="relative group p-6 hover:shadow-xl transition-all duration-300 
    border-2 border-[#3da9ec] rounded-2xl"
    style={{ background: 'linear-gradient(135deg, #e6f6fd 0%, #d4eefc 100%)' }}
  >
    <div className="text-3xl md:text-4xl font-bold text-[#3da9ec]">100%</div>
    <div className="text-sm text-gray-600 mt-1">Commitment</div>
    <div className="w-12 h-0.5 bg-[#3da9ec]/40 mt-3 group-hover:w-16 transition-all"></div>
  </div>

</div>
  </div>
</section>
      {/* ==================== MISSION & VISION SECTION ==================== */}
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
          <div className="flex items-center gap-3 mb-6">
            {/* Blue Mission Icon */}
            <div className="p-2 rounded-lg bg-[#3da9ec] text-white shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 relative inline-block">
              OUR MISSION
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-[#3da9ec] to-[#ff6b6b]"></div>
            </h3>
          </div>
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
          <div className="flex items-center gap-3 mb-6">
            {/* Red Vision Icon */}
            <div className="p-2 rounded-lg bg-[#ff6b6b] text-white shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 relative inline-block">
              OUR VISION
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-[#ff6b6b] to-[#3da9ec]"></div>
            </h3>
          </div>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>Our vision is to promote youth to follow their dreams. The main motive behind the PNY Group of companies is to empower the young generation to chase their dreams because we believe in; if you can dream it, you can achieve it!</p>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-[#ff6b6b]/10 to-transparent"></div>
      </div>
    </div>
  </div>
</section>

      {/* ==================== COMMITTED FOR BETTER FUTURE SECTION ==================== */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-40 left-0 w-72 h-72 bg-[#3da9ec]/5 blur-3xl"></div>
        <div className="absolute bottom-40 right-0 w-72 h-72 bg-[#ff6b6b]/5 blur-3xl"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#3da9ec]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#ff6b6b]/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Section Title */}
          <div 
            data-aos="fade-down"
            data-aos-duration="800"
            className="text-center mb-12 relative"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block">
              COMMITTED FOR BETTER FUTURE
              <div className="absolute -bottom-2 left-0 w-full flex">
                <div className="w-1/2 h-1 bg-[#3da9ec]"></div>
                <div className="w-1/2 h-1 bg-[#ff6b6b]"></div>
              </div>
              <div className="absolute -left-4 top-1/2 w-2 h-2 bg-[#3da9ec] rounded-full"></div>
              <div className="absolute -right-4 top-1/2 w-2 h-2 bg-[#ff6b6b] rounded-full"></div>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto relative">
              Empowering the next generation with skills, connections, and opportunities
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 - Blue Theme */}
            <div 
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800"
              className="bg-white shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 relative border border-gray-200 group"
            >
              <div className="absolute top-0 left-0 w-8 h-[2px]" style={{ backgroundColor: "#3da9ec" }}></div>
              <div className="absolute top-0 left-0 w-[2px] h-8" style={{ backgroundColor: "#3da9ec" }}></div>
              <div className="absolute top-0 right-0 w-8 h-[2px]" style={{ backgroundColor: "#ff6b6b" }}></div>
              <div className="absolute top-0 right-0 w-[2px] h-8" style={{ backgroundColor: "#ff6b6b" }}></div>
              <div className="absolute bottom-0 left-0 w-8 h-[2px]" style={{ backgroundColor: "#4ecdc4" }}></div>
              <div className="absolute bottom-0 left-0 w-[2px] h-8" style={{ backgroundColor: "#4ecdc4" }}></div>
              <div className="absolute bottom-0 right-0 w-8 h-[2px]" style={{ backgroundColor: "#ffe66d" }}></div>
              <div className="absolute bottom-0 right-0 w-[2px] h-8" style={{ backgroundColor: "#ffe66d" }}></div>

              <div className="relative group p-6 mb-4 border-2 border-[#3da9ec] rounded-2xl mx-auto w-32 h-32 flex items-center justify-center" 
                   style={{ background: 'linear-gradient(135deg, #e6f0fa 0%, #d4e6f5 100%)' }}>
                <svg className="w-16 h-16 text-[#3da9ec]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                LEARNING FIRST
              </h3>
              <div className="w-16 h-1 bg-[#3da9ec] mx-auto mb-4 rounded-full"></div>
              <p className="text-gray-600 text-sm text-center leading-relaxed">
                Choose what you'd like to learn from our extensive subscription library, crafted by industry experts.
              </p>
            </div>

            {/* Card 2 - Red Theme */}
            <div 
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
              className="bg-white shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 relative border border-gray-200 group"
            >
              <div className="absolute top-0 left-0 w-8 h-[2px]" style={{ backgroundColor: "#3da9ec" }}></div>
              <div className="absolute top-0 left-0 w-[2px] h-8" style={{ backgroundColor: "#3da9ec" }}></div>
              <div className="absolute top-0 right-0 w-8 h-[2px]" style={{ backgroundColor: "#ff6b6b" }}></div>
              <div className="absolute top-0 right-0 w-[2px] h-8" style={{ backgroundColor: "#ff6b6b" }}></div>
              <div className="absolute bottom-0 left-0 w-8 h-[2px]" style={{ backgroundColor: "#4ecdc4" }}></div>
              <div className="absolute bottom-0 left-0 w-[2px] h-8" style={{ backgroundColor: "#4ecdc4" }}></div>
              <div className="absolute bottom-0 right-0 w-8 h-[2px]" style={{ backgroundColor: "#ffe66d" }}></div>
              <div className="absolute bottom-0 right-0 w-[2px] h-8" style={{ backgroundColor: "#ffe66d" }}></div>

              <div className="relative group p-6 mb-4 border-2 border-[#ff6b6b] rounded-2xl mx-auto w-32 h-32 flex items-center justify-center" 
                   style={{ background: 'linear-gradient(135deg, #fee9e9 0%, #fddfdf 100%)' }}>
                <svg className="w-16 h-16 text-[#ff6b6b]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-1 .05 1.16.84 2 1.87 2 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                CONNECT WITH PEERS
              </h3>
              <div className="w-16 h-1 bg-[#ff6b6b] mx-auto mb-4 rounded-full"></div>
              <p className="text-gray-600 text-sm text-center leading-relaxed">
                Join a vibrant community of learners and professionals who share your passion and ambitions.
              </p>
            </div>

            {/* Card 3 - Green Theme */}
            <div 
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="800"
              className="bg-white shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 relative border border-gray-200 group"
            >
              <div className="absolute top-0 left-0 w-8 h-[2px]" style={{ backgroundColor: "#3da9ec" }}></div>
              <div className="absolute top-0 left-0 w-[2px] h-8" style={{ backgroundColor: "#3da9ec" }}></div>
              <div className="absolute top-0 right-0 w-8 h-[2px]" style={{ backgroundColor: "#ff6b6b" }}></div>
              <div className="absolute top-0 right-0 w-[2px] h-8" style={{ backgroundColor: "#ff6b6b" }}></div>
              <div className="absolute bottom-0 left-0 w-8 h-[2px]" style={{ backgroundColor: "#4ecdc4" }}></div>
              <div className="absolute bottom-0 left-0 w-[2px] h-8" style={{ backgroundColor: "#4ecdc4" }}></div>
              <div className="absolute bottom-0 right-0 w-8 h-[2px]" style={{ backgroundColor: "#ffe66d" }}></div>
              <div className="absolute bottom-0 right-0 w-[2px] h-8" style={{ backgroundColor: "#ffe66d" }}></div>

              <div className="relative group p-6 mb-4 border-2 border-[#4ecdc4] rounded-2xl mx-auto w-32 h-32 flex items-center justify-center" 
                   style={{ background: 'linear-gradient(135deg, #e4f7f5 0%, #d6f0ed 100%)' }}>
                <svg className="w-16 h-16 text-[#4ecdc4]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 13.5l-5-5L12 9l3.5 3.5-3.5 3.5-1.5-1.5 2-2-5-5L14 5l7 7-5.5 5.5z"/>
                </svg>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                GROWTH & BLOOM
              </h3>
              <div className="w-16 h-1 bg-[#4ecdc4] mx-auto mb-4 rounded-full"></div>
              <p className="text-gray-600 text-sm text-center leading-relaxed">
                We give our youth various opportunities to grow and bloom in their chosen paths.
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-12">
            <div className="w-2 h-2 bg-[#3da9ec] rounded-full"></div>
            <div className="w-2 h-2 bg-[#ff6b6b] rounded-full"></div>
            <div className="w-2 h-2 bg-[#4ecdc4] rounded-full"></div>
            <div className="w-2 h-2 bg-[#ffe66d] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* ==================== PNY GROUP SPLIT SECTION ==================== */}
      <section className="py-16 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#3da9ec]/[0.02] rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div 
              data-aos="fade-right"
              data-aos-duration="1000"
              className="space-y-4 pt-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                PNY GROUP OF{" "}
                <span className="text-[#3da9ec]">COMPANIES</span>
              </h2>
              
              <div className="w-20 h-1 bg-gradient-to-r from-[#3da9ec] to-[#ff6b6b] rounded-full"></div>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                PNY Group is a family of dynamic companies including PNY Trainings, PNY Pink, Eraflip Tech, PNY Genius, and more. We are committed to empowering Pakistan's youth through quality education, innovative technology, and practical skills development. With over 10+ companies and 5000+ successful students, we are transforming careers and building a brighter future for the next generation of IT professionals.
              </p>
            </div>

            <div 
              data-aos="fade-left"
              data-aos-duration="1000"
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#3da9ec] to-[#ff6b6b] z-10"></div>
                
                <img 
                  src="/images/pny-image.jpeg" 
                  alt="PNY Group" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== GALLERY SECTION ==================== */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#3da9ec]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#ff6b6b]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Gallery Heading */}
          <div 
            data-aos="fade-down"
            data-aos-duration="800"
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 relative inline-block">
              GALLERY
              <div className="absolute -bottom-2 left-0 w-full flex">
                <div className="w-1/2 h-1 bg-[#3da9ec]"></div>
                <div className="w-1/2 h-1 bg-[#ff6b6b]"></div>
              </div>
            </h3>
          </div>

          {/* Images Grid - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ceremonyImages.map((item, index) => {
              const colors = cornerColors[index % cornerColors.length];
              return (
                <div 
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={index * 50}
                  data-aos-duration="600"
                  className="bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 relative border border-gray-200 overflow-hidden"
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
                  
                  <div className="h-64 flex items-center justify-center p-2">
                    <img
                      src={item.img} 
                      alt={item.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== BACK TO TOP ==================== */}
      <div 
        data-aos="fade-up"
        data-aos-duration="800"
        className="text-center mb-16"
      >
        <a href="#" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#3da9ec] transition-colors duration-300">
          <span className="text-lg font-medium">BACK TO TOP</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </a>
      </div>

       <section className="py-20 px-4 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#3da9ec]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ff6b6b]/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-4xl relative z-10">
          {/* ================= TITLE ================= */}
          <div
            data-aos="fade-down"
            data-aos-duration="800"
            className="text-center mb-12 relative"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative inline-block">
              CONTACT US
              <div className="absolute -bottom-2 left-0 w-full flex">
                <div className="w-1/2 h-1 bg-[#3da9ec]"></div>
                <div className="w-1/2 h-1 bg-[#ff6b6b]"></div>
              </div>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Get in touch with us for any queries or information.
            </p>
          </div>

          {/* ================= FORM CARD ================= */}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#3da9ec]/5 to-transparent rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#ff6b6b]/5 to-transparent rounded-tr-full"></div>

            <div className="relative z-10">
              {!submitted ? (
                <form
                  className="space-y-6"
                  action="https://formsubmit.co/info@pnygroup.com"
                  method="POST"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_subject" value="New Contact Form Submission" />
                  <input type="hidden" name="_next" value={window.location.href} />

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3da9ec] transition-all duration-300"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6b6b] transition-all duration-300"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="What is this regarding?"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      rows="6"
                      placeholder="Type your message here..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300 resize-none"
                      required
                    ></textarea>
                  </div>

                  <div className="text-center pt-4">
                    <button
                      type="submit"
                      className="relative group px-10 py-4 bg-gradient-to-r from-[#3da9ec] to-[#ff6b6b] text-white font-semibold rounded-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                    >
                      <span className="relative z-10">Send Message</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b6b] to-[#3da9ec] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>
                </form>
              ) : (
                /* ================= SUCCESS SCREEN ================= */
                <div className="flex flex-col items-center justify-center text-center py-24 animate-[successPop_0.7s_ease-out_forwards]">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-[0_20px_60px_rgba(16,185,129,0.5)]">
                    <svg
                      className="w-14 h-14 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>

                  <h3 className="text-3xl font-bold text-green-600 mt-8">
                    Message Sent Successfully!
                  </h3>

                  <p className="text-gray-600 mt-3 max-w-md">
                    Thank you for contacting us. Our team will respond to you shortly.
                  </p>
                  
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;