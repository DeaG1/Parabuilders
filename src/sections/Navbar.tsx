"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "@/assets/images/navbar/logoWithName.png";
import earthIcon from "@/assets/images/navbar/earthIcon.svg";
import ThemeToggle from "@/components/ThemeToggle";
import darkModeFeather from "@/assets/images/navbar/orangeFeather.png";
import lightModeFeather from "@/assets/images/navbar/blueFeather.png";

const buttonText = "Social codorna";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Results", href: "#results" },
  { label: "Services", href: "#services" },
  { label: "Social Media", href: "#social-media" },
];

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const updateTheme = () => {
      setIsDarkMode(root.classList.contains("dark"));
    };
    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <nav className="bg-[var(--color-navbar)] w-full py-4">
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
              <a
                key={link.label}
                href={link.href}
                className="group relative text-[var(--color-text)] text-[16px] transition-colors duration-300 hover:text-[var(--color-primary)]"
              >
                {link.label}
                <span
                  className="absolute left-0 -bottom-5 h-[20px] w-[100%] overflow-hidden pointer-events-none"
                  aria-hidden="true"
                >
                  <Image
                    src={isDarkMode ? darkModeFeather : lightModeFeather}
                    alt="feather underline"
                    width={100}
                    height={10}
                    className="transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out"
                  />
                </span>
              </a>
            ))}
            <div className="h-5 border-r border-[var(--color-border)] mr-[-10px]" />
            <div className="flex items-center gap-[20px] text-[var(--color-text)] text-xl">
              <ThemeToggle />
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
              className="px-5 py-2 text-[14px] font-medium 
                         text-[var(--color-button-text)] 
                         bg-[var(--color-button-bg)] 
                         rounded-full border border-[var(--color-button-border)] 
                         shadow-[0_6px_0_0_var(--color-button-shadow)] 
                         active:translate-y-[2px] 
                         transition-all"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </nav>
      <div className="w-full h-[1px] bg-[var(--color-border)]" />
    </>
  );
}