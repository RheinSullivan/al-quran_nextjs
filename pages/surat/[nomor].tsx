import { useRouter } from "next/router";
import Surah from "../../src/DetailSurah/Surah";

const SurahPage = () => {
  const router = useRouter();
  const { nomor } = router.query;

  if (!nomor) return null;

  return <Surah nomorSurah={parseInt(nomor as string, 10)} />;
};

export default SurahPage;
