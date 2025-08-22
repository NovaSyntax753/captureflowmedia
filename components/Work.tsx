"use client"
import React, { useState, useEffect } from 'react'
import ribbon from '../assets/ribbon_Vector-p-2600.png'
import AnimatedTitle from './Animated';
import WorkCard from './WorkCard';
const reels = [{
  src: 'https://www.youtube.com/embed/JUEdUm_pTuo',
},{
    src: 'https://www.youtube.com/embed/620DeC8dF6Y',
},
{
    src:'https://www.youtube.com/embed/Lp_ab3gPVHA',
},
{
    src: 'https://www.youtube.com/embed/8jzZI49KfKo',
},{
    src: 'https://www.youtube.com/embed/Z6eYzn5ADg4',
},{
    src: 'https://www.youtube.com/embed/XaL4uijU3q4',
}
]

const getVisibleCount = () => {
  if (typeof window !== 'undefined') {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
  }
  return 1;
}

const Work = () => {
  const [cardsPerView, setCardsPerView] = useState(getVisibleCount());
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => setCardsPerView(getVisibleCount());
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex >= Math.ceil(reels.length / cardsPerView) ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
      return nextIndex < 0 ? Math.ceil(reels.length / cardsPerView) - 1 : nextIndex;
    });
  };

  const totalSlides = Math.ceil(reels.length / cardsPerView);

  return (
    <section className="relative w-full py-16 " id="work">
      <img src={ribbon.src} alt="Ribbon" className="absolute -z-0 top-0 left-0 w-full h-auto object-fit opacity-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedTitle>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center text-[#53c926]">Our Work Speaks for Itself</h2>
        </AnimatedTitle>
        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0 px-2 py-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 px-10 lg:grid-cols-3 gap-6">
                    {reels
                      .slice(
                        slideIndex * cardsPerView,
                        (slideIndex + 1) * cardsPerView
                      )
                      .map((reel, idx) => (
                        <WorkCard key={idx} src={reel.src} />
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-[#53c926] text-black p-2 rounded-full shadow-lg border-2 border-white hover:bg-green-700 hover:text-white transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-[#53c926] text-black p-2 rounded-full shadow-lg border-2 border-white hover:bg-green-700 hover:text-white transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 border-2 border-[#53c926] ${index === currentIndex ? 'bg-[#53c926]' : 'bg-black'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work