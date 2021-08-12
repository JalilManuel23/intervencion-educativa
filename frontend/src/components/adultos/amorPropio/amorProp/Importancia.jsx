import React from 'react';
import { Videos } from '../../../talleres/Videos';
import audio from "../../../../assets/sounds/adultos_amor_propio/video_3.mp3";
import { rutasAmorPropio } from '../rutasAmorPropio'
import imagenes from '../../../../assets/images';

export const Importancia = () => {
    return (
        <Videos 
            titulo="¿Por qué es tan importante tener mucho amor propio?"
            imagen={ imagenes.feliz }
            enlace="/adultos/amor-propio/videos/importancia"
            sonido={ audio }
            fuente="https://lh3.googleusercontent.com/ygBW3n8qpodep4_gZQTDQmvdTfwZmdZlAe1A578l03n0D75scOcZEdn34pFIi_6He0Ql4A=s85"
            rutas={ rutasAmorPropio }
            id={ 9 }
        />
    )
}
