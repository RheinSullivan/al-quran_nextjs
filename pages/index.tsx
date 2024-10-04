import { EB_Garamond } from "next/font/google";
import { English } from "@/language/English";
import { Indonesian } from "@/language/Indonesian";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-eb-garamond",
});

export default function IndexPage({ language }: { language: string }) {
  return (
    <section className={`flex flex-col bg-kabah bg-cover bg-center backdrop-blur h-full w-full items-center justify-center ${ebGaramond.variable}`} id="home">
      <div className="text-center pl-14 md:pl-0 py-72 md:py-64 text-white">
        <div className="px-4 py-3 text-outline rounded-lg">
          <h1 className="text-2xl md:text-5xl">ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّٰهِ وَبَرَكَاتُهُ</h1>
          <p className="md:text-xl font-semibold italic">Akhi/Ukhti</p>
          <h3 className="md:text-xl pt-5">{language === "en" ? English.index.subTitle : Indonesian.index.subTitle}</h3>
        </div>
        <div className="flex flex-col text-sm md:text-xl">
          <div className="flex justify-center items-center space-x-3">
            <a href="#" className="flex md:hidden bg-gray-200 text-black mt-10 px-4 py-2 rounded-md hover:bg-green-600 hover:text-white">
              {language === "en" ? English.header.buttonText : Indonesian.header.buttonText}
            </a>
            <button className="hover:bg-gray-200 py-2 px-4 hover:text-green-600 mt-10 rounded-md bg-green-600 text-white">{language === "en" ? English.index.buttonTitle : Indonesian.index.buttonTitle}</button>
          </div>
        </div>
      </div>
    </section>
  );
}
