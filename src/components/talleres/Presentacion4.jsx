import React from 'react';
import './css/estilos.css';
import { Link } from 'react-router-dom';
import { usePlayAudio } from "../../hooks/usePlayAudio";
import { setStopAudio } from '../../hooks/setStopAudio';
import { AudioPlayer } from '../general/audioPlayer/AudioPlayer';

export const Presentacion4 = ({
    imagen,
    parrafo,
    sonido,
    enlace
}) => {
    let sound = usePlayAudio( sonido );
    return (
        <div className="presentacion-4 animate__animated animate__fadeIn">
            <div className="container">
                    <div className="container-presentacion4 row d-flex justify-content-center align-items-center">
                        <div className="col-md-7 col-12 d-flex flex-column align-items-center">
                            <div className="d-flex flex-column align-items-center justify-content-center">
                                <div className="contenedor-intro my-5 ">
                                    <p className="lh-sm mb-4 ">
                                        { parrafo }
                                    </p>
                                    <img src={ imagen } /> 
                                </div>
                            </div>
                            <Link
                                to={ enlace }
                                className="seguir-leyendo"
                                onClick={() => {
                                    setStopAudio(sound);
                                }
                                }
                            >
                                Seguir leyendo >>
                            </Link>
                        </div>
                    </div>
                    <AudioPlayer sound={ sound } />
                </div>
        </div>
    )
}
