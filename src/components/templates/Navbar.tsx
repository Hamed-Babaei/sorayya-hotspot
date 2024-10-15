import React from "react";

export default function Navbar() {
  return (
    <div className="max-w-[1400px] xl:px-4 mx-auto mt-5 rounded-xl overflow-hidden">
      <div className="max-w-[1350px] mx-auto px-3 py-4 bg-gray-400 rounded-xl overflow-hidden">
        <div className="flex items-center justify-between">
          <div>
            <div
              className="w-[3.563rem] h-[3.563rem] bg-white rounded-[0.75rem] border border-[#E8ECF4] flex items-center justify-center
"
            >
              <span className="text-black">EN</span>
            </div>
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="w-[3.563rem] h-[3.563rem] bg-white rounded-[0.75rem] border border-[#E8ECF4] flex items-center justify-center">
              <span className="text-black">EN</span>
            </div>
            <div className="w-[3.563rem] h-[3.563rem] bg-white rounded-[0.75rem] border border-[#E8ECF4] flex items-center justify-center">
              <span className="text-black">EN</span>
            </div>
            <div className="w-[3.563rem] h-[3.563rem] bg-white rounded-[0.75rem] border border-[#E8ECF4] flex items-center justify-center">
              <span className="text-black">EN</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
