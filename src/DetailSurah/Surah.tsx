import React, { useState, useEffect, useCallback, useRef } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { IoPauseSharp, IoPlay } from "react-icons/io5";

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

type SurahProps = {
  nomorSurah: number;
};

export default function Surah({ nomorSurah }: SurahProps) {
  const [surah, setSurah] = useState<Surah | null>(null);
  const [currentAyat, setCurrentAyat] = useState<number | null>(null);
  const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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

  const handlePlayPause = (index: number) => {
    const audioElement = audioRefs.current[index];
    if (!audioElement) return;

    if (currentAyat === index) {
      if (audioElement.paused) {
        audioElement.play();
      } else {
        audioElement.pause();
      }
    } else {
      audioRefs.current.forEach((audio, i) => {
        if (audio && i !== index) {
          audio.pause();
        }
      });
      audioElement.play();
      setCurrentAyat(index);
    }
  };

  const handleEnded = (index: number) => {
    if (index < surah!.ayat.length - 1) {
      handlePlayPause(index + 1);
      cardRefs.current[index + 1]?.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      setCurrentAyat(null);
    }
  };

  if (!surah) return <div className="text-green-500">Loading...</div>;

  return (
    <div className="mx-5 md:mx-24 pl-14 md:pl-10 pb-20">
      <div className="pt-32 pb-10">
        <div className="bg-kabah2 p-7 bg-center text-white text-outline rounded-xl bg-no-repeat bg-cover">
          <h2 className="text-xl md:text-4xl">
            {surah.nama} <br />
            <span className="text-base">{surah.arti}</span>
          </h2>
          <h3 className="text-sm md:text-base">
            {surah.tempatTurun} - {surah.jumlahAyat} Ayat
          </h3>
          <h5 className="text-2xl md:text-5xl text-white text-center mt-6 md:mt-8 pb-8">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</h5>
          <audio src={surah.audioFull[Object.keys(surah.audioFull)[0]]} controls className="w-full mt-6 md:mt-9 bg-transparent rounded-md"></audio>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-5 space-y-3 rounded-lg md:h-[500px] overflow-y-scroll text-white">
        {surah.ayat.map((ayat, index) => (
          <div
            key={ayat.nomorAyat}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className="flex flex-col p-5 md:p-10 bg-dark rounded-xl"
          >
            <div className="flex justify-evenly items-center w-full pb-16">
              <span className="flex relative justify-center items-center">
                <div className="flex bg-green-600/20 rounded-full h-10 w-10 md:h-12 md:w-12 items-center justify-center text-center">
                  <p className="text-sm md:text-2xl text-green-400 font-bold">{ayat.nomorAyat}.</p>
                </div>
              </span>
              <h2 className="text-2xl md:text-3xl text-end ml-auto leading-loose tracking-wide">{ayat.teksArab}</h2>
            </div>
            <h3 className="md:text-xl italic tracking-wide">{ayat.teksLatin}</h3>
            <p className="text-xs text-green-500 mt-3 mb-10 md:text-base leading-relaxed">{ayat.teksIndonesia}</p>
            <div className="flex space-x-5">
              <button className="text-red text-3xl md:text-4xl">
                <FaRegHeart />
              </button>
              <button className="flex justify-center items-center cursor-pointer bg-dark2 rounded-full p-2 text-white text-lg md:text-2xl" onClick={() => handlePlayPause(index)}>
                <audio
                  ref={(el) => {
                    audioRefs.current[index] = el;
                  }}
                  src={ayat.audio[Object.keys(ayat.audio)[0]]}
                  onEnded={() => handleEnded(index)}
                  className="pointer-events-none hidden"
                ></audio>
                {currentAyat === index && !audioRefs.current[index]?.paused ? <IoPauseSharp className="text-sky-500" /> : <IoPlay className="text-gray-400" />}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
