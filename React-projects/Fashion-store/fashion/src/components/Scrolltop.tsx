import React, { useState, useEffect } from 'react';

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <div className="scrolltop relative">
      {isVisible && 
        <button className='absolute right-8 top-6 z-10' onClick={scrollToTop}>
          <i className="fa-solid fa-circle-up text-4xl text-gray-400"></i>
        </button>
      }
    </div>
  );
};

export default ScrollTop;
