import React from 'react'
import { Videos } from '../../talleres/Videos'
import imagenes from '../../../assets/images';
import audioIntro from "../../../assets/sounds/adulto_informacion_covid_19.mp3";

export const DiaLavado = () => {
    return (
        <Videos 
            titulo="¿Cuándo es el Día Mundial del Lavado de Manos?"
            texto="El día 15 de Octubre"
            enlace="/ninos/lavado-manos/videos/dia-lavado-manos"
            imagen={ imagenes.diaLavado }
            sonido={ audioIntro }
        />
    )
}