import React from 'react';
import { useState } from 'react';

export const Carta = ({ info }) => {
    let { idRespuesta, data, img } = info;

    const [active, setActive] = useState( false );

    return (
        <div 
            className="carta"
            onClick={ () => setActive( !active ) }                   
        >
            {
                ( active ) &&
                    <div className="info  animate__animated animate__zoomIn d-flex flex-column justify-content-center align-items-center">
                        { data }
                        <img src={ img } className="img-carta" alt={ data }/>
                    </div>    
            }
        </div>
    );
}
