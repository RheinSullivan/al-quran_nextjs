import React, { useState } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "./layout/NavbarHeaderPage/Navbar";
import Header from "./layout/NavbarHeaderPage/Header";
import Home from "./layout/HeroLayout/Home";
import AlQuran from "./layout/Al-Qur'an/Al-Quran";

export default function App({ Component, pageProps }: AppProps) {
  const [language, setLanguage] = useState("en");

  return (
    <div className="flex h-screen bg-dark">
      <Navbar language={language} />
      <div className="w-full">
        <main className="items-center justify-center relative">
          <Header onLanguageChange={setLanguage} />
          <Component {...pageProps} />
          <Home />
          <AlQuran />
        </main>
      </div>
    </div>
  );
}
