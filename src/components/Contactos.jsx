import React from "react";
import Componente4 from './Componente4'
import Encabezado from "./Encabezado";
import Componente3 from "./Componente3";
import Componente1 from "./Componente1";
import Componente2 from "./Componente2";

function Contactos() {
    return (
        <div>
            <Encabezado titulo="COSTOS DE INSCRIPCION"></Encabezado>
            <div className="carrouselmodal">
                <div>
                    <Componente3 img33="insti1.jpeg" titulocard="BASICO" parrafocard="descripciondepago" />
                </div>
                <div>
                    <Componente3 img33="insti1.jpeg" titulocard="MEDIO" parrafocard="descripciondepago" />
                </div>
                <div>
                    <Componente3 img33="insti1.jpeg" titulocard="AVANZADO" parrafocard="descripciondepago" />
                </div>
            </div>
            <center>                <Componente2 nombrebotonmm="Requisitos de Inscripcion" titutlomodal="Requisitos" modalbody="Descripcion de Inscripcion" />
            </center>
            <Encabezado titulo="BECAS"></Encabezado>
            <div>
                <center>
                    <div>
                        <Componente1 img1="insti3.jpg" titulo="BECA1" texto="lorem ipsum dolor" />
                    </div>
                    <div>
                        <Componente1 img1="insti3.jpg" titulo="BECA2" texto="lorem ipsum dolor" />
                    </div>
                    <div>
                        <Componente1 img1="insti3.jpg" titulo="BECA3" texto="lorem ipsum dolor" />
                    </div>
                </center>
            </div>
            <div className="carrouselmodal">
                <div>
                    <Componente2 nombrebotonmm="Ayuda Financiera" titutlomodal="Requisitos" modalbody="Descripcion de Ayuda FInancieera" />
                </div>
                <div>
                    <Componente2 nombrebotonmm="Solicitud de Beca" titutlomodal="Requisitos" modalbody="Descripcion de Becass" />
                </div>

            </div>
            <Encabezado titulo="METODOS Y PAGOS"></Encabezado>
            <div className="carrouselmodal">
                <div className='form'>
                    <center>                <Componente2 nombrebotonmm="Confirmacion Pago online" titutlomodal="Requisitos" modalbody="Descripcion de Inscripcion" />
                    </center>
                    <Componente4 nom="Ingresa tu Nombre completo" correo="Registra tu correo electronico" celular="Ingresa tu numero de celular"></Componente4>
                </div>
                <div className='form'>
                    <center>                <Componente2 nombrebotonmm="Confirmacion pago" titutlomodal="Requisitos" modalbody="Descripcion de Inscripcion" />
                    </center>
                    <Componente4 nom="Ingresa tu Nombre completo" correo="Registra tu correo electronico" celular="Ingresa tu numero de celular"></Componente4>
                </div>
                <div className='form'>
                    <center>                <Componente2 nombrebotonmm="Reseervar cita" titutlomodal="Reservar cita" modalbody="Descripcion de Inscripcion" />
                    </center>
                    <Componente4 nom="Ingresa tu Nombre completo" correo="Registra tu correo electronico" celular="Ingresa tu numero de celular"></Componente4>
                </div>
            </div>


        </div>
    );
}

export default Contactos;