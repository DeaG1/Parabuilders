import Image from "next/image";
import rectangle from "@/assets/images/rectangle.png";
import rectangleWithHelmet from "@/assets/images/rectangleWithHelmet.png";
import factory from "@/assets/images/factory.png";

export default function Home() {
  return (
    <section className="relative w-full min-h-screen bg-[#031f30] text-white overflow-hidden">
      <div className="absolute bottom-0 left-1 w-[150px] md:w-[200px] z-0">
        <div className="w-full h-full scale-x-[-1]">
          <Image
            src={rectangleWithHelmet}
            alt="Rectangle with helmet"
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-1 w-[130px] md:w-[180px] z-10">
        <Image 
         src={rectangle}
         alt="Rectangle"
         className="w-full h-auto" />
      </div>
      <div className="absolute bottom-0 right-0 z-0">
        <Image
          src={rectangleWithHelmet}
          alt="Rectangle with helmet right"
          className="w-full h-auto"
        />
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[400px] h-[560px] md:w-[1230px] z-0">
        <Image src={factory} 
        alt="Factory with codorna"/>
      </div>
      <div className="relative z-20 max-w-7xl mx-auto flex flex-col items-center text-center pt-24 px-4">
        <p className="text-sm text-white/60 mb-2">
          Neque porro quisquam est qui dolorem ipsum quia
        </p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
          LOREM IPSUM NEQUE PORRO QUI DOLOREM
        </h1>
        <p className="max-w-2xl text-white/70 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation
        </p>
        <div className="relative inline-block">
        <div className="absolute top-1 left-1 w-full h-full bg-orange-500 rounded-full z-0" />
            <button className="relative px-6 py-2 text-base font-medium text-black bg-[#FFFFFF] rounded-full z-10">
                Call to action
            </button>
        </div>
      </div>
    </section>
  );
}