// SVG untuk di menu navbar
import SVG2 from "@/public/assets/svg/8.svg";
import SVG3 from "@/public/assets/svg/2.svg";
import SVG4 from "@/public/assets/svg/4.svg";
import SVG5 from "@/public/assets/svg/3.svg";
import SVG6 from "@/public/assets/svg/5.svg";
import SVG7 from "@/public/assets/svg/6.svg";
import SVG8 from "@/public/assets/svg/9.svg";
import SVG9 from "@/public/assets/svg/10.svg";

export const English = {
  navbar: {
    logoText: "Al-Qur'an (Beta)",
    tagline: "Ar-Rizky",
    menu: [
      { images: SVG2, title: "Home", href: "home" },
      { images: SVG3, title: "Read Al-Qur'an", href: "list-al-qur'an" },
      { images: SVG4, title: "Last Read", href: "bookmarks", spacing: true },
      {
        images: SVG5,
        title: "Prayer Times",
        href: "shalat-times",
        submenu: true,
        submenuItems: [
          { href: "fajr", title: "Shalat Fajr" },
          { href: "dhuhr", title: "Shalat Dhuhr" },
          { href: "asr", title: "Shalat Asr" },
          { href: "maghrib", title: "Shalat Maghrib" },
          { href: "isha", title: "Shalat Isha" },
        ],
      },
      { images: SVG6, title: "Dhikr & Shalawat", href: "d&s" },
      { images: SVG7, title: "Infaq & Sadaqah", href: "i&s" },
      { images: SVG8, title: "Settings", spacing: true, href: "settings" },
      { images: SVG9, title: "Contact Us", href: "contact" },
    ],
  },
  header: {
    buttonText: "Free Palestine 🇵🇸",
  },
  index: {
    subTitle: "Have you read the Al-Qur'an today?",
    buttonTitle: "Read your Al-Qur'an",
  },
  navbarSurah: {
    title: "Mail List",
  },
  bookmarks: {
    title: "Still Empty",
    subTitle: "There is no verse you read, let's open your Qur'an, and read with me",
    buttonText: "Last Read",
  },
};
