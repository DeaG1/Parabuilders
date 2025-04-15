"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logoWithName.png";
import moonIcon from "@/assets/images/icons/moonIcon.svg";
import earthIcon from "@/assets/images/icons/earthIcon.svg";

const buttonText = "Social codorna";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Results", href: "#" },
  { label: "Services", href: "#" },
  { label: "Social Media", href: "#" },
];

export default function Navbar() {
  return (
    <>
      <nav className="bg-[#01121a] w-full py-4">
        <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between">
          <div className="pl-[90px]">
            <Image
              src={logo}
              alt="Parabuilders logo"
              width={250}
              height={56.25}
              className="object-contain"
            />
          </div>
          <div className="flex items-center gap-[41px] pr-[88px]">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group relative text-white/50 text-[16px] transition-colors duration-300 hover:text-white"
              >
                {link.label}
                <span
                  className="absolute left-0 -bottom-1 h-[2px] w-full scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100 origin-left"
                  aria-hidden="true"
                />
              </Link>
            ))}
            <div className="h-5 border-r border-gray-500 mr-[-10px]" />
            <div className="flex items-center gap-[20px] text-white text-xl">
              <Image
                src={moonIcon}
                alt="Moon icon"
                width={20}
                height={20}
                className="cursor-pointer hover:opacity-80 transition"
              />
              <Image
                src={earthIcon}
                alt="Earth icon"
                width={20}
                height={20}
                className="cursor-pointer hover:opacity-80 transition"
              />
            </div>
            <button
              type="button"
              className="px-5 py-2 text-[14px] font-medium text-black bg-white 
                         rounded-full border border-[#FF5800] 
                         shadow-[0_6px_0_0_#FF5800] 
                         active:translate-y-[2px] 
                         transition-all"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </nav>
      <div className="w-full h-[1px] bg-sky-800" />
    </>
  );
}