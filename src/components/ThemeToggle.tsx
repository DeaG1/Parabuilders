"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import moonIcon from "@/assets/images/navbar/moonIcon.svg";
import sunIcon from "@/assets/images/navbar/sunIcon.png";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const initialTheme = savedTheme || "dark";
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(initialTheme);
    setTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <Image
      src={theme === "dark" ? sunIcon : moonIcon}
      alt="Toggle theme"
      width={20}
      height={20}
      onClick={toggleTheme}
      className="cursor-pointer hover:opacity-80 transition"
    />
  );
}