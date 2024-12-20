import HeaderSurah from "@/src/DetailSurah/HeaderSurah";
import Surah from "@/src/DetailSurah/Surah";
import { useRouter } from "next/router";

const SurahPage = () => {
  const router = useRouter();
  const { nomor } = router.query;

  if (!nomor) return null;

  return (
    <>
      <HeaderSurah />
      <Surah nomorSurah={parseInt(nomor as string, 10)} />
    </>
  );
};

export default SurahPage;
