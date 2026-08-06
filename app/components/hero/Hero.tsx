"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/app/components/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Видео */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      {/* Затемнение */}
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#03162F]/60 via-black/50 to-[#05070A]" />

      {/* Контент */}
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.img
            src="/images/logo.svg"
            alt="Богатырь Көмір"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mx-auto mb-12 h-28 w-auto"
          />

          <p
            className="mb-10 text-5xl italic text-white md:text-7xl"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {t.hero.title}
          </p>

          <div className="mx-auto mb-12 h-[2px] w-56 rounded-full bg-blue-500" />

          <h1 className="text-3xl font-light leading-relaxed text-white md:text-5xl">
            {t.hero.invitation}
            <br />
            {t.hero.invitation2}
            <br />

            <span className="mt-4 block font-bold text-blue-300">
              {t.hero.day}
            </span>
          </h1>

          <p className="mx-auto mt-16 max-w-2xl text-xl leading-10 text-white/80">
            {t.hero.text1}

            <br />
            <br />

            {t.hero.text2}
          </p>
        </motion.div>
      </div>

      {/* Стрелка */}
      <motion.a
        href="#about"
        animate={{ y: [0, 12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ChevronDown
          size={44}
          className="text-white/70"
        />
      </motion.a>
    </section>
  );
}