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
       console.log(dataGif.data);  
      }
      catch(error){
        console.log("nada, paila");
      }
    }
    apiGiphyrRequest();
  }
},[stateButton]);

const gifosRender=(gifos)=>{

  
}
  
   
  
    const  onclickButton=()=>{return 1}
  //  console.log(`log of results${stateButton}`);
  // const getGifos = fetch(
  //   api.giphy.com / v1 / gifs / searchOBBzzXm9g5kiOcuF9MgaX4zTuCHy1t7j
  // );
  return (
    <div className="Results-component">
      <p className="Search-Button">Resultados de la busqueda </p> 


  

      
    </div>
  );
}

export default  Results;
