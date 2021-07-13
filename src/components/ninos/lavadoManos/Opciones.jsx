import React from 'react'
import { MenuSeleccion } from '../../talleres/MenuSeleccion/MenuSeleccion'
import imagenes from '../../../assets/images';

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
            "texto": "5 momentos del lavado de manos",
            "imagen": imagenes.cuatro,
            "ruta": "/ninos/lavado-manos/videos/5-momentos-oms",
            "color": "#7bff5e"
        },
        {
            "texto": "Tecnica correcta de lavado",
            "imagen": imagenes.cinco, 
            "ruta": "/ninos/lavado-manos/tecnica-lavado",
            "color": "#d87dc3"
        },
        {
            "texto": "Cuestionario",
            "imagen": imagenes.seis, 
            "ruta": "/ninos/lavado-manos/introduccion",
            "color": "#f9d541"
        },
    ]
    
    return (
        <MenuSeleccion datos={ datos } />
    )
}
