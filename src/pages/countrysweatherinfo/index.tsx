import Image from "next/image";
import data from "../../weather-info-data/infodata.json";
import { useEffect, useState } from "react";
import { ChangeEvent } from "react";

function CountryWeatherInfo() {
  const [countryindex, setCountryindex] = useState(0);
  const countrybyindex = data[countryindex];

  const HandleCountryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedcountry = event.target.value;
    const findcountry = data.find(
      (country) => country.title === selectedcountry
    );
    if (findcountry) {
      setCountryindex(findcountry.id - 1);
    }
  };

  return (
    <section className="pb-7 pt-12 px-7  bg-[#F4F7FD] ">
      <div className="my-24 bg-white rounded-2xl p-8">
        <div className="max-sm:flex-col max-md:gap-y-6 mb-12 border border-gray-300 rounded-xl p-5 flex justify-between items-center">
          <div>
            <label htmlFor="browser" className="font-black">
              Choose your country from the list:
            </label>
          </div>
          <div>
            <input
              list="browsers"
              name="browser"
              id="browser"
              className="border border-black rounded-xl px-4 py-2 w-full"
              onChange={HandleCountryChange}
            />
          </div>

          <datalist id="browsers">
            {data.map((country) => {
              return <option value={country.title} key={country.id} />;
            })}
          </datalist>
        </div>
        <div className="flex gap-5 gap-y-8 max-md:flex-wrap ">
          <div className="max-md:basis-full basis-3/5">
            <Image
              src={countrybyindex.img}
              alt={countrybyindex.description}
              width={800}
              height={350}
              className=" rounded-3xl h-[350px] w-full"
            />
          </div>
          <div className="max-md:basis-full basis-2/5">
            <h1 className="text-sky-500 font-black mb-8 tracking-wider">
              {countrybyindex.title}
            </h1>
            <div className="leading-8 text-gray-400">
              <p>{countrybyindex.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CountryWeatherInfo;
