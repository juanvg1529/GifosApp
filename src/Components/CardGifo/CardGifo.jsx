import "./GifoStyles/GifoStyles.css";
export const CardGifo = (props) => {
  return (
    <div className="CardGifo">
      <a href={props.urlGiphy} target="blank">
        <img className="GifCardImg" src={props.url} alt={props.id} />
      </a>
    </div>
  );
};
