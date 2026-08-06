"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
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

      <div className="absolute inset-0 bg-black/65" />

      <div className="absolute inset-0 bg-gradient-to-b from-[#03162F]/50 via-black/40 to-[#05070A]" />

      {/* Контент */}

      <div className="container relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .9 }}
          className="mx-auto max-w-4xl text-center"
        >

          <p className="mb-10 text-6xl italic text-white md:text-7xl"
             style={{
               fontFamily: "Georgia, serif",
             }}
          >
            Уважаемые коллеги!
          </p>

          <div className="mx-auto mb-10 h-[2px] w-40 rounded-full bg-blue-500" />

          <p className="text-3xl font-light leading-[1.8] text-white md:text-4xl">

            Приглашаем вас отметить один
            из самых значимых профессиональных
            праздников —

            <span className="mt-3 block font-semibold text-blue-300">
              День шахтёра!
            </span>

          </p>

          <p className="mx-auto mt-16 max-w-3xl text-xl leading-10 text-white/80">

            Этот день объединяет людей
            сильного характера,
            смелости и настоящего трудолюбия.

            <br />
            <br />

            Пусть праздник подарит вам
            радость, хорошее настроение
            и гордость за своё важное дело.

          </p>

        </motion.div>

      </div>

      {/* Стрелка */}

      <motion.a
        href="#about"
        animate={{
          y: [0, 12, 0],
        }}
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