import React from 'react';
import imagenes from '../../../../assets/images';
import audio from "../../../../assets/sounds/concepto-amor-propio.mp3";
import { Presentacion2 } from '../../../talleres/Presentacion2';
import { rutasAmorPropio } from '../rutasAmorPropio';

export const DefinicionAmorProp = () => {
    return (
        <Presentacion2 
            imagen={ imagenes.autoestima2 }
            titulo="¿Qué es el amor propio?"
            parrafo1= "Es el cariño que nos tenemos nosotros mismos. Es aceptarnos, respetarnos y querernos, para que así los demás también nos quieran de esa forma."
            sonido={ audio }
            id={ 6 }
            rutas={ rutasAmorPropio }
        />
    )
}