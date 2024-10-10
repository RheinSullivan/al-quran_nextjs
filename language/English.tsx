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
    guide: { title: "Prayer Guidance" },
    intentionRead: [
      { title: "Recitation of the intention of the Fajr prayer" },
      { title: "Recitation of the intention of the Dhuhr prayer" },
      { title: "Recitation of the intention of the Asr prayer" },
      { title: "Recitation of the intention of the Maghrib prayer" },
      { title: "Recitation of the intention of the Isha prayer" },
    ],
    subTitle: "If you improve your prayer, then Allah will improve the world and all that is yours. Let's do beristiqomah and return to the truth with me, friend",
    times: [{ title: "Readings" }, { title: "Fajr" }, { title: "Dhuhr" }, { title: "Asr" }, { title: "Maghrib" }, { title: "Isha" }],
    headingText: [
      { title: "Takbiratul Ihram" },
      { title: "Iftitah:" },
      { title: "Surah Al-Fatihah:" },
      { title: "Recitation of surahs from the Qur'an:" },
      { title: "Rukuk:" },
      { title: "I'Tidal:" },
      { title: "Sujud:" },
      { title: "Sitting between two Prostrations (Iftirasy):" },
      { title: "Initial Tashahhud:" },
      { title: "Final Tashahhud:" },
      { title: "Salam:" },
    ],
    intentionArab: [
      { takbiratulIhram: "للهُ اَكْبَرُ" },
      {
        iftitah:
          "للهُ اَكْبَرُ كَبِرًا وَالْحَمْدُ لِلهِ كَشِيْرًا وَسُبْحَانَ اللهِ بُكْرَةً وَاَصِيْلًا . اِنِّى وَجَّهْتُ وَجْهِيَ لِلَّذِيْ فَطَرَالسَّمَاوَاتِ وَالْااَرْضَ حَنِيْفًا مُسْلِمًا وَمَا اَنَا مِنَ الْمُشْرِكِيْنَ . اِنَّ صَلَاتِيْ وَنُسُكِيْ وَمَحْيَايَ وَمَمَاتِيْ لِلهِ رَبِّ الْعَا لَمِيْنَ . لاَ شَرِيْكَ لَهُ وَبِذَ لِكَ اُمِرْتُ وَاَنَ مِنَ الْمُسْلِمِيْنَ",
      },
      {
        alFatihah:
          "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ -  اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَۙ - الرَّحْمٰنِ الرَّحِيْمِۙ - مٰلِكِ يَوْمِ الدِّيْنِۗ - اِيَّاكَ نَعْبُدُ وَاِيَّاكَ نَسْتَعِيْنُۗ - اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيْمَۙ - صِرَاطَ الَّذِيْنَ اَنْعَمْتَ عَلَيْهِمْ ەۙ غَيْرِ الْمَغْضُوْبِ عَلَيْهِمْ وَلَا الضَّاۤلِّيْنَ",
      },
      {
        ayaKursi:
          "اَللّٰهُ لَآ اِلٰهَ اِلَّا هُوَۚ اَلْحَيُّ الْقَيُّوْمُ ەۚ لَا تَأْخُذُهٗ سِنَةٌ وَّلَا نَوْمٌۗ لَهٗ مَا فِى السَّمٰوٰتِ وَمَا فِى الْاَرْضِۗ مَنْ ذَا الَّذِيْ يَشْفَعُ عِنْدَهٗٓ اِلَّا بِاِذْنِهٖۗ يَعْلَمُ مَا بَيْنَ اَيْدِيْهِمْ وَمَا خَلْفَهُمْۚ وَلَا يُحِيْطُوْنَ بِشَيْءٍ مِّنْ عِلْمِهٖٓ اِلَّا بِمَا شَاۤءَۚ وَسِعَ كُرْسِيُّهُ السَّمٰوٰتِ وَالْاَرْضَۚ وَلَا يَـُٔوْدُهٗ حِفْظُهُمَاۚ وَهُوَ الْعَلِيُّ الْعَظِيْمُ",
      },
      { rukuk: "(3x) سُبْحَانَ رَبِّىَ الْعَظِيْمِ وَبِحَمْدِهِ" },
      { iTidal: "سَمِعَ اللهُ لِمَنْ حَمِدَهُ رَبَّنَا لَكَ الْحَمْدُ مِلْءَ السَّمَوَاتِ وَمِلْءَ الْأَرْضِ وَمِلْءَ مَا شِئْتَ مِنْ شَيْءٍ بَعْدُ" },
      { sujud: "(3x) سُبْحَانَ رَبِّيَ الْأَعْلَى وَبِحَمْدِهِ" },
      {
        iftirasy: "ربِّ اغْفِرْ لِي وَارْحَمْنِي وَجْبُرْنٖي وَارْفَعْنِي وَارْزُقْنِي وَاهْدِنِي وَعَافِنِي وَاعْفُ عَنِّى",
      },
      {
        initialTashahhud:
          "التَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ لِلَّهِ السَّلاَمُ عَلَيْكَ أَيُّهَا النَّبِىُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِاَ . للَّهُمَّ صَلِّ عَلىَ مُحَمَّدٍ",
      },
      {
        finalTashahhud:
          "التَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ لِلَّهِ السَّلاَمُ عَلَيْكَ أَيُّهَا النَّبِىُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ . اللّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ المُتَطَهِّرِينَ",
      },
      { regards: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ" },
      { subTitle: "أُصَلِّى فَرْضَ الصُّبْح رَكَعتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لله تَعَالَى" },
      { subTitle: "اُصَلِّيْ فَرْضَ الظُّهْرِ أَرْبَعَ رَكَعاَتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لله تَعَالَى" },
      { subTitle: "أُصَلِّى فَرْضَ العَصْرِأَرْبَعَ رَكَعاَتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لله تَعَالَى" },
      { subTitle: "أُصَلِّى فَرْضَ المَغْرِبِ ثَلاَثَ رَكَعاَتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لله تَعَالَ" },
      { subTitle: "أُصَلِّى فَرْضَ العِشَاء ِأَرْبَعَ رَكَعاَتٍ مُسْتَقْبِلَ الْقِبْلَةِ أَدَاءً لله تَعَالَى" },
      {
        qunut:
          "اللَّهُمَّ اهْدِنِي فِيْمَنْ هَدَيْتَ، وَعَافِنِي فِيْمَنْ عَافَيْتَ، وَتَوَلَّنِي فِيْمَنُ تَوَلَّيْتَ، وَبَارِكْ لِي فِيْمَا أَعْطَيْتَ، وَقِنِي بِرَحْمَتِكَ شَرَّمَا قَضَيْتَ، فَإِنَّكَ تَقْضِي وَلَا يُقْضَى عَلَيْكَ، وَإِنَّهُ لَا يَذِلُّ مَنْ وَالَيْتَ، وَلَا يَعِزُّ مَنْ عَادَيْتَ ، تَبَارَكْتَ رَبَّنَا وَتَعَالَيْتَ ، فَلَكَ الْحَمْدُ عَلَى مَا قَضَيْتَ، أَسْتَغْفِرُكَ وَأَتُوْبُ إِلَيْكَ، وَصَلَّى اللَّهُ عَلَى سَيِّدِنَا مُحَمَّدٍ النَّبِيِّ الْأُمّي وَعَلَى آلِهِ وَصَحْبِهِ وَ سَلَّم",
      },
      { imamArab: "إِمَامً" },
      { makmumArab: "مَأْمُوْمً" },
    ],
    intentionLatin: [
      { takbiratulIhram: "Allaahu akbar" },
      {
        iftitah:
          "Allaahu akbar kabiiraw walhamdu lillaahi katsiira wa subhaanallaahi bukrataw wa'ashiila. Wajjahtu wajhiya lilladzii fataras samawaati wal ardha, haniifam muslimaw wamaa anaa minal musyrikiin. Inna shalaatii wa nusukii wa mahyaaya wa mamaatii lillaahi rabbil aalamiin. laa syariikalahu wa bidzaalika umirtu wa anaa minal muslimiin",
      },
      {
        alFatihah:
          "Bismillaahir rahmaanir rahiim. Alhamdu lillaahi rabbil 'aalamiin. Arrahmaanir rahiim. Maaliki yaumid diin. Iyyaaka na'budu wa iyyaaka nasta'iin. Ihdinash shiraathal mustaqiim. Shiraathal ladziina anʼamta 'alaihim ghairil maghdhuubi 'alaihim waladh dhaalliin.",
      },
      {
        ayatKursi:
          "Allāhu lā ilāha illā huw(a), al-ḥayyul-qayyūm(u), lā ta'khużuhū sinatuw wa lā naum(un), lahū mā fis-samāwāti wa mā fil-arḍ(i), man żal-lażī yasyfa'u 'indahū illā bi'iżnih(ī), ya'lamu mā baina aidīhim wa mā khalfahum, wa lā yuḥīṭūna bisyai'im min 'ilmihī illā bimā syā'(a), wasi'a kursiyyuhus-samāwāti wal-arḍ(a), wa lā ya'ūduhū ḥifẓuhumā, wa huwal-'aliyyul-'aẓīm(u).",
      },
      { rukuk: "Subhaana rabbiyal 'adziimi wa bihamdihi (3x)" },
      { iTidal: "Sami'allahu liman hamidah. Rabbanaaa lakal hamdu mil-ussamaawaati wa mil-ul-ardhi wa mil-u maa syik-ta min syai-im ba'du." },
      { sujud: "Subhaana rabbiyal a'laa wa bihamdihi (3x)" },
      {
        iftirasy: "Rabbighfirlii warhamnii wajburnii warfa'nii warzuqnii wahdini wa 'aafinii wa'fu annii.",
      },
      {
        initialTashahhud:
          "At-tahiyyaatul-mubaarakaatush-shalawaatuth-thayyibaatu lillaah. Assalaamu 'alaika ayyuhan-nabiyyu wa rahmatullaahi wa barakaatuh. Assalaamu 'alainaa wa'alaa 'ibaadillaahish-shaalihiin. Asyhadu allaa ilaaha illallah wa asyhadu anna Muhammadar rosuulullah. Allahumma sholli 'alaa Muhammad.",
      },
      {
        finalTashahhud:
          "Attahiyyatul mubaarakaatush sholawatuth thayyibaatus lillaahi asalaamu 'alaika ayyuhan nabiyyu wa rahmatullahi wabarakaatuhu, Assalaamu 'alainaa wa 'alaa 'ibaadillaahish shaalihiin, asyhadu an laa ilaaha illa Allah wa asyhadu anna muhammadan 'abduhu wa rasuulullah. Allaahumma shalli 'alaa muhammadin wa 'alaa aali muhammad, kamaa shallaita 'alaa ibraahiima wa aali ibrahiim, wa baarik 'alaa muhammadin wa 'alaa aali muhammad, kamaa baarakta 'alaa ibraahiima wa aali ibraahiim, innaka hamiidum majiid",
      },
      { regards: "Assalaamu 'alaikum warahma-tullaahi wabarakaatuh" },
      { subTitle: "Ushallii fardash-Shubhi rak’ataini mustaqbilal qiblati adaa’an lillaahi ta’aalaa." },
      { subTitle: "Ushalli fardhazh zhuhri arba'a raka'aatin mustaqbilal qiblati adaa an lillaahi ta'aala." },
      { subTitle: "Ushalli fardhal 'ashri arba'a raka'aatin mustaqbilal qiblati adaa an lillahi ta'aala." },
      { subTitle: "Ushalli fardhal maghribi tsalaatsa raka'aatin mustaqbilal qiblati adaa an lillaahi ta'aala." },
      { subTitle: "Ushalli fardhal 'isyaa i arba'a raka'aatin mustaqbilal qiblati adaa an lillaahi ta'aala." },
      {
        qunut:
          "Allaahummahdinii fiiman hadaita, wa ‘aafinii fiman ‘aafaita, wa tawallanii fii man tawallaita, wa baarik lii fiimaa a’thaita, wa qinii bi rahmatika syarra maa qadhaita fa innaka taqdhii wa laa yuqdhaa ‘alaika, wa innahu laa yadzillu man waalaita, wa laa ya’izzu man ‘adaita, tabaarakta rabbanaa wa ta’aalaita, fa lakal hamdu ‘alaa maa qadhaita, astahgfiruka wa atuubu ilaika, wa shallallaahu ‘alaa sayyidinaa Muhammadin-nabiyyil ummiyyi wa ‘alaa alihi wa shahbihi wasallama",
      },
      { imamLatin: "Imaman" },
      { makmumLatin: "Makmuman" },
    ],
    meaning: [
      { takbiratulIhram: "Allah Maha Besar" },
      {
        meaningIftitah:
          "Allah is the greatest, the most perfect of His greatness. Praise be to Allah, the greatest praise. And Glory be to Allah throughout the morning and evening. I turn my face to the One who created the heavens and the earth with full sincerity and submission, and I am not of those who disbelieve. Verily my prayer, my worship, my life and my death are all for Allah, the Lord of the universe. There is no partner for Him and thus I am commanded and I am of the Muslims.",
      },
      {
        meaningAlFatihah:
          "In the name of Allah, the Most Compassionate, the Most Merciful. Praise be to Allah, the Lord of the Worlds, the Compassionate, the Merciful, the Master of the Day of Judgment. Only to You do we worship and only to You do we seek help. Guide us to the straight path, (that is) the path of those whom You have favored, not (the path) of those who are outraged nor (the path) of those who go astray.",
      },
      {
        meaningAyatKursi:
          "Allah, there is no god but He, the Ever Living, is constantly taking care of (His creatures). He is not stricken by drowsiness nor by sleep. To Him belongs what is in the heavens and what is in the earth. No one can intercede with Him without His permission. He knows what is before them and what is behind them. They know nothing of His knowledge, except what He wills. His Kursi (knowledge and power) encompasses the heavens and the earth, and He does not find it hard to maintain them. He is the Most High, the Most Majestic.",
      },
      { meaningRukuk: "Glory be to my Lord, the Most Great and the Most Praiseworthy. (HR Muslim, Nasa'i, & Ahmad, from Ibn Abbas)." },
      { meaningItidal: "I heard the one who praised Him. O Allah our Lord, to You belongs all praise, the whole of the heavens and the earth, and all that You will thereafter." },
      { meaningSujud: "Glory be to my Lord Most High, and praise be to Him. (HR Abu Dawud, Ibn Majah, Nasa'i, Ahmad & Tirmidhi, from Hudhayfah)" },
      { meaningIftirasy: "O my Lord, forgive me my sins, have mercy on me, make up for my shortcomings, raise my status, grant me fortune, guide me, grant me health and grant me forgiveness." },
      {
        meaningInitialTashahhud:
          "All honor, blessings, happiness and goodness be to Allah. Peace and blessings be upon you, O Prophet (Muhammad). Peace be upon all of us righteous servants. I testify that there is no God but Allah, and I testify that the Prophet Muhammad is the messenger of Allah. O Allah. Bestow mercy upon the Prophet Muhammad.",
      },
      {
        meaningFinalTashahhud:
          "All honor, blessings, peace and blessings are reserved for Allah alone. May the peace, mercy and blessings of Allah be upon you, O Prophet. May peace be upon us and the good servants of Allah. I bear witness that there is no God but Allah, the One and Only, and there is no partner for Him. And I bear witness that Muhammad is His servant and messenger (HR Bukhari, Muslim, Abu Dawud, Tirmidhi, Nasa'i, Ibn Majah, Ahmad, Thabrani & Baihaqi, from Abdullah bin Mas'ud). O Allah, send blessings upon Muhammad and his family, just as You sent blessings upon Abraham and his family. Bless Muhammad and his family, as You have blessed Ibrahim and his family. Indeed, You are the Most Praiseworthy, the Most Glorious (Muslim & Ahmad, from Ka'b bin Ujrah).",
      },
      { meaningRegards: "Salvation, Allah's mercy, and His blessings may remain with you all. (HR Muslim, from Sa'ad)" },
      { paragraph: "I intend to perform the obligatory Fardh prayer of Subuh/Fajr with two rak'ahs while facing the Qiblah, for the sake of Allah Ta'ala." },
      { paragraph: "I intend to perform the obligatory Fardh prayer of Dhuhr with four rak'ahs while facing the Qiblah, at this moment, for the sake of Allah Ta'ala." },
      { paragraph: "I intend to perform the obligatory Fardh prayer of Asr with four rak'ahs while facing the Qiblah, at this moment, for the sake of Allah Ta'ala." },
      { paragraph: "I intend to perform the obligatory Fardh prayer of Maghrib with three rak'ahs while facing the Qiblah, at this moment, for the sake of Allah Ta'ala." },
      { paragraph: "I intend to perform the obligatory Fardh prayer of Isha with four rak'ahs while facing the Qiblah, at this moment, for the sake of Allah Ta'ala." },
      {
        qunut:
          "O Allah, guide me like those whom You have guided. Grant me health, like those to whom You have given health. Lead me with those whom You have led. Bestow blessings on whatever You have given me. Preserve me with Your compassion from the evil of what You have decreed, for You are the One who decrees and no one can decree except You. Verily, those to whom You have given power will not be despised, and those to whom You have made enemies will not be exalted; Most Blessed are You and Most Sublime are You. Praise be to You for what You have decreed. I ask forgiveness and repent to You. And may Allah bestow mercy and safety (sholawat) upon our lord. Prophet Muhammad, and also on his family and companions.",
      },
      { meaningImam: "Recitation if you are an Imam, during congregational prayer" },
      { meaningMakmum: "Recitation if you are a Makmum, during the congregational prayer" },
    ],
    load: "Loading prayer times...",
    buttonText: "Find Mosque",
  },
};
