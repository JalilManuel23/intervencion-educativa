import React from 'react';
import { Videos } from '../../../talleres/Videos';
import audio from "../../../../assets/sounds/en-tiempos.mp3";
import { rutasAmorPropio } from '../rutasAmorPropio'
import imagenes from '../../../../assets/images';

export const PresenVideo = () => {
    return (
        <Videos 
            titulo="En tiempos de pandemia, nuestro amor propio debe aumentar"
            texto="Veamos un video para descubrir su valor"
            imagen={ imagenes.feliz }
            enlace="/ninos/amor-propio/videos/importancia"
            sonido={ audio }
            rutas={ rutasAmorPropio }
            id={ 7 }
        />
    )
}
