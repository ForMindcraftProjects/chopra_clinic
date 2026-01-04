import React, { useState } from 'react';
import { 
  Shield, 
  Stethoscope, 
  Sun, 
  Sparkles, 
  Activity, 
  Syringe, 
  Droplets, 
  Target, 
  Zap, 
  Heart, 
  Beaker, 
  Scissors 
} from 'lucide-react';

const ServicesShowcase = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 0,
      icon: Shield,
      title: "Acne Treatment",
      description: "Advanced acne therapy with personalized treatment plans for clear, healthy skin.",
      image: "https://images.unsplash.com/photo-1642844613096-7b743b7d9915?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      size: "normal"
    },
    {
      id: 1,
      icon: Zap,
      title: "Laser Treatments",
      description: "Advanced laser therapy for various skin conditions and cosmetic procedures.",
      image: "https://images.unsplash.com/photo-1616391182219-e080b4d1043a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      size: "normal"
    },
    {
      id: 2,
      icon: Stethoscope,
      title: "Psoriasis & Eczema",
      description: "Comprehensive management of chronic skin conditions with latest medical protocols.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      size: "normal"
    },
    {
      id: 3,
      icon: Activity,
      title: "Hair Fall Treatment",
      description: "Effective solutions for hair loss including PRP therapy and advanced treatments.",
      image: "https://images.unsplash.com/photo-1715866549135-e3bc3c6148a9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
      size: "normal"
    },
    {
      id: 4,
      icon: Sparkles,
      title: "Skin Rejuvenation",
      description: "Anti-aging treatments to restore youthful radiance and skin texture.",
      image: "https://plus.unsplash.com/premium_photo-1681966938869-60d235b2e11f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      size: "normal"
    },
    {
      id: 5,
      icon: Sun,
      title: "Vitiligo Treatment",
      description: "Specialized vitiligo therapy including phototherapy and advanced medical treatments.",
      image: "https://images.unsplash.com/photo-1759487088474-29421ad18d3d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1674",
      size: "wide"
    },
    {
      id: 6,
      icon: Syringe,
      title: "Botox & Fillers",
      description: "Professional cosmetic injections for wrinkle reduction and facial enhancement.",
      image: "https://plus.unsplash.com/premium_photo-1677178715915-dfad5fe30cc6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2071",
      size: "normal"
    },
    {
      id: 7,
      icon: Droplets,
      title: "PRP Therapy",
      description: "Platelet-rich plasma treatment for skin rejuvenation and hair restoration.",
      image: "https://plus.unsplash.com/premium_photo-1702598817726-5502337bf58c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
      size: "normal"
    },
    {
      id: 8,
      icon: Target,
      title: "Tattoo Removal",
      description: "Safe and effective laser tattoo removal with minimal scarring.",
      image: "https://images.unsplash.com/photo-1651216829699-439e281e23d2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      size: "normal"
    },
    {
      id: 9,
      icon: Beaker,
      title: "Chemical Peels",
      description: "Professional chemical peels for improved skin texture and tone with customized treatment protocols.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      size: "wide"
    },
    {
      id: 10,
      icon: Heart,
      title: "Skin Cancer Screening",
      description: "Early detection and treatment of skin cancers with expert dermatological care.",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      size: "normal"
    },
    {
      id: 11,
      icon: Scissors,
      title: "Minor Surgery",
      description: "Outpatient dermatological procedures and minor surgical interventions.",
      image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      size: "normal"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-900 via-green-800 to-green-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight">
            Trusted by thousands of patients to deliver personalized, effective, and 
            <span className="block italic text-green-300">validated dermatological care—for everyone.</span>
          </h2>
        </div>

        {/* Services Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative overflow-hidden cursor-pointer transition-all duration-500 ease-out ${
                service.size === 'wide' ? 'lg:col-span-2' : 'lg:col-span-1'
              } ${
                hoveredCard === index ? 'transform scale-105 z-20' : 'transform scale-100'
              } ${
                hoveredCard !== null && hoveredCard !== index ? 'opacity-70 scale-95' : 'opacity-100'
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                minHeight: service.size === 'wide' ? '280px' : '240px'
              }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:from-black/80 group-hover:via-black/40 group-hover:to-black/10 transition-all duration-500"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between p-6">
                
                {/* Icon */}
                <div className="flex justify-between items-start">
                  <div className="bg-white/20 backdrop-blur-sm w-12 h-12 flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-6 h-6 text-white group-hover:text-white" />
                  </div>
                  
                  {/* Floating indicator */}
                  <div className="w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </div>

                {/* Title and Description */}
                <div className="transform transition-all duration-500 group-hover:translate-y-0 translate-y-2">
                  <h3 className="text-xl lg:text-2xl font-playfair font-bold text-white mb-3 leading-tight group-hover:text-green-100 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Description - slides up on hover */}
                  <div className="overflow-hidden">
                    <p className="text-white/90 leading-relaxed font-light transform transition-all duration-500 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                      {service.description}
                    </p>
                  </div>

                  {/* Learn More Button - appears on hover */}
                  <div className="mt-4 transform transition-all duration-500 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                  </div>
                </div>
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 shadow-2xl shadow-white/0 group-hover:shadow-white/20 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;