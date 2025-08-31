import { useEffect } from 'react';

export default function ScrollDetector({ checkpoint, onReachPoint }) {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // how much user scrolled
      const windowHeight = window.innerHeight; // visible window height
      const docHeight = document.documentElement.scrollHeight; // total page height

      // Check if user scrolled past checkpoint point of the page (0.5 means half the page)
      if (scrollTop + windowHeight >= docHeight * checkpoint) {
        onReachPoint(); // call the callback
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // cleanup
    };
  }, [onReachPoint, checkpoint]);

  return null; // this component doesn't render anything
}
