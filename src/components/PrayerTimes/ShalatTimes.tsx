"use client";
import React, { useEffect, useState } from "react";
import { English } from "@/language/English";
import { Indonesian } from "@/language/Indonesian";
import Reading from "./Prayer/Reading";
import Fajr from "./Prayer/Fajr";
import Dhuhr from "./Prayer/Dhuhr";
import Asr from "./Prayer/Asr";
import Maghrib from "./Prayer/Maghrib";
import Isha from "./Prayer/Isha";

type ShalatTimesProps = {
  language: string;
};

export default function ShalatTimes({ language }: ShalatTimesProps) {
  const [slideTab, setSlideTab] = useState<number | null>(null);

  useEffect(() => {
    setSlideTab(1);
  }, []);

  const prayerMenu = [
    {
      nameTimes: language === "en" ? English.shalat.times[0].title : Indonesian.shalat.times[0].title,
      href: "#read",
      className: slideTab === 1 ? "bg-green-500 text-black" : "bg-dark2 text-white",
    },
    {
      nameTimes: language === "en" ? English.shalat.times[1].title : Indonesian.shalat.times[1].title,
      href: "#fajr",
      className: slideTab === 2 ? "bg-green-500 text-black" : "bg-dark2 text-white",
    },
    {
      nameTimes: language === "en" ? English.shalat.times[2].title : Indonesian.shalat.times[2].title,
      href: "#dhuhr",
      className: slideTab === 3 ? "bg-green-500 text-black" : "bg-dark2 text-white",
    },
    {
      nameTimes: language === "en" ? English.shalat.times[3].title : Indonesian.shalat.times[3].title,
      href: "#asr",
      className: slideTab === 4 ? "bg-green-500 text-black" : "bg-dark2 text-white",
    },
    {
      nameTimes: language === "en" ? English.shalat.times[4].title : Indonesian.shalat.times[4].title,
      href: "#maghrib",
      className: slideTab === 5 ? "bg-green-500 text-black" : "bg-dark2 text-white",
    },
    {
      nameTimes: language === "en" ? English.shalat.times[5].title : Indonesian.shalat.times[5].title,
      href: "#isha",
      className: slideTab === 6 ? "bg-green-500 text-black" : "bg-dark2 text-white",
    },
  ];

  if (slideTab === null) {
    return null;
  }

  return (
    <section className="h-full w-full min-h-screen justify-center items-center p-5 lg:p-10 text-white" id="prayer-guide">
      <div className="pt-24 pl-12 md:pl-20 pb-16">
        <main className="flex flex-wrap justify-center items-center pl-4 md:pl-0">
          <div className="w-full md:w-[70%] overflow-x-scroll py-4 px-3 bg-dark rounded-lg">
            <ul className="flex mb-0 list-none md:flex-row" role="tablist">
              {prayerMenu.map((menu, index) => (
                <li key={index} className="-mb-px mr-3 last:mr-0 flex-auto text-center">
                  <a
                    href={menu.href}
                    className={`text-xs md:text-lg font-bold px-5 py-3 rounded block leading-normal ${menu.className}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setSlideTab(index + 1);
                    }}
                    data-toggle="tab"
                    role="tablist"
                  >
                    {menu.nameTimes}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </main>
        <main className={slideTab === 1 ? "block" : "hidden"} id="read">
          <Reading language={language} />
        </main>
        <main className={slideTab === 2 ? "block" : "hidden"} id="fajr">
          <Fajr language={language} />
        </main>
        <main className={slideTab === 3 ? "block" : "hidden"} id="dhuhr">
          <Dhuhr />
        </main>
        <main className={slideTab === 4 ? "block" : "hidden"} id="asr">
          <Asr />
        </main>
        <main className={slideTab === 5 ? "block" : "hidden"} id="maghrib">
          <Maghrib />
        </main>
        <main className={slideTab === 6 ? "block" : "hidden"} id="isha">
          <Isha />
        </main>
      </div>
    </section>
  );
}
