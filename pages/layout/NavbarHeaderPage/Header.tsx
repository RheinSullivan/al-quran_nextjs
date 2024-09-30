import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/public/assets/svg/1.svg";
import { BsChevronDown } from "react-icons/bs";

export default function Header({ onLanguageChange }: { onLanguageChange: (language: string) => void }) {
  const [language, setLanguage] = useState("en");
  const [submenuOpen, setSubmenuOpen] = useState(false); // State untuk kontrol panah

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    onLanguageChange(selectedLanguage);
  };

  return (
    <header className="fixed top-5 justify-center items-center md:w-[80%]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <button className="flex flex-row justify-center items-center text-start">
            <Image src={Logo} alt="Logo Al-Qur'an Online" className="w-[50px] md:w-[70px] mr-2" />
            <span className="text-sm md:text-lg">
              Al-Qur&apos;an <br />
              <span className="text-xs md:text-sm">Online</span>
            </span>
          </button>
          <div className="flex flex-row justify-center text-xs  md:text-lg items-center">
            {/* Change Language */}
            <div className="relative ml-0 md:ml-3">
              <select value={language} onChange={handleLanguageChange} onClick={() => setSubmenuOpen(!submenuOpen)} className="relative bg-transparent text-white appearance-none z-10 md:px-6 p-5">
                <option value="en" className="text-black mt-2">
                  English
                </option>
                <option value="ind" className="text-black">
                  Indonesia
                </option>
              </select>
              {/* Chevron Icon */}
              <BsChevronDown className={`absolute right-2 top-1/2 transform -translate-y-1/2 duration-300 transition-transform ${submenuOpen ? "rotate-180" : ""}`} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
