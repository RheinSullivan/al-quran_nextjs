import { useState } from "react";
import Header from "@/components/detail/Header";
import Surah from "@/components/detail/Surah";
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
