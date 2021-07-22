import React from 'react'
import { VerVideo } from '../../talleres/VerVideo'
import { rutasLavadoNinos } from './rutasLavadoNinos';

export const VideoDiaLavado = () => {
    return (
        <VerVideo 
            enlaceVideo="https://www.youtube.com/embed/6BZHGJ5_D5A"
            enlace="/ninos/lavado-manos/introduccion/final-intro"
            ninos={true}
            rutas={ rutasLavadoNinos }
            id={ 6 }
        />
    )
}
