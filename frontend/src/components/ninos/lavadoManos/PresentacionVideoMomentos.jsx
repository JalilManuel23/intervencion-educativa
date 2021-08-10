import React from 'react';
import { Videos } from '../../talleres/Videos';
import imagenes from '../../../assets/images';
import audioIntro from "../../../assets/sounds/5-momentos.mp3";

export const PresentacionVideoMomentos = () => {
    return (
        <Videos 
            titulo="5 momentos de lavado de manos de la OMS"
            texto="Descubre en qué consisten en el siguiente video"
            enlace="/ninos/lavado-manos/videos/5-momentos-oms"
            imagen={imagenes.pregunta}
            sonido={ audioIntro }
        />
    )
}
