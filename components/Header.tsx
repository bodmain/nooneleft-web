"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { AiOutlineFontSize } from "react-icons/ai";

// Font: Nunito Sans (ấm áp, thiện nguyện)
import { Nunito_Sans } from "next/font/google";
const nunito = Nunito_Sans({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [largeText, setLargeText] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.fontSize = largeText ? "18px" : "16px";
  }, [largeText]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Stories", href: "/stories" },
    { name: "Projects", href: "/projects" },
    { name: "Join", href: "/join" },
  ];

  return (
    <header
      className={`${nunito.className} fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-[#f4e6c9]/90 backdrop-blur-md shadow-md text-gray-900"
          : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 md:px-10 py-3 md:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 md:gap-3">
          <div className="flex items-center justify-center bg-[#e85c34] text-white rounded-full w-9 h-9 md:w-10 md:h-10">
            <span className="font-semibold text-lg md:text-xl">N</span>
          </div>
          <span className="text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#e85c34] to-[#f8b400]">
            NoOneLeft
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 lg:gap-10 text-[17px] font-semibold tracking-wide">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative pb-1 transition-all duration-300 ${
                  active
                    ? "text-[#e85c34]"
                    : "hover:text-[#e85c34] hover:scale-105 text-inherit"
                }`}
              >
                {item.name}
                {active && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#e85c34] rounded"></span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Font size toggle */}
          <div className="relative group">
            <button
              onClick={() => setLargeText((v) => !v)}
              className="p-2 rounded-full bg-[#e85c34] hover:bg-[#f8b400] text-white transition"
            >
              <AiOutlineFontSize size={20} />
            </button>
            <span className="absolute top-full mt-1 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded bg-gray-700 text-white opacity-0 group-hover:opacity-100 transition">
              Tăng cỡ chữ
            </span>
          </div>

          {/* Hamburger (mobile) */}
          <button
            className="md:hidden ml-2"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#fffaf6] text-gray-900 flex flex-col p-6 space-y-4 shadow-lg">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`relative pb-1 ${
                  active ? "text-[#e85c34] font-semibold" : "hover:text-[#e85c34]"
                }`}
              >
                {item.name}
                {active && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#e85c34] rounded"></span>
                )}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
