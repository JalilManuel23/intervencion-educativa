import React from 'react';
import { Presentacion4 } from '../../talleres/Presentacion4';
import imagenes from '../../../assets/images';
import audioIntro from "../../../assets/sounds/adulto_informacion_covid_19.mp3";

export const DiaLavadoManos = () => {
    return (
        <Presentacion4 
            parrafo="La Organización Panamericana de la salud y la Organización Mundial de la Salud invitan a celebrar el 15 de octubre el Día Mundial del Lavado de Manos."
            imagen = {imagenes.diaLavado}   
            enlace="/adultos/lavado-manos/introduccion/tipos-lavado" 
            sonido={ audioIntro }
        />
    )
}