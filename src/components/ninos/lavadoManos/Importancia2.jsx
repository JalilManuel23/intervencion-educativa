import React from 'react'
import { VerVideo } from '../../talleres/VerVideo'
import { rutasLavadoNinos } from './rutasLavadoNinos'

export const Importancia2 = () => {
    return (
        <VerVideo 
            enlaceVideo="https://www.youtube.com/embed/IrZ_QUh3C4U"
            enlace="/ninos/lavado-manos/introduccion/dia-lavado-manos"
            ninos={true}
            rutas={ rutasLavadoNinos }
            id={ 4 }
        />
    )
}
