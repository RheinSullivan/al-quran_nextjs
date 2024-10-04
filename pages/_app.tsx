import React, { useState } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/pages/layout/Navbar/Navbar";
import Header from "@/pages/layout/Header/Header";
import AlQuran from "@/pages/layout/Al-Qur'an/Al-Quran";

export default function App({ Component, pageProps }: AppProps) {
  const [language, setLanguage] = useState("en");

  return (
    <div className="flex h-screen bg-dark2">
      <Navbar language={language} />
      <div className="w-full">
        <main className="items-center justify-center relative bg-dark2">
          <Header onLanguageChange={setLanguage} />
          <Component {...pageProps} language={language} />
          <AlQuran />
        </main>
      </div>
    </div>
  );
}
