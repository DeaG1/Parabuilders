import Navbar from "@/sections/Navbar";
import Home from "@/sections/Home";
import Results from "@/sections/Results";
import Carousel from "@/sections/Carousel";
import Services from "@/sections/Services";
import Contact from "@/sections/Contact";
import Discord from "@/sections/Discord";
import Footer from "@/sections/Footer";

export default function Parabuilders() {
    return (
      <div className="relative overflow-x-hidden w-full">
        <Navbar />
        <Home />
        <Results />
        <Carousel />
        <Services />
        <Contact />
        <Discord />
        <Footer />
      </div>
    );
  }
