import React from 'react';
import './css/estilos.css';
import { usePlayAudio } from "../../hooks/usePlayAudio";
import { setStopAudio } from '../../hooks/setStopAudio';
import { AudioPlayer } from '../general/audioPlayer/AudioPlayer';
import { Control } from '../general/control/Control';

export const Videos = ({
    titulo,
    texto,
    imagen,
    jugar,
    sonido,
    rutas,
    id
}) => {

    let sound = usePlayAudio(sonido);
    let textoBtn = (jugar) ? "Jugar" : "Ver video";

    const stopAudio = () => { 
        setStopAudio( sound );
    }

    return (
        <div className="videos">
            <div className="wave"></div>
            <div className="container d-flex flex-column align-items-center justify-content-between">
                <h2 className="titulo-videos mt-5 text-center">{titulo} </h2>
                <p className="texto-videos display-6 mt-2 text-white">{texto} </p>
                {
                    (imagen) &&
                    <img src={imagen} className="img-videos" />
                }
            </div>
            <Control 
                rutas={ rutas }
                id={ id }
                stopAudio={ stopAudio }
            />
            <AudioPlayer sound={sound} />
        </div>
    )
}