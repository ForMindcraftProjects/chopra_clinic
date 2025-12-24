import React from 'react';
import { 
  Stethoscope, 
  Shield, 
  Sun, 
  Sparkles, 
  Scissors, 
  Syringe, 
  Droplets, 
  Zap, 
  Target, 
  Heart, 
  Beaker, 
  Activity 
} from 'lucide-react';

const Treatments = () => {
  const treatments = [
    {
      icon: Shield,
      name: "Acne Treatment",
      description: "Advanced acne therapy with personalized treatment plans for clear, healthy skin."
    },
    {
      icon: Stethoscope,
      name: "Psoriasis & Eczema",
      description: "Comprehensive management of chronic skin conditions with latest medical protocols."
    },
    {
      icon: Sun,
      name: "Vitiligo Treatment",
      description: "Specialized vitiligo therapy including phototherapy and advanced medical treatments."
    },
    {
      icon: Sparkles,
      name: "Skin Rejuvenation",
      description: "Anti-aging treatments to restore youthful radiance and skin texture."
    },
    {
      icon: Activity,
      name: "Hair Fall Treatment",
      description: "Comprehensive hair loss solutions including PRP and advanced therapies."
    },
    {
      icon: Syringe,
      name: "Botox & Fillers",
      description: "Professional cosmetic injections for wrinkle reduction and facial enhancement."
    },
    {
      icon: Droplets,
      name: "PRP Therapy",
      description: "Platelet-rich plasma treatment for skin rejuvenation and hair restoration."
    },
    {
      icon: Target,
      name: "Tattoo Removal",
      description: "Safe and effective laser tattoo removal with minimal scarring."
    },
    {
      icon: Zap,
      name: "Laser Treatments",
      description: "Advanced laser therapy for various skin conditions and cosmetic procedures."
    },
    {
      icon: Heart,
      name: "Skin Cancer Screening",
      description: "Early detection and treatment of skin cancers with expert dermatological care."
    },
    {
      icon: Beaker,
      name: "Chemical Peels",
      description: "Professional chemical peels for improved skin texture and tone."
    },
    {
      icon: Scissors,
      name: "Minor Surgery",
      description: "Outpatient dermatological procedures and minor surgical interventions."
    }
  ];

  return (
    <section id="treatments" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-900 mb-4">
            Our Treatments & Facilities
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6"></div>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Comprehensive dermatological care with state-of-the-art facilities and 
            personalized treatment approaches for all your skin and hair concerns.
          </p>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {treatments.map((treatment, index) => (
            <div 
              key={index}
              className="group bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100/50"
            >
              {/* Icon Container */}
              <div className="bg-green-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-100 group-hover:scale-110 transition-all duration-300">
                <treatment.icon className="w-8 h-8 text-green-600" />
              </div>

              {/* Treatment Name */}
              <h3 className="text-xl font-playfair font-semibold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                {treatment.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed font-light">
                {treatment.description}
              </p>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-green-200 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-gray-100">
            <h3 className="text-3xl font-playfair font-bold text-gray-900 mb-4">
              Ready to Transform Your Skin?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto font-light">
              Schedule a consultation with Dr. Chopra to discuss the best treatment 
              options for your specific skin concerns and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Book Consultation
              </button>
              <button className="bg-white hover:bg-gray-50 text-green-700 font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl border border-green-200 hover:border-green-300 transform hover:-translate-y-1 transition-all duration-300">
                View All Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Treatments;