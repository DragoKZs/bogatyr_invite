"use client";

import { motion } from "framer-motion";
import { PartyPopper, Music, Gift, Users } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28"
    >
      <div className="container">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Фото */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
          >
            <img
              src="/images/about.jpg"
              alt="День шахтёра"
              className="h-[650px] w-full rounded-[40px] object-cover shadow-2xl"
            />
          </motion.div>

          {/* Текст */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
          >

            <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm uppercase tracking-[4px] text-blue-400">
              О празднике
            </span>

            <h2 className="mt-8 text-5xl font-black uppercase leading-tight">
              День шахтёра —
              праздник сильных людей
            </h2>

            <p className="mt-8 text-lg leading-9 text-white/70">
              День шахтёра — это праздник людей,
              чей ежедневный труд требует
              профессионализма, ответственности
              и настоящей силы характера.

              <br />
              <br />

              Мы приглашаем сотрудников
              АО «Богатырь Көмір»
              и членов их семей
              провести этот день вместе,
              в атмосфере отдыха,
              общения и хорошего настроения.
            </p>

            {/* Карточки */}

            <div className="mt-12 grid gap-5 sm:grid-cols-2">

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

                <PartyPopper
                  className="text-blue-400"
                  size={34}
                />

                <h3 className="mt-5 text-xl font-bold">
                  Праздничная программа
                </h3>

                <p className="mt-3 text-white/60">
                  Интересные активности
                  и праздничная атмосфера.
                </p>

              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

                <Music
                  className="text-blue-400"
                  size={34}
                />

                <h3 className="mt-5 text-xl font-bold">
                  Концерт
                </h3>

                <p className="mt-3 text-white/60">
                  Живая музыка,
                  выступления артистов
                  и отличное настроение.
                </p>

              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

                <Gift
                  className="text-blue-400"
                  size={34}
                />

                <h3 className="mt-5 text-xl font-bold">
                  Сюрпризы
                </h3>

                <p className="mt-3 text-white/60">
                  Подарки,
                  конкурсы
                  и приятные неожиданности.
                </p>

              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

                <Users
                  className="text-blue-400"
                  size={34}
                />

                <h3 className="mt-5 text-xl font-bold">
                  Для всей семьи
                </h3>

                <p className="mt-3 text-white/60">
                  Мероприятие,
                  которое объединяет
                  сотрудников.
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}