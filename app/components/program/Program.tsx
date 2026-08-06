"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function Program() {
  return (
    <section
      id="program"
      className="relative py-28"
    >
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-[#071B33] via-[#0B111A] to-black"
        >

          <div className="grid lg:grid-cols-2">

            {/* Левая часть */}

            <div className="p-12 lg:p-16">

              <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm uppercase tracking-[4px] text-blue-400">
                Главное событие
              </span>

              <h2 className="mt-8 text-5xl font-black uppercase leading-tight">
                День
                <br />
                шахтёра
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-9 text-white/70">
                Мы будем рады видеть Вас
                на праздничном мероприятии,
                посвящённом Дню шахтёра.

                <br />
                <br />

                Вас ждут праздничная атмосфера,
                концертная программа,
                развлечения и отдых
                в кругу коллег и семьи.
              </p>

            </div>

            {/* Правая часть */}

            <div className="flex items-center justify-center bg-white/5 p-12">

              <div className="w-full max-w-md space-y-6">

                <div className="rounded-3xl border border-white/10 bg-black/30 p-7 backdrop-blur-xl">

                  <div className="flex items-center gap-5">

                    <CalendarDays
                      size={34}
                      className="text-blue-400"
                    />

                    <div>

                      <div className="text-sm uppercase tracking-[3px] text-white/50">
                        Дата
                      </div>

                      <div className="mt-2 text-3xl font-bold">
                        30 августа
                      </div>

                    </div>

                  </div>

                </div>

                <div className="rounded-3xl border border-white/10 bg-black/30 p-7 backdrop-blur-xl">

                  <div className="flex items-center gap-5">

                    <Clock3
                      size={34}
                      className="text-blue-400"
                    />

                    <div>

                      <div className="text-sm uppercase tracking-[3px] text-white/50">
                        Начало
                      </div>

                      <div className="mt-2 text-3xl font-bold">
                        15:00
                      </div>

                    </div>

                  </div>

                </div>

                <div className="rounded-3xl border border-white/10 bg-black/30 p-7 backdrop-blur-xl">

                  <div className="flex items-center gap-5">

                    <MapPin
                      size={34}
                      className="text-blue-400"
                    />

                    <div>

                      <div className="text-sm uppercase tracking-[3px] text-white/50">
                        Место проведения
                      </div>

                      <div className="mt-2 text-2xl font-bold">
                        Maxi Mall
                      </div>

                    </div>

                  </div>

                </div>

                <a
                  href="#registration"
                  className="mt-4 flex items-center justify-center gap-3 rounded-2xl bg-blue-600 py-5 text-lg font-bold transition hover:bg-blue-500"
                >
                  Подать заявку

                  <ArrowRight size={22} />

                </a>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}