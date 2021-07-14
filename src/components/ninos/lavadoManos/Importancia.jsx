import React from 'react'
import { Videos } from '../../talleres/Videos'
import imagenes from '../../../assets/images';

export const Importancia = () => {
    return (
        <Videos 
            titulo="¿Sabes cómo lavarte las manos correctamente?"
            texto="Descubrelo en el siguiente vídeo"
            enlace="/ninos/lavado-manos/videos/importancia-lavado-manos"
            imagen={ imagenes.pregunta }
        />
    )
}
