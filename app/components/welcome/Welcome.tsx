"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/app/components/context/LanguageContext";

interface WelcomeProps {
  onEnter: () => void;
}

export default function Welcome({ onEnter }: WelcomeProps) {
  const { setLanguage, t } = useLanguage();

  function handleEnter(language: "ru" | "kz") {
    setLanguage(language);

    const audio = new Audio("/audio/theme.mp3");
    audio.volume = 0.4;

    audio.play().catch(() => {
      console.log("Автовоспроизведение запрещено браузером.");
    });

    onEnter();
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 z-[999] flex items-center justify-center overflow-y-auto bg-[#03060B] p-4"
      >
        {/* Фон */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,64,175,.35),transparent_65%)]" />

        {/* Карточка */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 w-full max-w-3xl rounded-[28px] border border-white/10 bg-white/5 px-6 py-8 text-center backdrop-blur-2xl md:rounded-[40px] md:px-10 md:py-16"
        >
          <motion.img
            src="/images/logo.svg"
            alt="Богатырь Көмір"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="mx-auto h-16 w-auto md:h-28"
          />

          <p className="mt-6 text-xs uppercase tracking-[6px] text-blue-300 md:mt-8 md:text-sm md:tracking-[8px]">
            {t.welcome.company}
          </p>

          <div className="mx-auto mt-6 h-px w-32 bg-blue-500/60 md:mt-8 md:w-40" />

          <h1 className="mt-8 text-4xl font-black uppercase md:mt-10 md:text-5xl">
            {t.welcome.title}
          </h1>

          <p className="mt-5 text-lg text-white/70 md:mt-6 md:text-xl">
            27 августа 2026
          </p>

          <p className="mt-2 text-base text-white/50 md:text-lg">
            {t.welcome.city}
          </p>

          <div className="mx-auto mt-8 h-px w-32 bg-blue-500/60 md:mt-10 md:w-40" />

          <p className="mt-8 text-xl font-light md:mt-10 md:text-2xl">
            {t.welcome.welcome}
          </p>

          <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-white/70 md:mt-6 md:text-lg md:leading-8">
            {t.welcome.text}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center md:mt-14">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleEnter("ru")}
              className="w-full rounded-full bg-gradient-to-r from-blue-700 to-blue-500 px-8 py-4 text-base font-bold shadow-[0_15px_40px_rgba(37,99,235,.35)] transition md:w-auto md:px-10 md:py-5 md:text-lg"
            >
              🇷🇺 Русский
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleEnter("kz")}
              className="w-full rounded-full border border-blue-500/40 bg-white/5 px-8 py-4 text-base font-bold transition hover:bg-white/10 md:w-auto md:px-10 md:py-5 md:text-lg"
            >
              🇰🇿 Қазақша
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}