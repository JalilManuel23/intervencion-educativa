import React from 'react'
import { Videos } from '../../../talleres/Videos'
import imagenes from '../../../../assets/images';
import audioIntro from "../../../../assets/sounds/memorama_lavado-ninos.mp3";
import { rutasAmorPropio } from '../rutasAmorPropio';

export const PreparateJugarAmor = () => {
    return (
        <Videos 
            titulo="¡Prepárate para jugar!"
            texto="Juega en el siguiente memoramacon imagenes relacionadas al amor propio"
            enlace="/ninos/amor-propio/memorama-amor-propio"
            imagen={ imagenes.feliz }
            jugar={true}
            sonido={ audioIntro }
            rutas={ rutasAmorPropio }
            id={ 9 }
        />
    )
}