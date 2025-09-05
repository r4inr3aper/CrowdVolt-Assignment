import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { scrollToTop } from '../../utils/smoothScroll';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-3 rounded-full 
        bg-gradient-to-r from-[#330BFF] to-[#BF7272] 
        text-white shadow-lg hover:shadow-xl
        transition-all duration-300 ease-in-out
        hover:scale-110 hover:shadow-[0_0_20px_rgba(191,114,114,0.4)]
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
      `}
      aria-label="Back to top"
    >
      <ChevronUp className="w-6 h-6" strokeWidth={2.5} />
    </button>
  );
};

export default BackToTopButton;