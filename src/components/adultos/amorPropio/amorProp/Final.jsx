import React from 'react';
import imagenes from '../../../../assets/images';
import { Presentacion5 } from '../../../talleres/Presentacion5';
import audioIntro from "../../../../assets/sounds/adultos_amor_propio/despedida.mp3";
import { rutasAmorPropio } from '../rutasAmorPropio';

export const Final = () => {
    return (
        <Presentacion5 
            imagen={ imagenes.adultos }
            parrafo="¡No lo olvides! Tener amor propio nos protegerá de la pandemia pues nos motivará a cuidarnos y seguir las medidas de prevención. ¡ÁMATE MUCHO!"
            sonido={ audioIntro }
            rutas={ rutasAmorPropio }
            id={ 11 }
        />
    )
}