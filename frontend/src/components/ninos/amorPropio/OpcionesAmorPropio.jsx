import React from 'react';
import { MenuSeleccion } from '../../talleres/MenuSeleccion/MenuSeleccion';
import imagenes from '../../../assets/images';
import audio from "../../../assets/sounds/adulto_informacion_covid_19.mp3";

export const OpcionesAmorPropio = () => {

    let datos = [
        {
            "texto": "Cuidando nuestra salud mental",
            "imagen": imagenes.uno, 
            "ruta": "/ninos/amor-propio/salud-mental/definicion", 
            "color": "#ff97b0"
        },
        {
            "texto": "Amor propio",
            "imagen": imagenes.dos, 
            "ruta": "/ninos/amor-propio/definicion",
            "color": "#ffb053"
        },
        {
            "texto": "Cuestionario",
            "imagen": imagenes.tres, 
            "ruta": "/ninos/amor-propio/cuestionario",
            "color": "#23d8df"
        }
    ]

    return (
        <MenuSeleccion 
            datos={ datos }
            sonido={ audio }
        />
    )
}
