import { createContext, useState } from "react";

export const AppContext=createContext();


export function AppProvider(props){
   
    const [isDarkMode, setIsDarkMode] = useState(false);
    const[stateButton,setStateButton]=useState(false);
    const[gifoState,setGifoState]=useState([]);
    const [searchState,setSearchState]=useState("");
    const [textInfo,setTextInfo]=useState("Do some gif search!");
    const [gifSugestion,setGifsugestion]=useState([]);
   

 return(
     
     <AppContext.Provider value={{isDarkMode,setIsDarkMode,stateButton,setStateButton,gifoState,setGifoState,searchState,setSearchState,textInfo,setTextInfo,gifSugestion,setGifsugestion}}>
        {props.children}
    </AppContext.Provider>
         )   
}