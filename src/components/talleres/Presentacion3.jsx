import React from 'react';
import './css/estilos.css';
import { usePlayAudio } from "../../hooks/usePlayAudio";
import { setStopAudio } from '../../hooks/setStopAudio';
import { AudioPlayer } from '../general/audioPlayer/AudioPlayer';
import { Control } from '../general/control/Control';

export const Presentacion3 = ({
    titulo,
    imagen,
    imagen2,
    imagen3,
    parrafo,
    sonido,
    rutas,
    id
}) => {

    let sound = usePlayAudio( sonido );

    const stopAudio = () => { 
        setStopAudio( sound );
    }

    return (
        <div className="presentacion-3 animate__animated animate__fadeIn">
            <div className="p3-container container d-flex flex-column align-items-center justify-content-center h-100">
                <h1 className="titulo-rect">{ titulo }</h1>
                <div className="d-flex flex-column justify-content-around mt-3">    
                    <p className="parrafo-historia mb-3">
                        { parrafo }
                    </p>
                
                    <div className="d-flex justify-content-between">
                        <img src={ imagen } className="img-historia" />
                        <img src={ imagen2 } className="img-historia" />
                        <img src={ imagen3 } className="img-historia" />
                    </div>
                </div>
                <AudioPlayer sound={ sound } />
            </div>
            <Control 
                rutas={ rutas }
                id={ id }
                stopAudio={ stopAudio }
            />
        </div>
    )
}