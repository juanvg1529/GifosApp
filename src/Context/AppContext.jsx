import { createContext, useState } from "react";

export const AppContext=createContext();


export function AppProvider(props){
   
    const [isDarkMode, setIsDarkMode] = useState(false);
    const[stateButton,setStateButton]=useState(false);
    const[gifoState,setGifoState]=useState([]);
    // const [search,setSearch]=useState("");
   

 return(
     
     <AppContext.Provider value={{isDarkMode,setIsDarkMode,stateButton,setStateButton,gifoState,setGifoState}}>
        {props.children}
    </AppContext.Provider>
         )   
}