import { English } from "@/language/English";
import { Indonesian } from "@/language/Indonesian";
import React, { useCallback, useEffect, useState } from "react";
import { FaBookQuran } from "react-icons/fa6";
import { RiDeleteBack2Fill } from "react-icons/ri";

type Surah = {
  namaLatin: string;
  ayat: Ayat[];
};
type Ayat = {
  nomorAyat: number;
};

interface BookmarksProps {
  nomorSurah: number;
  language: string;
}

export default function Bookmarks({ nomorSurah, language }: BookmarksProps) {
  const [surah, setSurah] = useState<Surah | null>(null);

  const fetchSurah = useCallback(async () => {
    try {
      const response = await fetch(`https://equran.id/api/v2/surat/${nomorSurah}`);
      const data = await response.json();
      setSurah(data.data);
    } catch (error) {
      console.error("Failed to retrieve data", error);
    }
  }, [nomorSurah]);

  useEffect(() => {
    fetchSurah();
  }, [fetchSurah]);

  if (!surah) return <div className="text-green-500">Loading...</div>;

  return (
    <section className="py-32 md:mx-10 pl-12 md:pl-20" id="bookmark">
      <div className="flex-1 p-4">
        <div className="container mx-auto md:max-w-screen-2xl h-full">
          <main className="w-full max-h-[1100px] bg-dark p-7 rounded-xl overflow-y-scroll space-y-4">
            {surah.ayat.slice(0, 10).map((ayat) => (
              <div key={ayat.nomorAyat} className="flex flex-col gap-5 rounded-lg p-4 bg-dark2 border border-gray-600">
                {/* Pada bagian ini akan muncul ketika tidak ada data yang di simpan */}
                {/* <div className="flex flex-col justify-center items-center h-full gap-2">
                  <span className="text-3xl font-bold">{language === "en" ? English.bookmarks.title : Indonesian.bookmarks.title}</span>
                  <span className="text-lg font-bold text-gray-500">{language === "en" ? English.bookmarks.subTitle : Indonesian.bookmarks.subTitle}</span>
                </div> */}
                {/* Pada bagian ini akan muncul ketika tidak ada data yang di simpan */}
                {/* Bagian ini untuk menyimpan surat-surat yang di pin sebagai surat yang terakhir dibaca */}
                <div className="flex flex-col md:flex-row justify-between md:items-center p-6">
                  <div className="flex flex-col gap-3">
                    <span className="text-2xl italic font-semibold">{surah.namaLatin}</span>
                    <span className="text-lg">Ayat - {ayat.nomorAyat}</span>
                  </div>
                  <div className="flex gap-3 mt-5 md:mt-0">
                    <button className="flex space-x-3 hover:text-green-500 items-center hover:bg-dark text-dark bg-green-500 p-2 px-4 rounded-lg">
                      <FaBookQuran size={20} />
                      <span className="text-lg pt-[2px]">{language === "en" ? English.bookmarks.buttonText : Indonesian.bookmarks.buttonText}</span>
                    </button>
                    <button className="text-red p-3 hover:rounded-full hover:bg-red hover:text-dark">
                      <RiDeleteBack2Fill size={25} />
                    </button>
                  </div>
                  {/* Bagian ini untuk menyimpan surat-surat yang di pin sebagai surat yang terakhir dibaca */}
                </div>
              </div>
            ))}
          </main>
        </div>
      </div>
    </section>
  );
}
