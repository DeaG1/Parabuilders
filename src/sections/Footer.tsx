import Image from "next/image";
import logoParabuilders from "@/assets/images/footer/logo.png";
import triadLogo from "@/assets/images/footer/triadLogo.png";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { IconType } from "react-icons";

const visionText = "Our vision is to provide growth and <br/> increase your business.";
const communityLinks = ["Results", "Services", "Contact"];
const socialsLinks = ["Discord", "Instagram", "Twitter"];
const footerBottomText = "©2025 Parabuilders. All rights reserved";
const text = "Powered by";

const socialLinks: {
  icon: IconType | null;
  href: string;
  label?: string;
}[] = [
  {
    icon: FaTwitter,
    href: "https://twitter.com/parabuilders",
    label: "Twitter",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/parabuildersxyz/",
    label: "Instagram",
  },
  {
    icon: null,
    href: "https://discord.gg/parabuilders",
    label: "Discord",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-footer)] text-white pt-[65px] pb-8 px-[60px] xl:px-[50px]">
      <div className="flex flex-col md:flex-row items-start border-b border-white/10 pb-12 gap-y-10 md:gap-y-0">
        <div className="flex flex-col justify-between h-full min-w-[400px] max-w-[299px]">
          <div className="flex flex-col gap-6">
            <Image
              src={logoParabuilders}
              alt="Parabuilders logo"
              className="h-[67px] w-[67px]"
            />
            <p
              className="text-[16px] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: visionText }}
            />
          </div>
          <div className="flex gap-6 mt-4 text-[24px]">
            {socialLinks.slice(0, 3).map(({ icon: Icon, href }, index) =>
              Icon ? (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-white text-[#053350] bg-white hover:bg-white/80 transition"
                >
                  <Icon />
                </a>
              ) : null
            )}
          </div>
        </div>
        <div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row gap-[190px] justify-center pl-[450px] 2xl:pl-[800px]">
          {[{ title: "About", links: communityLinks },
            { title: "Socials", links: socialsLinks }].map((section, index) => (
            <div key={index} className="flex flex-col gap-7 w-[132px]">
              <h3 className="text-[20px] font-semibold mb-2">{section.title}</h3>
              {section.links.map((link, i) => {
                const matched = socialLinks.find(
                  s => s.label?.toLowerCase() === link.toLowerCase()
                );

                const isAnchorLink = section.title === "About";

                return (
                  <a
                    key={i}
                    href={isAnchorLink ? `#${link.toLowerCase()}` : matched?.href || "#"}
                    className="cursor-pointer hover:text-white/70 text-[16px]"
                  >
                    {link}
                  </a>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-[18px] text-white/60 gap-4">
        <span>{footerBottomText}</span>
        <div className="flex items-center gap-2">
          <span>{text}</span>
          <div className="flex items-center gap-[4px]">
          <Image
            src={triadLogo}
            alt="Triad logo + text"
            width={80}
            height={26}
            className="object-contain mt-[-3px]"
          />
          </div>
        </div>
      </div>
    </footer>
  );
}