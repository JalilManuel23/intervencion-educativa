import React from 'react';
import { Presentacion2 } from '../../talleres/Presentacion2';
import imagenes from '../../../assets/images';
import audioIntro from "../../../assets/sounds/adulto_informacion_covid_19.mp3";

export const LavadoSocial = () => {
    return (
        <Presentacion2 
            imagen={ imagenes.joven }
            tipoImagen="completa"
            parrafo1="Es la remoción mecánica de microorganismos que se relaiza con agua y jabón común, remueve en un 80% la flora transitoria."
            parrafo2="Su objetivo es remover la suciedad. Es parte de la higiene personal."
            enlace="/adultos/lavado-manos/elementos-necesarios"
            sonido={ audioIntro }
        />
    )
}
