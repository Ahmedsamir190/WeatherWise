import { useWeather } from "@/context/Weathercontext";
import Image from "next/image";
import { useEffect, useState } from "react";

export const apikey = "e59064680b3086a97714609e0bdc3594";

function CurrentWeather() {
  const { currentWeatherData } = useWeather();
  // get time and make condition to add am or pm
  const GetHours = new Date().getHours();
  const GetMinutes = new Date().getMinutes();
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(true);

  const currentdate =
    GetHours < 12
      ? `0${GetHours}:${GetMinutes} ${"AM"}`
      : `${GetHours}:${GetMinutes} ${"PM"}`;

  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!currentWeatherData) {
    return <div>loding</div>;
  }
  // start divided and get what i need from this api to display
  const { weather, main } = currentWeatherData;

  const weatherIcon = `http://openweathermap.org/img/w/${currentWeatherData?.weather[0].icon}.png`;

  return (
    <section className="bg-white shadow-section  h-max  px-5 py-9 rounded-2xl col-start-1 col-end-9 row-start-1 row-end-3 ">
      <div>
        <div>
          <h3 className="text-gray-400">Current Weather</h3>
          <p className="translate-x-5	">{isClient && currentdate}</p>
        </div>
        <div className="flex items-center gap-4">
          <Image
            src={weatherIcon}
            alt={`${weather[0].description}icon`}
            width={100}
            height={100}
          />
          <p className="font-extrabold text-xl">
            {` ${main.temp.toFixed()}°C `}{" "}
          </p>
          <p className="text-gray-400">{weather[0].main}</p>
        </div>
        <p>
          There will be {weather[0].description} The high will be{" "}
          {main.temp.toFixed()}
          °C
        </p>
      </div>
    </section>
  );
}

export default CurrentWeather;
