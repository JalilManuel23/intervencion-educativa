import React from 'react';
import { useState } from 'react';

export const Carta = ({ info, setSelectedCards, isActive }) => {
    let { idRespuesta, data, img } = info;

    const [active, setActive] = useState( isActive );

    // console.log( active );

    return (
        <div 
            className="carta"    
            onClick={ () => {
                setActive( !active );
                setSelectedCards( selectedCards => [ ...selectedCards, idRespuesta ]);
            }}        
        >
            {
                ( active ) ?
                    <div className="info animate__animated animate__zoomIn d-flex flex-column justify-content-center align-items-center">
                        { data }
                        <img src={ img } className="img-carta" alt={ data }/>
                    </div>  
                : console.log('voltear cartas')
            }
        </div>
    );
}
