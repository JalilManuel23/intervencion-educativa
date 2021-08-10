import React from 'react'
import { Videos } from '../../talleres/Videos'
import imagenes from '../../../assets/images';
import audioIntro from "../../../assets/sounds/sabes_como_lavarte_correctamente.mp3";
import { rutasLavadoNinos } from './rutasLavadoNinos';

export const Importancia = () => {
    return (
        <Videos 
            titulo="¿Sabes cómo lavarte las manos correctamente?"
            texto="Descúbrelo en el siguiente video"
            imagen={ imagenes.pregunta }
            sonido={ audioIntro }
            id={ 2 }
            rutas={ rutasLavadoNinos }
        />
    )
}
