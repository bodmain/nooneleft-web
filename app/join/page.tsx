"use client";
import { useEffect, useState, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebook, FaInstagram, FaTiktok, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const FAQS = [
  {
    q: "Tôi có cần kinh nghiệm để tham gia không?",
    a: "Không bắt buộc! Chúng tôi luôn chào đón mọi người – dù bạn là sinh viên, người đi làm, hay người khuyết tật, chỉ cần có tấm lòng muốn đóng góp.",
  },
  {
    q: "Tôi có thể tham gia bao nhiêu dự án cùng lúc?",
    a: "Bạn có thể chọn tham gia một hoặc nhiều dự án tùy thời gian và khả năng của mình. Mỗi dự án đều có người phụ trách hỗ trợ bạn.",
  },
  {
    q: "Sau khi gửi đăng ký, bao lâu tôi sẽ được liên hệ?",
    a: "Thường trong vòng 3–5 ngày làm việc, đội ngũ NoOneLeft sẽ gửi email xác nhận và hướng dẫn chi tiết.",
  },
];

const PROJECT_OPTIONS = [
  "Nước sạch cho mọi người",
  "Giáo dục cho trẻ em",
  "Chăm sóc sức khỏe cộng đồng",
  "Trồng cây xanh – Lá bảo vệ",
  "Chung tay vì người khuyết tật",
  "Tết ấm vùng cao",
  "Hỗ trợ y tế lưu động",
  "Thư viện cho trẻ em vùng sâu",
];

function JoinForm() {
  const searchParams = useSearchParams();
  const projectParam = searchParams.get("project");

  const [selectedFAQ, setSelectedFAQ] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    role: "",
    message: "",
  });

  useEffect(() => {
    if (projectParam) {
      setForm((prev) => ({ ...prev, project: projectParam }));
    }
  }, [projectParam]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({
      name: "",
      email: "",
      phone: "",
      project: "",
      role: "",
      message: "",
    });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      {/* === FORM === */}
      <section className="py-20 bg-gradient-to-b from-white to-orange-50 relative">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-orange-600 mb-8"
          >
            Đăng ký tham gia cùng chúng tôi
          </motion.h2>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-md p-8 space-y-6 text-left"
          >
            <div>
              <label className="font-semibold text-gray-700 mb-2 block">Họ và tên</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Nhập họ và tên..."
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none transition"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="font-semibold text-gray-700 mb-2 block">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="Nhập email..."
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none transition"
                  required
                />
              </div>
              <div>
                <label className="font-semibold text-gray-700 mb-2 block">
                  Số điện thoại
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="Nhập số điện thoại..."
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none transition"
                  required
                />
              </div>
            </div>

            <div>
              <label className="font-semibold text-gray-700 mb-2 block">
                Dự án bạn quan tâm
              </label>
              <select
                value={form.project}
                onChange={(e) => setForm({ ...form, project: e.target.value })}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none transition"
              >
                <option value="">-- Chọn dự án --</option>
                {PROJECT_OPTIONS.map((proj, i) => (
                  <option key={i}>{proj}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-semibold text-gray-700 mb-2 block">
                Vai trò bạn muốn tham gia
              </label>
              <select
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none transition"
              >
                <option value="">-- Chọn vai trò --</option>
                <option value="volunteer">Tình nguyện viên</option>
                <option value="donor">Nhà tài trợ</option>
                <option value="media">Hỗ trợ truyền thông</option>
              </select>
            </div>

            <div>
              <label className="font-semibold text-gray-700 mb-2 block">
                Bạn muốn chia sẻ gì thêm?
              </label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Giới thiệu ngắn gọn hoặc chia sẻ mong muốn của bạn..."
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none transition resize-none"
              ></textarea>
            </div>

            <div className="text-center pt-2">
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold rounded-full hover:scale-105 transition shadow-md"
              >
                Gửi đăng ký
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
                    Cảm ơn bạn đã đăng ký tham gia cùng NoOneLeft.
                    <br />
                    Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.
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
        </div>
      </section>

      {/* === FAQ === */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-orange-600 mb-10">
            Câu hỏi thường gặp
          </h2>
          <div className="space-y-4">
            {FAQS.map((item, i) => (
              <div key={i} className="border rounded-xl shadow-sm bg-orange-50">
                <button
                  onClick={() => setSelectedFAQ(selectedFAQ === i ? null : i)}
                  className="w-full text-left px-6 py-4 font-semibold text-gray-800 flex justify-between items-center"
                >
                  {item.q}
                  <span className="text-orange-500">
                    {selectedFAQ === i ? "−" : "+"}
                  </span>
                </button>
                {selectedFAQ === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="px-6 pb-4 text-gray-700"
                  >
                    {item.a}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default function JoinPage() {
  return (
    <>
      {/* === HERO === */}
<section className="relative h-[65vh] flex items-center justify-center text-center text-white overflow-hidden">
  {/* Nền gradient dịu hơn, có chiều sâu nhẹ */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#ffe0b2] via-[#ffb74d] to-[#ff7043]" />

  {/* Overlay đen nhẹ để tăng tương phản cho chữ & logo */}
  <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative z-10 px-6 max-w-2xl"
  >
    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-[0_3px_4px_rgba(0,0,0,0.4)]">
      Hãy viết nên câu chuyện của riêng bạn
    </h1>
    <p className="text-lg md:text-xl font-medium leading-relaxed drop-shadow-[0_2px_3px_rgba(0,0,0,0.4)]">
      Hãy trở thành một phần của hành trình lan tỏa yêu thương – nơi mọi hành động
      nhỏ đều mang đến ý nghĩa lớn lao.
    </p>
  </motion.div>
</section>


      {/* ✅ Gói trong Suspense để tránh lỗi build */}
      <Suspense fallback={<div className="p-10 text-center text-gray-500">Đang tải...</div>}>
        <JoinForm />
      </Suspense>

      {/* === CTA cuối trang === */}
      <section className="py-20 bg-gradient-to-br from-orange-100 to-yellow-50 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-orange-600 mb-4">
            Cảm ơn bạn đã sẵn sàng lan tỏa yêu thương ❤️
          </h2>
          <p className="text-gray-700 mb-8">
            Theo dõi NoOneLeft để cùng chúng tôi cập nhật các dự án, câu chuyện và cơ hội mới.
          </p>
          <div className="flex justify-center gap-6 text-orange-600 text-2xl">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTiktok /></a>
          </div>
          <div className="mt-10">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              Xem thêm dự án khác <FaArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
