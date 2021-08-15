import { AppContext } from "../../Context/AppContext";
import React, { useContext, useEffect, useState } from "react";
import "./Results.css";
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
  //console.log(gifoState);

  //useEffecto to get the API endpoint
  useEffect(() => {
    if (stateButton) {
      setTextInfo("Loading...");
      async function apiGiphyrRequest() {
        try {

          const request = await apiRequest(searchState);
          const dataGif = await request.json();
          setGifoState(dataGif.data);
          setStateButton(false);

          if (dataGif.data.length === 0) {
            setTextInfo(`sorry we can't find ${searchState}`);
          }
          if(dataGif.data.length> 0){
            setTextInfo("Loading")
          }
        } catch (error) {
          setTextInfo("Ups something when wrong, please try again :( ");
        }
      }
      apiGiphyrRequest();
    }
  }, [stateButton]);//it gets the endpoint only when the button is press

  console.log(gifoState);

  const gifosRender = gifoState.map((gifos) => {//Here the gifos are render using the CardGifo Comp
    // console.log(gifoState);
    return <CardGifo url={gifos.images.downsized.url} id={gifos.id} />;
  });

  return (
    <div className={DarkModeHook("Results-component")}>
    {/*Here i isded the ternary operator to render the gifo in the app */}
      {gifoState.length > 0 ? gifosRender : <p className={DarkModeHook("Text-info")}>{textInfo}</p> } 
    </div>
  );
}

export default Results;
