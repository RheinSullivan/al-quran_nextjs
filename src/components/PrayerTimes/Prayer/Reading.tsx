import React from "react";
import { English } from "@/language/English";
import { Indonesian } from "@/language/Indonesian";

export default function Reading({ language }: { language: string }) {
  const prayerData = [
    {
      heading: language === "en" ? English.shalat.headingText[0].title : Indonesian.shalat.headingText[0].title,
      arabic: language === "en" ? English.shalat.intentionArab[0].takbiratulIhram : Indonesian.shalat.intentionArab[0].takbiratulIhram,
      latin: language === "en" ? English.shalat.intentionLatin[0].takbiratulIhram : Indonesian.shalat.intentionLatin[0].takbiratulIhram,
      meaning: language === "en" ? English.shalat.meaning[0].takbiratulIhram : Indonesian.shalat.meaning[0].takbiratulIhram,
    },
    {
      heading: language === "en" ? English.shalat.headingText[1].title : Indonesian.shalat.headingText[1].title,
      arabic: language === "en" ? English.shalat.intentionArab[1].iftitah : Indonesian.shalat.intentionArab[1].iftitah,
      latin: language === "en" ? English.shalat.intentionLatin[1].iftitah : Indonesian.shalat.intentionLatin[1].iftitah,
      meaning: language === "en" ? English.shalat.meaning[1].meaningIftitah : Indonesian.shalat.meaning[1].meaningIftitah,
    },
    {
      heading: language === "en" ? English.shalat.headingText[2].title : Indonesian.shalat.headingText[2].title,
      arabic: language === "en" ? English.shalat.intentionArab[2].alFatihah : Indonesian.shalat.intentionArab[2].alFatihah,
      latin: language === "en" ? English.shalat.intentionLatin[2].alFatihah : Indonesian.shalat.intentionLatin[2].alFatihah,
      meaning: language === "en" ? English.shalat.meaning[2].meaningAlFatihah : Indonesian.shalat.meaning[2].meaningAlFatihah,
    },
    {
      heading: language === "en" ? English.shalat.headingText[3].title : Indonesian.shalat.headingText[3].title,
      arabic: language === "en" ? English.shalat.intentionArab[3].ayaKursi : Indonesian.shalat.intentionArab[3].ayaKursi,
      latin: language === "en" ? English.shalat.intentionLatin[3].ayatKursi : Indonesian.shalat.intentionLatin[3].ayatKursi,
      meaning: language === "en" ? English.shalat.meaning[3].meaningAyatKursi : Indonesian.shalat.meaning[3].meaningAyatKursi,
      optional: true,
    },
    {
      heading: language === "en" ? English.shalat.headingText[4].title : Indonesian.shalat.headingText[4].title,
      arabic: language === "en" ? English.shalat.intentionArab[4].rukuk : Indonesian.shalat.intentionArab[4].rukuk,
      latin: language === "en" ? English.shalat.intentionLatin[4].rukuk : Indonesian.shalat.intentionLatin[4].rukuk,
      meaning: language === "en" ? English.shalat.meaning[4].meaningRukuk : Indonesian.shalat.meaning[4].meaningRukuk,
    },
    {
      heading: language === "en" ? English.shalat.headingText[5].title : Indonesian.shalat.headingText[5].title,
      arabic: language === "en" ? English.shalat.intentionArab[5].iTidal : Indonesian.shalat.intentionArab[5].iTidal,
      latin: language === "en" ? English.shalat.intentionLatin[5].iTidal : Indonesian.shalat.intentionLatin[5].iTidal,
      meaning: language === "en" ? English.shalat.meaning[5].meaningItidal : Indonesian.shalat.meaning[5].meaningItidal,
    },
    {
      heading: language === "en" ? English.shalat.headingText[6].title : Indonesian.shalat.headingText[6].title,
      arabic: language === "en" ? English.shalat.intentionArab[6].sujud : Indonesian.shalat.intentionArab[6].sujud,
      latin: language === "en" ? English.shalat.intentionLatin[6].sujud : Indonesian.shalat.intentionLatin[6].sujud,
      meaning: language === "en" ? English.shalat.meaning[6].meaningSujud : Indonesian.shalat.meaning[6].meaningSujud,
    },
    {
      heading: language === "en" ? English.shalat.headingText[7].title : Indonesian.shalat.headingText[7].title,
      arabic: language === "en" ? English.shalat.intentionArab[7].iftirasy : Indonesian.shalat.intentionArab[7].iftirasy,
      latin: language === "en" ? English.shalat.intentionLatin[7].iftirasy : Indonesian.shalat.intentionLatin[7].iftirasy,
      meaning: language === "en" ? English.shalat.meaning[7].meaningIftirasy : Indonesian.shalat.meaning[7].meaningIftirasy,
    },
    {
      heading: language === "en" ? English.shalat.headingText[8].title : Indonesian.shalat.headingText[8].title,
      arabic: language === "en" ? English.shalat.intentionArab[8].initialTashahhud : Indonesian.shalat.intentionArab[8].initialTashahhud,
      latin: language === "en" ? English.shalat.intentionLatin[8].initialTashahhud : Indonesian.shalat.intentionLatin[8].initialTashahhud,
      meaning: language === "en" ? English.shalat.meaning[8].meaningInitialTashahhud : Indonesian.shalat.meaning[8].meaningInitialTashahhud,
    },
    {
      heading: language === "en" ? English.shalat.headingText[9].title : Indonesian.shalat.headingText[9].title,
      arabic: language === "en" ? English.shalat.intentionArab[9].finalTashahhud : Indonesian.shalat.intentionArab[9].finalTashahhud,
      latin: language === "en" ? English.shalat.intentionLatin[9].finalTashahhud : Indonesian.shalat.intentionLatin[9].finalTashahhud,
      meaning: language === "en" ? English.shalat.meaning[9].meaningFinalTashahhud : Indonesian.shalat.meaning[9].meaningFinalTashahhud,
    },
    {
      heading: language === "en" ? English.shalat.headingText[10].title : Indonesian.shalat.headingText[10].title,
      arabic: language === "en" ? English.shalat.intentionArab[10].regards : Indonesian.shalat.intentionArab[10].regards,
      latin: language === "en" ? English.shalat.intentionLatin[10].regards : Indonesian.shalat.intentionLatin[10].regards,
      meaning: language === "en" ? English.shalat.meaning[10].meaningRegards : Indonesian.shalat.meaning[10].meaningRegards,
    },
  ];

  return (
    <main className="py-10 h-full w-full flex max-w-screen-xl justify-center items-center">
      <div className="flex flex-col h-full w-full py-[60px] pl-3 xl:pl-24">
        <div className="text-center pb-20 space-y-5 text-white">
          <h2 className="md:text-4xl font-semibold">{language === "en" ? English.shalat.guide.title : Indonesian.shalat.guide.title}</h2>
          <p className="md:text-xl">{language === "en" ? English.shalat.subTitle : Indonesian.shalat.subTitle}</p>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-5 space-y-3 rounded-lg md:h-[550px] overflow-y-scroll text-white">
          {prayerData.map((prayer, index) => (
            <div key={index} className="flex flex-col p-5 md:p-10 bg-dark rounded-xl border border-gray-600">
              <div className="flex flex-col relative justify-evenly items-center w-full pb-16">
                <div className="flex relative justify-center items-center text-center pb-11">
                  <p className="text-sm md:text-2xl font-semibold">
                    {prayer.heading}
                    {prayer.optional && <p className="text-xs md:text-base">{language === "en" ? "(Optional)" : "(Opsional)"}</p>}
                  </p>
                </div>
                <h2 className="text-2xl md:text-3xl text-center ml-auto leading-loose">{prayer.arabic}</h2>
              </div>
              <h3 className="md:text-2xl italic">{prayer.latin}</h3>
              <p className="text-xs text-green-500 pt-5 mb-10 md:text-base leading-relaxed">
                <span className="text-lg text-white">{language === "en" ? "Meaning:" : "Artinya:"}</span>
                <br />
                {prayer.meaning}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
