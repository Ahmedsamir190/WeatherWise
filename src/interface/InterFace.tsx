import { ReactNode } from "react";

// export interface WeatherContextProps {
//   currentWeatherData: object;
//   weeklyForecastData: object;
//   hourlyForecastData: object;
//   loading: boolean;
//   error: string | null;
//   fetchWeatherData: (city: string) => Promise<void>;
//   handleSearch: () => void;
//   city: string;
// }

// export interface WeatherProviderProps {
//   children: ReactNode;

//   initialData?: {
//     currentWeatherData: object | undefined;
//     weeklyForecastData: object | undefined;
//     hourlyForecastData: object | undefined;
//   };
//   loading: boolean;
//   error: string | null;
//   fetchWeatherData: (city: string) => Promise<void>;
//   handleSearch: () => void;
//   city: string;
// }
export interface Coord {
  lon: number;
  lat: number;
}

export interface Weather {
  weather: any;
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level?: number;
  grnd_level?: number;
}

export interface Wind {
  speed: number;
  deg: number;
}

export interface Clouds {
  all: number;
}

export interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface CurrentWeatherData {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface WeatherProviderProps {
  children: ReactNode;
  initialData?: {
    currentWeatherData?: CurrentWeatherData;
    weeklyForecastData?: WeeklyForecastData;
    hourlyForecastData?: HourlyForecastData;
  };
}

export interface WeatherContextProps {
  currentWeatherData: CurrentWeatherData | null;
  weeklyForecastData: WeeklyForecastData | null;
  hourlyForecastData: HourlyForecastData | null;
  fetchWeatherData: (city: string) => Promise<void>;
  handleSearch: () => void;
  loading: boolean;
  error: string | null;
  city: string;
}

export interface WeatherData {
  cod: string;
  message: number;
  cnt: number;
  list: WeatherItem[];
}

export interface WeeklyForecastData {}

export interface HourlyForecastData {
  // Define the structure for hourly forecast data
}

export interface Airconditionsitems {
  wind: { speed: any };
  weather: {
    icon: string;
  }[];
  description: any;
  index: number | null | undefined;
}
export interface AirWindPartProps {
  icon: React.ReactNode;
  state: string;
  degree: string;
}
