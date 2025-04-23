"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import discordBannerDarkMode from "@/assets/images/discord/discordBannerDarkMode.png";
import discordBannerLightMode from "@/assets/images/discord/discordBannerLightMode.png";
import discordBannerDarkModeMobile from "@/assets/images/discord/discordBannerDarkModeMobile.png";
import discordBannerLightModeMobile from "@/assets/images/discord/discordBannerLightModeMobile.png";
import hand from "@/assets/images/discord/hand.png";

const titleLines = ["BECOME A", "CREATOR", "NOW"];
const subtitle = "join our community on discord";
const buttonText = "Enter Now";

export default function Discord() {
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
    <section
      id="social-media"
      className="w-full flex justify-center bg-[var(--color-background)] py-16 px-4"
    >
      <div className="relative w-full max-w-[1260px] rounded-3xl overflow-hidden">
        <Image
          src={isDarkMode ? discordBannerDarkMode : discordBannerLightMode}
          alt="Join our Discord"
          className="w-full h-auto object-cover hidden md:block"
          width={1260}
          height={465}
          priority
        />
        <Image
          src={
            isDarkMode
              ? discordBannerDarkModeMobile
              : discordBannerLightModeMobile
          }
          alt="Join our Discord"
          className="w-full h-auto object-cover block md:hidden"
          width={590}
          height={366}
        />
        <div className="absolute inset-0 flex items-center justify-start px-12 max-md:px-6 max-md:pt-[370px] max-md:items-center max-md:justify-center text-center">
          <div className="text-[var(--color-text)]">
          <h2 className="font-bold leading-tight mb-4 text-[63px] max-md:text-[26px]">
            <span className="hidden md:inline">
              {titleLines.map((line, index) => (
                <span key={index}>
                  {line}
                  {index < titleLines.length - 1 && <br />}
                </span>
              ))}
            </span>
            <span className="inline md:hidden">{titleLines.join(" ")}</span>
          </h2>
            <p className="text-[var(--color-text)]/80 text-[20px] mb-6 max-md:text-[14px]">
              {subtitle}
            </p>
            <a
              href="https://discord.gg/parabuilders"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center mt-2 
                         w-[333px] h-[71px] text-[30px] font-medium 
                         max-md:w-full max-md:h-[50px] max-md:text-[16px] max-md:font-bold
                         text-[var(--color-button-text)] bg-[var(--color-button-bg)]
                         rounded-full border border-[var(--color-button-border)]
                         shadow-[0_9px_0_0_var(--color-button-shadow)]
                         active:translate-y-[2px] transition-all"
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
