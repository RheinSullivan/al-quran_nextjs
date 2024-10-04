import React, { useState } from "react";
import Surah from "@/pages/ui/DetailSurah/Surah";
import Navbar from "@/pages/ui/Navbar/Navbar";
import Header from "./Header/Header";

interface LayoutSurahProps {
  nomorSurah: number;
}

export default function LayoutSurah({ nomorSurah }: LayoutSurahProps) {
  const [language, setLanguage] = useState("en");

  return (
    <div className="flex h-screen bg-dark" id="daftar-surat">
      <Navbar language={language} />
      <main className="relative items-center justify-center">
        <Header onLanguageChange={setLanguage} />
        <Surah nomorSurah={nomorSurah} />
      </main>
    </div>
  );
}
