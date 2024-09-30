import React from "react";
import Image from "next/image";
import Logo from "@/public/assets/svg/1.svg";

export default function Header() {
  return (
    <header className="justify-center items-center">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <button className="flex flex-row justify-center items-center text-start">
            <Image src={Logo} alt="Logo Al-Qur'an Online" className="w-[70px] md:w-[80px] mr-2" />
            <span>
              Al-Qur&apos;an <br />
              <span className="text-sm">Online</span>
            </span>
          </button>
          <a href="#">
            <button className="bg-gray-200 text-black px-4 py-2 rounded-md hover:bg-green-800 hover:text-gray-200">Free Palestine 🇵🇸</button>
          </a>
        </div>
      </div>
    </header>
  );
}
