import React, { useState } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "./layout/NavbarHeaderPage/Navbar";
import Header from "./layout/NavbarHeaderPage/Header";

export default function App({ Component, pageProps }: AppProps) {
  const [language, setLanguage] = useState("en");

  return (
    <div className="flex h-screen bg-dark">
      <Navbar language={language} />
      <div className="flex flex-col justify-center mx-auto lg:mx-96 items-center flex-1 overflow-auto px-4 sm:px-6 lg:px-8">
        <Header onLanguageChange={setLanguage} />
        <main className="w-full flex justify-center items-center">
          <Component {...pageProps} />
        </main>
      </div>
    </div>
  );
}
