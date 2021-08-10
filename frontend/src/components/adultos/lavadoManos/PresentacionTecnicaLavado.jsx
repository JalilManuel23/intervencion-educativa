import React from 'react';
import { Videos } from '../../talleres/Videos';
import audioIntro from "../../../assets/sounds/sabes_como_lavarte.mp3";
import { rutasLavadoAdultos } from './rutasLavadoAdultos'

export const PresentacionTecnicaLavado = () => {
    return (
        <Videos 
            titulo="¿Sabes cómo lavarte las manos correctamente?"
            texto="Descúbrelo en el siguiente video"
            enlace="/adultos/lavado-manos/videos/tecnica-lavado-manos"
            sonido={ audioIntro }
            rutas={ rutasLavadoAdultos }
            id={ 12 }
        />
    )
}
