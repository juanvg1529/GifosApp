import { useContext } from "react"
import { AppContext } from "../../../Context/AppContext";

import { DarkModeHook } from "../../../Darkmode/DarkmodeHook"
import "./Styles/AutoComplete.css"

export const Autocomplete=({sugestion})=>{

    const {stateButton,setStateButton,setSearchState}=useContext(AppContext);

   const onClickACHandler=()=>{//Event handler for the autocomplete selection
        setStateButton(!stateButton)
        setSearchState(sugestion)
    }
  

    return(
    <div className={DarkModeHook("AutoComplete-Component")} onClick={onClickACHandler} >
        <p className={DarkModeHook('AutoComplete-P')}>{sugestion}</p>

    </div>

    )
}