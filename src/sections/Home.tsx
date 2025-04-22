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
    <section
      id="home"
      className="relative w-full overflow-hidden aspect-[2880/1660] text-[var(--color-text)]"
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

      {/* Capacete 1 */}
      <div className="
        absolute 
        top-[180px] 
        left-[20px] 
        sm:left-[40px] 
        md:left-[60px] 
        lg:left-[80px]
        xl:left-[20px]
        xl:top-[120px]
        2xl:left-[40px]
        2xl:top-[180px]
        w-[45px] 
        h-[45px] 
        z-20
        transition-opacity duration-500"
      >
        <Image
          key={theme}
          src={helmet}
          alt="Helmet"
          width={45}
          height={45}
          unoptimized
          className="opacity-0 animate-fade-in transition-opacity duration-500"
        />
      </div>

      {/* Capacete 2 */}
      <div className="absolute
        xl:right-[30px]
        xl:top-[330px]
        2xl:top-[500px]
        2xl:right-[50px]
        w-[45px]
        h-[45px] 
        z-20 
        scale-x-[-1]
        transition-opacity duration-500"
      >
        <Image
          key={theme + "-1"} // outro key pra forçar remount individual
          src={helmet}
          alt="Helmet"
          width={45}
          height={45}
          unoptimized
          className="opacity-0 animate-fade-in transition-opacity duration-500"
        />
      </div>

      {/* Capacete 3 */}
      <div className="
        absolute 
        2xl:top-[580px] 
        right-[0px] 
        xl:top-[400px]
        w-[45px] 
        h-[45px] 
        z-20 
        scale-x-[-1]
        transition-opacity duration-500"
      >
        <Image
          key={theme + "-2"}
          src={helmet}
          alt="Helmet"
          width={45}
          height={45}
          unoptimized
          className="opacity-0 animate-fade-in transition-opacity duration-500"
        />
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto flex flex-col items-center text-center pt-20 px-4 md:pt-4 lg:pt-14 xl:pt-10 2xl:pt-32 transition-opacity duration-500">
        <p className="text-[14px] text-[var(--color-text)]/60 mb-4 transition-opacity duration-500">{subtitle}</p>
        <h1
          className="text-[32px] sm:text-[36px] md:text-[40px] xl:text-[46px] font-bold leading-tight mb-6 max-w-[1000px] leading-snug transition-colors duration-500"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className="max-w-[880px] text-[var(--color-text)]/70 text-[14px] sm:text-[15px] md:text-[16px] mb-6 px-2 md:px-0 transition-colors duration-500">
          {description}
        </p>
        <a
          key={theme}
          href="#contact"
          className="mt-2 w-[140px] sm:w-[150px] h-[42px] sm:h-[44px] 
            bg-[var(--color-button-bg)] 
            text-[var(--color-button-text)] 
            border border-[var(--color-button-border)] 
            shadow-[0_6px_0_0_var(--color-button-shadow)] 
            transition-all duration-500 
            opacity-0 animate-fade-in
            text-[14px] sm:text-[16px] font-semibold rounded-full 
            active:translate-y-[2px] 
            flex items-center justify-center"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
}