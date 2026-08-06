import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import SectionTitle from "../ui/SectionTitle";
import { MapPin, CalendarDays, Clock } from "lucide-react";

export default function Location() {
  return (
    <section id="location" className="bg-[#111418] py-28">
      <Container>
        <Reveal>
          <SectionTitle
            overline="Место проведения"
            title="Ждём вас на мероприятии"
            center
          />
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          {/* Информация */}

          <Reveal delay={0.2}>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-10">

              <div className="flex items-start gap-5">

                <MapPin className="mt-1 text-yellow-400" size={28} />

                <div>
                  <h3 className="text-xl font-bold">
                    Адрес
                  </h3>

                  <p className="mt-2 text-white/70 leading-7">
                    Республика Казахстан,
                    <br />
                    г. Экибастуз
                    <br />
                    Конференц-зал «Название площадки»
                  </p>
                </div>

              </div>

              <div className="mt-10 flex items-start gap-5">

                <CalendarDays className="mt-1 text-yellow-400" size={28} />

                <div>
                  <h3 className="text-xl font-bold">
                    Дата
                  </h3>

                  <p className="mt-2 text-white/70">
                    15 сентября 2026 года
                  </p>
                </div>

              </div>

              <div className="mt-10 flex items-start gap-5">

                <Clock className="mt-1 text-yellow-400" size={28} />

                <div>
                  <h3 className="text-xl font-bold">
                    Начало
                  </h3>

                  <p className="mt-2 text-white/70">
                    Регистрация с 09:00
                  </p>
                </div>

              </div>

            </div>
          </Reveal>

          {/* Карта */}

          <Reveal delay={0.4}>
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#1a1d22]">

              <iframe
                title="Карта"
                src="https://www.google.com/maps/place/%D0%A0%D0%B5%D1%81%D1%82%D0%BE%D1%80%D0%B0%D0%BD+%D0%A8%D0%B0%D0%BD%D1%8B%D1%80%D0%B0%D0%BA/@51.7285944,75.3214469,17z/data=!3m1!4b1!4m6!3m5!1s0x42582b08ab880249:0xea6f77570ee59fdb!8m2!3d51.7285944!4d75.3240218!16s%2Fg%2F1tdhkc_v?hl=ru.&entry=ttu&g_ep=EgoyMDI2MDgwMy4wIKXMDSoASAFQAw%3D%3D"
                className="h-[500px] w-full border-0"
                loading="lazy"
              />

            </div>
          </Reveal>

        </div>
      </Container>
    </section>
  );
}