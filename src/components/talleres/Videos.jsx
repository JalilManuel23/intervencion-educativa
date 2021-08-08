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
    sonido,
    rutas,
    id
}) => {

    let sound = usePlayAudio(sonido);

    const stopAudio = () => { 
        setStopAudio( sound );
    }

    return (
        <div className="videos animate__animated animate__fadeIn">
            <div className="wave"></div>
            <div className="min-vh-100 container d-flex flex-column align-items-center justify-content-around">
                <h2 className="titulo-videos mt-5 text-center">{titulo} </h2>
                {
                    (imagen) ?
                        <>
                            <p className="texto-videos display-6 mt-2 text-white text-center">{texto} </p>
                            <img src={imagen} className="img-videos" />
                        </>
                    :
                        <p className="texto-videos display-6 mt-2 text-muted text-center">{texto} </p>
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