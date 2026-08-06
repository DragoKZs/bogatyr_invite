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
                src="https://maps.app.goo.gl/s7iBz8pUHGLr4ja89"
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