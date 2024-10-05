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
    logoText: "Al-Qur'an (Beta)",
    tagline: "Ar-Rizky",
    menu: [
      { images: SVG2, title: "Beranda", href: "home" },
      { images: SVG3, title: "Baca Al-Qur'an", href: "list-al-qur'an" },
      { images: SVG4, title: "Terakhir Baca", href: "bookmarks", spacing: true },
      {
        images: SVG5,
        title: "Jadwal Shalat",
        href: "shalat-times",
        submenu: true,
        submenuItems: [
          {
            href: "fjr",
            title: "Shalat Shubuh",
          },
          {
            href: "dhuhr",
            title: "Shalat Dzuhur",
          },
          {
            href: "asr",
            title: "Shalat Ashar",
          },
          {
            href: "maghrib",
            title: "Shalat Maghrib",
          },
          {
            href: "isha",
            title: "Shalat Isya",
          },
        ],
      },
      { images: SVG6, title: "Dzikir & Shalawat", href: "d&s" },
      { images: SVG7, title: "Infaq & Sedekah", href: "i&s" },
      { images: SVG8, title: "Pengaturan", spacing: true, href: "settings" },
      { images: SVG9, title: "Hubungi Kami", href: "contact" },
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
  bookmarks: {
    title: "Masih Kosong",
    subTitle: "Tidak ada ayat yang kamu baca, mari buka Al-Qur'an mu, dan baca bersamaku",
    buttonText: "Terakhir dibaca",
  },
};
