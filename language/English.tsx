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
        title: "Prayer Times & Guide",
        submenu: true,
        submenuItems: [
          {
            href: "shalat-times",
            title: "Prayer Times",
          },
          {
            href: "prayer-guide",
            title: "Prayer Guide",
          },
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
  shalat: {
    times: [{ title: "Fajr" }, { title: "Dhuhr" }, { title: "Asr" }, { title: "Maghrib" }, { title: "Isha" }],
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
      { paragraph: "I intend to perform the obligatory Fardh prayer of Subuh/Fajr with two rak'ahs while facing the Qiblah, for the sake of Allah Ta'ala." },
      { paragraph: "I intend to perform the obligatory Fardh prayer of Dhuhr with four rak'ahs while facing the Qiblah, at this moment, for the sake of Allah Ta'ala." },
      { paragraph: "I intend to perform the obligatory Fardh prayer of Asr with four rak'ahs while facing the Qiblah, at this moment, for the sake of Allah Ta'ala." },
      { paragraph: "I intend to perform the obligatory Fardh prayer of Maghrib with three rak'ahs while facing the Qiblah, at this moment, for the sake of Allah Ta'ala." },
      { paragraph: "I intend to perform the obligatory Fardh prayer of Isha with four rak'ahs while facing the Qiblah, at this moment, for the sake of Allah Ta'ala." },
    ],
    load: "Loading prayer times...",
    buttonText: "Find Mosque",
  },
};
