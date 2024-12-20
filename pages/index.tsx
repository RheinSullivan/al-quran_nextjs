import { English } from "@/language/English";
import { Indonesian } from "@/language/Indonesian";
import AlQuran from "@/src/components/Al-Qur'an/Al-Quran";
import Bookmarks from "@/src/components/LastRead/Bookmarks";
import Footer from "@/pages/layout/Footer.tsx/Footer";
import Shalat from "@/src/components/PrayerTimes/Shalat";
import Navbar from "./layout/Navbar/Navbar";
import Header from "./layout/Header/Header";
import { useState } from "react";

export default function IndexPage() {
  const [language, setLanguage] = useState("en");

  return (
    <section id="home">
      <main>
        <Header onLanguageChange={setLanguage} />
      </main>
      <main>
        <Navbar language={language} />
      </main>
      <main className="flex flex-col bg-kabah bg-cover bg-center backdrop-blur h-screen w-screen items-center justify-center">
        <div className="text-center pl-14 md:pl-0 py-60 md:py-64 text-white">
          <div className="text-outline">
            <h1 className="text-2xl md:text-5xl">ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّٰهِ وَبَرَكَاتُهُ</h1>
            <p className="md:text-2xl font-bold italic text-outline">Akhi/Ukhti</p>
            <h3 className="md:text-xl pt-5">{language === "en" ? English.index.subTitle : Indonesian.index.subTitle}</h3>
          </div>
          <div className="flex flex-col justify-center items-center text-sm md:text-xl">
            <a href="https://donasi.baznas.go.id/donasi/bantumuslimdipalestina" className="flex md:hidden bg-gray-200 text-black mt-10 px-4 py-2 rounded-md hover:bg-green-600 hover:text-white">
              {language === "en" ? English.header.buttonText : Indonesian.header.buttonText}
            </a>
            <button className="hover:bg-gray-200 py-2 px-4 hover:text-green-600 mt-5 rounded-md bg-green-600 text-white">{language === "en" ? English.index.buttonTitle : Indonesian.index.buttonTitle}</button>
          </div>
        </div>
      </main>
      <main id="list-al-qur'an">
        <AlQuran />
      </main>
      <main id="bookmarks">
        <Bookmarks language={language} />
      </main>
      <main id="shalat-times">
        <Shalat language={language} />
      </main>
      <main>
        <Footer />
      </main>
    </section>
  );
}
