import Header from "@/app/components/layout/Header";
import Hero from "@/app/components/hero/Hero";
import About from "@/app/components/about/About";
import Program from "@/app/components/program/Program";
import Location from "@/app/components/location/Location";
import Registration from "@/app/components/registration/Registration";
import Footer from "@/app/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Program />
        <Location />
        <Registration />
        <Footer />
      </main>
    </>
  );
}