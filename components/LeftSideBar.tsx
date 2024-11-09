"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { sidebarLinks } from "@/constants";

const LeftSideBar = () => {
  const pathname = usePathname();
  
  
  return (
    <aside className="w-[213px] bg-[#1A1C22] min-h-screen ">
      <div className="h-[75px] flex flex-col justify-center items-center">
        <Image src="/assets/icons/Logo.svg" alt="" width={156} height={36} />
      </div>

      <div className=" mt-5">
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route;

          return (
            <Link href={item.route} key={item.label}>
              <div
                className={`flex items-center px-8 py-4 relative
                  after:transition-all after:duration-100 after:ease-in-out
                  ${
                    isActive
                      ? "after:absolute after:w-[7px] after:h-[20px] after:rounded-tl-[4px] after:rounded-bl-[4px] after:bg-[#FFB800] after:right-0 after:top-1/2 after:-translate-y-1/2"
                      : "after:absolute after:w-0 after:h-[20px] after:bg-[#FFB800] after:right-0 after:top-1/2 after:-translate-y-1/2"
                  }`}
              >
                {/* <Image src={item.icon} alt="" width={20} height={20}  /> */}
                {item.icon(isActive)}
                <p
                  className={`ml-4 leading-[17px] font-medium text-[12px]  ${
                    isActive ? "text-[#1FCB4F] " : " text-[#A9A9A9]  "
                  }`}
                >
                  {item.label}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

export default LeftSideBar;
