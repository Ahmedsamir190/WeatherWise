import { useSelector } from "react-redux";
import CurrentWeather from "../components/Currentweather";
import WeeklyWeather from "../components/Weekly";
import AirConditions from "@/components/Airconditions";
import HourlyCom from "@/components/hourly";
import { createContext, useContext, useEffect, useState } from "react";
import { ThreeCircles } from "react-loader-spinner";
import { Errorstructure } from "@/assets/Error";
import { useWeather } from "@/context/Weathercontext";

export default function Home({}) {
  const { loading, error } = useWeather() as {
    loading: boolean;
    error: Error | null;
  };

  //here i used state to make condition to hidde scroll bar when user open navbar
  // const navbarvisible = useSelector((state) => state.NavbarToggle.visiblenav);
  // const loadingLoader = useSelector((state) => state.LoadingSlice.showloader);

  // const overflow = navbarvisible && "page-overflow";

  //by default initial country will be cairo and user can search for any country need
  // const [city, setCity] = useState("cairo");

  // const [currentWeatherData, setCurrentWeatherData] = useState(
  //   initialCurrentWeatherData
  // );
  // const [weeklyForecastData, setWeeklyForecastData] = useState(
  //   initialWeeklyForecastData
  // );
  // const [hourlyForecastData, setHourlyForecastData] = useState(
  //   initialHourlyForecastData
  // );
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  // // here fetch data again with specific city user add to display data
  // const fetchWeatherData = async (city) => {
  //   setLoading(true);
  //   try {
  //     const currentWeatherRes = await fetch(
  //       `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&units=metric&appid=e59064680b3086a97714609e0bdc3594`
  //     );
  //     const currentWeatherData = await currentWeatherRes.json();

  //     if (currentWeatherData.cod !== 200) {
  //       throw new Error("City not found");
  //     }

  //     const weeklyForecastRes = await fetch(
  //       `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=en&units=metric&appid=e59064680b3086a97714609e0bdc3594`
  //     );
  //     const weeklyForecastData = await weeklyForecastRes.json();

  //     const hourlyForecastRes = await fetch(
  //       `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=e59064680b3086a97714609e0bdc3594`
  //     );
  //     const hourlyForecastData = await hourlyForecastRes.json();

  //     setCurrentWeatherData(currentWeatherData);
  //     setWeeklyForecastData(weeklyForecastData);
  //     setHourlyForecastData(hourlyForecastData);
  //     setError(null);
  //   } catch (error) {
  //     setError("City not found");
  //     setCurrentWeatherData(null);
  //     setWeeklyForecastData(null);
  //     setHourlyForecastData(null);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // // here i handle input search to get value the user put to update the state for city
  // const handleSearch = (event) => {
  //   if (event.key === "Enter") {
  //     setCity(event.target.value);
  //   }
  // };

  // useEffect(() => {
  //   if (city !== "Cairo") {
  //     fetchWeatherData(city);
  //   }
  // }, [city]);

  return (
    <>
      {/* <NavBar
        currentdata={currentWeatherData}
        cityname={city}
        userchoose={handleSearch}
      /> */}

      <main>
        {loading ? (
          <div
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "50px",
            }}
          >
            <ThreeCircles
              height="80"
              width="80"
              color="blue"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        ) : error ? (
          <Errorstructure
            title={
              "Sorry But We have Not Found Any Location Try Again And Choose Another Location"
            }
            image={"/notfound.gif"}
          />
        ) : (
          <div className="bg-[#f4f7fd] grid gap-4 grid-cols-gridtemplate grid-rows-gridrow max-lg:flex max-lg:flex-col max-lg:gap-7 px-6 py-40">
            <CurrentWeather />
            <WeeklyWeather />
            <AirConditions />
            <HourlyCom />
          </div>
        )}
      </main>
    </>
  );
}

//here first fetch for intiial data
export async function getStaticProps() {
  try {
    const currentWeatherRes = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Cairo&lang=en&units=metric&appid=e59064680b3086a97714609e0bdc3594"
    );
    const currentWeatherData = await currentWeatherRes.json();

    const weeklyForecastRes = await fetch(
      "https://api.openweathermap.org/data/2.5/forecast?q=Cairo&lang=en&units=metric&appid=e59064680b3086a97714609e0bdc3594"
    );
    const weeklyForecastData = await weeklyForecastRes.json();

    const hourlyForecastRes = await fetch(
      "https://api.openweathermap.org/data/2.5/forecast?q=Cairo&units=metric&appid=e59064680b3086a97714609e0bdc3594"
    );
    const hourlyForecastData = await hourlyForecastRes.json();
    return {
      props: {
        initialData: {
          currentWeatherData,
          weeklyForecastData,
          hourlyForecastData,
        },
      },
    };
  } catch (error) {
    return { notFound: true };
  }
}
