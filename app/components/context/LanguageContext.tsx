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
            invitation: "Приглашаем Вас",
            invitation2: "на празднование",
            day: "Дня шахтёра",
            text1:
                "Приглашаем Вас и Вашу семью разделить атмосферу одного из самых значимых профессиональных праздников.",
            text2:
                "Вас ждут праздничная программа, концерт, яркие выступления артистов, встречи с коллегами, тёплая дружеская атмосфера и отличное настроение.",
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
            invitation: "Сіздерді",
            invitation2: "Кеншілер күні мерекесіне",
            day: "шақырамыз",
            text1:
                "Сіздерді және отбасыңызды ең маңызды кәсіби мерекелердің бірінің атмосферасын бірге сезінуге шақырамыз.",
            text2:
                "Сіздерді мерекелік бағдарлама, концерт, өнерпаздардың жарқын қойылымдары, әріптестермен кездесу және көтеріңкі көңіл-күй күтеді.",
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
    setLanguage: () => { },
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

