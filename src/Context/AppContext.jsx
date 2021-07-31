import { createContext, useState } from "react";

export const AppContext=createContext();


export function AppProvider(props){
   
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [showGalery,setShowGalery] =useState(false)
   

 return(
     
     <AppContext.Provider value={{isDarkMode,setIsDarkMode}}>
        {props.children}
    </AppContext.Provider>
         )   
}