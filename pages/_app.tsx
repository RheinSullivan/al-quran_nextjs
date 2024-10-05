import React, { useState } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/pages/layout/Navbar/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  const [language, setLanguage] = useState("en");
  const test = "test";

  return (
    <div>
      <Navbar language={language} />
      {test}
      <Component {...pageProps} language={language} />
    </div>
  );
}
