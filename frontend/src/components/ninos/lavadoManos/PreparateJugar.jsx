import React from 'react'
import { Videos } from '../../talleres/Videos'
import imagenes from '../../../assets/images';
import audioIntro from "../../../assets/sounds/memorama_lavado-ninos.mp3";
import { rutasLavadoNinos } from './rutasLavadoNinos';

export const PreparateJugar = () => {
    return (
        <Videos 
            titulo="¡Prepárate para jugar!"
            texto="Juega en el siguiente memorama para conocer algunos otros elementos que pueden formar parte del lavado de manos"
            enlace="/ninos/lavado-manos/memorama-elementos"
            imagen={ imagenes.feliz }
            jugar={true}
            sonido={ audioIntro }
            rutas={ rutasLavadoNinos }
            fuente="https://i.pinimg.com/736x/56/a1/df/56a1df62056f1c7f5289a2e14d7b3215.jpg"
            id={ 12 }
        />
    )
}