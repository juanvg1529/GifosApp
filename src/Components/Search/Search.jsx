import React, { useContext, useEffect } from "react";
import "./SearchStyles/Search.css";
import "./SearchStyles/DarkSearch.css";
import { AppContext } from "../../Context/AppContext";
import { DarkModeHook } from "../../Darkmode/DarkmodeHook";
import { apiSugest } from "../../utils/utils";
import { Autocomplete } from "../Autocomplete/Autocomplete";

export function Search() {
  const {
    stateButton,
    setStateButton,
    searchState,
    setSearchState,
    gifSugestion,
    setGifsugestion,
  } = useContext(AppContext);

  useEffect(() => {
    //Here the app request the data from the API to render the sugestions
    if (searchState.length > 0) {
      async function apiSugestRender() {
        const apiSugestion = await apiSugest(searchState);
        const dataSugest = await apiSugestion.json();
        setGifsugestion(dataSugest.data);
      }
      apiSugestRender();
    }
  }, [searchState]);

  //buton function to implement the search
  const searchButtonFunction = () => {
    setStateButton(!stateButton);
  };
  const onChangeSearch = (e) => setSearchState(e.target.value); //this handler gets the input data

  //event handler to press the key enter
  const searchKeyPress = (e) => {
    if (e.keyCode === 13) {
      setStateButton(!stateButton);
    }
  };
  const onblurHandler = () => {
    //This function erease after 300ms the content on the input
    setTimeout(() => {
      setSearchState([]);
    }, 300);
  };

  const gifosSugestionsRender = gifSugestion.map((sugest) => {
    //Here the autocomplete its being render
    if (gifSugestion.length > 0 && stateButton) {
      setGifsugestion([]);
    }
    return (
      <div>
        <Autocomplete
          sugestion={sugest.name}
          key={sugest.analytics_response_payload}
        />
      </div>
    );
  });

  return (
    <div className={DarkModeHook("Search-component")}>
      <section className={DarkModeHook("Title-Search")}>
        <h2>
          {" "}
          {"Inspire yourself & search for the bes"} <b>GIFS </b>!
        </h2>
      </section>
      <section>
        <img
          className="SearchIMG"
          src="https://i.imgur.com/DuCVsVp.png"
          alt="headerIMG"
        />
      </section>
      <section className={"form"}>
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
          autoComplete="off"
          onBlur={onblurHandler}
        ></input>

        <button
          onClick={searchButtonFunction}
          className={DarkModeHook("Search-button")}
        >
          <img src="../../utils/Vector.png" alt="lupa"></img>
        </button>
      </section>
      <section>{gifosSugestionsRender}</section>
      <section>
        <p className={DarkModeHook("Search-Results")}>Search Results</p>
      </section>
    </div>
  );
}

export default Search;
