import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const Announcements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  const announcements = [
    {
      id: 1,
      title: "全新EP《Digital Dreams》正式发布",
      content: "NEXUS最新EP作品现已在各大音乐平台上线，融合Future Bass与Melodic Dubstep的完美结合。",
      date: "2024.03.15",
      url: "https://www.jianshu.com/p/announcement1"
    },
    {
      id: 2,
      title: "Omnitonic Records签约新艺术家PULSE",
      content: "欢迎Drum & Bass制作人PULSE加入我们的大家庭，期待更多精彩的音乐作品。",
      date: "2024.03.10",
      url: "https://www.jianshu.com/p/announcement2"
    },
    {
      id: 3,
      title: "春季音乐节演出阵容公布",
      content: "我们的艺术家将在即将到来的春季音乐节上带来精彩演出，敬请期待现场的视听盛宴。",
      date: "2024.03.05",
      url: "https://www.jianshu.com/p/announcement3"
    },
    {
      id: 4,
      title: "厂牌周年庆典活动启动",
      content: "为庆祝Omnitonic Records成立周年，我们将举办系列庆典活动，包括限量版周边发售。",
      date: "2024.02.28",
      url: "https://www.jianshu.com/p/announcement4"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % announcements.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + announcements.length) % announcements.length);
  };

  return (
    <section id="announcements" className="py-32 bg-white">
      <div ref={ref} className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-black tracking-tight mb-6">
            Latest
            <span className="text-[#222ff1] ml-4">News</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            获取厂牌最新动态和重要公告
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <motion.button
            onClick={prevSlide}
            whileHover={{ scale: 1.05, x: -2 }}
            whileTap={{ scale: 0.95 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-[#222ff1]" />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            whileHover={{ scale: 1.05, x: 2 }}
            whileTap={{ scale: 0.95 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-200"
          >
            <ChevronRight className="w-6 h-6 text-[#222ff1]" />
          </motion.button>

          {/* Slider Container */}
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              className="flex"
              animate={{ x: -currentIndex * 100 + '%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {announcements.map((announcement) => (
                <motion.a
                  key={announcement.id}
                  href={announcement.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex-shrink-0 block"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-gradient-to-br from-[#222ff1] to-[#1a1fb3] text-white p-8 lg:p-12 rounded-2xl mx-2">
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-white/60 text-sm font-mono">{announcement.date}</span>
                      <ExternalLink className="w-5 h-5 text-white/60" />
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">
                      {announcement.title}
                    </h3>
                    
                    <p className="text-white/90 text-lg leading-relaxed">
                      {announcement.content}
                    </p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {announcements.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex ? 'bg-[#222ff1]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Announcements;