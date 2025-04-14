import Image from "next/image";
import whiteFootPrints from "@/assets/images/footprints.png";
import hand from "@/assets/images/hand.png";

const title = {
  title: ["ParaBuilders", "More than just a community of", "content creators."],
};

const cards = [
  { type: "text", title: "+1 Milion", description: "Of views and an average of +1000 views per tweet." },
  { type: "text", title: "+150 Creators", description: "Unique creators" },
  { type: "text", title: "+15 Thousand", description: "Likes" },
  { type: "text", title: "+1 Thousand", description: "Tweets total" },
  { type: "text", title: "+15 Thousand", description: "Retweets" },
  { type: "text", title: "+5 Thousand", description: "Replies" },
];

export default function Results() {
  return (
    <section className="relative w-full bg-[#031F30] text-white py-32 overflow-hidden">
      <div className="absolute left-0 top-[0%] z-0">
        <Image src={hand} alt="Hand" className="w-[120px] md:w-[300px]" />
      </div>
      <div className="absolute right-5 top-[5%] z-0">
        <Image
          src={whiteFootPrints}
          alt="Footprints"
          className="w-[150px] md:w-[270px]"
        />
      </div>

      <div className="relative z-10 text-center px-4 flex flex-col items-center gap-2 md:gap-3">
        {title.title.map((line, i) => (
          <p key={i} className="text-2xl md:text-5xl font-bold text-white">
            {line}
          </p>
        ))}
      </div>

      <div className="relative z-10 mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 sm:px-8 lg:px-16 max-w-[1400px] mx-auto">
        {cards.map((card, index) => (
          <div key={index} className="relative w-full">
            <div className="absolute top-2 left-2 w-full h-full bg-orange-500 rounded-2xl z-0" />
            <div className="relative bg-[#ffe2c5] text-black rounded-xl p-8 min-h-[220px] z-10 flex flex-col justify-between shadow-xl">
              <h3 className="text-5xl font-bold mb-4">{card.title}</h3>
              <p className="text-xl leading-relaxed text-black/80">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
