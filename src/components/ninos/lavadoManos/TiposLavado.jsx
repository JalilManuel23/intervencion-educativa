import React from 'react';
import { ClasificacionTipos } from '../../talleres/ClasificacionTipos';
import imagenes from '../../../assets/images';

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
        />
    )
}
