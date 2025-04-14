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
        <div className="w-full flex justify-between items-center px-6 lg:px-32">
          <div className="flex items-center">
            <Image src={logo} alt="Parabuilders logo" className="h-16 w-auto" />
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group relative text-white/50 text-[22px] transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                  <span
                    className="absolute left-0 -bottom-1 h-[2px] w-full scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100 origin-left"
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </div>
            <div className="h-8 border-r border-gray-500" />
            <div className="flex items-center gap-4 text-white text-xl">
              <Image
                src={moonIcon}
                alt="Moon icon"
                width={24}
                height={24}
                className="cursor-pointer hover:opacity-80 transition"
              />
              <Image
                src={earthIcon}
                alt="Earth icon"
                width={24}
                height={24}
                className="cursor-pointer hover:opacity-80 transition"
              />
            </div>
            <button
              type="button"
              className="px-5 py-2 text-sm font-medium text-black bg-white 
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
