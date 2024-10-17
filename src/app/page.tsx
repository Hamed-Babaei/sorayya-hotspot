import ThemeToggleButton from "@/components/ThemeToggler";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="">
        <div className="min-h-screen flex flex-col items-center justify-center ">
          <div className="p-10 rounded-lg  text-center">
            <Image
              src={"/images/maher-logo.png"}
              width={500}
              height={500}
              alt="Logo"
              priority={true}
              className="w-[18.75rem]  mx-auto mb-5"
            />
            <h1 className="text-xl font-bold  text-gray-800 mb-6 dark:text-text-dark">
              به شبکه آیتی ماهر خوش آمدید
            </h1>

            <div className="flex flex-col space-y-4">
              <button className="bg-black text-white dark:bg-bg-light dark:text-bg-light py-3 rounded-md w-full hover:bg-gray-800 transition-all duration-300 font-semibold text-md">
                ثبت نام
              </button>
              <button className="bg-black text-white dark:bg-bg-light dark:text-bg-light py-3 rounded-md w-full hover:bg-gray-800 transition-all duration-300 font-semibold text-md">
                ورود
              </button>
              <ThemeToggleButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
