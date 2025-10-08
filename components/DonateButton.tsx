"use client";
import { Heart } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DonateButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link
        href="/donate"
        className="flex items-center gap-2 px-5 py-3 rounded-full shadow-lg bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300"
      >
        <Heart className="w-5 h-5 animate-pulse" />
        <span>Donate</span>
      </Link>
    </motion.div>
  );
}
