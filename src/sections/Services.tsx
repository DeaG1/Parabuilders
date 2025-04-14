"use client";
import Image from "next/image";

import pinkBird from "@/assets/images/servicesBird1.png";
import yellowBird from "@/assets/images/servicesBird2.png";
import greenBird from "@/assets/images/servicesBird3.png";
import blueBird from "@/assets/images/servicesBird4.png";

const services = [
  {
    title: "Content Campaign",
    text: "Creative and targeted content strategies to boost engagement and expand your digital presence.",
    bgText: "bg-[#492B5A]",
    border: "border-[#FF78AD]",
    image: pinkBird,
    align: "left",
    bgImage: "bg-[#F883B9]",
  },
  {
    title: "KOL Manager",
    text: "Comprehensive Key Opinion Leader (KOL) management, connecting your brand with the right influencers to maximize reach.",
    bgText: "bg-[#343629]",
    border: "border-[#FEE191]",
    image: yellowBird,
    align: "right",
    bgImage: "bg-[#F8DE90]",
  },
  {
    title: "Ambassador Program",
    text: "We create and manage ambassador programs to strengthen your community and increase brand loyalty.",
    bgText: "bg-[#124422]",
    border: "border-[#B2EFA8]",
    image: greenBird,
    align: "left",
    bgImage: "bg-[#7EF191]",
  },
  {
    title: "KOL Metrics Tools ",
    text: "Gain in-depth insights into campaigns and KOL performance with our exclusive dashboard for optimized results.",
    bgText: "bg-[#113255]",
    border: "border-[#A0D4F7]",
    image: blueBird,
    align: "right", 
    bgImage: "bg-[#92C6F8]",
  },
];

export default function Services() {
  return (
    <section className="py-16 px-40 bg-[#031F30]">
      <h2 className="text-[58px] font-bold text-white text-center mb-16">
        Services
      </h2>
      <div className="flex flex-col gap-12 max-w-screen-xl mx-auto">
        {services.map((service, index) => {
          const isLeft = service.align === "left";

          return (
            <div
              key={index}
              className={`px-4 ${isLeft ? "mr-auto" : "ml-auto"}`}
            >
              <div
                className={`flex h-[250px] w-[770px] items-center overflow-hidden rounded-xl border-2 ${service.border} ${service.bgText} ${
                  isLeft ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`w-[300px] h-full relative shrink-0 ${service.bgImage}`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 h-full flex flex-col justify-center p-6 max-w-[400px]">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-orange-400 rounded-full" />
                    <h3 className="text-white text-[30px] font-semibold">
                      {service.title}
                    </h3>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 bg-orange-400 h-full" />
                    <p className="text-white text-[20px] max-w-[420px] leading-tight">{service.text}</p>
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
