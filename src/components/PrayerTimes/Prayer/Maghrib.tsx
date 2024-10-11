import React from "react";
import { English } from "@/language/English";
import { Indonesian } from "@/language/Indonesian";

export default function Maghrib({ language }: { language: string }) {
  const prayerData = [
    {
      heading: language === "en" ? English.shalat.intentionRead[3].title : Indonesian.shalat.intentionRead[3].title,
      arabic: language === "en" ? English.shalat.intentionArab[14].subTitle : Indonesian.shalat.intentionArab[14].subTitle,
      latin: language === "en" ? English.shalat.intentionLatin[14].subTitle : Indonesian.shalat.intentionLatin[14].subTitle,
      meaning: language === "en" ? English.shalat.meaning[14].paragraph : Indonesian.shalat.meaning[14].paragraph,
      imamMakmum: true,
    },
  ];

  return (
    <main className="flex h-full w-full max-w-screen-xl justify-center items-center py-10">
      <div className="flex flex-col h-full w-full py-[60px] pl-3 xl:pl-24">
        <div className="grid grid-cols-1 gap-4 mt-5 space-y-3 rounded-lg md:h-[550px] overflow-y-scroll text-white">
          {prayerData.map((prayer, index) => (
            <div key={index} className="flex flex-col p-5 md:p-10 bg-dark rounded-xl">
              <div className="flex flex-col relative justify-evenly items-center w-full pb-16">
                <div className="flex relative justify-center items-center pb-11">
                  <p className="text-sm md:text-2xl font-semibold">{prayer.heading}</p>
                </div>
                <h2 className="text-2xl md:text-3xl text-center ml-auto leading-loose tracking-wide">{prayer.arabic}</h2>
              </div>
              <h3 className="md:text-2xl italic tracking-wide">{prayer.latin}</h3>
              <p className="text-xs text-green-500 pt-5 mb-10 md:text-base leading-relaxed">
                <p className="text-lg text-white -mb-3">{language === "en" ? "Meaning:" : "Artinya:"}</p>
                <br />
                {prayer.meaning}
              </p>
              <div className="flex relative w-full pt-5">
                {prayer.imamMakmum && (
                  <span className="flex flex-col">
                    <h2 className="md:text-xl text-start">
                      <p className="text-2xl md:text-3xl -mb-5">{language === "en" ? English.shalat.intentionArab[17].imamArab : Indonesian.shalat.intentionArab[17].imamArab}</p>
                      <br />
                      {language === "en" ? English.shalat.intentionLatin[17].imamLatin : Indonesian.shalat.intentionLatin[17].imamLatin}
                    </h2>
                    <h2 className="md:text-xl text-start my-10">
                      <p className="text-2xl md:text-3xl -mb-5">{language === "en" ? English.shalat.intentionArab[18].makmumArab : Indonesian.shalat.intentionArab[18].makmumArab}</p>
                      <br />
                      {language === "en" ? English.shalat.intentionLatin[18].makmumLatin : Indonesian.shalat.intentionLatin[18].makmumLatin}
                    </h2>
                    <p className="text-xs text-green-500 pt-10 mb-10 md:text-base leading-relaxed">
                      <p className="text-lg text-white -mb-3">{language === "en" ? "Meaning:" : "Artinya:"}</p>
                      <br />
                      Imam: {language === "en" ? English.shalat.meaning[17].meaningImam : Indonesian.shalat.meaning[17].meaningImam}
                      <br />
                      Makmum: {language === "en" ? English.shalat.meaning[18].meaningMakmum : Indonesian.shalat.meaning[18].meaningMakmum}
                    </p>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
