"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Navigation,
  Clock3,
} from "lucide-react";

import { useLanguage } from "@/app/components/context/LanguageContext";

export default function Location() {
  const { t } = useLanguage();

  return (
    <section
      id="location"
      className="py-32"
    >
      <div className="container">

        <div className="mb-20 text-center">

          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm uppercase tracking-[4px] text-blue-400">
            {t.location.badge}
          </span>

          <h2 className="mt-8 text-5xl font-black">
            {t.location.title}
          </h2>

          <div className="mx-auto mt-8 h-[2px] w-32 rounded-full bg-blue-500" />

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/70">
            {t.location.text}
          </p>

        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_420px]">

          {/* Карта */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            whileHover={{ scale: 1.01 }}
            className="overflow-hidden rounded-[35px] border border-white/10 shadow-2xl"
          >

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2471.242794828613!2d75.3214468771711!3d51.728594371864524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42582b08ab880249%3A0xea6f77570ee59fdb!2z0KDQtdGB0YLQvtGA0LDQvSDQqNCw0L3Ri9GA0LDQug!5e0!3m2!1sru!2skz!4v1785978459524!5m2!1sru!2skz"
              className="h-[580px] w-full"
              loading="lazy"
              allowFullScreen
            />

          </motion.div>

          {/* Правая карточка */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="rounded-[35px] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-10 backdrop-blur-xl"
          >

            <MapPin
              size={46}
              className="text-blue-400"
            />

            <h3 className="mt-6 text-3xl font-bold">
              {t.location.restaurant}
            </h3>

            <p className="mt-6 text-lg leading-8 text-white/70">
              {t.location.address}
              <br />
              {t.location.city}
            </p>

            <div className="my-10 h-px bg-white/10" />

            <div className="flex items-center gap-4">

              <Clock3
                size={26}
                className="text-blue-400"
              />

              <div>

                <div className="text-sm uppercase tracking-[3px] text-white/50">
                  {t.location.start}
                </div>

                <div className="mt-2 text-2xl font-bold">
                  {t.location.datetime}
                </div>

              </div>

            </div>

            <motion.a
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: .98,
              }}
              href="https://maps.app.goo.gl/s7iBz8pUHGLr4ja89"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-14 flex items-center justify-center gap-3 rounded-2xl bg-blue-600 py-5 text-lg font-bold transition hover:bg-blue-500"
            >

              <Navigation size={22} />

              {t.location.button}

            </motion.a>

          </motion.div>

        </div>

      </div>
    </section>
  );
}