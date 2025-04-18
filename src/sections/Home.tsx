"use client";
import Image from "next/image";
import rectangle from "@/assets/images/home/rectangle.png";
import rectangleFromRight from "@/assets/images/home/rectangleFromRight.png";
import rectangleFromLeft from "@/assets/images/home/rectangleFromLeft.png";
import factory from "@/assets/images/home/factory.png";
import helmet from "@/assets/images/home/helmet.gif";


const subtitle = "Real voices mean Real traction";
const title = "YOUR WEB3 DESERVES MORE THAN HYPE,<br/> WE BRING QUALITY";
const description =
  "We connect your Web3 project with leading content creators, ensuring seamless and organic communication that drives meaningful engagement.";
const buttonText = "Contact us";

export default function Home() {
  return (
    <section id="home" className="home-gradient relative w-full text-[var(--color-text)] overflow-hidden min-h-[930px]">
      <div className="absolute bottom-[380px] left-[-70px] w-[207.32px] h-[415px] z-0">
        <Image
          src={rectangleFromRight}
          alt="Rectangle from Right"
          width={207.32}
          height={415}
          className="object-contain w-full h-full"
        />
        <div className="absolute top-[25px] left-[80px] w-[45px] h-[45px] z-10">
          <Image src={helmet} alt="Helmet" width={45} height={45} unoptimized/>
          <div className="absolute top-[10px] left-[-5px] w-[8px] h-[8px] bg-[#FF5800] rounded-full z-20 shadow-md" />
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
          src={rectangleFromLeft}
          alt="Rectangle from Left"
          width={301.74}
          height={604}
          className="object-contain w-full h-full"
        />
        <div className="absolute top-[0px] left-[80px] w-[45px] h-[45px] z-10 scale-x-[-1]">
          <Image src={helmet} alt="Helmet" width={45} height={45} unoptimized/>
        </div>
        <div className="absolute top-[60px] right-[120px] w-[45px] h-[45px] z-10 scale-x-[-1]">
          <Image src={helmet} alt="Helmet" width={45} height={45} unoptimized/>
        </div>
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
        <p className="text-[14px] text-[var(--color-text)]/60 mb-4">{subtitle}</p>

        <h1
          className="text-[46px] font-bold leading-tight mb-6 max-w-[1000px] leading-snug"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        <p className="max-w-[880px] text-[var(--color-text)]/70 text-[16px] mb-6">
          {description}
        </p>

        <a
          href="#contact"
          className="mt-2 w-[150px] h-[44px] 
            bg-[var(--color-button-bg)] 
            text-[var(--color-button-text)] 
            text-[16px] font-semibold rounded-full 
            border border-[var(--color-button-border)] 
            shadow-[0_6px_0_0_var(--color-button-shadow)] 
            active:translate-y-[2px] 
            transition-all flex items-center justify-center"
        >
          {buttonText}
        </a>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[60px] bg-[var(--color-background)]" />
    </section>
  );
}