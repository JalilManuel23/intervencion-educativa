import React from 'react'
import { Videos } from '../../talleres/Videos'
import imagenes from '../../../assets/images';
import audioIntro from "../../../assets/sounds/15_oct.mp3";
import { rutasLavadoNinos } from './rutasLavadoNinos'

export const DiaLavado = () => {
    return (
        <Videos 
            titulo="¿Cuándo es el Día Mundial del Lavado de Manos?"
            texto="El día 15 de Octubre"
            imagen={ imagenes.diaLavado }
            sonido={ audioIntro }
            rutas={ rutasLavadoNinos }
            id={ 5 }
        />
    )
}