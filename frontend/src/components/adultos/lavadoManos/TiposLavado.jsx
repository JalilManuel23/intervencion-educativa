import React from 'react';
import { ClasificacionTipos } from '../../talleres/ClasificacionTipos';
import imagenes from '../../../assets/images';
import audioIntro from "../../../assets/sounds/tipos_lavado-ninos.mp3";

export const TiposLavado = () => {

    let opciones = [
        {
            titulo: 'Lavado higiénico o social',
            imagen: imagenes.lavManos
        },
        {
            titulo: 'Lavado clínico o antiséptico',
            imagen:  imagenes.clinico
        },
        {
            titulo: 'Lavado con alcohol en gel',
            imagen: imagenes.gel
        },
    ]

    return (
        <ClasificacionTipos 
            titulo="Existen diferentes tipos de lavado de manos, sus nombre son:"
            imagenes={ imagenes }
            enlace="/adultos/lavado-manos/introduccion/final-intro"
            opciones={ opciones }
            sonido={ audioIntro }
        />
    )
}
