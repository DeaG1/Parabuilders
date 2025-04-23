"use client";
import Image from "next/image";
import MotionServiceCard from "@/components/motions/motionServiceCards";

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

const services = [
  {
    title: "Content Campaign",
    text: "Creative and targeted content strategies to boost engagement and expand your digital presence.",
    bgColor: "#F47DC1",
    border: "#F47DC1",
    image: pinkBird,
    align: "left",
  },
  {
    title: "KOL Manager",
    text: "Comprehensive Key Opinion Leader (KOL) management, connecting your brand with the right influencers to maximize reach.",
    bgColor: "#F4DA7D",
    border: "#FEE191",
    image: yellowBird,
    align: "right",
  },
  {
    title: "Ambassador Program",
    text: "We create and manage ambassador programs to strengthen your community and increase brand loyalty.",
    bgColor: "#7DF392",
    border: "#B2EFA8",
    image: greenBird,
    align: "left",
  },
  {
    title: "KOL Metrics Tools",
    text: "Gain in-depth insights into campaigns and KOL performance with our exclusive dashboard for optimized results.",
    bgColor: "#7EC8F5",
    border: "#A0D4F7",
    image: blueBird,
    align: "right",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-[140px] px-[150px] max-md:px-4 max-md:py-20 bg-[var(--color-background)]"
    >
      <h2 className="text-[48px] max-md:text-[30px] font-bold text-[var(--color-text)] text-center mb-16">
        Services
      </h2>

      <div className="max-w-[1440px] mx-auto flex flex-col gap-[25px]">
        {services.map((service, index) => {
          const isLeft = service.align === "left";

          return (
            <div
              key={index}
              className={`w-full flex ${isLeft ? "justify-start" : "justify-end"} max-md:justify-center`}
            >
              <MotionServiceCard isLeft={isLeft}>
                <div
                  className={`
                    relative flex overflow-hidden border-2 rounded-[10px]
                    ${isLeft ? "flex-row" : "flex-row-reverse"} max-md:flex-row
                    md:h-[189px] md:w-[542px] w-full
                  `}
                  style={{
                    backgroundColor: hexToRGBA(service.bgColor, 0.2),
                    borderColor: service.border,
                  }}
                >
                  <div
                    className={`
                      relative flex-shrink-0 overflow-hidden
                      max-md:rounded-l-[10px] max-md:rounded-r-none
                      ${isLeft ? "rounded-l-[10px]" : "rounded-r-[10px]"}
                      md:w-[210px] w-[140px] min-w-[140px]
                      aspect-[210/189]
                    `}
                    style={{
                      backgroundColor: service.bgColor,
                    }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>

                  <div className="md:w-[332px] w-full flex flex-col justify-center px-6 py-4 flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 bg-orange-400 rounded-full" />
                      <h3 className="text-[var(--color-text)] text-[20px] font-semibold">
                        {service.title}
                      </h3>
                    </div>
                    <div className="flex items-start gap-5 ml-1">
                      <div className="w-2 bg-orange-400 h-full mt-1" />
                      <p className="text-[var(--color-text)] text-[14px] leading-tight">
                        {service.text}
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
