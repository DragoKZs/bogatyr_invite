"use client";

import { AnimatePresence, motion } from "framer-motion";

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
        className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-[#03060B]"
      >
        {/* Фон */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,64,175,.35),transparent_65%)]" />

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="relative z-10 w-full max-w-3xl rounded-[40px] border border-white/10 bg-white/5 px-10 py-16 text-center backdrop-blur-2xl"
        >
          <motion.img
            src="/images/logo.svg"
            alt="Богатырь Көмір"
            initial={{
              scale: 0.7,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="mx-auto h-28 w-auto"
          />

          <p className="mt-8 text-sm uppercase tracking-[8px] text-blue-300">
            АО «Богатырь Көмір»
          </p>

          <div className="mx-auto mt-8 h-px w-40 bg-blue-500/60" />

          <h1 className="mt-10 text-5xl font-black uppercase">
            День шахтёра
          </h1>

          <p className="mt-6 text-xl text-white/70">
            30 августа 2026
          </p>

          <p className="mt-2 text-lg text-white/50">
            г. Экибастуз
          </p>

          <div className="mx-auto mt-10 h-px w-40 bg-blue-500/60" />

          <p className="mt-10 text-2xl font-light">
            Добро пожаловать!
          </p>

          <p className="mx-auto mt-6 max-w-lg leading-8 text-white/70">
            Для просмотра официального приглашения
            на праздничное мероприятие
            нажмите кнопку ниже.
          </p>

          <motion.button
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.98,
            }}
            onClick={handleEnter}
            className="mt-14 rounded-full bg-gradient-to-r from-blue-700 to-blue-500 px-14 py-5 text-lg font-bold shadow-[0_15px_40px_rgba(37,99,235,.35)] transition"
          >
            Принять приглашение
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}