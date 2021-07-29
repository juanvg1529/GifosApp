import React, { useContext} from "react";
import { AppContext } from "../../Context/AppContext";
import "./StylesHeader/Header.css";
import "./StylesHeader/DarkHeader.css"

export function Header() {
  const {isDarkMode, setIsDarkMode} = useContext(AppContext);

 const setTheme=(e)=>{
   setIsDarkMode(!isDarkMode)
 }


 const headerBackground=`Header ${isDarkMode?"dark":"ligth"}`;
 const headerGifos=`Gifos-logo-name ${isDarkMode? "dark":"ligth"}`
 const headerButton=`Header-Button ${isDarkMode? "dark":"ligth"}`
  //${isDarkMode ? "dark" : "light"}
  return (
    <header className={headerBackground}>
      <section className="Header-Title">
        <img src="https://i.imgur.com/eaDMM8T.png" alt="logo"></img>
        <span className={headerGifos}> GIFOS</span>
      </section>
      <button onClick={setTheme} className={headerButton}>
        MODO {isDarkMode ? "LIGHT" : "DARK"}
      </button>
    </header>
  );
}
export default Header;
