"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex-grow min-h-[calc(100vh-48px)] flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center ">
        <div className="p-10 rounded-lg  text-center">
          <Image
            src={"/images/maher-logo.png"}
            width={500}
            height={500}
            alt="Logo"
            priority={true}
            className="w-[18.75rem]  mx-auto mb-5"
            loader={({ src }) => src}
          />
          <h1 className="text-xl font-bold  text-gray-800 mb-6 dark:text-text-dark">
            به شبکه آیتی ماهر خوش آمدید
          </h1>

          <div className="flex flex-col space-y-4">
            <button
              className="bg-black text-white dark:bg-bg-light dark:text-bg-light py-3 rounded-md w-full hover:bg-gray-800 transition-all duration-300 font-semibold text-md"
              onClick={() => {
                router.push("/register");
              }}
            >
              ثبت نام
            </button>
            <button
              className="bg-black text-white dark:bg-bg-light dark:text-bg-light py-3 rounded-md w-full hover:bg-gray-800 transition-all duration-300 font-semibold text-md"
              onClick={() => {
                router.push("/login");
              }}
            >
              ورود
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
