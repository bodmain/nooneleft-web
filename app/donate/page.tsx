"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Send, Facebook, Instagram, Linkedin } from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";



/* Tailwind helper */
const inputStyle = "w-full px-4 py-3 border rounded-lg focus:ring-2 ring-orange-400 outline-none";

export default function DonatePage() {
  const [submitted, setSubmitted] = useState(false);
  const [payment, setPayment] = useState("");
  const [selectedAmount, setSelectedAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [showDonationPopup, setShowDonationPopup] = useState(false);
  const [recentDonor, setRecentDonor] = useState({ name: "", amount: "" });
  const [openModal, setOpenModal] = useState(false);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  // 💡 Mô phỏng thông báo “người mới ủng hộ”
  const fakeDonations = [
    { name: "Ngọc Anh", amount: "200.000₫" },
    { name: "Hoàng Minh", amount: "500.000₫" },
    { name: "Thu Trang", amount: "300.000₫" },
    { name: "Lê Huy", amount: "1.000.000₫" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const random = fakeDonations[Math.floor(Math.random() * fakeDonations.length)];
      setRecentDonor(random);
      setShowDonationPopup(true);
      setTimeout(() => setShowDonationPopup(false), 4000);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  const dataPie = [
    { name: "Dự án cộng đồng", value: 82 },
    { name: "Vận hành & quản lý", value: 10 },
    { name: "Truyền thông minh bạch", value: 8 },
  ];
  const COLORS = ["#f97316", "#facc15", "#fb923c"];

  return (
    <div className="pt-0 relative">

      {/* === HERO === */}
      <section className="relative h-[70vh] flex items-center justify-center text-center text-white overflow-hidden">
        <img
          src="/images/tang_sach.jpg"
          alt="Donate hero"
          className="absolute inset-0 w-full h-full object-cover brightness-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-orange-900/60" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Chung tay tạo nên thay đổi
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Mỗi khoản ủng hộ đều giúp chúng tôi tiến gần hơn đến một xã hội không ai bị bỏ lại phía sau.
          </p>
          <a
            href="#donate-form"
            className="inline-block px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full text-white font-semibold hover:scale-105 transition shadow-lg"
          >
            Ủng hộ ngay
          </a>
        </motion.div>
      </section>

      {/* === DONATION FORM === */}
<section id="donate-form" className="py-20 px-6 bg-gradient-to-b from-orange-50 to-white">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-10 border border-orange-100"
  >
    <h2 className="text-3xl font-extrabold text-center mb-10 text-orange-600 tracking-tight">
      Biểu mẫu Ủng hộ
    </h2>

    {submitted ? (
      <div className="text-center text-gray-700 py-10">
        <Heart className="text-orange-500 w-12 h-12 mx-auto mb-4" />
        <p className="text-lg font-semibold">
          Cảm ơn bạn đã ủng hộ NoOneLeft 💛
        </p>
        <p>Chúng tôi sẽ liên hệ xác nhận trong thời gian sớm nhất.</p>
      </div>
    ) : (
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Thông tin cá nhân */}
        <div className="grid md:grid-cols-2 gap-5">
          <input
            type="text"
            placeholder="Họ và tên"
            required
            className="w-full px-4 py-3 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-400 outline-none transition bg-orange-50/30 placeholder-gray-400"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full px-4 py-3 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-400 outline-none transition bg-orange-50/30 placeholder-gray-400"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <input
            type="tel"
            placeholder="Số điện thoại"
            required
            className="w-full px-4 py-3 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-400 outline-none transition bg-orange-50/30 placeholder-gray-400"
          />

          <select
            className="w-full px-4 py-3 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-400 outline-none transition bg-orange-50/30 text-gray-600"
            onChange={(e) => {
              const v = e.target.value;
              if (v === "custom") {
                setSelectedAmount("custom");
                setCustomAmount("");
              } else {
                setSelectedAmount(v);
                setCustomAmount(v);
              }
            }}
            required
          >
            <option value="">Chọn số tiền ủng hộ</option>
            <option value="100000">100.000₫</option>
            <option value="200000">200.000₫</option>
            <option value="500000">500.000₫</option>
            <option value="1000000">1.000.000₫</option>
            <option value="custom">Nhập số tiền khác</option>
          </select>
        </div>

        {selectedAmount === "custom" && (
          <input
            type="number"
            placeholder="Nhập số tiền (VNĐ)"
            className="w-full px-4 py-3 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-400 outline-none transition bg-orange-50/30 placeholder-gray-400"
            onChange={(e) => setCustomAmount(e.target.value)}
            min={10000}
          />
        )}

        <select
          className="w-full px-4 py-3 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-400 outline-none transition bg-orange-50/30 text-gray-600"
          required
          value={payment}
          onChange={(e) => setPayment(e.target.value)}
        >
          <option value="">Chọn phương thức thanh toán</option>
          <option value="momo">Momo</option>
          <option value="zalopay">ZaloPay</option>
          <option value="bank">Chuyển khoản ngân hàng</option>
          <option value="paypal">PayPal</option>
        </select>

        {payment && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-orange-50 border border-orange-200 p-5 rounded-2xl text-gray-700"
          >
            {payment === "bank" && (
              <>
                <p><strong>Ngân hàng:</strong> Vietcombank – CN Hà Nội</p>
                <p><strong>Số TK:</strong> 0123456789</p>
                <p><strong>Chủ TK:</strong> Quỹ NoOneLeft Việt Nam</p>
                <p><strong>Nội Dung CK :</strong> Tên + NoL</p>

                <img src="/images/qr.jpg" alt="QR Bank" className="w-40 mx-auto mt-4 rounded-lg shadow-sm" />
              </>
            )}
            {payment === "momo" && (
              <>
                <p><strong>Momo:</strong> 0909123456 – NoOneLeft</p>
                 <p><strong>Nội Dung CK :</strong> Tên + NoL</p>
                <img src="/images/qr.jpg" alt="QR Momo" className="w-40 mx-auto mt-4 rounded-lg shadow-sm" />
              </>
            )}
            {payment === "zalopay" && (
              <>
                <p><strong>ZaloPay:</strong> 0909123456 – NoOneLeft</p>
                   <p><strong>Nội Dung CK :</strong> Tên + NoL</p>
                <img src="/images/qr.jpg" alt="QR ZaloPay" className="w-40 mx-auto mt-4 rounded-lg shadow-sm" />
              </>
            )}
            {payment === "paypal" && (
              <p>
                <strong>PayPal:</strong>{" "}
                <a
                  href="https://paypal.me/nooneleft"
                  className="text-orange-600 underline hover:text-orange-500"
                >
                  paypal.me/nooneleft
                </a>
              </p>
            )}
          </motion.div>
        )}

        <textarea
          placeholder="Lời nhắn (tùy chọn)"
          rows={4}
          className="w-full px-4 py-3 border border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-400 outline-none transition bg-orange-50/30 placeholder-gray-400"
        />

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="w-full flex justify-center items-center gap-2 py-3 bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all"
        >
          <Send size={18} />
          Gửi ủng hộ
        </motion.button>
      </form>
    )}
  </motion.div>
</section>


    <section className="py-20 bg-gradient-to-b from-orange-50 to-white text-center px-6">
      <h2 className="text-4xl font-bold mb-6 text-orange-600">
        Minh bạch tài chính
      </h2>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
        Chúng tôi cam kết minh bạch 100% trong mọi khoản thu – chi.
        <br />Tất cả số liệu được cập nhật công khai hằng tháng.
      </p>

      {/* Tổng quan nhanh */}
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
        {[
          {
            title: "Tổng thu",
            value: "395.000.000₫",
            color: "bg-green-100 text-green-700",
          },
          {
            title: "Tổng chi",
            value: "350.000.000₫",
            color: "bg-red-100 text-red-700",
          },
          {
            title: "Còn lại",
            value: "45.000.000₫",
            color: "bg-yellow-100 text-yellow-700",
          },
        ].map((item, i) => (
          <div key={i} className={`rounded-2xl p-6 shadow-sm ${item.color}`}>
            <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
            <p className="text-3xl font-bold">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Biểu đồ + Báo cáo */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">
        {/* Biểu đồ tổng quan */}
        <div className="h-80 bg-white rounded-2xl shadow-md p-4">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={dataPie}
                cx="50%"
                cy="50%"
                outerRadius={120}
                dataKey="value"
                labelLine={false}
                label={({ name, percent }) =>
                  `${name}: ${((Number(percent) || 0) * 100).toFixed(0)}%`
                }
              >
                {dataPie.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bảng chi tiết báo cáo */}
        <div className="overflow-x-auto bg-white rounded-2xl shadow-md">
          <table className="w-full text-left border-collapse">
            <thead className="bg-orange-100 text-gray-900">
              <tr>
                <th className="py-3 px-4">Tháng</th>
                <th className="py-3 px-4">Thu</th>
                <th className="py-3 px-4">Chi</th>
                <th className="py-3 px-4">Còn lại</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  month: "8/2025",
                  income: "215.000.000₫",
                  spend: "190.000.000₫",
                  remain: "25.000.000₫",
                },
                {
                  month: "9/2025",
                  income: "180.000.000₫",
                  spend: "160.000.000₫",
                  remain: "20.000.000₫",
                },
              ].map((row, i) => (
                <tr
                  key={i}
                  className="border-b hover:bg-orange-50 transition-all duration-200"
                >
                  <td className="py-3 px-4 font-medium">{row.month}</td>
                  <td className="py-3 px-4">{row.income}</td>
                  <td className="py-3 px-4">{row.spend}</td>
                  <td className="py-3 px-4 font-semibold text-green-700">
                    {row.remain}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Biểu đồ xu hướng tài chính */}
      <div className="max-w-6xl mx-auto mt-16 bg-white p-6 rounded-2xl shadow-md">
        <h3 className="text-2xl font-bold mb-4 text-orange-600 text-left">
          Biến động thu - chi theo tháng
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={[
              { month: "6/2025", income: 150, spend: 130 },
              { month: "7/2025", income: 170, spend: 150 },
              { month: "8/2025", income: 215, spend: 190 },
              { month: "9/2025", income: 180, spend: 160 },
            ]}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="income"
              stroke="#16a34a"
              name="Thu (triệu)"
            />
            <Line
              type="monotone"
              dataKey="spend"
              stroke="#dc2626"
              name="Chi (triệu)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 🟠 Nút xem báo cáo tài chính */}
      <div className="mt-10">
        <button
          onClick={() => setOpenModal(true)}
          className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-xl shadow-md transition"
        >
          Xem chi tiết báo cáo tài chính
        </button>
      </div>

      {/* 🧾 Modal hiển thị báo cáo */}
      <AnimatePresence>
        {openModal && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 w-[90%] max-w-3xl shadow-xl relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button
                onClick={() => setOpenModal(false)}
                className="absolute top-3 right-3 text-gray-600 hover:text-black"
              >
                ✕
              </button>

              <h2 className="text-xl font-semibold mb-4 text-center">
                Báo cáo tài chính minh bạch
              </h2>

              <iframe
                src="/reports/bao_cao.pdf"
                width="100%"
                height="500px"
                className="rounded-lg border"
              />

              <div className="text-center mt-4">
                <a
                  href="/reports/baocao.xlsx"
                  download
                  className="text-blue-600 underline"
                >
                  Tải file Excel (nếu cần)
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>

    {/* === CTA: Xem thêm dự án === */}
<section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50 text-center">
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-3xl font-bold text-orange-600 mb-6"
  >
    Khám phá thêm những dự án ý nghĩa 🌱
  </motion.h2>
  <p className="text-gray-700 max-w-2xl mx-auto mb-10">
    Mỗi dự án đều mang trong mình câu chuyện riêng — cùng chung tay lan tỏa yêu thương
    và tạo nên những thay đổi tích cực.
  </p>

  <motion.a
    href="/projects"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all"
  >
    Xem thêm dự án
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </motion.a>
</section>

      {/* === POPUP NGƯỜI MỚI ỦNG HỘ === */}
      {showDonationPopup && (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          className="fixed bottom-5 left-5 bg-white shadow-xl px-5 py-3 rounded-lg border border-orange-300 flex items-center gap-3"
        >
          <Heart className="text-orange-500" />
          <p className="text-gray-800 text-sm">
            <strong>{recentDonor.name}</strong> vừa ủng hộ{" "}
            <span className="text-orange-600 font-semibold">{recentDonor.amount}</span> 💛
          </p>
        </motion.div>
      )}
    </div>
  );
}

// note: inputStyle defined at top
