"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {

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
    </div>
  )
}

export default Gallery
