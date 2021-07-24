import React from 'react';
import { MenuSeleccion } from '../../talleres/MenuSeleccion/MenuSeleccion';
import imagenes from '../../../assets/images';
import audio from "../../../assets/sounds/adulto_informacion_covid_19.mp3";

export const OpcionesAmorPropio = () => {

    let datos = [
        {
            "texto": "Cuidando nuestra salud mental",
            "imagen": imagenes.uno, 
            "ruta": "/adultos/amor-propio/salud-mental/definicion", 
        },
        {
            "texto": "Amor propio",
            "imagen": imagenes.dos, 
            "ruta": "/adultos/amor-propio/definicion"
        },
        {
            "texto": "Cuestionario",
            "imagen": imagenes.tres, 
            "ruta": "/adultos/amor-propio/cuestionario"
        }
    ]

    return (
        <MenuSeleccion 
            datos={ datos }
            sonido={ audio }
        />
    )
}
