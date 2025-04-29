"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/translations/LanguageContext";
import { FadeUp } from "@/components/motions/motionFadeUp";
import { FadeImage } from "@/components/motions/motionFadeImage";
import BackgroundVideo from "@/components/home/BackgroundVideo";
import helmet from "@/assets/images/home/helmet.gif";
import { homeTranslations } from "@/translations/home";

interface HomeProps {
  onReady: () => void;
}

export default function Home({ onReady }: HomeProps) {
  const [isClient, setIsClient] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const { lang } = useLanguage();
  const t = homeTranslations[lang];

  useEffect(() => {
    setIsClient(true);
    onReady();
    const currentTheme = document.documentElement.classList.contains("light")
      ? "light"
      : "dark";
    setTheme(currentTheme);
  }, []);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const updatedTheme = document.documentElement.classList.contains("light")
        ? "light"
        : "dark";
      setTheme(updatedTheme);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  if (!isClient) return null;

  return (
    <>
      <section className="relative md:hidden w-full bg-[var(--color-mobileBackground)] px-4 pt-6 pb-10 text-center text-[var(--color-text)] overflow-hidden min-h-screen">
  <video
    key={theme + "-mobile-video"}
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
  >
    <source
      src={`/${theme === "dark" ? "darkBackgroundMobile.mp4" : "lightBackgroundMobile.mp4"}`}
      type="video/mp4"
    />
  </video>

  <div className="absolute top-[10vh] left-[5vw] w-[10vw] h-[10vw] z-10">
    <FadeImage>
      <Image src={helmet} alt="Helmet" fill className="object-contain" unoptimized />
    </FadeImage>
  </div>

  <div className="absolute top-[25vh] right-[5vw] w-[10vw] h-[10vw] z-10 scale-x-[-1]">
    <FadeImage>
      <Image src={helmet} alt="Helmet" fill className="object-contain" unoptimized />
    </FadeImage>
  </div>

  <div className="absolute top-[33vh] right-[10vw] w-[10vw] h-[10vw] z-10 scale-x-[-1]">
    <FadeImage>
      <Image src={helmet} alt="Helmet" fill className="object-contain" unoptimized />
    </FadeImage>
  </div>

  <div className="relative z-10 mt-10 flex flex-col items-center px-2">
    <FadeUp>
      <p className="text-sm text-[var(--color-text)]/60 mb-2">{t.subtitles}</p>
    </FadeUp>

    <FadeUp>
      <h1
        className="text-[32px] font-bold leading-snug mb-4"
        dangerouslySetInnerHTML={{ __html: t.title }}
      />
    </FadeUp>

    <FadeUp>
      <p className="text-[17px] text-[var(--color-text)]/60 mb-6">{t.description}</p>
    </FadeUp>

    <FadeUp>
      <a
        key={theme + "-mobile"}
        href="#contact"
        className="w-full h-[44px] bg-[var(--color-button-bg)] text-[var(--color-button-text)] border border-[var(--color-button-border)] shadow-[0_6px_0_0_var(--color-button-shadow)] text-sm font-semibold rounded-full active:translate-y-[2px] flex items-center justify-center"
      >
        {t.buttonText}
      </a>
    </FadeUp>
  </div>
</section>
      <section id="home" className="w-full text-[var(--color-text)] overflow-hidden relative aspect-[2880/1660] hidden md:block">
        <BackgroundVideo 
          src={`/${theme === "dark" ? "darkBackground.mp4" : "lightBackground.mp4"}`}
          themeKey={theme}
          className="opacity-0 animate-fade-in"
        />
        <FadeImage>
          <div className="absolute top-[140px] left-[20px] 2xl:top-[160px] 2xl:left-[30px] w-[45px] h-[45px] z-20">
            <Image 
              key={theme}
              src={helmet}
              alt="Helmet"
              width={45}
              height={45}
              unoptimized
            />
          </div>
        </FadeImage>
        <FadeImage>
          <div className="absolute top-[300px] right-[20px] 2xl:right-[60px] 2xl:top-[530px] w-[45px] h-[45px] z-20 scale-x-[-1]">
            <Image 
              key={theme + "-1"}
              src={helmet}
              alt="Helmet"
              width={45}
              height={45}
              unoptimized
            />
          </div>
        </FadeImage>
        <FadeImage>
          <div className="absolute top-[370px] right-[10px] 2xl:top-[420px] w-[45px] h-[45px] z-20 scale-x-[-1]">
            <Image 
              key={theme + "-2"}
              src={helmet}
              alt="Helmet"
              width={45}
              height={45}
              unoptimized
            />
          </div>
        </FadeImage>
        <div className="relative z-20 w-full max-w-[1440px] mx-auto flex flex-col items-center text-center pt-20 px-4">
          <FadeUp>
            <p className="text-[14px] text-[var(--color-text)]/60 mb-4">{t.subtitles}</p>
          </FadeUp>
          <FadeUp>
            <h1
              className="text-[46px] font-bold leading-tight mb-6 max-w-[1000px]"
              dangerouslySetInnerHTML={{ __html: t.title }}
            />
          </FadeUp>
          <FadeUp>
            <p className="max-w-[880px] text-[var(--color-text)]/70 text-[14px] mb-6">
              {t.description}
            </p>
          </FadeUp>
          <FadeUp>
            <a
              key={theme}
              href="#contact"
              className="mt-2 xl:mt-[-6px] 2xl:mt-[20px] w-[220px] h-[44px]
              bg-[var(--color-button-bg)] text-[var(--color-button-text)]
              border border-[var(--color-button-border)] shadow-[0_6px_0_0_var(--color-button-shadow)]
              text-[16px] font-semibold rounded-full active:translate-y-[2px] flex items-center justify-center opacity-0 animate-fade-in"
            >
              {t.buttonText}
            </a>
          </FadeUp>
        </div>
      </section>
    </>
  );
}