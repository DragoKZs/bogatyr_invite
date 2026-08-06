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
      className="relative py-32"
    >
      <div className="container">

        <div className="grid items-center gap-20 lg:grid-cols-2">

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
              className="h-[680px] w-full rounded-[40px] object-cover shadow-2xl transition duration-700"
            />
          </motion.div>

          {/* Текст */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm uppercase tracking-[4px] text-blue-400">
              {t.about.badge}
            </span>

            <h2 className="mt-8 text-5xl font-black leading-tight">
              {t.about.title}
            </h2>

            <p className="mt-8 text-lg leading-9 text-white/70">
              {t.about.text1}

              <br />
              <br />

              {t.about.text2}
            </p>

            <div className="mt-14 grid gap-6 sm:grid-cols-2">

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
                    className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
                  >
                    <Icon
                      className="text-blue-400"
                      size={34}
                    />

                    <h3 className="mt-5 text-xl font-bold">
                      {card.title}
                    </h3>

                    <p className="mt-3 flex-1 leading-7 text-white/60">
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