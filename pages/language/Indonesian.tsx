// pages/language/Indonesia.tsx
import SVG2 from "@/public/assets/svg/8.svg";
import SVG3 from "@/public/assets/svg/2.svg";
import SVG4 from "@/public/assets/svg/4.svg";
import SVG5 from "@/public/assets/svg/3.svg";
import SVG6 from "@/public/assets/svg/5.svg";
import SVG7 from "@/public/assets/svg/6.svg";
import SVG8 from "@/public/assets/svg/9.svg";
import SVG9 from "@/public/assets/svg/10.svg";

export const Indonesian = {
  navbar: {
    logoText: "Al-Qur'an",
    tagline: "Ar-Rizky",
    menu: [
      { images: SVG2, title: "Beranda" },
      { images: SVG3, title: "Baca Al-Qur'an" },
      { images: SVG4, title: "Terakhir Baca", spacing: true },
      {
        images: SVG5,
        title: "Jadwal Shalat",
        submenu: true,
        submenuItems: [{ title: "Shalat Shubuh" }, { title: "Shalat Dzuhur" }, { title: "Shalat Ashar" }, { title: "Shalat Maghrib" }, { title: "Shalat Isya" }],
      },
      { images: SVG6, title: "Dzikir & Shalawat" },
      { images: SVG7, title: "Infaq & Sedekah" },
      { images: SVG8, title: "Pengaturan", spacing: true },
      { images: SVG9, title: "Hubungi Kami" },
    ],
  },
  header: {
    buttonText: "Bebaskan Palestina 🇵🇸",
  },
  index: {
    subTitle: "Sudahkah hari ini kamu membaca Al-Qur'an?",
    buttonTitle: "Baca Al-Qur'an mu",
  },
  navbarSurah: {
    title: "Daftar Surat",
  },
};
