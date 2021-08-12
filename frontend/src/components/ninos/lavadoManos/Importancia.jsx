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
            fuente="Fuente: https://lh3.googleusercontent.com/a8nGfpU1OVkq-KoU_6omACccUg1Ak5w9xNDAnoK8R1cuH03Q-Kqe5GIsgRdy6vSTIHi0pQ=s85"
            id={ 2 }
            rutas={ rutasLavadoNinos }
        />
    )
}
