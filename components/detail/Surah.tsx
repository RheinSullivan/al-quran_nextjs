import React, { useState, useEffect, useCallback } from "react";

type Ayat = {
  nomorAyat: number;
  teksArab: string;
  teksLatin: string;
  teksIndonesia: string;
  audio: {
    [key: string]: string;
  };
};

type Surah = {
  nama: string;
  arti: string;
  tempatTurun: string;
  jumlahAyat: number;
  audioFull: {
    [key: string]: string;
  };
  ayat: Ayat[];
};

interface SurahProps {
  nomorSurah: number;
}

export default function Surah({ nomorSurah }: SurahProps) {
  const [surah, setSurah] = useState<Surah | null>(null);

  const fetchSurah = useCallback(async () => {
    try {
      const response = await fetch(
        `https://equran.id/api/v2/surat/${nomorSurah}`
      );
      const data = await response.json();
      setSurah(data.data);
    } catch (error) {
      console.error("Failed to retrieve data", error);
    }
  }, [nomorSurah]);

  useEffect(() => {
    fetchSurah();
  }, [fetchSurah]);

  if (!surah) return <div>Loading...</div>;

  return (
    <div className="mx-5 md:mx-24 pl-14 md:pl-10 ">
      <div className="pt-32 pb-10">
        <div className="bg-kabah2 p-7 bg-center text-white text-outline rounded-xl bg-no-repeat bg-cover">
          <h2 className="text-xl md:text-4xl">
            {surah.nama} <br />
            <span className="text-base">{surah.arti}</span>
          </h2>
          <h3 className=" text-sm md:text-base">
            {surah.tempatTurun} - {surah.jumlahAyat} Ayat
          </h3>
          <h5 className="text-2xl md:text-5xl text-white text-center mt-6 md:mt-8 pb-8">
            بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
          </h5>
          <audio
            src={surah.audioFull[Object.keys(surah.audioFull)[0]]}
            controls
            className="w-full mt-6 md:mt-9 bg-transparent rounded-md"
          ></audio>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-5 space-y-3   text-white">
        {surah.ayat.map((ayat) => (
          <div
            key={ayat.nomorAyat}
            className="flex flex-col p-10 bg-dark rounded-xl"
          >
            <div className="flex justify-evenly items-center w-full pb-16">
              <span className="flex relative justify-center items-center">
                <div className="flex bg-green-600/20 rounded-full w-10 h-10 items-center justify-center text-center">
                  <p className="text-lg md:text-xl text-green-400 font-bold">
                    {ayat.nomorAyat}.
                  </p>
                </div>
              </span>
              <h2 className="text-xl md:text-3xl text-end ml-auto leading-loose tracking-wide">
                {ayat.teksArab}
              </h2>
            </div>
            <h3 className="text-green-500 text-xl font-semibold italic tracking-wide to-slate-900">
              {ayat.teksLatin}
            </h3>
            <p className="text-sm mt-3 md:text-lg leading-relaxed">
              {ayat.teksIndonesia}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
