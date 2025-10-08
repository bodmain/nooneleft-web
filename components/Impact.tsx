"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaProjectDiagram,
  FaHandsHelping,
  FaBalanceScale,
} from "react-icons/fa";

const stats = [
  { icon: FaUsers, value: 1247, label: "Tình nguyện viên" },
  { icon: FaProjectDiagram, value: 85, label: "Dự án" },
  { icon: FaHandsHelping, value: 5400, label: "Người hưởng lợi" },
  { icon: FaBalanceScale, value: 100, label: "Minh bạch (%)" },
];

export default function Impact() {
  return (
    // 🔸 Nền section: tone be sáng dịu, tách biệt Hero và Story
    <section className="py-20 bg-[#FFF7ED]">
      <div className="container mx-auto px-4">
        {/* Tiêu đề */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-[#f97316]">
            Số liệu thống kê
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Những con số phản ánh tác động mà chúng tôi đã đạt được cùng cộng đồng
          </p>
        </div>

        {/* Grid số liệu */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((S, i) => {
            const Icon = S.icon;
            return (
              <motion.div
                key={i}
                className="group p-6 rounded-3xl 
                           bg-white/90 backdrop-blur-md 
                           shadow-[0_8px_30px_rgba(0,0,0,0.08)] 
                           hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] 
                           transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Icon */}
                <motion.div
                  className="mb-4 flex justify-center text-[#F97316]"
                  whileHover={{
                    rotate: [0, -10, 10, -5, 5, 0],
                    transition: { duration: 0.6 },
                  }}
                >
                  <Icon size={40} />
                </motion.div>

                {/* Số liệu */}
                <h3 className="relative text-3xl font-bold text-gray-800 group-hover:text-[#F97316] transition-colors duration-300">
                  <CountUp end={S.value} duration={2.5} separator="," />

                  {/* Thanh gạch chân highlight */}
                  <span className="absolute left-1/2 -bottom-2 h-1 w-0 bg-[#F97316] rounded-full group-hover:w-12 group-hover:left-[calc(50%-1.5rem)] transition-all duration-500"></span>
                </h3>

                {/* Label */}
                <p className="mt-2 text-gray-600">{S.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
