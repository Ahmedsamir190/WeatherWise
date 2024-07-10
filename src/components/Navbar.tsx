import { FaMapMarkerAlt } from "react-icons/fa";
import { TiWeatherCloudy } from "react-icons/ti";
import { MdOutlineAssignmentInd } from "react-icons/md";
import { FaMagnifyingGlassLocation } from "react-icons/fa6";
import Link from "next/link";
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseCircleSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { NavToggle } from "@/rtk/slice/navbarToggle";
import { useWeather } from "@/context/Weathercontext";
import { useRouter } from "next/router";
import { useState } from "react";

function NavBar() {
  //here i make toggle for state to show or hidden nav
  // const navbarvisible = useSelector((state) => state.NavbarToggle.visiblenav);
  let location = useRouter();
  const hidden = "hidden";
  let space = "justify-between ";

  let inputLinkHidden = location.pathname === "/countrysweatherinfo" && hidden;
  let spacecondition = location.pathname === "/countrysweatherinfo" && space;

  const [navToggle, setNavtoggle] = useState(false);

  let HandleToggleNav = () => {
    setNavtoggle(!navToggle);
  };

  // const condition = navbarvisible && "show-navbar";
  const { currentWeatherData, city, handleSearch } = useWeather();
  return (
    <header className="py-4 px-4 border-b-2  border-gray-200 text-sky-500 fixed top-0 w-full z-10 backdrop-blur-md">
      {/* here parent div for all  */}
      <div className="flex justify-between items-center">
        {/* part one - logo */}
        <div className={`${spacecondition} p-1 rounded-3xl flex gap-8 `}>
          <Link href={"/"} className="flex gap-1  items-center font-black  ">
            <TiWeatherCloudy className="text-3xl" aria-label="WeatherWise" />
            WeatherWise
          </Link>
        </div>
        {/* divided nav for two part */}
        <nav
          className={`flex justify-between items-center gap-5 navbar-mobile  ${
            navToggle
              ? "max-[991px]:opacity-100 max-[991px]:top-24"
              : "max-[991px]:opacity-0 max-[991px]:top-64"
          } `}
          aria-label="Main Navigation"
        >
          {/*part one - loactions */}
          <div className="flex items-center gap-3  rounded-3xl bg-white px-3 py-2 border border-sky-500">
            <FaMapMarkerAlt aria-label="Current Location" />
            {!city || !currentWeatherData ? (
              <p>no available loactions</p>
            ) : (
              <p>{`${city.toUpperCase()} - ${currentWeatherData.sys.country.toUpperCase()}`}</p>
            )}
          </div>
          {/* part two -search and sign in button  */}
          <div className="flex gap-7 items-center max-[991px]:flex-col max-[991px]:items-center max-[991px]:px-4	">
            <form
              onSubmit={(e) => e.preventDefault()}
              className={`${inputLinkHidden} bg-white px-3 py-2 rounded-3xl flex items-center gap-1 border border-sky-500`}
            >
              <input
                type="text"
                placeholder="Use,Protugl,ets"
                className="outline-none px-2 w-full"
                aria-label="Search Input"
                id="searchinput"
              />
              <button
                onClick={() => {
                  handleSearch();
                  setNavtoggle(false);
                }}
              >
                <FaMagnifyingGlassLocation
                  className=" text-3xl"
                  aria-label="Search Button"
                />
              </button>
            </form>
            <div>
              <Link
                className={`${inputLinkHidden} bg-white rounded-3xl flex gap-1 items-center  duration-[0.9s] hover:bg-blue-500 hover:text-white border border-sky-500 p-2`}
                aria-label="Sign In Button"
                href={"/countrysweatherinfo"}
                onClick={() => setNavtoggle(false)}
              >
                <MdOutlineAssignmentInd />
                Explore the country's weather
              </Link>
            </div>
          </div>
        </nav>
        <RiMenu3Fill
          className="text-6xl bg-white p-3 rounded-[35px] text-black min-[991px]:hidden"
          onClick={HandleToggleNav}
          aria-label="Open Menu Button"
        />
      </div>
    </header>
  );
}

export default NavBar;
