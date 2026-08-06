"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

export type Language = "ru" | "kz";

const translations = {
  ru: {
    welcome: {
      company: "АО «Богатырь Көмір»",
      title: "День шахтёра",
      city: "г. Экибастуз",
      welcome: "Добро пожаловать!",
      text:
        "Для просмотра официального приглашения на праздничное мероприятие нажмите кнопку ниже.",
      button: "Принять приглашение",
    },

    hero: {
      title: "Уважаемые коллеги!",
      subtitle: "Приглашаем Вас на празднование Дня шахтёра",
    },
  },

  kz: {
    welcome: {
      company: "«Богатырь Көмір» АҚ",
      title: "Кеншілер күні",
      city: "Екібастұз қ.",
      welcome: "Қош келдіңіз!",
      text:
        "Ресми шақыруды көру үшін төмендегі батырманы басыңыз.",
      button: "Шақыруды қабылдау",
    },

    hero: {
      title: "Құрметті әріптестер!",
      subtitle: "Сіздерді Кеншілер күніне арналған мерекеге шақырамыз.",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.ru;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "ru",
  setLanguage: () => {},
  t: translations.ru,
});

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setLanguage] =
    useState<Language>("ru");

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}