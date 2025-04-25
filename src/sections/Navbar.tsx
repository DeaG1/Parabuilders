"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import logo from "@/assets/images/navbar/logoWithName.svg";
import homeDarkModeAnimation from "@/assets/images/navbar/feathers/dark/home.svg";
import resultsDarkModeAnimation from "@/assets/images/navbar/feathers/dark/results.svg";
import servicesDarkModeAnimation from "@/assets/images/navbar/feathers/dark/services.svg";
import socialMediaDarkModeAnimation from "@/assets/images/navbar/feathers/dark/socialMedia.svg";
import homeLightModeAnimation from "@/assets/images/navbar/feathers/light/home.svg";
import resultsLightModeAnimation from "@/assets/images/navbar/feathers/light/results.svg";
import servicesLightModeAnimation from "@/assets/images/navbar/feathers/light/services.svg";
import socialMediaLightModeAnimation from "@/assets/images/navbar/feathers/light/socialMedia.svg";
import { navbarTranslations } from "@/translations/navbar";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/translations/LanguageToggle";
import { useLanguage } from "@/components/translations/LanguageContext";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isClient, setIsClient] = useState(false);
  const { lang, setLang } = useLanguage(); 

useEffect(() => {
  setIsClient(true);
}, []);

  useEffect(() => {
    const root = document.documentElement;
    const updateTheme = () => {
      setIsDarkMode(root.classList.contains("dark"));
    };

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

  const t = navbarTranslations[lang];

  const navLinks = [
    {
      label: t.home,
      href: "#home",
      feather: {
        light: homeLightModeAnimation,
        dark: homeDarkModeAnimation,
        width: 44,
        height: 7,
      },
    },
    {
      label: t.results,
      href: "#results",
      feather: {
        light: resultsLightModeAnimation,
        dark: resultsDarkModeAnimation,
        width: 55,
        height: 7,
      },
    },
    {
      label: t.services,
      href: "#services",
      feather: {
        light: servicesLightModeAnimation,
        dark: servicesDarkModeAnimation,
        width: 64,
        height: 7,
      },
    },
    {
      label: t.socialMedia,
      href: "#social-media",
      feather: {
        light: socialMediaLightModeAnimation,
        dark: socialMediaDarkModeAnimation,
        width: 94,
        height: 7,
      },
    },
  ];

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
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative text-[var(--color-text)] text-[16px] transition-colors duration-300 hover:text-[var(--color-primary)]"
              >
                {link.label}
                <span className="absolute left-0 -bottom-5 h-[20px] w-[100%] overflow-hidden pointer-events-none">
                  <Image
                    src={isDarkMode ? link.feather.dark : link.feather.light}
                    alt={`${link.label} feather underline`}
                    width={link.feather.width}
                    height={link.feather.height}
                    className="transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out"
                  />
                </span>
              </a>
            ))}
            <div className="h-5 border-r border-[var(--color-border)]" />
            <div className="flex items-center gap-5 text-[var(--color-text)] text-xl">
              <ThemeToggle />
              <LanguageToggle isDarkMode={isDarkMode} lang={lang} setLang={setLang} />
            </div>
            <button
              type="button"
              disabled
              title="Temporarily Unavailable"
              className="px-5 py-2 text-[14px] font-medium 
                text-[var(--color-button-text)] 
                bg-[var(--color-button-bg)] 
                rounded-full border border-[var(--color-button-border)] 
                shadow-[0_6px_0_0_var(--color-button-shadow)] 
                active:translate-y-[2px] 
                transition-all
                cursor-not-allowed opacity-50"
            >
              {t.buttonText}
            </button>
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

        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[998] md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        <div
          className={`md:hidden fixed top-0 right-0 h-screen w-[80%] max-w-[320px] bg-[var(--color-navbar)] px-6 py-6 z-[999] 
            transform transition-transform duration-300 ease-in-out shadow-lg
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between mb-8">
            <Image
              src={logo}
              alt="Parabuilders logo"
              width={160}
              height={45}
              className="object-contain"
            />
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-[var(--color-primary)]"
            >
              <X size={28} />
            </button>
          </div>
          <div className="w-full h-[1px] bg-[var(--color-border)] mb-6" />
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 text-[var(--color-text)] text-lg font-medium hover:text-[var(--color-primary)] transition"
              >
                <span className="text-[var(--color-primary)]">•</span> {link.label}
              </a>
            ))}
          </nav>
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between border-t border-[var(--color-border)] pt-4">
            <ThemeToggle />
            <LanguageToggle isDarkMode={isDarkMode} lang={lang} setLang={setLang} />
          </div>
        </div>
      </nav>
      <div className="w-full h-[1px] bg-[var(--color-border)]" />
    </>
  );
}