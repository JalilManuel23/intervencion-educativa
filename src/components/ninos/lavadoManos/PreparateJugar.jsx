import React from 'react'
import { Videos } from '../../talleres/Videos'
import imagenes from '../../../assets/images';
import audioIntro from "../../../assets/sounds/adulto_informacion_covid_19.mp3";

export const PreparateJugar = () => {
    return (
        <Videos 
            titulo="¡Prepárate para jugar!"
            texto="Juega en el siguiente memorama para conocer algunos otros elementos que pueden formar parte del lavado de manos"
            enlace="/ninos/lavado-manos/memorama-elementos"
            imagen={ imagenes.feliz }
            jugar={true}
            sonido={ audioIntro }
        />
    )
}