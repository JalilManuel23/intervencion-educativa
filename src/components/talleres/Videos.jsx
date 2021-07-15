import React from 'react';
import { Link } from 'react-router-dom';
import './css/estilos.css';
import { usePlayAudio } from "../../hooks/usePlayAudio";
import { setStopAudio } from '../../hooks/setStopAudio';
import { AudioPlayer } from '../general/audioPlayer/AudioPlayer';

export const Videos = ({
    titulo,
    texto,
    enlace,
    imagen,
    jugar,
    sonido
}) => {

    let sound = usePlayAudio(sonido);
    let textoBtn = (jugar) ? "Jugar" : "Ver video";

    return (
        <div className="videos">
            <div className="wave"></div>
            <div className="container d-flex flex-column align-items-center justify-content-between">
                <h2 className="titulo-videos mt-5 text-center">{titulo} </h2>
                <p className="display-6 mt-2 text-white">{texto} </p>
                {
                    (imagen) &&
                    <img src={imagen} />
                }
                <div class="d-grid gap-2 col-6 mx-auto">
                    <Link
                        className="btn btn-warning p-2  text-white btn-lg mt-5"
                        to={enlace}
                        onClick={
                            () => {
                                setStopAudio(sound);
                            }
                        }
                    >
                        <span className="display-6">{textoBtn}</span>
                    </Link>
                </div>
            </div>
            <AudioPlayer sound={sound} />
        </div>
    )
}