import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "@/public/assets/svg/1.svg";
import Link from "next/link";
import { HiMiniArrowLeftEndOnRectangle } from "react-icons/hi2";

export default function HeaderSurah() {
  const [scrolled, setScrolled] = useState(false);

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
    <header className={`fixed top-0 left-0 w-full py-5 md:py-3 md:px-6 z-10 flex justify-between items-center transition-all duration-300 ${scrolled ? "bg-dark/50 backdrop-blur border-b border-gray-600" : "bg-transparent"}`}>
      <div className="flex items-center pl-4 md:pl-16">
        <Image src={Logo} alt="Logo Al-Qur'an" className="w-[45px] md:w-[70px] mr-3" />
        <div className="text-white">
          <h1 className="text-sm md:text-xl font-semibold">Al-Qur&apos;an (Beta version)</h1>
          <span className="text-xs md:text-sm">Az-Zahra</span>
        </div>
      </div>
      <Link href={"/"} className="flex flex-col text-white hover:text-green-500 space-x-3 pr-4 md:pr-[75px]">
        <p className="flex text-sm md:text-lg text-center justify-center items-center hover:border-b">
          Go Back
          <span className="text-xl md:text-3xl pl-2">
          <HiMiniArrowLeftEndOnRectangle />
          </span>
        </p>
      </Link>
    </header>
  );
}
