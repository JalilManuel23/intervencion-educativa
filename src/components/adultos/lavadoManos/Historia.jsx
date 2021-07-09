import React from 'react';
import imagenes from '../../../assets/images';
import { Presentacion3 } from '../../talleres/Presentacion3'

export const Historia = () => {
    return (
        <Presentacion3  
            imagen={ imagenes.historia }
            parrafo="Desde el año 1846, el medico Hungaro Ignaz Semmelweis propuso el lavado de manos al personal de salud."
            enlace="/adultos/lavado-manos/presentacion-video1"
        />
    )
}
