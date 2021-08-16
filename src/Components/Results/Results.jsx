import { AppContext } from "../../Context/AppContext";
import React, { useContext, useEffect } from "react";
import "./ResultsStyles/Results.css";
import { apiRequest } from "../../utils/utils";
import { CardGifo } from "../CardGifo/CardGifo";
import { DarkModeHook } from "../../Darkmode/DarkmodeHook";

function Results() {
  const {
    stateButton,
    setStateButton,
    gifoState,
    setGifoState,
    searchState,
    textInfo,
    setTextInfo,
  } = useContext(AppContext);

  //useEffecto to get the API endpoint
  useEffect(() => {
    if (stateButton) {
      async function apiGiphyrRequest() {
        try {
          setTextInfo("Loading...");
          const request = await apiRequest(searchState);
          const dataGif = await request.json();
          setGifoState(dataGif.data);
          setStateButton(false);
          if (dataGif.data.length === 0) {
            setTextInfo(`Sorry we couldn't find ${searchState} :C`);
          }
          if (dataGif.data.length > 0) {
            setTextInfo("Loading");
          }
        } catch (error) {
          setTextInfo("Ups something when wrong, please try again :( ");
        }
      }
      apiGiphyrRequest();
    }
  }); //it gets the endpoint only when the button is press

  const gifosRender = gifoState.map((gifos) => {
    //Here the gifos are render using the CardGifo Comp

    return (
      <div key={gifos.id}>
        <CardGifo
          url={gifos.images.downsized.url}
          id={gifos.images.slug}
          urlGiphy={gifos.url}
        />
      </div>
    );
  });

  return (
    <div className={DarkModeHook("Results-component")}>
      {/*Here i isded the ternary operator to render the gifo in the app */}
      {gifoState.length > 0 ? (
        gifosRender
      ) : (
        <p className={DarkModeHook("Text-info")}>{textInfo}</p>
      )}
    </div>
  );
}

export default Results;
