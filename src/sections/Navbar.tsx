"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logoWithName.png";
import earthIcon from "@/assets/images/icons/earthIcon.svg";
import ThemeToggle from "@/components/ThemeToggle";

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
              <Link
                key={link.label}
                href={link.href}
                className="group relative text-[var(--color-text)] text-[16px] transition-colors duration-300 hover:text-[var(--color-primary)]"
              >
                {link.label}
                <span
                  className="absolute left-0 -bottom-1 h-[2px] w-full scale-x-0 bg-[var(--color-primary)] transition-transform duration-300 group-hover:scale-x-100 origin-left"
                  aria-hidden="true"
                />
              </Link>
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
