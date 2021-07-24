import React from 'react';
import { Videos } from '../../../talleres/Videos';
import audio from "../../../../assets/sounds/medida_prevencion.mp3";
import { rutasAmorPropio } from '../rutasAmorPropio'

export const ComoCuidar = () => {
    return (
        <Videos 
            titulo="¿Cómo cuidar nuestra salud mental?"
            texto="Descúbrelo en el siguiente video"
            enlace="/adultos/amor-propio/videos/como-cuidar-salud-mental"
            sonido={ audio }
            rutas={ rutasAmorPropio }
            id={ 3 }
        />
    )
}
