"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
import { Bebas_Neue, Dancing_Script } from "next/font/google";

// Font mạnh mẽ + truyền cảm hứng
const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const script = Dancing_Script({
  weight: ["400", "700"],
  subsets: ["latin"],
});

// Hiệu ứng gõ chữ
const typingEffect = {
  hidden: { opacity: 0, width: 0 },
  visible: { opacity: 1, width: "auto", transition: { duration: 2, ease: "easeOut" } },
};

const slides = [
  { src: "/images/moi_truong.jpg", title: "Small Action, Big Change", subtitle: "Hành động nhỏ, Thay đổi lớn" },
  { src: "/images/a.webp", title: "Together We Create Impact", subtitle: "Cùng nhau tạo nên tác động" },
  { src: "/images/no.jpg", title: "No One is Left Behind", subtitle: "Không ai bị bỏ lại phía sau" },
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
              <div className="absolute inset-0 bg-black/50" />

              <div className="relative z-10 text-center text-white px-6">
                {/* Slogan chính */}
                {/* Tiêu đề tiếng Anh */}
<motion.h1
  className={`${bebas.className} text-5xl md:text-7xl font-extrabold mb-3 
              bg-gradient-to-r from-[#ff6600] via-[#ffb300] to-[#ffcc33]
              bg-clip-text text-transparent 
              drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]
              tracking-wide uppercase`}
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
>
  {s.title}
</motion.h1>

{/* Subtitle tiếng Việt */}
<motion.p
  className={`${script.className} text-2xl md:text-3xl text-amber-100 italic mb-10 
              drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]`}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, delay: 0.4 }}
>
  {s.subtitle}
</motion.p>


                {/* Nút tham gia */}
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

      {/* Hiệu ứng ánh sáng quét (CSS keyframes) */}
      <style jsx global>{`
        @keyframes shine {
          0% { transform: translateX(-150%); }
          100% { transform: translateX(150%); }
        }
      `}</style>
    </section>
  );
}
