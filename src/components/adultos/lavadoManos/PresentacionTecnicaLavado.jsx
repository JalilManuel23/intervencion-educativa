import React from 'react';
import { Videos } from '../../talleres/Videos';
import audioIntro from "../../../assets/sounds/video_sabes_como_lavarte.mp3";

export const PresentacionTecnicaLavado = () => {
    return (
        <Videos 
            titulo="¿Sabes cómo lavarte las manos correctamente?"
            texto="Descubrelo en el siguiente vídeo"
            enlace="/adultos/lavado-manos/videos/tecnica-lavado-manos"
            sonido={ audioIntro }
        />
    )
}
