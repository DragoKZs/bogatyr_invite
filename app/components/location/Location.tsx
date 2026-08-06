"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Clock3 } from "lucide-react";

export default function Location() {
  return (
    <section
      id="location"
      className="py-28"
    >
      <div className="container">

        <div className="mb-16 text-center">

          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm uppercase tracking-[4px] text-blue-400">
            Место проведения
          </span>

          <h2 className="mt-8 text-5xl font-black uppercase">
            Ждём Вас
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Праздничное мероприятие пройдет
            в ресторане «Шаңырақ».
            Добраться до места можно
            по навигатору Google Maps.
          </p>

        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_420px]">

          {/* Карта */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="overflow-hidden rounded-[35px] border border-white/10"
          >

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2471.242794828613!2d75.3214468771711!3d51.728594371864524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42582b08ab880249%3A0xea6f77570ee59fdb!2z0KDQtdGB0YLQvtGA0LDQvSDQqNCw0L3Ri9GA0LDQug!5e0!3m2!1sru!2skz!4v1785978459524!5m2!1sru!2skz"
              className="h-[550px] w-full"
              loading="lazy"
              allowFullScreen
            />

          </motion.div>

          {/* Информация */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="rounded-[35px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
          >

            <MapPin
              size={42}
              className="text-blue-400"
            />

            <h3 className="mt-6 text-3xl font-bold">
              Ресторан «Шаңырақ»
            </h3>

            <p className="mt-5 leading-8 text-white/70">
              ТРЦ Maxi Mall
              <br />
              г. Экибастуз
            </p>

            <div className="mt-10 flex items-center gap-4">

              <Clock3
                size={24}
                className="text-blue-400"
              />

              <div>

                <div className="text-sm uppercase tracking-[3px] text-white/50">
                  Начало
                </div>

                <div className="text-xl font-bold">
                  30 августа • 15:00
                </div>

              </div>

            </div>

            <a
              href="https://maps.app.goo.gl/s7iBz8pUHGLr4ja89"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 flex items-center justify-center gap-3 rounded-2xl bg-blue-600 py-5 text-lg font-bold transition hover:bg-blue-500"
            >
              <Navigation size={22} />

              Построить маршрут

            </a>

          </motion.div>

        </div>

      </div>
    </section>
  );
}