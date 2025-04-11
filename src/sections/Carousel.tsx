"use client";
import Image from "next/image";

const logos = [
  { src: "/metaPoolLogo.png", alt: "Meta Pool" },
  { src: "/inceptionLogo.png", alt: "Inception LRT" },
  { src: "/mangoLogo.png", alt: "Mango" },
  { src: "/bitmartLogo.png", alt: "BitMart" },
  { src: "/streamflowLogo.png", alt: "Streamflow" },
  { src: "/turtleLogo.png", alt: "Turtle" },
];

export default function Carousel() {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#031F30] via-[#FF5C00] to-[#031F30] py-12">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#031F30] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#031F30] to-transparent z-10" />

      <div className="flex w-max animate-slide gap-16 px-8">
        {[...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos,].map((logo, index) => (
          <div key={index} className="min-w-[120px] h-[50px] flex items-center justify-center">
            <Image src={logo.src} alt={logo.alt} width={150} height={80} className="object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
}
