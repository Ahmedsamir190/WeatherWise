import { ReactNode } from "react";

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
export interface List {
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  sys: Sys;
  dt_txt: string;
}
export interface City {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
  timezone: number;
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

export interface WeeklyForecastData {
  cod: string;
  message: number;
  cnt: number;
  list: List[];
  city: City;
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
  aqinumber: number;
  cod: string;
  message: number;
  cnt: number;
}

export interface Airconditionsitems {
  wind: { speed: number };
  weather: {
    icon: string;
  }[];
  description: string;
  index: number | null | undefined;
}
export interface AirWindPartProps {
  icon: React.ReactNode;
  state: string;
  degree: string;
}
export interface ErrorstructureProps {
  title: string;
  image: string;
}
export interface WeeklyWeatherProps {
  currentWeatherData: CurrentWeatherData;
  weeklyForecastData: WeeklyForecastData;
  list: List;
  city: City;
}
