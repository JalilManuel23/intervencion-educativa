import React from 'react';
import { Videos } from '../../talleres/Videos';
import audioIntro from "../../../assets/sounds/adulto_informacion_covid_19.mp3";

export const PresentacionVideo2 = () => {
    return (
        <Videos 
            titulo="5 momentos del lavado de manos según la OMS"
            texto="Descubre en que consisten en el siguiente vídeo"
            enlace="/adultos/lavado-manos/videos/5-momentos-oms"
            sonido={ audioIntro }
        />
    )
}
