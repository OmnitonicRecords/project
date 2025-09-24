import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Instagram, Twitter } from 'lucide-react';

const Artists = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const artists = [
    {
      name: "NEXUS",
      genre: "Future Bass / Melodic Dubstep",
      image: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      description: "创造梦幻般的音景，融合情感与技术的完美结合",
      netease: "https://music.163.com/artist?id=123456",
      social: {
        instagram: "#",
        twitter: "#"
      }
    },
    {
      name: "AURORA",
      genre: "Synthwave / Retrowave",
      image: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      description: "用合成器描绘霓虹夜晚的诗意与浪漫",
      netease: "https://music.163.com/artist?id=234567",
      social: {
        instagram: "#",
        twitter: "#"
      }
    },
    {
      name: "ECHO",
      genre: "Ambient Techno",
      image: "https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      description: "探索内心深处的声音回响与灵魂共鸣",
      netease: "https://music.163.com/artist?id=345678",
      social: {
        instagram: "#",
        twitter: "#"
      }
    },
    {
      name: "FLUX",
      genre: "Experimental Electronic",
      image: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      description: "突破传统界限，创造前所未闻的音乐体验",
      netease: "https://music.163.com/artist?id=456789",
      social: {
        instagram: "#",
        twitter: "#"
      }
    },
    {
      name: "VIBE",
      genre: "Progressive House",
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      description: "用节拍构建情感的桥梁，连接心灵与律动",
      netease: "https://music.163.com/artist?id=567890",
      social: {
        instagram: "#",
        twitter: "#"
      }
    },
    {
      name: "PULSE",
      genre: "Drum & Bass",
      image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      description: "用强劲的鼓点和低音线条编织音乐的力量",
      netease: "https://music.163.com/artist?id=678901",
      social: {
        instagram: "#",
        twitter: "#"
      }
    }
  ];

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="artists" className="py-32 bg-white">
      <div ref={ref} className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-black tracking-tight mb-6">
            Our
            <span className="text-[#222ff1] ml-4">Artists</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            认识推动我们音乐愿景的才华横溢的艺术家们
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {artists.map((artist, index) => (
            <motion.div
              key={artist.name}
              variants={item}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="group bg-gradient-to-b from-white to-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-150"
            >
              <motion.a
                href={artist.netease}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative overflow-hidden aspect-square"
              >
                <motion.img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Social Icons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.1 }}
                  className="absolute top-4 right-4 flex space-x-2"
                >
                  <motion.a
                    href={artist.social.instagram}
                    onClick={(e) => e.stopPropagation()}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.08 }}
                    className="bg-white/20 backdrop-blur-md rounded-full p-2 hover:bg-white/30 transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-white" />
                  </motion.a>
                  <motion.a
                    href={artist.social.twitter}
                    onClick={(e) => e.stopPropagation()}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.08 }}
                    className="bg-white/20 backdrop-blur-md rounded-full p-2 hover:bg-white/30 transition-colors"
                  >
                    <Twitter className="w-4 h-4 text-white" />
                  </motion.a>
                </motion.div>

                {/* Artist Name Overlay */}
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">{artist.name}</h3>
                  <p className="text-white/80 text-sm">{artist.genre}</p>
                </div>
              </motion.a>

              <div className="p-6">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-600 leading-relaxed"
                >
                  {artist.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Artists;