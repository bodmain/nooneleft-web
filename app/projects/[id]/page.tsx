"use client";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaUsers, FaClock, FaWheelchair, FaFilePdf } from "react-icons/fa";

// ====================
// DỮ LIỆU 8 DỰ ÁN
// ====================
const PROJECT_DETAILS: Record<number, any> = {
  1: {
    title: "Nước sạch cho mọi người",
     img: "/images/nuoc_sach.jpg",
    location: "Bắc Giang",
    time: "Tháng 5/2024 – Tháng 9/2024",
    volunteers: 124,
    goal: 200,
    inclusive: false,
    organizer: "Tổ chức NoOneLeft Việt Nam",
    manager: "Trần Quỳnh Anh",
    beneficiaries: "1.200 người dân tại 6 xã vùng cao",
    mainActivities: [
      "Khoan và lắp đặt 20 giếng nước sạch",
      "Tập huấn kỹ năng vệ sinh và bảo vệ nguồn nước",
      "Cung cấp ống dẫn và hệ thống lọc cơ bản cho hộ nghèo",
    ],
    report: "/reports/project1.pdf",
    desc: `Dự án “Nước sạch cho mọi người” mang sứ mệnh cung cấp nguồn nước an toàn đến các vùng nông thôn khó khăn, 
đặc biệt là hỗ trợ người khuyết tật tiếp cận nước sạch hằng ngày. 
Hơn 20 giếng khoan và hệ thống lọc nước đã được hoàn thành, mang lại cuộc sống khỏe mạnh và hạnh phúc hơn cho hàng nghìn người.`,
    impacts: [
      { label: "Giếng nước được xây", value: 20 },
      { label: "Hộ gia đình được hỗ trợ", value: 350 },
      { label: "Tình nguyện viên tham gia", value: 124 },
    ],
    comments: [
      { text: "Thật xúc động khi thấy những nụ cười hạnh phúc của người dân.", author: "Ngọc Anh" },
      { text: "Mình rất tự hào khi góp phần nhỏ bé mang lại nguồn nước sạch cho mọi người.", author: "Minh Khoa" },
    ],
  },

  2: {
    title: "Giáo dục cho trẻ em",
    img: "/images/tang_sach1.jpg",
    location: "Hà Nội",
    time: "Tháng 3/2024 – nay",
    volunteers: 78,
    goal: 150,
    inclusive: true,
    organizer: "Nhóm Tình Nguyện Ánh Sáng",
    manager: "Phạm Hoàng Linh",
    beneficiaries: "800 học sinh nghèo vùng ven đô",
    mainActivities: [
      "Tổ chức 15 lớp học kỹ năng và tiếng Anh miễn phí",
      "Tặng hơn 2.000 bộ sách và dụng cụ học tập",
      "Kết nối sinh viên tình nguyện hỗ trợ học sinh",
    ],
    report: "/reports/project2.pdf",
    desc: `Dự án mang đến cơ hội học tập cho trẻ em nghèo vùng ven đô. 
Những lớp học miễn phí và tài liệu hỗ trợ đã giúp hơn 800 em nhỏ tiếp cận kiến thức, rèn luyện kỹ năng sống và phát triển tư duy sáng tạo.`,
    impacts: [
      { label: "Lớp học được tổ chức", value: 15 },
      { label: "Học sinh được hỗ trợ", value: 120 },
      { label: "Tình nguyện viên tham gia", value: 78 },
    ],
    comments: [
      { text: "Các em nhỏ thật đáng yêu, năng lượng tích cực lan tỏa mạnh mẽ!", author: "Lan Hương" },
    ],
  },

  3: {
    title: "Chăm sóc sức khỏe cộng đồng",
    img: "/images/kham_sk.jpg",
    location: "Đà Nẵng",
    time: "Tháng 1/2024 – nay",
    volunteers: 220,
    goal: 240,
    inclusive: true,
    organizer: "Bệnh viện Từ Tâm & NoOneLeft",
    manager: "BS. Nguyễn Quốc Việt",
    beneficiaries: "Người khuyết tật, người cao tuổi, hộ nghèo vùng sâu",
    mainActivities: [
      "Tổ chức khám bệnh miễn phí cho hơn 2.000 người",
      "Phát thuốc và dụng cụ y tế cơ bản",
      "Truyền thông nâng cao nhận thức sức khỏe cộng đồng",
    ],
    report: "/reports/project3.pdf",
    desc: `Dự án hướng tới việc nâng cao nhận thức y tế, tổ chức khám bệnh và cấp phát thuốc miễn phí cho người nghèo, người khuyết tật. 
Đội ngũ y bác sĩ cùng tình nguyện viên di chuyển tới nhiều xã vùng sâu để hỗ trợ tận nơi.`,
    impacts: [
      { label: "Người dân được khám chữa bệnh", value: 2100 },
      { label: "Buổi truyền thông sức khỏe", value: 24 },
      { label: "Tình nguyện viên tham gia", value: 220 },
    ],
    comments: [
      { text: "Một dự án thực tế và đầy nhân văn, giúp đỡ đúng người, đúng nơi!", author: "Quốc Huy" },
    ],
  },

  4: {
    title: "Trồng cây xanh – Lá bảo vệ",
    img: "/images/tc.jpg",
    location: "Lâm Đồng",
    time: "Tháng 6/2024 – nay",
    volunteers: 95,
    goal: 180,
    inclusive: true,
    organizer: "Câu lạc bộ Môi Trường Xanh",
    manager: "Nguyễn Minh Duy",
    beneficiaries: "Người dân địa phương và môi trường sinh thái",
    mainActivities: [
      "Trồng 10.000 cây xanh tại 3 khu rừng bị cháy",
      "Tổ chức chiến dịch “Một cây cho tương lai”",
      "Đào tạo kỹ năng chăm sóc cây cho người dân và người khuyết tật",
    ],
    report: "/reports/project4.pdf",
    desc: `Dự án khuyến khích cộng đồng cùng chung tay trồng cây, phục hồi rừng bị tàn phá. 
Người khuyết tật cũng tham gia trồng cây, chăm sóc vườn ươm, góp phần lan tỏa thông điệp bảo vệ hành tinh.`,
    impacts: [
      { label: "Cây xanh được trồng", value: 10000 },
      { label: "Khu vực phục hồi rừng", value: 6 },
      { label: "Tình nguyện viên tham gia", value: 95 },
    ],
    comments: [
      { text: "Cảm giác được trồng cây, góp phần bảo vệ môi trường thật tuyệt vời!", author: "Phương Nam" },
    ],
  },

  5: {
    title: "Chung tay vì người khuyết tật",
    img: "/images/giup_do.jpg",
    location: "TP. Hồ Chí Minh",
    time: "Tháng 4/2024 – Tháng 10/2024",
    volunteers: 60,
    goal: 120,
    inclusive: true,
    organizer: "Trung tâm Hòa nhập Việt Nam",
    manager: "Ngô Thảo Nhi",
    beneficiaries: "180 người khuyết tật và gia đình",
    mainActivities: [
      "Tổ chức khóa đào tạo kỹ năng nghề (thêu, may, tin học)",
      "Hỗ trợ thiết bị lao động cho người khuyết tật",
      "Tổ chức Ngày hội Hòa nhập và Triển lãm sản phẩm handmade",
    ],
    report: "/reports/project5.pdf",
    desc: `Dự án tập trung vào việc tạo cơ hội việc làm và hòa nhập xã hội cho người khuyết tật. 
Thông qua đào tạo, hỗ trợ và kết nối doanh nghiệp, dự án giúp nhiều người khuyết tật tự lập và tự tin hơn.`,
    impacts: [
      { label: "Người khuyết tật được đào tạo", value: 180 },
      { label: "Doanh nghiệp hợp tác", value: 25 },
      { label: "Sự kiện hòa nhập tổ chức", value: 10 },
    ],
    comments: [
      { text: "Mình rất xúc động khi thấy người khuyết tật được trao cơ hội thật sự.", author: "Thu Hà" },
    ],
  },

  6: {
    title: "Tết ấm vùng cao",
    img: "/images/vc.webp",
    location: "Lào Cai",
    time: "Tháng 1/2024 – Tháng 2/2024",
    volunteers: 170,
    goal: 200,
    inclusive: false,
    organizer: "CLB Sinh viên NoOneLeft",
    manager: "Lê Quang Trung",
    beneficiaries: "Hơn 1.500 hộ dân vùng cao",
    mainActivities: [
      "Phát quà Tết, chăn ấm, lương thực, nhu yếu phẩm",
      "Tổ chức hoạt động giao lưu văn hóa và vui chơi",
      "Kêu gọi doanh nghiệp tài trợ lâu dài cho các hộ nghèo",
    ],
    report: "/reports/project6.pdf",
    desc: `Dự án mang những phần quà Tết ấm áp, áo ấm và thực phẩm đến các hộ nghèo vùng cao Lào Cai. 
Tinh thần sẻ chia, đoàn kết lan tỏa mạnh mẽ trong cộng đồng.`,
    impacts: [
      { label: "Hộ gia đình được hỗ trợ", value: 350 },
      { label: "Tình nguyện viên tham gia", value: 170 },
    ],
    comments: [
      { text: "Một Tết ấm áp và đầy ý nghĩa cho bà con vùng cao.", author: "Mai Trâm" },
    ],
  },

  7: {
    title: "Hỗ trợ y tế lưu động",
    img: "/images/kham_sk_vc.webp",
    location: "Huế",
    time: "Tháng 2/2024 – nay",
    volunteers: 110,
    goal: 160,
    inclusive: false,
    organizer: "Sở Y tế Thừa Thiên Huế",
    manager: "BS. Lê Văn Nam",
    beneficiaries: "Người dân vùng sâu vùng xa",
    mainActivities: [
      "Tổ chức các chuyến xe y tế lưu động khám miễn phí",
      "Phát thuốc và dụng cụ y tế",
      "Tư vấn sức khỏe và chế độ dinh dưỡng",
    ],
    report: "/reports/project7.pdf",
    desc: `Đội ngũ y bác sĩ cùng tình nguyện viên tổ chức các chuyến xe y tế lưu động, 
đưa dịch vụ khám chữa bệnh đến với vùng sâu, vùng xa.`,
    impacts: [
      { label: "Người dân được khám", value: 1900 },
      { label: "Chuyến xe y tế", value: 18 },
    ],
    comments: [
      { text: "Một hành trình đầy nhân văn, mang y tế đến với mọi người.", author: "Thanh Bình" },
    ],
  },

  8: {
    title: "Thư viện cho trẻ em vùng sâu",
    img: "/images/tu_sach.jpg",
    location: "Nghệ An",
    time: "Tháng 3/2024 – nay",
    volunteers: 80,
    goal: 150,
    inclusive: true,
    organizer: "Quỹ Tri Thức Việt",
    manager: "Hoàng Bảo Nhi",
    beneficiaries: "1.000 trẻ em vùng sâu vùng xa",
    mainActivities: [
      "Xây dựng 12 thư viện nhỏ",
      "Tặng hơn 4.000 quyển sách",
      "Tổ chức hoạt động đọc sách cùng người khuyết tật",
    ],
    report: "/reports/project8.pdf",
    desc: `Dự án xây dựng thư viện và tặng sách cho học sinh vùng sâu, vùng xa. 
Người khuyết tật cũng tham gia sắp xếp và đọc truyện cùng trẻ em.`,
    impacts: [
      { label: "Thư viện được xây dựng", value: 12 },
      { label: "Sách được quyên góp", value: 4000 },
    ],
    comments: [
      { text: "Một không gian nhỏ nhưng chứa đầy tri thức và yêu thương.", author: "Phương Anh" },
    ],
  },
};

