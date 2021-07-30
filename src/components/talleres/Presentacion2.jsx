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
                        {
                            ( tipoImagen !== "completa" ) ?                                    
                                <div className="d-flex flex-column align-items-center justify-content-around 
                                    flex-xl-row
                                min-vh-100">
                                {/* <div className="d-flex justify-content-between align-items-center min-vh-100"> */}
                                    <img src={ imagen }
                                        alt="adulto mujer"
                                        className="img-introduccion d-md-block animate__animated animate__bounceInUp mt-5"
                                    /> 
                                    <div className="contenedor-intro my-5">
                                        <p className="lh-sm">
                                            { parrafo1 }
                                        </p>
                                        <p className="lh-sm">
                                            { parrafo2 }
                                        </p>
                                    </div>
                                </div>
                            :                            
                            <div className="d-flex flex-column align-items-center justify-content-between min-vh-100">
                                <div className="contenedor-intro-completa my-5 ">
                                    <p className="lh-sm">
                                        { parrafo1 }
                                    </p>
                                    <p className="lh-sm">
                                        { parrafo2 }
                                    </p>
                                </div>
                                    
                                <img src={ imagen }
                                    alt="adulto mujer"
                                    className="img-introduccion-completa d-md-block animate__animated animate__bounceInUp"
                                />                              
                            </div>
                        }
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