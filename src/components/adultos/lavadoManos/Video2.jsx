import React from 'react';
import { VerVideo } from '../../talleres/VerVideo';
import { rutasLavadoAdultos } from './rutasLavadoAdultos'

export const Video2 = () => {
    return (
        <VerVideo 
            enlaceVideo="https://www.youtube.com/embed/jDF3O_d5Dz4"
            rutas={ rutasLavadoAdultos }
            id={ 11 }
        />
    )
}