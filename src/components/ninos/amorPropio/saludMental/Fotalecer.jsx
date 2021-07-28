import React from 'react';
import { ClasificacionTipos } from '../../../talleres/ClasificacionTipos';
import imagenes from '../../../../assets/images';
import audio from "../../../../assets/sounds/adultos_amor_propio/caras.mp3";
import { rutasAmorPropio } from '../rutasAmorPropio';

export const Fortalecer = () => {

    let opciones = [
        {
            titulo: 'Mantén la calma',
            imagen: imagenes.fisica
        },
        {
            titulo: 'Habla con alguien si te sientes mal',
            imagen:  imagenes.mental
        },
        {
            titulo: 'Juega con amigos cumpliendo las medidas de prevención',
            imagen: imagenes.espiritual
        },
        {
            titulo: 'Ponte en movimiento',
            imagen: imagenes.emocional
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
