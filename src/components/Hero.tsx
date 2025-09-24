import React from 'react';
import { motion } from 'framer-motion';
import { Play, ExternalLink } from 'lucide-react';

const Hero = () => {
  const latestRelease = {
    title: "Digital Dreams",
    artist: "NEXUS",
    image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    netease: "https://music.163.com/song?id=123456"
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#222ff1] to-[#1a1fb3] text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl"
        />
      </div>

      <div className="relative container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-6xl lg:text-7xl font-black leading-tight tracking-tight"
            >
              OMNITONIC
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
                RECORDS
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-white/80 max-w-lg leading-relaxed"
            >
              推动电子音乐边界，创造未来声音体验
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-4"
            >
              <p className="text-white/60 text-sm font-medium tracking-wide uppercase">
                Latest Release
              </p>
              <div className="flex items-center space-x-4">
                <h3 className="text-2xl font-bold">{latestRelease.title}</h3>
                <span className="text-white/60">by {latestRelease.artist}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Album Cover */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.2 }}
              className="relative group"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    "0 25px 50px -12px rgba(255,255,255,0.1)",
                    "0 35px 60px -12px rgba(255,255,255,0.2)",
                    "0 25px 50px -12px rgba(255,255,255,0.1)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-80 h-80 lg:w-96 lg:h-96"
              >
                <img
                  src={latestRelease.image}
                  alt={latestRelease.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
                
                {/* Play Button Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.15 }}
                  className="absolute inset-0 bg-black/50 rounded-2xl flex items-center justify-center transition-opacity"
                >
                  <motion.a
                    href={latestRelease.netease}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.1 }}
                    className="bg-white/20 backdrop-blur-md rounded-full p-6 hover:bg-white/30 transition-colors group"
                  >
                    <Play className="w-8 h-8 text-white group-hover:text-white" fill="currentColor" />
                  </motion.a>
                </motion.div>
              </motion.div>

              {/* Listen Button */}
              <motion.a
                href={latestRelease.netease}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white text-[#222ff1] px-8 py-3 rounded-full font-bold text-sm tracking-wide uppercase hover:shadow-lg transition-shadow flex items-center space-x-2"
              >
                <span>Listen Now</span>
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;