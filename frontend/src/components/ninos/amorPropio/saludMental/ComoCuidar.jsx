import React from 'react';
import { Videos } from '../../../talleres/Videos';
import imagenes from '../../../../assets/images';
import audio from "../../../../assets/sounds/audio_faltante.mp3";
import { rutasAmorPropio } from '../rutasAmorPropio'

export const ComoCuidar = () => {
    return (
        <Videos 
            titulo="¿Cómo cuidar nuestra salud mental?"
            texto="Descúbrelo a continuación"
            enlace="/ninos/amor-propio/videos/como-cuidar-salud-mental"
            fuente="2wCEAAkGBxAQEA4QEBAQDw8QEBEQEA4REBEOERARFxIYGBYXFxYZHiwiGRsnHBYXIzMlJystMTAyGSI2OzYuOiovMC0BCwsLDw4PHBERHDEoIicxLzEvLy8vLzEtLy8vLy8vMC8vLy8vLy8vLy8vLy8vLy8vLS8vLy8vLy8vLy8vLy8vL"
            imagen={ imagenes.feliz }
            sonido={ audio }
            rutas={ rutasAmorPropio }
            id={ 3 }
        />
    )
}
