import { useContext } from "react"
import { AppContext } from "../../Context/AppContext"
import { DarkModeHook } from "../../Darkmode/DarkmodeHook"
import "./AutoComplete styless/AutoComplete.css"

export const Autocomplete=({sugestion})=>{

    const {stateButton,setStateButton,searchState,setSearchState}=useContext(AppContext);

   const onClickACHandler=()=>{
        setStateButton(!stateButton)
        setSearchState(sugestion)
    }
  

    return(
    <div className={DarkModeHook("AutoComplete-Component")} onClick={onClickACHandler}>
        <p className={DarkModeHook('AutoComplete-P')}>{sugestion}</p>

    </div>

    )
}