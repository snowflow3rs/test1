import React from "react";
import Image from "next/image";
const Header = () => {
  return (
    <div className="w-full h-[75px] bg-[#1A1C22] flex justify-between items-center px-6 ">
      <div className="font-semibold text-[20px] leading-[30px]">Dashboard</div>
      <div className="flex items-center justify-items-center gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className=" w-[214px] h-[33px] bg-[#262931] rounded-lg p-4 text-[#9E9E9E] text-[10px] leading-[15px]
              placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <Image
            src="/assets/icons/search-normal.svg"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
            alt=""
            width={16}
            height={16}
          />
        </div>
        <div className="px-1">
          <Image src="/assets/icons/noti.svg" alt="" width={20} height={20} />
        </div>
        <Image
          src="/avatar.png"
          className="object-cover"
          alt=""
          width={34}
          height={34}
        />
      </div>
    </div>
  );
};

export default Header;