// ==================== COMPONENT ====================
export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const project = PROJECT_DETAILS[Number(id)];

  if (!project)
    return <div className="p-20 text-center text-gray-600">Không tìm thấy dự án này.</div>;

  return (
    <div className="pt-0">
      {/* HERO */}
      <section className="relative h-[70vh] flex items-center justify-center text-center text-white overflow-hidden">
        <img src={project.img} alt={project.title} className="absolute inset-0 w-full h-full object-cover brightness-75" />
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg mb-3">{project.title}</h1>
          {project.inclusive && (
            <div className="inline-flex items-center bg-orange-500/90 px-4 py-1 rounded-full text-sm font-semibold shadow-md">
              <FaWheelchair className="mr-2" /> Dễ dàng tiếp cận
            </div>
          )}
        </motion.div>
      </section>

      {/* NỘI DUNG CHI TIẾT */}
      <section className="py-16 px-6 md:px-16 max-w-4xl mx-auto space-y-12">
        <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">{project.desc}</p>

        <div className="grid md:grid-cols-2 gap-6 text-gray-700">
          <p><FaMapMarkerAlt className="inline text-orange-500 mr-2" /> <strong>Địa điểm:</strong> {project.location}</p>
          <p><FaClock className="inline text-orange-500 mr-2" /> <strong>Thời gian:</strong> {project.time}</p>
          <p><FaUsers className="inline text-orange-500 mr-2" /> <strong>Tình nguyện viên:</strong> {project.volunteers}/{project.goal}</p>
          <p><strong>Đối tượng hưởng lợi:</strong> {project.beneficiaries}</p>
          <p><strong>Đơn vị tổ chức:</strong> {project.organizer}</p>
          <p><strong>Người phụ trách:</strong> {project.manager}</p>
        </div>

        {/* HOẠT ĐỘNG CHÍNH */}
        <div>
          <h3 className="text-2xl font-bold text-orange-600 mb-3">Hoạt động chính</h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            {project.mainActivities.map((act: string, i: number) => <li key={i}>{act}</li>)}
          </ul>
        </div>

        {/* BÁO CÁO MINH BẠCH */}
        <div>
          <h3 className="text-2xl font-bold text-orange-600 mb-3">Báo cáo minh bạch</h3>
          <a href={project.report} target="_blank" className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 font-medium transition">
            <FaFilePdf className="mr-2 text-red-500" /> Xem báo cáo (PDF)
          </a>
        </div>
          {/* NÚT THAM GIA DỰ ÁN */}
          <button
          onClick={() => router.push(`/join?project=${encodeURIComponent(project.title)}`)}
            className="px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold rounded-full hover:scale-105 transition shadow-md"
              >
             Tham gia dự án này
            </button>
        
        {/* KẾT QUẢ */}
        <div>
          <h3 className="text-2xl font-bold text-orange-600 mb-4">Kết quả đạt được</h3>
          {project.impacts.map((imp: any, i: number) => (
            <div key={i}>
              <p className="text-gray-800 font-medium mb-1">{imp.label}</p>
              <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: `${Math.min(imp.value * 5, 100)}%` }} transition={{ delay: i * 0.2, duration: 0.8 }} viewport={{ once: true }} className="h-3 bg-gradient-to-r from-orange-500 to-yellow-400" />
              </div>
            </div>
          ))}
        </div>

        {/* CẢM NHẬN */}
        <div className="border-t pt-8">
          <h3 className="text-2xl font-bold text-orange-600 mb-4">Cảm nhận từ cộng đồng</h3>
          <div className="space-y-5">
            {project.comments.map((c: any, i: number) => (
              <motion.blockquote key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }} className="bg-orange-50 p-5 rounded-xl shadow-sm">
                <p className="italic text-gray-700 mb-2">“{c.text}”</p>
                <span className="text-sm text-gray-500">— {c.author}</span>
              </motion.blockquote>
            ))}
          </div>
        </div>

        {/* NÚT QUAY LẠI */}
        <div className="text-center mt-12">
          <button
            onClick={() => router.push("/projects")}
            className="px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold rounded-full hover:scale-105 transition shadow-md"
          >
            ← Quay lại tất cả dự án
          </button>
        </div>
      </section>
    </div>
  );
}
