import React from 'react';
import { ClasificacionTipos } from '../../talleres/ClasificacionTipos';
import imagenes from '../../../assets/images';
import audioIntro from "../../../assets/sounds/tipos_lavado-ninos.mp3";
import { rutasLavadoNinos } from './rutasLavadoNinos';

export const TiposLavado = () => {

    let opciones = [
        {
            titulo: 'Lavado higiénico o social',
            imagen: imagenes.lavadoDeManosDos
        },
        {
            titulo: 'Lavado clínico o antiséptico',
            imagen:  imagenes.clinicoNinos
        },
        {
            titulo: 'Lavado con alcohol en gel',
            imagen: imagenes.gelNinos
        },
    ]

    return (
        <ClasificacionTipos 
            titulo="Existen diferentes tipos de lavado de manos, sus nombre son:"
            imagenes={ imagenes }
            enlace="/ninos/lavado-manos/introduccion/final-intro"
            opciones={ opciones }
            sonido={ audioIntro }
            rutas={ rutasLavadoNinos }
            id={ 5 }
        />
    )
}
