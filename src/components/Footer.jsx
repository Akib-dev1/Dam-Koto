"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageContext";
export default function Footer() {
  const { language } = useLanguage();
  const isBangla = language === "bn";

  const t = {
    tagline: isBangla
      ? "দাম জানুন। বাজার বুঝুন।"
      : "Know the market. Compare the numbers.",
    description: isBangla
      ? "বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের বাজারদর, এক জায়গায়।"
      : "A clearer picture of everyday prices across Bangladesh.",
    navigation: isBangla ? "নেভিগেশন" : "NAVIGATION",
    information: isBangla ? "তথ্য" : "INFORMATION",
    home: isBangla ? "আজকের দাম" : "Today's prices",
    compare: isBangla ? "দাম তুলনা" : "Compare prices",
    about: isBangla ? "আমাদের সম্পর্কে" : "About",
    privacy: isBangla ? "গোপনীয়তা নীতি" : "Privacy policy",
    contact: isBangla ? "যোগাযোগ" : "Contact",
    copyright: isBangla ? "সর্বস্বত্ব সংরক্ষিত।" : "All rights reserved.",
    builtFor: isBangla ? "বাংলাদেশের জন্য তৈরি" : "BUILT FOR BANGLADESH",
    backToTop: isBangla ? "উপরে যান ↗" : "BACK TO TOP ↗",
    index: isBangla ? "বাংলাদেশ মূল্য সূচক" : "BANGLADESH PRICE INDEX",
  };

  const navigation = [
    { name: t.home, href: "/" },
    { name: t.compare, href: "/compare" },
    { name: t.about, href: "/about" },
  ];

  const information = [
    { name: t.privacy, href: "/privacy" },
    { name: t.contact, href: "/contact" },
  ];

  return (
    <footer className="border-t border-neutral-200 bg-white text-neutral-950">
      <div className="mx-auto max-w-7xl px-4 pt-14 pb-6 sm:px-8 md:pt-20">
        {/* Top metadata */}
        <div className="mb-12 flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] tracking-[0.15em] text-neutral-600 uppercase sm:text-xs">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-neutral-950" />
            <span>{t.index}</span>
          </div>

          <span>EST. 2026 — BD</span>
        </div>

        {/* Main footer */}
        <div className="grid grid-cols-1 gap-12 border-b border-neutral-200 pb-16 md:grid-cols-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-7">
            <Link
              href="/"
              className="inline-block font-mono text-5xl font-bold tracking-[-0.07em] sm:text-7xl lg:text-8xl"
            >
              DamKoto<span className="text-neutral-400">.</span>
            </Link>

            <p className="mt-6 max-w-sm font-mono text-sm leading-relaxed text-neutral-600 sm:text-base">
              {t.tagline}
              <br />
              {t.description}
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h3 className="mb-6 font-mono text-[11px] tracking-[0.15em] text-neutral-500 uppercase">
              01 / {t.navigation}
            </h3>

            <nav aria-label={t.navigation} className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-fit text-sm transition-colors hover:text-neutral-500"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Information */}
          <div className="md:col-span-2">
            <h3 className="mb-6 font-mono text-[11px] tracking-[0.15em] text-neutral-500 uppercase">
              02 / {t.information}
            </h3>

            <nav aria-label={t.information} className="flex flex-col gap-4">
              {information.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-fit text-sm transition-colors hover:text-neutral-500"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col gap-5 border-b border-neutral-200 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] tracking-wider text-neutral-500 uppercase">
            © 2026 DAMKOTO. {t.copyright}
          </p>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-fit cursor-pointer font-mono text-[11px] tracking-wider uppercase transition-colors hover:text-neutral-500"
          >
            {t.backToTop}
          </button>
        </div>

        {/* Final footer note */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-6 font-mono text-[10px] tracking-[0.12em] text-neutral-400 uppercase">
          <span>{t.builtFor}</span>
          <span>INDEPENDENT MARKET INDEX / 001</span>
        </div>
      </div>
    </footer>
  );
}
