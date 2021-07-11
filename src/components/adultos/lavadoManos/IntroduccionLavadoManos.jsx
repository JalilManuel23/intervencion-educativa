import React from 'react';
import imagenes from '../../../assets/images';
import { Presentacion2 } from '../../talleres/Presentacion2';

// CAMBIAR AUDIO
import audioIntro from "../../../assets/sounds/adulto_informacion_covid_19.mp3";

export const IntroduccionLavadoManos = () => {
    return (
        <Presentacion2 
            imagen={ imagenes.lavadoDeManosDos}
            parrafo1= "La higiene de manos es el termino general que se aplica al lavado de manos con agua y jabón, que se realiza en los centros sanitarios para prevenir las infecciones asociadas con la atencion en salud, aunque puede ser realizado con otras substancias antisepticas"
            sonido={ audioIntro }
            enlace="/adultos/lavado-manos/historia"
        />
    )
}
