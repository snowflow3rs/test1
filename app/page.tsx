import Header from "@/components/Header";
import { cards } from "@/constants";
import Image from "next/image";

export default function Dashboard() {
 
  return (
    <main className="flex flex-col w-full">
      <Header />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 mt-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-[#1A1C22] rounded-[8px] p-4 w-full  mx-auto cursor-pointer  transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-center ">
              <div className="w-[40px] h-[40px] bg-[#282C35] rounded-[8px] flex items-center justify-center">
                <Image src={card.icon} alt="" width={20} height={20} />
              </div>
              <span className="leading-[17px] font-normal text-[12px] ml-7">
                <p className="text-[#A9A9A9]">{card.title}</p>
                <p className="text-[26px] leading-[40px] font-normal">
                  ${card.amount.toLocaleString()}
                </p>
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
