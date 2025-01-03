import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa6";

export type Surah = {
  nomor: number;
  nama: string;
  namaLatin: string;
  arti: string;
};

export default function AlQuran() {
  const [allSurah, setAllSurah] = useState<Surah[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isMax, setIsMax] = useState(false);
  const [pinnedSurah, setPinnedSurah] = useState<number[]>([]);
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
    const storedPinned = JSON.parse(localStorage.getItem("pinnedSurah") || "[]");
    setPinnedSurah(storedPinned.map((surah: Surah) => surah.nomor));
    fetchSurah();
  }, [fetchSurah]);

  const savePinnedSurahs = (surah: Surah) => {
    const storedPinned = JSON.parse(localStorage.getItem("pinnedSurah") || "[]");

    let updatedPinned;
    if (storedPinned.find((s: Surah) => s.nomor === surah.nomor)) {
      updatedPinned = storedPinned.filter((s: Surah) => s.nomor !== surah.nomor);
    } else {
      updatedPinned = [...storedPinned, surah];
      setAllSurah((prev) => [...prev, surah]);
    }

    setPinnedSurah(updatedPinned.map((s: Surah) => s.nomor));
    localStorage.setItem("pinnedSurah", JSON.stringify(updatedPinned));
  };

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
    <section className="pt-32 pb-10 text-white" id="list-al-qur'an">
      <div className="grid grid-cols-1 pl-14 mx-6 md:mx-20 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {allSurah.slice(0, page * itemsPerPage).map((surah) => (
          <div key={surah.nomor} className="p-4 bg-dark border border-gray-600 rounded-xl flex flex-col group">
            <div className="flex justify-between items-center">
              <div className="flex bg-green-600/20 rounded-full w-10 h-10 items-center justify-center text-center">
                <p className="text-lg md:text-xl text-green-400 font-bold">{surah.nomor}.</p>
              </div>
              <button className="text-red text-2xl md:text-3xl" onClick={() => savePinnedSurahs(surah)}>
                {pinnedSurah.includes(surah.nomor) ? <FaHeart /> : <FaRegHeart />}
              </button>
            </div>
            <div className="flex my-3 md:my-10 justify-end pr-5 text-end">
              <h1 className="text-3xl md:text-4xl font-bold">{surah.nama}</h1>
            </div>
            <Link href={`/surat/${surah.nomor}`} className="cursor-pointer">
              <h1 className="text-lg md:text-xl font-bold pb-1 italic group-hover:text-green-500">{surah.namaLatin}</h1>
            </Link>
            <p className="text-sm md:text-base">{surah.arti}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center md:text-xl pl-14  mt-16">
        {loading ? (
          <button disabled className="bg-sky-500 px-4 py-2 rounded-md">
            Loading...
          </button>
        ) : (
          <button onClick={loadMore} className="bg-green-600 text-white px-4 py-2 hover:bg-gray-200 hover:text-green-600 rounded-md">
            {isMax ? "Load Less" : "Load More"}
          </button>
        )}
      </div>
    </section>
  );
}
