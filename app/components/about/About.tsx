import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import SectionTitle from "../ui/SectionTitle";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-[#0b0d10] py-28"
    >
      <Container>
        <Reveal>
          <SectionTitle
            overline="О празднике"
            title="День, который объединяет коллектив"
            text="Приглашаем сотрудников АО «Богатырь Көмір»
                  на праздничное мероприятие,
                  посвящённое Дню шахтёра."
          />
        </Reveal>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          <Reveal delay={0.2}>
            <img
              src="/images/about.png"
              alt="О празднике"
              className="h-[500px] w-full rounded-3xl object-cover"
            />
          </Reveal>

          <Reveal delay={0.4}>
            <div className="flex h-full flex-col justify-center">
              <p className="text-lg leading-9 text-white/75">
                День шахтёра — один из самых значимых профессиональных праздников для коллектива АО «Богатырь Көмір». Это возможность встретиться в неформальной атмосфере, провести время с коллегами и семьёй, принять участие в праздничной программе и почувствовать себя частью большой команды.
              </p>

              <p className="mt-8 text-lg leading-9 text-white/75">
                Гостей ждут концертная программа, награждение сотрудников, развлечения для детей, интерактивные площадки, фотозоны, конкурсы и праздничная атмосфера.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}