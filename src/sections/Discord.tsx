"use client";
import Image from "next/image";
import discordBanner from "@/assets/images/discordBannerDarkMode.png";

const titleLines = ["BECOME A", "CREATOR", "NOW"];
const subtitle = "join our community on discord";
const buttonText = "Enter Now";

export default function Discord() {
  return (
    <section className="w-full flex justify-center bg-[#031F30] py-16 px-4">
      <div className="relative w-full max-w-[1260px] rounded-3xl overflow-hidden">
        <Image
          src={discordBanner}
          alt="Join our Discord"
          className="w-full h-auto object-cover"
          width={1260}
          height={465}
          priority
        />

        <div className="absolute inset-0 flex items-center px-12">
          <div className="max-w-[600px] text-white">
            <h2 className="text-[63px] font-bold leading-tight mb-4">
              {titleLines.map((line, index) => (
                <span key={index}>
                  {line}
                  {index < titleLines.length - 1 && <br />}
                </span>
              ))}
            </h2>
            <p className="text-white/80 text-[20px] mb-6">{subtitle}</p>
            <button
              type="button"
              className="mt-2 w-[333px] h-[71px] text-[30px] font-medium text-black bg-white 
                         rounded-full border border-[#FF5800] 
                         shadow-[0_6px_0_0_#FF5800] 
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