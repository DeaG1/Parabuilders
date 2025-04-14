import Image from "next/image";
import rectangle from "@/assets/images/rectangle.png";
import rectangleWithHelmet from "@/assets/images/rectangleWithHelmet.png";
import factory from "@/assets/images/factory.png";

const subtitle = "Real voices mean Real traction";
const title = "YOUR WEB3 DESERVES MORE THAN HYPE, WE BRING QUALITY";
const description = "We connect your Web3 project with leading content creators, ensuring seamless and organic communication that drives meaningful engagement.";
const buttonText = "Call to action";

export default function Home() {
  return (
    <section className="relative w-full min-h-screen bg-[#031f30] text-white overflow-hidden">
      <div className="absolute bottom-[150px] left-1 w-[180px] z-0">
        <div className="w-full h-full scale-x-[-1]">
          <Image
            src={rectangleWithHelmet}
            alt="Rectangle with helmet"
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="absolute bottom-[100px] left-1 w-[180px] z-10">
        <Image src={rectangle} alt="Rectangle" className="w-full h-auto" />
      </div>
      <div className="absolute bottom-[-60px] right-0 z-0">
        <Image
          src={rectangleWithHelmet}
          alt="Rectangle with helmet right"
          className="w-full h-auto"
        />
      </div>
      <div className="absolute bottom-[-110px] left-1/2 transform -translate-x-1/2 h-[560px] w-[1230px] z-0">
        <Image src={factory} alt="Factory with codorna" />
      </div>
      <div className="relative z-20 max-w-7xl mx-auto flex flex-col items-center text-center pt-20 px-4">
        <p className="text-[20px] text-white/60 mb-2">{subtitle}</p>
        <h1 className="text-[58px] font-bold leading-tight mb-4">{title}</h1>
        <p className="max-w-3xl text-white/70 text-[20px] mb-4">{description}</p>
        <button
          type="button"
          className="mt-4 px-8 py-3 bg-white text-black font-semibold rounded-full 
                     border border-[#FF5800] 
                     shadow-[0_7px_0_0_#FF5800] 
                     active:translate-y-[2px] 
                     transition-all"
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
}