import "./GifoStyles.css"
export const CardGifo=(props)=>{
    return(
    <div className="CardGifo">
        <img className="GifCardImg" src={props.url} alt ={props.id}/>
    </div>
        );

}