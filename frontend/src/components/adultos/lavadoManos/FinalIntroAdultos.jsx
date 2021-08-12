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
            fuente="https://lh3.googleusercontent.com/-N9ACTvJOxuS3dn8-8C7EgLROzw4x5FXYHnb75es9-Oi6O32B7xsvlhzhOkH79VrLv_ujJA=s101"
            id={ 6 }
        />
    )
}