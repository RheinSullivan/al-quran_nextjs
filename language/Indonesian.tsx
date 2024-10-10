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
    guide: { title: "Tuntunan Shalat" },
    intentionRead: [{ title: "Bacaan niat shalat Subuh" }, { title: "Bacaan niat shalat Dzuhur" }, { title: "Bacaan niat shalat Ashar" }, { title: "Bacaan niat shalat Maghrib" }, { title: "Bacaan niat shalat Isya" }],
    subTitle: "Jika kamu memperbaiki shalat mu, maka Allah akan memperbaiki dunia dan seisinya milikmu. Mari beristiqomah dan kembali menuju kebenaran bersamaku, kawan",
    times: [{ title: "Bacaan" }, { title: "Shubuh" }, { title: "Dzuhur" }, { title: "Ashar" }, { title: "Maghrib" }, { title: "Isya" }],
    headingText: [
      { title: "Takbiratul Ihram" },
      { title: "Iftitah:" },
      { title: "Surah Al-Fatihah:" },
      { title: "Bacaan surah dari Al-Qur'an:" },
      { title: "Rukuk:" },
      { title: "I'Tidal:" },
      { title: "Sujud:" },
      { title: "Duduk diantara dua Sujud (Iftirasy):" },
      { title: "Tasyahud awal:" },
      { title: "Tasyahud akhir:" },
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
          "Allah maha besar, maha sempurna kebesaran-Nya. Segala puji bagi Allah, pujian yang sebanyak-banyaknya. Dan maha suci Allah sepanjang pagi dan petang. Kuhadapkan wajahku kepada zat yang telah menciptakan langit dan bumi dengan penuh ketulusan dan kepasrahan dan aku bukanlah termasuk orang-orang yang musyrik. Sesungguhnya sholatku, ibadahku, hidupku dan matiku semuanya untuk Allah, penguasa alam semesta. Tidak ada sekutu bagi-Nya dan dengan demikianlah aku diperintahkan dan aku termasuk orang-orang yang muslim.",
      },
      {
        meaningAlFatihah:
          "Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang. Segala puji bagi Allah, Tuhan semesta alam Yang Maha Pengasih lagi Maha Penyayang, Pemilik hari Pembalasan. Hanya kepada Engkaulah kami menyembah dan hanya kepada Engkaulah kami memohon pertolongan. Bimbinglah kami ke jalan yang lurus, (yaitu) jalan orang-orang yang telah Engkau beri nikmat, bukan (jalan) mereka yang dimurkai dan bukan (pula jalan) orang-orang yang sesat.",
      },
      {
        meaningAyatKursi:
          "Allah, tidak ada tuhan selain Dia, Yang Mahahidup lagi terus-menerus mengurus (makhluk-Nya). Dia tidak dilanda oleh kantuk dan tidak (pula) oleh tidur. Milik-Nyalah apa yang ada di langit dan apa yang ada di bumi. Tidak ada yang dapat memberi syafaat di sisi-Nya tanpa izin-Nya. Dia mengetahui apa yang ada di hadapan mereka dan apa yang ada di belakang mereka. Mereka tidak mengetahui sesuatu apa pun dari ilmu-Nya, kecuali apa yang Dia kehendaki. Kursi-Nya (ilmu dan kekuasaan-Nya) meliputi langit dan bumi. Dia tidak merasa berat memelihara keduanya. Dialah yang Mahatinggi lagi Mahaagung.",
      },
      { meaningRukuk: "Maha Suci Rabbku yang maha Agung dan Maha Terpuji. (HR Muslim, Nasa'i, & Ahmad, dari Ibnu Abbas)." },
      { meaningItidal: "Aku mendengar orang yang memuji-Nya. Ya Allah Tuhan Kami, Bagi-Mu lah segala puji, sepenuh langit dan bumi, dan sepenuh barang yang Kau kehendaki sesudah itu." },
      { meaningSujud: "Maha Suci Rabb-ku Yang Maha Tinggi, dan memujilah aku kepada-Nya. (HR Abu Dawud, Ibnu Majah, Nasa'i, Ahmad & Tirmidzi, dari Hudzaifah)" },
      { meaningIftirasy: "Wahai Tuhanku, ampunilah dosaku, belas kasihanilah aku, cukupilah kekuranganku, angkatlah derajatku, berilah rejeki kepadaku, berilah petunjuk kepadaku, berilah kesehatan kepadaku dan berilah ampunan kepadaku." },
      {
        meaningInitialTashahhud:
          "Segala kehormatan, keberkahan, kebahagiaan dan kebaikan bagi Allah. Salam rahmat dan berkahNya kupanjatkan kepadamu wahai Nabi (Muhammad). Salam (keselamatan) semoga tetap untuk kami seluruh hamba yang shaleh. Aku bersaksi bahwa tiada Tuhan melainkan Allah, dan aku bersaksi bahwa Nabi Muhammad adalah utusan Allah. Ya Allah. Limpahilah rahmat kepada Nabi Muhammad.",
      },
      {
        meaningFinalTashahhud:
          "Segala penghormatan, keberkahan, shalawat dan kebaikan-kebaikan diperuntukkan hanya kepada Allah semata. Semoga salam sejahtera, rahmat Allah dan keberkahan-Nya senantiasa terlimpahkan kepadamu wahai Sang Nabi. Semoga salam sejahtera terlimpahkan kepada kami dan hamba-hamba Allah yang baik. Aku bersaksi bahwa tiada Tuhan selain Allah yang Maha Esa dan tiada sekutu bagi-Nya. Sedangkan aku bersaksi bahwa Muhammad adalah seorang hamba dan utusan-Nya (HR Bukhari, Muslim, Abu Dawud, Tirmidzi, Nasa'i, Ibnu Majah, Ahmad, Thabrani & Baihaqi, dari Abdullah bin Mas'ud). Ya Allah, limpahkanlah shalawat kepada Muhammad dan keluarganya, sebagaimana Engkau telah limpahkan kepada Ibrahim dan keluarganya. Berkahilah Muhammad dan keluarganya, sebagaimana Engkau telah berkahi Ibrahim dan keluarganya. Sesungguhnya Engkau Maha Terpuji lagi Mahamulia (HR Muslim & Ahmad, dari Ka'b bin Ujrah).",
      },
      { meaningRegards: "Keselamatan, rahmat Allah, dan barakahnya semoga tetap menyertai kamu sekalian. (HR Muslim, dari Sa'ad)" },
      { paragraph: "Aku berniat mengerjakan sholat fardhu subuh sebanyak dua raka’at dengan menghadap kiblat, karena Allah Ta’ala." },
      { paragraph: "Aku berniat melakukan salat fardu zuhur empat rakaat sambil menghadap kiblat, saat ini, karena Allah ta'ala." },
      { paragraph: "Aku berniat melakukan salat fardu ashar empat rakaat, sambil menghadap kiblat, saat ini, karena Allah ta'ala." },
      { paragraph: "Aku berniat melakukan salat fardu maghrib tiga rakaat, sambil menghadap kiblat, saat ini, karena Allah ta'ala." },
      { paragraph: "Aku berniat melakukan salat fardu isya empat rakaat, sambil menghadap kiblat, saat ini, karena Allah ta'ala." },
      {
        qunut:
          "Ya Allah, berikanlah aku petunjuk seperti orang-orang telah Engkau beri petunjuk. Berilah aku kesehatan, seperti orang-orang yang telah Engkau beri kesehatan. Pimpinlah aku bersama orang-orang yang telah Engkau pimpin. Limpahkanlah keberkahan kepada apa saja yang telah Engkau berikan kepadaku. Peliharalah aku dengan kasih sayang-Mu dari segala keburukan apa-apa yang telah Engkau putuskan (tetapkan), karena sesungguhnya Engkau-lah yang memberikan ketentuan dan tidak ada yang bisa memberikan ketentuan (keputusan) atas diri-Mu. Sesungguhnya tidaklah akan hina orang-orang yang telah Engkau berikan kekuasaan, dan tidaklah akan mulia orang yang telah Engkau musuhi, Maha Berkah lah Engkau dan Maha Luhur lah Engkau. Segala puji bagi-Mu atas apa yang telah Engkau tetapkan. Aku mohon ampun dan bertobat kepada-Mu. Dan semoga Allah memberikan rahmat dan keselamatan (sholawat) atas diri junjungan kami. Nabi Muhammad, dan juga atas keluarga dan para sahabatnya.",
      },
      { meaningImam: "Bacaan jika kamu adalah seorang Imam, saat menjalani shalat berjama'ah" },
      { meaningMakmum: "Bacaan jika kamu adalah seorang Makmum, saat menjalani shalat berjama'ah" },
    ],
    load: "Memuat waktu shalat...",
    buttonText: "Cari Masjid",
  },
};
