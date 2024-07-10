// contexts/WeatherContext.js
import { createContext, useContext, useState, useEffect } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children, initialData = {} }) => {
  const [currentWeatherData, setCurrentWeatherData] = useState(
    initialData.currentWeatherData || null
  );
  const [weeklyForecastData, setWeeklyForecastData] = useState(
    initialData.weeklyForecastData || null
  );
  const [hourlyForecastData, setHourlyForecastData] = useState(
    initialData.hourlyForecastData || null
  );
  const [city, setCity] = useState("Cairo");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeatherData = async (city) => {
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

      const hourlyForecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=e59064680b3086a97714609e0bdc3594`
      );
      const hourlyForecastData = await hourlyForecastRes.json();

      setCurrentWeatherData(currentWeatherData);
      setWeeklyForecastData(weeklyForecastData);
      setHourlyForecastData(hourlyForecastData);
    } catch (error) {
      setError("No data found");
      setCurrentWeatherData(null);
      setWeeklyForecastData(null);
      setHourlyForecastData(null);
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
    let item = document.getElementById("searchinput");
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
        hourlyForecastData,
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
