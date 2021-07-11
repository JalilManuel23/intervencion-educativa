import React from 'react';
import './css/estilos.css';
import { Link } from 'react-router-dom';
import { usePlayAudio } from "../../hooks/usePlayAudio";
import { setStopAudio } from '../../hooks/setStopAudio';
import { AudioPlayer } from '../general/audioPlayer/AudioPlayer';

export const Presentacion2 = ({
    imagen,
    parrafo1,
    parrafo2,
    sonido,
    enlace
}) => {

    let sound = usePlayAudio( sonido );

    return (
        <>
            <div className="introduccion animate__animated animate__fadeIn">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 d-none d-md-flex justify-content-center align-items-center div-img-intro">
                            <img src={ imagen }
                                alt="adulto mujer"
                                className="img-introduccion d-none d-md-block"
                            />
                        </div>
                        <div className="col-md-7 col-12 d-flex flex-column align-items-center">
                            <div className="container d-flex flex-column align-items-center justify-content-center">
                                <div className="contenedor-intro my-5 ">
                                    <p className="lh-sm">
                                        { parrafo1 }
                                    </p>
                                    <p className="lh-sm">
                                        { parrafo2 }
                                    </p>
                                </div>
                            </div>
                            <Link
                                to={ enlace }
                                className="seguir-leyendo"
                                onClick={() => {
                                    setStopAudio( sound );
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

        </>
    )
}