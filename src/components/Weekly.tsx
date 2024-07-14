import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {
  AwaitedReactNode,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  useState,
} from "react";
import { useWeather } from "@/context/Weathercontext";
import { WeatherData, WeeklyWeatherProps } from "@/interface/InterFace";

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function WeeklyWeather() {
  const currentDay = new Date().getDay();
  const [loading, setLoading] = useState(true);
  const {
    weeklyForecastData,
    city,
    currentWeatherData,
  }: WeeklyWeatherProps | any = useWeather();

  // here i make sure the current day start in first of array
  const reorderedDays = [
    ...daysOfWeek.slice(currentDay),
    ...daysOfWeek.slice(0, currentDay),
  ];

  const firstSevenDays = weeklyForecastData.list.slice(0, 7);

  // here make map to enter the array (list) and catch data from (weather) and display
  const results = firstSevenDays.map((statusOfDay: any, index: any) => {
    const icon = statusOfDay.weather[0].icon;
    const minTemp = statusOfDay.main.temp_min;
    const maxTemp = statusOfDay.main.temp_max;
    const description = statusOfDay.weather[0].description;

    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + index);
    const day = currentDate.getDate();
    const month = monthNames[currentDate.getMonth()];

    return (
      <SwiperSlide
        key={index}
        className="items-center flex-col"
        aria-label={`Weather information for ${reorderedDays[index]}`}
      >
        <h3 className="font-bold" aria-labelledby={`day-${index}`}>{`${
          index === 0 ? "Today" : ""
        } ${reorderedDays[index].slice(0, 3)}`}</h3>
        <span className="text-gray-400">
          {month} {day}
        </span>
        <Image
          src={`http://openweathermap.org/img/w/${icon}.png`}
          alt={`${description} icon`}
          width={80}
          height={80}
          aria-label={`${description} icon`}
        />
        <p className="font-bold mb-1">{description.slice(0, 8)}</p>
        <p className="text-gray-400">
          {minTemp.toFixed()} - {maxTemp.toFixed()}℃
        </p>
        <span className="text-gray-400">AQI {statusOfDay.aqinumber}</span>
      </SwiperSlide>
    );
  });

  return (
    <section className=" bg-[#dcdcdc3d] text-white h-max text-xs  p-7 rounded-3xl  col-start-9 col-end-[18] row-start-1 row-end-3 ">
      {loading ? (
        <div>
          <ul className="flex gap-6 mb-4 border-b-[3px] border-gray-100">
            <li className="mb-4 font-black capitalize">{`${city} - ${currentWeatherData.sys.country} `}</li>
          </ul>
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
            {results}
          </Swiper>
        </div>
      ) : (
        <div>no avialable data</div>
      )}
    </section>
  );
}

export default WeeklyWeather;
