"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const logos = [
  {
    alt: "Meta Pool",
    bw: "/metapoolColorlessLogo.png",
    color: "/metapoolLogoWithColor.png",
    width: 182.8,
    height: 22,
    offsetY: 10,
  },
  {
    alt: "Inception LRT",
    bw: "/inceptionColorlessLogo.png",
    color: "/inceptionLogo.png",
    width: 175,
    height: 42,
  },
  {
    alt: "Mango",
    bw: "/mangoColorlessLogo.png",
    color: "/mangoLogo.png",
    width: 89,
    height: 31.2,
    offsetY: 3,
  },
  {
    alt: "BitMart",
    bw: "/bitmartColorlessLogo.png",
    color: "/bitmartLogoWithColor.png",
    width: 150.2,
    height: 38.1,
    offsetY: 1,
  },
  {
    alt: "Streamflow",
    bw: "/streamflowColorlessLogo.png",
    color: "/streamflowLogo.png",
    width: 237,
    height: 38.4,
    offsetY: 2,
  },
  {
    alt: "Turtle",
    bw: "/turtleclubColorlessLogo.png",
    color: "/turtleclubLogo.png",
    width: 192.86,
    height: 47.5,
    offsetY: -2,
    offsetX: -50,
  },
  {
    alt: "Kaisar",
    bw: "/kaisarColorlessLogo.png",
    color: "/kaisarLogo.png",
    width: 127.6,
    height: 40.5,
  },
  {
    alt: "Bitget",
    bw: "/bitgetColorlessLogo.png",
    color: "/bitgetLogo.png",
    width: 210,
    height: 37.5,
    offsetY: 1,
  },
];

export default function Carousel() {
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

  const backgroundStyle = isDarkMode
  ? "linear-gradient(to right, #003459 0%, #FF5800 50%, #003459 100%)"
  : "linear-gradient(to right, #003459 0%, #0072CE 50%, #003459 100%)";

  return (
    <div
      className="relative w-full overflow-hidden py-12"
      style={{
        background: backgroundStyle,
      }}
    >
      <div className="flex w-max animate-slide gap-16 px-8">
        {Array.from({ length: 10 }).flatMap(() =>
          logos.map((logo, index) => (
            <div
              key={`${logo.alt}-${index}`}
              className="group relative flex items-center justify-center"
              style={{
                width: logo.width,
                height: logo.height,
                transform: `translateY(${logo.offsetY ?? 0}px)`,
                marginLeft: logo.offsetX ?? 0,
              }}
            >
              <Image
                src={logo.bw}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="object-contain absolute transition-opacity duration-300 opacity-100 group-hover:opacity-0"
              />
              <Image
                src={logo.color}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="object-contain transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
