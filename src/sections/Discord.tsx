"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import discordBannerDarkMode from "@/assets/images/discord/discordBannerDarkMode.png";
import discordBannerLightMode from "@/assets/images/discord/discordBannerLightMode.png";

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
    <section className="w-full flex justify-center bg-[var(--color-background)] py-16 px-4">
      <div className="relative w-full max-w-[1260px] rounded-3xl overflow-hidden">
        <Image
          src={isDarkMode ? discordBannerDarkMode : discordBannerLightMode}
          alt="Join our Discord"
          className="w-full h-auto object-cover"
          width={1260}
          height={465}
          priority
        />

        <div className="absolute inset-0 flex items-center px-12">
          <div className="max-w-[600px] text-[var(--color-text)]">
            <h2 className="text-[63px] font-bold leading-tight mb-4">
              {titleLines.map((line, index) => (
                <span key={index}>
                  {line}
                  {index < titleLines.length - 1 && <br />}
                </span>
              ))}
            </h2>
            <p className="text-[var(--color-text)]/80 text-[20px] mb-6">{subtitle}</p>
            <button
              type="button"
              className="mt-2 w-[333px] h-[71px] text-[30px] font-medium text-[var(--color-button-text)] bg-[var(--color-button-bg)]
                         rounded-full border border-[var(--color-button-border)]
                         shadow-[0_9px_0_0_var(--color-button-shadow)]
                         active:translate-y-[2px]
                         transition-all"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}