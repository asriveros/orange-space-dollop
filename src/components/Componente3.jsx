import React from "react";
import { Card } from "react-bootstrap";

function Componente3(props){
    return(
        <div className="card" style={{ width: "18rem" }}>
            <img src={props.img33} className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text"><h5>{props.titulocard}</h5></p>
                <p>{props.parrafocard}</p>
            </div>
        </div>
    );
}

export default Componente3;
