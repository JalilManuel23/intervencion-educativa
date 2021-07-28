import React from 'react';
import imagenes from '../../../../assets/images';
import audio from "../../../../assets/sounds/adultos_amor_propio/se_refiere.mp3";
import { Presentacion2 } from '../../../talleres/Presentacion2';
import { rutasAmorPropio } from '../rutasAmorPropio';

export const DefinicionAmorProp = () => {
    return (
        <Presentacion2 
            imagen={ imagenes.joven }
            parrafo1= "Se refiere al aprecio que nos tenemos nosotros mismos. Es aceptarnos, respetarnos y querernos, para que así los demás también nos aprecien."
            sonido={ audio }
            tipoImagen="completa"
            id={ 6 }
            rutas={ rutasAmorPropio }
        />
    )
}