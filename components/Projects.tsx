"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Accessibility, ArrowRight, Users } from "lucide-react";
import Link from "next/link";

const featuredProjects = [
  {
    id: 1,
    title: "Nước sạch cho mọi người",
    img: "/images/nuoc_sach.jpg",
    desc: `Dự án mang nguồn nước sạch đến vùng nông thôn và giúp người dân, đặc biệt là người khuyết tật, tiếp cận nước an toàn.
💧 20 giếng khoan, hàng trăm hộ dân được hỗ trợ.`,
    progress: 70,
    inclusive: false,
    category: "Nước & Môi trường",
    region: "Bắc Giang",
  },
  {
    id: 2,
    title: "Giáo dục cho trẻ em",
    img: "/images/tang_sach1.jpg",
    desc: `Tổ chức lớp học miễn phí, tặng tài liệu và hỗ trợ học sinh khó khăn vùng sâu vùng xa.
📚 Hơn 120 em nhỏ được tiếp cận chương trình học mới.`,
    progress: 45,
    inclusive: true,
    category: "Giáo dục",
    region: "Hà Nội",
  },
  {
    id: 3,
    title: "Chăm sóc sức khỏe cộng đồng",
    img: "/images/kham_sk.jpg",
    desc: `Khám bệnh, phát thuốc, tư vấn dinh dưỡng cho người dân vùng thiếu dịch vụ y tế.
❤️ Hàng nghìn người được tiếp cận chăm sóc sức khỏe.`,
    progress: 90,
    inclusive: true,
    category: "Y tế",
    region: "Đà Nẵng",
  },
];

export default function ProjectsHighlight() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-[#fff1e0] to-white">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Tiêu đề */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-10 text-orange-600"
        >
          Dự án nổi bật
        </motion.h2>

        {/* Danh sách dự án */}
        <div className="grid md:grid-cols-3 gap-8">
          {featuredProjects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className={`rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-1 ${
                p.inclusive
                  ? "bg-gradient-to-br from-orange-100 to-amber-50 ring-2 ring-orange-300/70"
                  : "bg-white"
              }`}
            >
              <div className="relative">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-52 object-cover transition-transform duration-500 hover:scale-105"
                />

                {/* Tag nếu dự án thân thiện với người khuyết tật */}
                {p.inclusive && (
                  <div className="absolute top-3 left-3 flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-500 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md">
                    <Accessibility size={18} />
                    <span>Tiếp cận dễ dàng</span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {p.title}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed whitespace-pre-line">
                  {p.desc}
                </p>

                {/* Thanh tiến độ */}
                <div className="w-full bg-gray-200 h-3 rounded-lg overflow-hidden mb-6">
                  <div
                    className="h-3 bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-400 bg-[length:200%_100%] animate-[wave_2s_linear_infinite]"
                    style={{ width: visible ? `${p.progress}%` : "0%" }}
                  />
                </div>

                {/* Nút hành động */}
                <div className="flex gap-3">
                  <Link
                    href={`/projects/${p.id}`}
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-gray-800 font-medium hover:bg-gray-100 transition-all duration-300 group"
                  >
                    <span>Xem chi tiết</span>
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </Link>

                  <Link
                    href={`/join?project=${encodeURIComponent(p.title)}`}
                    className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 ${
                      p.inclusive
                        ? "bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-yellow-400"
                        : "bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-amber-500 hover:to-yellow-300"
                    }`}
                  >
                    <Users size={16} />
                    <span>Tham gia</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Nút xem tất cả */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 flex justify-center"
        >
          <Link
            href="/projects"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center gap-2"
          >
            Xem tất cả dự án →
          </Link>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes wave {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
      `}</style>
    </section>
  );
}
