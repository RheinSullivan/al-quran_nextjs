import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Logo from "@/public/assets/svg/1.svg";
import { BsChevronDown } from "react-icons/bs";
import { English } from "@/language/English";
import { Indonesian } from "@/language/Indonesian";

export default function Header({ onLanguageChange }: { onLanguageChange: (language: string) => void }) {
  const [language, setLanguage] = useState("en");
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    onLanguageChange(selectedLanguage);
    setSubmenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setSubmenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuRef]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full py-3 md:px-6 z-10 flex justify-between items-center transition-all duration-300 ${scrolled ? "bg-dark/50 backdrop-blur" : "bg-transparent"}`}>
      <div className="flex items-center pl-20 md:pl-28">
        <Image src={Logo} alt="Logo Al-Qur'an" className="w-[45px] md:w-[70px] mr-3" />
        <div className="text-white">
          <h1 className="text-sm md:text-xl font-semibold">Al-Qur&apos;an (Beta version)</h1>
          <span className="text-xs md:text-sm">Az-Zahra</span>
        </div>
      </div>
      <div className="flex items-center space-x-3 pr-2 md:pr-14">
        <a href="#" className="hidden md:flex bg-gray-200 text-black px-4 py-2 rounded-md hover:bg-green-600 hover:text-white">
          {language === "en" ? English.header.buttonText : Indonesian.header.buttonText}
        </a>
        {/* Button Change Language */}
        <div className="relative" ref={menuRef}>
          <button onClick={() => setSubmenuOpen(!submenuOpen)} className="bg-transparent text-white px-4 py-2 cursor-pointer flex items-center text-xs md:text-sm">
            {language === "en" ? "English" : "Indonesia"}
            <BsChevronDown className={`ml-2 transform duration-300 ${submenuOpen ? "rotate-180" : ""}`} />
          </button>
          {submenuOpen && (
            <ul className="absolute text-xs md:text-sm right-0 mt-2 w-40 bg-transparent bg-gray-200 rounded-md text-black overflow-hidden z-10">
              <li
                className="px-4 py-2 bg-gray-200 hover:bg-dark2 hover:text-white cursor-pointer"
                onClick={() =>
                  handleLanguageChange({
                    target: { value: "en" },
                  } as React.ChangeEvent<HTMLSelectElement>)
                }
              >
                English
              </li>
              <li
                className="px-4 py-2 bg-gray-200 hover:bg-dark2 hover:text-white cursor-pointer"
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
