import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Logo from "@/public/assets/svg/1.svg";
import { BsBoxArrowLeft, BsChevronDown } from "react-icons/bs";
import { English } from "@/pages/language/English";
import { Indonesian } from "@/pages/language/Indonesian";

type Surah = {
  nomor: number;
  nama: string;
  arti: string;
};

export default function Header({ onLanguageChange }: { onLanguageChange: (languages: string) => void }) {
  const [language, setLanguage] = useState("en");
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [allSurah, setAllSurah] = useState<Surah[]>([]);

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    onLanguageChange(selectedLanguage);
    setSubmenuOpen(false);
  };

  const fetchSurah = useCallback(async () => {
    try {
      const response = await fetch(`https://equran.id/api/v2/surat`);
      const data = await response.json();
      setAllSurah(data.data);
    } catch (error) {
      console.error("Failed to retrieve data", error);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setSubmenuOpen(false);
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    fetchSurah();

    document.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuRef, fetchSurah]);

  return (
    <header className={`${scrolled ? "bg-dark/50 backdrop-blur" : "bg-transparent"}fixed top-0 left-0 w-full py-3 z-10 flex justify-between items-center transition-all duration-300`}>
      <BsBoxArrowLeft size={24} />
      {allSurah.map((surah) => (
        <div key={surah.nomor} className="flex items-center">
          <Image src={Logo} alt="Logo Al-Qur'an" className="w-[45px] md:w-[70px]" />
          <div className="text-white">
            <h1 className="text-sm md:text-xl font-semibold">{surah.nama}</h1>
            <span className="text-xs md:text-sm">{surah.arti}</span>
          </div>
        </div>
      ))}
      <div className="flex items-center space-x-3">
        <a href="#" className="hidden md:flex bg-gray-200 text-black px-4 py-2 rounded-md hover:bg-green-600 hover:text-white">
          {language === "en" ? English.header.buttonText : Indonesian.header.buttonText}
        </a>
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
