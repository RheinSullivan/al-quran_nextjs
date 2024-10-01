import { EB_Garamond } from "next/font/google";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-eb-garamond",
});

export default function IndexPage() {
  return (
    <section className={`flex flex-col bg-kabah bg-cover bg-center backdrop-blur h-full w-full items-center justify-center ${ebGaramond.variable}`}>
      <div className="text-center py-48 text-white">
        <h1 className="text-2xl md:text-5xl">ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّٰهِ وَبَرَكَاتُهُ</h1>
        <p className="text-2xl">Akhi/Ukhti</p>
        <div className="py-5 text-xl">
          <h3>Sudahkah hari ini kamu membaca Al-Qur&apos;an?</h3>
          <button className="bg-white py-2 px-4 text-dark2 mt-10 rounded-md hover:bg-dark2 hover:text-white">Baca Al-Qur&apos;an mu</button>
        </div>
      </div>
    </section>
  );
}
