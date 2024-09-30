import React from "react"; // Tambahkan ini
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "./layout/NavbarHeaderPage/Navbar";
import Header from "./layout/NavbarHeaderPage/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-row container bg-dark">
      <Navbar />
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
    </div>
  );
}
