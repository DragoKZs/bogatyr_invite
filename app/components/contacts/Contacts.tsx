import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import SectionTitle from "../ui/SectionTitle";
import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Contacts() {
  return (
    <section
      id="contacts"
      className="relative overflow-hidden bg-[#0b0d10] py-32"
    >
      <Container>

        <Reveal>

          <SectionTitle
            overline="Контакты"
            title="Остались вопросы?"
            text="Свяжитесь с организационным комитетом форума."
            center
          />

        </Reveal>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          {/* Контакты */}

          <Reveal delay={0.2}>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

              <div className="flex items-start gap-5">

                <Phone
                  className="mt-1 text-yellow-400"
                  size={26}
                />

                <div>

                  <h3 className="text-xl font-semibold">
                    Телефон
                  </h3>

                  <p className="mt-2 text-white/70">
                    +7 (777) 000-00-00
                  </p>

                </div>

              </div>

              <div className="mt-10 flex items-start gap-5">

                <Mail
                  className="mt-1 text-yellow-400"
                  size={26}
                />

                <div>

                  <h3 className="text-xl font-semibold">
                    Email
                  </h3>

                  <p className="mt-2 text-white/70">
                    forum@bogatyr.kz
                  </p>

                </div>

              </div>

              <div className="mt-10 flex items-start gap-5">

                <MapPin
                  className="mt-1 text-yellow-400"
                  size={26}
                />

                <div>

                  <h3 className="text-xl font-semibold">
                    Адрес
                  </h3>

                  <p className="mt-2 leading-8 text-white/70">
                    Республика Казахстан
                    <br />
                    г. Экибастуз
                    <br />
                    Конференц-зал
                  </p>

                </div>

              </div>

            </div>

          </Reveal>

          {/* Карта */}

          <Reveal delay={0.4}>

            <div className="overflow-hidden rounded-3xl border border-white/10">

              <iframe
                src="https://www.google.com/maps?q=Экибастуз&output=embed"
                className="h-full min-h-[450px] w-full"
                loading="lazy"
              />

            </div>

          </Reveal>

        </div>

      </Container>
    </section>
  );
}