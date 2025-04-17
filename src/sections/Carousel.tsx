"use client";
import Image from "next/image";

const logos = [
  {
    alt: "Meta Pool",
    bw: "/metapoolColorlessLogo.png",
    color: "/metapoolLogo.png",
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
    color: "/bitmartLogo.png",
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
  return (
    <div
      className="relative w-full overflow-hidden py-12"
      style={{
        background: "linear-gradient(to right, var(--color-background), var(--color-primary), var(--color-background))",
      }}
    >
      <div
        className="pointer-events-none absolute left-0 top-0 h-full w-20 z-10"
        style={{
          background: "linear-gradient(to right, var(--color-background), transparent)",
        }}
      />
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-20 z-10"
        style={{
          background: "linear-gradient(to left, var(--color-background), transparent)",
        }}
      />
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