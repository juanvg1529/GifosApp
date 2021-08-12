import { AppContext } from "../../Context/AppContext";
import React, { useContext, useEffect } from "react";
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
        } catch (error) {
          setTextInfo("Ups something when wrong, please try again :( ");
        }
      }
      apiGiphyrRequest();
    }
  }, [stateButton]);

  console.log(gifoState);

  const gifosRender = gifoState.map((gifos) => {
    // console.log(gifoState);
    return <CardGifo url={gifos.images.downsized.url} id={gifos.id} />;
  });

  return (
    <div className={DarkModeHook("Results-component")}>
      {gifoState.length > 0 ? gifosRender : <p>{textInfo}</p>}
    </div>
  );
}

export default Results;
