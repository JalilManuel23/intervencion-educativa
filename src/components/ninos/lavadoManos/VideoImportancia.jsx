import React from 'react'
import { VerVideo } from '../../talleres/VerVideo'
import { rutasLavadoNinos } from './rutasLavadoNinos'

export const VideoImportancia = () => {
    return (
        <VerVideo 
            enlaceVideo="https://www.youtube.com/embed/J6HLlOSJuGM"
            enlace="/ninos/lavado-manos/videos/importancia-lavado-manos2"
            ninos={true}
            rutas={ rutasLavadoNinos }
            id={ 3 }
        />
    )
}
