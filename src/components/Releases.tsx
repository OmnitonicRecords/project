import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play, ExternalLink } from 'lucide-react';

const Releases = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const releases = [
    {
      id: 1,
      title: "Digital Dreams",
      artist: "NEXUS",
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      netease: "https://music.163.com/song?id=123456",
      date: "2024.03.15"
    },
    {
      id: 2,
      title: "Neon Nights",
      artist: "AURORA",
      image: "https://images.pexels.com/photos/1616470/pexels-photo-1616470.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      netease: "https://music.163.com/song?id=234567",
      date: "2024.03.08"
    },
    {
      id: 3,
      title: "Synthetic Soul",
      artist: "ECHO",
      image: "https://images.pexels.com/photos/1809644/pexels-photo-1809644.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      netease: "https://music.163.com/song?id=345678",
      date: "2024.02.28"
    },
    {
      id: 4,
      title: "Quantum Beats",
      artist: "FLUX",
      image: "https://images.pexels.com/photos/1144271/pexels-photo-1144271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      netease: "https://music.163.com/song?id=456789",
      date: "2024.02.21"
    },
    {
      id: 5,
      title: "Electric Horizon",
      artist: "VIBE",
      image: "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      netease: "https://music.163.com/song?id=567890",
      date: "2024.02.14"
    },
    {
      id: 6,
      title: "Future Bass",
      artist: "PULSE",
      image: "https://images.pexels.com/photos/1751731/pexels-photo-1751731.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      netease: "https://music.163.com/song?id=678901",
      date: "2024.02.07"
    }
  ];

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="releases" className="py-32 bg-stone-50">
      <div ref={ref} className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-black tracking-tight mb-6">
            Recent
            <span className="text-[#222ff1] ml-4">Releases</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            探索我们最新的音乐作品，感受不同艺术家带来的独特声音体验
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {releases.map((release) => (
            <motion.div
              key={release.id}
              variants={item}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-150"
            >
              <div className="relative overflow-hidden aspect-square">
                <motion.img
                  src={release.image}
                  alt={release.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                />
                
                {/* Play Button Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.1 }}
                  className="absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity"
                >
                  <motion.a
                    href={release.netease}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.08 }}
                    className="bg-[#222ff1] rounded-full p-4 hover:bg-[#222ff1]/90 transition-colors"
                  >
                    <Play className="w-6 h-6 text-white" fill="currentColor" />
                  </motion.a>
                </motion.div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {release.title}
                    </h3>
                    <p className="text-gray-600 font-medium">{release.artist}</p>
                  </div>
                  <span className="text-sm text-gray-500 font-mono">{release.date}</span>
                </div>

                <motion.a
                  href={release.netease}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.1 }}
                  className="inline-flex items-center space-x-2 text-[#222ff1] font-semibold hover:text-[#1a1fb3] transition-colors"
                >
                  <span>Listen Now</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Releases;