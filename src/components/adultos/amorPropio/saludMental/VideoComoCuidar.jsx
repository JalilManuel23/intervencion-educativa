import React from 'react';
import { VerVideo } from '../../../talleres/VerVideo';
import { rutasAmorPropio } from '../rutasAmorPropio'

export const VideoComoCuidar = () => {
    return (
        <VerVideo 
            enlaceVideo="https://www.youtube.com/embed/CRKD4Hu0foc"
            rutas={ rutasAmorPropio }
            id={ 4 }
        />
    )
}
