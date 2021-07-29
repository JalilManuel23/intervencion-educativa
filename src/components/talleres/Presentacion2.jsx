import React from 'react';
import './css/estilos.css';
import { usePlayAudio } from "../../hooks/usePlayAudio";
import { setStopAudio } from '../../hooks/setStopAudio';
import { AudioPlayer } from '../general/audioPlayer/AudioPlayer';
import { Control } from '../general/control/Control';

export const Presentacion2 = ({
    imagen,
    tipoImagen,
    parrafo1,
    parrafo2,
    sonido,
    rutas,
    id
}) => {

    let sound = usePlayAudio( sonido );

    const stopAudio = () => { 
        setStopAudio( sound );
    }

    return (
        <>
            <div className="introduccion animate__animated animate__fadeIn">
                <div className="container">
                    <div className="row">
                        {
                            ( tipoImagen !== "completa" ) ?
                                <div className="col-md-3 d-none d-md-flex justify-content-center align-items-center div-img-intro">
                                    <img src={ imagen }
                                        alt="adulto mujer"
                                        className="img-introduccion d-none d-md-block animate__animated animate__bounceInUp"
                                    />
                                </div>
                            :
                            <div className="col-md-3 d-none d-md-flex justify-content-center align-items-end div-img-intro">
                                <img src={ imagen }
                                    alt="adulto mujer"
                                    className="img-introduccion-completa d-none d-md-block animate__animated animate__bounceInUp"
                                />
                            </div>
                        }

                        <div className="col-md-7 col-12 d-flex flex-column align-items-center justify-content-center he-100 animate__animated animate__bounceInUp">
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
                        </div>
                    </div> 
                    <Control 
                        rutas={ rutas }
                        id={ id }
                        stopAudio={ stopAudio }
                    />
                <AudioPlayer sound={ sound } />
                    <AudioPlayer sound={ sound } />
                </div>
            </div>

        </>
    )
}