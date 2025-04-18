"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import whiteFootPrints from "@/assets/images/results/whiteFootprints.png";
import darkFootPrints from "@/assets/images/results/darkFootprints.png";
import hand from "@/assets/images/results/hand.png";

const title = {
  title: ["ParaBuilders", "More than just a community of", "content creators."],
};

const cards = [
  { type: "text", title: "+1 Milion", description: "Of views and an average of +1000 views per tweet." },
  { type: "text", title: "+150 Creators", description: "Unique creators" },
  { type: "text", title: "+15 Thousand", description: "Likes" },
  { type: "text", title: "+1 Thousand", description: "Tweets total" },
  { type: "text", title: "+15 Thousand", description: "Retweets" },
  { type: "text", title: "+5 Thousand", description: "Replies" },
];

export default function Results() {
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  return (
    <section className="relative w-full bg-[var(--color-background)] text-[var(--color-text)] py-32 overflow-hidden">
      <div className="absolute left-[0px] top-[0px] z-0">
        <Image src={hand} alt="Hand" width={193} height={529} />
      </div>
      <div className="absolute right-[20px] top-[10px] z-0">
        <Image
          src={isDarkMode ? whiteFootPrints : darkFootPrints}
          alt="Footprints"
          width={215}
          height={400}
        />
      </div>
      <div className="relative z-10 text-center px-4 flex flex-col items-center gap-2 md:gap-3 max-w-[1440px] mx-auto">
        {title.title.map((line, i) => (
          <p key={i} className="md:text-5xl xl:text-[48px] font-bold">
            {line}
          </p>
        ))}
      </div>
      <div className="relative z-10 mt-[126px] flex flex-wrap justify-center gap-x-[28px] gap-y-7 w-[1440px] mx-auto">
        {cards.map((card, index) => (
          <div key={index} className="relative w-[412px] h-[230px]">
            <div className="absolute top-2 left-3 w-full h-full bg-[var(--color-button-shadow)] rounded-2xl z-0" />
            <div className="relative bg-[var(--color-results-bg)] text-[var(--color-results-text)] rounded-xl p-10 w-full h-full z-10 flex flex-col justify-between shadow-xl">
              <h3 className="text-[48px] font-bold mb-4">{card.title}</h3>
              <p className="text-[20px] leading-relaxed text-[var(--color-button-text)]/80">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}