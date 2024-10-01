import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { RiArrowLeftSLine } from "react-icons/ri";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
// Change Language
import { English } from "@/pages/language/English";
import { Indonesian } from "@/pages/language/Indonesian";
// ImageSVG Components
import SVG1 from "@/public/assets/svg/1.svg";

export default function Navbar({ language }: { language: string }) {
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  const menuNav =
    language === "en" ? English.navbar.menu : Indonesian.navbar.menu;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]);

  return (
    <nav
      ref={navRef}
      className={`${
        open ? "w-72" : "w-16 md:w-20"
      } z-20 bg-dark2 fixed md:relative h-screen p-5 pt-8 duration-300`}
    >
      <RiArrowLeftSLine
        onClick={() => setOpen(!open)}
        className={`${
          !open && "rotate-180"
        } bg-dark2 text-white text-3xl rounded-full absolute -right-3 top-7 border border-dark2 cursor-pointer`}
      />
      <div className="inline-flex items-center">
        {/* Image & Text Logo Navbar */}
        <Image
          src={SVG1}
          alt="Logo Cover Al-Qur'an"
          className={`${
            open ? "justify-start ml-0" : "justify-center -ml-3 md:-ml-[11px]"
          } w-12 md:w-16 duration-300 text-4xl rounded cursor-pointer float-left`}
        />
        <h1
          className={`${
            !open ? "scale-0" : ""
          } text-white origin-left font-medium md:text-xl duration-300 ml-2`}
        >
          {language === "en"
            ? English.navbar.logoText
            : Indonesian.navbar.logoText}{" "}
          <br />
          <span className="text-[10px] md:text-xs">
            {language === "en"
              ? English.navbar.tagline
              : Indonesian.navbar.tagline}
          </span>
        </h1>
      </div>
      <div
        className={`${
          !open ? "hidden" : "flex"
        } items-center mt-5 px-4 py-2 rounded-md bg-dark`}
      >
        <BiSearchAlt2 className="text-white text-lg float-left cursor-pointer mr-2 block" />
        <input
          type={"search"}
          placeholder="Search"
          className="text-xs md:text-base bg-transparent w-full text-white focus:outline-none"
        />
      </div>
      {/* Submenu Navbar */}
      <div className="pt-3 text-xs md:text-base">
        <ul>
          {menuNav.map((menu, index) => (
            <React.Fragment key={index}>
              <li
                className={`${
                  menu.spacing ? "mt-9" : "mt-3"
                } md:p-[5px] text-white flex items-center gap-x-5 cursor-pointer hover:bg-dark2 rounded-md`}
              >
                <span className="block float-left">
                  <Image
                    src={menu.images}
                    alt="Icons"
                    className={`${!open ? "w-8" : "w-10"}`}
                  />
                </span>
                <span
                  className={`${
                    !open && "hidden"
                  } duration-300  font-medium flex-1`}
                >
                  {menu.title}
                </span>
                {menu.submenu && open && (
                  <BsChevronDown
                    onClick={() => setSubmenuOpen(!submenuOpen)}
                    className={`${submenuOpen && "rotate-180"}`}
                  />
                )}
              </li>
              {menu.submenu && submenuOpen && open && (
                <ul>
                  {menu.submenuItems?.map((submenu, subIndex) => (
                    <li
                      key={subIndex}
                      className="text-white flex items-center gap-x-5 cursor-pointer p-3 px-5 hover:bg-dark2 rounded-md"
                    >
                      {submenu.title}
                    </li>
                  ))}
                </ul>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </nav>
  );
}
