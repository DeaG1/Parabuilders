import Image from "next/image";
import whiteFootPrints from "@/assets/images/footprints.png";
import hand from "@/assets/images/hand.png";
import bird from "@/assets/images/bird.png";
import exampleBird1 from "@/assets/images/servicesBird1.png";
import exampleBird2 from "@/assets/images/servicesBird2.png";
import exampleBird3 from "@/assets/images/servicesBird3.png";

const cards = [
  {
    type: "text",
    title: "24+",
    description: "Colocar infográficos de resultados dos creators.",
  },
  {
    type: "image-single",
    image: bird,
    label: "Call to action",
    description: "Creator em destaque com maior performance.",
  },
  {
    type: "image-multiple",
    images: [exampleBird1, exampleBird2, exampleBird3],
    description: "Top creators do mês com maior engajamento.",
  },
  {
    type: "text",
    title: "10K+",
    description: "Engajamento total em posts no último mês.",
  },
  {
    type: "image-single",
    image: bird,
    label: "Nova campanha",
    description: "Criadores participando de campanhas exclusivas.",
  },
  {
    type: "image-multiple",
    images: [exampleBird1, exampleBird2, exampleBird3],
    description: "Time criativo colaborando em novos projetos.",
  },
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

      <div className="relative z-10 text-center px-4 flex flex-col items-center gap-2 md:gap-3 text-2xl md:text-5xl font-bold">
        <h2>ParaBuilders</h2>
        <p>Mais do que uma comunidade de</p>
        <p>criadores de conteúdo.</p>
      </div>

      <div className="relative z-10 mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 sm:px-8 lg:px-16 max-w-[1400px] mx-auto">
        {cards.map((card, index) => (
          <div key={index} className="relative w-full">
            <div className="absolute top-2 left-2 w-full h-full bg-orange-500 rounded-2xl z-0" />
            <div className="relative bg-[#ffe2c5] text-black rounded-xl p-8 min-h-[220px] z-10 flex flex-col justify-between shadow-xl">
              {card.type === "text" && (
                <>
                  <h3 className="text-5xl font-bold mb-4">{card.title}</h3>
                  <p className="text-xl leading-relaxed text-black/80">
                    {card.description}
                  </p>
                </>
              )}

              {card.type === "image-single" && card.image && (
                <>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={card.image}
                        alt="creator"
                        width={64}
                        height={64}
                      />
                    </div>
                    <span className="text-xl font-semibold">{card.label}</span>
                  </div>
                  <p className="text-xl leading-relaxed text-black/80">
                    {card.description}
                  </p>
                </>
              )}

              {card.type === "image-multiple" && Array.isArray(card.images) && (
                <>
                  <div className="flex items-center gap-3 mb-4">
                    {card.images.map((img, i) => (
                      <div
                        key={i}
                        className="w-14 h-14 rounded-full overflow-hidden"
                      >
                        <Image
                          src={img}
                          alt={`creator-${i}`}
                          width={56}
                          height={56}
                        />
                      </div>
                    ))}
                  </div>
                  <p className="text-xl leading-relaxed text-black/80">
                    {card.description}
                  </p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}