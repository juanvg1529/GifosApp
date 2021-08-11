import { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";

export const darkMode=(nameComponent,isDarkMode)=>{

   
    const darkName=(`${nameComponent} ${isDarkMode? "dark":"ligth"}  `);
    
  return darkName;
}