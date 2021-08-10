import { createContext, useState } from "react";

export const AppContext=createContext();


export function AppProvider(props){
   
    const [isDarkMode, setIsDarkMode] = useState(false);
    const[stateButton,setStateButton]=useState(false);
    const[gifoState,setGifoState]=useState([]);
    const [searchState,setSearchState]=useState("");
   

 return(
     
     <AppContext.Provider value={{isDarkMode,setIsDarkMode,stateButton,setStateButton,gifoState,setGifoState,searchState,setSearchState}}>
        {props.children}
    </AppContext.Provider>
         )   
}