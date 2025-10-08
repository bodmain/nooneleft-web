"use client";
import { motion } from "framer-motion";
import { Heart, Eye, Star, PieChart, HandCoins, GraduationCap, BookOpen } from "lucide-react";
import { team } from "../data/team";




export default function AboutPage() {
  const missionVisionValues = [
    {
      icon: Heart,
      title: "Sứ mệnh (Mission)",
      desc: "Kết nối cộng đồng, lan tỏa hành động nhỏ để tạo ra thay đổi lớn – không ai bị bỏ lại phía sau.",
    },
    {
      icon: Eye,
      title: "Tầm nhìn (Vision)",
      desc: "Trở thành nền tảng hàng đầu thúc đẩy tinh thần thiện nguyện, nơi mọi người đều có thể đóng góp và phát triển.",
    },
    {
      icon: Star,
      title: "Giá trị cốt lõi (Values)",
      desc: "Tôn trọng – Đồng hành – Minh bạch – Cảm thông. Mỗi hành động đều mang ý nghĩa tích cực.",
    },
  ];

  const whyJoin = [
    { icon: Heart, title: "Lan tỏa yêu thương", desc: "Mỗi hành động nhỏ đều góp phần thay đổi cộng đồng." },
    { icon: Star, title: "Truyền cảm hứng", desc: "Bạn không chỉ giúp người khác mà còn trở thành tấm gương tích cực." },
    { icon: HandCoins, title: "Kết nối cộng đồng", desc: "Gặp gỡ những người cùng chí hướng, xây dựng mạng lưới thiện nguyện." },
    { icon: GraduationCap, title: "Phát triển bản thân", desc: "Học cách kiên nhẫn, đồng cảm, và sáng tạo trong hành động." },
  ];

  const timeline = [
    { year: "2022", text: "Ý tưởng NoOneLeft được khởi xướng bởi nhóm sinh viên." },
    { year: "2023", text: "Ra mắt website đầu tiên, thu hút hàng trăm tình nguyện viên." },
    { year: "2024", text: "Mở rộng hợp tác với tổ chức cộng đồng và doanh nghiệp xã hội." },
    { year: "2025", text: "Phát triển nền tảng & lan tỏa câu chuyện khuyết tật truyền cảm hứng." },
  ];

  const teamMembers = team;

  const finances = [
    { icon: PieChart, label: "Hoạt động cộng đồng", value: 85, color: "from-orange-500 to-yellow-400" },
    { icon: HandCoins, label: "Hành chính & vận hành", value: 10, color: "from-yellow-400 to-amber-300" },
    { icon: GraduationCap, label: "Giáo dục & hỗ trợ", value: 5, color: "from-amber-400 to-orange-300" },
  ];

  const partners = [
    "/images/agr.png",
    "/images/vin.jpg",
    "/images/th.webp",
    "/images/ths.jpg",
  ];

  return (
    <div className="pt-0">
      {/* === HERO SECTION === */}
      <section className="relative flex flex-col justify-center items-center text-center text-white h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ffb347] via-[#ffcc33] to-[#ff9966] bg-[length:200%_200%] animate-[gradientShift_15s_linear_infinite]" />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
        <div className="relative z-10 px-6 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg"
          >
            Giới thiệu về NoOneLeft
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl leading-relaxed font-medium drop-shadow-md"
          >
            NoOneLeft là một sáng kiến phi lợi nhuận với sứ mệnh{" "}
            <span className="font-semibold italic">“Không ai bị bỏ lại phía sau”.</span>
            <br />
            Chúng tôi lan tỏa những câu chuyện tích cực và phát triển các dự án cộng đồng
            để trao cơ hội cho mọi người.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[5px] bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500" />
      </section>

  {/* === Opening Story (Câu chuyện khởi đầu) === */}
<section className="py-16 bg-orange-50">
  <motion.div
    className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    {/* Left Image */}
    <div className="flex justify-center md:justify-start">
      <img 
          src="/images/vc2.webp" 
        alt="Chuyến thiện nguyện" 
        className="w-full md:w-3/4 rounded-lg shadow-xl transform transition duration-500 ease-in-out hover:scale-105 hover:opacity-90"
      />
    </div>

    {/* Right Content */}
    <div>
      <h2 className="text-4xl font-bold text-orange-600 mb-6">Câu chuyện khởi đầu</h2>
      <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
        Tôi từng đọc về một bạn trẻ khuyết tật tham gia chuyến thiện nguyện giúp trẻ em vùng cao. 
        Dù di chuyển vất vả, bạn ấy luôn nở nụ cười rạng rỡ, chủ động phát quà và chơi đùa cùng các em. 
        Giữa tiếng cười của trẻ và ánh mắt kiên định ấy, tôi nhận ra rằng nếu một người có hạn chế về cơ thể vẫn hết lòng cống hiến, thì tôi – một người khỏe mạnh – còn lý do gì để chần chừ?
        <br /><br />
        Câu chuyện giản dị ấy thôi thúc tôi: thiện nguyện không phải điều lớn lao, đôi khi chỉ cần một nụ cười, một lời động viên, hay hành động nhỏ. Người khuyết tật không chỉ cần giúp đỡ – họ cũng có thể truyền cảm hứng. 
        <span className="font-semibold text-orange-600"> Từ suy ngẫm này, NoOneLeft ra đời</span> – nền tảng lan tỏa hành động đẹp và khẳng định rằng mỗi cá nhân đều có giá trị để cống hiến.
      </p>
    </div>
  </motion.div>
</section>

      {/* === Why Join === */}
     <section className="py-16 bg-yellow-50">
  <motion.div
    className="max-w-5xl mx-auto px-6 text-center"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-3xl font-bold text-orange-600 mb-12">Tại sao nên tham gia NoOneLeft?</h2>
    <div className="grid md:grid-cols-2 gap-8">
      {whyJoin.map((item, i) => (
        <motion.div
          key={i}
          className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-md hover:shadow-xl transition flex gap-4 items-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, duration: 0.6 }}
        >
          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gradient-to-r from-orange-500 to-yellow-400 text-white rounded-full">
            <item.icon size={24} />
          </div>
          <div>
            <h4 className="font-bold text-lg text-orange-600 mb-2">{item.title}</h4>
            <p className="text-gray-700">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>


      {/* === Mission – Vision – Values === */}
      <section className="py-20 bg-gradient-to-b from-white to-orange-50">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-orange-600 mb-12"
        >
          Sứ mệnh – Tầm nhìn – Giá trị
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {missionVisionValues.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-8 text-center"
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="mx-auto mb-5 w-14 h-14 flex items-center justify-center bg-gradient-to-r from-orange-500 to-yellow-400 text-white rounded-full"
              >
                <c.icon size={28} />
              </motion.div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">{c.title}</h3>
              <p className="text-gray-600 leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      
 {/* === Timeline === */}
      <section className="py-20 bg-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-orange-600 mb-12"
        >
          Hành trình phát triển
        </motion.h2>

        <div className="max-w-3xl mx-auto border-l-4 border-orange-400 pl-6 space-y-8">
          {timeline.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-orange-500">{t.year}</h3>
              <p className="text-gray-700 mt-2">{t.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* === Team Section (Nâng cấp) === */}
<section className="py-20 bg-gradient-to-b from-orange-50 to-white">
  <motion.h2
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-3xl font-bold text-center text-orange-600 mb-12"
  >
    Đội ngũ của chúng tôi
  </motion.h2>

  <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
  {teamMembers.map((m, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: i * 0.1 }}
        viewport={{ once: true }}
        className="relative rounded-2xl overflow-hidden shadow-lg group bg-white"
      >
        {/* Ảnh đại diện */}
        <img
          src={m.img}
          alt={m.name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay khi hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-5 text-white">
          <h4 className="text-lg font-bold">{m.name}</h4>
          <p className="text-sm text-orange-300">{m.role}</p>
          {m.bio && <p className="text-xs mt-2 italic">{m.bio}</p>}

          {/* Icon mạng xã hội */}
          <div className="flex space-x-3 mt-3">
            {m.linkedin && (
              <a href={m.linkedin} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin text-white hover:text-orange-400"></i>
              </a>
            )}
            {m.facebook && (
              <a href={m.facebook} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook text-white hover:text-orange-400"></i>
              </a>
            )}
            {m.instagram && (
              <a href={m.instagram} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram text-white hover:text-orange-400"></i>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</section>

      {/* === Finance (Minh bạch tài chính) === */}
      <section className="py-20 bg-gradient-to-b from-orange-50 via-[#fff5e1] to-white relative overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-orange-600 mb-4"
        >
          Minh bạch tài chính
        </motion.h2>

        <p className="text-center text-gray-700 mb-12">
          Cam kết minh bạch và sử dụng nguồn lực hiệu quả vì cộng đồng.
        </p>

        <div className="max-w-4xl mx-auto grid gap-8 px-6">
          {finances.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md p-6 hover:shadow-xl transition-all"
            >
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-3">
                  <f.icon className="text-orange-500" size={22} />
                  <h4 className="font-semibold text-gray-800">{f.label}</h4>
                </div>
                <span className="font-bold text-orange-600">{f.value}%</span>
              </div>
              <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${f.value}%` }}
                  transition={{ delay: i * 0.2, duration: 1 }}
                  viewport={{ once: true }}
                  className={`h-4 bg-gradient-to-r ${f.color} rounded-full`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
{/* === Partners === */}
<section className="py-20 bg-gradient-to-t from-white to-[#f9f9f9]">
  <motion.h2
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-3xl font-bold text-center text-orange-600 mb-4"
  >
    Đối tác đồng hành
  </motion.h2>

  <p className="text-center text-lg text-gray-700 mb-12">
    Chúng tôi tự hào khi có sự đồng hành của các đối tác chiến lược, những người đã hỗ trợ chúng tôi trên hành trình phát triển và mang lại giá trị cho cộng đồng.
  </p>

  <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center px-6">
    {partners.map((logo, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: i * 0.15, duration: 0.6 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <img
          src={logo}
          alt={`Partner ${i + 1}`}
          className="w-32 h-auto opacity-100 grayscale-0 transition duration-300"
        />
      </motion.div>
    ))}
  </div>
</section>


      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>
    </div>
  );
}
