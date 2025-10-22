"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// === DỮ LIỆU CÂU CHUYỆN (đồng bộ với StoryDetailPage) ===
const stories = [
  {
    id: 1,
    slug: "hanh-trinh-cua-mot-tinh-nguyen-vien",
    title: "Hành trình của một tình nguyện viên",
    img: "/images/b.jpg",
    desc: "Một chuyến đi vùng cao đã thay đổi cách tôi nhìn về hạnh phúc, chia sẻ và lòng nhân ái.",
    category: "Giáo dục",
  },
  {
    id: 2,
    slug: "hy-vong-cho-tre-em",
    title: "Hy vọng cho trẻ em",
    img: "/images/lop_hoc.jpg",
    desc: "Từ những lớp học nhỏ ở vùng cao, niềm tin và khát vọng được viết nên bằng từng nét chữ đầu tiên.",
    category: "Giáo dục",
  },
  {
    id: 3,
    slug: "cong-dong-la-tren-het",
    title: "Cộng đồng là trên hết",
    img: "/images/lu_thai_nguyen.webp",
    desc: "Giữa đổ nát sau lũ, chúng tôi nhận ra sức mạnh lớn nhất chính là tình người và sự gắn kết.",
    category: "Môi trường",
  },
  {
    id: 4,
    slug: "anh-sang-trong-bong-toi",
    title: "Ánh sáng trong bóng tối",
    img: "/images/as.jpg",
    desc: "Câu chuyện của một cô gái khiếm thị học cách nhìn thấy thế giới bằng trái tim và âm thanh.",
    category: "Cộng đồng",
  },
  {
    id: 5,
    slug: "chuyen-cua-nhung-ban-tre",
    title: "Chuyện của những bạn trẻ",
    img: "/images/tang_sach.jpg",
    desc: "Từ mạng xã hội đến hành động thật – khi người trẻ chọn lan tỏa điều tốt đẹp.",
    category: "Thanh niên",
  },
  {
    id: 6,
    slug: "mot-ngay-khac-biet",
    title: "Một ngày khác biệt",
    img: "/images/ong_lao.webp",
    desc: "Người từng được giúp đỡ quay lại giúp người khác – vòng tròn yêu thương nối dài mãi.",
    category: "Cộng đồng",
  },
];

