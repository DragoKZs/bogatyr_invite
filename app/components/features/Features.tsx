import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Reveal from "../ui/Reveal";
import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section className="bg-[#0f1115] py-32">

      <Container>

        <Reveal>
          <SectionTitle
            overline="Что вас ждёт"
            title="Насыщенная программа"
            center
          />
        </Reveal>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          <Reveal delay={0.1}>
            <FeatureCard
              title="Выступления"
              description="Истории успеха, современные подходы и реальные кейсы компании."
              image="/images/features/speaker.jpg"
            />
          </Reveal>

          <Reveal delay={0.2}>
            <FeatureCard
              title="Командная работа"
              description="Интерактивные задания и совместные активности."
              image="/images/features/team.jpg"
            />
          </Reveal>

          <Reveal delay={0.3}>
            <FeatureCard
              title="Нетворкинг"
              description="Общение, знакомства и обмен опытом между участниками."
              image="/images/features/network.jpg"
            />
          </Reveal>

          <Reveal delay={0.4}>
            <FeatureCard
              title="Яркие эмоции"
              description="Финальное шоу, награждение и праздничная атмосфера."
              image="/images/features/show.jpg"
            />
          </Reveal>

        </div>

      </Container>

    </section>
  );
}