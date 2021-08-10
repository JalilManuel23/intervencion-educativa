import React from 'react';
import './estilos-lavado-manos.css';
import audioIntro from "../../../assets/sounds/opc-menu.mp3";
import { FinalIntro } from '../../talleres/FinalIntro';
import { rutasLavadoAdultos } from './rutasLavadoAdultos'

export const FinalIntroAdultos = () => {
    return (
        <FinalIntro 
            enlace="/adultos/lavado-manos/opciones"
            sonido={ audioIntro }
            rutas={ rutasLavadoAdultos }
            id={ 6 }
        />
    )
}