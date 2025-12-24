import React from 'react';
import { 
  Award, 
  GraduationCap, 
  Users, 
  Clock, 
  Star, 
  Shield,
  BookOpen,
  Heart,
  CheckCircle,
  MapPin,
  Stethoscope
} from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: Clock,
      number: "40+",
      label: "Years Experience"
    },
    {
      icon: Users,
      number: "100,000+",
      label: "Patients Treated"
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Patient Rating"
    },
    {
      icon: Heart,
      number: "98%",
      label: "Success Rate"
    }
  ];

  const medicalAssociations = [
    "Delhi Medical Association (DMA)",
    "Indian Association of Dermatologists, Venereologists and Leprologists (IADVL)",
    "Indian Association for the Study of STD/AIDS",
    "Association of Cutaneous Surgeons of India (ACSI)",
    "Indian Society for Pediatric Dermatology",
    "Council of Sex Education and Parenthood (International), Mumbai",
    "Indian Medical Association (IMA)"
  ];

  const trainingHospitals = [
    "Safdarjung Hospital",
    "Dr. RML Hospital",
    "Maulana Azad Medical College",
    "Lady Hardinge Medical College",
    "Sir Ganga Ram Hospital"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-900 mb-4">
            Meet Dr. Anil Chopra
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Consultant Dermatologist with over four decades of excellence in dermatology, 
            venereology, and sexually transmitted diseases.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Doctor Image & Clinic Video */}
          <div className="relative space-y-8">
            <div className="bg-white p-8 shadow-2xl border border-gray-100">
              {/* Doctor's Professional Image */}
              <div className="relative overflow-hidden bg-gray-100">
                <img
                  src="/doctor_img.jpeg"
                  alt="Dr. Anil Chopra - Consultant Dermatologist"
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Doctor Info Card */}
              <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 -mt-16 relative z-10 mx-8">
                <h3 className="text-2xl font-playfair font-bold mb-2">Dr. Anil Chopra</h3>
                <p className="text-green-100 mb-2 italic">Consultant Dermatologist</p>
                <div className="flex items-center space-x-2 text-green-200">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Janakpuri, New Delhi</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            
            {/* Introduction */}
            <div>
              <h3 className="text-3xl font-playfair font-bold text-gray-900 mb-6">
                Excellence in Dermatological Care
              </h3>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed font-light">
                <p>
                  Dr. Anil Chopra is a highly experienced Dermatologist with over 40 years of clinical 
                  expertise in the field of Dermatology, Venereology, and Sexually Transmitted Diseases (STD). 
                  A medical graduate and postgraduate from the prestigious University of Delhi, Dr. Chopra has 
                  successfully treated more than <strong className="text-green-600">100,000 patients</strong> throughout his career.
                </p>
                <p>
                  Dr. Chopra established his private dermatology clinic in Janakpuri, New Delhi, where he 
                  continues to serve a large and diverse patient population. In addition, he currently serves as a 
                  Visiting Dermatologist at Cantonment General Hospital, Delhi Cantt.
                </p>
                <p className="text-green-700 font-medium">
                  Dr. Anil Chopra is known for his compassionate patient care, vast clinical knowledge, 
                  and commitment to continuing medical education.
                </p>
              </div>
            </div>

            {/* Training & Education */}
            <div>
              <h4 className="text-2xl font-playfair font-semibold text-gray-900 mb-4 flex items-center">
                <GraduationCap className="w-6 h-6 text-green-600 mr-3" />
                Training & Education
              </h4>
              <div className="bg-white/80 backdrop-blur-sm p-6 shadow-lg border border-gray-100">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  He received his training at several renowned government hospitals in Delhi, including:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {trainingHospitals.map((hospital, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{hospital}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Medical Associations */}
        <div className="mt-16">
          <h4 className="text-2xl font-playfair font-semibold text-gray-900 mb-6 text-center flex items-center justify-center">
            <Award className="w-6 h-6 text-green-600 mr-3" />
            Life Member of Medical Associations
          </h4>
          <div className="bg-white/90 backdrop-blur-sm p-8 shadow-xl border border-gray-100">
            <div className="grid md:grid-cols-2 gap-4">
              {medicalAssociations.map((association, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 hover:bg-green-50 transition-colors duration-300">
                  <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 leading-relaxed">{association}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-green-600 to-green-800 p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-green-800/90"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-playfair font-bold text-center mb-12">
                Trusted by Thousands
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center group">
                    <div className="bg-white/20 w-16 h-16 flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-4xl font-bold mb-2 transition-transform duration-300 group-hover:scale-105">
                      {achievement.number}
                    </p>
                    <p className="text-green-100 font-medium">{achievement.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;