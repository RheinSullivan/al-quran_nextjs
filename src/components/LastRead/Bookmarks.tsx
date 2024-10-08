import { English } from "@/language/English";
import { Indonesian } from "@/language/Indonesian";
import React, { useEffect, useState } from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";

type Surah = {
  nomor: number;
  namaLatin: string;
  arti: string;
};

export default function Bookmarks({ language }: { language: string }) {
  const [pinnedSurahs, setPinnedSurahs] = useState<Surah[]>([]);

  useEffect(() => {
    const storedPinned = JSON.parse(localStorage.getItem("pinnedSurah") || "[]");
    setPinnedSurahs(storedPinned);
  }, []);

  const removePinnedSurah = (surahNomor: number) => {
    const updatedPinned = pinnedSurahs.filter((surah) => surah.nomor !== surahNomor);
    setPinnedSurahs(updatedPinned);
    localStorage.setItem("pinnedSurah", JSON.stringify(updatedPinned));
  };

  return (
    <section className="pt-32 pb-10 md:mx-10 pl-16 text-white" id="bookmark">
      <div className="flex-1 md:p-4">
        <div className="container justify-center items-center max-w-screen-lg md:max-w-screen-2xl h-full">
          <main className="w-full max-h-[1100px] bg-dark p-3 md:p-7 rounded-xl overflow-y-scroll space-y-4">
            {pinnedSurahs.map((surah) => (
              <div key={surah.nomor} className="flex flex-col gap-5 rounded-lg p-4 bg-dark2 border border-gray-600">
                <div className="flex flex-col md:flex-row justify-between md:items-center p-6">
                  <div className="flex flex-col gap-3">
                    <span className="text-2xl italic font-semibold">{surah.namaLatin}</span>
                    <span className="text-lg">{surah.arti}</span>
                  </div>
                  <div className="flex gap-3 mt-5 md:mt-0">
                    <button className="flex md:space-x-3 hover:text-green-500 items-center justify-center text-white text-sm md:text-lg">
                      <span>{language === "en" ? English.bookmarks.buttonText : Indonesian.bookmarks.buttonText}</span>
                    </button>
                    <button className="text-red p-3 hover:rounded-full hover:bg-red hover:text-dark" onClick={() => removePinnedSurah(surah.nomor)}>
                      <RiDeleteBack2Fill size={25} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {pinnedSurahs.length === 0 && (
              <div className="flex justify-center items-center w-full">
                <div className="flex flex-col gap-5 rounded-lg p-4 bg-dark2 border border-gray-600 text-center w-full py-20">
                  <span className="text-3xl font-semibold">{language === "en" ? English.bookmarks.title : Indonesian.bookmarks.title}</span>
                  <span className="text-lg">{language === "en" ? English.bookmarks.subTitle : Indonesian.bookmarks.subTitle}</span>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </section>
  );
}
