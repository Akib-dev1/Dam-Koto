"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineLanguage } from "react-icons/hi2";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { GoDotFill } from "react-icons/go";
import { useLanguage } from "./LanguageContext";

const navLinks = [
  { href: "/", bn: "আজকের দাম", en: "Today's Prices" },
  { href: "/report", bn: "দাম জানান", en: "Report Price" },
  { href: "/how-it-works", bn: "যেভাবে কাজ করে", en: "How It Works" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { language, setLang } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const isBangla = language === "bn";

  const toggleLanguage = () => {
    setLang(isBangla ? "en" : "bn");
  };

  const isActiveLink = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E5E5E5] bg-white text-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Navbar */}
        <div className="flex py-4 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="flex flex-col gap-1"
          >
            <span className="text-2xl font-semibold leading-none tracking-wide">
              DamKoto
            </span>

            <span className="text-xs tracking-wide text-[#6B6B6B]">
              <span className="font-siliguri text-sm">দামকত</span> / BANGLADESH
              PRICE INDEX
            </span>
          </Link>

          {/* Right Actions */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            {/* Language Toggle */}
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label="Change language"
              className="flex py-2.5 items-center gap-1.5 rounded-full border border-[#E5E5E5] px-3 text-xs font-medium text-[#525252] transition-colors hover:border-black hover:text-black"
            >
              <span>{isBangla ? "English" : "বাংলা"}</span>
              <HiOutlineLanguage className="text-base" />
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="flex py-2 px-1.5 items-center justify-center rounded-sm border border-[#E5E5E5] text-xl transition-colors hover:border-black md:hidden"
            >
              {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 border-t border-[#E5E5E5] pt-4 md:flex"
        >
          {navLinks.map((link) => {
            const active = isActiveLink(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`relative font-siliguri whitespace-nowrap pb-3 text-sm transition-colors ${
                  active
                    ? "font-semibold border-b-2 border-[#0A0A0A] text-[#0A0A0A]"
                    : "font-normal text-[#6B6B6B] hover:text-black"
                }`}
              >
                {isBangla ? link.bn : link.en}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="border-t border-[#E5E5E5] py-2 md:hidden"
          >
            {navLinks.map((link) => {
              const active = isActiveLink(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`flex min-h-12 items-center justify-between border-b border-[#E5E5E5] py-3 text-sm transition-colors last:border-b-0 ${
                    active
                      ? "font-semibold text-black"
                      : "text-[#6B6B6B] hover:text-black"
                  }`}
                >
                  <span>{isBangla ? link.bn : link.en}</span>

                  {active && <GoDotFill />}
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}
