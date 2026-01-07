import React from 'react';
import { Phone, Mail, MapPin, Clock, Navigation } from 'lucide-react';

const Contact = () => {
  const handleGetDirections = () => {
    const destination = "Chopra Skin, Laser & Dental Clinic, C4F/269, Janakpuri, New Delhi - 110058";
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
    window.open(googleMapsUrl, '_blank');
  };

  const handleCallNow = () => {
    window.location.href = 'tel:9876543210';
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-white to-green-50">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-900 mb-4">
            Contact & Location
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Visit our modern clinic in Janakpuri, New Delhi for personalized dermatological care 
            in a comfortable and professional environment.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Map */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="p-6 bg-gradient-to-r from-green-600 to-green-700 text-white">
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6" />
                <h3 className="text-xl font-semibold">Our Location</h3>
              </div>
            </div>
            
            {/* Google Maps Embed */}
            <div className="relative h-80 lg:h-96">
              <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.393321105403!2d77.0906049753039!3d28.617971684742155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04ae6fe8d4e9%3A0xde893974c4e53357!2sChopra%20Skin%20%2C%20Laser%20%26%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1760453860973!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                // referrerPolicy="no-referrer-when-downgrade"
                title="Chopra Skin & Laser Clinic Location"
              ></iframe>
            </div>
            
            {/* Address */}
            <div className="p-6 bg-gray-50">
              <div className="flex items-start space-x-3">
                <Navigation className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Chopra Skin & Laser Clinic</p>
                  <p className="text-gray-600">C4F/269, Janakpuri, New Delhi - 110058</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Details */}
          <div className="space-y-8">
            
            {/* Contact Information Cards */}
            <div className="space-y-6">
              
              {/* Phone */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Phone Number</h4>
                    <a 
                      href="tel:+919876543210" 
                      className="text-green-600 hover:text-green-700 font-medium text-lg transition-colors duration-300"
                    >
                      9811108616
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Email Address</h4>
                    <a 
                      href="mailto:info@chopraclinic.com" 
                      className="text-green-600 hover:text-green-700 font-medium transition-colors duration-300"
                    >
                      dr.chopraanil@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Emergency */}
              {/* <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Emergency Contact</h4>
                    <a 
                      href="tel:+919876543211" 
                      className="text-green-600 hover:text-green-700 font-medium transition-colors duration-300"
                    >
                      +91 9811108616
                    </a>
                  </div>
                </div>
              </div> */}
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={handleGetDirections}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Get Directions
              </button>
              <button
                onClick={handleCallNow}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Call Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;