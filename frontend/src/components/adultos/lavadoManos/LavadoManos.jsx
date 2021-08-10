import React from 'react';
import { Presentacion1 } from '../../talleres/Presentacion1';
import imagenes from '../../../assets/images';
import audioIntro from "../../../assets/sounds/taller_1.mp3";

export const LavadoManos = () => {
    return (
        <Presentacion1 
            titulo="TALLER 1: LAVADO DE MANOS"
            parrafo="Bienvenidos al taller de lavado de manos, aquí aprenderás datos muy interesantes relacionados a esta medida tan importante para prevenir el COVID-19"
            imagen={ imagenes.lavadoManos }
            enlace="/adultos/lavado-manos/opciones"
            sonido={ audioIntro }
        /> 
    )
}
