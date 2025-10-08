"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import "swiper/css";

const testimonials = [
  {
    name: "Lan Anh",
    avatar: "/images/avt1.jpg",
    quote: `Tham gia NoOneLeft là một trải nghiệm thay đổi cuộc sống của tôi. 
    Tôi từng nghĩ chỉ những hành động lớn mới có thể tạo nên sự khác biệt, 
    nhưng ở đây, tôi học được rằng mỗi việc nhỏ — dù chỉ là chia sẻ một câu chuyện hay giúp đỡ ai đó một chút — 
    đều có sức lan tỏa mạnh mẽ. Cộng đồng luôn khiến tôi cảm thấy mình thuộc về.`,
  },
  {
    name: "Hoàng Nam",
    avatar: "/images/avt2.jpg",
    quote: `Mỗi hoạt động của NoOneLeft đều được tổ chức rất chuyên nghiệp và nhân văn. 
    Tôi đã tham gia các dự án mang nước sạch và giáo dục đến vùng sâu, vùng xa — 
    và chính những nụ cười, ánh mắt của người dân khiến tôi nhận ra ý nghĩa thật sự của việc "không ai bị bỏ lại phía sau".`,
  },
  {
    name: "Minh Đức",
    avatar: "/images/avt3.jpg",
    quote: `Ban đầu tôi chỉ định tham gia một lần cho biết, nhưng sau đó lại gắn bó mãi. 
    Mọi người ở NoOneLeft luôn quan tâm, tôn trọng và truyền năng lượng tích cực. 
    Tôi cảm nhận rõ ràng đây không chỉ là tổ chức tình nguyện, mà là một đại gia đình lan tỏa lòng tốt.`,
  },
  {
    name: "Thu Hà",
    avatar: "/images/avt4.jpg",
    quote: `Tôi đặc biệt ấn tượng với cách NoOneLeft kết nối người khuyết tật vào các hoạt động cộng đồng. 
    Mọi người đều được lắng nghe và đóng góp. 
    Chính sự bao dung và tinh tế đó khiến tôi cảm thấy đây là nơi nuôi dưỡng những điều tử tế thực sự.`,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#fffaf3] via-white to-[#fffaf3]">
      <div className="container mx-auto px-6">
        {/* Tiêu đề */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-3 text-[#f97316]"
        >
          Lời chia sẻ
        </motion.h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Cảm nhận từ những thành viên, tình nguyện viên và người hưởng lợi — mỗi câu chuyện là một minh chứng cho sức mạnh của sự sẻ chia.
        </p>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: true }}
          loop
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                className="p-6 bg-white rounded-2xl shadow-md border border-orange-100 
                           relative overflow-hidden text-center transition-all duration-300
                           hover:-translate-y-1 hover:shadow-xl hover:bg-gradient-to-b 
                           hover:from-orange-50 hover:to-amber-50"
              >
                <Quote className="absolute top-4 left-4 text-orange-300/30 w-6 h-6" />
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover ring-4 ring-[#f97316]/30 shadow-sm"
                />
                <p className="text-gray-700 italic leading-relaxed mb-4 whitespace-pre-line">
                  “{t.quote}”
                </p>
                <div className="font-semibold text-[#f97316]">{t.name}</div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
