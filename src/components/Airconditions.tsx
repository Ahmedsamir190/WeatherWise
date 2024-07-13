import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FaClock } from "react-icons/fa";
import { AirWindPart } from "../assets/Wind";
import { FaCloudRain } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import { FaTemperatureThreeQuarters, FaWind } from "react-icons/fa6";
import { useEffect, useMemo, useState } from "react";
import "swiper/css/pagination";
import { useWeather } from "@/context/Weathercontext";
import { Airconditionsitems, Weather } from "@/interface/InterFace";

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const icons = [
  <FaTemperatureThreeQuarters key="temperature" />,
  <FaWind key="wind" />,
  <FaCloudRain key="cloudRain" />,
  <IoSunny key="sunny" />,
];

const stateofair = ["Real Feel", "Wind", "Chance of rain", "UV Index"];
const signs = ["°", "km/hr", "%", ""];

function AirConditions() {
  let currentDay = new Date().getDay();
  let datenow = new Date().getHours();
  let dataMinutes = new Date().getMinutes();
  const [isClient, setIsClient] = useState(false);
  const { weeklyForecastData } = useWeather() || {};

  // get first seven data in list
  const airdata = useMemo(
    () => weeklyForecastData.list.slice(0, 7),
    [weeklyForecastData]
  );
  // get first four data in list
  const airwind = useMemo(
    () => weeklyForecastData.list.slice(0, 4),
    [weeklyForecastData]
  );

  useEffect(() => {
    setIsClient(true);
  }, []);
  //get datenow and make condition
  let currentdate =
    datenow < 12
      ? `0${datenow}:${dataMinutes} ${"AM"}`
      : `${datenow}:${dataMinutes} ${"PM"}`;

  //here i order days to see the current day in the first
  const reorderedDays = useMemo(
    () => [...daysOfWeek.slice(currentDay), ...daysOfWeek.slice(0, currentDay)],
    [currentDay]
  );

  return (
    <section className="shadow-section bg-white px-7 py-12 rounded-xl col-start-[18] col-end-[25] row-start-1 row-end-6 ">
      <div>
        {/* swiper for days and icons  */}
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            480: { slidesPerView: 2, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            992: { slidesPerView: 3, spaceBetween: 20 },
            1200: { slidesPerView: 4, spaceBetween: 20 },
          }}
        >
          {airdata.map((icon: Weather, index: number) => {
            const weatherIcon = icon.weather[0].icon;
            return (
              <SwiperSlide key={index} className="flex flex-col items-center">
                <h3
                  className="font-bold items-center flex-col"
                  aria-labelledby={`day-${index}`}
                >
                  {reorderedDays[index].slice(0, 3)}
                </h3>
                <Image
                  src={`http://openweathermap.org/img/w/${weatherIcon}.png`}
                  alt={`${icon.description} icon`}
                  width={80}
                  height={80}
                  aria-label={`${icon.description} icon`}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* clock part */}
        <div className="flex gap-3 items-center font-bold justify-center">
          <FaClock />
          <span>{isClient && currentdate}</span>
        </div>
        {/* number of wind  */}
        <div className="mt-6 font-bold flex flex-col gap-6">
          <h4 className="my-6">AIR CONDITIONS</h4>
          {airwind.map((item: Airconditionsitems, index: number) => {
            let { speed } = item.wind;
            return (
              <AirWindPart
                key={index}
                icon={icons[index % icons.length]}
                state={stateofair[index]}
                degree={
                  index === 1
                    ? `0.${speed.toFixed()}${signs[index]}`
                    : `${speed.toFixed()}${signs[index]} `
                }
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AirConditions;
