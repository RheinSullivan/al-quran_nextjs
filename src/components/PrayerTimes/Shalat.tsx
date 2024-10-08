import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { English } from "@/language/English";
import { Indonesian } from "@/language/Indonesian";

interface LocationState {
  city: string;
  lat: number;
  lon: number;
}

interface PrayerTimes {
  Fajr: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
  [key: string]: string;
}

interface OpenStreetMapResponse {
  address: {
    city?: string;
    town?: string;
    village?: string;
    country?: string;
    road?: string;
  };
}

export default function Shalat({ language }: { language: string }) {
  const [location, setLocation] = useState<LocationState>({
    city: "Loading...",
    lat: 0,
    lon: 0,
  });
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimes | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          setLocation((prev) => ({ ...prev, lat: latitude, lon: longitude }));
          getCity(latitude, longitude);
          getPrayerTimes(latitude, longitude);
        });
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    };

    getLocation();
  }, []);

  const getCity = async (lat: number, lon: number) => {
    try {
      const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
      const data: OpenStreetMapResponse = await res.json();
      const city = data.address.city || data.address.town || data.address.village || "Unknown";
      setLocation((prev) => ({ ...prev, city }));
    } catch (error) {
      console.error("Error fetching city:", error);
    }
  };

  const getPrayerTimes = async (lat: number, lon: number) => {
    try {
      const res = await fetch(`https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lon}&method=2`);
      const data = await res.json();
      setPrayerTimes(data.data.timings);
    } catch (error) {
      console.error("Error fetching prayer times:", error);
    }
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat("id-ID", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
      timeZone: "Asia/Jakarta",
    }).format(date);
  };

  return (
    <section id="shalat-times">
      <main className="container mx-auto pt-32 py-10 justify-center items-center">
        <div className="w-[80%] max-w-screen-xl h-full ml-[69px] md:ml-32 xl:ml-48 flex flex-col bg-gradient-to-br from-dark via-dark2 to-dark text-white border-2 border-sky-600 rounded-[20px]">
          <div className="w-full h-full flex flex-col bg-gradient-to-bl from-[#191E2480] to-[#4E83C31A] py-[60px] rounded-[20px]">
            <div className="text-2xl md:text-4xl font-semibold text-center lg:text-start px-4 py-4 lg:px-24">
              <h3 className="text-xl md:text-3xl">{location.city}</h3>
              <h1 className="my-2">{isHydrated && formatDate(currentTime)}</h1>
              <p className="md:text-2xl">{isHydrated && formatTime(currentTime)}</p>
            </div>
            <div className="flex flex-col py-10 justify-center items-center lg:flex-row flex-wrap xl:gap-16 xl:px-24 xl:py-20">
              {prayerTimes ? (
                <>
                  <div className="flex gap-16" aria-label="Waktu salat subuh hari ini">
                    <div className="flex flex-col justify-center items-center xl:items-start">
                      <span className="text-xl font-normal">{language === "en" ? English.shalat.times[0].title : Indonesian.shalat.times[0].title}</span>
                      <span className="text-3xl font-bold">{prayerTimes.Fajr}</span>
                      <div className="lg:hidden my-8 w-[155px] h-[1px] bg-gradient-to-r from-dark via-sky-600 to-dark"></div>
                    </div>
                    <div className="hidden lg:flex lg:h-[155px] lg:w-[1.5px] bg-gradient-to-b from-dark via-sky-600 to-dark"></div>
                  </div>
                  <div className="flex gap-16" aria-label="Waktu salat dzuhur hari ini">
                    <div className="flex flex-col justify-center items-center xl:items-start">
                      <span className="text-xl font-normal">{language === "en" ? English.shalat.times[1].title : Indonesian.shalat.times[1].title}</span>
                      <span className="text-3xl font-bold">{prayerTimes.Dhuhr}</span>
                      <div className="lg:hidden my-8 w-[155px] h-[1px] bg-gradient-to-r from-dark via-sky-600 to-dark"></div>
                    </div>
                    <div className="hidden lg:flex lg:h-[155px] lg:w-[1.5px] bg-gradient-to-b from-dark via-sky-600 to-dark"></div>
                  </div>
                  <div className="flex gap-16" aria-label="Waktu salat ashar hari ini">
                    <div className="flex flex-col justify-center items-center xl:items-start">
                      <span className="text-xl font-normal">{language === "en" ? English.shalat.times[2].title : Indonesian.shalat.times[2].title}</span>
                      <span className="text-3xl font-bold">{prayerTimes.Asr}</span>
                      <div className="lg:hidden my-8 w-[155px] h-[1px] bg-gradient-to-r from-dark via-sky-600 to-dark"></div>
                    </div>
                    <div className="hidden lg:flex lg:h-[155px] lg:w-[1.5px] bg-gradient-to-b from-dark via-sky-600 to-dark"></div>
                  </div>
                  <div className="flex gap-16" aria-label="Waktu salat maghrib hari ini">
                    <div className="flex flex-col justify-center items-center xl:items-start">
                      <span className="text-xl font-normal">{language === "en" ? English.shalat.times[3].title : Indonesian.shalat.times[3].title}</span>
                      <span className="text-3xl font-bold">{prayerTimes.Maghrib}</span>
                      <div className="lg:hidden my-8 w-[155px] h-[1px] bg-gradient-to-r from-dark via-sky-600 to-dark"></div>
                    </div>
                    <div className="hidden lg:flex lg:h-[155px] lg:w-[1.5px] bg-gradient-to-b from-dark via-sky-600 to-dark"></div>
                  </div>
                  <div className="flex gap-16" aria-label="Waktu salat isya hari ini">
                    <div className="flex flex-col justify-center items-center xl:items-start">
                      <span className="text-xl font-normal">{language === "en" ? English.shalat.times[4].title : Indonesian.shalat.times[4].title}</span>
                      <span className="text-3xl font-bold">{prayerTimes.Isha}</span>
                      <div className="lg:hidden my-8 w-[155px] h-[1px] bg-gradient-to-r from-dark via-sky-600 to-dark"></div>
                    </div>
                    <div className="hidden lg:flex lg:h-[155px] lg:w-[1.5px] bg-gradient-to-b from-dark via-sky-600 to-dark"></div>
                  </div>
                </>
              ) : (
                <p className="animate-pulse duration-300">{language === "en" ? English.shalat.load : Indonesian.shalat.load}</p>
              )}
            </div>
            <Link
              href="https://www.google.com/maps/search/masjid+near+me"
              target="_blank"
              className="flex space-x-1 items-center justify-center text-center text-wrap xl:h-16 text-sm md:text-lg font-normal mx-auto my-4 py-2 px-5 rounded-lg bg-green-500 text-white hover:bg-white hover:text-green-500 active-button"
            >
              <span>{language === "en" ? English.shalat.buttonText : Indonesian.shalat.buttonText}</span>
              <span>
                <FaLocationDot />
              </span>
            </Link>
          </div>
        </div>
      </main>
    </section>
  );
}
