"use client";

import { useState } from "react";
import Navbar from "@/sections/Navbar";
import Home from "@/sections/Home";
import Results from "@/sections/Results";
import Carousel from "@/sections/Carousel";
import Services from "@/sections/Services";
import Contact from "@/sections/Contact";
import Discord from "@/sections/Discord";
import Footer from "@/sections/Footer";
import SectionLoader from "@/components/SectionLoader";

export default function Parabuilders() {
  const [homeReady, setHomeReady] = useState(false);
  const [resultsReady, setResultsReady] = useState(false);
  const [carouselReady, setCarouselReady] = useState(false);
  const [servicesReady, setServicesReady] = useState(false);
  const [contactReady, setContactReady] = useState(false);
  const [discordReady, setDiscordReady] = useState(false);

  return (
    <div className="relative overflow-x-hidden w-full">
      <Navbar />
      <Home onReady={() => setHomeReady(true)} />

      <SectionLoader shouldRender={homeReady} onReady={() => setResultsReady(true)}>
        <Results />
      </SectionLoader>

      <SectionLoader shouldRender={resultsReady} onReady={() => setCarouselReady(true)}>
        <Carousel />
      </SectionLoader>

      <SectionLoader shouldRender={carouselReady} onReady={() => setServicesReady(true)}>
        <Services />
      </SectionLoader>

      <SectionLoader shouldRender={servicesReady} onReady={() => setContactReady(true)}>
        <Contact />
      </SectionLoader>

      <SectionLoader shouldRender={contactReady} onReady={() => setDiscordReady(true)}>
        <Discord />
      </SectionLoader>

      <SectionLoader shouldRender={discordReady}>
        <Footer />
      </SectionLoader>
    </div>
  );
}
