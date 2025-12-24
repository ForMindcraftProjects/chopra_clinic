import React from 'react';
import { Video, PlayCircle } from 'lucide-react';

const ClinicTour = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-green-50/30 to-white">
      <div className="container mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-900">
              Experience Our Clinic
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Take a virtual tour of our modern dermatology facility and witness our commitment
            to providing exceptional patient care in a comfortable, state-of-the-art environment.
          </p>
        </div>

        {/* Video Cards Grid */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto"> */}

          {/* Video 1 - State-of-the-Art Clinic */}
          <div className="bg-white shadow-2xl border border-gray-100 overflow-hidden hover:shadow-3xl transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-center space-x-3 mb-3">
                <PlayCircle className="w-5 h-5 text-green-600" />
                <h3 className="text-xl font-playfair font-bold text-gray-900">
                  Your Trusted Dermatology Center
                </h3>
              </div> 
              <p className="text-gray-600 mb-4 leading-relaxed text-m">
                Explore our modern dermatology clinic equipped with advanced diagnostic and
                treatment facilities, designed to provide you with the highest standard of care
                in a welcoming environment.
              </p>
              <div className="relative overflow-hidden bg-gray-100 rounded-lg shadow-inner">
                <video
                  src="/video1.mp4"
                  controls
                  className="w-full h-auto max-h-[600px] "
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          {/* Video 2 - Clinic Experience */}
          {/* <div className="bg-white shadow-2xl border border-gray-100 overflow-hidden hover:shadow-3xl transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-center space-x-3 mb-3">
                <PlayCircle className="w-5 h-5 text-green-600" />
                <h3 className="text-xl font-playfair font-bold text-gray-900">
                  Compassionate Patient Care
                </h3>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed text-m">
                Watch our dedicated team at work, providing personalized treatment with compassion
                and expertise. Experience the warm atmosphere where your skin health 
                is our top priorities.
              </p>
              <div className="relative overflow-hidden bg-gray-100 rounded-lg shadow-inner">
                <video
                  src="/video2.mp4"
                  controls
                  className="w-full h-auto max-h-[600px] "
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div> */}

        {/* </div> */}

        {/* Bottom CTA */}
        
      </div>
    </section>
  );
};

export default ClinicTour;
