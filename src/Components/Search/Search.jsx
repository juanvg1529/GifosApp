import React, { useContext, useEffect } from "react";
import "./SearchStyles/Search.css";
import "./SearchStyles/DarkSearch.css";
import { AppContext } from "../../Context/AppContext";
import { DarkModeHook } from "../../Darkmode/DarkmodeHook";

export function Search() {
  const {
    isDarkMode,
    stateButton,
    setStateButton,
    searchState,
    setSearchState,
  } = useContext(AppContext);

  //dark mode
  const searchBackground = `Search-component ${isDarkMode ? "dark" : "ligth"}`;
  const SearchBar = `SearchBAR ${isDarkMode ? "dark" : "ligth"}`;
  const searchButton = `Search-button ${isDarkMode ? "dark" : "ligth"}`;
  const searchTitle = `Title-Search ${isDarkMode ? "dark" : "ligth"}`;

  //buton function to implement the search
  const searchButtonFunction = () => {
    setStateButton(!stateButton);
    console.log(stateButton);
  };
  const onChangeSearch = (e) => setSearchState(e.target.value);

  useEffect(
    //trying use effect
    () => {
      console.log("the botton has been clicked");
    },
    [searchButtonFunction]
  );

  const searchKeyPress = (e) => {
    if (e.keyCode === 13) {
      setStateButton(!stateButton);
    }
  };

  return (
    <div className={DarkModeHook("Search-component")}>
      <section className={DarkModeHook("Title-Search")}>
        <h2>
          {" "}
          ¡Inspirate y busca los mejores <b>GIFS </b>!
        </h2>
      </section>
      <section>
        <img
          className="SearchIMG"
          src="https://i.imgur.com/DuCVsVp.png"
          alt="headerIMG"
        />
      </section>
      <section >
        <input
          className={DarkModeHook("SearchBAR")}
          type="search"
          id="gsearch"
          name="gsearch"
          value={searchState}
          placeholder="Busca gifs"
          onChange={onChangeSearch}
          onClick={searchButtonFunction}
          onKeyDown={searchKeyPress}
        ></input>
        <button
          onClick={searchButtonFunction}
          className={DarkModeHook("Search-button")}
        >
          <img src="../../utils/Vector.png" alt="lupa"></img>
        </button>
      </section>
      <section>
        <p className={DarkModeHook("Search-Results")}>Search Results</p>
      </section>
    </div>
  );
}

export default Search;
