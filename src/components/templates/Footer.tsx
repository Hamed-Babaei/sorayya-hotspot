"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

export default function Footer() {
  const { theme } = useTheme();
  return (
    <div className="flex items-center justify-center h-12">
      {theme === "light" ? (
        <img
          src={"/images/s-logo-light.svg"}
          alt="logo"
          className="w-10 me-3 border-e border-black"
        />
      ) : (
        <img
          src={"/images/s-logo-dark.png"}
          alt="logo"
          className="w-10 me-3 border-e border-white"
        />
      )}
      <p className="text-sm text-center text-gray-500 font-semibold dark:text-white/70">
        تحقیق و توسعه توسط
        <span className="text-black font-bold ps-1 dark:text-white">
          شرکت فناور بنیان ثریا
        </span>
      </p>
    </div>
  );
}
