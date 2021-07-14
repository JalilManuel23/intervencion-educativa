import React from 'react'
import { Videos } from '../../talleres/Videos'
import imagenes from '../../../assets/images';

export const PreparateJugar = () => {
    return (
        <Videos 
            titulo="¡Prepárate para jugar!"
            texto="Juega en el siguiente memorama para conocer algunos otros elementos que pueden formar parte del lavado de manos"
            enlace="/ninos/lavado-manos/memorama-elementos"
            imagen={ imagenes.feliz }
            jugar={true}
        />
    )
}