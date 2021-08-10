import React from 'react';
import { ClasificacionTipos } from '../../../talleres/ClasificacionTipos';
import imagenes from '../../../../assets/images';
import audio from "../../../../assets/sounds/actividades.mp3";
import { rutasAmorPropio } from '../rutasAmorPropio';

export const Fortalecer = () => {

    let opciones = [
        {
            titulo: 'Mantén la calma',
            imagen: imagenes.calma
        },
        {
            titulo: 'Habla con alguien si te sientes mal',
            imagen:  imagenes.hablar
        },
        {
            titulo: 'Juega con amigos cumpliendo las medidas de prevención',
            imagen: imagenes.juego
        },
        {
            titulo: 'Ponte en movimiento',
            imagen: imagenes.movimiento
        },
    ]

    return (
        <ClasificacionTipos 
            titulo="Estas son algunas cosas que puedes hacer para fortalecer tu salud mental:"
            imagenes={ imagenes }
            opciones={ opciones }
            sonido={ audio }
            id={ 4 }
            rutas={ rutasAmorPropio }
        />
    )
}
