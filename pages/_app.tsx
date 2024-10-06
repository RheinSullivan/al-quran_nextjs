import React, { useState } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/pages/layout/Navbar/Navbar";
import { EB_Garamond } from "next/font/google";
import Header from "@/pages/layout/Header/Header";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-eb-garamond",
});

export default function App({ Component, pageProps }: AppProps) {
  const [language, setLanguage] = useState("en");

  return (
    <main className={` ${ebGaramond.variable}`}>
      <Navbar language={language} />
      <Header onLanguageChange={setLanguage} />
      <Component {...pageProps} language={language} />
    </main>
  );
}
