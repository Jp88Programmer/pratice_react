import React from "react";
import "../css/card.css";
const Card = (props) => {
  // console.log(props)
  return (
    // <div>Card</div>
    <>
      <div className="card cards" style={{ width: "18rem" }}>
        <img src={props.country.flags.png} className="card-img-top" alt="..." />
        <div className="card-body">      
          <h5 className="card-title">{props.country.name.common}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Population : {props.country.population}
          </li>
        </ul>
        <div className="card-body">
          <a
            href={props.country.maps.googleMaps}
            className="card-link"
            target="_blank"
          >
            G_Map
          </a>
          <a
            href={props.country.maps.openStreetMaps}
            className="card-link"
            target="_blank"
          >
            OS_Maps
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
