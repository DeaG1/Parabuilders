"use client";

import Image from "next/image";
import darkModeEarthIcon from "@/assets/images/navbar/darkModeEarthIcon.svg";
import lightModeEarthIcon from "@/assets/images/navbar/lightModeEarthIcon.svg";

export default function LanguageToggle({ isDarkMode, lang, setLang }: { isDarkMode: boolean; lang: "en" | "pt-br"; setLang: (lang: "en" | "pt-br") => void }) {
  const toggleLang = () => {
    const newLang = lang === "en" ? "pt-br" : "en";
    localStorage.setItem("lang", newLang);
    setLang(newLang);
  };

  return (
    <button onClick={toggleLang}>
      <Image
        src={isDarkMode ? darkModeEarthIcon : lightModeEarthIcon}
        alt="Toggle language"
        width={20}
        height={20}
        className="cursor-pointer hover:opacity-80 transition"
      />
    </button>
  );
}
