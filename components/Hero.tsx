"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";

// Hiệu ứng gõ chữ
const typingEffect = {
  hidden: { opacity: 0, width: 0 },
  visible: { opacity: 1, width: "auto", transition: { duration: 2, ease: "easeOut" } },
};

const slides = [
  { src: "/images/moi_truong.jpg", title: "Small Action, Big Change", subtitle: "Hành động nhỏ, Thay đổi lớn" },
  { src: "/images/a.webp", title: "Together We Create Impact", subtitle: "Cùng nhau tạo nên tác động" },
  { src: "/images/Thien-nguyen.jpg", title: "No One is Left Behind", subtitle: "Không ai bị bỏ lại phía sau" },
];

export default function Hero() {
  return (
    <section className="relative w-full h-screen">
      <Swiper
        modules={[Autoplay, Navigation, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000 }}
        navigation
        loop
        className="h-full"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <div
              className="h-screen w-full bg-cover bg-center relative flex items-center justify-center"
              style={{ backgroundImage: `url(${s.src})` }}
            >
              <div className="absolute inset-0 bg-black/40" />
              <div className="relative z-10 text-center text-white px-6">
                {/* Title with typing effect */}
                <motion.h1
                  className="text-4xl md:text-6xl font-bold mb-4"
                  initial="hidden"
                  animate="visible"
                  variants={typingEffect}
                >
                  {s.title}
                </motion.h1>

                {/* Subtitle with fade-in */}
                <motion.p
                  className="text-lg md:text-2xl mb-8 text-gray-100"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  {s.subtitle}
                </motion.p>

                {/* Nút Join Us mượt và bắt mắt hơn */}
                <motion.a
                  href="/join"
                  className="relative inline-flex items-center justify-center px-8 py-3 
                             text-lg font-semibold text-white rounded-full 
                             bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-400
                             shadow-[0_0_20px_rgba(249,115,22,0.5)] 
                             hover:shadow-[0_0_35px_rgba(251,191,36,0.8)]
                             hover:scale-105 transition-all duration-500 ease-out
                             overflow-hidden group"
                  whileHover={{ y: -2 }}
                >
                  <span className="relative z-10">Tham gia ngay</span>
                  {/* Hiệu ứng ánh sáng quét qua */}
                  <span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                               translate-x-[-200%] group-hover:translate-x-[200%] 
                               transition-transform duration-1000 ease-out"
                  ></span>
                </motion.a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
