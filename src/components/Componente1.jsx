import React from 'react'
export default function Componente1(props) {
  return (
    <div className="Caja1">
            {/* CONTENEDOR PARA IMG */}
            <div className="fotosizq1">
                {/* imagen de la izquierda*/}
                <img src={props.img1} alt="" className="fotosizq2" />
            </div>
            {/* CONTENEDOR PARA TEXTOS */}
            <div className="texto">
                {/*mandamos equipo*/}
                <h1>{props.titulo}</h1>
                <p>{props.texto}</p>
            </div>
            {/* CONTENEDOR PARA IMG */}
            
        </div>
  )
}
