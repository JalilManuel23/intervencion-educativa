import React, { useState, useEffect } from 'react';
import './quizGame.css';
import { PreguntaRespuestas } from './PreguntaRespuestas';
import { questionsSample } from "./data/sample";
import { juegoFinalizado } from './juegoFinalizado';

export const QuizGame = () => {
    let duracion = 60;
    let cantidadPreguntas = questionsSample.length;

    const [cronometro, setCronometro] = useState( duracion );
    const [numPregunta, setNumPregunta] = useState( 0 );
    const [aciertos, setAciertos] = useState( 0 );
    const [mal, setMal] = useState( 0 );

    useEffect(() => {
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
        }
    }, [ cronometro ]);

    const reiniciarCronometro = () => { 
        setCronometro( duracion );
    }

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
                            reiniciarCronometro={ reiniciarCronometro }
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
