import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

const Home = ({ backgroundColor, setCountry, country }) => {
  const navigate = useNavigate();

  // states and endpoints
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [isClearable, setIsClearable] = useState(true);
  const countryUrl = "https://restcountries.com/v3.1/all";
  const countrySearch = "https://restcountries.com/v3.1/name/";
  const countryFilterByRegionUrl = "https://restcountries.com/v3.1/region/";
  // const getIndependentCountryUrl =
  //   "https://restcountries.com/v3.1/independent?status=true";

  // get all countries function/feature
  useEffect(() => {
    const getCountryData = async () => {
      try {
        const resp = await fetch(countryUrl);
        const countries = await resp.json();
        if (region === "" && search === "") {
          setCountry(countries);
        }
      } catch (error) {
        console.error("error fetching data", error);
      }
    };
    getCountryData();
  }, []);

  //   region
  useEffect(() => {
    const getRegions = async () => {
      try {
        const resp = await fetch(`${countryFilterByRegionUrl}${region}`);
        const getCountryByRegion = await resp.json();
        if (region !== "") {
          setCountry(getCountryByRegion);
        }
      } catch (error) {
        console.error("error fetching data", error);
      }
    };
    getRegions();
  }, [region]);

  // console.log(country);
  const options = [
    { value: "all", label: "All" },
    { value: "africa", label: "Africa" },
    { value: "asia", label: "Asia" },
    { value: "europe", label: "Europe" },
    { value: "oceania", label: "Oceania" },
    { value: "america", label: "America" },
  ];

  const handleChange = async (option) => {
    if (option.value === "all") {
      console.log("Fetching all countries");
      // No need to setRegion here for immediate fetch
      setRegion("all"); // Update state but don't rely on it for fetch

      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        console.log(data);
        setCountry(data); // Store fetched data
      } catch (error) {
        console.error("Error fetching all countries:", error);
      }
    } else {
      console.log("Fetching region:", option.value);
      // Update state but fetch immediately based on option value
      setRegion(option.value);

      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/region/${option.value}`
        );
        const data = await response.json();
        console.log(data);
        setCountry(data); // Store fetched data
      } catch (error) {
        console.error("Error fetching region:", error);
      }
    }
  };

  // search
  // handle user search in the input field
  const handleUserSearch = (e) => {
    const userInput = e.target.value;
    console.log(userInput);
    setSearch(userInput);
  };

  useEffect(() => {
    const getCountryBySearch = async () => {
      try {
        const resp = await fetch(`${countrySearch}${search}`);
        const getCountryBySearching = await resp.json();
        if (search !== "") {
          setCountry(getCountryBySearching);
        }
      } catch (error) {
        console.error("error fetching data", error);
      }
    };
    getCountryBySearch();
  }, [search]);

  // getcountryinfo

  const getCountryInfo = async () => {
    navigate("/moreInfo");
    const resp = await fetch(countryUrl);
    const countries = await resp.json();
    console.log(setCountry(countries));
  };

  // react select customization
  const customStyles = (backgroundColor) => ({
    control: (provided) => ({
      ...provided,
      // width:'40%',
      border: "none", // Remove border
      boxShadow: "none", // Remove shadow
      "&:hover": { border: "none" },
      backgroundColor: backgroundColor ? "" : "", // bg-darkblue or bg-white
      color: backgroundColor ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)", // text color (text-text vs text-lightmodetext)
    }),

    placeholder: (provided) => ({
      ...provided,
      color: backgroundColor ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)", // placeholder-text vs placeholder-lightmodetext
      fontSize: "14px",
    }),

    singleValue: (provided) => ({
      ...provided,
      color: backgroundColor ? '#fff' : '#000',  // Text color for the selected value in the control
    }),

    menu: (provided) => ({
      ...provided,
      backgroundColor: backgroundColor ? 'navbar' : '#fff',
      marginLeft:'-12px',
      width:'105%'
    }),

    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused
        ? backgroundColor
          ? "hsl(209, 23%, 22%)"
          : "bg-navbar" // Background when option is focused
        : state.isSelected
        ? backgroundColor
          ? "hsl(209, 23%, 22%)"
          : "" // Background when option is selected
        : backgroundColor
        ? "hsl(209, 23%, 22%)"
        : "bg-navbar", // Default background
      color: backgroundColor ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)", // Text color for options
      cursor: "pointer",
      fontSize: "12px",
    }),
  });

  return (
    <>
      <main
        className={`flex flex-col sm:flex-row justify-between gap-y-8 sm:items-center font-Nunito sm:py-3  ${
          backgroundColor ? "bg-darkmodebackground" : "bg-lightmodebackground"
        } `}
      >
        <div
          className={`flex items-center gap-x-4  sm:ml-7 ml-4 w-[90%] md:w-[30%] ${
            backgroundColor
              ? "bg-darkblue && text-text"
              : "bg-text && text-lightmodetext"
          } mt-5  sm:pl-3  sm:py-2 py-4 px-5 sm:px-14 rounded-[5px] sm:text-[14px] `}
        >
          <span>
            <FaSearch />
          </span>
          <div>
            <input
              value={search}
              onChange={handleUserSearch}
              name="input"
              type="text"
              placeholder="search for a country..."
              className={`border-none outline-none   ${
                backgroundColor
                  ? "bg-darkblue && text-text && placeholder-text"
                  : "bg-white && text-lightmodetext && placeholder-lightmodetext"
              }`}
            />
          </div>
        </div>

        <div
          className={`${
            backgroundColor ? "bg-darkblue" : "bg-text"
          } sm:ml-0 ml-4 sm:mr-10 py-2 sm:py-0 rounded-[5px] w-[50%] md:w-[30%] lg:w-[17%]  `}
        >
          <Select
            className={`sm:mr-10 ml-4  `}
            styles={customStyles(backgroundColor)}
            classNamePrefix="select"
            isClearable={isClearable}
            placeholder="Filter by Region"
            onChange={handleChange}
            options={options}
          />
        </div>
      </main>

      <div
        className={`flex flex-wrap flex-row py-5 md:gap-x-36 lg:gap-x-12 sm:py-0 gap-y-4 pb-7 pr-8 pl-8 sm:pl-0  ${
          backgroundColor
            ? "bg-darkmodebackground && text-text && placeholder-text"
            : "bg-lightmodebackground && text-lightmodetext && placeholder-lightmodetext"
        } `}
      >
        {country.length > 0 ? (
          country.map((country, index) => {
            return (
              <div
                onClick={getCountryInfo}
                key={index}
                className={`w-[250px] cursor-pointer ${
                  backgroundColor
                    ? "bg-darkblue && text-text && placeholder-text"
                    : "bg-text && text-lightmodetext && placeholder-lightmodetext"
                }} sm:ml-7 sm:mt-4 mt-6 m-auto pb-8`}
              >
                <img
                  src={country.flags.png}
                  alt="country flag"
                  className="w-[100vw] h-[200px]"
                />
                <div className="pl-3 mt-3">
                  <h1 className="capitalize text-[18px]">
                    {country.name.common}
                  </h1>
                  <div className="mt-3">
                    <p className="text-[16px]">
                      Population: {country.population}
                    </p>
                    <p>Region: {country.region}</p>
                    <p>Capital: {country.capital}</p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-[2rem] capitalize m-auto">no country</p>
        )}
      </div>
    </>
  );
};

export default Home;
