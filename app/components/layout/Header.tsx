"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { useLanguage } from "@/app/components/context/LanguageContext";

export default function Header() {
  const { t } = useLanguage();

  const navigation = [
    { title: t.header.menu[0], href: "#about" },
    { title: t.header.menu[1], href: "#program" },
    { title: t.header.menu[2], href: "#location" },
    { title: t.header.menu[3], href: "#contacts" },
  ];

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-black/75 backdrop-blur-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="container flex h-24 items-center justify-between">

          <Link
            href="/"
            className="flex items-center gap-4"
          >
            <img
              src="/images/logo.svg"
              alt="Богатырь Көмір"
              className="h-14 w-14 object-contain"
            />

            <div>

              <div className="text-xs uppercase tracking-[5px] text-blue-400">
                {t.header.company}
              </div>

              <div className="text-xl font-black uppercase tracking-[3px]">
                {t.header.title}
              </div>

            </div>

          </Link>

          <nav className="hidden items-center gap-10 lg:flex">

            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm uppercase tracking-[2px] text-white/80 transition hover:text-blue-400"
              >
                {item.title}
              </a>
            ))}

            <a
              href="#registration"
              className="rounded-full bg-blue-600 px-7 py-3 font-semibold transition hover:bg-blue-500"
            >
              {t.header.button}
            </a>

          </nav>

          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden"
          >
            <Menu size={34} />
          </button>

        </div>
      </header>

      <AnimatePresence>

        {mobileOpen && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#05070A]"
          >

            <div className="container flex h-24 items-center justify-between">

              <div className="flex items-center gap-3">

                <img
                  src="/images/logo.svg"
                  className="h-12"
                  alt=""
                />

                <span className="font-bold uppercase">
                  {t.header.title}
                </span>

              </div>

              <button onClick={() => setMobileOpen(false)}>
                <X size={34} />
              </button>

            </div>

            <div className="mt-24 flex flex-col items-center gap-10">

              {navigation.map((item) => (

                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-3xl font-bold"
                >
                  {item.title}
                </a>

              ))}

              <a
                href="#registration"
                onClick={() => setMobileOpen(false)}
                className="mt-10 rounded-full bg-blue-600 px-10 py-5 text-xl font-bold"
              >
                {t.header.button}
              </a>

            </div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
}