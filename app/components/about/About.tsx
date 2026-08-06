"use client";

import { motion } from "framer-motion";
import { PartyPopper, Music, Gift, Users } from "lucide-react";
import { useLanguage } from "@/app/components/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  const cards = [
    {
      icon: PartyPopper,
      ...t.about.cards[0],
    },
    {
      icon: Music,
      ...t.about.cards[1],
    },
    {
      icon: Gift,
      ...t.about.cards[2],
    },
    {
      icon: Users,
      ...t.about.cards[3],
    },
  ];

  return (
    <section
      id="about"
      className="relative py-16 md:py-32"
    >
      <div className="container">

        <div className="grid items-center gap-10 md:gap-20 lg:grid-cols-2">

          {/* Фото */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            whileHover={{ scale: 1.02 }}
            className="overflow-hidden rounded-[40px]"
          >
            <img
              src="/images/about.jpg"
              alt="День шахтёра"
              className="h-[360px] w-full rounded-[28px] object-cover shadow-2xl transition duration-700 md:h-[680px] md:rounded-[40px]"
            />
          </motion.div>

          {/* Текст */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-xs uppercase tracking-[3px] text-blue-400 md:px-5 md:text-sm md:tracking-[4px]">
              {t.about.badge}
            </span>

            <h2 className="mt-6 text-3xl font-black leading-tight md:mt-8 md:text-5xl">
              {t.about.title}
            </h2>

            <p className="mt-6 text-base leading-8 text-white/70 md:mt-8 md:text-lg md:leading-9">
              {t.about.text1}

              <br />
              <br />

              {t.about.text2}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-14 md:gap-6">

              {cards.map((card) => {
                const Icon = card.icon;

                return (
                  <motion.div
                    key={card.title}
                    whileHover={{
                      y: -8,
                    }}
                    transition={{
                      duration: .25,
                    }}
                    className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl md:p-7"
                  >
                    <Icon
                      className="text-blue-400"
                      size={34}
                    />

                    <h3 className="mt-4 text-lg font-bold md:mt-5 md:text-xl">
                      {card.title}
                    </h3>

                    <p className="mt-2 flex-1 text-sm leading-6 text-white/60 md:mt-3 md:text-base md:leading-7">
                      {card.text}
                    </p>

                  </motion.div>
                );
              })}

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}