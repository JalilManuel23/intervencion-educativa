import React from 'react';
import { VerVideo } from '../../../talleres/VerVideo';
import { rutasAmorPropio } from '../rutasAmorPropio'

export const VideoAmor = () => {
    return (
        <VerVideo 
            enlaceVideo="https://www.youtube.com/embed/HSYhZ9CcLMU"
            rutas={ rutasAmorPropio }
            id={ 8 }
        />
    )
}
