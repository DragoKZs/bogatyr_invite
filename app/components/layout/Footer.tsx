"use client";

import Link from "next/link";
import { ChevronUp } from "lucide-react";
import Container from "../ui/Container";
import { useLanguage } from "@/app/components/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-[#05070A] to-black">

      <Container>

        <div className="py-20 text-center">

          <img
            src="/images/logo.svg"
            alt="Богатырь Көмір"
            className="mx-auto h-20 w-auto"
          />

          <h2 className="mt-8 text-4xl font-black uppercase md:text-5xl">
            {t.footer.title}
          </h2>

          <div className="mx-auto mt-8 h-[2px] w-32 rounded-full bg-blue-500" />

          <div className="mt-10 space-y-3 text-lg text-white/70">

            <p>
              <span className="font-semibold text-white">
                {t.footer.date}
              </span>
            </p>

            <p>{t.footer.place}</p>

            <p>{t.footer.time}</p>

          </div>

          <a
            href="#top"
            className="mx-auto mt-14 inline-flex items-center gap-3 rounded-full border border-blue-500/30 bg-blue-500/10 px-8 py-4 transition-all duration-300 hover:bg-blue-600"
          >
            <ChevronUp size={20} />

            {t.footer.top}

          </a>

          <div className="mt-16 border-t border-white/10 pt-8">

            <Link
              href="/"
              className="text-xl font-black tracking-[4px]"
            >
              {t.footer.company}
            </Link>

            <p className="mt-4 text-sm text-white/40">
              {t.footer.copyright}
            </p>

          </div>

        </div>

      </Container>

    </footer>
  );
}