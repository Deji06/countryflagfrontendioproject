import React from "react";
import { FaMoon } from "react-icons/fa";

const NavBar = ({ backgroundColor, changeBackgroundColor }) => {

  return (
    <>
      <div
        className={`flex  sm:w-[100%] justify-between ${
          backgroundColor ? "bg-navbar" : "bg-text"
        }  px-3 py-3 items-center border border-black`}
      >
        <h1
          className={`font-Nunito ${
            backgroundColor ? "text-text" : "text-lightmodetext"
          }  sm:ml-5 sm:text-[20px] text-[12px] ml-2`} 
        >
          where in the world?
        </h1>
        <button
          type="button"
          onClick={changeBackgroundColor}
          className={`font-Nunito ${
            backgroundColor ? "text-text" : "text-lightmodetext"} capitalize mr-8 text-[10px] sm:text-[14px] flex items-center gap-x-2`}
        >
          <span className="">
            <FaMoon />
          </span>{" "}
          dark mode
        </button>
      </div>
    </>
  );
};

export default NavBar;
