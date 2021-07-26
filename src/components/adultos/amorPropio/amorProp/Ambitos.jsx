import React from 'react';
import { ClasificacionTipos } from '../../../talleres/ClasificacionTipos';
import imagenes from '../../../../assets/images';
import audio from "../../../../assets/sounds/adultos_amor_propio/caras.mp3";
import { rutasAmorPropio } from '../rutasAmorPropio';

export const Ambitos = () => {

    let opciones = [
        {
            titulo: 'Física: Cuidar nuestro cuerpo es fundamental para preservar y fortalecer nuestra capacidad de vivir',
            imagen: imagenes.fisica
        },
        {
            titulo: 'Mental: Se basa en la exploración y adquisición de nuevos conocimientos',
            imagen:  imagenes.mental
        },
        {
            titulo: 'Espiritual: Está relacionada con nuestros valores personales y se fortalece con tiempo de meditación',
            imagen: imagenes.espiritual
        },
        {
            titulo: 'Emocional/social: Cuidar las relaciones con los demás resulta vital para reforzar el liderazgo interpersonal',
            imagen: imagenes.emocional
        },
    ]

    return (
        <ClasificacionTipos 
            titulo="Todas estas caras son importantes para mejorar el amor propio:"
            imagenes={ imagenes }
            opciones={ opciones }
            sonido={ audio }
            id={ 8 }
            rutas={ rutasAmorPropio }
        />
    )
}
