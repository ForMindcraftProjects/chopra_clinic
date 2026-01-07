import React, { useState, useEffect, useRef } from 'react';
import {
  Phone,
  Calendar,
  MessageCircle,
  Clock,
  CheckCircle,
  Star,
  Award,
  X
} from 'lucide-react';

const CallToAction = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  const calendlyRef = useRef(null);

  const benefits = [
    {
      icon: CheckCircle,
      title: "Expert Consultation",
      description: "40+ years of dermatological expertise"
    },
    {
      icon: Clock,
      title: "Quick Appointments",
      description: "Same-day consultations available"
    },
    {
      icon: Star,
      title: "Personalized Care",
      description: "Customized treatment plans for you"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "100,000+ satisfied patients"
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Directly",
      subtitle: "Speak with our team",
      action: "+91 9811108616",
      href: "tel:+919811108616",
      color: "bg-green-600 hover:bg-green-700"
    },
    {
      icon: Calendar,
      title: "Book Online",
      subtitle: "Schedule instantly",
      action: "Book Appointment",
      href: "#",
      color: "bg-green-600 hover:bg-green-700"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      subtitle: "Quick response",
      action: "Chat Now",
      href: "https://wa.me/9811108616",
      color: "bg-green-500 hover:bg-green-600"
    }
  ];

  /* Lock background scroll */
  useEffect(() => {
    if (showCalendly) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showCalendly]);

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

  /* Init Calendly */
  useEffect(() => {
    if (showCalendly && window.Calendly && calendlyRef.current) {
      calendlyRef.current.innerHTML = "";

      window.Calendly.initInlineWidget({
        url: "https://calendly.com/dr-chopraanil/30min",
        parentElement: calendlyRef.current,
      });
    }
  }, [showCalendly]);

  return (
    <>
      <section
        id="cta"
        className="py-20 bg-gradient-to-br from-gray-50 via-white to-green-50 relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-green-400 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-playfair font-bold text-gray-900 mb-6">
              Book Your Consultation
              <span className="block text-green-600 italic">Today</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto mb-6" />
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-light">
              Take the first step towards healthier, more beautiful skin with
              Dr. Chopra's expert dermatological care.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100/50"
              >
                <div className="bg-green-50 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 font-light">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                onClick={(e) => {
                  if (method.title === "Book Online") {
                    e.preventDefault();
                    setShowCalendly(true);
                  }
                }}
                target={method.href.startsWith('http') ? '_blank' : '_self'}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className="group block"
              >
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100/50 h-full">
                  <div className={`${method.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 mb-4 font-light">
                    {method.subtitle}
                  </p>
                  <div className="text-lg font-semibold text-green-600">
                    {method.action}
                  </div>
                  <div className="mt-4 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-500" />
                </div>
              </a>
            ))}
          </div>

          {/* 🔥 URGENCY SECTION (RESTORED) */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-12 text-white text-center shadow-2xl">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">
                Limited Slots Available
              </h3>
              <p className="text-xl text-green-100 mb-8 font-light">
                Dr. Chopra's expertise is in high demand. Schedule your
                personalized consultation today.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                  <Clock className="w-8 h-8 text-green-200 mx-auto mb-3" />
                  <h4 className="text-lg font-semibold mb-2">Clinic Hours</h4>
                  <p className="text-green-100">Mon-Sat: 9 AM - 1 PM &  <br></br>6 PM - 9 PM</p>
                  <p className="text-green-200 text-sm">Sunday: Closed</p>
                </div> 

                <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                  <Phone className="w-8 h-8 text-green-200 mx-auto mb-3" />
                  <h4 className="text-lg font-semibold mb-2">Emergency Contact</h4>
                  <p className="text-green-100">+91 9811108616</p>
                  <p className="text-green-200 text-sm">24/7 Support</p>
                </div>

                <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                  <MessageCircle className="w-8 h-8 text-green-200 mx-auto mb-3" />
                  <h4 className="text-lg font-semibold mb-2">Quick Response</h4>
                  <p className="text-green-100">WhatsApp Available</p>
                  <p className="text-green-200 text-sm">Instant replies</p>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+919876543210"
                  className="bg-white hover:bg-gray-50 text-green-700 font-bold py-4 px-8 rounded-full shadow-xl flex items-center justify-center space-x-3"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now: +91 9811108616</span>
                </a>

                <button
                  onClick={() => setShowCalendly(true)}
                  className="bg-green-400 hover:bg-green-300 text-green-900 font-bold py-4 px-8 rounded-full shadow-xl flex items-center justify-center space-x-3"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Online Appointment</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Modal */}
      {showCalendly && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
          <div className="relative bg-white rounded-2xl w-full max-w-4xl h-[80vh] overflow-hidden">
            <button
              onClick={() => setShowCalendly(false)}
              className="absolute top-4 right-4 z-10 bg-black text-white p-2 rounded-full"
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

export default CallToAction;
