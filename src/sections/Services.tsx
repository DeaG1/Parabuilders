"use client";
import Image from "next/image";

import pinkBird from "@/assets/images/servicesBird1.png";
import yellowBird from "@/assets/images/servicesBird2.png";
import greenBird from "@/assets/images/servicesBird3.png";
import blueBird from "@/assets/images/servicesBird4.png";

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
    <section className="py-[140px] px-[150px] bg-[var(--color-background)]">
      <h2 className="text-[48px] font-bold text-[var(--color-text)] text-center mb-16">
        Services
      </h2>
      <div className="max-w-[1440px] mx-auto flex flex-col gap-[25px]">
        {services.map((service, index) => {
          const isLeft = service.align === "left";

          return (
            <div
              key={index}
              className={`w-full flex ${
                isLeft ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`relative flex items-stretch overflow-hidden border-2 ${
                  isLeft ? "flex-row" : "flex-row-reverse"
                } rounded-2xl`}
                style={{
                  width: "542px",
                  height: "198px",
                  backgroundColor: hexToRGBA(service.bgColor, 0.2),
                  borderColor: service.border,
                }}
              >
                <div
                  className={`relative flex-shrink-0 overflow-hidden ${
                    isLeft ? "rounded-l-2xl" : "rounded-r-2xl"
                  }`}
                  style={{ width: "210px", height: "198px" }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={210}
                    height={198}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="w-[332px] flex flex-col justify-center px-6">
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
            </div>
          );
        })}
      </div>
    </section>
  );
}