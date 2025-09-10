"use client"
import React, { useState, useEffect, useRef } from 'react'
import AnimatedTitle from './Animated';
import ReviewCard from './ReviewCard';

const reviews = [
  {
    name: 'CA Shubham Patel',
    title: 'Founder and CEO Conso AI',
    text: "LeadsFlow Media transformed our online presence. Their video strategies brought us real engagement.",
  },
  {
    name: 'Rohit Purohit',
    title: 'Managing Director ARK2Construct',
    text: "We saw a huge boost in our brand's visibility and credibility. I appreciate their hands-on approach and the way they tailor everything to our goals.",
  },
  {
    name: 'Dr. Ankita Agrawal',
    title: 'Co Founder Agrawal Dental Clinic',
    text: "I was amazed by the results! The team made the process effortless and we've seen a clear increase in patient inquiries.",
  },
  {
    name: 'Dr. Vrutika Patel',
    title: 'Founder Blissful hands',
    text: "LeadsFlow Media helped me build a personal brand I'm proud of. I recommend them to anyone serious about growth.",
  },
  {
    name: 'CA CS Harshwardhan Bissa',
    title: 'Co-founder - Quick Fintax',
    text: "From strategy to execution, everything was top-notch.The reporting and updates kept us confident every step of the way.",
  },
]

const getCardsPerView = () => {
  if (typeof window !== 'undefined') {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
  }
  return 1;
}



const Reviews = () => {
  const [cardsPerView, setCardsPerView] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [, setIsActive] = useState(false); 
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setCardsPerView(getCardsPerView());
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex >= Math.ceil(reviews.length / cardsPerView) ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
      return nextIndex < 0 ? Math.ceil(reviews.length / cardsPerView) - 1 : nextIndex;
    });
  };

  const totalSlides = Math.ceil(reviews.length / cardsPerView);

  return (
    <section className="scroll-mt-32 w-full py-8 sm:py-12 md:py-16  relative overflow-hidden flex flex-col justify-center" id="testimonials">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 flex flex-col justify-start h-full">
        <AnimatedTitle>
          <h2 className="text-xl sm:text-3xl md:text-5xl font-bold  italic mb-4 sm:mb-8 md:mb-10 text-center">Words from Our Clients</h2>
        </AnimatedTitle>
        <AnimatedTitle>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 text-center">
              See what our clients have to say about working with us
            </p>      
        </AnimatedTitle>
        <div
          className="relative max-w-7xl mx-auto flex flex-col justify-center h-auto px-8 sm:px-12 md:px-20 focus:outline-none"
          ref={carouselRef}
          tabIndex={0}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
        >
          <div className="relative  flex items-center justify-center h-auto min-h-[280px] sm:min-h-[320px] md:min-h-[380px] lg:min-h-[420px]">
            {/* Left Button */}
            <button
              onClick={prevSlide}
              className="absolute -left-10 sm:-left-6 md:-left-10 top-1/2 -translate-y-1/2 bg-black text-white p-2 sm:p-2.5 rounded-full shadow-lg border-2 border-white hover:bg-slate-100 hover:text-black transition-colors duration-1000 z-10"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="overflow-hidden w-full">
              <div
                className="flex transition-transform duration-1000 ease-in-out items-center py-1"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full py-2 flex-shrink-0 px-1 sm:px-2 md:px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch">
                      {reviews
                        .slice(
                          slideIndex * cardsPerView,
                          (slideIndex + 1) * cardsPerView
                        )
                        .map((review, idx) => (
                          <ReviewCard key={idx} name={review.name} title={review.title} text={review.text} />
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Right Button */}
            <button
              onClick={nextSlide}
              className="absolute -right-10 sm:-right-6 md:-right-10 top-1/2 -translate-y-1/2 bg-black text-white  p-2 sm:p-2.5 rounded-full shadow-lg border-2 border-white  hover:text-black hover:bg-slate-100 transition-colors duration-300 z-10"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors duration-300 border-2 border-slate-600 ${index === currentIndex ? 'bg-black' : 'bg-white'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Add keyframes for slide animations
// In your global CSS (e.g., index.css):
// @keyframes slideLeftIn { from { opacity: 0; transform: translateX(32px); } to { opacity: 1; transform: translateX(0); } }
// @keyframes slideLeftOut { from { opacity: 1; transform: translateX(0); } to { opacity: 0; transform: translateX(-32px); } }
// @keyframes slideRightIn { from { opacity: 0; transform: translateX(-32px); } to { opacity: 1; transform: translateX(0); } }
// @keyframes slideRightOut { from { opacity: 1; transform: translateX(0); } to { opacity: 0; transform: translateX(32px); } }
// .animate-slideLeftIn { animation: slideLeftIn 0.4s both; }
// .animate-slideLeftOut { animation: slideLeftOut 0.4s both; }
// .animate-slideRightIn { animation: slideRightIn 0.4s both; }
// .animate-slideRightOut { animation: slideRightOut 0.4s both; }

export default Reviews