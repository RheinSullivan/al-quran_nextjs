import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/public/assets/svg/1.svg";
import { BsChevronDown } from "react-icons/bs";
import { English } from "@/pages/language/English";
import { Indonesian } from "@/pages/language/Indonesian";

export default function Header({
  onLanguageChange,
}: {
  onLanguageChange: (language: string) => void;
}) {
  const [language, setLanguage] = useState("en");
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    onLanguageChange(selectedLanguage);
  };

  return (
    <header className="absolute top-0 left-0 w-full bg-transparent backdrop-blur py-3 px-6 z-10 flex justify-between items-center shadow">
      <div className="flex items-center pl-20">
        <Image
          src={Logo}
          alt="Logo Al-Qur'an Online"
          className="w-[50px] md:w-[70px] mr-3"
        />
        <div className="text-white">
          <h1 className="text-lg md:text-xl font-semibold">Al-Qur&apos;an</h1>
          <span className="text-sm md:text-base">Online</span>
        </div>
      </div>
      <div className="hidden md:flex items-center space-x-3 pr-14">
        <a
          href="#"
          className="bg-gray-200 text-black px-4 py-2 rounded-md hover:bg-green-800 hover:text-white"
        >
          {language === "en"
            ? English.header.buttonText
            : Indonesian.header.buttonText}
        </a>
        <div className="relative">
          <button
            onClick={() => setSubmenuOpen(!submenuOpen)}
            className="bg-transparent text-white px-4 py-2 cursor-pointer flex items-center"
          >
            {language === "en" ? "English" : "Indonesia"}
            <BsChevronDown
              className={`ml-2 transform ${submenuOpen ? "rotate-180" : ""}`}
            />
          </button>
          {submenuOpen && (
            <ul className="absolute right-0 mt-2 w-40 bg-transparent bg-gray-300 rounded-md text-black overflow-hidden z-10">
              <li
                className="px-4 py-2 hover:bg-dark2 hover:text-white cursor-pointer"
                onClick={() =>
                  handleLanguageChange({
                    target: { value: "en" },
                  } as React.ChangeEvent<HTMLSelectElement>)
                }
              >
                English
              </li>
              <li
                className="px-4 py-2 hover:bg-dark2 hover:text-white cursor-pointer"
                onClick={() =>
                  handleLanguageChange({
                    target: { value: "ind" },
                  } as React.ChangeEvent<HTMLSelectElement>)
                }
              >
                Indonesia
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}
