import React from 'react';
import { Videos } from '../../../talleres/Videos';
import imagenes from '../../../../assets/images';
import audio from "../../../../assets/sounds/adultos_amor_propio/video_1.mp3";
import { rutasAmorPropio } from '../rutasAmorPropio'

export const ComoCuidar = () => {
    return (
        <Videos 
            titulo="¿Cómo cuidar nuestra salud mental?"
            texto="Descúbrelo en el siguiente video"
            enlace="/ninos/amor-propio/videos/como-cuidar-salud-mental"
            imagen={ imagenes.feliz }
            sonido={ audio }
            rutas={ rutasAmorPropio }
            id={ 3 }
        />
    )
}
