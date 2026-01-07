import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);
  const calendlyRef = useRef(null);

  // Prevent scrolling when mobile menu OR calendly modal is open
  useEffect(() => {
    if (isOpen || showCalendly) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, showCalendly]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Load Calendly script once
  useEffect(() => {
    if (!document.getElementById("calendly-script")) {
      const script = document.createElement("script");
      script.id = "calendly-script";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Initialize Calendly when modal opens
  useEffect(() => {
    if (showCalendly && window.Calendly && calendlyRef.current) {
      calendlyRef.current.innerHTML = "";

      window.Calendly.initInlineWidget({
        url: "https://calendly.com/dr-chopraanil/30min",
        parentElement: calendlyRef.current,
      });
    }
  }, [showCalendly]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-green-900/95 backdrop-blur-md shadow-2xl'
            : 'bg-green-800/90 backdrop-blur-md shadow-xl'
        } rounded-full border border-green-700/30`}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => scrollToSection('home')}
                className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300"
              >
                <span className="text-xl font-bold text-white">
                  Chopra Clinic
                </span>
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('about')}
                className="text-green-100 hover:text-white font-medium transition-colors duration-300 text-sm"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-green-100 hover:text-white font-medium transition-colors duration-300 text-sm"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-green-100 hover:text-white font-medium transition-colors duration-300 text-sm"
              >
                Contact
              </button>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:+9811108616"
                className="flex items-center space-x-2 text-green-100 hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                <Phone className="w-4 h-4" />
                <span>Call</span>
              </a>
              <button
                onClick={() => setShowCalendly(true)}
                className="bg-green-500 hover:bg-green-400 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 text-sm shadow-lg hover:shadow-xl"
              >
                Book Appointment
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-green-100 hover:text-white transition-colors duration-300"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden fixed inset-0 top-20 bg-black/20 backdrop-blur-xl z-40">
              <div className="bg-green-800/90 backdrop-blur-md mx-4 mt-4 rounded-2xl p-6 space-y-4 border border-green-700/30">
                <button
                  onClick={() => scrollToSection('home')}
                  className="block w-full text-left px-4 py-3 text-white hover:text-green-300 hover:bg-white/10 transition-colors duration-300"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="block w-full text-left px-4 py-3 text-white hover:text-green-300 hover:bg-white/10 transition-colors duration-300"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="block w-full text-left px-4 py-3 text-white hover:text-green-300 hover:bg-white/10 transition-colors duration-300"
                >
                  Reviews
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left px-4 py-3 text-white hover:text-green-300 hover:bg-white/10 transition-colors duration-300"
                >
                  Contact
                </button>
                <div className="pt-4 border-t border-green-600/30">
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setShowCalendly(true);
                    }}
                    className="w-full bg-green-500 hover:bg-green-400 text-white px-6 py-3 font-medium transition-all duration-300 shadow-lg"
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

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
    </>
  );
};

export default Navbar;
