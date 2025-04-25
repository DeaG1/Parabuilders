"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import logo from "@/assets/images/navbar/logoWithName.svg";
import { navbarTranslations } from "@/translations/navbar";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/translations/LanguageToggle";
import MobileMenu from "@/components/navbar/MobileMenu";
import BaseButton from "@/components/Button";
import { useLanguage } from "@/components/translations/LanguageContext";
import DesktopNavLinks from "@/components/navbar/DesktopNavbarLinks";
import { getNavbarLinks } from "@/components/navbar/navbarLinks";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const { lang, setLang } = useLanguage();
  const t = navbarTranslations[lang];

  useEffect(() => {
    setIsClient(true);
    const root = document.documentElement;
    const updateTheme = () => setIsDarkMode(root.classList.contains("dark"));
    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    }
  }, [isMenuOpen]);

  if (!isClient) return null;

  const navLinks = getNavbarLinks(t);

  return (
    <>
      <nav className="bg-[var(--color-navbar)] w-full py-4 relative z-50">
        <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-[90px]">
          <Image
            src={logo}
            alt="Parabuilders logo"
            width={200}
            height={45}
            className="object-contain"
          />

          <div className="hidden md:flex items-center gap-[41px]">
            <DesktopNavLinks links={navLinks} isDarkMode={isDarkMode} />

            <div className="h-5 border-r border-[var(--color-border)]" />

            <div className="flex items-center gap-5 text-[var(--color-text)] text-xl">
              <ThemeToggle />
              <LanguageToggle isDarkMode={isDarkMode} lang={lang} setLang={setLang} />
            </div>

            <BaseButton
              type="button"
              disabled
              title="Temporarily Unavailable"
              className="px-5 py-2 text-[14px] font-medium"
            >
              {t.buttonText}
            </BaseButton>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-[var(--color-text)]"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <MobileMenu
          isOpen={isMenuOpen}
          setIsOpen={setIsMenuOpen}
          navLinks={navLinks}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />
      </nav>

      <div className="w-full h-[1px] bg-[var(--color-border)]" />
    </>
  );
}
