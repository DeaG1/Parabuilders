"use client";
import Image from "next/image";
import rectangle from "@/assets/images/rectangle.png";
import rectangleWithHelmet from "@/assets/images/rectangleWithHelmet.png";
import rectangleWith2Helmet from "@/assets/images/rectangleWith2Helmet.png";
import factory from "@/assets/images/factory.png";

const subtitle = "Real voices mean Real traction";
const title = "YOUR WEB3 DESERVES MORE THAN HYPE,<br/> WE BRING QUALITY";
const description =
  "We connect your Web3 project with leading content creators, ensuring seamless and organic communication that drives meaningful engagement.";
const buttonText = "Call to action";

export default function Home() {
  return (
    <section className="relative w-full bg-[#031f30] text-white overflow-hidden min-h-[930px]">
      <div className="absolute bottom-[380px] left-[-70px] w-[207.32px] h-[415px] z-0">
        <div className="w-full h-full">
          <Image
            src={rectangleWithHelmet}
            alt="Rectangle with helmet left"
            width={207.32}
            height={415}
            className="object-contain w-full h-full"
          />
        </div>
      </div>
      <div className="absolute bottom-[190px] left-[-50px] w-[211px] h-[279.32px] z-10">
        <Image
          src={rectangle}
          alt="Rectangle"
          width={211}
          height={279.32}
          className="object-contain w-full h-full"
        />
      </div>
      <div className="absolute bottom-[300px] right-[-55px] w-[211px] h-[279.32px] z-10">
        <Image
          src={rectangle}
          alt="Right rectangle plain"
          width={211}
          height={279.32}
          className="object-contain w-full h-full"
        />
      </div>
      <div className="absolute bottom-[-50px] right-[-115px] w-[301.74px] h-[604px] z-10">
        <Image
          src={rectangleWith2Helmet}
          alt="Rectangle with helmet right"
          width={301.74}
          height={604}
          className="object-contain w-full h-full"
        />
      </div>
      <div className="absolute bottom-[-60px] left-[120px] xl:left-[120px] 2xl:left-[350px]">
        <Image
          src={factory}
          alt="Factory with codorna"
          width={966}
          height={578}
          quality={100}
          priority
          className="object-contain"
        />
      </div>
      <div className="relative z-20 w-full max-w-[1440px] mx-auto flex flex-col items-center text-center pt-20 px-4">
        <p className="text-[14px] text-white/60 mb-4">{subtitle}</p>
        <h1
          className="text-[46px] font-bold leading-tight mb-6 max-w-[1000px] leading-snug"
          dangerouslySetInnerHTML={{ __html: title }}
          />
        <p className="max-w-[880px] text-white/70 text-[16px] mb-6">
          {description}
        </p>
        <button
          type="button"
          className="mt-2 w-[150px] h-[44px] bg-white text-black text-[16px] font-semibold rounded-full 
             border border-[#FF5800] 
             shadow-[0_6px_0_0_#FF5800] 
             active:translate-y-[2px] 
             transition-all flex items-center justify-center"
          >
          {buttonText}
        </button>
      </div>
    </section>
  );
}
