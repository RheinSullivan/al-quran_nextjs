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
        title: "Jadwal & Panduan Shalat",
        submenu: true,
        submenuItems: [
          {
            href: "shalat-times",
            title: "Jadwal Shalat",
          },
          {
            href: "prayer-guide",
            title: "Panduan Shalat",
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
  shalat: {
    times: [{ title: "Shubuh" }, { title: "Dzuhur" }, { title: "Ashar" }, { title: "Maghrib" }, { title: "Magrib" }],
    intentionArab: [
      { subTitle: "أُصَلِّى فَرْضَ الصُّبْح رَكَعتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لله تَعَالَى" },
      { subTitle: "اُصَلِّيْ فَرْضَ الظُّهْرِ أَرْبَعَ رَكَعاَتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لله تَعَالَى" },
      { subTitle: "أُصَلِّى فَرْضَ العَصْرِأَرْبَعَ رَكَعاَتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لله تَعَالَى" },
      { subTitle: "أُصَلِّى فَرْضَ المَغْرِبِ ثَلاَثَ رَكَعاَتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لله تَعَالَ" },
      { subTitle: "أُصَلِّى فَرْضَ العِشَاء ِأَرْبَعَ رَكَعاَتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لله تَعَالَى" },
    ],
    intentionLatin: [
      { subTitle: "Ushallii fardash-Shubhi rak’ataini mustaqbilal qiblati adaa’an lillaahi ta’aalaa." },
      { subTitle: "Ushalli fardhazh zhuhri arba'a raka'aatin mustaqbilal qiblati adaa an lillaahi ta'aala." },
      { subTitle: "Ushalli fardhal 'ashri arba'a raka'aatin mustaqbilal qiblati adaa an lillahi ta'aala." },
      { subTitle: "Ushalli fardhal maghribi tsalaatsa raka'aatin mustaqbilal qiblati adaa an lillaahi ta'aala." },
      { subTitle: "Ushalli fardhal 'isyaa i arba'a raka'aatin mustaqbilal qiblati adaa an lillaahi ta'aala." },
    ],
    meaning: [
      { paragraph: "Aku berniat mengerjakan sholat fardhu subuh sebanyak dua raka’at dengan menghadap kiblat, karena Allah Ta’ala." },
      { paragraph: "Aku berniat melakukan salat fardu zuhur empat rakaat sambil menghadap kiblat, saat ini, karena Allah ta'ala." },
      { paragraph: "Aku berniat melakukan salat fardu ashar empat rakaat, sambil menghadap kiblat, saat ini, karena Allah ta'ala." },
      { paragraph: "Aku berniat melakukan salat fardu maghrib tiga rakaat, sambil menghadap kiblat, saat ini, karena Allah ta'ala." },
      { paragraph: "Aku berniat melakukan salat fardu isya empat rakaat, sambil menghadap kiblat, saat ini, karena Allah ta'ala." },
    ],
    load: "Memuat waktu shalat ...",
    buttonText: "Cari Masjid",
  },
};
