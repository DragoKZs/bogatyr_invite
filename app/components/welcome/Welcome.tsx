"use client";

import { motion, AnimatePresence } from "framer-motion";

interface WelcomeProps {
  onEnter: () => void;
}

export default function Welcome({ onEnter }: WelcomeProps) {
  function handleEnter() {
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
        className="fixed inset-0 z-[999] flex items-center justify-center bg-black"
      >
        <div className="text-center">

          <motion.img
            src="/images/logo.svg"
            alt="Богатырь Көмір"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="mx-auto w-72 md:w-96"
          />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.6,
            }}
            className="mt-10 text-4xl font-black uppercase tracking-[6px]"
          >
            Добро пожаловать
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1,
            }}
            className="mx-auto mt-8 max-w-xl text-lg text-white/70"
          >
            Вы приглашены на праздничное мероприятие,
            посвящённое Дню шахтёра.
          </motion.p>

          <motion.button
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.4,
            }}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.97,
            }}
            onClick={handleEnter}
            className="mt-16 rounded-full bg-blue-600 px-12 py-5 text-lg font-bold transition hover:bg-blue-500"
          >
            Принять приглашение
          </motion.button>

        </div>
      </motion.div>
    </AnimatePresence>
  );
}