import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

/*This custom hook provides the dark mode to all the App components */
export const DarkModeHook=(classCostumeName)=>{
    const {isDarkMode}=useContext(AppContext);
    return (`${classCostumeName} ${isDarkMode? "dark":"ligth"}`)
}