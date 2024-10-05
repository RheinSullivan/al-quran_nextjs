import React, { useState } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/pages/layout/Navbar/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  const [language, setLanguage] = useState("en");

  return (
    <div>
      <Navbar language={language} />
      <Component {...pageProps} language={language} />
    </div>
  );
}
