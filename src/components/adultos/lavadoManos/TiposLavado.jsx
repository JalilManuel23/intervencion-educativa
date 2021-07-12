import React from 'react';
import { ClasificacionTipos } from '../../talleres/ClasificacionTipos';
import imagenes from '../../../assets/images';

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
            titulo: 'Lavado quirúrgico',
            imagen: imagenes.quirurgico
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
            enlace="/adultos/lavado-manos/final-intro"
            opciones={ opciones }
        />
    )
}
