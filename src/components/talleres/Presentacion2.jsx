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
    titulo,
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
                {
                    ( titulo ) &&
                        <div className="presen2-titulo d-flex justify-content-center align-items-center">
                            <h2>{ titulo }</h2>
                        </div>
                }
                <div className="container">


                        {
                            ( tipoImagen !== "completa" ) ?                                    
                                <div className="d-flex flex-column align-items-center justify-content-around 
                                    flex-xl-row
                                min-vh-95">
                                    <img src={ imagen }
                                        alt="adulto mujer"
                                        className="img-introduccion d-md-block animate__animated animate__bounceInUp mt-5"
                                    /> 
                                    <div className="contenedor-intro my-5 animate__animated animate__bounceInUp">
                                        <p className="lh-sm">
                                            { parrafo1 }
                                        </p>
                                        <p className="lh-sm">
                                            { parrafo2 }
                                        </p>
                                    </div>
                                </div>
                            :                            
                            <div className="d-flex flex-column align-items-center justify-content-between min-vh-95">
                                <div className="contenedor-intro-completa my-5 animate__animated animate__bounceInUp">
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
                </div>
            </div>

        </>
    )
}