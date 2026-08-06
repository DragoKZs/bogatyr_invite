"use client";

import { motion } from "framer-motion";
import { ChevronDown, Calendar, Clock3, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">

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
      <div className="absolute inset-0 bg-black/55" />

      {/* Синий градиент */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#021B33]/40 via-black/35 to-[#05070A]" />

      {/* Световое пятно */}
      <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[180px]" />

      <div className="container relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="max-w-4xl"
        >

          <span className="inline-flex rounded-full border border-blue-500/40 bg-blue-500/10 px-6 py-2 text-sm uppercase tracking-[4px] text-blue-300">
            АО «БОГАТЫРЬ КӨМІР»
          </span>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: .2,
              duration: .8,
            }}
            className="mt-8 text-6xl font-black uppercase leading-none md:text-8xl"
          >
            День
            <br />
            шахтёра
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: .5,
            }}
            className="mt-10 max-w-2xl text-xl leading-9 text-white/80"
          >
            Приглашаем сотрудников
            АО «Богатырь Көмір»
            и членов их семей
            на праздничное мероприятие,
            посвящённое Дню шахтёра.
          </motion.p>

          {/* Карточки */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: .7,
            }}
            className="mt-14 grid gap-5 md:grid-cols-3"
          >

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

              <Calendar
                className="text-blue-400"
                size={30}
              />

              <div className="mt-5 text-sm uppercase tracking-widest text-white/50">
                Дата
              </div>

              <div className="mt-2 text-2xl font-bold">
                27 августа
              </div>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

              <Clock3
                className="text-blue-400"
                size={30}
              />

              <div className="mt-5 text-sm uppercase tracking-widest text-white/50">
                Начало
              </div>

              <div className="mt-2 text-2xl font-bold">
                18:00
              </div>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

              <MapPin
                className="text-blue-400"
                size={30}
              />

              <div className="mt-5 text-sm uppercase tracking-widest text-white/50">
                Место
              </div>

              <div className="mt-2 text-xl font-bold">
                Maxi Mall
              </div>

            </div>

          </motion.div>

          {/* Кнопка */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1,
            }}
            className="mt-14"
          >

            <a
              href="#registration"
              className="inline-flex items-center rounded-full bg-blue-600 px-10 py-5 text-lg font-bold transition duration-300 hover:scale-105 hover:bg-blue-500"
            >
              Подать заявку
            </a>

          </motion.div>

        </motion.div>

      </div>

      {/* Скролл */}

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
          className="text-white/60"
        />
      </motion.a>

    </section>
  );
}