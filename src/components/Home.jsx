import React from "react";
import Componente1 from "./Componente1";
import Componente2 from "./Componente2";
import Componente3 from "./Componente3";
import Componente4 from "./Componente4";
import { Modal } from "react-bootstrap";
import Encabezado from "./Encabezado";
import Footer1 from "../layouts/Footer";

function Home(){
    return(
        <div>
            <div className="inicio1">
            <center>
            <Componente1 img1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-2zWjA-uGMJN8kyQqtKqjLF94cM3fLxF9yQ&s" titulo1="IMAGEN1" parrafo1="PARRAFO1" 
        img2="https://images.app.goo.gl/Bk4v9AuEJZrtqHvS8" titulo2="IMAGEN2" parrafo2="PARRAFO2"
        img3="" titulo3="IMAGEN3" parrafo3="PARRAFO3"
        />
        <p></p>
            </center>
            <Encabezado titulo="HISTORIA DEL INSTITUTO"/>
            <div className="carrouselmodal">
                <div>
                <Componente1 img1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-2zWjA-uGMJN8kyQqtKqjLF94cM3fLxF9yQ&s" titulo="FUNDACION" texto="Fundado en 1972" />
                </div>
                <div>
                    <Componente2 nombrebotonmm="Ver mas detalles de la fundacion" titulomodal="Fundacion"
                    modalbody="HISTORIA DE FUNDACION"
                    />
                </div>
            </div>
            <div className="carrouselmodal">
                <div>
                <Componente1 img1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-2zWjA-uGMJN8kyQqtKqjLF94cM3fLxF9yQ&s" titulo="VISION" texto="Dios, Patria y Familia" />
                </div>
                <div>
                    <Componente2 nombrebotonmm="Ver mas detalles de la vision" titulomodal="VISION"
                    modalbody="Nuestra Vision"
                    />
                </div>
            </div>
\            <div className="carrouselmodal">
                <div>
                <Componente1 img1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-2zWjA-uGMJN8kyQqtKqjLF94cM3fLxF9yQ&s" titulo="Mision" texto="Nuestra mision como instituto" />
                </div>
                <div>
                    <Componente2 nombrebotonmm="Ver mas detalles de la mision" titulomodal="MISION"
                    modalbody="NUESTRA MISION"
                    />
                </div>
            </div>
            <Encabezado titulo="EQUIPO"/>
            <div className="carrouselmodal">
                <div>
                    <Componente3 img33="director1.jpeg" titulocard="Msc. Soobin Skultetty" parrafocard="Director del Instituto"></Componente3>
                </div>
                <div>
                    <Componente3 img33="director2.jpeg" titulocard="Msc. Kaleb Sologurem" parrafocard="Director del Instituto"></Componente3>
                </div>
            </div>
            <div className="carrouselmodal">
                <div>
                    <Componente3 img33="asesor2.jpeg" titulocard="Prof. Rosseane Park" parrafocard="Directora de Orquesta"></Componente3>
                </div>
                <div>
                    <Componente3 img33="asesor1.jpeg" titulocard="Prof. Lisa Monaban" parrafocard="Directora de instrumentos de viento"></Componente3>
                </div>
                <div>
                    <Componente3 img33="asesor3.jpeg" titulocard="Prof. Jennie Kim" parrafocard="Directora de instrumentos de cuerda"></Componente3>
                </div>
            </div>
            <h5>Quieres unirte a nuestro equipo?</h5>
            <div className="carrouselmodal">
                <div>
                <div className='form'>
                    <Componente4 nom = "Ingresa tu Nombre completo" correo="Registra tu correo electronico" celular="Carga tu curriculum online"></Componente4>
                </div>
                </div>
                <div>
                <Componente2 nombrebotonmm="Consulta los requisitos que debes cumplir" titulomodal="REQUISITOS" modalbody="DAR DETALLES DE REQUISITOSSS"/>
                </div>
                
            </div>
            <Encabezado titulo="REGISTRARSE/PEDIR CITA/COMENTARIOS/INFORMACION"/>
            <div className="carrouselmodal">
                <div className='form'>
                    <center>                <Componente2 nombrebotonmm="Registrarse" titutlomodal="Requisitos" modalbody="Descripcion de Inscripcion" />
                    </center>
                    <Componente4 nom="Ingresa tu Nombre completo" correo="Registra tu correo electronico" celular="Ingresa tu numero de celular"></Componente4>
                </div>
                <div className='form'>
                    <center>                <Componente2 nombrebotonmm="Solicitar Informacion" titutlomodal="Requisitos" modalbody="Descripcion de Inscripcion" />
                    </center>
                    <Componente4 nom="Ingresa tu Nombre completo" correo="Registra tu correo electronico" celular="Ingresa tu numero de celular"></Componente4>
                </div>
                <div className='form'>
                    <center>                <Componente2 nombrebotonmm="Reseervar cita" titutlomodal="Reservar cita" modalbody="Descripcion de Inscripcion" />
                    </center>
                    <Componente4 nom="Ingresa tu Nombre completo" correo="Registra tu correo electronico" celular="Ingresa tu numero de celular"></Componente4>
                </div>
                <div className='form'>
                    <center>                <Componente2 nombrebotonmm="Reportar" titutlomodal="Reservar cita" modalbody="Descripcion de Inscripcion" />
                    </center>
                    <Componente4 nom="Ingresa tu Nombre completo" correo="Registra tu correo electronico" celular="Ingresa tu numero de celular"></Componente4>
                </div>
            </div>
        </div>
        <div>
            <Footer1></Footer1>
        </div>
        </div>
    );
}

export default Home;