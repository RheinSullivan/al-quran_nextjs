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
      { images: SVG2, title: "Home" },
      { images: SVG3, title: "Read Al-Qur'an" },
      { images: SVG4, title: "Last Read", spacing: true },
      {
        images: SVG5,
        title: "Prayer Times",
        submenu: true,
        submenuItems: [{ title: "Shalat Fajr" }, { title: "Shalat Dhuhr" }, { title: "Shalat Asr" }, { title: "Shalat Maghrib" }, { title: "Shalat Isha" }],
      },
      { images: SVG6, title: "Dhikr & Shalawat" },
      { images: SVG7, title: "Infaq & Sadaqah" },
      { images: SVG8, title: "Settings", spacing: true },
      { images: SVG9, title: "Contact Us" },
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
};
