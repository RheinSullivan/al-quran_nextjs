import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Logo from "@/public/assets/svg/1.svg";
import { RiMenu4Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { English } from "@/language/English";
import { Indonesian } from "@/language/Indonesian";
import Link from "next/link";

type Surah = {
  nomor: number;
  namaLatin: string;
  arti: string;
  jumlahAyat: number;
  tempatTurun: string;
};

export default function Navbar({ language }: { language: string }) {
  const [visible, setVisible] = useState(false);
  const [allSurah, setAllSurah] = useState<Surah[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isMax, setIsMax] = useState(false);
  const itemsPerPage = 9;

  const fetchSurah = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://equran.id/api/v2/surat`);
      const data = await response.json();
      setAllSurah(data.data);
    } catch (error) {
      console.error("Failed to retrieve data", error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchSurah();
  }, [fetchSurah]);

  const loadMore = () => {
    if (isMax) {
      setPage(1);
      setIsMax(false);
    } else {
      const nextPage = page + 1;
      setPage(nextPage);

      if (nextPage * itemsPerPage >= 114) {
        setIsMax(true);
      }
    }
  };

  return (
    <nav className="w-[90%] flex items-center justify-center">
      <button onClick={() => setVisible(false)}>
        <RiMenu4Fill size={28} />
      </button>
      <div className={`${visible ? "" : "translate-x-[120%]"}' h-full w-2/3 flex flex-col fixed z-50 right-0 p-2 ps-6 transition-all duration-300`}>
        <div className="flex items-center justify-end">
          <button onClick={() => setVisible(false)}>
            <IoMdClose size={28} />
          </button>
        </div>
        <div className="flex items-center justify-center">
          <Image src={Logo} alt="Logo Al-Qur'an" priority={true} className="w-2/3 mb-6" />
          <span>{language === "en" ? English.navbarSurah.title : Indonesian.navbarSurah.title}</span>
        </div>
        {allSurah.slice(0, page * itemsPerPage).map((surah) => (
          <div key={surah.nomor} className="flex flex-col gap-2 pt-2 px-3 overflow-auto">
            <Link href="#" className="flex items-center justify-between py-2 px-3 bg-dark rounded-lg transition-all duration-300 ease-out">
              <div className="flex">
                <h2 className="text-white text-lg font-semibold">{surah.namaLatin}</h2>
                <p className="text-xs text-gray-500">
                  {surah.tempatTurun} - {surah.jumlahAyat}
                </p>
              </div>
              <span className="flex relative bg-green-600/20 rounded-full w-10 h-10 items-center justify-center text-center">
                <p className="text-lg md:text-xl text-green-400 font-bold">{surah.nomor}.</p>
              </span>
              <div className="flex justify-center md:text-xl mt-10">
                {loading ? (
                  <button className="bg-sky-500 px-4 py-2 rounded-md" disabled>
                    Loading...
                  </button>
                ) : (
                  <button onClick={loadMore} className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-gray-200 hover:text-green-600">
                    {isMax ? "Load Less" : "Load More"}
                  </button>
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
}
