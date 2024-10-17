"use client";
import React from "react";
import ThemeToggleButton from "../ThemeToggler";

export default function Navbar() {
  const openModal = () => {
    const modal = document.getElementById("my_modal_2");
    if (modal) modal.showModal();
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-10 max-w-[1400px] xl:px-4 mx-auto mt-5 rounded-xl overflow-hidden">
      <div className="max-w-[1350px] mx-auto px-3 py-3 bg-white/40 dark:bg-white/20 rounded-xl overflow-hidden">
        <div className="flex items-center justify-between">
          <div>
            <div className="w-[3.563rem] h-[3.563rem] bg-white rounded-[0.75rem] border border-[#E8ECF4] flex items-center justify-center">
              <img src="/icons/locale.svg" alt="logo" />
            </div>
          </div>
          <div className="flex items-center justify-between gap-3">
            <div
              className="w-[3.563rem] h-[3.563rem] bg-white rounded-[0.75rem] border border-[#E8ECF4] flex items-center justify-center"
              onClick={openModal}
            >
              <img src="/icons/half.svg" alt="logo" />
            </div>
            <div className="w-[3.563rem] h-[3.563rem] bg-white rounded-[0.75rem] border border-[#E8ECF4] flex items-center justify-center">
              <ThemeToggleButton />
            </div>
            <div
              className="w-[3.563rem] h-[3.563rem] bg-white rounded-[0.75rem] border border-[#E8ECF4] flex items-center justify-center cursor-pointer"
              onClick={openModal}
            >
              <img src="/icons/arrow-left.svg" alt="logo" />
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box p-5 font-Peyda">
          <h3 className="font-bold text-lg">ارتباط با ما</h3>
          <div className="flex items-center justify-between">
            <p className="py-4">ارتباط با پشتیبانی :</p>
            <p>
              <span className="text-red-600 font-Peyda">035</span>-91001000
            </p>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
