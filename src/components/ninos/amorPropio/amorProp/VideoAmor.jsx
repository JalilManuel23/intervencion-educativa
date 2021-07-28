import React from 'react';
import { VerVideo } from '../../../talleres/VerVideo';
import { rutasAmorPropio } from '../rutasAmorPropio'

export const VideoAmor = () => {
    return (
        <VerVideo 
            enlaceVideo="https://www.youtube.com/embed/4xflq4Nk44E"
            rutas={ rutasAmorPropio }
            id={ 8 }
        />
    )
}
