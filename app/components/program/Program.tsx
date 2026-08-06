"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock3,
  MapPin,
  ArrowRight,
} from "lucide-react";

import { useLanguage } from "@/app/components/context/LanguageContext";

export default function Program() {
  const { t } = useLanguage();

  const info = [
    {
      icon: CalendarDays,
      title: t.program.dateTitle,
      value: t.program.date,
    },
    {
      icon: Clock3,
      title: t.program.timeTitle,
      value: t.program.time,
    },
    {
      icon: MapPin,
      title: t.program.placeTitle,
      value: t.program.place,
    },
  ];

  return (
    <section
      id="program"
      className="relative py-16 md:py-28"
    >
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#071B33] via-[#0B111A] to-black md:rounded-[40px] shadow-2xl"
        >

          <div className="grid lg:grid-cols-2">

            {/* Левая часть */}

            <div className="flex flex-col justify-center p-12 lg:p-16">

              <span className="w-fit rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm uppercase tracking-[4px] text-blue-400">
                {t.program.badge}
              </span>

              <h2 className="mt-8 text-5xl font-black leading-tight">
                {t.program.title}
              </h2>

              <div className="mt-8 h-[2px] w-28 rounded-full bg-blue-500" />

              <p className="mt-10 max-w-xl text-lg leading-9 text-white/70">
                {t.program.text}

                <br />
                <br />

                {t.program.text2}
              </p>

            </div>

            {/* Правая часть */}

            <div className="flex items-center justify-center bg-white/5 p-12">

              <div className="w-full max-w-md space-y-6">

                {info.map((item) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      whileHover={{
                        y: -6,
                        scale: 1.02,
                      }}
                      transition={{
                        duration: .2,
                      }}
                      className="rounded-3xl border border-white/10 bg-black/30 p-7 backdrop-blur-xl"
                    >

                      <div className="flex items-center gap-5">

                        <Icon
                          size={36}
                          className="text-blue-400"
                        />

                        <div>

                          <div className="text-sm uppercase tracking-[3px] text-white/50">
                            {item.title}
                          </div>

                          <div className="mt-2 text-3xl font-bold">
                            {item.value}
                          </div>

                        </div>

                      </div>

                    </motion.div>
                  );
                })}

                <motion.a
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: .98,
                  }}
                  href="#registration"
                  className="mt-6 flex items-center justify-center gap-3 rounded-2xl bg-blue-600 py-5 text-lg font-bold transition hover:bg-blue-500"
                >
                  {t.program.button}

                  <ArrowRight size={22} />

                </motion.a>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}