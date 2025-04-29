"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import whiteFootPrints from "@/assets/images/results/whiteFootprints.png";
import darkFootPrints from "@/assets/images/results/darkFootprints.png";
import hand from "@/assets/images/results/hand.png";
import { useLanguage } from "@/components/translations/LanguageContext";
import ScrollContainer from "@/components/results/ScrollContainer";
import { FadeUpStagger } from "@/components/motions/motionFadeUpStagger";
import { FadeImage } from "@/components/motions/motionFadeImage";
import { FadeUp } from "@/components/motions/motionFadeUp";

export default function Results() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { t } = useLanguage();
  const results = t("results");

  useEffect(() => {
    const root = document.documentElement;
    const updateTheme = () => setIsDarkMode(root.classList.contains("dark"));
    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full bg-[var(--color-background)] text-[var(--color-text)] py-32 max-md:py-16 overflow-hidden">
      <FadeImage>
        <div className="absolute left-[-25px] top-[170px] 2xl:left-[-50px] z-0 hidden md:block">
          <Image src={hand} alt="Hand" width={193} height={529} />
        </div>
      </FadeImage>

      <FadeImage>
        <div className="absolute right-[20px] max-md:right-[0] top-[10px] max-md:top-[140px] z-0">
          <Image
            src={isDarkMode ? whiteFootPrints : darkFootPrints}
            alt="Footprints"
            width={215}
            height={400}
            className="max-md:w-[125px] max-md:h-[234px] max-md:opacity-20"
          />
        </div>
      </FadeImage>

      <div
        id="results"
        className="relative z-10 text-center px-4 flex flex-col items-center gap-2 md:gap-3 max-w-[1440px] mx-auto"
      >
        {results.title.map((line: string, i: number) => (
          <FadeUp key={i}>
          <p className="text-2xl sm:text-3xl md:text-5xl xl:text-[48px] font-bold">
            {line}
          </p>
        </FadeUp>
        ))}
      </div>

      <div className="relative z-10 mt-16 xl:mt-32 w-full">
        <div className="hidden md:flex flex-wrap justify-center gap-x-[28px] gap-y-7 w-[1440px] mx-auto">
          {results.cards.map((card, index) => (
            <FadeUpStagger key={index} delayOrder={index}>
            <div className="relative w-[412px] h-[230px]">
              <div className="absolute top-2 left-3 w-full h-full bg-[var(--color-button-shadow)] rounded-2xl z-0" />
              <div className="relative bg-[var(--color-results-bg)] text-[var(--color-results-text)] rounded-xl p-10 w-full h-full z-10 flex flex-col justify-between shadow-xl">
                <h3 className="text-[48px] font-bold mb-0">{card.title}</h3>
                <p className="text-[20px] leading-relaxed text-[var(--color-button-text)]/80">
                  {card.description}
                </p>
              </div>
            </div>
          </FadeUpStagger>
          ))}
        </div>

        <div className="md:hidden mt-12 px-2">
          <ScrollContainer>
            {results.cards.map((card, index) => (
              <div
                key={index}
                className="w-[clamp(280px,85vw,340px)] h-[160px] flex-shrink-0 relative snap-center transition-transform duration-500 ease-in-out"
              >
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-[var(--color-button-shadow)] rounded-xl z-0 translate-x-[10px] translate-y-[10px]" />
                  <div className="relative z-10 bg-[var(--color-results-bg)] text-[var(--color-results-text)] rounded-xl p-4 flex flex-col gap-2 shadow-lg w-full h-full overflow-hidden hover:scale-[1.02] transition-transform duration-300">
                    <h3 className="text-[20px] font-bold mb-0">{card.title}</h3>
                    <p className="text-[14px] text-[var(--color-button-text)]/80 line-clamp-2">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </ScrollContainer>
        </div>
      </div>
    </section>
  );
}
