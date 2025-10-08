"use client";

import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Parallax } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/parallax";

const stories = [
  {
    id: 1,
    slug: "hanh-trinh-cua-mot-tinh-nguyen-vien",
    img: "/images/b.jpg",
    title: "Hành trình của một tình nguyện viên",
    teaser: "Một chuyến đi vùng cao đã thay đổi cách tôi nhìn về hạnh phúc và lòng nhân ái.",
    desc:
      "Từ những đôi chân trần trên con dốc cao, tôi nhận ra rằng hạnh phúc không phải là nhận được, mà là được chia sẻ. Một hành trình giản dị nhưng đã để lại dấu ấn sâu sắc trong trái tim tôi.",
    meta: "Tháng 9, 2025 — Hà Giang",
  },
  {
    id: 2,
    slug: "hy-vong-cho-tre-em",
    img: "/images/lop_hoc.jpg",
    title: "Hy vọng cho trẻ em",
    teaser: "Một lớp học nhỏ, một tương lai lớn.",
    desc:
      "Ở vùng núi xa xôi, nơi lớp học chỉ là căn nhà gỗ cũ, những đứa trẻ vẫn đến lớp mỗi ngày với đôi mắt sáng rực. Câu chuyện về lòng kiên trì và niềm tin vào tương lai bắt đầu từ chính nơi ấy.",
    meta: "Tháng 7, 2025 — Kon Tum",
  },
  {
    id: 3,
    slug: "cong-dong-la-tren-het",
    img: "/images/lu_lut.jpg",
    title: "Cộng đồng là trên hết",
    teaser: "Khi thiên tai qua đi, tình người ở lại.",
    desc:
      "Sau cơn lũ, mọi người cùng nhau dựng lại từng mái nhà, từng nụ cười. Đó là lúc tôi hiểu rằng sức mạnh lớn nhất của con người chính là khi chúng ta nắm tay nhau vượt qua thử thách.",
    meta: "Tháng 11, 2024 — Quảng Trị",
  },
  {
    id: 4,
    slug: "anh-sang-trong-bong-toi",
    img: "/images/as.jpg",
    title: "Ánh sáng trong bóng tối",
    teaser: "Một cô gái khiếm thị đã tìm thấy ánh sáng theo cách riêng.",
    desc:
      "Cô không nhìn thấy thế giới, nhưng lại khiến người khác nhìn thấy tình yêu thương. Giọng đọc của cô vang lên trong những câu chuyện cổ tích gửi tới hàng trăm đứa trẻ vùng cao.",
    meta: "Tháng 3, 2025 — Hà Nội",
  },
  {
    id: 5,
    slug: "chuyen-cua-nhung-ban-tre",
    img: "/images/tang_sach.jpg",
    title: "Chuyện của những bạn trẻ",
    teaser: "Khi mạng xã hội trở thành nơi gieo hạt điều tốt.",
    desc:
      "Một nhóm sinh viên khởi đầu bằng bài đăng kêu gọi quyên góp sách cũ, và rồi lan tỏa thành dự án “Tủ sách NoOneLeft” giúp hàng ngàn em nhỏ có cơ hội đọc sách và học tập.",
    meta: "Tháng 5, 2025 — TP. Hồ Chí Minh",
  },
  {
    id: 6,
    slug: "mot-ngay-khac-biet",
    img: "/images/ong_lao.webp",
    title: "Một ngày khác biệt",
    teaser: "Khi người được giúp đỡ trở thành người giúp đỡ.",
    desc:
      "Câu chuyện cảm động của chú Hòa – người từng được hỗ trợ nay lại trở thành tình nguyện viên tích cực nhất. Một vòng tròn của lòng tốt, cứ thế nối dài mãi.",
    meta: "Tháng 1, 2025 — Huế",
  },
];

