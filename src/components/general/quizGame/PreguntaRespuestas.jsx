import React, { useState } from 'react';
import { questionsSample } from "./data/sample";
import { juegoFinalizado } from './juegoFinalizado';

export const PreguntaRespuestas = (
    { 
        numPregunta, 
        setNumPregunta,
        setAciertos,
        setMal,
        reiniciarCronometro 
    }
) => {
    
    let { pregunta, respuestas } = questionsSample[ numPregunta ];

    const verificarRespuesta = ( key ) => { 
        if( ( numPregunta + 1 ) < questionsSample.length ) {

            ( key === 'correcta' ) 
                ?
                    setAciertos( aciertos => aciertos + 1 )
                :
                    setMal( mal => mal + 1 )

            setTimeout(() => {
                reiniciarCronometro();
                setNumPregunta( numPregunta + 1 );
            }, 1000);
        } else {
            juegoFinalizado();
        }
    }

    

    return (
        <>
            <h5 className="pregunta">{ pregunta }</h5>
            <div className="respuestas">
                {
                    Object.keys( respuestas ).map( key => {
                        return(
                            <p 
                                key={ key } 
                                className='respuesta'
                                onClick={ () => verificarRespuesta( key ) }
                            >
                                { respuestas[ key ] }
                            </p>
                        )
                    })
                }
            </div>
        </>
    )
}
