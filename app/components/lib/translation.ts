import { Language } from "../context/LanguageContext";

export const translations = {
  ru: {
    welcome: {
      title: "День шахтёра",
      button: "Принять приглашение",
    },

    hero: {
      title: "Уважаемые коллеги!",
      subtitle: "Приглашаем Вас на празднование Дня шахтёра",
    },
  },

  kz: {
    welcome: {
      title: "Кеншілер күні",
      button: "Шақыруды қабылдау",
    },

    hero: {
      title: "Құрметті әріптестер!",
      subtitle: "Сіздерді Кеншілер күні мерекесіне шақырамыз",
    },
  },
};

export function getText(language: Language) {
  return translations[language];
}