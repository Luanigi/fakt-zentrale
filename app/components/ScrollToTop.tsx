"use client";

import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 300) {
      setIsVisible(true);
    } else if (currentScrollY < 300) {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);
  
  return (
    <div
      className={`fixed bottom-10 right-10 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 transition-all duration-500 ease-in-out ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
      }`}
    >
      <button
        onClick={scrollToTop}
        className="bg-white/20 text-white p-2 rounded-full shadow-md hover:bg-white/30 hover:scale-110 transition-transform duration-300"
      >
        <div className="text-lg md:text-xl lg:text-3xl">
          <FaArrowAltCircleUp />
        </div>
      </button>
    </div>
  );
}
