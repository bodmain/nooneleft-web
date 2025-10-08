"use client";
import { useEffect, useMemo, useState } from "react";
import { FaWheelchair } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
const SAMPLE_PROJECTS = [
  {
    id: 1,
    title: "Nước sạch cho mọi người",
    img: "/images/nuoc_sach.jpg",
    progress: 70,
    volunteers: 124,
    goal: 200,
    category: "Nước & Môi trường",
    region: "Bắc Giang",
    inclusive: false,
    beneficiaries: 1200,
  },
  {
    id: 2,
    title: "Giáo dục cho trẻ em",
    img: "/images/tang_sach1.jpg",
    progress: 45,
    volunteers: 78,
    goal: 150,
    category: "Giáo dục",
    region: "Hà Nội",
    inclusive: true,
    beneficiaries: 800,
  },
  {
    id: 3,
    title: "Chăm sóc sức khỏe cộng đồng",
   img: "/images/kham_sk.jpg",
    progress: 90,
    volunteers: 220,
    goal: 240,
    category: "Y tế",
    region: "Đà Nẵng",
    inclusive: true,
    beneficiaries: 2100,
  },
  {
    id: 4,
    title: "Trồng cây xanh – Lá bảo vệ",
    img: "/images/tc.jpg",
    progress: 55,
    volunteers: 95,
    goal: 180,
    category: "Môi trường",
    region: "Lâm Đồng",
    inclusive: true,
    beneficiaries: 1300,
  },
  {
    id: 5,
    title: "Chung tay vì người khuyết tật",
    img: "/images/giup_do.jpg",
    progress: 40,
    volunteers: 60,
    goal: 120,
    category: "Hòa nhập",
    region: "TP. Hồ Chí Minh",
    inclusive: true,
    beneficiaries: 900,
  },
  {
    id: 6,
    title: "Tết ấm vùng cao",
    img: "/images/vc.webp",
    progress: 85,
    volunteers: 170,
    goal: 200,
    category: "Cộng đồng",
    region: "Lào Cai",
    inclusive: false,
    beneficiaries: 1500,
  },
  {
    id: 7,
    title: "Hỗ trợ y tế lưu động",
    img: "/images/kham_sk_vc.webp",
    progress: 60,
    volunteers: 110,
    goal: 160,
    category: "Y tế",
    region: "Huế",
    inclusive: false,
    beneficiaries: 1900,
  },
  {
    id: 8,
    title: "Thư viện cho trẻ em vùng sâu",
    img: "/images/tu_sach.jpg",
    progress: 50,
    volunteers: 80,
    goal: 150,
    category: "Giáo dục",
    region: "Nghệ An",
    inclusive: true,
    beneficiaries: 1000,
  },
];

function useCountUp(target: number, duration = 800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration]);
  return count;
}

export default function ProjectsPage() {
  const [visible, setVisible] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [region, setRegion] = useState("");
  const [onlyInclusive, setOnlyInclusive] = useState(false);

  useEffect(() => {
    const on = () => setVisible(true);
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  const projects = useMemo(() => SAMPLE_PROJECTS, []);
  const categories = useMemo(() => Array.from(new Set(projects.map((p) => p.category))), [projects]);
  const regions = useMemo(() => Array.from(new Set(projects.map((p) => p.region))), [projects]);

  const filtered = projects.filter((p) => {
    if (onlyInclusive && !p.inclusive) return false;
    if (keyword && !p.title.toLowerCase().includes(keyword.toLowerCase())) return false;
    if (category && p.category !== category) return false;
    if (region && p.region !== region) return false;
    return true;
  });

  const totalVolunteers = projects.reduce((s, p) => s + p.volunteers, 0);
  const totalProjects = projects.length;
  const totalBeneficiaries = projects.reduce((s, p) => s + p.beneficiaries, 0);

  const volunteersCount = useCountUp(totalVolunteers, 900);
  const projectsCount = useCountUp(totalProjects, 700);
  const beneCount = useCountUp(totalBeneficiaries, 1000);

  return (
    <div className="pt-0">
      <section className="relative h-[75vh] flex items-center justify-center text-center text-white overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-[#fbbf77] via-[#f9a84d] to-[#f97316] animate-[gradientShift_15s_linear_infinite]" />
  <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative z-10 px-6 max-w-3xl"
  >
    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
      Nơi bạn tạo ra thay đổi
    </h1>
    <p className="text-lg md:text-xl font-medium leading-relaxed drop-shadow-md opacity-95">
      Khám phá các dự án thiện nguyện đang diễn ra và chọn nơi bạn muốn
      chung tay tạo khác biệt.
    </p>
  </motion.div>

  <div className="absolute bottom-0 left-0 w-full h-[5px] bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500" />
</section>

      
      {/* === FILTER BAR === */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
          <div className="flex-1 flex items-center gap-2 bg-white shadow-sm rounded-xl px-3 py-2">
            <FiSearch className="text-gray-400" />
            <input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Tìm kiếm dự án..."
              className="w-full outline-none text-sm"
            />
          </div>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-3 py-2 rounded-xl bg-white shadow-sm text-sm"
          >
            <option value="">Tất cả lĩnh vực</option>
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>

          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="px-3 py-2 rounded-xl bg-white shadow-sm text-sm"
          >
            <option value="">Tất cả khu vực</option>
            {regions.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>

          <label className="ml-auto flex items-center gap-2 text-sm text-gray-700">
            <input
              type="checkbox"
              checked={onlyInclusive}
              onChange={(e) => setOnlyInclusive(e.target.checked)}
            />
            <span>Chỉ dự án ♿</span>
          </label>
        </div>

        {/* === PROJECTS GRID === */}
        <div className="grid md:grid-cols-3 gap-8">
          {filtered.map((p) => (
            <article
              key={p.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                {p.inclusive && (
                  <span className="absolute top-3 left-3 flex items-center gap-1 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    <FaWheelchair /> Tiếp cận dễ dàng
                  </span>
                )}
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold mb-1 text-gray-900">{p.title}</h3>
                <p className="text-sm text-gray-600 mb-3">
                  {p.category} • {p.region}
                </p>

                <div className="w-full bg-gray-200 h-1 rounded-full overflow-hidden mb-3">
                  <div
                    className="h-1 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full transition-all duration-700"
                    style={{ width: visible ? `${p.progress}%` : "0%" }}
                  />
                </div>

                <div className="flex items-center justify-between text-sm">
                   <span className="text-gray-700">{p.progress}% hoàn thành</span>
                <div className="flex gap-2">
                   <Link
               href={`/join?project=${encodeURIComponent(p.title)}`}
               className="px-4 py-1.5 bg-gradient-to-r from-orange-500 to-yellow-400 text-white rounded-lg font-medium hover:shadow-md transition"
                 >
                   Tham gia
                  </Link>


                       <Link
                         href={`/projects/${p.id}`}
                          className="px-4 py-1.5 bg-gray-100 text-gray-800 rounded-lg font-medium hover:bg-gray-200 transition"
                       >
                          Xem chi tiết
                       </Link>
                  </div>
               </div>

              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
