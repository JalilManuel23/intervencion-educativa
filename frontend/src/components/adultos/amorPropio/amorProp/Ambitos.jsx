import React from 'react';
import { ClasificacionTipos } from '../../../talleres/ClasificacionTipos';
import imagenes from '../../../../assets/images';
import audio from "../../../../assets/sounds/adultos_amor_propio/caras.mp3";
import { rutasAmorPropio } from '../rutasAmorPropio';

export const Ambitos = () => {

    let opciones = [
        {
            titulo: 'Física: Cuidar nuestro cuerpo es fundamental para preservar y fortalecer nuestra capacidad de vivir',
            imagen: imagenes.fisica,
            fuente: 'https://lh3.googleusercontent.com/AXem4kKyeqj2uIRqVxLFEFLbnMpDGnYTaoEy1A4mvEmsVczQdzlgOenj6IHZ6wXGLmLZwg=s85'
        },
        {
            titulo: 'Mental: Se basa en la exploración y adquisición de nuevos conocimientos',
            imagen:  imagenes.mental,
            fuente: 'https://lh3.googleusercontent.com/krYbtaz5VfonjCVaw5XgBhdHGq-tNkcurEXVN9jqk2QR8xKCuJFioWq52faIJTbN8F2B=s85'
        },
        {
            titulo: 'Espiritual: Está relacionada con nuestros valores personales y se fortalece con tiempo de meditación',
            imagen: imagenes.espiritual,
            fuente: 'https://lh3.googleusercontent.com/PXfFoSnpORayOnzRPz-pZQc7sYadNo3Oknyw2cMDWet7uQ0968uRzAuEU2Sf8p-Kdr-Wsw=s85'
        },
        {
            titulo: 'Emocional/social: Cuidar las relaciones con los demás resulta vital para reforzar el liderazgo interpersonal',
            imagen: imagenes.emocional,
            fuente: 'https://lh3.googleusercontent.com/0W2UpnSWZZxcMGxE_yy-dKG8IQZ7vEFS-oJ9eIih5mnM1zLjvFslBSRayZeBYH-Vccb4UbY=s85'
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
