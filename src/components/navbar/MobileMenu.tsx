"use client";
import Image from "next/image";
import { X, ChevronDown } from "lucide-react";
import BaseButton from "@/components/Button";
import { useState } from "react";
import { navbarTranslations } from "@/translations/navbar";
import logo from "@/assets/images/navbar/logoWithName.svg";
import { useLanguage } from "@/components/translations/LanguageContext";
import { Dispatch, SetStateAction } from "react";
import sunIcon from "@/assets/images/navbar/sunIcon.svg";
import moonIcon from "@/assets/images/navbar/moonIcon.svg";

interface NavLink {
  label: string;
  href: string;
}

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  navLinks: NavLink[];
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}

export default function MobileMenu({
  isOpen,
  setIsOpen,
  navLinks,
  isDarkMode,
  setIsDarkMode,
}: Props) {
  const { lang, setLang } = useLanguage();
  const t = navbarTranslations[lang];
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);

  const inactiveBorderColor = isDarkMode ? "border-white/30" : "border-black/30";

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-xl z-[998] md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-full max-w-[430px] bg-[var(--color-navbar)] px-6 py-6 z-[999]
        transform transition-transform duration-300 ease-in-out shadow-lg
        ${isOpen ? "translate-x-0" : "translate-x-full"}
        flex flex-col justify-between`}
      >
        <div>
          <div className="flex items-center justify-between mb-6">
            <Image src={logo} alt="Parabuilders logo" width={160} height={45} className="object-contain" />
            <button onClick={() => setIsOpen(false)} className="text-[var(--color-black-white)]">
              <X size={28} />
            </button>
          </div>

          <div className="flex flex-col gap-3 border-t border-[var(--color-border)] pt-6">
            {navLinks.map((link) => (
              <div key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[var(--color-navbar-text)] text-base font-medium hover:text-[var(--color-black-white)] transition"
                >
                  {link.label}
                </a>
                <div className="w-full h-[1px] bg-[var(--color-border)] my-3" />
              </div>
            ))}

            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="text-base font-medium text-[var(--color-navbar-text)]">{t.theme}</span>
                <button
                  onClick={() => setIsThemeDropdownOpen(!isThemeDropdownOpen)}
                  className="text-sm font-medium flex items-center gap-1 text-[var(--color-navbar-text)]"
                >
                  {isDarkMode ? t.darkTheme : t.lightTheme}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-500 ease-in-out ${
                      isThemeDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {isThemeDropdownOpen && (
                <div className="mt-4 flex flex-col gap-4 bg-[var(--color-navbar)] p-4">
                  <button
                    onClick={() => {
                      document.documentElement.classList.remove("dark");
                      document.documentElement.classList.add("light");
                      setIsDarkMode(false);
                    }}
                    className="flex items-center justify-between text-left w-full"
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src={sunIcon.src}
                        alt="Sun"
                        width={16}
                        height={16}
                        style={{
                          filter: isDarkMode ? "brightness(1)" : "brightness(0)",
                        }}
                      />
                      <span className="text-sm font-semibold text-[var(--color-black-white)]">{t.lightTheme}</span>
                    </div>
                    <span
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        !isDarkMode ? "border-[var(--color-primary)]" : inactiveBorderColor
                      }`}
                    >
                      {!isDarkMode && (
                        <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-primary)]"></span>
                      )}
                    </span>
                  </button>

                  <button
                    onClick={() => {
                      document.documentElement.classList.remove("light");
                      document.documentElement.classList.add("dark");
                      setIsDarkMode(true);
                    }}
                    className="flex items-center justify-between text-left w-full"
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src={moonIcon.src}
                        alt="Moon"
                        width={16}
                        height={16}
                        style={{
                          filter: isDarkMode ? "brightness(0) invert(1)" : "brightness(0)",
                        }}
                      />
                      <span className="text-sm font-semibold text-[var(--color-black-white)]">{t.darkTheme}</span>
                    </div>
                    <span
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        isDarkMode ? "border-[var(--color-primary)]" : inactiveBorderColor
                      }`}
                    >
                      {isDarkMode && (
                        <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-primary)]"></span>
                      )}
                    </span>
                  </button>
                </div>
              )}
            </div>

            <div className="w-full h-[1px] bg-[var(--color-border)]" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="text-base font-medium text-[var(--color-navbar-text)]">{t.language}</span>
                <button
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className="text-sm font-medium flex items-center gap-1 text-[var(--color-navbar-text)]"
                >
                  {lang === "en" ? "English" : "Português"}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-500 ease-in-out ${
                      isLangDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {isLangDropdownOpen && (
                <div className="mt-4 flex flex-col gap-4 bg-[var(--color-navbar)] p-4">
                  <button
                    onClick={() => setLang("en")}
                    className="flex items-center justify-between text-left w-full"
                  >
                    <div>
                      <p className="text-sm font-semibold text-[var(--color-black-white)]">English</p>
                      <p className="text-xs text-[var(--color-black-white)] opacity-60">United States</p>
                    </div>
                    <span
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                        lang === "en" ? "border-[var(--color-primary)]" : inactiveBorderColor
                      }`}
                    >
                      {lang === "en" && (
                        <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-primary)]"></span>
                      )}
                    </span>
                  </button>

                  <button
                    onClick={() => setLang("pt-br")}
                    className="flex items-center justify-between text-left w-full"
                  >
                    <div>
                      <p className="text-sm font-semibold text-[var(--color-black-white)]">Português</p>
                      <p className="text-xs text-[var(--color-black-white)] opacity-60">Brazil</p>
                    </div>
                    <span
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                        lang === "pt-br" ? "border-[var(--color-primary)]" : inactiveBorderColor
                      }`}
                    >
                      {lang === "pt-br" && (
                        <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-primary)]"></span>
                      )}
                    </span>
                  </button>
                </div>
              )}
            </div>

            <div className="w-full h-[1px] bg-[var(--color-border)]" />
          </div>
        </div>

        {/* Footer Button */}
        <div className="pt-6 pb-4">
          <BaseButton
            type="button"
            disabled
            title="Temporarily Unavailable"
            className="w-full px-5 py-2 text-[14px] font-medium"
          >
            {t.buttonText}
          </BaseButton>
        </div>
      </div>
    </>
  );
}
