import React, { useContext } from "react";
import "./Search.css";
import {AppContext} from "../../Context/AppContext"

function Search() {
  const {isDarkMode,SetIsDarkMode}=useContext(AppContext);
   

  return (
    <div className="Search-component">
      <section className="Search-Title">
        <h2 className="Title-Searrc"> ¡Inspirate y busca los mejores GIFS!</h2>
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
          className="SearchBAR"
          type="search"
          id="gsearch"
          name="gsearch"
        ></input>
        <button>
          <img src="../../../public/utils/Vector.png" alt="lupa"></img>
        </button>
      </section>
    </div>
  );
}

export default Search;
