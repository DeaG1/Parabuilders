"use client";
import Image from "next/image";
import MotionServiceCard from "@/components/motions/motionServiceCards";
import { useLanguage } from "@/components/translations/LanguageContext";
import { servicesTranslations } from "@/translations/services";

import pinkBird from "@/assets/images/services/pinkBird.png";
import yellowBird from "@/assets/images/services/yellowBird.png";
import greenBird from "@/assets/images/services/greenBird.png";
import blueBird from "@/assets/images/services/blueBird.png";

function hexToRGBA(hex: string, alpha: number) {
  const cleanHex = hex.replace("#", "");
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const birdAssets = [pinkBird, yellowBird, greenBird, blueBird];
const bgColors = ["#F47DC1", "#F4DA7D", "#7DF392", "#7EC8F5"];
const borders = ["#F47DC1", "#FEE191", "#B2EFA8", "#A0D4F7"];
const aligns = ["left", "right", "left", "right"];

export default function Services() {
  const { lang } = useLanguage();
  const { sectionTitle, cards } = servicesTranslations[lang];

  return (
    <section
      id="services"
      className="py-[140px] px-[150px] 2xl:px-[200px] max-md:px-4 max-md:py-20 bg-[var(--color-background)]"
    >
      <h2 className="text-[48px] max-md:text-[30px] font-bold text-[var(--color-text)] text-center mb-16">
        {sectionTitle}
      </h2>

      <div className="max-w-[1440px] mx-auto flex flex-col gap-[25px]">
        {cards.map((card, index) => {
          const isLeft = aligns[index] === "left";

          return (
            <div
              key={index}
              className={`w-full flex ${isLeft ? "justify-start" : "justify-end"} max-md:justify-center`}
            >
              <MotionServiceCard isLeft={isLeft}>
                <div
                  className={`
                    relative flex overflow-hidden border-2 rounded-[16px]
                    ${isLeft ? "flex-row" : "flex-row-reverse"} max-md:flex-row
                    min-h-[189px] md:w-[542px] 2xl:w-[640px] 2xl:min-h-[220px] w-full
                  `}
                  style={{
                    backgroundColor: hexToRGBA(bgColors[index], 0.2),
                    borderColor: borders[index],
                  }}
                >
                  <div
                    className={`
                      relative flex-shrink-0 overflow-hidden
                      max-md:rounded-l-[10px] max-md:rounded-r-none
                      ${isLeft ? "rounded-l-[10px]" : "rounded-r-[10px]"}
                      md:w-[210px] 2xl:w-[250px] w-[140px] min-w-[140px]
                      max-md:h-auto max-md:h-[162px]
                    `}
                    style={{ backgroundColor: bgColors[index] }}
                  >
                    <Image
                      src={birdAssets[index]}
                      alt={card.title}
                      fill
                      className="object-contain object-bottom"
                      unoptimized
                    />
                  </div>
                  <div className="md:w-[332px] 2xl:w-[390px] w-full flex flex-col justify-center px-6 py-4 flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 bg-orange-400 rounded-full flex-none" />
                      <h3 className="text-[var(--color-text)] text-[20px] 2xl:text-[24px] font-semibold">
                        {card.title}
                      </h3>
                    </div>
                    <div className="flex items-start gap-5 ml-1">
                      <div className="w-2 bg-orange-400 h-full mt-1" />
                      <p className="text-[var(--color-text)] text-[14px] 2xl:text-[16px] leading-tight">
                        {card.text}
                      </p>
                    </div>
                  </div>
                </div>
              </MotionServiceCard>
            </div>
          );
        })}
      </div>
    </section>
  );
}