export default function StoriesPage() {
  const [filter, setFilter] = useState("Tất cả");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ title: "", content: "", file: null });

  const filteredStories =
    filter === "Tất cả"
      ? stories
      : stories.filter((s) => s.category === filter);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ title: "", content: "", file: null });
    setTimeout(() => setSubmitted(false), 3000);
  };
  const images = [
    "/images/tang_sach.jpg",
    "/images/tl2.jpg",
    "/images/tl1.jpg",
    "/images/giup_do.jpg",
    "/images/lu_thai_nguyen.webp",
    "/images/tc.jpg",
  ];

  return (
    <div className="pt-0">
      <section className="relative flex flex-col justify-center items-center text-center text-white h-[80vh] overflow-hidden">
        {/* === Layer 1: Ảnh nền ghép có hiệu ứng xuất hiện tuần tự === */}
        <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-3 gap-[1px]">
          {images.map((src, index) => (
            <motion.img
              key={src}
              src={src}
              alt={`story-${index}`}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: index * 0.3, // ảnh xuất hiện lệch nhau 0.3s
                duration: 1.2,
                ease: "easeOut",
              }}
              className="object-cover w-full h-full brightness-[0.85] hover:brightness-100 transition-all duration-700"
            />
          ))}
        </div>

        {/* === Overlay giống Hero Home: ấm, nhẹ, giúp logo & text nổi bật === */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

        {/* === Layer 2: Nội dung chữ === */}
        <div className="relative z-10 px-6 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: images.length * 0.3 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-[0_3px_8px_rgba(0,0,0,0.7)]"
          >
            Những câu chuyện nhỏ,
            <br />
            <span className="text-orange-400">tạo nên thay đổi lớn.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: images.length * 0.3 + 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-100 font-medium leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
          >
            “Mỗi người đều có một câu chuyện xứng đáng được lắng nghe.
            <br />
            Chúng tôi kể lại để giữ ngọn lửa nhân ái luôn sáng.”
          </motion.p>
        </div>

        {/* Viền gradient dưới để kết nối với phần nội dung */}
        <div className="absolute bottom-0 left-0 w-full h-[5px] bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500" />
      </section>

      {/* === DANH SÁCH CÂU CHUYỆN === */}
      <section className="py-20 bg-gradient-to-b from-white to-orange-50">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-orange-600 mb-8"
        >
          Tất cả câu chuyện
        </motion.h2>

        {/* === BỘ LỌC === */}
        <div className="flex justify-center mb-10 space-x-4 flex-wrap gap-2">
          {["Tất cả", "Giáo dục", "Cộng đồng", "Môi trường", "Thanh niên"].map(
            (cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full border font-medium transition-all duration-300 ${
                  filter === cat
                    ? "bg-gradient-to-r from-orange-500 to-yellow-400 text-white shadow-md scale-105"
                    : "border-orange-300 text-orange-600 hover:bg-orange-50"
                }`}
              >
                {cat}
              </button>
            )
          )}
        </div>

        {/* === LƯỚI HIỂN THỊ CÂU CHUYỆN === */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6"
          >
            {filteredStories.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-transform duration-500 hover:-translate-y-1 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                    <p className="text-white text-sm opacity-90">
                      {s.desc.substring(0, 60)}...
                    </p>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 mb-3 line-clamp-2">{s.desc}</p>
                  <Link
                    href={`/stories/${s.slug}`}
                    className="inline-block px-5 py-2 mt-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-medium hover:scale-105 shadow-md transition"
                  >
                    Đọc toàn bộ câu chuyện →
                  </Link>
                  <div className="mt-3">
                    <span className="text-sm font-medium text-orange-500">
                      #{s.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* === FORM CHIA SẺ CÂU CHUYỆN === */}
      <section className="py-20 bg-white relative">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-orange-600 mb-10"
        >
          Chia sẻ câu chuyện của bạn
        </motion.h2>

        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-md"
        >
          <div className="mb-5">
            <label className="block font-semibold text-gray-700 mb-2">
              Tiêu đề
            </label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="Nhập tiêu đề câu chuyện..."
              required
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none transition"
            />
          </div>

          <div className="mb-5">
            <label className="block font-semibold text-gray-700 mb-2">
              Nội dung
            </label>
            <textarea
              rows={5}
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              placeholder="Viết câu chuyện của bạn..."
              required
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none transition resize-none"
            />
          </div>

          <div className="mb-6">
            <label className="block font-semibold text-gray-700 mb-2">
              Ảnh hoặc video minh họa
            </label>
            <input
              type="file"
              accept="image/*,video/*"
              onChange={(e) =>
                setForm({
                  ...form,
                  file: e.target.files ? e.target.files[0] : null,
                })
              }
              className="w-full text-gray-600"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold rounded-full hover:scale-105 transition shadow-md"
            >
              Gửi câu chuyện
            </button>
          </div>
        </form>

        {/* === MODAL CẢM ƠN === */}
        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            >
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-sm"
              >
                <h3 className="text-2xl font-bold text-orange-600 mb-3">
                  Cảm ơn bạn! 💌
                </h3>
                <p className="text-gray-700 mb-4">
                  Câu chuyện của bạn đã được gửi thành công. Chúng tôi sẽ xem
                  xét và chia sẻ trong cộng đồng sớm nhất.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 bg-orange-500 text-white rounded-full hover:brightness-110 transition"
                >
                  Đóng
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
      `}</style>
    </div>
  );
}
