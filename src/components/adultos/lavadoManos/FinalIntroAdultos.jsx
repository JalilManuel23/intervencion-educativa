import React from 'react';
import './estilos-lavado-manos.css';
import audioIntro from "../../../assets/sounds/opc-menu.mp3";
import { FinalIntro } from '../../talleres/FinalIntro';

export const FinalIntroAdultos = () => {
    return (
        <FinalIntro 
            enlace="/adultos/lavado-manos/opciones"
            sonido={ audioIntro }
        />
    )
}