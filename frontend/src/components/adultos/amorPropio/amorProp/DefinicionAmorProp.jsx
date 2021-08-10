import React from 'react';
import imagenes from '../../../../assets/images';
import audio from "../../../../assets/sounds/adultos_amor_propio/se_refiere.mp3";
import { Presentacion2 } from '../../../talleres/Presentacion2';
import { rutasAmorPropio } from '../rutasAmorPropio';

export const DefinicionAmorProp = () => {
    return (
        <Presentacion2 
            imagen={ imagenes.amorPropio }
            titulo="¿Qué es el amor propio?"
            parrafo1= "Se refiere al aprecio que tiene una persona a si misma. Es la aceptación, el respeto, las percepciones, el valor, los pensamientos positivos y consideraciones que tenemos hacia nosotros mismos y que puede ser apreciado por quienes nos rodean."
            sonido={ audio }
            tipoImagen="completa"
            id={ 6 }
            rutas={ rutasAmorPropio }
        />
    )
}