"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { navbarTranslations } from "@/translations/navbar";
import { homeTranslations } from "@/translations/home";
import { resultsTranslations } from "@/translations/results";
import { servicesTranslations } from "@/translations/services";
import { contactTranslations } from "@/translations/contact";
import { discordTranslations } from "@/translations/discord";
import { footerTranslations } from "@/translations/footer";

type Lang = "en" | "pt-br";
type Sections = "navbar" | "home" | "results" | "contact" | "discord" | "footer";

interface LanguageContextProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: <T extends Sections>(section: T) => typeof translations["en"][T];
}

const translations = {
  en: {
    navbar: navbarTranslations.en,
    home: homeTranslations.en,
    results: resultsTranslations.en,
    services: servicesTranslations.en,
    contact: contactTranslations.en,
    discord: discordTranslations.en,
    footer: footerTranslations.en
  },
  "pt-br": {
    navbar: navbarTranslations["pt-br"],
    home: homeTranslations["pt-br"],
    results: resultsTranslations["pt-br"],
    services: servicesTranslations["pt-br"],
    contact: contactTranslations["pt-br"],
    discord: discordTranslations["pt-br"],
    footer: footerTranslations["pt-br"]
  },
};

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem("lang") || navigator.language;
    const resolved = stored.startsWith("pt") ? "pt-br" : "en";
    setLang(resolved);
  }, []);

  const updateLang = (newLang: Lang) => {
    localStorage.setItem("lang", newLang);
    setLang(newLang);
  };

  const t = <T extends Sections>(section: T) => translations[lang][section];

  return (
    <LanguageContext.Provider value={{ lang, setLang: updateLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
};
