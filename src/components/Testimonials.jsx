import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star, User } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Delhi",
      rating: 5,
      text: "Dr. Chopra's expertise in treating my acne problem was exceptional. After years of struggling with skin issues, his personalized treatment plan gave me clear, healthy skin. The clinic's modern facilities and professional staff made the entire experience comfortable.",
      treatment: "Acne Treatment",
      avatar: "👩"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Gurgaon",
      rating: 5,
      text: "I was skeptical about laser hair removal, but Dr. Chopra explained the entire process thoroughly. The results exceeded my expectations, and the treatment was virtually painless. His 40+ years of experience really shows in the quality of care.",
      treatment: "Laser Hair Removal",
      avatar: "👨"
    },
    {
      id: 3,
      name: "Anita Gupta",
      location: "Noida",
      rating: 5,
      text: "The PRP treatment for my hair fall issues worked wonderfully. Dr. Chopra's approach is very scientific and he takes time to understand each patient's concerns. The clinic maintains the highest standards of hygiene and professionalism.",
      treatment: "PRP Therapy",
      avatar: "👩‍💼"
    },
    {
      id: 4,
      name: "Vikram Singh",
      location: "Delhi",
      rating: 5,
      text: "Dr. Chopra successfully treated my psoriasis condition that I had been dealing with for years. His knowledge of dermatology is impressive, and he provided a comprehensive treatment plan that actually worked. Highly recommended!",
      treatment: "Psoriasis Treatment",
      avatar: "👨‍💻"
    },
    {
      id: 5,
      name: "Meera Patel",
      location: "Faridabad",
      rating: 5,
      text: "The anti-aging treatments at Dr. Chopra's clinic are amazing. The Botox procedure was done with such precision, and the results look completely natural. The staff is very caring and the clinic has a very professional atmosphere.",
      treatment: "Anti-Aging Treatment",
      avatar: "👩‍🦳"
    },
    {
      id: 6,
      name: "Amit Verma",
      location: "Delhi",
      rating: 5,
      text: "I had a skin cancer screening done by Dr. Chopra, and his thorough examination and expert diagnosis gave me peace of mind. His attention to detail and patient care approach is commendable. Thank you for the excellent service.",
      treatment: "Skin Cancer Screening",
      avatar: "👨‍⚕️"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Read genuine testimonials from our satisfied patients who have experienced 
            exceptional care and remarkable results at our clinic.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Main Testimonial Card */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-gray-100/50 min-h-[450px] flex flex-col justify-center">
            
            {/* Patient Avatar and Quote */}
            <div className="flex justify-center items-center space-x-4 mb-6">
              {/* Avatar */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 w-20 h-20 rounded-full flex items-center justify-center text-3xl shadow-lg">
                {testimonials[currentSlide].avatar}
              </div>
              {/* Quote Icon */}
              {/* <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center">
                {/* <Quote className="w-6 h-6 text-blue-600" /> */}
              {/* </div> */}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-xl text-gray-700 text-center leading-relaxed font-light mb-10 italic">
              "{testimonials[currentSlide].text}"
            </blockquote>

            {/* Patient Info */}
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center space-x-1 mb-4">
                {renderStars(testimonials[currentSlide].rating)}
              </div>

              {/* Name and Location */}
              <h4 className="text-xl font-semibold text-gray-900 mb-1">
                {testimonials[currentSlide].name}
              </h4>
              <p className="text-gray-600 mb-2">{testimonials[currentSlide].location}</p>
              
              {/* Treatment */}
              <div className="inline-block bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                {testimonials[currentSlide].treatment}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 hover:text-green-600 w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          >
            <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 hover:text-green-600 w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          >
            <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-green-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;