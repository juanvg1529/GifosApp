import { AppContext } from "../../Context/AppContext";
import React, { useContext, useEffect } from "react";
import "./Results.css";
import {apiRequest} from "../../utils/utils"
import { CardGifo } from "../CardGifo/CardGifo";
const endPoint =
  "https://api.giphy.com/v1/gifs/search?api_key=OBBzzXm9g5kiOcuF9MgaX4zTuCHy1t7j&q=dog&limit=25&offset=0&rating=g&lang=en";
function Results() {

  const{stateButton,setStateButton,gifoState,setGifoState}=useContext(AppContext);
  console.log(gifoState);

useEffect(()=>{
  if(stateButton){
    async function apiGiphyrRequest(){
      try{
        const request = await apiRequest("cat");
        const dataGif = await request.json();
        setGifoState(dataGif.data);
        setStateButton(false);
        console.log(dataGif.data);
        console.log(gifoState);

      //   );

      if(dataGif.data===0){
        console.log('paila nea');
      }else{
        console.log('holi');
      }
      }
      catch(error){
        console.log("nada, paila");
      }
    }
    apiGiphyrRequest();
  }
},[stateButton]);



// const gifosRender=()=>{

//   gifosState.map((gifos)=>{
//     console.log(gifosState);
//     return(

//       <CardGifo
//       url={gifos.url}
//       id={gifos.id}
//      />

//     )
//   })


// }
  function FinallyRender(){

  }
  return (
    <div className="Results-component">
      {/* {gifosState.length>0? 
      (
        gifosState.map((props)=>{
          <CardGifo
          url={props.url}
          id={props.id}
          />
        })
      ):<p>Nothing to show</p>} */}
    </div>
  );
}

export default  Results;
