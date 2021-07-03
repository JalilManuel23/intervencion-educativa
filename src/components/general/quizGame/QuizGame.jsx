import React from 'react';
import './quizGame.css';

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
                        <h5 className="pregunta">¿Pregunta ....?</h5>
                        <div className="respuestas">
                            <p className="respuesta">Respuesta 1</p>
                            <p className="respuesta">Respuesta 2</p>
                            <p className="respuesta">Respuesta 3</p>
                            <p className="respuesta">Respuesta 4</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
