import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../rtk/Store";
import LayoutComponent from "@/components/Layout";
import { WeatherProvider } from "@/context/Weathercontext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WeatherProvider initialData={pageProps.initialData}>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </WeatherProvider>
  );
}
