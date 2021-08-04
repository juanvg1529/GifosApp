import { AppContext } from "../../Context/AppContext";
import React, { useContext } from "react";
import "./Results.css";
import {endpoint} from "../../utils/utils"
import { CardGifo } from "../CardGifo/CardGifo";

function Search() {

  async function renderGiphos(){
    try{
      const request =await fetch(endpoint);
      const app=document.getElementById("root");
      const json=await request.json();
      json.data.array.forEach((gif) => {
        const image= document.createElement("img");
        image.src=gif.image.fixed_height.url;
        app.appendChild(image)
        
      });
    }
    catch(error){
      console.log("nada, paila");
    }
  }
  const {showGalery,setShowGalery} =useContext(AppContext)
  const onclickButton=()=>{return 1}
   
  // const getGifos = fetch(
  //   api.giphy.com / v1 / gifs / searchOBBzzXm9g5kiOcuF9MgaX4zTuCHy1t7j
  // );
  return (
    <div className="Results-component">
      <p className="Search-Button">Resultados de la busqueda </p> 
      <CardGifo
           
      />
    </div>
  );
}

export default Search;
