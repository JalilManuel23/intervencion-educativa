import React from 'react'
import { VideoDoble } from '../../talleres/VideoDoble'
import { rutasLavadoNinos } from './rutasLavadoNinos';

export const Videos = () => {
    return (
        <VideoDoble 
            titulo="Aprende más con los siguientes videos 😁"
            enlace="/ninos/lavado-manos/opciones"
            enlace1='https://www.youtube.com/embed/cYvspXZueSU'
            enlace2='https://www.youtube.com/embed/e0pecj7ZCcQ'
            id={ 15 }
            rutas={ rutasLavadoNinos }
        />
    )
}
