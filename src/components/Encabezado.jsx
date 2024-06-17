import React from "react";

function Encabezado(props){
    return(
        <div className="encabezado">
            <h3>{props.titulo}</h3>
        </div>
    );
}
export default Encabezado;