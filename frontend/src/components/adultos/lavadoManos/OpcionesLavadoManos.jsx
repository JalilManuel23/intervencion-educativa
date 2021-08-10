import React from 'react';
import { MenuSeleccion } from '../../talleres/MenuSeleccion/MenuSeleccion';
import imagenes from '../../../assets/images';
import audioIntro from "../../../assets/sounds/adulto_informacion_covid_19.mp3";

export const OpcionesLavadoManos = () => {

    let datos = [
        {
            "texto": "Introducción",
            "imagen": imagenes.uno, 
            "ruta": "/adultos/lavado-manos/introduccion", 
        },
        {
            "texto": "Lavado de manos social",
            "imagen": imagenes.dos, 
            "ruta": "/adultos/lavado-manos/lavado-social"
        },
        {
            "texto": "Elementos necesarios",
            "imagen": imagenes.tres, 
            "ruta": "/adultos/lavado-manos/elementos-necesarios"
        },
        {
            "texto": "Tecnica correcta de lavado",
            "imagen": imagenes.cuatro, 
            "ruta": "/adultos/lavado-manos/tecnica-lavado"
        },
        {
            "texto": "Cuestionario",
            "imagen": imagenes.cinco, 
            "ruta": "/adultos/lavado-manos/introduccion"
        },
    ]

    return (
        <MenuSeleccion 
            datos={ datos }
            sonido={ audioIntro }
        />
    )
}
