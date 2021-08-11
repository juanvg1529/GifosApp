import { useContext } from "react";
import { AppContext } from "../Context/AppContext";


export const DarkModeHook=(classCostumeName)=>{
    const {isDarkMode}=useContext(AppContext);
    return (`${classCostumeName} ${isDarkMode? "dark":"ligth"}`)
}