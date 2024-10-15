import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="">
        <div className="min-h-screen flex flex-col items-center ">
          <div>
            <title>به شبکه آیتی ماهر خوش آمدید</title>
          </div>

          <div className="bg-white p-10 rounded-lg  w-96 text-center">
            <Image
              src={"/images/maher-logo.png"}
              width={500}
              height={500}
              alt="Logo"
              className="w-[18.75rem]  mx-auto mb-5"
            />
            <h1 className="text-xl font-bold text-gray-800 mb-6">
              به شبکه آیتی ماهر خوش آمدید
            </h1>

            <div className="flex flex-col space-y-4">
              <button className="bg-black text-white py-3 rounded-md w-full hover:bg-gray-800 transition-all duration-300">
                ثبت نام
              </button>
              <button className="bg-black text-white py-3 rounded-md w-full hover:bg-gray-800 transition-all duration-300">
                ورود
              </button>
            </div>
          </div>

          <footer className="mt-10">
            <p className="text-sm text-gray-500 pb-[1.813rem]">
              حقوق و توسعه برنامه توسط شرکت فناور بنیان ثریا
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
