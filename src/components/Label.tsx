import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Label = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="relative py-32 bg-[#222ff1] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-full h-full"
        >
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-full bg-white"
              style={{
                left: `${i * 5}%`,
                transform: `rotate(${i * 18}deg)`,
                transformOrigin: 'center bottom',
              }}
            />
          ))}
        </motion.div>
      </div>

      <div ref={ref} className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl lg:text-6xl font-black tracking-tight"
          >
            重新定义
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
              电子音乐
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-8 text-left"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-bold">创新先锋</h3>
              <p className="text-white/80 leading-relaxed">
                我们致力于推动电子音乐的边界，探索声音的无限可能性，创造属于未来的音乐体验。
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">艺术家孵化</h3>
              <p className="text-white/80 leading-relaxed">
                为才华横溢的艺术家提供专业平台，助力他们将创意转化为震撼人心的音乐作品。
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">全球视野</h3>
              <p className="text-white/80 leading-relaxed">
                连接世界各地的音乐爱好者，打造跨越地域界限的音乐文化交流平台。
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-8"
          >
            <div className="inline-block bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">成立使命</h3>
              <p className="text-white/90 text-lg leading-relaxed max-w-2xl">
                Omnitonic Records 成立于对音乐纯粹的热爱之上。我们相信每一个音符都承载着情感，
                每一段旋律都能触动人心。通过融合传统与创新，我们为世界带来独特的音乐体验。
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Label;