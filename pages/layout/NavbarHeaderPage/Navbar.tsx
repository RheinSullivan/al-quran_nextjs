import React, { useState } from "react";
import Image from "next/image";
// React Icons
import { RiArrowLeftSLine } from "react-icons/ri";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
// SVG
import SVG1 from "@/public/assets/svg/1.svg";
import SVG2 from "@/public/assets/svg/8.svg";
import SVG3 from "@/public/assets/svg/2.svg";
import SVG4 from "@/public/assets/svg/4.svg";
import SVG5 from "@/public/assets/svg/3.svg";
import SVG6 from "@/public/assets/svg/5.svg";
import SVG7 from "@/public/assets/svg/6.svg";
import SVG8 from "@/public/assets/svg/9.svg";
import SVG9 from "@/public/assets/svg/10.svg";

export default function Navbar() {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const menuNav = [
    { images: SVG2, title: "Beranda" },
    { images: SVG3, title: "Baca Al-Qur'an" },
    { images: SVG4, title: "Terakhir Baca", spacing: true },
    { images: SVG5, title: "Jadwal Shalat", submenu: true, submenuItems: [{ title: "Shalat Shubuh" }, { title: "Shalat Dzuhur" }, { title: "Shalat Ashar" }, { title: "Shalat Magrib" }, { title: "Shalat Isya" }] },
    { images: SVG6, title: "Dzikir & Shalawat" },
    { images: SVG7, title: "Infaq & Sedekah" },
    { images: SVG8, title: "Pengaturan", spacing: true },
    { images: SVG9, title: "Hubungi Kami" },
  ];

  return (
    <nav className={`${open ? "w-72  backdrop-blur bg-dark2/80" : "w-20 bg-dark2"} z-10 fixed h-screen p-5 pt-8 duration-300`}>
      <RiArrowLeftSLine onClick={() => setOpen(!open)} className={`${!open && "rotate-180"} text-white bg-dark2 text-3xl rounded-full absolute -right-3 top-7 border border-dark2 cursor-pointer`} />
      <div className="inline-flex items-center">
        {/* Image Logo Navbar */}
        <Image src={SVG1} alt="Logo Cover Al-Qur'an" className={`${open ? "justify-start ml-0" : "justify-center -ml-[11px]"} w-16 duration-300 text-4xl rounded cursor-pointer float-left`} />
        <h1 className={`${!open ? "scale-0" : ""} text-white origin-left font-medium text-xl duration-300 ml-2`}>
          Al-Qur&apos;an <br />
          <span className="text-xs">Online by : 7TogkID</span>
        </h1>
      </div>
      <div className={`${!open ? "hidden" : "flex"} items-center mt-5 px-4 py-2 rounded-md bg-dark22`}>
        <BiSearchAlt2 className="text-white text-lg float-left cursor-pointer mr-2 block" />
        <input type={"search"} placeholder="Cari" className="text-base bg-transparent w-full text-white focus:outline-none" />
      </div>
      <div>
        <ul className="pt-3">
          {menuNav.map((menu, index) => (
            <>
              <li key={index} className={`${menu.spacing ? "mt-9" : "mt-2"} ${menu.images ? "p-[5px]" : "p-3"} text-white text-sm flex items-center gap-x-5 cursor-pointer p-3 hover:bg-dark22 rounded-md`}>
                {/* Image Submenu */}
                <span className="block float-left">
                  <Image src={menu.images} alt="Icons" className={`${!open ? "w-8" : "w-10"}`} />
                </span>
                <span className={`${!open && "hidden"} duration-300 text-base font-medium flex-1`}>{menu.title}</span>
                {menu.submenu && open && <BsChevronDown onClick={() => setSubmenuOpen(!submenuOpen)} className={`${submenuOpen && "rotate-180"}`} />}
              </li>
              {menu.submenu && submenuOpen && open && (
                <ul>
                  {menu.submenuItems?.map((submenu, index) => (
                    <li key={index} className="text-white text-sm flex items-center gap-x-5 cursor-pointer p-3  px-5 hover:bg-dark22 rounded-md">
                      {submenu.title}
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
      </div>
    </nav>
  );
}
