"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

export default function page() {
  const theme = useTheme();
  return (
    <main className="flex-grow min-h-[calc(100vh-48px)] flex flex-col items-center justify-center ">
      <div className="flex flex-col items-center justify-center bg-white/30 dark:bg-black/50 rounded-2xl backdrop-blur-sm w-[30rem] sm:w-full sm:bg-transparent sm:backdrop-blur-0 sm:dark:bg-transparent mt-16">
        <div className="p-10 rounded-lg text-center w-full flex flex-col items-center justify-center">
          {theme.theme === "dark" ? (
            <Image
              src={"/images/s-logo-dark.svg"}
              width={200}
              height={200}
              alt="Logo"
              priority={true}
              className="mx-auto mb-5"
              loader={({ src }) => src}
            />
          ) : (
            <Image
              src={"/images/s-logo-light.svg"}
              width={200}
              height={200}
              alt="Logo"
              priority={true}
              className="  mx-auto mb-5"
              loader={({ src }) => src}
            />
          )}

          <div className="flex flex-col items-center mx-auto gap-3 w-full">
            <input
              type="text"
              placeholder="نام و نام خانوادگی"
              className="p-3 py-4 rounded-lg dark:bg-bg-dark dark:text-text-dark outline-none focus:outline-none w-full sm:max-w-[22.5rem] dark:border dark:border-[#4B4B4B]  "
            />
            <input
              type="text"
              placeholder="تاریخ تولد(مثال: 1400/01/01)"
              className="p-3 py-4 rounded-lg dark:bg-bg-dark dark:text-text-dark outline-none focus:outline-none w-full sm:max-w-[22.5rem] dark:border dark:border-[#4B4B4B] "
            />
            <input
              type="text"
              placeholder="کدملی"
              className="p-3 py-4 rounded-lg dark:bg-bg-dark dark:text-text-dark outline-none focus:outline-none w-full sm:max-w-[22.5rem] dark:border dark:border-[#4B4B4B] "
            />
            <button className="bg-black text-white dark:bg-bg-light dark:text-bg-light py-4 rounded-md w-full hover:bg-gray-800 transition-all duration-300 font-semibold text-xl mt-10">
              تایید
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
