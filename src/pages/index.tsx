import CurrentWeather from "../components/Currentweather";
import WeeklyWeather from "../components/Weekly";
import AirConditions from "@/components/Airconditions";
import HourlyCom from "@/components/hourly";
import { ThreeCircles } from "react-loader-spinner";
import { Errorstructure } from "@/assets/Error";
import { useWeather } from "@/context/Weathercontext";
import Head from "next/head";

export default function Home({}) {
  const { loading, error } = useWeather() as {
    loading: boolean;
    error: Error | null;
  };

  return (
    <>
      <Head>
        <title>Weather-Wise</title>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Weather-Wise website for weather info "
        />
        <meta name="keywords" content="Weather, Weather Wise, info" />
        <meta name="author" content="Ahmed Samir" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg">
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
          <div className=" grid gap-4 grid-cols-gridtemplate grid-rows-gridrow max-lg:flex max-lg:flex-col max-lg:gap-7 px-6 py-40">
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

    return {
      props: {
        initialData: {
          currentWeatherData,
          weeklyForecastData,
        },
      },
    };
  } catch (error) {
    return { notFound: true };
  }
}
