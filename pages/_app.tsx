import React, { useState } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/pages/layout/Navbar/Navbar";
import Header from "@/pages/layout/Header/Header";

export default function App({ Component, pageProps }: AppProps) {
  const [language, setLanguage] = useState("en");

  return (
    <main>
      <Navbar language={language} />
      <Header onLanguageChange={setLanguage} />
      <Component {...pageProps} language={language} />
    </main>
  );
}
