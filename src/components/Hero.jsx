import React, { useState, useEffect, useRef } from "react";
import { Phone, Calendar, ArrowRight, X } from "lucide-react";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showCalendly, setShowCalendly] = useState(false);
  const calendlyRef = useRef(null);

  const services = [
    {
      name: "Clinic Experience",
      image: "/image1.jpeg",
    },
    {
      name: "Skin Rejuvenation",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1740&auto=format&fit=crop",
    },
    {
      name: "Laser Therapy",
      image:
        "https://images.unsplash.com/photo-1616391182219-e080b4d1043a?q=80&w=1740&auto=format&fit=crop",
    },
    {
      name: "Advanced Treatments",
      image:
        "https://plus.unsplash.com/premium_photo-1681966938869-60d235b2e11f?q=80&w=1740&auto=format&fit=crop",
    },
  ];

  /* Auto image rotation */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % services.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [services.length]);

  /* Load Calendly script once */
  useEffect(() => {
    if (!document.getElementById("calendly-script")) {
      const script = document.createElement("script");
      script.id = "calendly-script";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  /* Initialize Calendly when modal opens */
  useEffect(() => {
    if (showCalendly && window.Calendly && calendlyRef.current) {
      calendlyRef.current.innerHTML = "";

      window.Calendly.initInlineWidget({
        url: "https://calendly.com/mindcraftlabs?hide_landing_page_details=1&hide_gdpr_banner=1",
        parentElement: calendlyRef.current,
      });
    }
  }, [showCalendly]);

  useEffect(() => {
  if (showCalendly) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  // Cleanup in case component unmounts
  return () => {
    document.body.style.overflow = "";
  };
}, [showCalendly]);


  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {services.map((service, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your Skin
              <span className="block text-green-400">with</span>
              <span className="block">Expert Care</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-12 font-light max-w-2xl">
              Advanced dermatological treatments by Dr. A.K. Chopra
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <button
                onClick={() => setShowCalendly(true)}
                className="group bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 flex items-center justify-center space-x-2 shadow-xl"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button className="bg-black/20 backdrop-blur-sm hover:bg-black/30 text-white font-semibold py-4 px-8 rounded-full border border-white/30 hover:border-white/50 transition-all duration-300 flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Service Indicator Bar */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="bg-black/30 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
          <div className="flex items-center space-x-6">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`text-sm font-medium transition-all duration-300 ${
                  index === currentImageIndex
                    ? "text-green-400"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {service.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {services.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "w-8 bg-green-400"
                  : "w-2 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Calendly Modal */}
      {showCalendly && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
          <div className="relative bg-white rounded-2xl w-full max-w-4xl h-[80vh] overflow-hidden">
            <button
              onClick={() => setShowCalendly(false)}
              className="absolute top-4 right-4 z-10 bg-black text-white p-2 rounded-full hover:bg-gray-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div ref={calendlyRef} className="w-full h-full" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
