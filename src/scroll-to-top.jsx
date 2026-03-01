


import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 700) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{ ...buttonStyles, display: isVisible ? 'block' : 'none' }}
    >
      <FontAwesomeIcon icon={faArrowUp} />
      
    </button>
  );
};

const buttonStyles = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: '#00b000',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default ScrollToTopButton;

