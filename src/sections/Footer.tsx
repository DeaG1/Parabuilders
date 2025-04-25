"use client";
import Image from "next/image";
import { useLanguage } from "@/components/translations/LanguageContext";
import logoParabuilders from "@/assets/images/footer/logo.svg";
import triadLogo from "@/assets/images/footer/triadLogo.png";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { IconType } from "react-icons";

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
  const { t } = useLanguage();
  const footer = t("footer");

  return (
    <footer className="bg-[var(--color-footer)] text-white sm:pt-[60px] sm:pr-[0px] pr-[65px] pb-8 sm:px-[30px] px-[60px] xl:px-[50px]">
      <div className="flex flex-col md:flex-row items-start border-b border-white/10 pb-12 gap-y-10 md:gap-y-10">
        <div className="flex flex-col justify-between h-full min-w-[400px] max-w-[299px]">
          <div className="flex flex-col gap-6">
            <Image
              src={logoParabuilders}
              alt="Parabuilders logo"
              className="xl:h-[67px] xl:w-[67px] sm:h-[57px] sm:w-[57px]"
            />
            <p
              className="text-[16px] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: footer.visionText }}
            />
          </div>
          <div className="flex gap-2 mt-4 text-[24px]">
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
        <div className="w-full">
          <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row md:flex-row gap-[40px] max-md:gap-[120px] xl:gap-[180px] 2xl:gap-[180px] sm:justify-start justify-center md:justify-start md:pl-[450px] 2xl:pl-[900px]">
            {[{ title: footer.aboutTitle, links: footer.communityLinks },
              { title: footer.socialsTitle, links: footer.socialsLinks }].map((section, index) => (
              <div key={index} className="flex flex-col gap-7 w-[132px]">
                <h3 className="text-[20px] font-semibold mb-2">{section.title}</h3>
                {section.links.map((link, i) => {
                  const matched = socialLinks.find(
                    s => s.label?.toLowerCase() === link.toLowerCase()
                  );

                  const isAnchorLink = section.title === footer.aboutTitle;

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
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-[18px] text-white/60 gap-4">
        <span>{footer.footerBottomText}</span>
        <div className="flex items-center gap-1">
          <span>{footer.poweredBy}</span>
          <div className="flex items-center gap-[4px]">
            <Image
              src={triadLogo}
              alt="Triad logo + text"
              width={80}
              height={26}
              className="object-contain mt-[-1px]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}