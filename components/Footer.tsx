"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Youtube, Mail } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <footer
      className="relative text-gray-800 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #fff7ec 0%, #ffe3b3 100%)",
      }}
    >
      {/* Thanh viền trên */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500" />

      {/* Nội dung chính */}
      <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* 1. Logo + Slogan */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          <Link href="/" className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center bg-[#e85c34] text-white rounded-full w-12 h-12">
              <span className="font-semibold text-2xl">N</span>
            </div>
            <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#e85c34] to-[#f8b400]">
              NoOneLeft
            </span>
          </Link>
          <p className="text-gray-700 leading-relaxed">
            Cùng nhau lan tỏa hành động tích cực – để không ai bị bỏ lại phía sau.
          </p>
        </motion.div>

        {/* 2. Liên kết menu */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-xl font-bold text-gray-900 mb-4"
          >
            Liên kết
          </motion.h3>

          <ul className="space-y-2 text-gray-700">
            <li>
              <Link href="/" className="hover:text-orange-500 transition-colors font-normal">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-orange-500 transition-colors font-normal">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-orange-500 transition-colors font-normal">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/stories" className="hover:text-orange-500 transition-colors font-normal">
                Stories
              </Link>
            </li>
            <li>
              <Link href="/join" className="hover:text-orange-500 transition-colors font-normal">
                Join
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* 3. Mạng xã hội */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
        >
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-xl font-bold text-gray-900 mb-4"
          >
            Kết nối
          </motion.h3>

          <div className="flex space-x-4">
            {[
              { icon: Facebook, link: "#" },
              { icon: Instagram, link: "#" },
              { icon: Youtube, link: "#" },
              { icon: Mail, link: "mailto:contact@nooneleft.org" },
            ].map(({ icon: Icon, link }, i) => (
              <motion.a
                key={i}
                href={link}
                target="_blank"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 rounded-full bg-white/60 hover:bg-orange-500 hover:text-white transition-all shadow-sm"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* 4. Đăng ký nhận tin */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
        >
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-xl font-bold text-gray-900 mb-4"
          >
            Nhận tin mới
          </motion.h3>

          <p className="text-gray-700 mb-4">
            Cập nhật hoạt động và cơ hội tham gia cùng cộng đồng.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex items-center bg-white/80 rounded-full p-1 overflow-hidden shadow-sm"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Nhập email của bạn"
              className="flex-1 px-4 py-2 bg-transparent text-sm outline-none text-gray-700 placeholder-gray-500"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold px-5 py-2 rounded-full hover:brightness-110 transition-all"
            >
              Gửi
            </button>
          </form>

          {submitted && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-600 text-sm mt-3"
            >
              Cảm ơn bạn đã đăng ký! 💌
            </motion.p>
          )}
        </motion.div>
      </div>

      {/* Bản quyền */}
      <div className="mt-10 border-t border-orange-200/60 text-center text-sm text-gray-700 py-6 bg-white/40 backdrop-blur-sm">
        © 2025 NoOneLeft. All rights reserved.
      </div>
    </footer>
  );
}
