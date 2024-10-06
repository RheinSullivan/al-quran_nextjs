<<<<<<< HEAD
import Surah from "@/src/DetailSurah/Surah";
=======
import { useState } from "react";
import Header from "@/components/detail/Header";
import Surah from "@/components/detail/Surah";
>>>>>>> fe061de58a5c72263b240e64b9eeb4977be3c06c
import { useRouter } from "next/router";

const SurahPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [language, setLanguage] = useState("en");
  const router = useRouter();
  const { nomor } = router.query;

  if (!nomor) return null;

  return (
    <>
      <main className="pb-10">
        <Header onLanguageChange={setLanguage} />
        <Surah nomorSurah={parseInt(nomor as string, 10)} />
      </main>
    </>
  );
};

export default SurahPage;
