import React from 'react';
import { VerVideo } from '../../talleres/VerVideo';
import { rutasLavadoAdultos } from './rutasLavadoAdultos'

export const Video1 = () => {
    return (
        <VerVideo 
            enlaceVideo="https://www.youtube.com/embed/XvN6Z9BCM_E"
            enlace="/adultos/lavado-manos/introduccion/dia-lavado-manos"
            rutas={ rutasLavadoAdultos }
            id={ 4 }
        />
    )
}