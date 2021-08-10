import { AppContext } from "../../Context/AppContext";
import React, { useContext, useEffect } from "react";
import "./Results.css";
import { apiRequest } from "../../utils/utils";
import { CardGifo } from "../CardGifo/CardGifo";

function Results() {
  const { stateButton, setStateButton, gifoState, setGifoState,searchState,setSearchState } =
    useContext(AppContext);
  //console.log(gifoState);

  useEffect(() => {
    if (stateButton) {
      async function apiGiphyrRequest() {
        try {
          const request = await apiRequest(searchState);
          const dataGif = await request.json();
          setGifoState(dataGif.data);
          setStateButton(false);
          // console.log(dataGif.data);

          //   );

          if (dataGif.data.length === 0) {
            console.log("paila nea");
          } else {
            console.log("data no es cero");
          }
        } catch (error) {
          console.log("nada, paila");
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
    <div className="Results-component">
      {gifoState.length > 0 ? gifosRender : <p>paila</p>}
    </div>
  );
}

export default Results;
