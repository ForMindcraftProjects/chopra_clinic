import React from 'react';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const WhyChooseUs = () => {
  const [activeService, setActiveService] = useState(2); // Default to "Dermatological Care" (index 2)

  const services = [
    {
      id: 0,
      name: "Acne & Skin Conditions",
      isHighlighted: false,
      image: "https://media.istockphoto.com/id/174763312/photo/acne.webp?a=1&b=1&s=612x612&w=0&k=20&c=p775X3z2GPn5Kux79LxQ678WM9UsXMRgcfj2HV83mmw="
    },
    {
      id: 1,
      name: "Laser Treatments",
      isHighlighted: false,
      image: "https://plus.unsplash.com/premium_photo-1675502957644-48f8db5d8764?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TGFzZXIlMjBUcmVhdG1lbnRzfGVufDB8fDB8fHww"
    },
    {
      id: 2,
      name: "Dermatological Care",
      isHighlighted: true,
      image: "https://plus.unsplash.com/premium_photo-1702598541431-0ae484ec359d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fERlcm1hdG9sb2dpY2FsJTIwQ2FyZSUyMCUzQXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: 3,
      name: "Hair Fall Solutions",
      isHighlighted: false,
      image: "https://media.istockphoto.com/id/1405013137/photo/man-worried-about-hair-loss.webp?a=1&b=1&s=612x612&w=0&k=20&c=QBqjWK6F1SPsqAYTN7LwKA2ZW3cAD1pNMPnQYzXft5g="
    }
  ];

  const handleServiceClick = (serviceId) => {
    setActiveService(serviceId);
  };

  return (
    <section id="why-choose-us" className="min-h-screen bg-gradient-to-br from-green-800 to-green-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-600 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" className="text-white/5" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
          
          {/* Left Column - Content */}
          <div className="space-y-8">
            
            {/* Main Headline */}
            <div>
              <h2 className="text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight mb-8">
                Making dermatology
                <br />
                <span className="italic font-light">work for all of us</span>
              </h2>
              
              <p className="text-xl lg:text-2xl text-green-100 leading-relaxed font-light max-w-2xl">
                Together, we're reshaping the dermatological experience for 
                working families—meeting them where care truly happens: 
                at home, in the workplace, and throughout the community.
              </p>
            </div>

            {/* Services List */}
            <div className="space-y-0">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="group cursor-pointer"
                  onClick={() => handleServiceClick(service.id)}
                >
                  <div className="flex items-center justify-between py-6 border-b border-white/20 hover:border-white/40 transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      {activeService === service.id && (
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      )}
                      <span className={`text-xl lg:text-2xl font-light transition-colors duration-300 ${
                        activeService === service.id
                          ? 'text-white' 
                          : 'text-green-100 group-hover:text-white'
                      }`}>
                        {service.name}
                      </span>
                    </div>
                    <ArrowRight className={`w-6 h-6 transition-all duration-300 ${
                      activeService === service.id
                        ? 'text-white translate-x-1' 
                        : 'text-green-200 group-hover:text-white group-hover:translate-x-1'
                    }`} />
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <button className="bg-green-400 hover:bg-green-300 text-green-900 font-semibold py-4 px-8 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                See if your area offers Chopra Clinic
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative flex items-center">
            <div className="relative overflow-hidden w-full rounded-2xl shadow-2xl" style={{ height: '500px' }}>
              <img
                src={services[activeService].image}
                alt={services[activeService].name}
                className="w-full h-full object-cover transition-all duration-700 ease-in-out transform hover:scale-105"
                key={activeService}
              />

              {/* Image Overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-700"></div>

              {/* Smooth transition overlay */}
              <div className="absolute inset-0 bg-black/0 hover:bg-black/5 transition-all duration-700"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;