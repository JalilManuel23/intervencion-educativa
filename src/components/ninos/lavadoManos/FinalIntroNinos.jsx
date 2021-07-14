import React from 'react'
import { FinalIntro } from '../../talleres/FinalIntro'
import audioIntro from "../../../assets/sounds/adulto_informacion_covid_19.mp3";

export const FinalIntroNinos = () => {
    return (
        <FinalIntro 
            enlace="/ninos/lavado-manos/lavado-social"
            sonido={ audioIntro }
        />
    )
}
