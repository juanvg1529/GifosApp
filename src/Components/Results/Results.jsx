import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import "./Results.css";

const endpoint=  "https://api.giphy.com/v1/gifs/search?api_key=OBBzzXm9g5kiOcuF9MgaX4zTuCHy1t7j&q=dog&limit=25&offset=0&rating=g&lang=en";

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
      <button onClick={onclickButton} className="Search-Button"> Resultados de la busqueda </button>
    
    </div>
  );
}

export default Search;
