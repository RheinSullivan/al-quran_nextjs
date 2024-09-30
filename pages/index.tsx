import { EB_Garamond } from "next/font/google";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-eb-garamond",
});

export default function IndexPage() {
  return (
    <div className={`flex h-full w-full items-center justify-center text-center border ${ebGaramond.variable}`}>
      <h1 className="text-white text-2xl md:text-4xl">
        ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّٰهِ وَبَرَكَاتُهُ <br />
        Ya
        <br />
        Akhi/Ukhti
      </h1>
    </div>
  );
}
