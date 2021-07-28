import React from 'react';
import imagenes from '../../../../assets/images';
import audio from "../../../../assets/sounds/adultos_amor_propio/se_refiere.mp3";
import { Presentacion2 } from '../../../talleres/Presentacion2';
import { rutasAmorPropio } from '../rutasAmorPropio';

export const DefinicionSaludMental = () => {
    return (
        <Presentacion2 
            imagen={ imagenes.saludMental }
            parrafo1= "Es el estado de equilibrio que debe existir entre las personas y todo lo que los rodea. El amor propio tiene que ver en cómo pensamos, sentimos y reaccionamos ante momentos de estrés."
            sonido={ audio }
            id={ 1 }
            rutas={ rutasAmorPropio }
        />
    )
}