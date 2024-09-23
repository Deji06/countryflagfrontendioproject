import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import { FaSearch } from "react-icons/fa";
import MoreInfo from "./components/MoreInfo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Home from "./components/Home";

function App() {
  const [backgroundColor, setBackGroundColor] = useState(true);
  const[countryInfo, setCountryInfo] = useState([])
  const [country, setCountry] = useState([]);
  const changeBackgroundColor = () => {
    setBackGroundColor(!backgroundColor);
  };

  return (
    <>
        <NavBar
          backgroundColor={backgroundColor}
          changeBackgroundColor={changeBackgroundColor}
        />
      <Routes>
        <Route
          path="/"
          element={
            <div className={`${backgroundColor ? "bg-navbar" : "bg-white"}}  `}>
              <Home backgroundColor={backgroundColor} setCountry={setCountry} country={country}/>
            </div>
          }
        />
        <Route
          path="/moreInfo"
          element={
            <div className={`${backgroundColor ? "bg-navbar" : "bg-white"}}  `}>
              <MoreInfo  backgroundColor={backgroundColor} country={country} setCountry={setCountry}/>
            </div>
          }
        />
      </Routes>
    
    
    </>
  );
}

export default App;
