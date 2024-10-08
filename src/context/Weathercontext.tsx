import {
  WeatherContextProps,
  WeatherProviderProps,
} from "@/interface/InterFace";
import { createContext, useContext, useState, useEffect } from "react";

const WeatherContext = createContext<WeatherContextProps | undefined>(
  undefined
);

export const WeatherProvider = ({
  children,
  initialData = {},
}: WeatherProviderProps) => {
  const [currentWeatherData, setCurrentWeatherData] = useState(
    initialData.currentWeatherData || null
  );
  const [weeklyForecastData, setWeeklyForecastData] = useState(
    initialData.weeklyForecastData || null
  );

  const [city, setCity] = useState<string>("Cairo");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeatherData = async (city: string) => {
    setLoading(true);
    setError(null);
    try {
      const currentWeatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&units=metric&appid=e59064680b3086a97714609e0bdc3594`
      );
      const currentWeatherData = await currentWeatherRes.json();
      if (currentWeatherData.cod !== 200) {
        throw new Error("City not found");
      }
      const weeklyForecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=en&units=metric&appid=e59064680b3086a97714609e0bdc3594`
      );
      const weeklyForecastData = await weeklyForecastRes.json();

      setCurrentWeatherData(currentWeatherData);
      setWeeklyForecastData(weeklyForecastData);
    } catch (error) {
      setError("No data found");
      setCurrentWeatherData(null);
      setWeeklyForecastData(null);
    } finally {
      setLoading(false);
    }
  };

  // const handleSearch = (event) => {
  //   if (event.key === "Enter") {
  //     setCity(event.target.value);
  //   }
  // };
  const handleSearch = () => {
    let item = document.getElementById("searchinput") as HTMLInputElement;
    setCity(item.value);
  };

  useEffect(() => {
    fetchWeatherData(city);
  }, [city]);

  return (
    <WeatherContext.Provider
      value={{
        currentWeatherData,
        weeklyForecastData,
        fetchWeatherData,
        loading,
        error,
        handleSearch,
        city,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
