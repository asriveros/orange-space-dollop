import React from "react";
import Componente1 from "./Componente1";
import Componente2 from "./Componente2";
import Componente3 from "./Componente3";
import Componente4 from "./Componente4";
import { Modal } from "react-bootstrap";
import Encabezado from "./Encabezado";
import Footer1 from "../layouts/Footer";

function Menu(){
    return(
        <div>
            <div>
                <Encabezado titulo="PROGRAMAS"/>
                <div className="carrouselmodal">
                    <div className="carrouselmodal">
                        <div>
                        <Componente3 titulocard="Prof. Marco Alvarez" parrafocard="Director del Instituto"></Componente3>
                        </div>
                        <div>
                        <Componente3 titulocard="Prof. Marco Alvarez" parrafocard="Director del Instituto"></Componente3>
                        </div>
                        <div>
                        <Componente3 titulocard="Prof. Marco Alvarez" parrafocard="Director del Instituto"></Componente3>
                        </div>
                        <div>
                        <Componente3 titulocard="Prof. Marco Alvarez" parrafocard="Director del Instituto"></Componente3>
                        </div>
                        <div>
                        <Componente3 titulocard="Prof. Marco Alvarez" parrafocard="Director del Instituto"></Componente3>
                        </div>s
                        
                    </div>
                <div>
                <div className='form'>
                    <Componente4 nom = "Ingresa tu Nombre completo" correo="Registra tu correo electronico" celular="Ingresa tu numero de celular"></Componente4>
                </div> 
            </div>
                </div>
            </div>

            <Encabezado titulo="CURSOS"/>
            
        </div>
    );
}

export default Menu;