import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Clock } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Doctor', href: '#about' },
    { name: 'Treatments', href: '#treatments' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  const treatments = [
    'Acne Treatment',
    'Laser Therapy',
    'Hair Fall Treatment',
    'Skin Rejuvenation',
    'Botox & Fillers',
    'PRP Therapy'
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-green-800 via-green-900 to-green-800 relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-600 rounded-full blur-3xl"></div>
      </div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Clinic Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-playfair font-bold text-white mb-2">
                Chopra Clinic
              </h3>
              <p className="text-green-100 font-light leading-relaxed">
                Premier dermatological care with over 40 years of excellence. 
                Your trusted partner for healthy, beautiful skin.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-green-400 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-green-100 hover:text-white transition-colors duration-300">
                  +91 9811108616
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-green-400 flex-shrink-0" />
                <a href="mailto:info@chopraclinic.com" className="text-green-100 hover:text-white transition-colors duration-300">
                  dr.chopraanil@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-green-100">
                  Janakpuri, New Delhi
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-green-100 hover:text-white transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Our Treatments</h4>
            <ul className="space-y-3">
              {treatments.map((treatment, index) => (
                <li key={index}>
                  <span className="text-green-100 hover:text-white transition-colors duration-300 cursor-pointer">
                    {treatment}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Working Hours & Social */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Follow Us</h4>
            
            {/* Clinic Hours */}
            <div className="mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center space-x-3 mb-3">
                  <Clock className="w-5 h-5 text-green-400" />
                  <h5 className="text-white font-medium">Clinic Hours</h5>
                </div>
                <div className="space-y-1 text-sm">
                  <p className="text-green-100">Mon-Sat: 10 AM - 7 PM</p>
                  <p className="text-green-200">Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-white/20 hover:bg-white/30 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group hover:scale-110"
                >
                  <Facebook className="w-5 h-5 text-white group-hover:text-green-300" />
                </a>
                <a 
                  href="#" 
                  className="bg-white/20 hover:bg-white/30 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group hover:scale-110"
                >
                  <Instagram className="w-5 h-5 text-white group-hover:text-green-300" />
                </a>
                <a 
                  href="#" 
                  className="bg-white/20 hover:bg-white/30 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group hover:scale-110"
                >
                  <Twitter className="w-5 h-5 text-white group-hover:text-green-300" />
                </a>
                <a 
                  href="#" 
                  className="bg-white/20 hover:bg-white/30 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group hover:scale-110"
                >
                  <Linkedin className="w-5 h-5 text-white group-hover:text-green-300" />
                </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 bg-black/20 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-6 lg:px-8 py-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-green-100 text-sm">
              © 2024 Chopra Skin & Laser Clinic. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-green-100 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-green-100 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-green-100 hover:text-white transition-colors duration-300">
                Medical Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;