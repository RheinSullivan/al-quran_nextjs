import React, { useState } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/pages/layout/Navbar/Navbar";
<<<<<<< HEAD
import Header from "@/pages/layout/Header/Header";
=======
>>>>>>> fe061de58a5c72263b240e64b9eeb4977be3c06c

export default function App({ Component, pageProps }: AppProps) {
  const [language, setLanguage] = useState("en");

  return (
<<<<<<< HEAD
    <main>
      <Navbar language={language} />
      <Header onLanguageChange={setLanguage} />
      <Component {...pageProps} language={language} />
    </main>
=======
    <div>
      <Navbar language={language} />
      <Component {...pageProps} language={language} />
    </div>
>>>>>>> fe061de58a5c72263b240e64b9eeb4977be3c06c
  );
}
