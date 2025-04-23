"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import helmet from "@/assets/images/home/helmet.gif";

const subtitle = "Real voices mean Real traction";
const title =
  "YOUR WEB3 DESERVES MORE THAN HYPE,<br/> WE BRING QUALITY";
const description =
  "We connect your Web3 project with leading content creators, ensuring seamless and organic communication that drives meaningful engagement.";
const buttonText = "Contact us";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    setIsClient(true);
    const currentTheme =
      document.documentElement.classList.contains("light") ? "light" : "dark";
    setTheme(currentTheme);
  }, []);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const updatedTheme =
        document.documentElement.classList.contains("light") ? "light" : "dark";
      setTheme(updatedTheme);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="md:hidden bg-[var(--color-mobileBackground)] w-full px-4 py-10 text-center text-[var(--color-text)]">
        <p className="text-sm text-[var(--color-text)]/60 mb-4">{subtitle}</p>
        <h1
          className="text-2xl font-bold leading-snug mb-6"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className="text-sm text-[var(--color-text)]/20 mb-6">
          {description}
        </p>
        <a
          key={theme + "-mobile"}
          href="#contact"
          className="w-full h-[44px] bg-[var(--color-button-bg)] text-[var(--color-button-text)] border border-[var(--color-button-border)] shadow-[0_6px_0_0_var(--color-button-shadow)] text-sm font-semibold rounded-full active:translate-y-[2px] flex items-center justify-center"
        >
          {buttonText}
        </a>
      </section>

      <section
        id="home"
        className="w-full text-[var(--color-text)] overflow-hidden relative aspect-[2880/1660] hidden md:block"
      >
        {isClient && (
          <video
            key={theme}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-0 animate-fade-in"
          >
            <source
              src={`/${theme === "dark" ? "darkBackground.mp4" : "lightBackground.mp4"}`}
              type="video/mp4"
            />
          </video>
        )}
        <div className="absolute top-[140px] left-[20px] w-[45px] h-[45px] z-20 transition-opacity duration-500">
          <Image key={theme} src={helmet} alt="Helmet" width={45} height={45} unoptimized />
        </div>
        <div className="absolute top-[300px] right-[20px] w-[45px] h-[45px] z-20 scale-x-[-1] transition-opacity duration-500">
          <Image key={theme + "-1"} src={helmet} alt="Helmet" width={45} height={45} unoptimized />
        </div>
        <div className="absolute top-[370px] right-[10px] w-[45px] h-[45px] z-20 scale-x-[-1] transition-opacity duration-500">
          <Image key={theme + "-2"} src={helmet} alt="Helmet" width={45} height={45} unoptimized />
        </div>
        <div className="relative z-20 w-full max-w-[1440px] mx-auto flex flex-col items-center text-center pt-20 px-4">
          <p className="text-[14px] text-[var(--color-text)]/60 mb-4">{subtitle}</p>
          <h1
            className="text-[46px] font-bold leading-tight mb-6 max-w-[1000px]"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p className="max-w-[880px] text-[var(--color-text)]/70 text-[14px] mb-6">
            {description}
          </p>
          <a
            key={theme}
            href="#contact"
            className="mt-2 xl:mt-[-6px] w-[220px] h-[44px] bg-[var(--color-button-bg)] text-[var(--color-button-text)] border border-[var(--color-button-border)] shadow-[0_6px_0_0_var(--color-button-shadow)] text-[16px] font-semibold rounded-full active:translate-y-[2px] flex items-center justify-center"
          >
            {buttonText}
          </a>
        </div>
      </section>
      {isClient && (
        <div className="block md:hidden w-full aspect-video">
          <video
            key={theme}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src={`/${theme === "dark" ? "darkBackground.mp4" : "lightBackground.mp4"}`}
              type="video/mp4"
            />
          </video>
        </div>
      )}
    </>
  );
}