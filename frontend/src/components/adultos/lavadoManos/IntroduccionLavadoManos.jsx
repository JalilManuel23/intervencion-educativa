import React from 'react';
import imagenes from '../../../assets/images';
import { Presentacion2 } from '../../talleres/Presentacion2';

// CAMBIAR AUDIO
import audioIntro from "../../../assets/sounds/higiene.mp3";
import { rutasLavadoAdultos } from './rutasLavadoAdultos';

export const IntroduccionLavadoManos = () => {
    return (
        <Presentacion2 
            imagen={ imagenes.lavadoGif}
            parrafo1= "La higiene de manos se refiere al lavado de manos con agua y jabón, que se realiza para prevenir las infecciones asociadas con la atención en salud, aunque puede ser realizado con otros elementos. Es la manera más eficaz conocida para prevenir el contagio por COVID-19."
            sonido={ audioIntro }
            enlace="/adultos/lavado-manos/introduccion/historia"
            id={ 1 }
            rutas={ rutasLavadoAdultos }
        />
    )
}
