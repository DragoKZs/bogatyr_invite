"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Видео */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      {/* Затемнение */}
      <div className="absolute inset-0 bg-black/5" />

      {/* Градиент */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-[#0b0d10]" />

      {/* Контент */}
      <div className="container relative z-10 text-center">

        <motion.span
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="mb-6 inline-block rounded-full border border-yellow-500/40 bg-yellow-500/10 px-6 py-2 uppercase tracking-[4px] text-yellow-400"
        >
          Богатырь Комир
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: .2,
            duration: .8,
          }}
          className="mx-auto max-w-5xl text-5xl font-black uppercase leading-tight md:text-7xl xl:text-8xl"
        >
          Богатырь
          <br />
          Комир
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: .5,
            duration: .8,
          }}
          className="mx-auto mt-10 max-w-2xl text-lg leading-8 text-white/80 md:text-xl"
        >
          Форум, объединяющий сотрудников,
          молодых специалистов,
          руководителей и экспертов
          для обмена опытом,
          новыми идеями
          и совместного развития компании.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: .8,
            duration: .7,
          }}
          className="mt-16 flex flex-col items-center justify-center gap-5 sm:flex-row"
        >
          <a
            href="#about"
            className="rounded-full bg-yellow-500 px-10 py-5 text-lg font-bold text-black transition hover:scale-105"
          >
            Стать участником
          </a>

          <a
            href="#program"
            className="rounded-full border border-white/30 px-10 py-5 text-lg transition hover:bg-white hover:text-black"
          >
            Программа форума
          </a>
        </motion.div>

      </div>

      {/* Scroll */}
      <motion.a
        href="#about"
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2"
      >
        <ChevronDown
          size={42}
          className="text-white/70"
        />
      </motion.a>
    </section>
  );
}