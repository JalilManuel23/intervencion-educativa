import React from 'react';
import './estilos-lavado-manos.css';
import audioIntro from "../../../assets/sounds/adulto_informacion_covid_19.mp3";
import { FinalIntro } from '../../talleres/FinalIntro';

export const FinalIntroAdultos = () => {
    return (
        <FinalIntro 
            enlace="/adultos/lavado-manos/lavado-social"
            sonido={ audioIntro }
        />
    )
}