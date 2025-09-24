import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, ExternalLink } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const platforms = [
    {
      name: "网易云音乐",
      icon: "🎵",
      url: "https://music.163.com/",
      description: "关注我们获取最新发布"
    },
    {
      name: "Spotify",
      icon: "🎧",
      url: "https://music.163.com/",
      description: "收听我们的播放列表"
    },
    {
      name: "Apple Music",
      icon: "🍎",
      url: "https://music.163.com/",
      description: "在Apple Music上发现我们"
    },
    {
      name: "酷狗音乐",
      icon: "🐕",
      url: "https://music.163.com/",
      description: "在酷狗音乐收听我们"
    },
    {
      name: "QQ音乐",
      icon: "🐧",
      url: "https://music.163.com/",
      description: "在QQ音乐发现我们"
    },
    {
      name: "酷我音乐",
      icon: "🎶",
      url: "https://music.163.com/",
      description: "在酷我音乐关注我们"
    },
    {
      name: "SoundCloud",
      icon: "☁️",
      url: "#",
      description: "探索独家内容和混音"
    }
  ];

  const handlePlatformClick = (platform: typeof platforms[0], e: React.MouseEvent) => {
    if (platform.name === "SoundCloud") {
      e.preventDefault();
      alert("暂无SoundCloud链接");
    }
  };
  return (
    <section id="contact" className="py-32 bg-stone-50">
      <div ref={ref} className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-black tracking-tight mb-6">
            Stay
            <span className="text-[#222ff1] ml-4">Connected</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            与我们保持联系，获取最新音乐资讯和发布信息
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Email Contact */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold mb-4">商务合作</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                如果您有音乐合作意向，或希望加入我们的厂牌，请通过以下方式联系我们。
              </p>
            </div>

            {/* Email Contact */}
            <motion.a
              href="mailto:omnitonicrecord@outlook.com"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center space-x-3 bg-[#222ff1] text-white px-6 py-3 rounded-xl font-bold text-base hover:bg-[#1a1fb3] transition-all duration-200 shadow-lg hover:shadow-xl w-full lg:w-auto justify-center lg:justify-start"
            >
              <Mail className="w-5 h-5" />
              <span>omnitonicrecord@outlook.com</span>
            </motion.a>

            {/* Beat Array Submission */}
            <motion.a
              href="https://www.beatarray.com/label/OmnitonicRecords"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center space-x-3 bg-white border-2 border-[#222ff1] text-[#222ff1] px-6 py-3 rounded-xl font-bold text-base hover:bg-[#222ff1] hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl w-full lg:w-auto justify-center lg:justify-start"
            >
              <ExternalLink className="w-5 h-5" />
              <span>节奏阵列投稿</span>
            </motion.a>
          </motion.div>

          {/* Music Platforms */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="text-center lg:text-left mb-8">
              <h3 className="text-3xl font-bold mb-4">关注我们</h3>
              <p className="text-gray-600 text-lg">
                在各大音乐平台关注我们，第一时间获取最新发布
              </p>
            </div>

            <div className="grid gap-4">
              {platforms.map((platform, index) => (
                <motion.a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => handlePlatformClick(platform, e)}
                  whileHover={{ x: 4, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-center justify-between bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-all duration-200 group"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">{platform.icon}</span>
                    <div>
                      <h4 className="font-bold text-sm">{platform.name}</h4>
                      <p className="text-gray-600 text-xs leading-tight">{platform.description}</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#222ff1] transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;