import { AppContext } from "../../Context/AppContext";
import React, { useContext, useEffect } from "react";
import "./Results.css";
import {apiRequest} from "../../utils/utils"
import { CardGifo } from "../CardGifo/CardGifo";
const endPoint =
  "https://api.giphy.com/v1/gifs/search?api_key=OBBzzXm9g5kiOcuF9MgaX4zTuCHy1t7j&q=dog&limit=25&offset=0&rating=g&lang=en";
function Results() {
  
  const{stateButton,setStateButton,gifosState,setGifosState}=useContext(AppContext);
useEffect(()=>{
  if(stateButton){
    async function apiGiphyrRequest(){
      try{
        const request = await apiRequest("cat");
        const dataGif = await request.json();
        setGifosState(dataGif.data)
      //  console.log(dataGif.data[0]
      //   );  
      }
      catch(error){
        console.log("nada, paila");
      }
    }
    apiGiphyrRequest();
  }
},[stateButton]);

console.log(gifosState);
function gifosRender(){

  gifosState.map((gifos)=>{
    return(
      <CardGifo
      url={gifos.url}
      id={gifos.id}
     />

    )
  })
  
 
}
  
  return (
    <div className="Results-component">
  {/* {gifosState.length>0?gifosRender:(<p>
    Nothing to show
    </p>)} */}
    </div>
  );
}

export default  Results;
