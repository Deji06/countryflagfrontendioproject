import React, { useEffect } from "react";
import { FaBackspace, FaBackward } from "react-icons/fa";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import { useLocation } from 'react-router-dom';

const MoreInfo = ({ backgroundColor, country, setCountry}) => {

const countryUrl = "https://restcountries.com/v3.1/all";
  // const getIndependentCountryUrl =  "https://restcountries.com/v3.1/independent?status=true";
  // "https://restcountries.com/v3.1/all?fields=name,capital,currencies"
  // useEffect(() => {
  //   const getIndependentCountry = async () => {
  //     try {
  //       const resp = await fetch(getIndependentCountryUrl);
  //       const data = await resp.json();
  //       setCountryInfo(data);
  //       // console.log(setCountryInfo(data));
  //     } catch (error) {
  //       console.error("error fetching data", error);
  //     }
  //   };
  //   getIndependentCountry();
  // }, []);
  // console.log(countryInfo);
  // const handleBackButton = ()=> {
  //     console.log('clciked');
  //     return <Link to={'/'}></Link>
  // }
  // const location = useLocation();
  // const countryInfo = location.state?.countryInfo; // Access the passed data

  // useEffect(() => {
  //   const getCountryData = async () => {
  //     try {
  //       const resp = await fetch(countryUrl);
  //       const countries = await resp.json();
  //         setCountry(countries);
  //     } catch (error) {
  //       console.error("error fetching data", error);
  //     }
  //   };
  //   getCountryData();
  // }, []);


  return (
    <>
        <Link to="/">
          <button
            type="button"
            className={`flex items-center gap-x-2 border border-black px-2 mt-5 ml-5 ${
              backgroundColor
                ? "bg-darkblue && text-text && placeholder-text"
                : "bg-white && text-lightmodetext"
            } `}
          >
            <span>
              <FaBackspace />
            </span>
            Back
          </button>
        </Link>

        {/* <div className="flex">
          {country.filter((countryInfo,index) => (
            <div key={index}>
              <img src={countryInfo.flags.png} alt="flag" srcset="" />

            </div>

          ))}
            
        
          
        </div> */}
        <h1 className="text-[4rem] text-center capitalize">i haven't figured out this page yet lol</h1>
    </>
          
        )
};

export default MoreInfo;
