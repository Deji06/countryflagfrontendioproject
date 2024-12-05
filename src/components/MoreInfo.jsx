import React, {useState } from "react";
import { FaBackspace, FaBackward } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

const MoreInfo = ({ backgroundColor }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const country = location.state?.country;

  return (
    <>
      <div
        className={`${
          backgroundColor
            ? "bg-darkblue && text-text && placeholder-text"
            : "bg-white && text-lightmodetext"
        }`}
      >
        <Link to="/">
          <button
            type="button"
            className={`flex items-center gap-x-2 border border-black px-2  ml-5 ${
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
      </div>
      {/* <button onClick={() => navigate('/')}>Back to Country List</button> */}
      <div
        className={`sm:flex h-[900px] sm:h-[100%] pb-44 ${
          backgroundColor
            ? "bg-darkblue && text-text && placeholder-text"
            : "bg-white && text-lightmodetext"
        } `}
      >
        <img
          src={country?.flags?.png}
          alt={`Flag of ${country?.name}`}
          className={"sm:w-[40%] m-auto sm:ml-7 pt-10"}
        />
        <div className={""}>
            <h1 className={"mt-10 text-[30px]  font-bold pl-12"}>
              {country?.name?.common}
            </h1>
            <div className={'sm:flex'}>
              <div>
                <p className={"pl-12 text-[25px] sm:text-[20px]"}>
                  Population: {country?.population}
                </p>
                <p className={"pl-12 text-[25px] sm:text-[20px]"}>Region: {country?.region}</p>
                <p className={"pl-12 text-[25px] sm:text-[20px]"}>
                  Sub-Region: {country?.subregion}
                </p>
                <p className={"pl-12 sm:text-[20px] text-[25px]"}>Capital: {country?.capital}</p>
              </div>

            <div className={"mt-10 sm:mt-0 sm:mr-5"}>
              <p className={"pl-12 text-[25px] sm:text-[20px]"}>
                Sub-Region: {country?.subregion}
              </p>
              <p className={"pl-12 text-[25px] sm:text-[20px]"}>
                Currency: {country?.currencies?.name}
              </p>
              <p className={"pl-12 text-[25px] sm:text-[20px]"}>Languages: {""}</p>
            </div>

            </div>
        </div>
      </div>
    </>
  );
};

export default MoreInfo;
