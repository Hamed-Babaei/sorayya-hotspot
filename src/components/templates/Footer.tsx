"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const { theme } = useTheme();
  return (
    <div className="flex items-center justify-center h-12 gap-2">
      {theme === "light" ? (
        <>
          <img src={"/images/s-logo-light.svg"} alt="logo" className="w-10" />
          <span className="h-10 flex items-center">|</span>
        </>
      ) : (
        <>
          <img src={"/images/s-logo-dark.png"} alt="logo" className="w-10" />
          <span className="h-10 flex items-center">|</span>
        </>
      )}
      <p className="text-sm text-center text-gray-800 font-semibold dark:text-white/80">
        تحقیق و توسعه توسط
        <Link
          href="https://sorayya.co.com"
          className="text-black font-bold ps-1 dark:text-white"
        >
          &nbsp;شرکت فناور بنیان ثریا
        </Link>
      </p>
    </div>
  );
}
