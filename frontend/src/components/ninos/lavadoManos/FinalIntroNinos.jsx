import React from 'react'
import { FinalIntro } from '../../talleres/FinalIntro'
import audioIntro from "../../../assets/sounds/opc-menu.mp3";
import { rutasLavadoNinos } from './rutasLavadoNinos';

export const FinalIntroNinos = () => {
    return (
        <FinalIntro 
            enlace="/ninos/lavado-manos/opciones"
            sonido={ audioIntro }
            fuente="https://lh3.googleusercontent.com/-N9ACTvJOxuS3dn8-8C7EgLROzw4x5FXYHnb75es9-Oi6O32B7xsvlhzhOkH79VrLv_ujJA=s101"
            id={ 7 }
            rutas={ rutasLavadoNinos }
        />
    )
}
