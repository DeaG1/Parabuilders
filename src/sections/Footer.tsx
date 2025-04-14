import Image from "next/image";
import logoParabuilders from "@/assets/images/logo.png";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const visionText = "Our vision is to provide growth and increase your business.";
const aboutLinks = ["Results", "Roadmap", "Services"];
const communityLinks = ["Events", "Blog", "Podcast"];
const socialsLinks = ["Discord", "Instagram", "Twitter"];
const footerBottomText = "©2025 Parabuilders. All rights reserved";
const policyLinks = ["Privacy & Policy", "Terms & Condition"];

export default function Footer() {
  return (
    <footer className="bg-[#053350] text-white px-32 pt-20 pb-8">
      <div className="flex flex-col md:flex-row justify-between items-start border-b border-white/10 pb-12 gap-y-10 md:gap-y-0 md:gap-x-32">
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-6">
            <Image
              src={logoParabuilders}
              alt="Parabuilders logo"
              className="h-[80px] w-[80px]"
            />
            <p className="text-[20px] leading-relaxed">
              {visionText.split(" and ").map((line, i) => (
                <span key={i}>
                  {line}
                  {i === 0 && <br />}
                </span>
              ))}
            </p>
          </div>
          <div className="flex gap-6 mt-4 text-[24px]">
            {[FaFacebookF, FaTwitter, FaInstagram].map((Icon, index) => (
              <div
                key={index}
                className="p-2 rounded-full border border-white text-[#053350] bg-white hover:bg-white/80 transition"
              >
                <Icon />
              </div>
            ))}
          </div>
        </div>
        {[
          { title: "About", links: aboutLinks },
          { title: "Community", links: communityLinks },
          { title: "Socials", links: socialsLinks },
        ].map((section, index) => (
          <div key={index} className="flex flex-col gap-7">
            <h3 className="text-[24px] font-semibold mb-2">{section.title}</h3>
            {section.links.map((link, i) => (
              <span
                key={i}
                className="cursor-pointer hover:text-white/70 text-[20px]"
              >
                {link}
              </span>
            ))}
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-[18px] text-white/60 gap-4">
        <span>{footerBottomText}</span>
        <div className="flex gap-20">
          {policyLinks.map((text, i) => (
            <span key={i} className="cursor-pointer hover:text-white">
              {text}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
