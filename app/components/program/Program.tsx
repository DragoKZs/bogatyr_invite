import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import SectionTitle from "../ui/SectionTitle";
import { CalendarDays, Clock, MapPin } from "lucide-react";

export default function Program() {
  return (
    <section id="program" className="bg-[#0b0d10] py-28">
      <Container>
        <Reveal>
          <SectionTitle
            overline="Программа"
            title="Начало праздничного мероприятия"
            text="Приглашаем вас принять участие в праздновании Дня шахтёра. Просим прибыть немного заранее, чтобы успеть пройти регистрацию и занять удобные места."
            center
          />
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-[36px] border border-yellow-500/20 bg-gradient-to-br from-white/5 to-white/[0.02] p-12 backdrop-blur-xl">

            <div className="flex flex-col items-center text-center">

              <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-6 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-yellow-400">
                День шахтёра 2026
              </span>

              <h3 className="mt-10 text-7xl font-black text-yellow-400 md:text-8xl">
                15:00
              </h3>

              <h4 className="mt-8 text-3xl font-bold md:text-4xl">
                Торжественное открытие
              </h4>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
                Мы будем рады видеть вас на праздничном мероприятии,
                посвящённом Дню шахтёра.
                Приходите вместе с семьёй и коллегами —
                впереди насыщенная программа,
                концерт и праздничная атмосфера.
              </p>

            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition hover:border-yellow-500/40 hover:bg-white/10">

                <CalendarDays
                  className="mx-auto text-yellow-400"
                  size={34}
                />

                <h5 className="mt-5 text-lg font-bold">
                  Дата
                </h5>

                <p className="mt-2 text-white/70">
                  30 августа 2026
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition hover:border-yellow-500/40 hover:bg-white/10">

                <Clock
                  className="mx-auto text-yellow-400"
                  size={34}
                />

                <h5 className="mt-5 text-lg font-bold">
                  Время начала
                </h5>

                <p className="mt-2 text-white/70">
                  15:00
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition hover:border-yellow-500/40 hover:bg-white/10">

                <MapPin
                  className="mx-auto text-yellow-400"
                  size={34}
                />

                <h5 className="mt-5 text-lg font-bold">
                  Место
                </h5>

                <p className="mt-2 text-white/70">
                  Площадка проведения праздника
                </p>

              </div>

            </div>

          </div>
        </Reveal>
      </Container>
    </section>
  );
}