import React from 'react';
import { Presentacion2 } from '../../talleres/Presentacion2';
import imagenes from '../../../assets/images';
import audioIntro from "../../../assets/sounds/dia_mundial.mp3";
import './estilos-lavado-manos.css'
import { rutasLavadoAdultos } from './rutasLavadoAdultos'

export const DiaLavadoManos = () => {
    return (
        <Presentacion2 
            imagen={ imagenes.omsOps }
            parrafo1= "La Organización Panamericana de la salud y la Organización Mundial de la Salud invitan a celebrar el 15 de octubre el Día Mundial del Lavado de Manos."
            parrafo2 = " "
            sonido={ audioIntro }
            rutas={ rutasLavadoAdultos }
            id={ 5 }
        />
    )
}