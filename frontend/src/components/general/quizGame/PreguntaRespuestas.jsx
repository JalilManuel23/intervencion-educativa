import React, { useState } from 'react';
import { questionsSample } from "./data/sample";
import { juegoFinalizado } from './utils/juegoFinalizado';
import { bienMal } from './utils/bienMal';

import { playAudio } from "../../../hooks/playAudio";
import audioBien from "../../../assets/sounds/bien.mp3";
import audioMal from "../../../assets/sounds/mal.mp3";
import audioGanar from "../../../assets/sounds/ganar.mp3";

export const PreguntaRespuestas = (
    { 
        numPregunta, 
        setNumPregunta,
        setAciertos,
        setMal,
        setCronometro,
        duracion
    }
) => {
    let { pregunta, respuestas } = questionsSample[ numPregunta ];

    const verificarRespuesta = ( key ) => { 
        if( ( numPregunta + 1 ) < questionsSample.length ) {

            if( key === 'correcta' ) {
                setAciertos( aciertos => aciertos + 1 );
                bienMal( true );
                playAudio( audioBien );
            } else {
                setMal( mal => mal + 1 );
                bienMal( false );
                playAudio( audioMal );
            }

            setCronometro( duracion );
            setNumPregunta( numPregunta + 1 );
            // setTimeout(() => {
            // }, 1000);
        } else {
            playAudio( audioGanar );
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
