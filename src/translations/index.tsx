import { navbarTranslations } from "./navbar";
import { homeTranslations } from "./home";

export const translations = {
  en: {
    navbar: navbarTranslations.en,
    home: homeTranslations.en,
  },
  "pt-br": {
    navbar: navbarTranslations["pt-br"],
    home: homeTranslations["pt-br"],
  },
};

export type Sections = keyof typeof translations["en"];
