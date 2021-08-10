import React from 'react';
import { Videos } from '../../talleres/Videos';
import audioIntro from "../../../assets/sounds/medida_prevencion.mp3";
import { rutasLavadoAdultos } from './rutasLavadoAdultos'

export const PresentacionVideo1 = () => {
    return (
        <Videos 
            titulo="¿Por qué esta medida de prevención es tan importante?"
            texto="Descúbrelo en el siguiente video"
            enlace="/adultos/lavado-manos/videos/importancia-lavado-manos"
            sonido={ audioIntro }
            rutas={ rutasLavadoAdultos }
            id={ 3 }
        />
    )
}
