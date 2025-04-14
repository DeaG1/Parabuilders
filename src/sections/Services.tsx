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
  },
  {
    title: "KOL Manager",
    text: "Comprehensive Key Opinion Leader (KOL) management, connecting your brand with the right influencers to maximize reach.",
    bgText: "bg-[#343629]",
    border: "border-[#FEE191]",
    image: yellowBird,
    align: "right",
  },
  {
    title: "Ambassador Program",
    text: "We create and manage ambassador programs to strengthen your community and increase brand loyalty.",
    bgText: "bg-[#124422]",
    border: "border-[#B2EFA8]",
    image: greenBird,
    align: "left",
  },
  {
    title: "KOL Metrics Tools",
    text: "Gain in-depth insights into campaigns and KOL performance with our exclusive dashboard for optimized results.",
    bgText: "bg-[#113255]",
    border: "border-[#A0D4F7]",
    image: blueBird,
    align: "right",
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
                className={`flex items-stretch overflow-hidden border-2 ${service.border} ${service.bgText} ${
                  isLeft ? "flex-row" : "flex-row-reverse"
                } rounded-2xl`}
                style={{ width: "770px", height: "250px" }}
              >
                <div
                  className={`relative w-[300px] overflow-hidden ${
                    isLeft ? "rounded-l-xl" : "rounded-r-xl"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={300}
                    height={250}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center p-6 max-w-[470px]">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-orange-400 rounded-full" />
                    <h3 className="text-white text-[30px] font-semibold">
                      {service.title}
                    </h3>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 bg-orange-400 h-full" />
                    <p className="text-white text-[20px] leading-tight">
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
