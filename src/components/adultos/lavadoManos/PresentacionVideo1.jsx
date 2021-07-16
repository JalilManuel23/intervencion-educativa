import React from 'react';
import { Videos } from '../../talleres/Videos';
import audioIntro from "../../../assets/sounds/prevencion.mp3";

export const PresentacionVideo1 = () => {
    return (
        <Videos 
            titulo="¿Por qué esta medida de prevención es tan importante?"
            texto="Descubrelo en el siguiente vídeo"
            enlace="/adultos/lavado-manos/videos/importancia-lavado-manos"
            sonido={ audioIntro }
        />
    )
}
