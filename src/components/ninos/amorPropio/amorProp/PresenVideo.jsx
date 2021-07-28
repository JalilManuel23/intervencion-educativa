import React from 'react';
import { Videos } from '../../../talleres/Videos';
import audio from "../../../../assets/sounds/adultos_amor_propio/video_3.mp3";
import { rutasAmorPropio } from '../rutasAmorPropio'

export const PresenVideo = () => {
    return (
        <Videos 
            titulo="En tiempos de pandemia, nuestro amor propio debe aumentar"
            texto="Veamos un video para descubrir su valor"
            enlace="/ninos/amor-propio/videos/importancia"
            sonido={ audio }
            rutas={ rutasAmorPropio }
            id={ 7 }
        />
    )
}
