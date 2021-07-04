import React from 'react';
import './quizGame.css';
import { PreguntaRespuestas } from './PreguntaRespuestas';

export const QuizGame = () => {
    return (
        <div className="juego-preguntas">
            <div className="tiempo-imgs">
                <p className="tiempo">01:00</p>
                <div className="aciertos-mal">
                    <p className="text-success">Aciertos: 5</p>
                    <p className="text-danger">Incorrectas: 2</p>
                </div>
            </div>
            <div className="preguntas-titulo">
                <h4>LAVADO DE MANOS</h4>
            </div>
            <div className="preguntas-container">
                <div className="container secc-preguntas">
                    <div className="container-preguntas">
                        <PreguntaRespuestas />
                    </div>
                </div>
            </div>
        </div>
    )
}
