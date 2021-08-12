import React from 'react';
import { Videos } from '../../../talleres/Videos';
import audio from "../../../../assets/sounds/adultos_amor_propio/video_2.mp3";
import imagenes from "../../../../assets/images";
import { rutasAmorPropio } from '../rutasAmorPropio'

export const DescubreAmbitos = () => {
    return (
        <Videos 
            titulo="El amor propio puede separarse en 4 ámbitos"
            texto="Descubre cuáles son a continuación"
            enlace="/adultos/amor-propio/videos/como-cuidar-salud-mental"
            imagen={ imagenes.duda }
            sonido={ audio }
            rutas={ rutasAmorPropio }
            fuente="https://lh3.googleusercontent.com/aDqZ09r5ko7UVG932jhy8dgcKQyufTWM7fg9lgbGeNxKtWqsMLvRfL2jLA3WTEsr31fW0Q=s85"
            id={ 7 }
        />
    )
}
