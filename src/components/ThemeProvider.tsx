"use client";

import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";

import { ThemeProviderProps } from "next-themes/dist/types";
import { useEffect } from "react";

type CustomThemeProviderProps = ThemeProviderProps & {
  children: React.ReactNode;
};

const BodyWithTheme = ({ children }: { children: React.ReactNode }) => {
  const { theme, setTheme } = useTheme();
  console.log("theme in use =>", theme);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    console.log("the,e => ", theme);
    if (!storedTheme) {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  return (
    <div
      className={`w-full !h-full ${
        theme === "light"
          ? "bg-bg-light bg-cover bg-center"
          : "bg-bg-dark  bg-cover bg-center"
      }`}
    >
      {children}
    </div>
  );
};

const ThemeProvider = ({ children, ...props }: CustomThemeProviderProps) => {
  return (
    <NextThemesProvider {...props} defaultTheme="light">
      <BodyWithTheme>{children}</BodyWithTheme>
    </NextThemesProvider>
  );
};

export default ThemeProvider;
