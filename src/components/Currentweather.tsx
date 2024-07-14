import { useWeather } from "@/context/Weathercontext";
import Image from "next/image";
import { useEffect, useState } from "react";

export const apikey = "e59064680b3086a97714609e0bdc3594";

function CurrentWeather() {
  // Get the current weather data from the weather context.
  const { currentWeatherData } = useWeather() || {};

  // Get the current time and add AM or PM.
  // get time and make condition to add am or pm
  const GetHours = new Date().getHours();
  const GetMinutes = new Date().getMinutes();
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(true);

  // Get the current date and time.
  const currentdate =
    GetHours < 12
      ? `${GetHours}:${GetMinutes} ${"AM"}`
      : `${GetHours}:${GetMinutes} ${"PM"}`;

  // Set the client state when the component mounts.
  useEffect(() => {
    setIsClient(true);
  }, []);

  // If there is no current weather data, display a loading message.
  if (!currentWeatherData) {
    return <div>loding</div>;
  }

  // Get the weather and main data from the current weather data.
  // start divided and get what i need from this api to display
  const { weather, main } = currentWeatherData;

  // Get the weather icon URL.
  const weatherIcon = `http://openweathermap.org/img/w/${currentWeatherData?.weather[0].icon}.png`;

  // Render the current weather section.
  return (
    <section className="bg-[#dcdcdc3d] text-white h-max  px-5 py-9 rounded-2xl col-start-1 col-end-9 row-start-1 row-end-3 ">
      <div>
        <div>
          {/* Display the current weather heading. */}
          <h3>Current Weather</h3>
          {/* Display the current time. */}
          <p className="translate-x-5	">{isClient && currentdate}</p>
        </div>
        <div className="flex items-center gap-4">
          {/* Display the weather icon. */}
          <Image
            src={weatherIcon}
            alt={`${weather[0].description}icon`}
            width={100}
            height={100}
          />
          {/* Display the current temperature. */}
          <p className="font-extrabold text-xl">
            {` ${main.temp.toFixed()}°C `}
          </p>
          {/* Display the weather condition. */}
          <p>{weather[0].main}</p>
        </div>
        {/* Display the weather description. */}
        <p>
          There will be {weather[0].description} The high will be
          {main.temp.toFixed()}
          °C
        </p>
      </div>
    </section>
  );
}

export default CurrentWeather;
