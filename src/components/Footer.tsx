import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-stone-50 border-t border-stone-200">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between"
        >
          {/* Logo and Copyright */}
          <div className="flex items-center space-x-4 mb-6 md:mb-0">
            <img 
              src="https://youke1.picui.cn/s1/2025/09/23/68d2981e322f5.png?v=2" 
              alt="OMR Logo" 
              className="h-8 w-auto"
            />
            <div>
              <p className="font-bold text-lg">Omnitonic Records</p>
              <p className="text-gray-600 text-sm">© 2024 All rights reserved</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-8">
            <motion.button
              onClick={() => document.getElementById('releases')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ y: -2 }}
              className="text-gray-600 hover:text-[#222ff1] transition-colors text-sm font-medium"
            >
              Releases
            </motion.button>
            <motion.button
              onClick={() => document.getElementById('artists')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ y: -2 }}
              className="text-gray-600 hover:text-[#222ff1] transition-colors text-sm font-medium"
            >
              Artists
            </motion.button>
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ y: -2 }}
              className="text-gray-600 hover:text-[#222ff1] transition-colors text-sm font-medium"
            >
              Contact
            </motion.button>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent my-8"
        />

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-gray-500 text-sm">
            推动电子音乐边界，创造未来声音体验
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;