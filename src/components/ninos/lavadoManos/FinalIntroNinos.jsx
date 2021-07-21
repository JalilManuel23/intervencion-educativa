import React from 'react'
import { FinalIntro } from '../../talleres/FinalIntro'
import audioIntro from "../../../assets/sounds/opc-menu.mp3";

export const FinalIntroNinos = () => {
    return (
        <FinalIntro 
            enlace="/ninos/lavado-manos/opciones"
            sonido={ audioIntro }
        />
    )
}
