import React, { useContext } from "react";
import "./Search.css";
import "./DarkSearch.css"
import {AppContext} from "../../Context/AppContext"

function Search() {
  const {isDarkMode,SetIsDarkMode}=useContext(AppContext);
  const searchBackground=`Search-component ${isDarkMode?"dark":"ligth"}`;
  const SearchBar=`SearchBAR ${isDarkMode?"dark":"ligth"}`;
  const searchButton=`Search-button ${isDarkMode?"dark":"ligth"}`;
  const searchTitle=`Title-Search ${isDarkMode?"dark":"ligth"}`;
  

  return (
    <div className={searchBackground}>
      <section className={searchTitle}>
        <h2 > ¡Inspirate y busca los mejores <b>GIFS </b>!</h2>
      </section>
      <section>
        <img
          className="SearchIMG"
          src="https://i.imgur.com/DuCVsVp.png"
          alt="headerIMG"
        />
      </section>
      <section className=" ">
        <input
          className={SearchBar}
          type="search"
          id="gsearch"
          name="gsearch"
          placeholder= "Busca gifs"
        ></input>
        <button
        className={searchButton}>
          <img src="../../utils/Vector.png" alt="lupa"></img>
        </button>
      </section>
    </div>
  );
}

export default Search;