export default function Story() {
  const [active, setActive] = useState(stories[0]);
  const [paused, setPaused] = useState(false);
  const swiperRef = useRef<any>(null);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // === Auto rotate logic ===
  useEffect(() => {
    if (paused) return; // stop when hover
    const interval = setInterval(() => {
      const idx = stories.findIndex((s) => s.id === active.id);
      const next = stories[(idx + 1) % stories.length];
      setActive(next);
      if (swiperRef.current?.swiper) {
        swiperRef.current.swiper.slideTo((idx + 1) % stories.length);
      }
    }, 7000); // auto change every 7s
    return () => clearInterval(interval);
  }, [active, paused]);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
      className="py-20 bg-gradient-to-b from-white to-orange-50"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div variants={fadeIn} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#f97316] mb-3">
            Câu chuyện của tuần
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mỗi tuần, chúng tôi chọn ra một câu chuyện đặc biệt — nơi lòng tốt, nghị lực
            và sự sẻ chia được kể bằng những cảm xúc chân thật nhất.
          </p>
        </motion.div>

        {/* Main featured story */}
        <motion.div variants={fadeIn} className="max-w-5xl mx-auto mb-10">
          <div className="rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.06)] bg-white/80 backdrop-blur-md grid md:grid-cols-2 transition-all duration-500">
            {/* Image side */}
            <div className="relative overflow-hidden group">
              <motion.img
                key={active.id}
                src={active.img}
                alt={active.title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1, transition: { duration: 1.2, ease: "easeOut" } }}
                className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <motion.div
                key={`teaser-${active.id}`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.8 } }}
                className="absolute left-6 bottom-6 text-white max-w-[70%]"
              >
                <p className="italic text-sm opacity-90 mb-2">📅 {active.meta}</p>
                <p className="text-lg md:text-xl font-medium drop-shadow-lg">{active.teaser}</p>
              </motion.div>
            </div>

            {/* Content side */}
            <div className="p-8 flex flex-col justify-center">
              <p className="text-sm text-gray-400 mb-2">{active.meta}</p>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{active.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {active.desc.length > 200 ? active.desc.slice(0, 200) + "…" : active.desc}
              </p>
              <div className="flex items-center gap-4">
                <motion.a
                  href={`/stories/${active.slug}`}
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold shadow-lg"
                >
                  Đọc toàn bộ câu chuyện →
                </motion.a>

                <button
                  className="px-4 py-2 rounded-full border border-gray-200 text-gray-700 text-sm hover:bg-gray-100 transition"
                  onClick={() => {
                    const idx = stories.findIndex((s) => s.id === active.id);
                    const next = stories[(idx + 1) % stories.length];
                    setActive(next);
                    if (swiperRef.current?.swiper) {
                      swiperRef.current.swiper.slideTo((idx + 1) % stories.length);
                    }
                  }}
                >
                  Tiếp theo
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Small carousel */}
        <motion.div variants={fadeIn} className="max-w-5xl mx-auto">
          <Swiper
            modules={[Pagination, Parallax]}
            pagination={{ clickable: true }}
            parallax
            speed={800}
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            onSwiper={(s) => (swiperRef.current = s)}
            className="py-4"
          >
            {stories.map((s) => (
              <SwiperSlide key={s.id}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="rounded-2xl overflow-hidden bg-white shadow hover:shadow-lg cursor-pointer"
                  onClick={() => setActive(s)}
                >
                  <div className="relative">
                    <img src={s.img} alt={s.title} className="w-full h-40 object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute left-4 bottom-4 text-white">
                      <p className="text-sm opacity-90 mb-1">{s.meta}</p>
                      <h4 className="text-lg font-semibold">{s.title}</h4>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 text-sm line-clamp-3">{s.desc}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Button “Xem tất cả” */}
        <motion.div variants={fadeIn} className="text-center mt-12">
          <a
            href="/stories"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#f97316] to-[#fbbf24] text-white font-semibold shadow-lg hover:scale-105 transition-transform"
          >
            Xem tất cả câu chuyện →
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
