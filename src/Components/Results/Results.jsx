import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import "./Results.css";

function Search() {

  const {showGalery,setShowGalery} =useContext(AppContext)
  const onclickButton=()=>{return 1}
   
  // const getGifos = fetch(
  //   api.giphy.com / v1 / gifs / searchOBBzzXm9g5kiOcuF9MgaX4zTuCHy1t7j
  // );
  return (
    <div className="Results-component">
      <section className="Search-Title"></section>
      <button onClick={onclickButton} className="Search-Button"> Resultados de la busqueda </button>
    </div>
  );
}

export default Search;
