"use client";

import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { useEffect, useState } from "react";

type CustomThemeProviderProps = ThemeProviderProps & {
  children: React.ReactNode;
};

const BodyWithTheme = ({ children }: { children: React.ReactNode }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("theme");
    if (!storedTheme) {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  }, [setTheme]);

  if (!mounted || !theme) {
    return null; // یا می‌توانید یک Loader نمایش دهید
  }

  return (
    <div
      className={`w-full !h-full ${
        theme === "light"
          ? `bg-bg-${theme} bg-cover bg-center`
          : `bg-bg-${theme} bg-cover bg-center`
      }`}
    >
      {children}
    </div>
  );
};

const ThemeProvider = ({ children, ...props }: CustomThemeProviderProps) => {
  const storedTheme =
    typeof window !== "undefined" ? localStorage.getItem("theme") : "light";

  return (
    <NextThemesProvider {...props} defaultTheme={storedTheme || "light"}>
      <BodyWithTheme>{children}</BodyWithTheme>
    </NextThemesProvider>
  );
};

export default ThemeProvider;
