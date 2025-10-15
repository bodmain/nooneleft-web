"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { AiOutlineFontSize } from "react-icons/ai";
import Image from "next/image";
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
          ? "bg-[#fff3e0]/90 backdrop-blur-md shadow-md text-gray-900"
          : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 md:px-10 py-3 md:py-4">
        {/* === LOGO + TEXT === */}
        <Link href="/" className="flex items-center gap-1 md:gap-2">
          <div className="relative w-14 h-14 md:w-16 md:h-16 drop-shadow-md">
            <Image
              src="/images/logo2.png"
              alt="NoOneLeft logo"
              fill
              className="object-contain brightness-[1.1] contrast-[1.15]"
              priority
            />
          </div>

          <div className="flex flex-col leading-tight">
            <span
              className={`${nunito.className} text-[1.7rem] md:text-[2.1rem] font-extrabold 
              bg-gradient-to-r from-[#ff6600] via-[#ff8500] to-[#ffb300]
              bg-clip-text text-transparent drop-shadow-[0_2px_3px_rgba(0,0,0,0.25)]`}
            >
              NoOneLeft
            </span>
            <span className="text-xs md:text-sm italic text-[#f5ad5a] font-[Pacifico] -mt-1">
              No One is Left Behind
            </span>
          </div>
        </Link>

        {/* === DESKTOP MENU === */}
        <nav className="hidden md:flex gap-6 lg:gap-10 text-[17px] font-semibold tracking-wide">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative pb-1 transition-all duration-300 ${
                  active
                    ? "text-[#ff6600] drop-shadow-[0_0_6px_rgba(255,102,0,0.6)]"
                    : "text-inherit hover:text-[#ff6600] hover:drop-shadow-[0_0_6px_rgba(255,102,0,0.5)] hover:scale-105"
                }`}
              >
                {item.name}
                {active && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#ff6600] rounded-full shadow-[0_0_4px_rgba(255,102,0,0.8)]"></span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* === ACTION BUTTONS === */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Font size toggle */}
          <div className="relative group">
            <button
              onClick={() => setLargeText((v) => !v)}
              className="p-2 rounded-full bg-[#ff6600] hover:bg-[#ffa000] text-white transition"
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

      {/* === MOBILE MENU === */}
      {menuOpen && (
        <div className="md:hidden bg-[#fffaf6] text-gray-900 flex flex-col p-6 space-y-4 shadow-lg">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`relative pb-1 transition-all duration-300 ${
                  active
                    ? "text-[#ff6600] font-semibold drop-shadow-[0_0_6px_rgba(255,102,0,0.6)]"
                    : "hover:text-[#ff6600]"
                }`}
              >
                {item.name}
                {active && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#ff6600] rounded-full shadow-[0_0_4px_rgba(255,102,0,0.8)]"></span>
                )}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
