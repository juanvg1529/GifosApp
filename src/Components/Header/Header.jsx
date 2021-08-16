import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import "./StylesHeader/Header.css";
import "./StylesHeader/DarkHeader.css";
import { DarkModeHook } from "../../Darkmode/DarkmodeHook";

export function Header() {
  const { isDarkMode, setIsDarkMode } = useContext(AppContext);

  const setTheme = (e) => {
    //handler of the darkmode
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className={DarkModeHook("Header")}>
      <section className="Header-Title">
        <img src="https://i.imgur.com/eaDMM8T.png" alt="logo"></img>
        <span className={DarkModeHook("Gifos-logo-name")}> GIFOS</span>
      </section>
      <button onClick={setTheme} className={DarkModeHook("Header-Button")}>
        MODO {isDarkMode ? "LIGHT" : "DARK"}{/*This conditional renders the darkmode */}
      </button>
    </header>
  );
}
export default Header;
