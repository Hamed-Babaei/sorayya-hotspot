"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaCircleHalfStroke } from "react-icons/fa6";

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect(() => {
  //   const storedTheme = localStorage.getItem("theme");
  //   console.log("store => ", storedTheme);
  //   setTheme(storedTheme || "light");
  // });

  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  // if (!mounted) return null; // برای جلوگیری از مشکلات SSR

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="w-[3.563rem] h-[3.563rem] bg-white rounded-[0.75rem] border border-[#E8ECF4] flex items-center justify-center"
    >
      <img src="/icons/theme.svg" alt="logo" />
    </button>
  );
};

export default ThemeToggleButton;
