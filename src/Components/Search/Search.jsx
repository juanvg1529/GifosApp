import React, { useContext, useEffect } from "react";
import "./Search.css";
import "./DarkSearch.css"
import {AppContext} from "../../Context/AppContext"

export function Search() {
  const {isDarkMode,stateButton,setStateButton}=useContext(AppContext);

  //dark mode
  const searchBackground=`Search-component ${isDarkMode?"dark":"ligth"}`;
  const SearchBar=`SearchBAR ${isDarkMode?"dark":"ligth"}`;
  const searchButton=`Search-button ${isDarkMode?"dark":"ligth"}`;
  const searchTitle=`Title-Search ${isDarkMode?"dark":"ligth"}`;
  
  
    //buton function to implement the search
  const searchButtonFunction=()=>{
    setStateButton(!stateButton)
    console.log(stateButton);
    
  };

  useEffect( //trying use effect
   ()=>{
    console.log("the botton has been clicked");
   },[searchButtonFunction]

  );
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
        onClick={searchButtonFunction}
        className={searchButton}>
          <img src="../../utils/Vector.png" alt="lupa"></img>
        </button>
      </section>
    </div>
  );
}

export default Search;
