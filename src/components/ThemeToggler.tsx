"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  // if (!mounted) return null; // برای جلوگیری از مشکلات SSR

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="px-4 py-2 bg-primary text-white rounded-md transition-all duration-500"
    >
      تغییر تم به {theme === "light" ? "تاریک" : "روشن"}
    </button>
  );
};

export default ThemeToggleButton;
