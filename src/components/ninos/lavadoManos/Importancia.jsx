import React from 'react'
import { Videos } from '../../talleres/Videos'
import imagenes from '../../../assets/images';
import audioIntro from "../../../assets/sounds/adulto_informacion_covid_19.mp3";

export const Importancia = () => {
    return (
        <Videos 
            titulo="¿Sabes cómo lavarte las manos correctamente?"
            texto="Descubrelo en el siguiente vídeo"
            enlace="/ninos/lavado-manos/videos/importancia-lavado-manos"
            imagen={ imagenes.pregunta }
            sonido={ audioIntro }
        />
    )
}
