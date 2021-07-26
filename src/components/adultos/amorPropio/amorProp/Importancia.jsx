import React from 'react';
import { Videos } from '../../../talleres/Videos';
import audio from "../../../../assets/sounds/adultos_amor_propio/video_3.mp3";
import { rutasAmorPropio } from '../rutasAmorPropio'

export const Importancia = () => {
    return (
        <Videos 
            titulo="¿Por qué es tan importante tener mucho amor propio?"
            texto="Descúbrelo en el siguiente video:"
            enlace="/adultos/amor-propio/videos/importancia"
            sonido={ audio }
            rutas={ rutasAmorPropio }
            id={ 9 }
        />
    )
}
