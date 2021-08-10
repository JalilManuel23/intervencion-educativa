import React from 'react'
import { MenuSeleccion } from '../../talleres/MenuSeleccion/MenuSeleccion'
import imagenes from '../../../assets/images';
import audioIntro from "../../../assets/sounds/adulto_informacion_covid_19.mp3";

export const Opciones = () => {
    let datos = [
        {
            "texto": "Introducción",
            "imagen": imagenes.uno, 
            "ruta": "/ninos/lavado-manos/introduccion", 
            "color": "#ff97b0"
        },
        {
            "texto": "Lavado de manos social",
            "imagen": imagenes.dos, 
            "ruta": "/ninos/lavado-manos/lavado-social",
            "color": "#ffb053"
        },
        {
            "texto": "Elementos necesarios",
            "imagen": imagenes.tres, 
            "ruta": "/ninos/lavado-manos/elementos-necesarios",
            "color": "#23d8df"
        },
        {
            "texto": "Tecnica correcta de lavado",
            "imagen": imagenes.cuatro, 
            "ruta": "/ninos/lavado-manos/tecnica-lavado",
            "color": "#d87dc3"
        },
        {
            "texto": "Cuestionario",
            "imagen": imagenes.cinco, 
            "ruta": "/ninos/lavado-manos/introduccion",
            "color": "#f9d541"
        },
    ]
    
    return (
        <MenuSeleccion datos={ datos } sonido={ audioIntro } />
    )
}
