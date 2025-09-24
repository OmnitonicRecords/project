import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white/95 backdrop-blur-md'
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-3"
        >
          <img 
            src="https://youke1.picui.cn/s1/2025/09/23/68d2981e322f5.png?v=2" 
            alt="OMR Logo" 
            className="h-8 w-auto"
          />
          <span className="text-xl font-bold tracking-tight">OMNITONIC RECORDS</span>
        </motion.div>

        <div className="hidden md:flex items-center space-x-8">
          {[
            { id: 'home', label: 'Home', target: 'hero' },
            { id: 'about', label: 'About', target: 'about' },
            { id: 'latestnews', label: 'LatestNews', target: 'announcements' },
            { id: 'releases', label: 'Releases', target: 'releases' },
            { id: 'artists', label: 'Artists', target: 'artists' },
            { id: 'contact', label: 'Contact', target: 'contact' }
          ].map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.target)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-sm font-medium tracking-wide uppercase hover:text-[#222ff1] transition-colors"
            >
              {item.label}
            </motion.button>
          ))}
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;