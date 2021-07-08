import React, { useState, useEffect } from 'react';
import './quizGame.css';
import { PreguntaRespuestas } from './PreguntaRespuestas';
import { questionsSample } from "./data/sample";
import { juegoFinalizado } from './utils/juegoFinalizado';

export const QuizGame = () => {
    let duracion = 10;
    let cantidadPreguntas = questionsSample.length;

    const [cronometro, setCronometro] = useState( duracion );
    const [numPregunta, setNumPregunta] = useState( 0 );
    const [aciertos, setAciertos] = useState( 0 );
    const [mal, setMal] = useState( 0 );

    useEffect(() => {
        console.log( cronometro );
        if( cronometro > 0 ){
            setTimeout( () => {
                setCronometro( cronometro - 1 );
            }, 1000)
        } else {
            if(( numPregunta + 1 ) < cantidadPreguntas ) {
                setNumPregunta( numPregunta + 1 );
                setCronometro( duracion );   
            } else {
                juegoFinalizado();
            };
            setMal( mal + 1 );
        }
    }, [ cronometro ]);

    return (
        <div className="juego-preguntas">
            <div className="tiempo-imgs">
                <p className="tiempo">{ cronometro }</p>
                <div className="aciertos-mal">
                    <p className="text-success">Aciertos: { aciertos }</p>
                    <p className="text-danger">Incorrectas: { mal }</p>
                </div>
            </div>
            <div className="preguntas-titulo">
                <h4>LAVADO DE MANOS</h4>
            </div>
            <div className="preguntas-container">
                <div className="container secc-preguntas">
                    <div className="container-preguntas">
                        <PreguntaRespuestas 
                            numPregunta={ numPregunta } 
                            setNumPregunta={ setNumPregunta }
                            setAciertos={ setAciertos }
                            setMal={ setMal }
                            setCronometro={ setCronometro }
                            duracion={ duracion }
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
