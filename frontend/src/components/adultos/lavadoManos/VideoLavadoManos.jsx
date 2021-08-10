import React from 'react'
import { VerVideo } from '../../talleres/VerVideo'
import { rutasLavadoAdultos } from './rutasLavadoAdultos'

export const VideoLavadoManos = () => {
    return (
        <VerVideo 
            enlaceVideo="https://www.youtube.com/embed/M-i4IBoEX1Y"
            rutas={ rutasLavadoAdultos }
            id={ 13 }
        />
    )
}